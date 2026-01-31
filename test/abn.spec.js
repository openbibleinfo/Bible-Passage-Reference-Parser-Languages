"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/abn.js";

describe("Localized book Gen (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (abn)", () => {
		expect(p.parse("Emiighom 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Emi 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (abn)", () => {
		expect(p.parse("Ẹḍua 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (abn)", () => {
		expect(p.parse("Lịvitikos 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lịv 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (abn)", () => {
		expect(p.parse("Igbiighi 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Igb 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (abn)", () => {
		expect(p.parse("Ịkunuma 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ịkun 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (abn)", () => {
		expect(p.parse("Ogonanami Phọ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ogon 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (abn)", () => {
		expect(p.parse("Dutoronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (abn)", () => {
		expect(p.parse("Josua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (abn)", () => {
		expect(p.parse("Bụo Ịiruen 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ịir 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (abn)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (abn)", () => {
		expect(p.parse("Azaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Azay 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (abn)", () => {
		expect(p.parse("1 Sạmuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sạm 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sạmuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sạm 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (abn)", () => {
		expect(p.parse("2 Sạmuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sạm 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sạmuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sạm 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (abn)", () => {
		expect(p.parse("1 Ạbudaam 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ạbud 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ạbudaam 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ạbud 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (abn)", () => {
		expect(p.parse("2 Ạbudaam 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ạbud 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ạbudaam 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ạbud 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (abn)", () => {
		expect(p.parse("1 Krọnikuls 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krọ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Krọnikuls 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Krọ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (abn)", () => {
		expect(p.parse("2 Krọnikuls 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krọ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Krọnikuls 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Krọ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (abn)", () => {
		expect(p.parse("Ẹzra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (abn)", () => {
		expect(p.parse("Nehemaya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehe 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (abn)", () => {
		expect(p.parse("Esta 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (abn)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (abn)", () => {
		expect(p.parse("Asidogh 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Asid 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (abn)", () => {
		expect(p.parse("Ọtughemia Phọ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ọtu 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (abn)", () => {
		expect(p.parse("Ạḍuor Ạsuor 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ạḍuo 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (abn)", () => {
		expect(p.parse("Ạsuor 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ạsuo 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (abn)", () => {
		expect(p.parse("Jerimaya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (abn)", () => {
		expect(p.parse("Izikiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Izik 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (abn)", () => {
		expect(p.parse("Dạniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dạn 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (abn)", () => {
		expect(p.parse("Hosia 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (abn)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (abn)", () => {
		expect(p.parse("Ẹmos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (abn)", () => {
		expect(p.parse("Obadaya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (abn)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (abn)", () => {
		expect(p.parse("Maika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Maik 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (abn)", () => {
		expect(p.parse("Nẹhum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nẹhu 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (abn)", () => {
		expect(p.parse("Hạbakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hạb 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (abn)", () => {
		expect(p.parse("Zẹfanaya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zẹf 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (abn)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (abn)", () => {
		expect(p.parse("Zẹkaraya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zẹk 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (abn)", () => {
		expect(p.parse("Malakai 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (abn)", () => {
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (abn)", () => {
		expect(p.parse("Mạk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (abn)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (abn)", () => {
		expect(p.parse("1 Jọn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jọn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (abn)", () => {
		expect(p.parse("2 Jọn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jọn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (abn)", () => {
		expect(p.parse("3 Jọn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jọn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (abn)", () => {
		expect(p.parse("Jọn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (abn)", () => {
		expect(p.parse("Iiḍighi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Iiḍ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (abn)", () => {
		expect(p.parse("Bụo aRom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (abn)", () => {
		expect(p.parse("1 Bụo ạKorint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kọr 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bụo ạKorint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kọr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (abn)", () => {
		expect(p.parse("2 Bụo ạKorint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kọr 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bụo ạKorint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kọr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (abn)", () => {
		expect(p.parse("Bụo ạKolosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kọl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (abn)", () => {
		expect(p.parse("Bụo aGaletia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (abn)", () => {
		expect(p.parse("Bụo ạEfesos 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ẹfe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (abn)", () => {
		expect(p.parse("Bụo aFilipai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (abn)", () => {
		expect(p.parse("1 Bụo ạTesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tẹs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Bụo ạTesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tẹs 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (abn)", () => {
		expect(p.parse("2 Bụo ạTesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tẹs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Bụo ạTesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tẹs 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (abn)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (abn)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (abn)", () => {
		expect(p.parse("Tạitos 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tạit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (abn)", () => {
		expect(p.parse("Fạilimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fạil 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (abn)", () => {
		expect(p.parse("Bụo aHibru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (abn)", () => {
		expect(p.parse("Jems 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (abn)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (abn)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (abn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (abn)", () => {
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nbl.js";

describe("Localized book Gen (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (nbl)", () => {
		expect(p.parse("kuGenesisi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ugenesisi 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (nbl)", () => {
		expect(p.parse("ku-Eksodusi 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("U-Eksodusi 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (nbl)", () => {
		expect(p.parse("kuLevitikusi|nakuLevitikusi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ulevitikusi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (nbl)", () => {
		expect(p.parse("kuNumerina|kuNumeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Unumeri 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (nbl)", () => {
		expect(p.parse("IsiLilo 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nbl)", () => {
		expect(p.parse("IsAmbulo 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (nbl)", () => {
		expect(p.parse("kuDuteronomi|nakuDuteronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Uduteronomi 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (nbl)", () => {
		expect(p.parse("kuJotjhuwa|nezikuJotjhuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ujotjhuwa 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (nbl)", () => {
		expect(p.parse("abaKhokheli|nakubaKhokheli 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Abakhokheli 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (nbl)", () => {
		expect(p.parse("kuRute 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("uRute 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (nbl)", () => {
		expect(p.parse("U-Isaya 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nbl)", () => {
		expect(p.parse("1 Samyela|naku-1 Samyela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Usamyela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samyela|naku-1 Samyela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Usamyela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ku-1 Samyela|naku-1 Samyela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ku-1 Usamyela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ku-1. Samyela|naku-1 Samyela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ku-1. Usamyela 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nbl)", () => {
		expect(p.parse("2 Samyela|naku-2 Samyela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Usamyela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samyela|naku-2 Samyela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Usamyela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ku-2 Samyela|naku-2 Samyela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ku-2 Usamyela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ku-2. Samyela|naku-2 Samyela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ku-2. Usamyela 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nbl)", () => {
		expect(p.parse("1 amaKhosi|naku-1 amaKhosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Amakhosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. amaKhosi|naku-1 amaKhosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Amakhosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ku-1 amaKhosi|naku-1 amaKhosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ku-1 Amakhosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ku-1. amaKhosi|naku-1 amaKhosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ku-1. Amakhosi 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nbl)", () => {
		expect(p.parse("2 amaKhosi|naku-2 amaKhosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Amakhosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. amaKhosi|naku-2 amaKhosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Amakhosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ku-2 amaKhosi|naku-2 amaKhosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ku-2 Amakhosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ku-2. amaKhosi|naku-2 amaKhosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ku-2. Amakhosi 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nbl)", () => {
		expect(p.parse("1 iinKronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Iinkronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. iinKronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Iinkronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ku-1 iinKronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ku-1 Iinkronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ku-1. iinKronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ku-1. Iinkronike 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nbl)", () => {
		expect(p.parse("2 iinKronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Iinkronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. iinKronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Iinkronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ku-2 iinKronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ku-2 Iinkronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ku-2. iinKronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ku-2. Iinkronike 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (nbl)", () => {
		expect(p.parse("U-Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (nbl)", () => {
		expect(p.parse("Unerhemiya 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (nbl)", () => {
		expect(p.parse("ku-Esta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("U-Esta 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (nbl)", () => {
		expect(p.parse("kuJobho|nakuJobho 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ujobho 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (nbl)", () => {
		expect(p.parse("iRhubo|iRhubo|aseRhubeni|bekuliRhubo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Amarhubo 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (nbl)", () => {
		expect(p.parse("IzAga 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (nbl)", () => {
		expect(p.parse("Umtjhumayeli 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (nbl)", () => {
		expect(p.parse("Ingoma Yeengoma 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (nbl)", () => {
		expect(p.parse("kuJoromiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ujoromiya 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (nbl)", () => {
		expect(p.parse("Uhezekiyeli 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (nbl)", () => {
		expect(p.parse("Udanyela 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (nbl)", () => {
		expect(p.parse("kuHosiya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Uhosiya 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (nbl)", () => {
		expect(p.parse("Ujuweli 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (nbl)", () => {
		expect(p.parse("U-Amosi 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (nbl)", () => {
		expect(p.parse("U-Obadiya 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (nbl)", () => {
		expect(p.parse("uJona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (nbl)", () => {
		expect(p.parse("kuMikha 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Umikha 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (nbl)", () => {
		expect(p.parse("Unarhume 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (nbl)", () => {
		expect(p.parse("Urhabakhukhu 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (nbl)", () => {
		expect(p.parse("uZefaniya 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (nbl)", () => {
		expect(p.parse("uHagayi 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (nbl)", () => {
		expect(p.parse("kuZakariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Uzakariya 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (nbl)", () => {
		expect(p.parse("uMalaki 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nbl)", () => {
		expect(p.parse("kuMatewu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Umatewu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nbl)", () => {
		expect(p.parse("Umarkosi 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nbl)", () => {
		expect(p.parse("Ulukasi 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("kuLuka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nbl)", () => {
		expect(p.parse("1 Ujwanisi 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ujwanisi 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ku-1 Ujwanisi 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ku-1. Ujwanisi 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nbl)", () => {
		expect(p.parse("2 Ujwanisi 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ujwanisi 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ku-2 Ujwanisi 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ku-2. Ujwanisi 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nbl)", () => {
		expect(p.parse("3 Ujwanisi 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ujwanisi 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nbl)", () => {
		expect(p.parse("Ujwanisi 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nbl)", () => {
		expect(p.parse("Izenzo Zabapostoli 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("neZenzo 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nbl)", () => {
		expect(p.parse("Kweberoma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nbl)", () => {
		expect(p.parse("1 Kwebekorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 KwebeKorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kwebekorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. KwebeKorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ku-1 Kwebekorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ku-1 KwebeKorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ku-1. Kwebekorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ku-1. KwebeKorinte 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nbl)", () => {
		expect(p.parse("2 Kwebekorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kwebekorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ku-2 Kwebekorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ku-2. Kwebekorinte 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nbl)", () => {
		expect(p.parse("Kwebekolose 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nbl)", () => {
		expect(p.parse("Kwebegalatiya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nbl)", () => {
		expect(p.parse("Kwebe-efesu 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nbl)", () => {
		expect(p.parse("Kwebefilipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nbl)", () => {
		expect(p.parse("1 Kwebethesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Kwebethesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ku-1 Kwebethesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ku-1. Kwebethesalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nbl)", () => {
		expect(p.parse("2 Kwebethesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Kwebethesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ku-2 Kwebethesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ku-2. Kwebethesalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nbl)", () => {
		expect(p.parse("1 Uthimothi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Uthimothi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ku-1 Uthimothi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ku-1. Uthimothi 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nbl)", () => {
		expect(p.parse("2 Uthimothi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Uthimothi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ku-2 Uthimothi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ku-2. Uthimothi 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nbl)", () => {
		expect(p.parse("Utitosi 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nbl)", () => {
		expect(p.parse("Ufilimoni 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nbl)", () => {
		expect(p.parse("KumaHebheru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("AmaHebheru 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nbl)", () => {
		expect(p.parse("Ujakopo 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nbl)", () => {
		expect(p.parse("1 Upitrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Upitrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ku-1 Upitrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ku-1. Upitrosi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nbl)", () => {
		expect(p.parse("2 Upitrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Upitrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ku-2 Upitrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ku-2. Upitrosi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nbl)", () => {
		expect(p.parse("uJuda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (nbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (nbl)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Ujwanisi - 3 Ujwanisi").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Ujwanisi – 3 Ujwanisi").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Ujwanisi — 3 Ujwanisi").osis()).toEqual("1John.1-3John.1");
	});
});

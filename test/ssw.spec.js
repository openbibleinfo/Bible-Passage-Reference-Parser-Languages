"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ssw.js";

describe("Localized book Gen (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ssw)", () => {
		expect(p.parse("Genesisi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ssw)", () => {
		expect(p.parse("Eksodusi 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eks. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ssw)", () => {
		expect(p.parse("Levithikusi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ssw)", () => {
		expect(p.parse("Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ssw)", () => {
		expect(p.parse("Sililo 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Sil. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ssw)", () => {
		expect(p.parse("Sembulo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Semb. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ssw)", () => {
		expect(p.parse("Dutheronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dut. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ssw)", () => {
		expect(p.parse("Joshuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ssw)", () => {
		expect(p.parse("Tikhulu 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Khu. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ssw)", () => {
		expect(p.parse("Ruthe 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut. 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ssw)", () => {
		expect(p.parse("Isaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ssw)", () => {
		expect(p.parse("1 Samuweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ssw)", () => {
		expect(p.parse("2 Samuweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ssw)", () => {
		expect(p.parse("1 Emakhosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Khos. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Emakhosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Khos. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ssw)", () => {
		expect(p.parse("2 Emakhosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Khos. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Emakhosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Khos. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ssw)", () => {
		expect(p.parse("1 Tikhronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Khr. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Tikhronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Khr. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ssw)", () => {
		expect(p.parse("2 Tikhronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Khr. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tikhronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Khr. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ssw)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ssw)", () => {
		expect(p.parse("Nehemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ssw)", () => {
		expect(p.parse("Esta 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ssw)", () => {
		expect(p.parse("Jobe 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ssw)", () => {
		expect(p.parse("Tihlabelelo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Hla. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ssw)", () => {
		expect(p.parse("Taga 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ssw)", () => {
		expect(p.parse("UmShumayeli 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Shu. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ssw)", () => {
		expect(p.parse("Ingoma Yetingoma 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ngo. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ssw)", () => {
		expect(p.parse("Jeremiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ssw)", () => {
		expect(p.parse("Hezekeli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hez. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ssw)", () => {
		expect(p.parse("Danyela 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ssw)", () => {
		expect(p.parse("Hoseya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ssw)", () => {
		expect(p.parse("Joweli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jow. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ssw)", () => {
		expect(p.parse("Amose 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ssw)", () => {
		expect(p.parse("Obadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ssw)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ssw)", () => {
		expect(p.parse("Mikha 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mik. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ssw)", () => {
		expect(p.parse("Nahume 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ssw)", () => {
		expect(p.parse("Habakhuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ssw)", () => {
		expect(p.parse("Zefaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ssw)", () => {
		expect(p.parse("Hagayi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ssw)", () => {
		expect(p.parse("Zakhariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ssw)", () => {
		expect(p.parse("Malakhi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ssw)", () => {
		expect(p.parse("Matewu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ssw)", () => {
		expect(p.parse("Makho 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ssw)", () => {
		expect(p.parse("Lukha 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ssw)", () => {
		expect(p.parse("1 yaJohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. yaJohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ssw)", () => {
		expect(p.parse("2 yaJohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. yaJohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ssw)", () => {
		expect(p.parse("3 yaJohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. yaJohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Joh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ssw)", () => {
		expect(p.parse("Johane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ssw)", () => {
		expect(p.parse("Imisebenti yebaPhostoli 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Imis. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ssw)", () => {
		expect(p.parse("KubaseRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ssw)", () => {
		expect(p.parse("1 kubaseKorinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Khor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. kubaseKorinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Khor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ssw)", () => {
		expect(p.parse("2 kubaseKorinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Khor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. kubaseKorinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Khor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ssw)", () => {
		expect(p.parse("KubaseKholose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Khol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ssw)", () => {
		expect(p.parse("KubaseGalathiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ssw)", () => {
		expect(p.parse("Kubase-Efesu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ssw)", () => {
		expect(p.parse("KubaseFiliphi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ssw)", () => {
		expect(p.parse("1 kubaseThesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. kubaseThesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thes. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ssw)", () => {
		expect(p.parse("2 kubaseThesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. kubaseThesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thes. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ssw)", () => {
		expect(p.parse("1 kuThimothi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Thim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. kuThimothi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Thim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ssw)", () => {
		expect(p.parse("2 kuThimothi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Thim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. kuThimothi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Thim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ssw)", () => {
		expect(p.parse("kuThithusi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Thit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ssw)", () => {
		expect(p.parse("KuFilemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ssw)", () => {
		expect(p.parse("KumaHebheru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ssw)", () => {
		expect(p.parse("YaJakobe 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ssw)", () => {
		expect(p.parse("1 yaPhetro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Phet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. yaPhetro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Phet. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ssw)", () => {
		expect(p.parse("2 yaPhetro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Phet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. yaPhetro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Phet. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ssw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ssw)", () => {
		expect(p.parse("YaJuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
	});
});

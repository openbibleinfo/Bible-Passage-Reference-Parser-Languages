"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/caq.js";

describe("Localized book Gen (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (caq)", () => {
		expect(p.parse("Ranehlö 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ran 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (caq)", () => {
		expect(p.parse("Maneutnyi 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Man 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (caq)", () => {
		expect(p.parse("La-en Lēvī 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lēvi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (caq)", () => {
		expect(p.parse("Kinṙeūkö 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (caq)", () => {
		expect(p.parse("Inrāmore 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Inrāmöre 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (caq)", () => {
		expect(p.parse("Inmeukhömat 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (caq)", () => {
		expect(p.parse("I. Chöngö 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Invan 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (caq)", () => {
		expect(p.parse("Yôsuā 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yôs 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (caq)", () => {
		expect(p.parse("Kamhôka 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Kam 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (caq)", () => {
		expect(p.parse("Rūt 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (caq)", () => {
		expect(p.parse("Isayā 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (caq)", () => {
		expect(p.parse("1 Samuĕl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuĕl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (caq)", () => {
		expect(p.parse("2 Samuĕl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuĕl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (caq)", () => {
		expect(p.parse("1 Rācha 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Rāch 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Rācha 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Rāch 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (caq)", () => {
		expect(p.parse("2 Rācha 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Rāch 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Rācha 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Rāch 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (caq)", () => {
		expect(p.parse("1 Kinṙötngö 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kinṙöt 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kinṙötngö 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kinṙöt 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (caq)", () => {
		expect(p.parse("2 Kinṙötngö 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kinṙöt 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kinṙötngö 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kinṙöt 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (caq)", () => {
		expect(p.parse("Esrā 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (caq)", () => {
		expect(p.parse("Nahimiā 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (caq)", () => {
		expect(p.parse("Estor 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Estör 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (caq)", () => {
		expect(p.parse("Yōp 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (caq)", () => {
		expect(p.parse("Salmai 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sal 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (caq)", () => {
		expect(p.parse("Inchok-Oro 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Inchōḵ-oṙô 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (caq)", () => {
		expect(p.parse("Mumkahten 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (caq)", () => {
		expect(p.parse("Sòlòmön 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (caq)", () => {
		expect(p.parse("Yerimiā 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (caq)", () => {
		expect(p.parse("Isikī-ĕl 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Isi 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (caq)", () => {
		expect(p.parse("Tani-El 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Tanī-ĕl 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (caq)", () => {
		expect(p.parse("Hosi 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hōsī 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (caq)", () => {
		expect(p.parse("Yō-El 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yō-ĕl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (caq)", () => {
		expect(p.parse("Amōs 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (caq)", () => {
		expect(p.parse("Opetiā 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Opētiā 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (caq)", () => {
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yôna 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (caq)", () => {
		expect(p.parse("Maika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Maik 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (caq)", () => {
		expect(p.parse("Nahom 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (caq)", () => {
		expect(p.parse("Hapakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hapakūk 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (caq)", () => {
		expect(p.parse("Sefainia 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefainiā 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (caq)", () => {
		expect(p.parse("Hakai 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (caq)", () => {
		expect(p.parse("Sakaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sakariā 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (caq)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (caq)", () => {
		expect(p.parse("T. Mëtiv 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (caq)", () => {
		expect(p.parse("T. Mākös 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (caq)", () => {
		expect(p.parse("T. Lūkös 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book John (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (caq)", () => {
		expect(p.parse("T. Yôhan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (caq)", () => {
		expect(p.parse("1 Yôhan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yôhan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (caq)", () => {
		expect(p.parse("2 Yôhan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yôhan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (caq)", () => {
		expect(p.parse("3 Yôhan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yôhan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book Acts (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (caq)", () => {
		expect(p.parse("Inlahen 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Act 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (caq)", () => {
		expect(p.parse("Rōma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (caq)", () => {
		expect(p.parse("1 Kòrin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kòr 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kòrin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kòr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (caq)", () => {
		expect(p.parse("2 Kòrin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kòr 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kòrin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kòr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (caq)", () => {
		expect(p.parse("Kòlòsī 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (caq)", () => {
		expect(p.parse("Kalatī 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (caq)", () => {
		expect(p.parse("Efisös 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (caq)", () => {
		expect(p.parse("Filipī 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (caq)", () => {
		expect(p.parse("1 Tösalònikē 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tösalònikē 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (caq)", () => {
		expect(p.parse("2 Tösalònikē 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tösalònikē 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (caq)", () => {
		expect(p.parse("1 Timòtī 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tomòtī 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timòtī 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tomòtī 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (caq)", () => {
		expect(p.parse("2 Timòtī 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tomòtī 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timòtī 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tomòtī 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (caq)", () => {
		expect(p.parse("Taitös 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (caq)", () => {
		expect(p.parse("Filimòn 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (caq)", () => {
		expect(p.parse("Heprāi 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (caq)", () => {
		expect(p.parse("Yāköp 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (caq)", () => {
		expect(p.parse("1 Pītör 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pītör 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (caq)", () => {
		expect(p.parse("2 Pītör 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pītör 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (caq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (caq)", () => {
		expect(p.parse("Yūt 1:1").osis()).toEqual("Jude.1.1");
	});
});

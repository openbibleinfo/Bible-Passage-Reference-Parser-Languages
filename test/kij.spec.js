"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kij.js";

describe("Localized book Gen (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kij)", () => {
		expect(p.parse("Vitouula 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Vit 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kij)", () => {
		expect(p.parse("Sunapula 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Sun 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kij)", () => {
		expect(p.parse("Tolula 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tol 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kij)", () => {
		expect(p.parse("Kala Bawa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Baw 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (kij)", () => {
		expect(p.parse("Kavinavina 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kav 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kij)", () => {
		expect(p.parse("Yoni Igisimlili 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Yg 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kij)", () => {
		expect(p.parse("Karaiwaga Kwaiyuwela 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kak 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kij)", () => {
		expect(p.parse("Yosuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kij)", () => {
		expect(p.parse("Tokwaraiwaga 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Tok 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kij)", () => {
		expect(p.parse("Ruti 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (kij)", () => {
		expect(p.parse("Aisea 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ais 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kij)", () => {
		expect(p.parse("1 Samwela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sml 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samwela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sml 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kij)", () => {
		expect(p.parse("2 Samwela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sml 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samwela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sml 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kij)", () => {
		expect(p.parse("1 Gweguya 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Gwe 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Gweguya 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Gwe 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kij)", () => {
		expect(p.parse("2 Gweguya 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Gwe 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Gweguya 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Gwe 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kij)", () => {
		expect(p.parse("1 Liliu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Lil 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Liliu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Lil 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kij)", () => {
		expect(p.parse("2 Liliu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Lil 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Liliu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Lil 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (kij)", () => {
		expect(p.parse("Esira 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esi 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (kij)", () => {
		expect(p.parse("Niemaia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nie 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kij)", () => {
		expect(p.parse("Esiteri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (kij)", () => {
		expect(p.parse("Yobi 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yob 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kij)", () => {
		expect(p.parse("Sam 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kij)", () => {
		expect(p.parse("Bigivakala 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Big 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kij)", () => {
		expect(p.parse("Toguguya 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Tog 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (kij)", () => {
		expect(p.parse("Solomoni Kala Wosi 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Skw 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (kij)", () => {
		expect(p.parse("Yeremaia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (kij)", () => {
		expect(p.parse("Isikeli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Isi 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kij)", () => {
		expect(p.parse("Daniela 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (kij)", () => {
		expect(p.parse("Osia 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Osi 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (kij)", () => {
		expect(p.parse("Yoweli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoe 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (kij)", () => {
		expect(p.parse("Emosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Emo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (kij)", () => {
		expect(p.parse("Obedaia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obe 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kij)", () => {
		expect(p.parse("Youna 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("You 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (kij)", () => {
		expect(p.parse("Maika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mai 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (kij)", () => {
		expect(p.parse("Neum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Neu 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (kij)", () => {
		expect(p.parse("Abakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Aba 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (kij)", () => {
		expect(p.parse("Sepanaia 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sep 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (kij)", () => {
		expect(p.parse("Agai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Aga 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (kij)", () => {
		expect(p.parse("Sekaraia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kij)", () => {
		expect(p.parse("Malakai 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kij)", () => {
		expect(p.parse("Madiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Md 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kij)", () => {
		expect(p.parse("Maka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kij)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kij)", () => {
		expect(p.parse("3 Yoni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Tn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kij)", () => {
		expect(p.parse("1 Yoni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kij)", () => {
		expect(p.parse("2 Yoni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kij)", () => {
		expect(p.parse("Yoni 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kij)", () => {
		expect(p.parse("Si Vavagi Aposetolo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Va 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kij)", () => {
		expect(p.parse("Roum 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kij)", () => {
		expect(p.parse("1 Korinita 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kr 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinita 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kij)", () => {
		expect(p.parse("2 Korinita 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kr 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinita 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kij)", () => {
		expect(p.parse("Kolosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kij)", () => {
		expect(p.parse("Galetia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gl 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kij)", () => {
		expect(p.parse("Epeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ep 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kij)", () => {
		expect(p.parse("Pilipai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pl 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kij)", () => {
		expect(p.parse("1 Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ts 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ts 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kij)", () => {
		expect(p.parse("2 Tesalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ts 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ts 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kij)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kij)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kij)", () => {
		expect(p.parse("Taito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kij)", () => {
		expect(p.parse("Pilimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kij)", () => {
		expect(p.parse("Iberu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kij)", () => {
		expect(p.parse("Yemesa 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ym 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kij)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kij)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kij)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yd 1:1").osis()).toEqual("Jude.1.1");
	});
});

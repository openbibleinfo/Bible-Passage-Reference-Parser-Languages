"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/leh.js";

describe("Localized book Gen (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (leh)", () => {
		expect(p.parse("Matalikilo 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mata 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (leh)", () => {
		expect(p.parse("Kulonga 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kulo 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (leh)", () => {
		expect(p.parse("Belo ansoka inene 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Belo 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (leh)", () => {
		expect(p.parse("Bene Lefi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (leh)", () => {
		expect(p.parse("Shakubelenga 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Shakube 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (leh)", () => {
		expect(p.parse("Silaki 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sila 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (leh)", () => {
		expect(p.parse("Busongo Bwakwe Solomoni 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Buso 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (leh)", () => {
		expect(p.parse("Malilo 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Mali 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (leh)", () => {
		expect(p.parse("Jelemiya2 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Jele2 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (leh)", () => {
		expect(p.parse("Ciyubululo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ciyu 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (leh)", () => {
		expect(p.parse("Dutolonomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Duto 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (leh)", () => {
		expect(p.parse("Joshuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joshu 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (leh)", () => {
		expect(p.parse("Boomboloshi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Boombo 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (leh)", () => {
		expect(p.parse("Lute 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (leh)", () => {
		expect(p.parse("Isaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (leh)", () => {
		expect(p.parse("1 Samwelo 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samwe 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samwelo 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samwe 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (leh)", () => {
		expect(p.parse("2 Samwelo 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samwe 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samwelo 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samwe 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (leh)", () => {
		expect(p.parse("1 Baami 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Baami 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (leh)", () => {
		expect(p.parse("2 Baami 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Baami 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (leh)", () => {
		expect(p.parse("1 Makani 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Maka 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Makani 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Maka 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (leh)", () => {
		expect(p.parse("2 Makani 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Maka 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Makani 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Maka 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (leh)", () => {
		expect(p.parse("Esila 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (leh)", () => {
		expect(p.parse("Neyemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neye 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (leh)", () => {
		expect(p.parse("Esita 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (leh)", () => {
		expect(p.parse("Jobo 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (leh)", () => {
		expect(p.parse("Kulumbaisha 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Kulu 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (leh)", () => {
		expect(p.parse("Tushimpi 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (leh)", () => {
		expect(p.parse("Shikushimikila 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Shikushi 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (leh)", () => {
		expect(p.parse("Lwiimbo lwakwe Solomoni 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Lwiimbo 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (leh)", () => {
		expect(p.parse("Jelemiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jele 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (leh)", () => {
		expect(p.parse("Esekelo 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ese 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (leh)", () => {
		expect(p.parse("Danyelo 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Danye 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (leh)", () => {
		expect(p.parse("Osiya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Osi 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (leh)", () => {
		expect(p.parse("Jowelo 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jowe 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (leh)", () => {
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (leh)", () => {
		expect(p.parse("Obadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadi 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (leh)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (leh)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (leh)", () => {
		expect(p.parse("Naamu 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (leh)", () => {
		expect(p.parse("Abakuku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Abaku 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (leh)", () => {
		expect(p.parse("Sefaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefa 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (leh)", () => {
		expect(p.parse("Agayi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Aga 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (leh)", () => {
		expect(p.parse("Sekaliya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Seka 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (leh)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mala 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (leh)", () => {
		expect(p.parse("Mateyo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mate 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (leh)", () => {
		expect(p.parse("Maako 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (leh)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (leh)", () => {
		expect(p.parse("1 Joni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joni 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (leh)", () => {
		expect(p.parse("2 Joni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joni 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (leh)", () => {
		expect(p.parse("3 Joni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Joni 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (leh)", () => {
		expect(p.parse("Joni 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (leh)", () => {
		expect(p.parse("Milimo ya Batumwi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mili 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (leh)", () => {
		expect(p.parse("Bene Loma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Loma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (leh)", () => {
		expect(p.parse("1 Bene Kolinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Koli 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bene Kolinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koli 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (leh)", () => {
		expect(p.parse("2 Bene Kolinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Koli 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bene Kolinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koli 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (leh)", () => {
		expect(p.parse("Bene Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolo 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (leh)", () => {
		expect(p.parse("Bene Galatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gala 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (leh)", () => {
		expect(p.parse("Bene Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (leh)", () => {
		expect(p.parse("Bene Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fili 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (leh)", () => {
		expect(p.parse("1 Bene Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Bene Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (leh)", () => {
		expect(p.parse("2 Bene Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Bene Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesa 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (leh)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (leh)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (leh)", () => {
		expect(p.parse("Taitasi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Taita 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (leh)", () => {
		expect(p.parse("Filimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filimo 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (leh)", () => {
		expect(p.parse("Bene Ebulu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebulu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (leh)", () => {
		expect(p.parse("Jemusi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jemu 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (leh)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (leh)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (leh)", () => {
		expect(p.parse("Judi 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (leh)", () => {
		expect(p.parse("Tobiti 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (leh)", () => {
		expect(p.parse("Judisi 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (leh)", () => {
		expect(p.parse("Baluku 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Balu 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (leh)", () => {
		expect(p.parse("Susana 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Susa 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (leh)", () => {
		expect(p.parse("1 Makabisi 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makabisi 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (leh)", () => {
		expect(p.parse("2 Makabisi 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makabisi 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Preferred book names (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (leh)", () => {
		expect(p.parse("Danyele 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Dany 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Parser helper should handle book ranges (leh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (leh)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Joni - 3 Joni").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Joni – 3 Joni").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Joni — 3 Joni").osis()).toEqual("1John.1-3John.1");
	});
});

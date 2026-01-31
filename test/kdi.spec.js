"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kdi.js";

describe("Localized book Gen (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kdi)", () => {
		expect(p.parse("Ageini 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Age 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kdi)", () => {
		expect(p.parse("Yai 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ya 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (kdi)", () => {
		expect(p.parse("Bel kedeTwol 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bl 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kdi)", () => {
		expect(p.parse("Jolebi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Jol 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kdi)", () => {
		expect(p.parse("Wel 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("We 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (kdi)", () => {
		expect(p.parse("Sira 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (kdi)", () => {
		expect(p.parse("Rieko 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Riek 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (kdi)", () => {
		expect(p.parse("Koko ka Yeremia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kok 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (kdi)", () => {
		expect(p.parse("Baluwa ka Yeremia 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Bal-Yer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kdi)", () => {
		expect(p.parse("Gianyuta 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Gia 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kdi)", () => {
		expect(p.parse("Iswilia 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Iswi 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kdi)", () => {
		expect(p.parse("Yosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kdi)", () => {
		expect(p.parse("Jongolkop 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jong 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kdi)", () => {
		expect(p.parse("Lusi 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Lus 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (kdi)", () => {
		expect(p.parse("Isaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kdi)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kdi)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kdi)", () => {
		expect(p.parse("1 Abakai 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Abak 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Abakai 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Abak 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kdi)", () => {
		expect(p.parse("2 Abakai 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Abak 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Abakai 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Abak 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kdi)", () => {
		expect(p.parse("1 Iyutun 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Iyu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Iyutun 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Iyu 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kdi)", () => {
		expect(p.parse("2 Iyutun 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Iyu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Iyutun 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Iyu 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (kdi)", () => {
		expect(p.parse("Esera 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Eser 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (kdi)", () => {
		expect(p.parse("Nekemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nek 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (kdi)", () => {
		expect(p.parse("Yobu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yob 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kdi)", () => {
		expect(p.parse("Sabuli 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sab 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kdi)", () => {
		expect(p.parse("Agole 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ago 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kdi)", () => {
		expect(p.parse("Ngarab kop 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ngar 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (kdi)", () => {
		expect(p.parse("Wer me awobe adek 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Wer-Awo 3 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (kdi)", () => {
		expect(p.parse("Wer amit 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Wer 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (kdi)", () => {
		expect(p.parse("Yeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (kdi)", () => {
		expect(p.parse("Esekeri 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kdi)", () => {
		expect(p.parse("Danieri 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (kdi)", () => {
		expect(p.parse("Kosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Kos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (kdi)", () => {
		expect(p.parse("Yoweri 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yow 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (kdi)", () => {
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (kdi)", () => {
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kdi)", () => {
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (kdi)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (kdi)", () => {
		expect(p.parse("Nakum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nak 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (kdi)", () => {
		expect(p.parse("Abakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Abakk 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (kdi)", () => {
		expect(p.parse("Sepania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sep 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (kdi)", () => {
		expect(p.parse("Agai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Aga 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (kdi)", () => {
		expect(p.parse("Sakaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kdi)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kdi)", () => {
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kdi)", () => {
		expect(p.parse("Marako 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kdi)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kdi)", () => {
		expect(p.parse("1 Yokana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yok 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yokana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yok 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kdi)", () => {
		expect(p.parse("2 Yokana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yok 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yokana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yok 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kdi)", () => {
		expect(p.parse("3 Yokana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yok 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yokana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yok 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kdi)", () => {
		expect(p.parse("Yokana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yok 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kdi)", () => {
		expect(p.parse("Tice 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tic 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kdi)", () => {
		expect(p.parse("Joroma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Jorom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kdi)", () => {
		expect(p.parse("1 Jokorinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Jokor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Jokorinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Jokor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kdi)", () => {
		expect(p.parse("2 Jokorinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Jokor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Jokorinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Jokor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kdi)", () => {
		expect(p.parse("Jokolosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Jokol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kdi)", () => {
		expect(p.parse("Jogalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Jogal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kdi)", () => {
		expect(p.parse("Joepeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Joep 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kdi)", () => {
		expect(p.parse("Jopilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Jopi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kdi)", () => {
		expect(p.parse("1 Jotesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Jotes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Jotesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Jotes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kdi)", () => {
		expect(p.parse("2 Jotesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Jotes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Jotesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Jotes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kdi)", () => {
		expect(p.parse("1 Temeseo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tem 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Temeseo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tem 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kdi)", () => {
		expect(p.parse("2 Temeseo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tem 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Temeseo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tem 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kdi)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kdi)", () => {
		expect(p.parse("Epirimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Epir 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kdi)", () => {
		expect(p.parse("Iburanian 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibur 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kdi)", () => {
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kdi)", () => {
		expect(p.parse("1 Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kdi)", () => {
		expect(p.parse("2 Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kdi)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (kdi)", () => {
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (kdi)", () => {
		expect(p.parse("Yudis 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Yudi 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (kdi)", () => {
		expect(p.parse("Baruk 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (kdi)", () => {
		expect(p.parse("Susana 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (kdi)", () => {
		expect(p.parse("1 Makabi 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makab 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makabi 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makab 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (kdi)", () => {
		expect(p.parse("2 Makabi 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makab 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makabi 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makab 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Esth (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kdi)", () => {
		expect(p.parse("Esita 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esit 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Preferred book names (kdi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (kdi)", () => {
		expect(p.parse("Wer me awobe adek 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Wer-Awo 3 1:1").osis()).toEqual("PrAzar.1.1");
	});
});

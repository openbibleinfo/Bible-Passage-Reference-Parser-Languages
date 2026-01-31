"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/fao.js";

describe("Localized book Gen (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (fao)", () => {
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (fao)", () => {
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (fao)", () => {
		expect(p.parse("Triðja Mósebók 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mós 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (fao)", () => {
		expect(p.parse("Fjórða Mósebók 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mós 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (fao)", () => {
		expect(p.parse("Harmljóðini 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Harmlj 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (fao)", () => {
		expect(p.parse("Jóhannesar opinbering 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Opb 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (fao)", () => {
		expect(p.parse("Fimta Mósebók 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mós 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (fao)", () => {
		expect(p.parse("Jósvabók 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jós 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (fao)", () => {
		expect(p.parse("Dómarabókin 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Dóm 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (fao)", () => {
		expect(p.parse("Rutarbók 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (fao)", () => {
		expect(p.parse("Jesaja 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jes 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (fao)", () => {
		expect(p.parse("1 Sámuelsbók 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sám 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sámuelsbók 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sám 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Fyrra Sámuelsbók 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Fyrra Sám 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Fyrra. Sámuelsbók 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Fyrra. Sám 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (fao)", () => {
		expect(p.parse("2 Sámuelsbók 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sám 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sámuelsbók 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sám 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Seinna Sámuelsbók 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Seinna Sám 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Seinna. Sámuelsbók 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Seinna. Sám 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (fao)", () => {
		expect(p.parse("1 Kongabók 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kong 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kongabók 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kong 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Fyrra Kongabók 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Fyrra Kong 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Fyrra. Kongabók 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Fyrra. Kong 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (fao)", () => {
		expect(p.parse("2 Kongabók 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kong 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kongabók 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kong 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Seinna Kongabók 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Seinna Kong 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Seinna. Kongabók 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Seinna. Kong 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (fao)", () => {
		expect(p.parse("1 Krýnikubók 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krýn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Krýnikubók 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Krýn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Fyrra Krýnikubók 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Fyrra Krýn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Fyrra. Krýnikubók 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Fyrra. Krýn 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (fao)", () => {
		expect(p.parse("2 Krýnikubók 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krýn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Krýnikubók 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Krýn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Seinna Krýnikubók 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Seinna Krýn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Seinna. Krýnikubók 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Seinna. Krýn 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (fao)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (fao)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (fao)", () => {
		expect(p.parse("Esterarbók 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (fao)", () => {
		expect(p.parse("Jobsbók 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (fao)", () => {
		expect(p.parse("Sálmarnir 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sl 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (fao)", () => {
		expect(p.parse("Orðtøk Sálomons 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Orðt 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (fao)", () => {
		expect(p.parse("Prædikarin 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Præd 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (fao)", () => {
		expect(p.parse("Hásongurin 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hás 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (fao)", () => {
		expect(p.parse("Jeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (fao)", () => {
		expect(p.parse("Ezekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (fao)", () => {
		expect(p.parse("Dánjal 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dán 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (fao)", () => {
		expect(p.parse("Hósea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hós 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (fao)", () => {
		expect(p.parse("Jóel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (fao)", () => {
		expect(p.parse("Ámos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ám 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (fao)", () => {
		expect(p.parse("Óbadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Óbad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (fao)", () => {
		expect(p.parse("Jónas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jón 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (fao)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (fao)", () => {
		expect(p.parse("Náhum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Náh 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (fao)", () => {
		expect(p.parse("Hábakkuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Háb 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (fao)", () => {
		expect(p.parse("Sefanja 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (fao)", () => {
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagg 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (fao)", () => {
		expect(p.parse("Zakarja 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (fao)", () => {
		expect(p.parse("Málaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mál 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (fao)", () => {
		expect(p.parse("Evangeliið eftir Matteus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mathæussa 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (fao)", () => {
		expect(p.parse("Evangeliið eftir Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (fao)", () => {
		expect(p.parse("Evangeliið eftir Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (fao)", () => {
		expect(p.parse("1 John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Fyrra John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Fyrra. John 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (fao)", () => {
		expect(p.parse("Annað bræv Jóhannesar 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (fao)", () => {
		expect(p.parse("Triðja bræv Jóhannesar 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jóh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 2John (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (fao)", () => {
		expect(p.parse("2 Jóh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jóh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Seinna Jóh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Seinna. Jóh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (fao)", () => {
		expect(p.parse("Evangeliið eftir Jóhannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jóhannesar Evangelium 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jóhannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jóh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (fao)", () => {
		expect(p.parse("Ápostlasøgan 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Áps 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (fao)", () => {
		expect(p.parse("Bræv Paulusar ápostuls til Rómverja 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Róm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (fao)", () => {
		expect(p.parse("1 Korintbrævið 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintbrævið 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Fyrra Korintbrævið 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Fyrra Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Fyrra. Korintbrævið 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Fyrra. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (fao)", () => {
		expect(p.parse("2 Korintbrævið 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintbrævið 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Seinna Korintbrævið 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Seinna Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Seinna. Korintbrævið 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Seinna. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (fao)", () => {
		expect(p.parse("Kolossubrævið 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (fao)", () => {
		expect(p.parse("Galatabrævið 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (fao)", () => {
		expect(p.parse("Efesusbrævið 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (fao)", () => {
		expect(p.parse("Filippibrævið 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (fao)", () => {
		expect(p.parse("1 Tessalónikubrævið 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessalónikubrævið 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Fyrra Tessalónikubrævið 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Fyrra Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Fyrra. Tessalónikubrævið 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Fyrra. Tess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (fao)", () => {
		expect(p.parse("2 Tessalónikubrævið 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessalónikubrævið 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Seinna Tessalónikubrævið 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Seinna Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Seinna. Tessalónikubrævið 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Seinna. Tess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (fao)", () => {
		expect(p.parse("1 Timoteusarbrævið 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteusarbrævið 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Fyrra Timoteusarbrævið 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Fyrra Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Fyrra. Timoteusarbrævið 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Fyrra. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (fao)", () => {
		expect(p.parse("2 Timoteusarbrævið 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteusarbrævið 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Seinna Timoteusarbrævið 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Seinna Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Seinna. Timoteusarbrævið 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Seinna. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (fao)", () => {
		expect(p.parse("Titusarbrævið 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (fao)", () => {
		expect(p.parse("Filemonsbrævið 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (fao)", () => {
		expect(p.parse("Hebrearabrævið 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (fao)", () => {
		expect(p.parse("Hitt almenna bræv Jákups 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ják 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (fao)", () => {
		expect(p.parse("1 Pæt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pæt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Fyrra Pæt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Fyrra. Pæt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (fao)", () => {
		expect(p.parse("2 Pæt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pæt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Seinna Pæt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Seinna. Pæt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (fao)", () => {
		expect(p.parse("Hitt fyrra almenna bræv Pæturs 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (fao)", () => {
		expect(p.parse("Hitt seinna almenna bræv Pæturs 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (fao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (fao)", () => {
		expect(p.parse("Hitt almenna bræv Judasar 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

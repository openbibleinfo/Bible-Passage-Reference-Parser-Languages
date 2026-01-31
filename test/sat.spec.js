"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sat.js";

describe("Localized book Gen (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (sat)", () => {
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (sat)", () => {
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exo 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (sat)", () => {
		expect(p.parse("Levitikus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (sat)", () => {
		expect(p.parse("Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (sat)", () => {
		expect(p.parse("Rak̕joṅ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Rakʼ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sat)", () => {
		expect(p.parse("Johan sodor 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Joh 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Sod 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (sat)", () => {
		expect(p.parse("Dosar Biboron 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Bib 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (sat)", () => {
		expect(p.parse("Josuạ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josu 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (sat)", () => {
		expect(p.parse("Bikʼcạrko 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Bikʼ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (sat)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (sat)", () => {
		expect(p.parse("Jesaea 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jes 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (sat)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (sat)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (sat)", () => {
		expect(p.parse("1 Rapajko 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Raj 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Rapajko 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Raj 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (sat)", () => {
		expect(p.parse("2 Rapajko 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Raj 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Rapajko 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Raj 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (sat)", () => {
		expect(p.parse("1 Bõsbudạ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Bõs 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Bõsbudạ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Bõs 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (sat)", () => {
		expect(p.parse("2 Bõsbudạ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Bõs 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Bõsbudạ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Bõs 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (sat)", () => {
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (sat)", () => {
		expect(p.parse("Nehemiạ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (sat)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (sat)", () => {
		expect(p.parse("Jobakʼ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (sat)", () => {
		expect(p.parse("Sereńko 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ser 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (sat)", () => {
		expect(p.parse("Kạhtukko 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Kạh 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (sat)", () => {
		expect(p.parse("Sosolhayic̕ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Sos 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (sat)", () => {
		expect(p.parse("Soros sereń 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sor 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (sat)", () => {
		expect(p.parse("Jirimiạ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jir 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (sat)", () => {
		expect(p.parse("Jeheskel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Jeh 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (sat)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (sat)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (sat)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joe 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (sat)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (sat)", () => {
		expect(p.parse("Obodiạ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obo 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (sat)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (sat)", () => {
		expect(p.parse("Mikạ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (sat)", () => {
		expect(p.parse("Nạhum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nạh 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (sat)", () => {
		expect(p.parse("Habakkuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (sat)", () => {
		expect(p.parse("Sephaniạ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sep 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (sat)", () => {
		expect(p.parse("Hagae 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (sat)", () => {
		expect(p.parse("Sakariạ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (sat)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sat)", () => {
		expect(p.parse("Mathae 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sat)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sat)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sat)", () => {
		expect(p.parse("1Jhn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sat)", () => {
		expect(p.parse("2Jhn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sat)", () => {
		expect(p.parse("3 Johan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jhn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jhn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sat)", () => {
		expect(p.parse("1 Johan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jhn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jhn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sat)", () => {
		expect(p.parse("2 Johan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jhn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jhn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sat)", () => {
		expect(p.parse("Johan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jhn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sat)", () => {
		expect(p.parse("Aposkạmi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apos 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Aps 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sat)", () => {
		expect(p.parse("Romiko lạgitʼ Pạul Apostolakʼ ciṭhi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sat)", () => {
		expect(p.parse("1 Korinthiko 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinthiko 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sat)", () => {
		expect(p.parse("2 Korinthiko 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinthiko 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sat)", () => {
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sat)", () => {
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sat)", () => {
		expect(p.parse("Kolossiko lạgitʼ Pạul Apostolakʼ ciṭhi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sat)", () => {
		expect(p.parse("Galathiko lạgitʼ Pạul Apostolakʼ ciṭhi 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sat)", () => {
		expect(p.parse("Ephesiko lạgitʼ Pạul Apostolakʼ ciṭhi 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sat)", () => {
		expect(p.parse("Philipiko lạgitʼ Pạul apostolakʼ ciṭhi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Php 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sat)", () => {
		expect(p.parse("1 Thessalonikikko 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Th 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonikikko 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Th 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sat)", () => {
		expect(p.parse("1Th 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sat)", () => {
		expect(p.parse("2 Thessalonikiko 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Th 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonikiko 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Th 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sat)", () => {
		expect(p.parse("2Th 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sat)", () => {
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sat)", () => {
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sat)", () => {
		expect(p.parse("1Timothi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sat)", () => {
		expect(p.parse("2Timothi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sat)", () => {
		expect(p.parse("Titus lạgitʼ Pạul Apostolakʼ ciṭhi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sat)", () => {
		expect(p.parse("Philimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phi 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sat)", () => {
		expect(p.parse("Ibriko 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sat)", () => {
		expect(p.parse("Jakob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sat)", () => {
		expect(p.parse("1 Patras 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pat 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Patras 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pat 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sat)", () => {
		expect(p.parse("2 Patras 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pat 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Patras 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pat 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sat)", () => {
		expect(p.parse("1Pat 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sat)", () => {
		expect(p.parse("2Pat 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sat)", () => {
		expect(p.parse("Jihudạwakʼ ciṭhi 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jihu 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jih 1:1").osis()).toEqual("Jude.1.1");
	});
});

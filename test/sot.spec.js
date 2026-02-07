"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sot.js";

describe("Localized book Gen (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (sot)", () => {
		expect(p.parse("Tshimoloho 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genese 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Tshim. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (sot)", () => {
		expect(p.parse("Eksoda 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Phallo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Phal. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (sot)", () => {
		expect(p.parse("Levitike 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Meetlo 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Mee. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (sot)", () => {
		expect(p.parse("Dipalo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Numere 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Dipa. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (sot)", () => {
		expect(p.parse("Dillo Tsa Jeremia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Koli-ya-malla 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kodi. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sot)", () => {
		expect(p.parse("Tshenolo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tshen. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (sot)", () => {
		expect(p.parse("Deuteronoma 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dipolelo 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dipo. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (sot)", () => {
		expect(p.parse("Joshua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (sot)", () => {
		expect(p.parse("Baahlodi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Baa. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (sot)", () => {
		expect(p.parse("Ruthe 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut. 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (sot)", () => {
		expect(p.parse("Esaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Esaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Esa. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (sot)", () => {
		expect(p.parse("1 Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (sot)", () => {
		expect(p.parse("2 Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (sot)", () => {
		expect(p.parse("1 Dikgosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Marena 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Dikg. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Dikgosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Marena 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Dikg. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Dikgosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Marena 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Dikg. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Dikgosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Marena 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Dikg. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (sot)", () => {
		expect(p.parse("2 Dikgosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Marena 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Dikg. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Dikgosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Marena 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Dikg. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Dikgosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Marena 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Dikg. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Dikgosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Marena 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Dikg. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (sot)", () => {
		expect(p.parse("1 Diketsahalo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Dikronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Dik. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Diketsahalo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Dikronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Dik. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Diketsahalo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Dikronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Dik. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Diketsahalo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Dikronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Dik. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (sot)", () => {
		expect(p.parse("2 Diketsahalo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Dikronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Dik. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Diketsahalo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Dikronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Dik. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Diketsahalo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Dikronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Dik. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Diketsahalo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Dikronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Dik. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (sot)", () => {
		expect(p.parse("Esdrase 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esera 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esr. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (sot)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (sot)", () => {
		expect(p.parse("Esetere 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esthere 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (sot)", () => {
		expect(p.parse("Jobo 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (sot)", () => {
		expect(p.parse("Dipesalema 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Dipesaleme 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Pes. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (sot)", () => {
		expect(p.parse("Diproverbia 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Maele 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Mae. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (sot)", () => {
		expect(p.parse("Moeklesia 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Moruti 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mor. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (sot)", () => {
		expect(p.parse("Sefela sa Salomone 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sefela Sa Difela 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sef. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (sot)", () => {
		expect(p.parse("Jeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (sot)", () => {
		expect(p.parse("Esekiele 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekiele 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esk. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (sot)", () => {
		expect(p.parse("Daniele 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (sot)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (sot)", () => {
		expect(p.parse("Joele 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joe. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (sot)", () => {
		expect(p.parse("Amose 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (sot)", () => {
		expect(p.parse("Obadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (sot)", () => {
		expect(p.parse("Jonase 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jona. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (sot)", () => {
		expect(p.parse("Mmikiya 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mikea 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mmik. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (sot)", () => {
		expect(p.parse("Nahume 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (sot)", () => {
		expect(p.parse("Habakuke 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (sot)", () => {
		expect(p.parse("Sofonea 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofonia 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (sot)", () => {
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (sot)", () => {
		expect(p.parse("Sakariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sakaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sak. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (sot)", () => {
		expect(p.parse("Malakiya 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malakia 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sot)", () => {
		expect(p.parse("Mattheu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matheu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sot)", () => {
		expect(p.parse("Mareka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sot)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sot)", () => {
		expect(p.parse("Johanne 1 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sot)", () => {
		expect(p.parse("Johanne 2 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sot)", () => {
		expect(p.parse("III Johanne 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johanne 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Johanne 3 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sot)", () => {
		expect(p.parse("1 Johanne 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johanne 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Johanne 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Joh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Johanne 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Joh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sot)", () => {
		expect(p.parse("2 Johanne 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johanne 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Johanne 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Joh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Johanne 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Joh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sot)", () => {
		expect(p.parse("Johanne 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sot)", () => {
		expect(p.parse("Diketso 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dik. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sot)", () => {
		expect(p.parse("BaRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Bar. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sot)", () => {
		expect(p.parse("1 Bakorinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Bakr. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bakorinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bakr. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Bakorinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Bakr. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Bakorinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Bakr. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sot)", () => {
		expect(p.parse("2 Bakorinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Bakr. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bakorinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bakr. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Bakorinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Bakr. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Bakorinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Bakr. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sot)", () => {
		expect(p.parse("BaKolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Bakl. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sot)", () => {
		expect(p.parse("Bagalata 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Bag. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sot)", () => {
		expect(p.parse("Baefese 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Bae. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sot)", () => {
		expect(p.parse("BaFilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Baf. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sot)", () => {
		expect(p.parse("1 Bathesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Bat. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Bathesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Bat. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Bathesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Bat. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Bathesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Bat. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sot)", () => {
		expect(p.parse("2 Bathesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Bat. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Bathesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Bat. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Bathesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Bat. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Bathesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Bat. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sot)", () => {
		expect(p.parse("1 Timothea 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothea 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timothea 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timothea 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sot)", () => {
		expect(p.parse("2 Timothea 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothea 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timothea 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timothea 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sot)", () => {
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sot)", () => {
		expect(p.parse("Filemone 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sot)", () => {
		expect(p.parse("BaHebheru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Baheberu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Bah. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sot)", () => {
		expect(p.parse("Jakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sot)", () => {
		expect(p.parse("1 Petrose 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrose 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petrose 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petrose 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pet. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sot)", () => {
		expect(p.parse("2 Petrose 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrose 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petrose 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petrose 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pet. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sot)", () => {
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (sot)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (sot)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Johanne 1 - III Johanne").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Johanne 1 – III Johanne").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Johanne 1 — III Johanne").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bud.js";

describe("Localized book Gen (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bud)", () => {
		expect(p.parse("Genèse 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Diny 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (bud)", () => {
		expect(p.parse("Exode 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Disa 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (bud)", () => {
		expect(p.parse("Bel et le Dragon 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Beel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (bud)", () => {
		expect(p.parse("Lévitique 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Akoo 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (bud)", () => {
		expect(p.parse("Nombres 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Dikà 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (bud)", () => {
		expect(p.parse("Siracide 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Siira 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (bud)", () => {
		expect(p.parse("Sagesse 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Iciin 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (bud)", () => {
		expect(p.parse("Lamentations 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Iyal 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (bud)", () => {
		expect(p.parse("Lettre de Jérémie 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Yeer gbam 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bud)", () => {
		expect(p.parse("Apocalypse 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Dilee 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (bud)", () => {
		expect(p.parse("Deutéronome 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ditee 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (bud)", () => {
		expect(p.parse("Josué 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (bud)", () => {
		expect(p.parse("Juges 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Bibɔ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (bud)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (bud)", () => {
		expect(p.parse("Esaïe 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yees 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bud)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sami 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sami 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bud)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sami 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sami 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bud)", () => {
		expect(p.parse("1 Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Bib 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Bib 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bud)", () => {
		expect(p.parse("2 Rois 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Bib 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Rois 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Bib 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bud)", () => {
		expect(p.parse("1 Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kroo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kroo 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bud)", () => {
		expect(p.parse("2 Chroniques 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kroo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Chroniques 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kroo 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (bud)", () => {
		expect(p.parse("Esdras 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Eesi 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (bud)", () => {
		expect(p.parse("Néhémie 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neey 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (bud)", () => {
		expect(p.parse("Yoob 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (bud)", () => {
		expect(p.parse("Psaumes 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ilan 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (bud)", () => {
		expect(p.parse("Proverbes 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Alaŋ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (bud)", () => {
		expect(p.parse("Ecclésiaste 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Uciŋ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (bud)", () => {
		expect(p.parse("Cantique des trois jeunes 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("B3L 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (bud)", () => {
		expect(p.parse("Cantique des Cantiques 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Slaŋ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (bud)", () => {
		expect(p.parse("Jérémie 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yeer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (bud)", () => {
		expect(p.parse("Ezéchiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eesee 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (bud)", () => {
		expect(p.parse("Daniel (hébreu) 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dani 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (bud)", () => {
		expect(p.parse("Osee 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Osée 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (bud)", () => {
		expect(p.parse("Joël 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joow 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (bud)", () => {
		expect(p.parse("Amoos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (bud)", () => {
		expect(p.parse("Abdias 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ooba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (bud)", () => {
		expect(p.parse("Jonas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yoona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (bud)", () => {
		expect(p.parse("Michée 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Miik 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (bud)", () => {
		expect(p.parse("Nahoum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nawum 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (bud)", () => {
		expect(p.parse("Habaquq 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Abak 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (bud)", () => {
		expect(p.parse("Sophonie 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Seef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (bud)", () => {
		expect(p.parse("Aggée 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Agaa 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (bud)", () => {
		expect(p.parse("Zacharie 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Saka 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (bud)", () => {
		expect(p.parse("Malachie 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mala 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bud)", () => {
		expect(p.parse("Matthieu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bud)", () => {
		expect(p.parse("Maar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marc 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bud)", () => {
		expect(p.parse("Luuki 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bud)", () => {
		expect(p.parse("1 Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoow 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoow 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bud)", () => {
		expect(p.parse("2 Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoow 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoow 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bud)", () => {
		expect(p.parse("3 Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoow 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoow 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bud)", () => {
		expect(p.parse("Jean 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoow 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bud)", () => {
		expect(p.parse("Actes 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Atuun 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bud)", () => {
		expect(p.parse("Romains 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Room 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bud)", () => {
		expect(p.parse("1 Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kɔra 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔra 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bud)", () => {
		expect(p.parse("2 Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kɔra 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔra 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bud)", () => {
		expect(p.parse("Colossiens 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kool 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bud)", () => {
		expect(p.parse("Galates 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gala 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bud)", () => {
		expect(p.parse("Ephésiens 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bud)", () => {
		expect(p.parse("Philippiens 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fiil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bud)", () => {
		expect(p.parse("1 Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tees 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tees 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bud)", () => {
		expect(p.parse("2 Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tees 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tees 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bud)", () => {
		expect(p.parse("1 Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tiim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tiim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bud)", () => {
		expect(p.parse("2 Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tiim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tiim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bud)", () => {
		expect(p.parse("Tiiti 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bud)", () => {
		expect(p.parse("Philémon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fiilm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bud)", () => {
		expect(p.parse("Hébreux 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eebru 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bud)", () => {
		expect(p.parse("Jacques 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaku 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bud)", () => {
		expect(p.parse("1 Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Peet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bud)", () => {
		expect(p.parse("2 Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Peet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bud)", () => {
		expect(p.parse("Juudi 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (bud)", () => {
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Toob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (bud)", () => {
		expect(p.parse("Judith 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Judii 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (bud)", () => {
		expect(p.parse("Baruch 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Baru 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (bud)", () => {
		expect(p.parse("Susanne 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Suus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (bud)", () => {
		expect(p.parse("1 Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Maka 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Maka 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (bud)", () => {
		expect(p.parse("2 Maccabées 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Maka 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Maccabées 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Maka 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Esth (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (bud)", () => {
		expect(p.parse("Esther (hébreu) 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esther 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Eest 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Preferred book names (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (bud)", () => {
		expect(p.parse("Cantique des trois jeunes 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("B3L 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Parser helper should handle book ranges (bud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (bud)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jean - 3 Jean").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jean – 3 Jean").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jean — 3 Jean").osis()).toEqual("1John.1-3John.1");
	});
});

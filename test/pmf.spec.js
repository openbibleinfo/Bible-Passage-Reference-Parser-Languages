"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/pmf.js";

describe("Localized book Gen (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (pmf)", () => {
		expect(p.parse("Pomulanya 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Palaburu 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pal. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (pmf)", () => {
		expect(p.parse("Posuwunya 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Paosu 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Pa. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (pmf)", () => {
		expect(p.parse("Palaong nto Pampue 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tadumpanyomba 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Imamat 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tad. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (pmf)", () => {
		expect(p.parse("Pombilang 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Paimba 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Pai. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (pmf)", () => {
		expect(p.parse("Potumangi 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ratapan 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Pot. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (pmf)", () => {
		expect(p.parse("Pepatongawa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pangkita 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pepat. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (pmf)", () => {
		expect(p.parse("Pawali 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ulang 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Paw. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (pmf)", () => {
		expect(p.parse("Yosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (pmf)", () => {
		expect(p.parse("To Pabotus nTo Israel 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Tadulako 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Tdu. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (pmf)", () => {
		expect(p.parse("Rut. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruti 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (pmf)", () => {
		expect(p.parse("Yesaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yes. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (pmf)", () => {
		expect(p.parse("1 Semueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sem. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Semueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sem. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (pmf)", () => {
		expect(p.parse("2 Semueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sem. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Semueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sem. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (pmf)", () => {
		expect(p.parse("1 Raja-Raja 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Raj. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Raja-Raja 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Raj. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (pmf)", () => {
		expect(p.parse("2 Raja-Raja 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Raj. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Raja-Raja 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Raj. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (pmf)", () => {
		expect(p.parse("1 Tawarikh 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Tawari 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Taw. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Tawarikh 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Tawari 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Taw. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (pmf)", () => {
		expect(p.parse("2 Tawarikh 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Tawari 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Taw. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tawarikh 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tawari 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Taw. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (pmf)", () => {
		expect(p.parse("Esira 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Es. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (pmf)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (pmf)", () => {
		expect(p.parse("Seteri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Set. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (pmf)", () => {
		expect(p.parse("Ayubi 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ayu. 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (pmf)", () => {
		expect(p.parse("Polinga 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Masmur 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Pol. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (pmf)", () => {
		expect(p.parse("Patada 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pat. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (pmf)", () => {
		expect(p.parse("Topotuntu 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Top. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (pmf)", () => {
		expect(p.parse("Ngayu I Ncalomo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ng. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (pmf)", () => {
		expect(p.parse("Yeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (pmf)", () => {
		expect(p.parse("Yehesikieli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Yeh. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (pmf)", () => {
		expect(p.parse("Danieli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (pmf)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (pmf)", () => {
		expect(p.parse("Yoeli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yo. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (pmf)", () => {
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (pmf)", () => {
		expect(p.parse("Obaja 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (pmf)", () => {
		expect(p.parse("Yunus 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (pmf)", () => {
		expect(p.parse("Mikha 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (pmf)", () => {
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahu 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (pmf)", () => {
		expect(p.parse("Habaku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (pmf)", () => {
		expect(p.parse("Sepanya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sep. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (pmf)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (pmf)", () => {
		expect(p.parse("Sakharia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sakaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sak. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (pmf)", () => {
		expect(p.parse("Maleaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (pmf)", () => {
		expect(p.parse("Matius 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (pmf)", () => {
		expect(p.parse("Marakusi 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (pmf)", () => {
		expect(p.parse("Lukasi 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pmf)", () => {
		expect(p.parse("1 Yohanes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohanes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pmf)", () => {
		expect(p.parse("2 Yohanes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohanes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (pmf)", () => {
		expect(p.parse("3 Yohanes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoh. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yohanes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (pmf)", () => {
		expect(p.parse("Yohanes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yohane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (pmf)", () => {
		expect(p.parse("Palaong mPomakau i mPue Yesu 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Potetala Wa'a Ncuro 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Palaong mPomakau 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Pwn. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (pmf)", () => {
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pmf)", () => {
		expect(p.parse("1 Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pmf)", () => {
		expect(p.parse("2 Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (pmf)", () => {
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (pmf)", () => {
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (pmf)", () => {
		expect(p.parse("Epesus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epesu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ep. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (pmf)", () => {
		expect(p.parse("Pilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Plp. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pmf)", () => {
		expect(p.parse("1 Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pmf)", () => {
		expect(p.parse("2 Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pmf)", () => {
		expect(p.parse("1 Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotiu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotiu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pmf)", () => {
		expect(p.parse("2 Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotiu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotiu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (pmf)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (pmf)", () => {
		expect(p.parse("Pilemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pilemo 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Plm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (pmf)", () => {
		expect(p.parse("Ibarani 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibrani 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ib. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (pmf)", () => {
		expect(p.parse("Yakobus 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakobu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pmf)", () => {
		expect(p.parse("1 Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Peturu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Ptr. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peturu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ptr. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pmf)", () => {
		expect(p.parse("2 Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Peturu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Ptr. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peturu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Ptr. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (pmf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (pmf)", () => {
		expect(p.parse("I Yudas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yudasi 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yudas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud. 1:1").osis()).toEqual("Jude.1.1");
	});
});

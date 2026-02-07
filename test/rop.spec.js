"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/rop.js";

describe("Localized book Gen (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (rop)", () => {
		expect(p.parse("Jenasis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Jen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (rop)", () => {
		expect(p.parse("Eksadas 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eksa 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (rop)", () => {
		expect(p.parse("Labidakas 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Labid 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (rop)", () => {
		expect(p.parse("Nambas 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nam 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (rop)", () => {
		expect(p.parse("Leminteishans 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lem 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (rop)", () => {
		expect(p.parse("Rebaleishan 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Reb 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (rop)", () => {
		expect(p.parse("Dyudaranami 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dyud 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (rop)", () => {
		expect(p.parse("Joshuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (rop)", () => {
		expect(p.parse("Jadjis 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jadj 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (rop)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (rop)", () => {
		expect(p.parse("Aisaiya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Aisai 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (rop)", () => {
		expect(p.parse("1 Semyul 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sem 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Semyul 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sem 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Fes Semyul 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Fes Sem 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Fes. Semyul 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Fes. Sem 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (rop)", () => {
		expect(p.parse("2 Semyul 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sem 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Semyul 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sem 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Sekan Semyul 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Sekan Sem 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Sekan. Semyul 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Sekan. Sem 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (rop)", () => {
		expect(p.parse("1 Kings 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 King 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kings 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. King 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Fes Kings 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Fes King 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Fes. Kings 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Fes. King 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (rop)", () => {
		expect(p.parse("2 Kings 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 King 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kings 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. King 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Sekan Kings 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Sekan King 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Sekan. Kings 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Sekan. King 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (rop)", () => {
		expect(p.parse("1 Kranakuls 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kran 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kranakuls 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kran 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Fes Kranakuls 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Fes Kran 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Fes. Kranakuls 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Fes. Kran 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (rop)", () => {
		expect(p.parse("2 Kranakuls 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kran 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kranakuls 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kran 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Sekan Kranakuls 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Sekan Kran 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Sekan. Kranakuls 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Sekan. Kran 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (rop)", () => {
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (rop)", () => {
		expect(p.parse("Niyamaiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Niya 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (rop)", () => {
		expect(p.parse("Esta 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (rop)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (rop)", () => {
		expect(p.parse("Ola Saam 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Saam 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (rop)", () => {
		expect(p.parse("Prabebs 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prab 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (rop)", () => {
		expect(p.parse("Aklisiyestis 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Akli 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (rop)", () => {
		expect(p.parse("Brabli Gudwan Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (rop)", () => {
		expect(p.parse("Jeramaiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jera 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (rop)", () => {
		expect(p.parse("Isikiyel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Isik 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (rop)", () => {
		expect(p.parse("Denyul 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Den 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (rop)", () => {
		expect(p.parse("Hoseiya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (rop)", () => {
		expect(p.parse("Jowal 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (rop)", () => {
		expect(p.parse("Eimos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (rop)", () => {
		expect(p.parse("Obadaiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (rop)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (rop)", () => {
		expect(p.parse("Maika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (rop)", () => {
		expect(p.parse("Neiham 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nei 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (rop)", () => {
		expect(p.parse("Hebakak 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Heba 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (rop)", () => {
		expect(p.parse("Sefanaiya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (rop)", () => {
		expect(p.parse("Hegai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Heg 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (rop)", () => {
		expect(p.parse("Sekaraiya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (rop)", () => {
		expect(p.parse("Melakai 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mel 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (rop)", () => {
		expect(p.parse("Methyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Meth 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (rop)", () => {
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (rop)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (rop)", () => {
		expect(p.parse("Thed Jon 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jon 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rop)", () => {
		expect(p.parse("1 Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Fes Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Fes. Jon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rop)", () => {
		expect(p.parse("2 Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Sekan Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Sekan. Jon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (rop)", () => {
		expect(p.parse("Jon 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (rop)", () => {
		expect(p.parse("Eks 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (rop)", () => {
		expect(p.parse("Romans 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rop)", () => {
		expect(p.parse("1 Karinthiyans 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Karin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Karinthiyans 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Karin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Fes Karinthiyans 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Fes Karin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Fes. Karinthiyans 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Fes. Karin 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rop)", () => {
		expect(p.parse("2 Karinthiyans 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Karin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Karinthiyans 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Karin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Sekan Karinthiyans 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Sekan Karin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Sekan. Karinthiyans 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Sekan. Karin 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (rop)", () => {
		expect(p.parse("Kaloshans 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kalosh 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (rop)", () => {
		expect(p.parse("Galeishans 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galei 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (rop)", () => {
		expect(p.parse("Ifishans 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ifi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (rop)", () => {
		expect(p.parse("Falipiyans 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Falip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rop)", () => {
		expect(p.parse("1 Thesaloniyans 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thesaloniyans 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Fes Thesaloniyans 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Fes Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Fes. Thesaloniyans 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Fes. Thes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rop)", () => {
		expect(p.parse("2 Thesaloniyans 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thesaloniyans 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Sekan Thesaloniyans 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Sekan Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Sekan. Thesaloniyans 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Sekan. Thes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rop)", () => {
		expect(p.parse("1 Timathi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timathi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Fes Timathi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Fes Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Fes. Timathi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Fes. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rop)", () => {
		expect(p.parse("2 Timathi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timathi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Sekan Timathi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Sekan Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Sekan. Timathi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Sekan. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (rop)", () => {
		expect(p.parse("Taidas 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tai 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (rop)", () => {
		expect(p.parse("Failiman 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fai 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (rop)", () => {
		expect(p.parse("Hibrus 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (rop)", () => {
		expect(p.parse("Jeims 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rop)", () => {
		expect(p.parse("1 Pida 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pida 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Fes Pida 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Fes. Pida 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rop)", () => {
		expect(p.parse("2 Pida 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pida 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Sekan Pida 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Sekan. Pida 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (rop)", () => {
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (rop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (rop)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jon - Thed Jon").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jon – Thed Jon").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jon — Thed Jon").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hch.js";

describe("Localized book Gen (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (hch)", () => {
		expect(p.parse("Tsutɨarika 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Tsut 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (hch)", () => {
		expect(p.parse("Memeyekɨ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mem 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (hch)", () => {
		expect(p.parse("Mawari 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Maw 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (hch)", () => {
		expect(p.parse("'Inɨatsie 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("'Inɨa 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (hch)", () => {
		expect(p.parse("Hiwerika 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Hiw 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (hch)", () => {
		expect(p.parse("Matsiɨkɨtɨ kemɨratɨa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mats 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (hch)", () => {
		expect(p.parse("Hutarieka 'inɨari 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Hut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (hch)", () => {
		expect(p.parse("Kutsuhexi 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Kuts 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (hch)", () => {
		expect(p.parse("'Itsɨkate 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("'Its 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (hch)", () => {
		expect(p.parse("Xuti 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Xut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (hch)", () => {
		expect(p.parse("Kitsariyaxi 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Kits 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hch)", () => {
		expect(p.parse("1 Tsamuheri 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Tsamuheri 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hch)", () => {
		expect(p.parse("2 Tsamuheri 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Tsamuheri 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hch)", () => {
		expect(p.parse("1Tsam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hch)", () => {
		expect(p.parse("2Tsam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hch)", () => {
		expect(p.parse("1 Te'aitamete 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Te'aitamete 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hch)", () => {
		expect(p.parse("2 Te'aitamete 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Te'aitamete 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hch)", () => {
		expect(p.parse("1Te 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hch)", () => {
		expect(p.parse("2Te 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hch)", () => {
		expect(p.parse("1 Kemɨtiuyɨ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kemɨtiuyɨ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hch)", () => {
		expect(p.parse("2 Kemɨtiuyɨ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kemɨtiuyɨ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hch)", () => {
		expect(p.parse("1Kem 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hch)", () => {
		expect(p.parse("2Kem 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (hch)", () => {
		expect(p.parse("'Etsitɨraxi 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("'Ets 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (hch)", () => {
		expect(p.parse("Nehemiyaxi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (hch)", () => {
		expect(p.parse("'Etsitexi 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("'Etsi 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (hch)", () => {
		expect(p.parse("Kuwi 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (hch)", () => {
		expect(p.parse("Nɨawari 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Nɨa 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (hch)", () => {
		expect(p.parse("Temaiwawemete 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Temai 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (hch)", () => {
		expect(p.parse("Ti'ɨkitame 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("'Ɨki 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (hch)", () => {
		expect(p.parse("Kwikari 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Kwi 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (hch)", () => {
		expect(p.parse("Keremiyaxi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ker 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (hch)", () => {
		expect(p.parse("'Etsekieri 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("'Etse 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (hch)", () => {
		expect(p.parse("Tanieri 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Tan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (hch)", () => {
		expect(p.parse("'Utseyaxi 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("'Uts 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (hch)", () => {
		expect(p.parse("Kuheri 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Kuh 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (hch)", () => {
		expect(p.parse("'Amuxi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("'Amu 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (hch)", () => {
		expect(p.parse("'Awiriyaxi 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("'Awi 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (hch)", () => {
		expect(p.parse("Kunatsi 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Kun 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (hch)", () => {
		expect(p.parse("Mikeyaxi 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (hch)", () => {
		expect(p.parse("Nahumi 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (hch)", () => {
		expect(p.parse("'Awakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("'Awa 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (hch)", () => {
		expect(p.parse("Tsupuniyaxi 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Tsup 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (hch)", () => {
		expect(p.parse("'Akehuxi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("'Ake 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (hch)", () => {
		expect(p.parse("Tsakariyaxi 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Tsak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (hch)", () => {
		expect(p.parse("Marakiyaxi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mara 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (hch)", () => {
		expect(p.parse("Mateu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (hch)", () => {
		expect(p.parse("Marikuxi 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (hch)", () => {
		expect(p.parse("Rukaxi 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ruk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hch)", () => {
		expect(p.parse("1Wa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hch)", () => {
		expect(p.parse("2Wa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hch)", () => {
		expect(p.parse("3 Wani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Wa 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hch)", () => {
		expect(p.parse("1 Wani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Wani 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hch)", () => {
		expect(p.parse("2 Wani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Wani 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hch)", () => {
		expect(p.parse("Wani 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Wa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (hch)", () => {
		expect(p.parse("Nɨ'ariekate 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Nɨ'a 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (hch)", () => {
		expect(p.parse("Xumatari 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Xum 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hch)", () => {
		expect(p.parse("1 Kurinitutari 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kurinitutari 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hch)", () => {
		expect(p.parse("2 Kurinitutari 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kurinitutari 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hch)", () => {
		expect(p.parse("1Ku 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hch)", () => {
		expect(p.parse("2Ku 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (hch)", () => {
		expect(p.parse("Kurutsetari 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kur 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (hch)", () => {
		expect(p.parse("Karatsiyatari 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kar 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (hch)", () => {
		expect(p.parse("'Epetsutari 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("'Epe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (hch)", () => {
		expect(p.parse("Piriputari 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pir 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hch)", () => {
		expect(p.parse("1 Tetsarunikatari 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tetsarunikatari 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hch)", () => {
		expect(p.parse("2 Tetsarunikatari 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tetsarunikatari 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hch)", () => {
		expect(p.parse("1Tets 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hch)", () => {
		expect(p.parse("2Tets 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hch)", () => {
		expect(p.parse("1 Timuteu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timuteu 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hch)", () => {
		expect(p.parse("2 Timuteu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timuteu 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hch)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hch)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (hch)", () => {
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (hch)", () => {
		expect(p.parse("Kirimuni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Kir 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (hch)", () => {
		expect(p.parse("Hepɨrayutsixi 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hep 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (hch)", () => {
		expect(p.parse("Tsatiyaku 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Tsat 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hch)", () => {
		expect(p.parse("1 Pekuru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pekuru 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hch)", () => {
		expect(p.parse("2 Pekuru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pekuru 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hch)", () => {
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hch)", () => {
		expect(p.parse("2Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (hch)", () => {
		expect(p.parse("Kura 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (hch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (hch)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Wa - 3 Wani").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Wa – 3 Wani").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Wa — 3 Wani").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/laj.js";

describe("Localized book Gen (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (laj)", () => {
		expect(p.parse("Agege 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Age. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (laj)", () => {
		expect(p.parse("Yaa 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (laj)", () => {
		expect(p.parse("Olev. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Olevi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (laj)", () => {
		expect(p.parse("Wel 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (laj)", () => {
		expect(p.parse("Wer Koko 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Koko 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (laj)", () => {
		expect(p.parse("Nyut a Lakana 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Nyut 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (laj)", () => {
		expect(p.parse("Lodo Cik 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Lodo 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (laj)", () => {
		expect(p.parse("Yocwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yoc. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (laj)", () => {
		expect(p.parse("Oŋolkop 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Oŋol. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (laj)", () => {
		expect(p.parse("Luci 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (laj)", () => {
		expect(p.parse("Icaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ica. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (laj)", () => {
		expect(p.parse("1 Camwiri 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Cam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Camwiri 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Cam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (laj)", () => {
		expect(p.parse("2 Camwiri 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Cam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Camwiri 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Cam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (laj)", () => {
		expect(p.parse("1 Obakki 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Obak. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Obakki 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Obak. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (laj)", () => {
		expect(p.parse("2 Obakki 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Obak. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Obakki 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Obak. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (laj)", () => {
		expect(p.parse("1 Tekwaro 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Tek. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Tekwaro 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Tek. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (laj)", () => {
		expect(p.parse("2 Tekwaro 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Tek. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tekwaro 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tek. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (laj)", () => {
		expect(p.parse("Ejira 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Eji. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (laj)", () => {
		expect(p.parse("Nekemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nek. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (laj)", () => {
		expect(p.parse("Ecita 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (laj)", () => {
		expect(p.parse("Yubu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (laj)", () => {
		expect(p.parse("Jabuli 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Jab. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (laj)", () => {
		expect(p.parse("Carokop 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Caro. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (laj)", () => {
		expect(p.parse("Arabkop 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Arab. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (laj)", () => {
		expect(p.parse("Wer a Culeman 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Wer 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (laj)", () => {
		expect(p.parse("Jeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (laj)", () => {
		expect(p.parse("Ejekeri 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ejek. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (laj)", () => {
		expect(p.parse("Danieri 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (laj)", () => {
		expect(p.parse("Kocea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Koc. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (laj)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (laj)", () => {
		expect(p.parse("Amoc 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (laj)", () => {
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (laj)", () => {
		expect(p.parse("Yon. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (laj)", () => {
		expect(p.parse("Mik. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (laj)", () => {
		expect(p.parse("Nakum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nak. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (laj)", () => {
		expect(p.parse("Abakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Abak. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (laj)", () => {
		expect(p.parse("Jepania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Jep. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (laj)", () => {
		expect(p.parse("Aggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Agg. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (laj)", () => {
		expect(p.parse("Jekeria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Jek. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (laj)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (laj)", () => {
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (laj)", () => {
		expect(p.parse("Marako 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (laj)", () => {
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (laj)", () => {
		expect(p.parse("1 Lakana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Lak. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Lakana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Lak. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (laj)", () => {
		expect(p.parse("2 Lakana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Lak. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Lakana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Lak. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (laj)", () => {
		expect(p.parse("3 Lakana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Lak. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Lakana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Lak. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (laj)", () => {
		expect(p.parse("Lakana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Lak. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (laj)", () => {
		expect(p.parse("Tic Okwena 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tic 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (laj)", () => {
		expect(p.parse("Jo Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (laj)", () => {
		expect(p.parse("1 Korinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (laj)", () => {
		expect(p.parse("2 Korinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (laj)", () => {
		expect(p.parse("Jo Kolocai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (laj)", () => {
		expect(p.parse("Jo Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (laj)", () => {
		expect(p.parse("Jo Epeco 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epeco 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ep. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (laj)", () => {
		expect(p.parse("Jo Pilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (laj)", () => {
		expect(p.parse("1 Jo Tecalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tec. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Jo Tecalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tec. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (laj)", () => {
		expect(p.parse("2 Jo Tecalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tec. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Jo Tecalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tec. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (laj)", () => {
		expect(p.parse("1 Temoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tem. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Temoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tem. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (laj)", () => {
		expect(p.parse("2 Temoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tem. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Temoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tem. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (laj)", () => {
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (laj)", () => {
		expect(p.parse("Pilemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pile 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (laj)", () => {
		expect(p.parse("Jo Eburania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eb. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (laj)", () => {
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (laj)", () => {
		expect(p.parse("1 Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (laj)", () => {
		expect(p.parse("2 Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (laj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (laj)", () => {
		expect(p.parse("Jud. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
	});
});

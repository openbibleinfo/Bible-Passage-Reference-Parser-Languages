"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kbr.js";

describe("Localized book Gen (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kbr)", () => {
		expect(p.parse("Halloo 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Hal. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kbr)", () => {
		expect(p.parse("Key. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Keyo 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kbr)", () => {
		expect(p.parse("Leweenaꞌo 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lew. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kbr)", () => {
		expect(p.parse("Haddoo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Had. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (kbr)", () => {
		expect(p.parse("Shoosh. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Shoosho 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kbr)", () => {
		expect(p.parse("Yaaꞌo. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Yaaꞌoo 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kbr)", () => {
		expect(p.parse("Yibbaatoo 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yibba. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kbr)", () => {
		expect(p.parse("Yaas. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yaasi 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kbr)", () => {
		expect(p.parse("Woraaferasheenaꞌo 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Wora. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kbr)", () => {
		expect(p.parse("Ruut. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruuti 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (kbr)", () => {
		expect(p.parse("Isiyaasi 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isi. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kbr)", () => {
		expect(p.parse("1 Saameeli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Saam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Saameeli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Saam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kbr)", () => {
		expect(p.parse("2 Saameeli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Saam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Saameeli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Saam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kbr)", () => {
		expect(p.parse("1 Taateenaꞌo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Taat. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Taateenaꞌo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Taat. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kbr)", () => {
		expect(p.parse("2 Taateenaꞌo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Taat. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Taateenaꞌo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Taat. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kbr)", () => {
		expect(p.parse("1 Kiinoo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kiin. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kiinoo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kiin. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kbr)", () => {
		expect(p.parse("2 Kiinoo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kiin. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kiinoo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kiin. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (kbr)", () => {
		expect(p.parse("Izir. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Iziri 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (kbr)", () => {
		expect(p.parse("Nehimi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kbr)", () => {
		expect(p.parse("Asteeri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ast. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (kbr)", () => {
		expect(p.parse("Iyoob. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Iyoobi 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kbr)", () => {
		expect(p.parse("Shoddo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Shod. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kbr)", () => {
		expect(p.parse("Shaahiyoo 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Shaah. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kbr)", () => {
		expect(p.parse("Dojjecho 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Doj. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (kbr)", () => {
		expect(p.parse("Solomooni 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sol. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (kbr)", () => {
		expect(p.parse("Erimiyaasi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Erim. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (kbr)", () => {
		expect(p.parse("Hiziqeeli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hiz. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kbr)", () => {
		expect(p.parse("Daaneeli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (kbr)", () => {
		expect(p.parse("Hosee'i 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (kbr)", () => {
		expect(p.parse("Yoꞌeel. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoꞌeeli 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (kbr)", () => {
		expect(p.parse("Amootsi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (kbr)", () => {
		expect(p.parse("Abidiyi 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abid. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kbr)", () => {
		expect(p.parse("Yoonaasi 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yoona. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (kbr)", () => {
		expect(p.parse("Mikiyaasi 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mik. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (kbr)", () => {
		expect(p.parse("Naahoomi 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naah. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (kbr)", () => {
		expect(p.parse("Imbaaqoomi 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Imba. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (kbr)", () => {
		expect(p.parse("Sofoniyaasi 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofo. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (kbr)", () => {
		expect(p.parse("Haag. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haagi 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (kbr)", () => {
		expect(p.parse("Zakaariyaasi 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zaka. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kbr)", () => {
		expect(p.parse("Milikiyaasi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Milik. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kbr)", () => {
		expect(p.parse("Maatiyoosi 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kbr)", () => {
		expect(p.parse("Maariqoosi 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maar. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kbr)", () => {
		expect(p.parse("Luqaasi 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luqa. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kbr)", () => {
		expect(p.parse("1 Yowannisi 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yowa. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yowannisi 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yowa. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kbr)", () => {
		expect(p.parse("2 Yowannisi 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yowa. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yowannisi 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yowa. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kbr)", () => {
		expect(p.parse("3 Yowannisi 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yowa. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yowannisi 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yowa. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kbr)", () => {
		expect(p.parse("Yowannisi 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yowa. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kbr)", () => {
		expect(p.parse("Mishiraachechinaꞌo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mish. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kbr)", () => {
		expect(p.parse("Room. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roomi 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kbr)", () => {
		expect(p.parse("1 Qorontoosi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Qoro. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Qorontoosi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Qoro. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kbr)", () => {
		expect(p.parse("2 Qorontoosi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Qoro. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Qorontoosi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Qoro. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kbr)", () => {
		expect(p.parse("Qolaasiyaasi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Qola. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kbr)", () => {
		expect(p.parse("Galaati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gala. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kbr)", () => {
		expect(p.parse("Efesooni 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efes. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kbr)", () => {
		expect(p.parse("Filipphisiyoosi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kbr)", () => {
		expect(p.parse("1 Tasaloonqi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tasa. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tasaloonqi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tasa. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kbr)", () => {
		expect(p.parse("2 Tasaloonqi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tasa. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tasaloonqi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tasa. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kbr)", () => {
		expect(p.parse("1 Ximootiyoosi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ximo. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ximootiyoosi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ximo. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kbr)", () => {
		expect(p.parse("2 Ximootiyoosi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ximo. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ximootiyoosi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ximo. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kbr)", () => {
		expect(p.parse("Titoosi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kbr)", () => {
		expect(p.parse("Filimooni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filimo. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kbr)", () => {
		expect(p.parse("Hibireena'o 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kbr)", () => {
		expect(p.parse("Yaaqobi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaaqo. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kbr)", () => {
		expect(p.parse("1 Pheexiroosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pheex. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pheexiroosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pheex. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kbr)", () => {
		expect(p.parse("2 Pheexiroosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pheex. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pheexiroosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pheex. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kbr)", () => {
		expect(p.parse("Yihudi 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yihu. 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sid.js";

describe("Localized book Gen (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (sid)", () => {
		expect(p.parse("Kalaqama 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Kal 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (sid)", () => {
		expect(p.parse("Fulo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ful 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (sid)", () => {
		expect(p.parse("Leewaawoota 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lew 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (sid)", () => {
		expect(p.parse("Kiiro 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kir 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (sid)", () => {
		expect(p.parse("Ermiyaasi Qurto 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Erq 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sid)", () => {
		expect(p.parse("Yohaannis Ajuuja 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Aju 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (sid)", () => {
		expect(p.parse("Marro 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (sid)", () => {
		expect(p.parse("Iyyaasu 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iya 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (sid)", () => {
		expect(p.parse("Ejjeetto 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Eje 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (sid)", () => {
		expect(p.parse("Ruuti 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (sid)", () => {
		expect(p.parse("Isayaasi 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (sid)", () => {
		expect(p.parse("Umi Saamueeli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Umi. Saamueeli 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (sid)", () => {
		expect(p.parse("Layinki Saamueeli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Layinki. Saamueeli 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (sid)", () => {
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (sid)", () => {
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (sid)", () => {
		expect(p.parse("Umi Mootoolla 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Umi. Mootoolla 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (sid)", () => {
		expect(p.parse("Layinki Mootoolla 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Layinki. Mootoolla 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (sid)", () => {
		expect(p.parse("1Mot 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (sid)", () => {
		expect(p.parse("2Mot 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (sid)", () => {
		expect(p.parse("Umi Duduwo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Umi. Duduwo 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (sid)", () => {
		expect(p.parse("Layinki Duduwo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Layinki. Duduwo 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (sid)", () => {
		expect(p.parse("1Dud 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (sid)", () => {
		expect(p.parse("2Dud 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (sid)", () => {
		expect(p.parse("Izira 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Izi 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (sid)", () => {
		expect(p.parse("Nehimiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (sid)", () => {
		expect(p.parse("Asteeri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ast 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (sid)", () => {
		expect(p.parse("Iyyoobi 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Iyo 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (sid)", () => {
		expect(p.parse("Lawishsha 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Law 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (sid)", () => {
		expect(p.parse("Rosiisaancho 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ros 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (sid)", () => {
		expect(p.parse("Faarso Roore Faarso 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Farf 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (sid)", () => {
		expect(p.parse("Faarso 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Far 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (sid)", () => {
		expect(p.parse("Ermiyaasi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Erm 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (sid)", () => {
		expect(p.parse("Hiziqeeli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hiz 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (sid)", () => {
		expect(p.parse("Daanieeli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (sid)", () => {
		expect(p.parse("Hoosei 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (sid)", () => {
		expect(p.parse("Iyueeli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Iyu 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (sid)", () => {
		expect(p.parse("Amootsi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (sid)", () => {
		expect(p.parse("Abidiyu 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abi 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (sid)", () => {
		expect(p.parse("Yoonaasi 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (sid)", () => {
		expect(p.parse("Mikiyaasi 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (sid)", () => {
		expect(p.parse("Nahoomi 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (sid)", () => {
		expect(p.parse("Imbaaqoomi 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Imb 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (sid)", () => {
		expect(p.parse("Soffooniyaasi 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (sid)", () => {
		expect(p.parse("Hage 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (sid)", () => {
		expect(p.parse("Zakkaariyaasi 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (sid)", () => {
		expect(p.parse("Milkiyaasi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mil 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sid)", () => {
		expect(p.parse("Maatewoosi 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sid)", () => {
		expect(p.parse("Maarqoosi 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maq 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sid)", () => {
		expect(p.parse("Luqaasi 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luq 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sid)", () => {
		expect(p.parse("1Yoh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sid)", () => {
		expect(p.parse("2Yoh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sid)", () => {
		expect(p.parse("Sayikki Yohaannisi 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sid)", () => {
		expect(p.parse("Umi Yohaannisi 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Umi. Yohaannisi 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sid)", () => {
		expect(p.parse("Layinki Yohaannisi 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Layinki. Yohaannisi 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sid)", () => {
		expect(p.parse("Yohaannisi 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sid)", () => {
		expect(p.parse("Soqqamaasinete Looso 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Soq 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sid)", () => {
		expect(p.parse("Roomu Sokka 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sid)", () => {
		expect(p.parse("Umi Qorontoosi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Umi. Qorontoosi 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sid)", () => {
		expect(p.parse("Layinki Qorontoosi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Layinki. Qorontoosi 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sid)", () => {
		expect(p.parse("1Qor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sid)", () => {
		expect(p.parse("2Qor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sid)", () => {
		expect(p.parse("Qolasiyaasi Sokka 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Qol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sid)", () => {
		expect(p.parse("Galatiyu Sokka 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sid)", () => {
		expect(p.parse("Efesooni Sokka 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sid)", () => {
		expect(p.parse("Filiphisiyusi Sokka 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sid)", () => {
		expect(p.parse("Umi Teselonqe 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Umi. Teselonqe 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sid)", () => {
		expect(p.parse("Layinki Teselonqe 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Layinki. Teselonqe 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sid)", () => {
		expect(p.parse("1Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sid)", () => {
		expect(p.parse("2Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sid)", () => {
		expect(p.parse("Umi Ximootewoosi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Umi. Ximootewoosi 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sid)", () => {
		expect(p.parse("Layinki Ximootewoosi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Layinki. Ximootewoosi 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sid)", () => {
		expect(p.parse("1Xim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sid)", () => {
		expect(p.parse("2Xim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sid)", () => {
		expect(p.parse("Tiito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sid)", () => {
		expect(p.parse("Filimoona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Film 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sid)", () => {
		expect(p.parse("Ibiraawoota 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibi 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sid)", () => {
		expect(p.parse("Yaiqoobi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yai 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sid)", () => {
		expect(p.parse("Umi Pheexiroosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Umi. Pheexiroosi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sid)", () => {
		expect(p.parse("Layinki Pheexiroosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Layinki. Pheexiroosi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sid)", () => {
		expect(p.parse("1Phe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sid)", () => {
		expect(p.parse("2Phe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sid)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sid)", () => {
		expect(p.parse("Yihuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yih 1:1").osis()).toEqual("Jude.1.1");
	});
});

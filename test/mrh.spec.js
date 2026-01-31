"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mrh.js";

describe("Localized book Gen (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mrh)", () => {
		expect(p.parse("Âthaona 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Âtn 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (mrh)", () => {
		expect(p.parse("Puasaina 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Pua 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (mrh)", () => {
		expect(p.parse("Theihthaina 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ttn 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (mrh)", () => {
		expect(p.parse("Maluhreina 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Maluh 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (mrh)", () => {
		expect(p.parse("Chaphôhtuna 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Chap 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mrh)", () => {
		expect(p.parse("Biephuah 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Biep 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (mrh)", () => {
		expect(p.parse("Ryhpachaneina 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ryhpa 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (mrh)", () => {
		expect(p.parse("Zawsua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Zsua 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (mrh)", () => {
		expect(p.parse("Ryureituhpazy 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Rrt 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (mrh)", () => {
		expect(p.parse("Ruthi 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (mrh)", () => {
		expect(p.parse("Isai 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mrh)", () => {
		expect(p.parse("1 Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mrh)", () => {
		expect(p.parse("2 Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mrh)", () => {
		expect(p.parse("1 Abeizy 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Abei 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Abeizy 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Abei 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mrh)", () => {
		expect(p.parse("2 Abeizy 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Abei 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Abeizy 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Abei 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mrh)", () => {
		expect(p.parse("1 Thâtihzyrona 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ttr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Thâtihzyrona 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ttr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mrh)", () => {
		expect(p.parse("2 Thâtihzyrona 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ttr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Thâtihzyrona 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ttr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (mrh)", () => {
		expect(p.parse("Ezrâ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (mrh)", () => {
		expect(p.parse("Nehemiah 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (mrh)", () => {
		expect(p.parse("Estheri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (mrh)", () => {
		expect(p.parse("Zawbâ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Zbâ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (mrh)", () => {
		expect(p.parse("Biesozy 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Bies 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (mrh)", () => {
		expect(p.parse("Biechhotuhpa 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Biech 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (mrh)", () => {
		expect(p.parse("Hlazy Hla 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hhl 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (mrh)", () => {
		expect(p.parse("Hlazy 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Hla 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (mrh)", () => {
		expect(p.parse("Zeremiah 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Zer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (mrh)", () => {
		expect(p.parse("Ezekia 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (mrh)", () => {
		expect(p.parse("Dâniah 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dân 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (mrh)", () => {
		expect(p.parse("Hôsia 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hôs 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (mrh)", () => {
		expect(p.parse("Zôela 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Zôe 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (mrh)", () => {
		expect(p.parse("Amôsâ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ams 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (mrh)", () => {
		expect(p.parse("Ôbadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ôbd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (mrh)", () => {
		expect(p.parse("Zawna 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Zna 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (mrh)", () => {
		expect(p.parse("Mikâ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (mrh)", () => {
		expect(p.parse("Nâhu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nâh 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (mrh)", () => {
		expect(p.parse("Habaku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (mrh)", () => {
		expect(p.parse("Zephania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zep 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (mrh)", () => {
		expect(p.parse("Hâkai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hâk 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (mrh)", () => {
		expect(p.parse("Zekaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zkr 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (mrh)", () => {
		expect(p.parse("Malakhai 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mrh)", () => {
		expect(p.parse("Mathai 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mrh)", () => {
		expect(p.parse("Mâka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mka 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mrh)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mrh)", () => {
		expect(p.parse("1 Zawhâna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Zhn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zawhâna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zhn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mrh)", () => {
		expect(p.parse("2 Zawhâna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Zhn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zawhâna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zhn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mrh)", () => {
		expect(p.parse("3 Zawhâna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Zhn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zawhâna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zhn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mrh)", () => {
		expect(p.parse("Zawhâna 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Zhn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mrh)", () => {
		expect(p.parse("Hmotaopazy 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hmt 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mrh)", () => {
		expect(p.parse("Rawma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mrh)", () => {
		expect(p.parse("1 Kawrini 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kaw 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kawrini 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kaw 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mrh)", () => {
		expect(p.parse("2 Kawrini 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kaw 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kawrini 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kaw 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mrh)", () => {
		expect(p.parse("Kaolaosâ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kao 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mrh)", () => {
		expect(p.parse("Kalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mrh)", () => {
		expect(p.parse("Ephesi 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mrh)", () => {
		expect(p.parse("Philipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mrh)", () => {
		expect(p.parse("1 Thysalawnika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thys 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thysalawnika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thys 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mrh)", () => {
		expect(p.parse("2 Thysalawnika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thys 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thysalawnika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thys 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mrh)", () => {
		expect(p.parse("1 Timawthy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timawthy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mrh)", () => {
		expect(p.parse("2 Timawthy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timawthy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mrh)", () => {
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mrh)", () => {
		expect(p.parse("Philemaw 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mrh)", () => {
		expect(p.parse("Hebrai 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mrh)", () => {
		expect(p.parse("Zâmie 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zâm 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mrh)", () => {
		expect(p.parse("1 Pity 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pity 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mrh)", () => {
		expect(p.parse("2 Pity 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pity 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mrh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mrh)", () => {
		expect(p.parse("Zudâh 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Zud 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/teo.js";

describe("Localized book Gen (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (teo)", () => {
		expect(p.parse("Ageun 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Age 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (teo)", () => {
		expect(p.parse("Anyoun 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Any 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (teo)", () => {
		expect(p.parse("Ilebin 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Leb 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (teo)", () => {
		expect(p.parse("Aimario 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (teo)", () => {
		expect(p.parse("Akuudian 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Aku 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (teo)", () => {
		expect(p.parse("Apukokinio 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apuk 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apu 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (teo)", () => {
		expect(p.parse("Ikisila 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ikis 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (teo)", () => {
		expect(p.parse("Yosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (teo)", () => {
		expect(p.parse("Ikatubok 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Tub 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (teo)", () => {
		expect(p.parse("Rusi 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rus 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (teo)", () => {
		expect(p.parse("Isaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (teo)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (teo)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (teo)", () => {
		expect(p.parse("1 Ikabakan 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ika 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ikabakan 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ika 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (teo)", () => {
		expect(p.parse("2 Ikabakan 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ika 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ikabakan 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ika 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (teo)", () => {
		expect(p.parse("1 Aisiitonokin 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Siit 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Aisiitonokin 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Siit 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (teo)", () => {
		expect(p.parse("2 Aisiltonokin 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Siit 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Aisiltonokin 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Siit 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (teo)", () => {
		expect(p.parse("Esera 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (teo)", () => {
		expect(p.parse("Nekemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nek 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (teo)", () => {
		expect(p.parse("Esita 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (teo)", () => {
		expect(p.parse("Yob 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (teo)", () => {
		expect(p.parse("Isabulin 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Isab 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sab 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (teo)", () => {
		expect(p.parse("Awaragasia 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Awar 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Awa 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (teo)", () => {
		expect(p.parse("Ekalimonokinan 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Lim 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (teo)", () => {
		expect(p.parse("Ekosio 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Eko 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (teo)", () => {
		expect(p.parse("Yeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (teo)", () => {
		expect(p.parse("Esekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (teo)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (teo)", () => {
		expect(p.parse("Kosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Kos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (teo)", () => {
		expect(p.parse("Yoel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoe 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (teo)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (teo)", () => {
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (teo)", () => {
		expect(p.parse("Yon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (teo)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (teo)", () => {
		expect(p.parse("Nakum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nak 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (teo)", () => {
		expect(p.parse("Kabakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Kbk 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (teo)", () => {
		expect(p.parse("Sepania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sep 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (teo)", () => {
		expect(p.parse("Kagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Kag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (teo)", () => {
		expect(p.parse("Sekaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (teo)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (teo)", () => {
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (teo)", () => {
		expect(p.parse("Marako 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mariko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (teo)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (teo)", () => {
		expect(p.parse("1 Yokana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yok 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yokana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yok 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (teo)", () => {
		expect(p.parse("2 Yokana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yok 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yokana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yok 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (teo)", () => {
		expect(p.parse("3 Yokana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yok 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yokana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yok 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (teo)", () => {
		expect(p.parse("Yokana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoa 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yok 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (teo)", () => {
		expect(p.parse("Aswamisio 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Asom 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Asw 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (teo)", () => {
		expect(p.parse("Iromayon 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("iRom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (teo)", () => {
		expect(p.parse("1 Ikorinton 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ikor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ikorinton 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ikor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (teo)", () => {
		expect(p.parse("2 Ikorinton 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ikor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ikorinton 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ikor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (teo)", () => {
		expect(p.parse("Ikolosayon 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ikolosain 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ikol 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (teo)", () => {
		expect(p.parse("Igalatian 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("iGal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (teo)", () => {
		expect(p.parse("Ipeson 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ipes 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Pes 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (teo)", () => {
		expect(p.parse("Ipilipin 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ipil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (teo)", () => {
		expect(p.parse("1 Isesalonikan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Itesalonikan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Itesa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Isesalonikan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Itesalonikan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Itesa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ses 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (teo)", () => {
		expect(p.parse("2 Isesalonikan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Itesalonikan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Itesa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Isesalonikan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Itesalonikan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Itesa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ses 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (teo)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (teo)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (teo)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (teo)", () => {
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pilemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Plm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (teo)", () => {
		expect(p.parse("Iburanian 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Iburayon 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibur 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Bur 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (teo)", () => {
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (teo)", () => {
		expect(p.parse("1 Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (teo)", () => {
		expect(p.parse("2 Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (teo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (teo)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});

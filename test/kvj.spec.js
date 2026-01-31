"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kvj.js";

describe("Localized book Gen (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kvj)", () => {
		expect(p.parse("Gha ta Wəshi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ghw 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kvj)", () => {
		expect(p.parse("Shave 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Shv 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (kvj)", () => {
		expect(p.parse("Bɛl ba'a Shishi nya wəba 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bɛl 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kvj)", () => {
		expect(p.parse("Ka Lɛvi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Klv 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kvj)", () => {
		expect(p.parse("Ɓela 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ɓla 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (kvj)", () => {
		expect(p.parse("Bɛn Sirak 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Bns 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (kvj)", () => {
		expect(p.parse("Ntsehwele 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Ntsh 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (kvj)", () => {
		expect(p.parse("Yɛ Ŋgaɗe ghə 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Yŋg 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (kvj)", () => {
		expect(p.parse("Palepa ta Zhɛrɛmi 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Pzh 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kvj)", () => {
		expect(p.parse("Ghena Kelɛŋə 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ghk 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kvj)", () => {
		expect(p.parse("Zhɛne Ghwelə yitea Wəshi Mahalegə 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Zgwm 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kvj)", () => {
		expect(p.parse("Zhozəwɛ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Zhoz 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kvj)", () => {
		expect(p.parse("Ka Meha ghwə 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Kmg 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kvj)", () => {
		expect(p.parse("Rət 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (kvj)", () => {
		expect(p.parse("Ɛzayi 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ɛza 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kvj)", () => {
		expect(p.parse("1 Saməyɛl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Saməyɛl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kvj)", () => {
		expect(p.parse("2 Saməyɛl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Saməyɛl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kvj)", () => {
		expect(p.parse("1 Ka Meghea Kɛfi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kmk 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ka Meghea Kɛfi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kmk 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kvj)", () => {
		expect(p.parse("2 Ka Meghea Kɛfi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kmk 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ka Meghea Kɛfi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kmk 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kvj)", () => {
		expect(p.parse("1 Wəshi nyi Mene Ka Meghe 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Wmkm 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Wəshi nyi Mene Ka Meghe 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Wmkm 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kvj)", () => {
		expect(p.parse("2 Wəshi nyi Mene Ka Meghe 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Wmkm 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Wəshi nyi Mene Ka Meghe 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Wmkm 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (kvj)", () => {
		expect(p.parse("Ɛsdras 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ɛsd 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (kvj)", () => {
		expect(p.parse("Nɛhɛmi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nɛh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (kvj)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kvj)", () => {
		expect(p.parse("Yɛ Ghena Ŋela 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ghŋ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kvj)", () => {
		expect(p.parse("Nde zlape ghena 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Nzlg 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (kvj)", () => {
		expect(p.parse("Cimə nya zeɗe ma 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Czm 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kvj)", () => {
		expect(p.parse("Cimə 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Cim 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (kvj)", () => {
		expect(p.parse("Zhɛrɛmi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Zhr 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (kvj)", () => {
		expect(p.parse("Ɛzɛkiyɛl 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ɛzk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Hos (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (kvj)", () => {
		expect(p.parse("Ozɛ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (kvj)", () => {
		expect(p.parse("Zhowɛl 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Zhw 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (kvj)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (kvj)", () => {
		expect(p.parse("Abdiyas 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kvj)", () => {
		expect(p.parse("Zhonas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Zhn 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (kvj)", () => {
		expect(p.parse("Mishɛ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Msh 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (kvj)", () => {
		expect(p.parse("Nahəwm 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (kvj)", () => {
		expect(p.parse("Habakək 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (kvj)", () => {
		expect(p.parse("Sofoni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (kvj)", () => {
		expect(p.parse("Azhɛ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Azh 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (kvj)", () => {
		expect(p.parse("Zakari 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kvj)", () => {
		expect(p.parse("Malashi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kvj)", () => {
		expect(p.parse("Matiye 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kvj)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kvj)", () => {
		expect(p.parse("Ləwke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lwk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kvj)", () => {
		expect(p.parse("1 Zhaŋe 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Zhŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zhaŋe 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zhŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kvj)", () => {
		expect(p.parse("2 Zhaŋe 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Zhŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zhaŋe 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zhŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kvj)", () => {
		expect(p.parse("3 Zhaŋe 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Zhŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zhaŋe 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zhŋ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kvj)", () => {
		expect(p.parse("Zhaŋe 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Zhŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kvj)", () => {
		expect(p.parse("Slene 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Sln 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kvj)", () => {
		expect(p.parse("Ka Rome 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kvj)", () => {
		expect(p.parse("1 Ka Korɛnte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ka Korɛnte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kvj)", () => {
		expect(p.parse("2 Ka Korɛnte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ka Korɛnte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kvj)", () => {
		expect(p.parse("Ka Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kvj)", () => {
		expect(p.parse("Ka Galate 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kvj)", () => {
		expect(p.parse("Ka Ɛfɛze 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛfɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kvj)", () => {
		expect(p.parse("Ka Filipe 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kvj)", () => {
		expect(p.parse("1 Ka Tɛsalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tɛs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ka Tɛsalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛs 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kvj)", () => {
		expect(p.parse("2 Tɛsalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tɛs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛs 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kvj)", () => {
		expect(p.parse("1 Timotɛ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotɛ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kvj)", () => {
		expect(p.parse("2 Timotɛ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotɛ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kvj)", () => {
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kvj)", () => {
		expect(p.parse("Filɛmon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kvj)", () => {
		expect(p.parse("Ka Ɛbrə 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ɛbr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kvj)", () => {
		expect(p.parse("Zhake 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zhk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kvj)", () => {
		expect(p.parse("1 Piyɛre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piyɛre 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 1Pet (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kvj)", () => {
		expect(p.parse("1Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kvj)", () => {
		expect(p.parse("2 Piyɛre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piyɛre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kvj)", () => {
		expect(p.parse("Zhəwde 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Zhd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (kvj)", () => {
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (kvj)", () => {
		expect(p.parse("Zhədit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Zhdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (kvj)", () => {
		expect(p.parse("Barək 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (kvj)", () => {
		expect(p.parse("Səzane 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Szn 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (kvj)", () => {
		expect(p.parse("1 Makabɛ 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Ma 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makabɛ 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Ma 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (kvj)", () => {
		expect(p.parse("2 Makabɛ 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Ma 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makabɛ 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Ma 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Dan (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kvj)", () => {
		expect(p.parse("Daniyɛl 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Esth (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kvj)", () => {
		expect(p.parse("Ɛstɛr 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ɛst 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Preferred book names (kvj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (kvj)", () => {
		expect(p.parse("Daniyɛl Grɛk 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("DNG 1:1").osis()).toEqual("PrAzar.1.1");
	});
});

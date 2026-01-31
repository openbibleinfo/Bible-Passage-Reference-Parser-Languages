"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/klu.js";

describe("Localized book Gen (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (klu)", () => {
		expect(p.parse("Wlò Tû‑lâ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Wtl 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (klu)", () => {
		expect(p.parse("Klɔ̀ Blubluɛ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kbu 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (klu)", () => {
		expect(p.parse("Momà Poyɔ˖ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Mpy 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (klu)", () => {
		expect(p.parse("Islɛ̀o‑a̍ Slɛ̀slɛɛ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Slɛ̀ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (klu)", () => {
		expect(p.parse("Wɔtèh Fîn Win 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Wfw 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (klu)", () => {
		expect(p.parse("Kwla̍ Sâ Tèh 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kst 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (klu)", () => {
		expect(p.parse("Gbetè Tɔnê Win 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Gtw 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (klu)", () => {
		expect(p.parse("Jɔ̀soa̍ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jɔ̀s 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (klu)", () => {
		expect(p.parse("Bodiɔ˖ Pôh 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Bdp 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (klu)", () => {
		expect(p.parse("Wlu̍fû 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Wlu 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (klu)", () => {
		expect(p.parse("Asàya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Asà 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (klu)", () => {
		expect(p.parse("1 Sami̍ɔ̍ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sami̍ɔ̍ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (klu)", () => {
		expect(p.parse("2 Sami̍ɔ̍ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sami̍ɔ̍ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (klu)", () => {
		expect(p.parse("1Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (klu)", () => {
		expect(p.parse("2Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (klu)", () => {
		expect(p.parse("1 Klɔbâ˖ Pôh 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Klɔbâ˖ Pôh 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (klu)", () => {
		expect(p.parse("2 Klɔbâ˖ Pôh 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Klɔbâ˖ Pôh 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (klu)", () => {
		expect(p.parse("1Kl 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (klu)", () => {
		expect(p.parse("2Kl 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (klu)", () => {
		expect(p.parse("1 Islɛ̀o Blo̍h‑a̍ Fanpôh Tèh 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Islɛ̀o Blo̍h‑a̍ Fanpôh Tèh 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (klu)", () => {
		expect(p.parse("2 Islɛ̀o Blo̍h‑a̍ Fanpôh Tèh 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Islɛ̀o Blo̍h‑a̍ Fanpôh Tèh 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (klu)", () => {
		expect(p.parse("1It 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (klu)", () => {
		expect(p.parse("2It 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (klu)", () => {
		expect(p.parse("Ɛslà 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ɛsl 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (klu)", () => {
		expect(p.parse("Nehɛ̀meyâ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nem 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (klu)", () => {
		expect(p.parse("Ɛsla̍ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ɛsa̍ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (klu)", () => {
		expect(p.parse("Jòpo 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jòp 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (klu)", () => {
		expect(p.parse("Nyesoa Sànê Wlɛ̍˖ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Swl 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (klu)", () => {
		expect(p.parse("Tɔ̂ Kɔnyɔ‑a̍ Na̍ Win Pôh 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Nwp 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (klu)", () => {
		expect(p.parse("Bɔ̂ Wluyɔ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Bwy 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (klu)", () => {
		expect(p.parse("Wlɛ̍˖ Pôh‑a̍ Wlɛ̍ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Wpw 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (klu)", () => {
		expect(p.parse("Jɛlèma̍yâ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jma 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (klu)", () => {
		expect(p.parse("Isìki̍ɛ̀ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Isk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (klu)", () => {
		expect(p.parse("Dàni̍ɔ̍ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dàn 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (klu)", () => {
		expect(p.parse("Hose̍à 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (klu)", () => {
		expect(p.parse("Jo̍wɛ̀ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jo̍w 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (klu)", () => {
		expect(p.parse("Emɔsèh 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Emo̍ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (klu)", () => {
		expect(p.parse("Obàdi̍yâ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obà 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (klu)", () => {
		expect(p.parse("Jòna̍ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jna̍ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (klu)", () => {
		expect(p.parse("Mi̍kà 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi̍k 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (klu)", () => {
		expect(p.parse("Na̍hùm 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Na̍h 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (klu)", () => {
		expect(p.parse("Hàbaku̍kî 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hàb 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (klu)", () => {
		expect(p.parse("Sèfani̍yâ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sèf 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (klu)", () => {
		expect(p.parse("Ha̍kì 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hàk 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (klu)", () => {
		expect(p.parse("Sàkàwla̍yà 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sàk 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (klu)", () => {
		expect(p.parse("Malea̍kì 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (klu)", () => {
		expect(p.parse("Mati̍u̍ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (klu)", () => {
		expect(p.parse("Make̍h 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (klu)", () => {
		expect(p.parse("Duku̍ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Duk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (klu)", () => {
		expect(p.parse("1Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (klu)", () => {
		expect(p.parse("2Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (klu)", () => {
		expect(p.parse("3 Jɔ̀ni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (klu)", () => {
		expect(p.parse("1 Jɔ̀ni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jɔ̀ni 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (klu)", () => {
		expect(p.parse("2 Jɔ̀ni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jɔ̀ni 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (klu)", () => {
		expect(p.parse("Jɔ̀ni 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jɔ̀n 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (klu)", () => {
		expect(p.parse("Tàdloyɔ˖‑a̍ Nunu Dɛ˖ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Nun 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (klu)", () => {
		expect(p.parse("Wlo̍mâ Nyɔ˖ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Wlo̍ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (klu)", () => {
		expect(p.parse("1 Kɔwli̍ntèh Nyɔ˖ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔwli̍ntèh Nyɔ˖ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (klu)", () => {
		expect(p.parse("2 Kɔwli̍ntèh Nyɔ˖ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔwli̍ntèh Nyɔ˖ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (klu)", () => {
		expect(p.parse("1Kɔ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (klu)", () => {
		expect(p.parse("2Kɔ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (klu)", () => {
		expect(p.parse("Kɔlɔ̍sèh Nyɔ˖ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kɔl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (klu)", () => {
		expect(p.parse("Kàla̍tià Nyɔ˖ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kàl 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (klu)", () => {
		expect(p.parse("Ɛfɛ̍sɔ̀ Nyɔ˖ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛfɛ̍ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (klu)", () => {
		expect(p.parse("Fili̍pì Nyɔ˖ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (klu)", () => {
		expect(p.parse("1 Tɛsàlɔ̍ni̍kà Nyɔ˖ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsàlɔ̍ni̍kà Nyɔ˖ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (klu)", () => {
		expect(p.parse("2 Tɛsàlɔ̍ni̍kà Nyɔ˖ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsàlɔ̍ni̍kà Nyɔ˖ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (klu)", () => {
		expect(p.parse("1Tɛ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (klu)", () => {
		expect(p.parse("2Tɛ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (klu)", () => {
		expect(p.parse("1 Timoti̍ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti̍ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (klu)", () => {
		expect(p.parse("2 Timoti̍ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti̍ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (klu)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (klu)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (klu)", () => {
		expect(p.parse("Taetɔ̍sèh 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tat 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (klu)", () => {
		expect(p.parse("File̍mòn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (klu)", () => {
		expect(p.parse("I̍blû Nyɔ˖ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("I̍bl 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (klu)", () => {
		expect(p.parse("Jěmsèh 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jěm 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (klu)", () => {
		expect(p.parse("1 Pitɛ̍ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pitɛ̍ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (klu)", () => {
		expect(p.parse("2 Pitɛ̍ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pitɛ̍ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (klu)", () => {
		expect(p.parse("1Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (klu)", () => {
		expect(p.parse("2Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (klu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (klu)", () => {
		expect(p.parse("Jǔdi 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jǔd 1:1").osis()).toEqual("Jude.1.1");
	});
});

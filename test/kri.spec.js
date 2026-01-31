"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kri.js";

describe("Localized book Gen (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kri)", () => {
		expect(p.parse("Jɛnɛsis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Jɛn 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kri)", () => {
		expect(p.parse("Ɛksodɔs 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ɛks 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kri)", () => {
		expect(p.parse("Lɛvitikɔs 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lɛv 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kri)", () => {
		expect(p.parse("Di Nɔmba Dɛm 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nɔm 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (kri)", () => {
		expect(p.parse("Lamɛnteshɔn 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kri)", () => {
		expect(p.parse("Rɛvɛleshɔn 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rɛv 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kri)", () => {
		expect(p.parse("Ditarɔnɔmi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dit 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kri)", () => {
		expect(p.parse("Jɔshwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jɔs 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kri)", () => {
		expect(p.parse("Di Jɔj Dɛm 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jɔj 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kri)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (kri)", () => {
		expect(p.parse("Ayzaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ayz 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kri)", () => {
		expect(p.parse("1 Samiɛl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samiɛl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Fɔs Samiɛl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Fɔs Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Fɔs. Samiɛl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Fɔs. Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kri)", () => {
		expect(p.parse("2 Samiɛl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samiɛl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Sɛkɛn Samiɛl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Sɛkɛn Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Sɛkɛn. Samiɛl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Sɛkɛn. Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kri)", () => {
		expect(p.parse("1 Kiŋ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kiŋ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Fɔs Kiŋ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Fɔs. Kiŋ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kri)", () => {
		expect(p.parse("2 Kiŋ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kiŋ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Sɛkɛn Kiŋ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Sɛkɛn. Kiŋ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kri)", () => {
		expect(p.parse("1 Kronikuls 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kro 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kronikuls 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kro 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Fɔs Kronikuls 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Fɔs Kro 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Fɔs. Kronikuls 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Fɔs. Kro 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kri)", () => {
		expect(p.parse("2 Kronikuls 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kro 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kronikuls 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kro 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Sɛkɛn Kronikuls 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Sɛkɛn Kro 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Sɛkɛn. Kronikuls 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Sɛkɛn. Kro 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (kri)", () => {
		expect(p.parse("Ɛzra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ɛzr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (kri)", () => {
		expect(p.parse("Nɛimaya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nɛi 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kri)", () => {
		expect(p.parse("Ɛsta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ɛst 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (kri)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kri)", () => {
		expect(p.parse("Di Sam Dɛm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sam 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kri)", () => {
		expect(p.parse("Prɔvabs 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prɔ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kri)", () => {
		expect(p.parse("Ɛkliziastis 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ɛkl 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (kri)", () => {
		expect(p.parse("Sɔlɔmɔn In Siŋ Dɛm 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Siŋ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (kri)", () => {
		expect(p.parse("Jɛrimaya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jɛr 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (kri)", () => {
		expect(p.parse("Izikɛl 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Izi 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kri)", () => {
		expect(p.parse("Daniɛl 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (kri)", () => {
		expect(p.parse("Ozie 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ozi 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (kri)", () => {
		expect(p.parse("Joɛl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (kri)", () => {
		expect(p.parse("Emɔs 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (kri)", () => {
		expect(p.parse("Obadaya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kri)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (kri)", () => {
		expect(p.parse("Mayka 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mayk 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (kri)", () => {
		expect(p.parse("Neum 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (kri)", () => {
		expect(p.parse("Abakɔk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Abak 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (kri)", () => {
		expect(p.parse("Zɛfinaya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zɛf 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (kri)", () => {
		expect(p.parse("Egay 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Eg 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (kri)", () => {
		expect(p.parse("Zɛkaraya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zɛk 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kri)", () => {
		expect(p.parse("Malakay 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kri)", () => {
		expect(p.parse("Matyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kri)", () => {
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kri)", () => {
		expect(p.parse("Lyuk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lek 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kri)", () => {
		expect(p.parse("Jɔn In Fɔs Lɛta 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kri)", () => {
		expect(p.parse("Jɔn In Sɛkɛn Lɛta 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kri)", () => {
		expect(p.parse("Jɔn In Tɔd Lɛta 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kri)", () => {
		expect(p.parse("1 Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Fɔs Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Fɔs. Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kri)", () => {
		expect(p.parse("2 Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Sɛkɛn Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Sɛkɛn. Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kri)", () => {
		expect(p.parse("Jɔn 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kri)", () => {
		expect(p.parse("Apɔsul Dɛn Wok 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Akt 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kri)", () => {
		expect(p.parse("Lɛta Fɔ Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kri)", () => {
		expect(p.parse("1 Kɔrint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kɔt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔrint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Fɔs Kɔrint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Fɔs Kɔt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Fɔs. Kɔrint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Fɔs. Kɔt 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kri)", () => {
		expect(p.parse("2 Kɔrint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kɔt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔrint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Sɛkɛn Kɔrint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Sɛkɛn Kɔt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Sɛkɛn. Kɔrint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Sɛkɛn. Kɔt 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kri)", () => {
		expect(p.parse("Lɛta Fɔ Kɔlɔse 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kɔl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kri)", () => {
		expect(p.parse("Lɛta Fɔ Galeshya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kri)", () => {
		expect(p.parse("Lɛta Fɔ Ɛfisɔs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛfi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kri)", () => {
		expect(p.parse("Lɛta Fɔ Filipay 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kri)", () => {
		expect(p.parse("1 Lɛta Fɔ Tɛsalonayka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tɛs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Lɛta Fɔ Tɛsalonayka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Fɔs Lɛta Fɔ Tɛsalonayka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Fɔs Tɛs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Fɔs. Lɛta Fɔ Tɛsalonayka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Fɔs. Tɛs 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kri)", () => {
		expect(p.parse("2 Lɛta Fɔ Tɛsalonayka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tɛs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Lɛta Fɔ Tɛsalonayka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Sɛkɛn Lɛta Fɔ Tɛsalonayka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Sɛkɛn Tɛs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Sɛkɛn. Lɛta Fɔ Tɛsalonayka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Sɛkɛn. Tɛs 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kri)", () => {
		expect(p.parse("1 Lɛta To Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Lɛta To Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Fɔs Lɛta To Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Fɔs Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Fɔs. Lɛta To Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Fɔs. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kri)", () => {
		expect(p.parse("2 Lɛta To Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Lɛta To Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Sɛkɛn Lɛta To Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Sɛkɛn Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Sɛkɛn. Lɛta To Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Sɛkɛn. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kri)", () => {
		expect(p.parse("Taytɔs 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tay 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kri)", () => {
		expect(p.parse("Faylimɔn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fay 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kri)", () => {
		expect(p.parse("Di Ibru Pipul Dɛn 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibru 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kri)", () => {
		expect(p.parse("Jems 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jem 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kri)", () => {
		expect(p.parse("Pita In Fɔs Lɛta 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kri)", () => {
		expect(p.parse("2 Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Sɛkɛn Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Sɛkɛn. Pt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kri)", () => {
		expect(p.parse("Pita In Sɛkɛn Lɛta 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kri)", () => {
		expect(p.parse("Jud In Lɛta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

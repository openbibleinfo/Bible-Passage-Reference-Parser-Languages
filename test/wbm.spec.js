"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/wbm.js";

describe("Localized book Gen (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (wbm)", () => {
		expect(p.parse("Yam Jah 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Jah 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (wbm)", () => {
		expect(p.parse("Lih Hu 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Lih 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (wbm)", () => {
		expect(p.parse("Krub 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (wbm)", () => {
		expect(p.parse("Simin 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Si 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (wbm)", () => {
		expect(p.parse("Yiiem Doe 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Doe 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (wbm)", () => {
		expect(p.parse("Plak Jhi 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Jhi 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (wbm)", () => {
		expect(p.parse("Pingnyap 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Pi 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (wbm)", () => {
		expect(p.parse("Yawsux 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yaw 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (wbm)", () => {
		expect(p.parse("Cao Prawng 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Cao 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (wbm)", () => {
		expect(p.parse("Ruthax 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (wbm)", () => {
		expect(p.parse("Isayax 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (wbm)", () => {
		expect(p.parse("1 Samoelax 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samoelax 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (wbm)", () => {
		expect(p.parse("2 Samoelax 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samoelax 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (wbm)", () => {
		expect(p.parse("1Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (wbm)", () => {
		expect(p.parse("2Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (wbm)", () => {
		expect(p.parse("1 Simiang 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Simiang 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (wbm)", () => {
		expect(p.parse("2 Simiang 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Simiang 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (wbm)", () => {
		expect(p.parse("1Sim 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (wbm)", () => {
		expect(p.parse("2Sim 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (wbm)", () => {
		expect(p.parse("1 Grawng Been 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Grawng Been 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (wbm)", () => {
		expect(p.parse("2 Grawng Been 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Grawng Been 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (wbm)", () => {
		expect(p.parse("1Been 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (wbm)", () => {
		expect(p.parse("2Been 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (wbm)", () => {
		expect(p.parse("Ezarax 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Eza 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (wbm)", () => {
		expect(p.parse("Nehamix 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Ne 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (wbm)", () => {
		expect(p.parse("Isata 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Is 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (wbm)", () => {
		expect(p.parse("Yawbax 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Bax 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (wbm)", () => {
		expect(p.parse("Yaogyaw 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Yaog 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (wbm)", () => {
		expect(p.parse("Lox Kab 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Kab 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (wbm)", () => {
		expect(p.parse("Sidiex 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (wbm)", () => {
		expect(p.parse("Sawlamun 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (wbm)", () => {
		expect(p.parse("Yeramix 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ye 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (wbm)", () => {
		expect(p.parse("Yezakelax 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Yez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (wbm)", () => {
		expect(p.parse("Danyelax 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (wbm)", () => {
		expect(p.parse("Hose 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ho 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (wbm)", () => {
		expect(p.parse("Yolax 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yol 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (wbm)", () => {
		expect(p.parse("Amot 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (wbm)", () => {
		expect(p.parse("Awbadix 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Aw 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (wbm)", () => {
		expect(p.parse("Yonax 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (wbm)", () => {
		expect(p.parse("Mikha 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (wbm)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Na 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (wbm)", () => {
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ha 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (wbm)", () => {
		expect(p.parse("Zephanix 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Ze 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (wbm)", () => {
		expect(p.parse("Hagie 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Gie 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (wbm)", () => {
		expect(p.parse("Zakharix 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (wbm)", () => {
		expect(p.parse("Malakhix 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("mA 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (wbm)", () => {
		expect(p.parse("Mathiex 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (wbm)", () => {
		expect(p.parse("Makux 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (wbm)", () => {
		expect(p.parse("Lukax 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (wbm)", () => {
		expect(p.parse("1Yo 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (wbm)", () => {
		expect(p.parse("2Yo 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (wbm)", () => {
		expect(p.parse("3 Yohan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yo 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (wbm)", () => {
		expect(p.parse("1 Yohan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (wbm)", () => {
		expect(p.parse("2 Yohan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (wbm)", () => {
		expect(p.parse("Yohan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yo 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (wbm)", () => {
		expect(p.parse("Kawncau 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Cau 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (wbm)", () => {
		expect(p.parse("Romax 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (wbm)", () => {
		expect(p.parse("1 Kawrinthux 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kawrinthux 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (wbm)", () => {
		expect(p.parse("2 Kawrinthux 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kawrinthux 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (wbm)", () => {
		expect(p.parse("1Kaw 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (wbm)", () => {
		expect(p.parse("2Kaw 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (wbm)", () => {
		expect(p.parse("Kawlawsie 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kaw 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (wbm)", () => {
		expect(p.parse("Kalatix 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ka 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (wbm)", () => {
		expect(p.parse("Efesux 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (wbm)", () => {
		expect(p.parse("Philippix 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (wbm)", () => {
		expect(p.parse("1 Thesalonix 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thesalonix 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (wbm)", () => {
		expect(p.parse("2 Thesalonix 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thesalonix 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (wbm)", () => {
		expect(p.parse("1The 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (wbm)", () => {
		expect(p.parse("2The 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (wbm)", () => {
		expect(p.parse("1 Timose 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timose 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (wbm)", () => {
		expect(p.parse("2 Timose 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timose 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (wbm)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (wbm)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (wbm)", () => {
		expect(p.parse("Titux 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Ti 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (wbm)", () => {
		expect(p.parse("Philemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phim 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (wbm)", () => {
		expect(p.parse("Hebrie 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("He 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (wbm)", () => {
		expect(p.parse("Yakop 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (wbm)", () => {
		expect(p.parse("1 Petrux 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrux 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (wbm)", () => {
		expect(p.parse("2 Petrux 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrux 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (wbm)", () => {
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (wbm)", () => {
		expect(p.parse("2Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (wbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (wbm)", () => {
		expect(p.parse("Yudax 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dyu.js";

describe("Localized book Gen (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (dyu)", () => {
		expect(p.parse("Damina 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Kod 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (dyu)", () => {
		expect(p.parse("Bɔri 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Bɔk 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (dyu)", () => {
		expect(p.parse("Bɛli Ka Kitabu 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (dyu)", () => {
		expect(p.parse("Sarakalasebagaw 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Sar 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (dyu)", () => {
		expect(p.parse("Jateri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kok 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (dyu)", () => {
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (dyu)", () => {
		expect(p.parse("Lɔn 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (dyu)", () => {
		expect(p.parse("Kasikan 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Dusu 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (dyu)", () => {
		expect(p.parse("Zeb 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dyu)", () => {
		expect(p.parse("Yirali 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Yirari 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Yir 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (dyu)", () => {
		expect(p.parse("Sariya 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Sad 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (dyu)", () => {
		expect(p.parse("Yosuwe 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Zoz 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (dyu)", () => {
		expect(p.parse("Kititigɛbagaw 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Cɛf 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (dyu)", () => {
		expect(p.parse("Ruti 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Uru 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (dyu)", () => {
		expect(p.parse("Ezayi 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Eza 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (dyu)", () => {
		expect(p.parse("Samawilu fɔlɔ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Sam fɔlɔ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (dyu)", () => {
		expect(p.parse("Samawilu flanan 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Sam 2nan 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (dyu)", () => {
		expect(p.parse("Masacɛw fɔlɔ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Mas fɔlɔ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (dyu)", () => {
		expect(p.parse("Masacɛw flanan 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Mas 2nan 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (dyu)", () => {
		expect(p.parse("Kibaroyaw fɔlɔ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Lok fɔlɔ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (dyu)", () => {
		expect(p.parse("Kibaroyaw flanan 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Lok 2nan 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (dyu)", () => {
		expect(p.parse("Ɛsidarasi 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ɛsi 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (dyu)", () => {
		expect(p.parse("Nehemi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nee 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (dyu)", () => {
		expect(p.parse("Ayuba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Zɔbu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (dyu)", () => {
		expect(p.parse("Zaburuw 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zaburu 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Dal 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (dyu)", () => {
		expect(p.parse("Zanaw 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Tal 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (dyu)", () => {
		expect(p.parse("Waajurikɛbaga 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Waa 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (dyu)", () => {
		expect(p.parse("Dɔnkiriw 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Dus 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (dyu)", () => {
		expect(p.parse("Yeremi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Zer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (dyu)", () => {
		expect(p.parse("Ezekiyɛli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (dyu)", () => {
		expect(p.parse("Daniyɛli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (dyu)", () => {
		expect(p.parse("Oze 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (dyu)", () => {
		expect(p.parse("Yowɛli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Zow 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (dyu)", () => {
		expect(p.parse("Amɔsi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amɔ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (dyu)", () => {
		expect(p.parse("Abidiyasi 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abu 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (dyu)", () => {
		expect(p.parse("Yunusu 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Zon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (dyu)", () => {
		expect(p.parse("Mise 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (dyu)", () => {
		expect(p.parse("Nahɔmu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naw 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (dyu)", () => {
		expect(p.parse("Habakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Aba 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (dyu)", () => {
		expect(p.parse("Sofoni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (dyu)", () => {
		expect(p.parse("Hagize 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Aze 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (dyu)", () => {
		expect(p.parse("Jakariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (dyu)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dyu)", () => {
		expect(p.parse("Matiyo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dyu)", () => {
		expect(p.parse("Marika 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mariki 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dyu)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dyu)", () => {
		expect(p.parse("Yuhana fɔlɔ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Zan fɔlɔ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dyu)", () => {
		expect(p.parse("Yuhana flanan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Zan Filanan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Zan 2nan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dyu)", () => {
		expect(p.parse("Yuhana sabanan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Zan Sabanan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Zan 3nan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dyu)", () => {
		expect(p.parse("Yuhana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Zan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dyu)", () => {
		expect(p.parse("Kɛwalew 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kɛwaliw 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kɛw 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dyu)", () => {
		expect(p.parse("Ɔrɔmukaw 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rɔmukaw 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ɔrɔ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dyu)", () => {
		expect(p.parse("Korɛntikaw fɔlɔ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kor fɔlɔ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dyu)", () => {
		expect(p.parse("Korɛntikaw Filanan 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Korɛntikaw flanan 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kor 2nan 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dyu)", () => {
		expect(p.parse("Kɔlɔsikaw 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kɔl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dyu)", () => {
		expect(p.parse("Galasikaw 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatikaw 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dyu)", () => {
		expect(p.parse("Efɛzikaw 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛfɛsikaw 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dyu)", () => {
		expect(p.parse("Filipikaw 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dyu)", () => {
		expect(p.parse("Tesalonikikaw fɔlɔ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tesalonikaw Fɔlɔ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tes fɔlɔ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dyu)", () => {
		expect(p.parse("Tesalonikikaw flanan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tesalonikaw Filanan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tes Filanan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tes 2nan 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dyu)", () => {
		expect(p.parse("Timote fɔlɔ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tim fɔlɔ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dyu)", () => {
		expect(p.parse("Timote Filanan 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Timote flanan 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tim 2nan 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dyu)", () => {
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titi 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dyu)", () => {
		expect(p.parse("Filemɔn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dyu)", () => {
		expect(p.parse("Heburuw 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eburuw 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dyu)", () => {
		expect(p.parse("Yakuba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zaki 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dyu)", () => {
		expect(p.parse("Piyɛri fɔlɔ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Piy fɔlɔ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dyu)", () => {
		expect(p.parse("Piyɛri Filanan 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Piyɛri flanan 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Piy Filanan 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Piy 2nan 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dyu)", () => {
		expect(p.parse("Zude 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (dyu)", () => {
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (dyu)", () => {
		expect(p.parse("Zud 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (dyu)", () => {
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (dyu)", () => {
		expect(p.parse("Suzani Ka Koo 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (dyu)", () => {
		expect(p.parse("Makabew Fɔlɔ 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Mak fɔlɔ 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (dyu)", () => {
		expect(p.parse("Makabew Filanan 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Mak 2nan 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Esth (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (dyu)", () => {
		expect(p.parse("Ɛsitɛri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ɛst 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Preferred book names (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (dyu)", () => {
		expect(p.parse("Daniyɛli, girɛkikan na 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Parser helper should handle book ranges (dyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (dyu)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yuhana fɔlɔ - Yuhana sabanan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yuhana fɔlɔ – Yuhana sabanan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yuhana fɔlɔ — Yuhana sabanan").osis()).toEqual("1John.1-3John.1");
	});
});

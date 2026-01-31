"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/wol.js";

describe("Localized book Gen (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (wol)", () => {
		expect(p.parse("Njàlbéen ga 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (wol)", () => {
		expect(p.parse("Mucc ga 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (wol)", () => {
		expect(p.parse("Sarxalkat yi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (wol)", () => {
		expect(p.parse("Màndiŋ ma 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (wol)", () => {
		expect(p.parse("Jooytu 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (wol)", () => {
		expect(p.parse("Peeñu ma 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (wol)", () => {
		expect(p.parse("Baamtug Yoon wi 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Ruth (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (wol)", () => {
		expect(p.parse("Ruut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (wol)", () => {
		expect(p.parse("Esayi 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (wol)", () => {
		expect(p.parse("1.Samiyel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (wol)", () => {
		expect(p.parse("2.Samiyel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (wol)", () => {
		expect(p.parse("1.Buur ya 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (wol)", () => {
		expect(p.parse("2.Buur ya 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book Ezra (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (wol)", () => {
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (wol)", () => {
		expect(p.parse("Neyemi 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (wol)", () => {
		expect(p.parse("Esteer 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (wol)", () => {
		expect(p.parse("Ayóoba 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (wol)", () => {
		expect(p.parse("Sabóor 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (wol)", () => {
		expect(p.parse("Kàddu yu Xelu 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (wol)", () => {
		expect(p.parse("Kàdduy Waare 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (wol)", () => {
		expect(p.parse("Ngën-gi-woy 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (wol)", () => {
		expect(p.parse("Yeremi 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (wol)", () => {
		expect(p.parse("Esekiyel 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (wol)", () => {
		expect(p.parse("Dañeel 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (wol)", () => {
		expect(p.parse("Ose 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (wol)", () => {
		expect(p.parse("Yowel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (wol)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (wol)", () => {
		expect(p.parse("Abdiyas 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (wol)", () => {
		expect(p.parse("Yunus 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (wol)", () => {
		expect(p.parse("Mise 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (wol)", () => {
		expect(p.parse("Nawum 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (wol)", () => {
		expect(p.parse("Abakug 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (wol)", () => {
		expect(p.parse("Cefaña 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (wol)", () => {
		expect(p.parse("Ase 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (wol)", () => {
		expect(p.parse("Sàkkaryaa 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (wol)", () => {
		expect(p.parse("Malasi 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Luke (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (wol)", () => {
		expect(p.parse("Luug 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book Acts (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (wol)", () => {
		expect(p.parse("Jëf ya 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (wol)", () => {
		expect(p.parse("Room 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (wol)", () => {
		expect(p.parse("1.Korent 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (wol)", () => {
		expect(p.parse("2.Korent 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (wol)", () => {
		expect(p.parse("Kolos 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (wol)", () => {
		expect(p.parse("Galasi 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (wol)", () => {
		expect(p.parse("Efes 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (wol)", () => {
		expect(p.parse("Filib 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (wol)", () => {
		expect(p.parse("1.Tesalonig 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (wol)", () => {
		expect(p.parse("2.Tesalonig 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (wol)", () => {
		expect(p.parse("1.Timote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (wol)", () => {
		expect(p.parse("2.Timote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (wol)", () => {
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (wol)", () => {
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (wol)", () => {
		expect(p.parse("Yawut ya 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (wol)", () => {
		expect(p.parse("Yanqóoba 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (wol)", () => {
		expect(p.parse("1.Piyeer 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (wol)", () => {
		expect(p.parse("2.Piyeer 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (wol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (wol)", () => {
		expect(p.parse("Yudd 1:1").osis()).toEqual("Jude.1.1");
	});
});

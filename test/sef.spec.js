"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sef.js";

describe("Localized book Gen (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (sef)", () => {
		expect(p.parse("Sélimɛ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Sél 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (sef)", () => {
		expect(p.parse("Yirile 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Yir 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (sef)", () => {
		expect(p.parse("Levii ye sáriga-wòlori 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (sef)", () => {
		expect(p.parse("Córolo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Cór 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (sef)", () => {
		expect(p.parse("Kayaagi Nyɛnigɛ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kay 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sef)", () => {
		expect(p.parse("Tɛ̀ɛnnɛ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tɛ̀ɛn 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (sef)", () => {
		expect(p.parse("Làlwaw Kaanziin 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Làlw 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (sef)", () => {
		expect(p.parse("Zyozuwe 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Zyoz 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (sef)", () => {
		expect(p.parse("Jàbɔbèle 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jàb 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (sef)", () => {
		expect(p.parse("Wuruti 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Wur 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (sef)", () => {
		expect(p.parse("Ezayi 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Eza 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (sef)", () => {
		expect(p.parse("1 Samyɛli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samyɛli 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (sef)", () => {
		expect(p.parse("2 Samyɛli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samyɛli 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (sef)", () => {
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (sef)", () => {
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (sef)", () => {
		expect(p.parse("1 Fànʔafɔbèle 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Fànʔafɔbèle 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (sef)", () => {
		expect(p.parse("2 Fànʔafɔbèle 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Fànʔafɔbèle 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (sef)", () => {
		expect(p.parse("1Fàn 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (sef)", () => {
		expect(p.parse("2Fàn 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (sef)", () => {
		expect(p.parse("1 Cányi kèlē 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Cányi kèlē 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (sef)", () => {
		expect(p.parse("2 Cányi kèlē 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Cányi kèlē 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (sef)", () => {
		expect(p.parse("1Cán 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (sef)", () => {
		expect(p.parse("2Cán 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (sef)", () => {
		expect(p.parse("Ɛsidirasi 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ɛsid 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (sef)", () => {
		expect(p.parse("Nehemii 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (sef)", () => {
		expect(p.parse("Ɛsitɛri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ɛsit 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (sef)", () => {
		expect(p.parse("Zyɔbi 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Zyɔb 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (sef)", () => {
		expect(p.parse("Ŋúnuyi 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ŋún 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (sef)", () => {
		expect(p.parse("Kàseegèle 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Kàs 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (sef)", () => {
		expect(p.parse("Syɛɛnjóow 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Syɛɛn 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (sef)", () => {
		expect(p.parse("Ŋúnudaangi 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ŋúnud 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (sef)", () => {
		expect(p.parse("Zyeremii 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Zyer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (sef)", () => {
		expect(p.parse("Ezekyɛli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (sef)", () => {
		expect(p.parse("Danyɛli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (sef)", () => {
		expect(p.parse("Oze 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oz 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (sef)", () => {
		expect(p.parse("Zyowɛli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Zyow 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (sef)", () => {
		expect(p.parse("Amɔsi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (sef)", () => {
		expect(p.parse("Abidyasi 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abi 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (sef)", () => {
		expect(p.parse("Zyonasi 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Zyon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (sef)", () => {
		expect(p.parse("Misye 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mis 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (sef)", () => {
		expect(p.parse("Nahumi 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (sef)", () => {
		expect(p.parse("Habakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (sef)", () => {
		expect(p.parse("Sofonii 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (sef)", () => {
		expect(p.parse("Agizye 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Agi 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (sef)", () => {
		expect(p.parse("Zakarii 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (sef)", () => {
		expect(p.parse("Malasyii 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sef)", () => {
		expect(p.parse("Matye 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sef)", () => {
		expect(p.parse("Mariki 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sef)", () => {
		expect(p.parse("Luki 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sef)", () => {
		expect(p.parse("1Zyan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sef)", () => {
		expect(p.parse("2Zyan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sef)", () => {
		expect(p.parse("3 Zyan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Zyan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sef)", () => {
		expect(p.parse("1 Zyan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zyan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sef)", () => {
		expect(p.parse("2 Zyan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zyan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sef)", () => {
		expect(p.parse("Zyan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sef)", () => {
		expect(p.parse("Kapyegèle 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kap 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sef)", () => {
		expect(p.parse("Wɔrɔmi ye 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Wɔr 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sef)", () => {
		expect(p.parse("1 Korɛnti ye 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korɛnti ye 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sef)", () => {
		expect(p.parse("2 Korɛnti ye 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korɛnti ye 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sef)", () => {
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sef)", () => {
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sef)", () => {
		expect(p.parse("Kɔlɔsi ye 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kɔl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sef)", () => {
		expect(p.parse("Galasi ye 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sef)", () => {
		expect(p.parse("Efɛzi ye 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛz 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sef)", () => {
		expect(p.parse("Filipikaʔa ye 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sef)", () => {
		expect(p.parse("1 Tesaloniki ye 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloniki ye 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sef)", () => {
		expect(p.parse("2 Tesaloniki ye 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloniki ye 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sef)", () => {
		expect(p.parse("1Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sef)", () => {
		expect(p.parse("2Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sef)", () => {
		expect(p.parse("1 Timɔte 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timɔte 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sef)", () => {
		expect(p.parse("2 Timɔte 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timɔte 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sef)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sef)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sef)", () => {
		expect(p.parse("Tiiti 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tiit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sef)", () => {
		expect(p.parse("Filemɔn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sef)", () => {
		expect(p.parse("Heburubèle 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sef)", () => {
		expect(p.parse("Zyaki 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zya 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sef)", () => {
		expect(p.parse("1 Pyɛri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pyɛri 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sef)", () => {
		expect(p.parse("2 Pyɛri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pyɛri 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sef)", () => {
		expect(p.parse("1Pyɛ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sef)", () => {
		expect(p.parse("2Pyɛ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sef)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sef)", () => {
		expect(p.parse("Zyudi 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Zyu 1:1").osis()).toEqual("Jude.1.1");
	});
});

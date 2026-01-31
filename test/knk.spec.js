"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/knk.js";

describe("Localized book Gen (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (knk)", () => {
		expect(p.parse("Ko-Dabirɛnu 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (knk)", () => {
		expect(p.parse("Bɔ-Koe-Iyipiti 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (knk)", () => {
		expect(p.parse("Saraka-Masɔlɛnuta Tɔnnu 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (knk)", () => {
		expect(p.parse("Yilan-Yilan Koe 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (knk)", () => {
		expect(p.parse("Nimisa Koe 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (knk)", () => {
		expect(p.parse("Lankɛnimayɛ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (knk)", () => {
		expect(p.parse("Tɔn-Fɔɛ-Fila-Nyɔgɛ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (knk)", () => {
		expect(p.parse("Yasowa 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (knk)", () => {
		expect(p.parse("Kɛlɛ-Kurugbɛnu 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (knk)", () => {
		expect(p.parse("Ruti 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (knk)", () => {
		expect(p.parse("Aiseya 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (knk)", () => {
		expect(p.parse("1 Samuwɛli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuwɛli 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (knk)", () => {
		expect(p.parse("2 Samuwɛli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuwɛli 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (knk)", () => {
		expect(p.parse("1 Mansɛnu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Mansɛnu 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (knk)", () => {
		expect(p.parse("2 Mansɛnu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Mansɛnu 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (knk)", () => {
		expect(p.parse("1 Ko-Kɔrɔta-Karan 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ko-Kɔrɔta-Karan 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (knk)", () => {
		expect(p.parse("2 Ko-Kɔrɔta-Karan 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ko-Kɔrɔta-Karan 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (knk)", () => {
		expect(p.parse("Ɛsira 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (knk)", () => {
		expect(p.parse("Nihɛmaya 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (knk)", () => {
		expect(p.parse("Ɛsita 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (knk)", () => {
		expect(p.parse("Yobu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (knk)", () => {
		expect(p.parse("Yaburi 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (knk)", () => {
		expect(p.parse("Hɛnkilimaya-Kumɛnu 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (knk)", () => {
		expect(p.parse("Makawandili Kumɛnu 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (knk)", () => {
		expect(p.parse("Keninteya-Siginu 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (knk)", () => {
		expect(p.parse("Yɛrɛmaya 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (knk)", () => {
		expect(p.parse("Isikiyɛli 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (knk)", () => {
		expect(p.parse("Daniyɛli 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (knk)", () => {
		expect(p.parse("Hoseya 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (knk)", () => {
		expect(p.parse("Yowɛli 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (knk)", () => {
		expect(p.parse("Emɔsi 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (knk)", () => {
		expect(p.parse("Hɔbadaya 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (knk)", () => {
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (knk)", () => {
		expect(p.parse("Maika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (knk)", () => {
		expect(p.parse("Nehami 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (knk)", () => {
		expect(p.parse("Habakuku 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (knk)", () => {
		expect(p.parse("Sɛfanaya 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (knk)", () => {
		expect(p.parse("Hegayi 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (knk)", () => {
		expect(p.parse("Sakaraya 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (knk)", () => {
		expect(p.parse("Malakayi 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (knk)", () => {
		expect(p.parse("Matiyu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (knk)", () => {
		expect(p.parse("Maraka 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (knk)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (knk)", () => {
		expect(p.parse("1 Yɔni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yɔni 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (knk)", () => {
		expect(p.parse("2 Yɔni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yɔni 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (knk)", () => {
		expect(p.parse("3 Yɔni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yɔni 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (knk)", () => {
		expect(p.parse("Yɔni 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (knk)", () => {
		expect(p.parse("Kɛwɔlɛnu 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (knk)", () => {
		expect(p.parse("Romu 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (knk)", () => {
		expect(p.parse("1 Kɔrɛnti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔrɛnti 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (knk)", () => {
		expect(p.parse("2 Kɔrɛnti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔrɛnti 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (knk)", () => {
		expect(p.parse("Kɔlɔsi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (knk)", () => {
		expect(p.parse("Kalesiya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (knk)", () => {
		expect(p.parse("Ɛfɛsa 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (knk)", () => {
		expect(p.parse("Filipai 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (knk)", () => {
		expect(p.parse("1 Tɛsalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsalonaika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (knk)", () => {
		expect(p.parse("2 Tɛsalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsalonaika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (knk)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (knk)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (knk)", () => {
		expect(p.parse("Taita 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (knk)", () => {
		expect(p.parse("Failiman 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (knk)", () => {
		expect(p.parse("Hiburunu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (knk)", () => {
		expect(p.parse("Yemesi 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (knk)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (knk)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (knk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (knk)", () => {
		expect(p.parse("Yude 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dyi.js";

describe("Localized book Gen (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (dyi)", () => {
		expect(p.parse("Zhenɛsi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Zhenɛ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (dyi)", () => {
		expect(p.parse("Ɛkizɔdi 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ɛki 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (dyi)", () => {
		expect(p.parse("Levitiki 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (dyi)", () => {
		expect(p.parse("Nɔmburu 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nɔmbu 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (dyi)", () => {
		expect(p.parse("Yuŋgbɔgɔrɔ sɛnrɛ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Yuŋgbɔ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dyi)", () => {
		expect(p.parse("Nagawa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Naga 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (dyi)", () => {
		expect(p.parse("Deteronɔmu 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dete 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (dyi)", () => {
		expect(p.parse("Zhozuwe 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Zhozu 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (dyi)", () => {
		expect(p.parse("Kiti kɔfɛnnɛ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Kiti 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (dyi)", () => {
		expect(p.parse("Uruti 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (dyi)", () => {
		expect(p.parse("Ezayi 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Eza 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (dyi)", () => {
		expect(p.parse("1 Samiyɛli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sami 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samiyɛli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sami 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (dyi)", () => {
		expect(p.parse("2 Samiyɛli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sami 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samiyɛli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sami 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (dyi)", () => {
		expect(p.parse("1 Wunlumbolo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Wunlu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Wunlumbolo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Wunlu 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (dyi)", () => {
		expect(p.parse("2 Wunlumbolo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Wunlu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Wunlumbolo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Wunlu 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (dyi)", () => {
		expect(p.parse("1 Kuroniki 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kuro 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kuroniki 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kuro 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (dyi)", () => {
		expect(p.parse("2 Kuroniki 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kuro 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kuroniki 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kuro 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (dyi)", () => {
		expect(p.parse("Ɛsidirasi 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ɛsidi 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (dyi)", () => {
		expect(p.parse("Nehemi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehe 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (dyi)", () => {
		expect(p.parse("Ɛsitɛri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ɛsitɛ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (dyi)", () => {
		expect(p.parse("Zhɔbu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (dyi)", () => {
		expect(p.parse("Yuuro 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (dyi)", () => {
		expect(p.parse("Yomiyɛgɛlɛ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Yomi 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (dyi)", () => {
		expect(p.parse("Yɛnŋɛlɛ sɛnrɛ yofɔ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Yofɔ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (dyi)", () => {
		expect(p.parse("Yurutanga 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Yurutan 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (dyi)", () => {
		expect(p.parse("Zheremi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Zhere 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (dyi)", () => {
		expect(p.parse("Ezekiyɛli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (dyi)", () => {
		expect(p.parse("Daniyɛli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dani 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (dyi)", () => {
		expect(p.parse("Oze 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (dyi)", () => {
		expect(p.parse("Zhowɛli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Zhowɛ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (dyi)", () => {
		expect(p.parse("Amɔsi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amɔ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (dyi)", () => {
		expect(p.parse("Abidiyasi 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abi 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (dyi)", () => {
		expect(p.parse("Zhonasi 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Zhona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (dyi)", () => {
		expect(p.parse("Mishe 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (dyi)", () => {
		expect(p.parse("Nawumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nawu 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (dyi)", () => {
		expect(p.parse("Abakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Aba 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (dyi)", () => {
		expect(p.parse("Sofoni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofo 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (dyi)", () => {
		expect(p.parse("Azhe 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (dyi)", () => {
		expect(p.parse("Zakari 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zaka 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (dyi)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mala 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dyi)", () => {
		expect(p.parse("Matiye 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mati 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dyi)", () => {
		expect(p.parse("Mariki 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maki 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dyi)", () => {
		expect(p.parse("Luki 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dyi)", () => {
		expect(p.parse("1 Zhan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zhan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dyi)", () => {
		expect(p.parse("2 Zhan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zhan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dyi)", () => {
		expect(p.parse("3 Zhan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zhan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dyi)", () => {
		expect(p.parse("Zhan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dyi)", () => {
		expect(p.parse("Kapyegele 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kapye 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dyi)", () => {
		expect(p.parse("Ɔrɔmu 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dyi)", () => {
		expect(p.parse("1 Korɛnti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korɛn 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korɛnti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korɛn 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dyi)", () => {
		expect(p.parse("2 Korɛnti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korɛn 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korɛnti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korɛn 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dyi)", () => {
		expect(p.parse("Kolɔsi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolɔ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dyi)", () => {
		expect(p.parse("Galasi 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gala 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dyi)", () => {
		expect(p.parse("Efɛzi 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dyi)", () => {
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fili 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dyi)", () => {
		expect(p.parse("1 Tesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dyi)", () => {
		expect(p.parse("2 Tesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesa 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dyi)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dyi)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dyi)", () => {
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dyi)", () => {
		expect(p.parse("Filemɔ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dyi)", () => {
		expect(p.parse("Eburuye 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dyi)", () => {
		expect(p.parse("Zhaki 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dyi)", () => {
		expect(p.parse("1 Pyɛri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pyɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pyɛri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pyɛ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dyi)", () => {
		expect(p.parse("2 Pyɛri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pyɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pyɛri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pyɛ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dyi)", () => {
		expect(p.parse("Zhude 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (dyi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (dyi)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zhan - 3 Zhan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zhan – 3 Zhan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zhan — 3 Zhan").osis()).toEqual("1John.1-3John.1");
	});
});

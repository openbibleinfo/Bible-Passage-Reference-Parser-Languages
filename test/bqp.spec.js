"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bqp.js";

describe("Localized book Gen (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bqp)", () => {
		expect(p.parse("Naanaa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Torubu 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (bqp)", () => {
		expect(p.parse("Bonaa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Bon 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (bqp)", () => {
		expect(p.parse("Sɑ̃ɑrun Woodɑ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (bqp)", () => {
		expect(p.parse("Naronaa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nar 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (bqp)", () => {
		expect(p.parse("Swĩi 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bqp)", () => {
		expect(p.parse("Zia Yã 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (bqp)", () => {
		expect(p.parse("Dokagbɛsisinaa 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (bqp)", () => {
		expect(p.parse("Yɔsua 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (bqp)", () => {
		expect(p.parse("Yãgɔ̃gɔ̃rinɔ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (bqp)", () => {
		expect(p.parse("Rutu 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Sam (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bqp)", () => {
		expect(p.parse("1 Samuɛli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sɑmuɛli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuɛli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sɑmuɛli 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bqp)", () => {
		expect(p.parse("2 Samuɛli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sɑmuɛli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuɛli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sɑmuɛli 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bqp)", () => {
		expect(p.parse("1 Kinanɔ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kinanɔ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bqp)", () => {
		expect(p.parse("2 Kinanɔ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kinanɔ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bqp)", () => {
		expect(p.parse("Bɑndun Gɑri I 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bqp)", () => {
		expect(p.parse("Bɑndun Gɑri II 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (bqp)", () => {
		expect(p.parse("Ɛzɛra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (bqp)", () => {
		expect(p.parse("Nɛɛmaya 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (bqp)", () => {
		expect(p.parse("Ɛsita 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (bqp)", () => {
		expect(p.parse("Ayuba 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (bqp)", () => {
		expect(p.parse("Zabura 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zab 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (bqp)", () => {
		expect(p.parse("Yaasinɔ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (bqp)", () => {
		expect(p.parse("Laasunde 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (bqp)", () => {
		expect(p.parse("Womu Duro 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Womu 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (bqp)", () => {
		expect(p.parse("Yeremi 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (bqp)", () => {
		expect(p.parse("Esekiɛli 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (bqp)", () => {
		expect(p.parse("Dɑniɛli 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (bqp)", () => {
		expect(p.parse("Osee 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (bqp)", () => {
		expect(p.parse("Yoɛli 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (bqp)", () => {
		expect(p.parse("Amɔsu 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (bqp)", () => {
		expect(p.parse("Abudiɑsi 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (bqp)", () => {
		expect(p.parse("Yonɑsi 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (bqp)", () => {
		expect(p.parse("Misee 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (bqp)", () => {
		expect(p.parse("Nɑhumu 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (bqp)", () => {
		expect(p.parse("Hɑbɑkuku 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (bqp)", () => {
		expect(p.parse("Sofoni 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (bqp)", () => {
		expect(p.parse("Asee 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (bqp)", () => {
		expect(p.parse("Sɑkɑri 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (bqp)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bqp)", () => {
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bqp)", () => {
		expect(p.parse("Maaku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maa 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bqp)", () => {
		expect(p.parse("Luku 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bqp)", () => {
		expect(p.parse("1 Yuhana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuhana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bqp)", () => {
		expect(p.parse("2 Yuhana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuhana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bqp)", () => {
		expect(p.parse("3 Yuhana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yuhana 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bqp)", () => {
		expect(p.parse("Yuhana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bqp)", () => {
		expect(p.parse("Zĩrinɔ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Zĩr 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bqp)", () => {
		expect(p.parse("Romudenɔ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bqp)", () => {
		expect(p.parse("1 Kɔrintidenɔ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔrintidenɔ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bqp)", () => {
		expect(p.parse("2 Kɔrintidenɔ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔrintidenɔ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bqp)", () => {
		expect(p.parse("1Kɔ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bqp)", () => {
		expect(p.parse("2Kɔ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bqp)", () => {
		expect(p.parse("Kɔlɔsedenɔ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Eph (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bqp)", () => {
		expect(p.parse("Ɛfesudenɔ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bqp)", () => {
		expect(p.parse("Filipidenɔ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bqp)", () => {
		expect(p.parse("1 Tɛsalonikadenɔ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsalonikadenɔ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bqp)", () => {
		expect(p.parse("2 Tɛsalonikadenɔ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsalonikadenɔ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bqp)", () => {
		expect(p.parse("1 Timɔti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timɔti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bqp)", () => {
		expect(p.parse("2 Timɔti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timɔti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bqp)", () => {
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bqp)", () => {
		expect(p.parse("Filimɔ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bqp)", () => {
		expect(p.parse("Eberunɔ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bqp)", () => {
		expect(p.parse("Yamisi 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bqp)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bqp)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bqp)", () => {
		expect(p.parse("Piɛɛ I, 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bqp)", () => {
		expect(p.parse("Piɛɛ II, 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bqp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bqp)", () => {
		expect(p.parse("Yudu 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tod.js";

describe("Localized book Gen (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (tod)", () => {
		expect(p.parse("Zenɛze 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Zen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (tod)", () => {
		expect(p.parse("Ɛgezɔde 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ɛgz 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (tod)", () => {
		expect(p.parse("Levi Nuiti 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (tod)", () => {
		expect(p.parse("Gaalu Sɛʋɛi 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("GlS 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (tod)", () => {
		expect(p.parse("Gɔlɔ Wooiti 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Gɔl 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tod)", () => {
		expect(p.parse("Kulakɛlɛmai 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kul 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (tod)", () => {
		expect(p.parse("Tɔ Sɛʋɛi Velesiɛi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Tsv 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (tod)", () => {
		expect(p.parse("Zozuwe 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Zoz 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (tod)", () => {
		expect(p.parse("Tukpɔɠaaleʋe Nuiti 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("TɠN 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tod)", () => {
		expect(p.parse("Lute 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Lut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (tod)", () => {
		expect(p.parse("Ezayi 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Eza 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tod)", () => {
		expect(p.parse("1 Samiyɛle 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samiyɛle 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tod)", () => {
		expect(p.parse("2 Samiyɛle 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samiyɛle 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tod)", () => {
		expect(p.parse("1Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tod)", () => {
		expect(p.parse("2Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tod)", () => {
		expect(p.parse("1 Masagiti 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Masagiti 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tod)", () => {
		expect(p.parse("2 Masagiti 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Masagiti 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tod)", () => {
		expect(p.parse("1Ma 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tod)", () => {
		expect(p.parse("2Ma 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tod)", () => {
		expect(p.parse("1 Dɔlɔ Sɛʋɛi 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Dɔlɔ Sɛʋɛi 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tod)", () => {
		expect(p.parse("2 Dɔlɔ Sɛʋɛi 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Dɔlɔ Sɛʋɛi 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tod)", () => {
		expect(p.parse("1Ds 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tod)", () => {
		expect(p.parse("2Ds 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (tod)", () => {
		expect(p.parse("Ɛsedalase 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ɛsd 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (tod)", () => {
		expect(p.parse("Neɠemi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neɠ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (tod)", () => {
		expect(p.parse("Ɛsetɛɛl 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ɛst 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (tod)", () => {
		expect(p.parse("Zɔɓe 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Zɔɓ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (tod)", () => {
		expect(p.parse("Guyeiti 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Guy 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (tod)", () => {
		expect(p.parse("Tɛnɛ Faalaaliiti 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Tfa 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (tod)", () => {
		expect(p.parse("Tɛnɛbo Nui 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("TbN 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (tod)", () => {
		expect(p.parse("Guyei Pagai Guyei Pɛ Ba 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Gpg 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (tod)", () => {
		expect(p.parse("Zelemi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Zel 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (tod)", () => {
		expect(p.parse("Ezekiyɛle 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (tod)", () => {
		expect(p.parse("Daniyɛle 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (tod)", () => {
		expect(p.parse("Wozé 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Woz 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (tod)", () => {
		expect(p.parse("Zowɛle 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Zow 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (tod)", () => {
		expect(p.parse("Amɔse 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amɔ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (tod)", () => {
		expect(p.parse("Aɓediyase 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Aɓd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tod)", () => {
		expect(p.parse("Zonase 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Zon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (tod)", () => {
		expect(p.parse("Misé 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mis 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (tod)", () => {
		expect(p.parse("Naɠuume 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naɠ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (tod)", () => {
		expect(p.parse("Aɓakuke 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Aɓk 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (tod)", () => {
		expect(p.parse("Sofoni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (tod)", () => {
		expect(p.parse("Azé 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (tod)", () => {
		expect(p.parse("Zakali 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zkl 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (tod)", () => {
		expect(p.parse("Malasi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tod)", () => {
		expect(p.parse("Matiyo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tod)", () => {
		expect(p.parse("Maleke 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tod)", () => {
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tod)", () => {
		expect(p.parse("1Za 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tod)", () => {
		expect(p.parse("2Za 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tod)", () => {
		expect(p.parse("3 Zan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Za 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tod)", () => {
		expect(p.parse("1 Zan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tod)", () => {
		expect(p.parse("2 Zan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tod)", () => {
		expect(p.parse("Zan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tod)", () => {
		expect(p.parse("Kɛɛwotiiti 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kkw 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tod)", () => {
		expect(p.parse("Wɔlɔme 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Wɔl 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tod)", () => {
		expect(p.parse("1 Kolɛnte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolɛnte 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tod)", () => {
		expect(p.parse("2 Kolɛnte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolɛnte 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tod)", () => {
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tod)", () => {
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tod)", () => {
		expect(p.parse("Kolɔse 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tod)", () => {
		expect(p.parse("Galate 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tod)", () => {
		expect(p.parse("Efɛze 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efz 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tod)", () => {
		expect(p.parse("Filipe 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tod)", () => {
		expect(p.parse("1 Tesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonike 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tod)", () => {
		expect(p.parse("2 Tesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonike 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tod)", () => {
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tod)", () => {
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tod)", () => {
		expect(p.parse("1 Timɔte 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timɔte 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tod)", () => {
		expect(p.parse("2 Timɔte 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timɔte 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tod)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tod)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tod)", () => {
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tod)", () => {
		expect(p.parse("Filemɔn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tod)", () => {
		expect(p.parse("Eɓulu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eɓu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tod)", () => {
		expect(p.parse("Zake 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tod)", () => {
		expect(p.parse("1 Piyɛlɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piyɛlɛ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tod)", () => {
		expect(p.parse("2 Piyɛlɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piyɛlɛ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tod)", () => {
		expect(p.parse("1Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tod)", () => {
		expect(p.parse("2Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tod)", () => {
		expect(p.parse("Zude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Zud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (tod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (tod)", () => {
		expect(p.parse("Azé 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Wozé 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Misé 1:1").osis()).toEqual("Mic.1.1");
	});
});

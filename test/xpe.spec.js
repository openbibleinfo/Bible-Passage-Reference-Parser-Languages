"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/xpe.js";

describe("Localized book Gen (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (xpe)", () => {
		expect(p.parse("Zɛnɛse 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Zɛn 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (xpe)", () => {
		expect(p.parse("Ɛsedɔ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ɛse 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (xpe)", () => {
		expect(p.parse("Levetekɔ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (xpe)", () => {
		expect(p.parse("Nɔŋba 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (xpe)", () => {
		expect(p.parse("Zerusâlɛŋ Karáa Maa Wɔ̂lɔ-wooi 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Wɔ̂lɔ-wooi 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (xpe)", () => {
		expect(p.parse("M̀ɛni-lɛɛi 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("M̀ɛni 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (xpe)", () => {
		expect(p.parse("Dutɛrɔnome 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (xpe)", () => {
		expect(p.parse("Zasua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Zas 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (xpe)", () => {
		expect(p.parse("M̀ɛni-sâa Ƃó-ƃelai 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ƃó-ƃelai 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (xpe)", () => {
		expect(p.parse("Lûfi 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (xpe)", () => {
		expect(p.parse("Azaya 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (xpe)", () => {
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (xpe)", () => {
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (xpe)", () => {
		expect(p.parse("Samia Maa-ŋuŋ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (xpe)", () => {
		expect(p.parse("Samia Veerɛi 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (xpe)", () => {
		expect(p.parse("Kâloŋ Maa-ŋuŋ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (xpe)", () => {
		expect(p.parse("Kâloŋ Veerɛi 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (xpe)", () => {
		expect(p.parse("1 Kâloŋ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kâloŋ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (xpe)", () => {
		expect(p.parse("2 Kâloŋ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kâloŋ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (xpe)", () => {
		expect(p.parse("1 Kɔlɔ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kɔlɔ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (xpe)", () => {
		expect(p.parse("2 Kɔlɔ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kɔlɔ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (xpe)", () => {
		expect(p.parse("Kɔlɔnikɔ Maa-ŋuŋ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (xpe)", () => {
		expect(p.parse("Kɔlɔnikɔ Veerɛi 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (xpe)", () => {
		expect(p.parse("Ɛzura 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (xpe)", () => {
		expect(p.parse("Niɛmaya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Niɛ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (xpe)", () => {
		expect(p.parse("Ɛtɛ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (xpe)", () => {
		expect(p.parse("Zôo 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (xpe)", () => {
		expect(p.parse("Wule-woo-ŋa 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Wule 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (xpe)", () => {
		expect(p.parse("Táre-woo-ŋa 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Táre 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (xpe)", () => {
		expect(p.parse("Ikilisiati 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ikili 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (xpe)", () => {
		expect(p.parse("Wule-ŋa Kélee Mɛi Wûle 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Wule-ŋa 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (xpe)", () => {
		expect(p.parse("Zɛlemaya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Zɛl 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (xpe)", () => {
		expect(p.parse("Izikiɛ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Izi 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (xpe)", () => {
		expect(p.parse("Danîa 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (xpe)", () => {
		expect(p.parse("Osia 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (xpe)", () => {
		expect(p.parse("Zooɛ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (xpe)", () => {
		expect(p.parse("Emɔ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (xpe)", () => {
		expect(p.parse("Obadaya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (xpe)", () => {
		expect(p.parse("Zôna 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (xpe)", () => {
		expect(p.parse("Maka 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (xpe)", () => {
		expect(p.parse("Neeuŋ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (xpe)", () => {
		expect(p.parse("Abaku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Aba 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (xpe)", () => {
		expect(p.parse("Zɛfɛnâya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zɛf 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (xpe)", () => {
		expect(p.parse("Egaa 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (xpe)", () => {
		expect(p.parse("Zɛkɛrâya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zɛk 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (xpe)", () => {
		expect(p.parse("Malakai 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (xpe)", () => {
		expect(p.parse("Maafîu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maaf 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (xpe)", () => {
		expect(p.parse("Mâki 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (xpe)", () => {
		expect(p.parse("Lûu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (xpe)", () => {
		expect(p.parse("Zɔ̂ŋ Maa-ŋuŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (xpe)", () => {
		expect(p.parse("Zɔ̂ŋ Veerɛi 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (xpe)", () => {
		expect(p.parse("Zɔ̂ŋ Zaaƃai 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Zɔ̂ŋ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (xpe)", () => {
		expect(p.parse("1 Zɔ̂ŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zɔ̂ŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (xpe)", () => {
		expect(p.parse("2 Zɔ̂ŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zɔ̂ŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (xpe)", () => {
		expect(p.parse("Zɔ̂ŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (xpe)", () => {
		expect(p.parse("Zia-ƃelai Kɛ́-mɛni-ŋai 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Díkɛ-mɛni-ŋai 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (xpe)", () => {
		expect(p.parse("Lomaŋ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (xpe)", () => {
		expect(p.parse("1 Kɔle 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔle 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (xpe)", () => {
		expect(p.parse("2 Kɔle 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔle 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (xpe)", () => {
		expect(p.parse("Kɔleŋtiɛŋ Maa-ŋuŋ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (xpe)", () => {
		expect(p.parse("Kɔleŋtiɛŋ Veerɛi 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (xpe)", () => {
		expect(p.parse("Kolasiɛŋ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (xpe)", () => {
		expect(p.parse("Galesiɛŋ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (xpe)", () => {
		expect(p.parse("Ifisiɛŋ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ifi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (xpe)", () => {
		expect(p.parse("Felepiɛŋ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fel 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (xpe)", () => {
		expect(p.parse("1 Tɛsɛ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsɛ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (xpe)", () => {
		expect(p.parse("2 Tɛsɛ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsɛ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (xpe)", () => {
		expect(p.parse("Tɛsɛlôniɛŋ Maa-ŋuŋ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (xpe)", () => {
		expect(p.parse("Tɛsɛlôniɛŋ Veerɛi 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (xpe)", () => {
		expect(p.parse("1 Tem 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tem 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (xpe)", () => {
		expect(p.parse("2 Tem 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tem 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (xpe)", () => {
		expect(p.parse("Temete Maa-ŋuŋ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (xpe)", () => {
		expect(p.parse("Temete Veerɛi 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (xpe)", () => {
		expect(p.parse("Taitɔ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (xpe)", () => {
		expect(p.parse("Falemɔŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fal 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (xpe)", () => {
		expect(p.parse("Ibulu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (xpe)", () => {
		expect(p.parse("Zĩi 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (xpe)", () => {
		expect(p.parse("Pitɛ Maa-ŋuŋ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (xpe)", () => {
		expect(p.parse("Pitɛ Veerɛi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (xpe)", () => {
		expect(p.parse("1 Pitɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pitɛ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (xpe)", () => {
		expect(p.parse("2 Pitɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pitɛ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (xpe)", () => {
		expect(p.parse("Zûu 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle translations (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (xpe)", () => {
		expect(p.parse("Lev 1 (KWB)").osis_and_translations()).toEqual([["Lev.1","KWB"]]);
	});
});
describe("Parser helper should handle book ranges (xpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (xpe)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Zɔ̂ŋ Maa-ŋuŋ - Zɔ̂ŋ Zaaƃai").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Zɔ̂ŋ Maa-ŋuŋ – Zɔ̂ŋ Zaaƃai").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Zɔ̂ŋ Maa-ŋuŋ — Zɔ̂ŋ Zaaƃai").osis()).toEqual("1John.1-3John.1");
	});
});

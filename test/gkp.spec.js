"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gkp.js";

describe("Localized book Gen (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (gkp)", () => {
		expect(p.parse("Gɔwɔ tɔɔi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Zɛnɛse 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gth 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Zɛn 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (gkp)", () => {
		expect(p.parse("Lɛɛ gbɔwɔ ɓa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ɛsedɔ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ɛse 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Lgh 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (gkp)", () => {
		expect(p.parse("Bɛlə 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (gkp)", () => {
		expect(p.parse("aláá hɛɓɛ́ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levetekɔ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ah 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (gkp)", () => {
		expect(p.parse("Lonon mo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nɔŋba 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Lon 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (gkp)", () => {
		expect(p.parse("Sirasidə 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sira 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (gkp)", () => {
		expect(p.parse("Kilikɛɲəi 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Kilikɛ 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (gkp)", () => {
		expect(p.parse("Zerusâlɛŋ Karáa Maa Wɔ̂lɔ-wooi 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Wɔ̂lɔ-wooi 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Woolaa 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Woola 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gkp)", () => {
		expect(p.parse("Kulɔ ponoŋą hɛɓɛ́ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("M̀ɛni-lɛɛi 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kulpo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("M̀ɛni 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (gkp)", () => {
		expect(p.parse("Dɔ́n ɛɓɛ́ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dutɛrɔnome 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dgth 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (gkp)", () => {
		expect(p.parse("Zasua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("osue 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Zas 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("os 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (gkp)", () => {
		expect(p.parse("M̀ɛni-sâa Ƃó-ƃelai 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Nwun mąąɓo 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ƃó-ƃelai 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Nwmh 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (gkp)", () => {
		expect(p.parse("Lûfi 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rutə 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (gkp)", () => {
		expect(p.parse("Azaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Esai 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Esa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (gkp)", () => {
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Tɔɔɓɛlaa Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Tɔɔɓɛlaa. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (gkp)", () => {
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Tɔɔɓɛlaa Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Tɔɔɓɛlaa. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (gkp)", () => {
		expect(p.parse("Samia Maa-ŋuŋ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Samuɛlə dɔlɔɔ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (gkp)", () => {
		expect(p.parse("Samuɛlə veelɛ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Samia Veerɛi 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (gkp)", () => {
		expect(p.parse("Kâloŋ-ŋa Maa-ŋuŋ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Tɔɔh 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (gkp)", () => {
		expect(p.parse("Kâloŋ-ŋa Veerɛi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Tɔɔh 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (gkp)", () => {
		expect(p.parse("1 kɛmɛ̨nį dɔlɔɔ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kɔlɔ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. kɛmɛ̨nį dɔlɔɔ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kɔlɔ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Tɔɔɓɛlaa kɛmɛ̨nį dɔlɔɔ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Tɔɔɓɛlaa Kɔlɔ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Tɔɔɓɛlaa. kɛmɛ̨nį dɔlɔɔ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Tɔɔɓɛlaa. Kɔlɔ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 1Chr (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (gkp)", () => {
		expect(p.parse("Kɔlɔnikɔ Maa-ŋuŋ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Tɔkh 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (gkp)", () => {
		expect(p.parse("2 kɛmɛ̨nį veelɛ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kɔlɔ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. kɛmɛ̨nį veelɛ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kɔlɔ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Tɔɔɓɛlaa kɛmɛ̨nį veelɛ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Tɔɔɓɛlaa Kɔlɔ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Tɔɔɓɛlaa. kɛmɛ̨nį veelɛ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Tɔɔɓɛlaa. Kɔlɔ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (gkp)", () => {
		expect(p.parse("Kɔlɔnikɔ Veerɛi 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2tTɔkh 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (gkp)", () => {
		expect(p.parse("Ɛsdrasə 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ɛzura 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ɛsdr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (gkp)", () => {
		expect(p.parse("Niɛmaya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehem 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Niɛ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (gkp)", () => {
		expect(p.parse("Zôo 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ob 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (gkp)", () => {
		expect(p.parse("Wule-woo-ŋa 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mąątɛ̨nɛ̨ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mąątɛ̨ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Wule 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (gkp)", () => {
		expect(p.parse("Azaria ni 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (gkp)", () => {
		expect(p.parse("Táre-woo-ŋa 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Hanwon 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Hanw 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Táre 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (gkp)", () => {
		expect(p.parse("Kilimąą mun 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ikilisiati 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ikili 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kili 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (gkp)", () => {
		expect(p.parse("Wule-ŋa Kélee Mɛi Wûle 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Wule-ŋa 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Wɛli 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (gkp)", () => {
		expect(p.parse("Zɛlemaya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ɉeremi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ɉere 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Zɛl 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (gkp)", () => {
		expect(p.parse("Ezekiɛlə 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Izikiɛ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Izi 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (gkp)", () => {
		expect(p.parse("Daniɛlə 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Danîa 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dani 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (gkp)", () => {
		expect(p.parse("Osia 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ose 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (gkp)", () => {
		expect(p.parse("oɛlə 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Zooɛ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("oɛl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (gkp)", () => {
		expect(p.parse("Amɔsə 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amɔs 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Emɔ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (gkp)", () => {
		expect(p.parse("Abdiasə 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadaya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (gkp)", () => {
		expect(p.parse("onasə 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Zôna 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (gkp)", () => {
		expect(p.parse("Maka 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mise 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mis 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (gkp)", () => {
		expect(p.parse("Nahumə 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Neeuŋ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahu 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (gkp)", () => {
		expect(p.parse("Habakukə 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Abaku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habak 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Aba 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (gkp)", () => {
		expect(p.parse("Zɛfɛnâya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofoni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofo 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zɛf 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (gkp)", () => {
		expect(p.parse("Egaa 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Aze 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (gkp)", () => {
		expect(p.parse("Zɛkɛrâya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zakari 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zaka 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zɛk 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (gkp)", () => {
		expect(p.parse("Malakai 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malasi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mala 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gkp)", () => {
		expect(p.parse("Maafîu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matie 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maaf 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gkp)", () => {
		expect(p.parse("Markə 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mâki 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gkp)", () => {
		expect(p.parse("Lukə 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lûu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gkp)", () => {
		expect(p.parse("Zɔ̂ŋ Maa-ŋuŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("aan dɔlɔɔ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1aan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gkp)", () => {
		expect(p.parse("Zɔ̂ŋ Veerɛi 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("aan veelɛ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2aan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gkp)", () => {
		expect(p.parse("Zɔ̂ŋ Zaaƃai 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("aan aaɓa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Zɔ̂ŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3aan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gkp)", () => {
		expect(p.parse("1 Zɔ̂ŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zɔ̂ŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Tɔɔɓɛlaa Zɔ̂ŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Tɔɔɓɛlaa. Zɔ̂ŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gkp)", () => {
		expect(p.parse("2 Zɔ̂ŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zɔ̂ŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Tɔɔɓɛlaa Zɔ̂ŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Tɔɔɓɛlaa. Zɔ̂ŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gkp)", () => {
		expect(p.parse("Ɉaan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Zɔ̂ŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gkp)", () => {
		expect(p.parse("Zia-ƃelai Kɛ́-mɛni-ŋai 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Díkɛ-mɛni-ŋai 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gɛlaɠaa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gɛla 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gkp)", () => {
		expect(p.parse("Lomaŋ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romə 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gkp)", () => {
		expect(p.parse("1 Kɔle 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔle 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Tɔɔɓɛlaa Kɔle 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Tɔɔɓɛlaa. Kɔle 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gkp)", () => {
		expect(p.parse("2 Kɔle 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔle 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tɔɔɓɛlaa Kɔle 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tɔɔɓɛlaa. Kɔle 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gkp)", () => {
		expect(p.parse("Kɔleŋtiɛŋ Maa-ŋuŋ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Korɛntə dɔlɔɔ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gkp)", () => {
		expect(p.parse("Kɔleŋtiɛŋ Veerɛi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Korɛntə veelɛ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gkp)", () => {
		expect(p.parse("Kolasiɛŋ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosə 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolos 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gkp)", () => {
		expect(p.parse("Galesiɛŋ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatə 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galat 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gkp)", () => {
		expect(p.parse("Ifisiɛŋ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛsə 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ifi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gkp)", () => {
		expect(p.parse("Felepiɛŋ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipə 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fel 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gkp)", () => {
		expect(p.parse("1 Tɛsɛ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsɛ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tɔɔɓɛlaa Tɛsɛ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tɔɔɓɛlaa. Tɛsɛ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gkp)", () => {
		expect(p.parse("2 Tɛsɛ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsɛ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tɔɔɓɛlaa Tɛsɛ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tɔɔɓɛlaa. Tɛsɛ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gkp)", () => {
		expect(p.parse("Tɛsɛlôniɛŋ Maa-ŋuŋ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tɛsalonikə dɔlɔɔ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tɛsa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gkp)", () => {
		expect(p.parse("Tɛsɛlôniɛŋ Veerɛi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tɛsalonikə veelɛ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tɛsa 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gkp)", () => {
		expect(p.parse("1 Tem 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tem 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tɔɔɓɛlaa Tem 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tɔɔɓɛlaa. Tem 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gkp)", () => {
		expect(p.parse("2 Tem 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tem 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tɔɔɓɛlaa Tem 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tɔɔɓɛlaa. Tem 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gkp)", () => {
		expect(p.parse("Temete Maa-ŋuŋ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Timote dɔlɔɔ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gkp)", () => {
		expect(p.parse("Temete Veerɛi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Timote veelɛ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gkp)", () => {
		expect(p.parse("Taitɔ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titə 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gkp)", () => {
		expect(p.parse("Falemɔŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemɔn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fal 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gkp)", () => {
		expect(p.parse("Hebreu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebre 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibulu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gkp)", () => {
		expect(p.parse("akə 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zĩi 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gkp)", () => {
		expect(p.parse("Pitɛ Maa-ŋuŋ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Piɛrə dɔlɔɔ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Piɛ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 1Kgs (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (gkp)", () => {
		expect(p.parse("1 dɔlɔɔ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kâloŋ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. dɔlɔɔ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kâloŋ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Tɔɔɓɛlaa dɔlɔɔ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Tɔɔɓɛlaa Kâloŋ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Tɔɔɓɛlaa. dɔlɔɔ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Tɔɔɓɛlaa. Kâloŋ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Pet (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gkp)", () => {
		expect(p.parse("Piɛrə veelɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pitɛ Veerɛi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Piɛ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Kgs (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (gkp)", () => {
		expect(p.parse("2 Kâloŋ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 veelɛ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kâloŋ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. veelɛ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Tɔɔɓɛlaa Kâloŋ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Tɔɔɓɛlaa veelɛ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Tɔɔɓɛlaa. Kâloŋ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Tɔɔɓɛlaa. veelɛ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Pet (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gkp)", () => {
		expect(p.parse("1 Pitɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pitɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Tɔɔɓɛlaa Pitɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Tɔɔɓɛlaa. Pitɛ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gkp)", () => {
		expect(p.parse("2 Pitɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pitɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Tɔɔɓɛlaa Pitɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Tɔɔɓɛlaa. Pitɛ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gkp)", () => {
		expect(p.parse("udə 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Zûu 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (gkp)", () => {
		expect(p.parse("Tobi 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (gkp)", () => {
		expect(p.parse("uditə 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("udi 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (gkp)", () => {
		expect(p.parse("Barukə 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Baru 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (gkp)", () => {
		expect(p.parse("Susanə 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Susa 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (gkp)", () => {
		expect(p.parse("1 Makabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Tɔɔɓɛlaa Makabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Tɔɔɓɛlaa. Makabe 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (gkp)", () => {
		expect(p.parse("2 Makabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Tɔɔɓɛlaa Makabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Tɔɔɓɛlaa. Makabe 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 1Macc (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (gkp)", () => {
		expect(p.parse("1Maka 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (gkp)", () => {
		expect(p.parse("2Maka 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Esth (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (gkp)", () => {
		expect(p.parse("Ɛstɛrə 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ɛstɛ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ɛtɛ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Preferred book names (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (gkp)", () => {
		expect(p.parse("Tɔɔɓɛlaa kɛmɛ̨nį dɔlɔɔ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Tɔɔɓɛlaa kɛmɛ̨nį veelɛ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Kilimąą mun 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Nwun mąąɓo 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Mąątɛ̨nɛ̨ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mąątɛ̨ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Kulɔ ponoŋą hɛɓɛ́ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Parser helper should handle translations (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (gkp)", () => {
		expect(p.parse("Lev 1 (KWB)").osis_and_translations()).toEqual([["Lev.1","KWB"]]);
		expect(p.parse("Lev 1 (BKPG)").osis_and_translations()).toEqual([["Lev.1","BKPG"]]);
		expect(p.parse("Lev 1 (BKPDCG)").osis_and_translations()).toEqual([["Lev.1","BKPDCG"]]);
	});
});
describe("Parser helper should handle book ranges (gkp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (gkp)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Zɔ̂ŋ Maa-ŋuŋ - Zɔ̂ŋ Zaaƃai").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Zɔ̂ŋ Maa-ŋuŋ – Zɔ̂ŋ Zaaƃai").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Zɔ̂ŋ Maa-ŋuŋ — Zɔ̂ŋ Zaaƃai").osis()).toEqual("1John.1-3John.1");
	});
});

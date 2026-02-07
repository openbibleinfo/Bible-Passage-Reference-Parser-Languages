"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kss.js";

describe("Localized book Gen (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kss)", () => {
		expect(p.parse("Chɛ̄nɛ̍se̍ē 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Chɛ̄ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kss)", () => {
		expect(p.parse("Ɛ̍sɔ̍dɔ̍ɔ̄ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ɛ̍sɔ̍ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kss)", () => {
		expect(p.parse("Lɛ̄vi̍ti̍kɔ̍ɔ̄ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lɛ̄vi̍ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kss)", () => {
		expect(p.parse("Nɔ̍mbāā 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nɔ̍m 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (kss)", () => {
		expect(p.parse("Cha᷄ŋ Īmɔ̍nɛ̍ Chɛ̄lūīma̍yā Wo̍ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Cha᷄ŋ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kss)", () => {
		expect(p.parse("Sɔ̄ɔ̍ŋ Chɔ̍ɔ̍ma᷄ŋndo̍ŋ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Sɔ̄ɔ̍ŋ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kss)", () => {
		expect(p.parse("Dītɔ̍nɔ̍mi̍ī 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dītɔ̍nɔ̍ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kss)", () => {
		expect(p.parse("Chɔ̄ɔ̍sūāā 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Chɔ̄ɔ̍ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kss)", () => {
		expect(p.parse("Chɔ̄ɔ̍chi̍a̍a̍ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Chɔ̄ɔ̍chi̍ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kss)", () => {
		expect(p.parse("Lu̍fū 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (kss)", () => {
		expect(p.parse("Āīsa̍yā 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kss)", () => {
		expect(p.parse("1 Sa̍a̍m 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sa̍a̍m 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kss)", () => {
		expect(p.parse("2 Sa̍a̍m 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sa̍a̍m 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kss)", () => {
		expect(p.parse("Sa̍a̍mi̍ɛ̍ɛ̄ Tāso̍o̍ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kss)", () => {
		expect(p.parse("Sa̍a̍mi̍ɛ̍ɛ̄ Di̍i̍ŋ Ndɔ̄ɔ̍ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kss)", () => {
		expect(p.parse("Māsāā Bɛ̍ndūāā Tāsi̍a̍a̍ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kss)", () => {
		expect(p.parse("Māsāā Bɛ̍ndūāā Di̍i̍ŋ Ndūa̍a̍ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kss)", () => {
		expect(p.parse("1 Māsāā 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Māsāā 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kss)", () => {
		expect(p.parse("2 Māsāā 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Māsāā 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kss)", () => {
		expect(p.parse("1 Ko̍lo̍ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ko̍lo̍ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kss)", () => {
		expect(p.parse("2 Ko̍lo̍ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ko̍lo̍ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kss)", () => {
		expect(p.parse("Ko̍lo̍ni̍kō Tāso̍o̍ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kss)", () => {
		expect(p.parse("Ko̍lo̍ni̍kō Di̍i̍ŋ Ndɔ̄ɔ̍ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (kss)", () => {
		expect(p.parse("Ɛ̍si̍lūā 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ɛ̍si̍ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (kss)", () => {
		expect(p.parse("Nɛ̄hīma̍yā 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nɛ̄hī 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kss)", () => {
		expect(p.parse("Ɛ̄si̍tā 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (kss)", () => {
		expect(p.parse("Cho̍o̍bū 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kss)", () => {
		expect(p.parse("Sa᷅m 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kss)", () => {
		expect(p.parse("Pu̍lɔ̍wāā 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pu̍lɔ̍ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kss)", () => {
		expect(p.parse("Īkīlīsi̍a̍a̍tīī 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Īkīlī 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (kss)", () => {
		expect(p.parse("Chōndi̍i̍ Sɔ̍lɔ̍mɔ̄ŋ Nde̍ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Chōnde̍i̍ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (kss)", () => {
		expect(p.parse("Chɛ̄lūīma̍yā 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Chɛ̄lūī 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (kss)", () => {
		expect(p.parse("Īsi̍kīāā 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Īsi̍ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kss)", () => {
		expect(p.parse("Da̍a̍ni̍ɛ̍ɛ̄ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Da̍a̍n 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (kss)", () => {
		expect(p.parse("Hōōsi̍a̍ā 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hōōsi̍ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (kss)", () => {
		expect(p.parse("Cho̍wɛ̄ɛ̄ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (kss)", () => {
		expect(p.parse("E̍mɔ̍ɔ̍sī 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("E̍mɔ̍ɔ̄ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (kss)", () => {
		expect(p.parse("Ōbāda̍yā 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ōbā 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kss)", () => {
		expect(p.parse("Cho̍nā 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (kss)", () => {
		expect(p.parse("Ma̍kāl 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (kss)", () => {
		expect(p.parse("Nāhu᷅m 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nāh 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (kss)", () => {
		expect(p.parse("Ha̍ba̍ku̍kū 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ha̍ba̍ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (kss)", () => {
		expect(p.parse("Sɛ̄fāna̍yā 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sɛ̄fā 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (kss)", () => {
		expect(p.parse("Ha̍kāī 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (kss)", () => {
		expect(p.parse("Sɛ̄kāla̍yā 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sɛ̄kā 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kss)", () => {
		expect(p.parse("Māla̍kāī 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Māla̍ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kss)", () => {
		expect(p.parse("Māa̍ti̍u̍ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ma̍a̍ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kss)", () => {
		expect(p.parse("Ma̍kī 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kss)", () => {
		expect(p.parse("Lu̍kū 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kss)", () => {
		expect(p.parse("Chɔ᷄ŋ Tāso̍o̍ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kss)", () => {
		expect(p.parse("Chɔ᷄ŋ Di̍i̍ŋ Ndɔ̄ɔ̍ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kss)", () => {
		expect(p.parse("Chɔ᷄ŋ Ŋgāa̍ Ndɔ̄ɔ̍ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Chɔ᷄ŋ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kss)", () => {
		expect(p.parse("1 Chɔ᷄ŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Chɔ᷄ŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kss)", () => {
		expect(p.parse("2 Chɔ᷄ŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Chɔ᷄ŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kss)", () => {
		expect(p.parse("Chɔ᷄ŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kss)", () => {
		expect(p.parse("Wa̍lta̍ Wānāa̍ Chi̍i̍sūa̍a̍ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Wa̍lta̍ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kss)", () => {
		expect(p.parse("Lu̍o̍ma᷅ŋnda̍ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lu̍o̍ma᷅ŋ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kss)", () => {
		expect(p.parse("1 Kɔ̄li̍ŋ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔ̄li̍ŋ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kss)", () => {
		expect(p.parse("2 Kɔ̄li̍ŋ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔ̄li̍ŋ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kss)", () => {
		expect(p.parse("Kɔ̄li̍ŋtīāŋ Tāso̍o̍ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kss)", () => {
		expect(p.parse("Kɔ̄li̍ŋtīāŋ Di̍i̍ŋ Ndɔ̄ɔ̍ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kss)", () => {
		expect(p.parse("Kōlo̍sīāŋnda̍ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kōlo̍ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kss)", () => {
		expect(p.parse("Kāle̍e̍sīāŋnda̍ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kāle̍e̍ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kss)", () => {
		expect(p.parse("Ɛ̄fi̍sīāŋnda̍ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛ̄fi̍ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kss)", () => {
		expect(p.parse("Fīli̍pīāŋnda̍ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fi̍li̍pī 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kss)", () => {
		expect(p.parse("1 Tɛ̄sā 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛ̄sā 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kss)", () => {
		expect(p.parse("2 Tɛ̄sā 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛ̄sā 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kss)", () => {
		expect(p.parse("Tɛ̄sālo̍nīāŋ Tāso̍o̍ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kss)", () => {
		expect(p.parse("Tɛ̄sālo̍nīāŋ Di̍i̍ŋ Ndɔ̄ɔ̍ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kss)", () => {
		expect(p.parse("1 Ti̍mo̍ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti̍mo̍ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kss)", () => {
		expect(p.parse("2 Ti̍mo̍ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti̍mo̍ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kss)", () => {
		expect(p.parse("Ti̍mo̍tī Tāso̍o̍ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kss)", () => {
		expect(p.parse("Ti̍mo̍tī Di̍i̍ŋ Ndɔ̄ɔ̍ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kss)", () => {
		expect(p.parse("Ta̍i̍tɔ̄ɔ̄ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Ta̍i̍ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kss)", () => {
		expect(p.parse("Fi̍lɛ̍mɔ̄ŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fi̍lɛ̍ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kss)", () => {
		expect(p.parse("Hi̍būlūi̍ya̍ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hi̍bū 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kss)", () => {
		expect(p.parse("Chēmi̍si̍ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Che᷅m 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kss)", () => {
		expect(p.parse("Pītɛ̍ Tāso̍o̍ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kss)", () => {
		expect(p.parse("Pītɛ̍ Di̍i̍ŋ Ndɔ̄ɔ̍ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kss)", () => {
		expect(p.parse("1 Pītɛ̍ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pītɛ̍ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kss)", () => {
		expect(p.parse("2 Pītɛ̍ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pītɛ̍ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kss)", () => {
		expect(p.parse("Chu̍dī 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (kss)", () => {
		expect(p.parse("Pītɛ̍ Di̍i̍ŋ Ndɔ̄ɔ̍ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pītɛ̍ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Tɛ̄sālo̍nīāŋ Di̍i̍ŋ Ndɔ̄ɔ̍ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tɛ̄sā 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Chɔ᷄ŋ Ŋgāa̍ Ndɔ̄ɔ̍ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Ha̍kāī 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Cho̍nā 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Chu̍dī 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Cha᷄ŋ Īmɔ̍nɛ̍ Chɛ̄lūīma̍yā Wo̍ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ōbāda̍yā 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ōbā 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Parser helper should handle book ranges (kss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (kss)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Chɔ᷄ŋ Tāso̍o̍ - Chɔ᷄ŋ Ŋgāa̍ Ndɔ̄ɔ̍").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Chɔ᷄ŋ Tāso̍o̍ – Chɔ᷄ŋ Ŋgāa̍ Ndɔ̄ɔ̍").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Chɔ᷄ŋ Tāso̍o̍ — Chɔ᷄ŋ Ŋgāa̍ Ndɔ̄ɔ̍").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ton.js";

describe("Localized book Gen (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ton)", () => {
		expect(p.parse("Ko Sēnesi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Jenesi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Sēn 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ton)", () => {
		expect(p.parse("Ko ‘Ekisoto 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ekesotosi 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("‘Eki 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ton)", () => {
		expect(p.parse("Levitiko 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ton)", () => {
		expect(p.parse("Nomiba 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nōmipa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nōm 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ton)", () => {
		expect(p.parse("Koe Tagilaulau A Jelemaia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Koni Tangilāulau 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Tangi 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ton)", () => {
		expect(p.parse("Ko E Me‘a Fakahā 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Fakaha 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Fakahā 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Fkhā 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ton)", () => {
		expect(p.parse("Ko Teutalōnome 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Teutalonome 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Teu 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ton)", () => {
		expect(p.parse("Ko Siosiua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josiua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Sios 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ton)", () => {
		expect(p.parse("Koe Kau Fakamau 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Kau Fakamaau 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Fkm 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ton)", () => {
		expect(p.parse("Ko Lute 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Lute 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Luté 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ton)", () => {
		expect(p.parse("Koe Tohi A Isaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ko ‘Aisea 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("‘Ais 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ton)", () => {
		expect(p.parse("1 1 Sāmiuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sām 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. 1 Sāmiuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sām 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ko 1 Sāmiuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ko Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ko Sām 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ko. 1 Sāmiuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ko. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ko. Sām 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ton)", () => {
		expect(p.parse("2 2 Sāmiuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sām 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. 2 Sāmiuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sām 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II 2 Sāmiuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sām 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. 2 Sāmiuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sām 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ko 2 Sāmiuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ko Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ko Sām 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ko. 2 Sāmiuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ko. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ko. Sām 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ton)", () => {
		expect(p.parse("1 Koe Gaahi Tu‘i 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 1 Tu‘i 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Tu‘i 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Koe Gaahi Tu‘i 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. 1 Tu‘i 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Tu‘i 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ko Koe Gaahi Tu‘i 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ko 1 Tu‘i 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ko Tu‘i 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ko. Koe Gaahi Tu‘i 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ko. 1 Tu‘i 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ko. Tu‘i 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ton)", () => {
		expect(p.parse("2 Koe Gaahi Tu‘i 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 2 Tu‘i 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Tu‘i 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Koe Gaahi Tu‘i 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. 2 Tu‘i 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Tu‘i 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Koe Gaahi Tu‘i 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II 2 Tu‘i 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Tu‘i 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Koe Gaahi Tu‘i 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. 2 Tu‘i 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Tu‘i 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ko Koe Gaahi Tu‘i 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ko 2 Tu‘i 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ko Tu‘i 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ko. Koe Gaahi Tu‘i 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ko. 2 Tu‘i 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ko. Tu‘i 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ton)", () => {
		expect(p.parse("1 Koe Tohi Fakamatala Mea Hokohoko 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kal 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Koe Tohi Fakamatala Mea Hokohoko 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kal 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ko Koe Tohi Fakamatala Mea Hokohoko 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ko Kal 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ko. Koe Tohi Fakamatala Mea Hokohoko 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ko. Kal 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ton)", () => {
		expect(p.parse("2 Koe Tohi Fakamatala Mea Hokohoko 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kal 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Koe Tohi Fakamatala Mea Hokohoko 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kal 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Koe Tohi Fakamatala Mea Hokohoko 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Kal 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Koe Tohi Fakamatala Mea Hokohoko 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Kal 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ko Koe Tohi Fakamatala Mea Hokohoko 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ko Kal 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ko. Koe Tohi Fakamatala Mea Hokohoko 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ko. Kal 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ton)", () => {
		expect(p.parse("Koe Tohi A Esela 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ko ‘Ēsela 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("‘Ēsela 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ton)", () => {
		expect(p.parse("Koe Tohi A Nehemaia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Ko Nehemaia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehe 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ton)", () => {
		expect(p.parse("Koe Tohi A Eseta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ko ‘Ēseta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("‘Ēseta 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ton)", () => {
		expect(p.parse("Koe Tohi A Jobe 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ko Siope 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Siope 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ton)", () => {
		expect(p.parse("Koe Gaahi Same 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ko E Saame 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Saame 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ton)", () => {
		expect(p.parse("Koe Gaahi Lea Fakatātā 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Palōvepi 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pal 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ton)", () => {
		expect(p.parse("Koe Tohi Ae Tagata Malaga 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Koheleti 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Koh 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ton)", () => {
		expect(p.parse("Koe Hiva A Solomone 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hiva ‘O E Hiva 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hiva 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ton)", () => {
		expect(p.parse("Koe Tohi A Jelemaia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ko Selemaia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Sel 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ton)", () => {
		expect(p.parse("Koe Tohi A Isikieli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ko ‘Isikeli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("‘Isi 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ton)", () => {
		expect(p.parse("Koe Tohi A Taniela 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Ko Tāniela 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Tān 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ton)", () => {
		expect(p.parse("Koe Tohi A Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ko Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hōs 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ton)", () => {
		expect(p.parse("Koe Tohi A Joeli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ko Sioeli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Sioelí 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ton)", () => {
		expect(p.parse("Koe Tohi A Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ko ‘Ēmosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("‘Ēmosi 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ton)", () => {
		expect(p.parse("Koe Tohi A Obataia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ko ‘Opataia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("‘Opa 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ton)", () => {
		expect(p.parse("Koe Tohi A Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ko Siona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Sioná 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ton)", () => {
		expect(p.parse("Koe Tohi A Maika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Ko Maika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Maiká 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ton)", () => {
		expect(p.parse("Koe Tohi A Nehumi 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Ko Nēhumi 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nēhu 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ton)", () => {
		expect(p.parse("Koe Tohi A Habakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ko Hapakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hap 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ton)", () => {
		expect(p.parse("Koe Tohi A Sefanaia 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Ko Sefanaia 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ton)", () => {
		expect(p.parse("Koe Tohi A Hakeai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ko Hākeai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hāk 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ton)", () => {
		expect(p.parse("Koe Tohi A Sakalaia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Ko Sākalaia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sāk 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ton)", () => {
		expect(p.parse("Koe Tohi A Malakai 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Ko Malakai 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ton)", () => {
		expect(p.parse("E Matiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mātiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mātiú 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Māt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ton)", () => {
		expect(p.parse("Ma‘ake 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Ma‘aké 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maake 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ton)", () => {
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luké 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ton)", () => {
		expect(p.parse("Sioné 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("A Jone 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ton)", () => {
		expect(p.parse("Sioné 2 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ton)", () => {
		expect(p.parse("3 Sione 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Sioné 3 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jone 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ton)", () => {
		expect(p.parse("1 Sione 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Sione 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ko Sione 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ko. Sione 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ton)", () => {
		expect(p.parse("2 Sione 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jone 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Sione 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jone 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Sione 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Jone 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Sione 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jone 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ko Sione 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ko Jone 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ko. Sione 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ko. Jone 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ton)", () => {
		expect(p.parse("Sione 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Sioné 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jone 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ton)", () => {
		expect(p.parse("‘Apositoló 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Koe Gaue 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ngāue 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ngā 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ton)", () => {
		expect(p.parse("Loma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ton)", () => {
		expect(p.parse("Kolinitō 1 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ton)", () => {
		expect(p.parse("Kolinitō 2 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ton)", () => {
		expect(p.parse("1 Kolinito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kolinitō 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kol 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolinito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolinitō 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kol 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ko Kolinito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ko Kolinitō 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ko Kol 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ko. Kolinito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ko. Kolinitō 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ko. Kol 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ton)", () => {
		expect(p.parse("2 Kolinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kolinitō 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kol 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolinitō 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kol 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kolinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kolinitō 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kol 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kolinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kolinitō 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kol 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ko Kolinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ko Kolinitō 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ko Kol 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ko. Kolinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ko. Kolinitō 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ko. Kol 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ton)", () => {
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosé 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ton)", () => {
		expect(p.parse("Kakai Kaletia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kalētia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kalētiá 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ton)", () => {
		expect(p.parse("Kakai Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("‘Efesō 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ʻEfesō 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("‘Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ton)", () => {
		expect(p.parse("Filibai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipaí 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ton)", () => {
		expect(p.parse("1 Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ko Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ko Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ko Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ko. Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ko. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ko. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ton)", () => {
		expect(p.parse("Tesalonaiká 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ton)", () => {
		expect(p.parse("Tesalonaiká 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tesalonaiká 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ton)", () => {
		expect(p.parse("2 Tesalonaiká 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonaiká 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalonaiká 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonaiká 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ko Tesalonaiká 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ko Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ko Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ko. Tesalonaiká 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ko. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ko. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ton)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tīmote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tīm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tīmote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tīm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ko Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ko Tīmote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ko Tīm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ko. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ko. Tīmote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ko. Tīm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ton)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tīmote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tīm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tīmote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tīm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tīmote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tīm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tīmote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tīm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ko Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ko Tīmote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ko Tīm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ko. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ko. Tīmote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ko. Tīm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ton)", () => {
		expect(p.parse("Tīmoté 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tīmote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ton)", () => {
		expect(p.parse("Tīmoté 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tīmote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ton)", () => {
		expect(p.parse("Taitusi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Taitusí 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tait 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ton)", () => {
		expect(p.parse("Filimone 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filimoné 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filim 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ton)", () => {
		expect(p.parse("Hebelu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hepelū 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hep 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ton)", () => {
		expect(p.parse("Jemesi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Sēmisi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Sēmisí 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Sēm 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ton)", () => {
		expect(p.parse("Pitá 1 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ton)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ko Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ko Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ko. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ko. Pit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ton)", () => {
		expect(p.parse("A Bita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pitá 2 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ton)", () => {
		expect(p.parse("1 Bita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ko Bita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ko Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ko Pit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ko. Bita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ko. Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ko. Pit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (ton)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ton)", () => {
		expect(p.parse("Siuta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jute 1:1").osis()).toEqual("Jude.1.1");
	});
});

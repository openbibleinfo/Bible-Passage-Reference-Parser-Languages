"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hau.js";

describe("Localized book Gen (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (hau)", () => {
		expect(p.parse("ڢَارَوَ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Farawa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ڢَارْ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Far 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (hau)", () => {
		expect(p.parse("ڢِتُواْوَ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Fitowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ڢِتْ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Fit 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (hau)", () => {
		expect(p.parse("ڢِرِسْتُواْثِے 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Firistoci 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("لِـ ڢِرْ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("L.Fir 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Fir 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (hau)", () => {
		expect(p.parse("لِـ ڧِدْ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ڧِدَايَ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ƙidaya 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("L.Ƙid 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ƙid 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (hau)", () => {
		expect(p.parse("مَكُواْكِ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("مَكُواْ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Makoki 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (hau)", () => {
		expect(p.parse("رُعُيَرْ دَ عَكَيِ وَ يَحْيَى 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ruʼuya ta Yohanna 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("رُعُيَ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("R Yoh 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("W.Yah 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (hau)", () => {
		expect(p.parse("مَيْمَيْتَاوَرْ شَرِيعَ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Maimaitawar Shariʼa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("مَيْ شَـ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("M Sh 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("M.Sh 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (hau)", () => {
		expect(p.parse("يُواْشُوَ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yoshuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("يُواشْ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yosh 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (hau)", () => {
		expect(p.parse("أَلْڧَلَيْ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Mahukunta 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("أَلْڧَ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("L.Mah 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Mah 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (hau)", () => {
		expect(p.parse("رُوتْ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (hau)", () => {
		expect(p.parse("عِشَايَ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ishaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("عِشـ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ish 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hau)", () => {
		expect(p.parse("1 سَمَٰعِيلَ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samaʼila 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 سَمْ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. سَمَٰعِيلَ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samaʼila 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. سَمْ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hau)", () => {
		expect(p.parse("2 سَمَٰعِيلَ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samaʼila 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 سَمْ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. سَمَٰعِيلَ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samaʼila 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. سَمْ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hau)", () => {
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hau)", () => {
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hau)", () => {
		expect(p.parse("1 سَرَاكُنَ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Sarakuna 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 سَرْ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. سَرَاكُنَ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Sarakuna 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. سَرْ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hau)", () => {
		expect(p.parse("2 سَرَاكُنَ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Sarakuna 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 سَرْ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. سَرَاكُنَ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Sarakuna 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. سَرْ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hau)", () => {
		expect(p.parse("1Sar 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hau)", () => {
		expect(p.parse("2Sar 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hau)", () => {
		expect(p.parse("1 تَارِيحِ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Tarihi 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 تَارْ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. تَارِيحِ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Tarihi 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. تَارْ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hau)", () => {
		expect(p.parse("2 تَارِيحِ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Tarihi 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 تَارْ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. تَارِيحِ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tarihi 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. تَارْ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hau)", () => {
		expect(p.parse("1Tar 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hau)", () => {
		expect(p.parse("2Tar 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (hau)", () => {
		expect(p.parse("عُزَيْرُ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (hau)", () => {
		expect(p.parse("نٜىٰهٜىٰمِيَ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("نٜىٰهْ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (hau)", () => {
		expect(p.parse("عٜىٰسْتَا 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esta 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (hau)", () => {
		expect(p.parse("أَيُوبَ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ayuba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("أَيُو 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ayu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (hau)", () => {
		expect(p.parse("زَبُورَا 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zabura 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("زَبُو 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zab 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (hau)", () => {
		expect(p.parse("كَرِنْ مَغَنَ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Karin Magana 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("كَـ مَغْـ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("K Mag 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("K.Mag 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (hau)", () => {
		expect(p.parse("Mai Hadishi 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("مَيْ وَعَظِ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("مَيْ وَ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("M Had 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("M.Had 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (hau)", () => {
		expect(p.parse("وَاڧَرْ وَاڧُواْڧِ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Waƙar Waƙoƙi 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("وْ وَاڧْ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("W.W 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ww 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (hau)", () => {
		expect(p.parse("إِرْمِيَ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Irmiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("إِرْمِ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Irm 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (hau)", () => {
		expect(p.parse("هِظْڧِيَالْ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekiyel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("هِظْ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (hau)", () => {
		expect(p.parse("دَانِيٜىٰلْ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daniyel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("دَانْ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (hau)", () => {
		expect(p.parse("يُوشَعُ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosiya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("يُوشْ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Yush 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (hau)", () => {
		expect(p.parse("يُواْوٜىٰلْ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("يُواوْ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yowel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yow 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (hau)", () => {
		expect(p.parse("عَمُواسْ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (hau)", () => {
		expect(p.parse("عُواْبَدِيَ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("عُواْبَدْ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (hau)", () => {
		expect(p.parse("يُونُسَ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yunana 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("يُونْ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yun 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (hau)", () => {
		expect(p.parse("مِيكَ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (hau)", () => {
		expect(p.parse("نَهُمْ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("نَهْ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (hau)", () => {
		expect(p.parse("حَبَكُّكْ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakkuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("حَبـ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (hau)", () => {
		expect(p.parse("Zefaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("زَڢَنِيَ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("زَڢـ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zaf 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (hau)", () => {
		expect(p.parse("هَغَّيْ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("هَغْ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (hau)", () => {
		expect(p.parse("زَكَرِيَّا 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zakariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("زَكْ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (hau)", () => {
		expect(p.parse("مَلَكَيْ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("مَلْ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (hau)", () => {
		expect(p.parse("Mattiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مَتِيُ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مَتْ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (hau)", () => {
		expect(p.parse("مَرْكُسْ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مَرْ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (hau)", () => {
		expect(p.parse("لُكَّ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لُكْ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hau)", () => {
		expect(p.parse("1Yah 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yoh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hau)", () => {
		expect(p.parse("2Yah 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yoh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hau)", () => {
		expect(p.parse("3 Yohanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 يَحْيَى 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 يَحـ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yah 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hau)", () => {
		expect(p.parse("1 Yohanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 يَحْيَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 يَحـ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. يَحْيَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. يَحـ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hau)", () => {
		expect(p.parse("2 Yohanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 يَحْيَى 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 يَحـ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. يَحْيَى 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. يَحـ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hau)", () => {
		expect(p.parse("Yohanna 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يَحْيَى 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يَحـ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yah 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (hau)", () => {
		expect(p.parse("أَيُّكَنْ مَنْذَنِّے 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ayyukan Manzanni 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("أَيُّكَنْ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ayy M 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("A.M 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (hau)", () => {
		expect(p.parse("رُواْمَاوَا 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romawa 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رُوامْ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hau)", () => {
		expect(p.parse("1 كُواْرِنْتِيَاوَا 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintiyawa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 كُوارْ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. كُواْرِنْتِيَاوَا 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintiyawa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. كُوارْ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hau)", () => {
		expect(p.parse("2 كُواْرِنْتِيَاوَا 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintiyawa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 كُوارْ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. كُواْرِنْتِيَاوَا 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintiyawa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. كُوارْ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hau)", () => {
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hau)", () => {
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (hau)", () => {
		expect(p.parse("كُواْلُواْسِيَاوَا 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolossiyawa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("كُوالْ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (hau)", () => {
		expect(p.parse("غَلَاتِيَاوَا 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatiyawa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("غَلْ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (hau)", () => {
		expect(p.parse("أَڢِسَاوَا 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Afisawa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أَڢِسْ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Afi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (hau)", () => {
		expect(p.parse("ڢِلِبِيَاوَا 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filibbiyawa 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ڢِلِبْ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fili 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hau)", () => {
		expect(p.parse("1 تَسَلُواْنِكَاوَا 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tessalonikawa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 تَسْ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تَسَلُواْنِكَاوَا 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessalonikawa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تَسْ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hau)", () => {
		expect(p.parse("2 تَسَلُواْنِكَاوَا 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tessalonikawa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 تَسْ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تَسَلُواْنِكَاوَا 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessalonikawa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تَسْ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hau)", () => {
		expect(p.parse("1Tas 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hau)", () => {
		expect(p.parse("2Tas 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hau)", () => {
		expect(p.parse("1 تِمُواْتِ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 تِمْ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تِمُواْتِ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تِمْ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hau)", () => {
		expect(p.parse("2 تِمُواْتِ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 تِمْ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تِمُواْتِ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تِمْ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hau)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hau)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (hau)", () => {
		expect(p.parse("تِيتُسْ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تِيتْ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (hau)", () => {
		expect(p.parse("ڢِلِمُوانْ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ڢِلْ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (hau)", () => {
		expect(p.parse("إِبْرَانِيَاوَا 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibraniyawa 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("إِبْرَ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (hau)", () => {
		expect(p.parse("يَعْڧُوبَ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يَعْڧـ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaƙub 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaƙ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hau)", () => {
		expect(p.parse("1 بِتْرُسْ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Bitrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 بِتْ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. بِتْرُسْ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bitrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. بِتْ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hau)", () => {
		expect(p.parse("2 بِتْرُسْ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Bitrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 بِتْ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. بِتْرُسْ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bitrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. بِتْ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hau)", () => {
		expect(p.parse("1Bit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hau)", () => {
		expect(p.parse("2Bit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (hau)", () => {
		expect(p.parse("يَهُودَ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yahuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يَهُو 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yahu 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yah 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle ranges (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (hau)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
	});
});
describe("Parser helper should handle chapters (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (hau)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
	});
});
describe("Parser helper should handle book ranges (hau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (hau)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yah - 3 Yohanna").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yah – 3 Yohanna").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yah — 3 Yohanna").osis()).toEqual("1John.1-3John.1");
	});
});

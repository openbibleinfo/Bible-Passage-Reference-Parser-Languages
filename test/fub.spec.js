"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/fub.js";

describe("Localized book Gen (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (fub)", () => {
		expect(p.parse("Laataanooji 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("لَاتَانٛوجِ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("لَاتْ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Laat 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (fub)", () => {
		expect(p.parse("غُرْتَاکِ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Gurtaaki 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("غُرْتْ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Gurt 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (fub)", () => {
		expect(p.parse("Beel e Kuuŋga 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bk 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (fub)", () => {
		expect(p.parse("ڢَرِلَّاجِ لٜوِعٜنْ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Farillaaji Lewi'en 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ڢْلْ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Fl 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (fub)", () => {
		expect(p.parse("لِمْلٜ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Limle 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("لِمْ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Lim 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (fub)", () => {
		expect(p.parse("Sirasid 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (fub)", () => {
		expect(p.parse("Hikma 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Hik 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (fub)", () => {
		expect(p.parse("غِمٜ بٛيْکِ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Gimi Boyki 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("غْبْ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Gb 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (fub)", () => {
		expect(p.parse("Bataakewol Yeremiya 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Bye 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (fub)", () => {
		expect(p.parse("Wahayu Yuhanna 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("وَحَيُ يُحَنَّ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("وْيْ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Wy 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (fub)", () => {
		expect(p.parse("تٛوکْتَاکِ تَوْرٜىٰتَ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Tooktaaki Tawreeta 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Tt 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("تّ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (fub)", () => {
		expect(p.parse("Yosuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("يٛسُوَ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("يٛسْ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (fub)", () => {
		expect(p.parse("عَلْکَالِعٜنْ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Alkaali'en 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("عَلْکْ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Alk 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (fub)", () => {
		expect(p.parse("رُوتْ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (fub)", () => {
		expect(p.parse("عٜسَايَ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Esaaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("عٜسَ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Esa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (fub)", () => {
		expect(p.parse("1 Samuyila 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 سَمُيِلَ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 سَمْ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuyila 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. سَمُيِلَ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. سَمْ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (fub)", () => {
		expect(p.parse("2 Samuyila 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 سَمُيِلَ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 سَمْ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuyila 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. سَمُيِلَ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. سَمْ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (fub)", () => {
		expect(p.parse("1 لَامِيبٜٔ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Laamiiɓe 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 لَامْ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Laam 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. لَامِيبٜٔ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Laamiiɓe 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. لَامْ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Laam 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (fub)", () => {
		expect(p.parse("2 لَامِيبٜٔ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Laamiiɓe 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 لَامْ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Laam 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. لَامِيبٜٔ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Laamiiɓe 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. لَامْ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Laam 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (fub)", () => {
		expect(p.parse("1 Habaruuji Nyalaaɗe 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 حَبَرُوجِ ࢩَلَاطٜ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 حْنْ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Hn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Habaruuji Nyalaaɗe 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. حَبَرُوجِ ࢩَلَاطٜ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. حْنْ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Hn 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (fub)", () => {
		expect(p.parse("2 Habaruuji Nyalaaɗe 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 حَبَرُوجِ ࢩَلَاطٜ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 حْنْ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Hn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Habaruuji Nyalaaɗe 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. حَبَرُوجِ ࢩَلَاطٜ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. حْنْ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Hn 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (fub)", () => {
		expect(p.parse("عٜسِرَ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esira 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("عٜسِ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esi 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (fub)", () => {
		expect(p.parse("Nehemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("نٜحٜمِيَ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("نٜحْ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (fub)", () => {
		expect(p.parse("أَيُوبَ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ayuba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("عَيْ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ay 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (fub)", () => {
		expect(p.parse("Jabuura 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("جَبُورَ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("جَبْ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Jab 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (fub)", () => {
		expect(p.parse("بَلْندِ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Balndi 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("بَلْ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Bal 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (fub)", () => {
		expect(p.parse("Gaazoowo 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("غَازٛووٛ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("غَازْ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Gaaz 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (fub)", () => {
		expect(p.parse("يِمْرٜ سُلَيْمَـٰنُ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Yimre Suleymaanu 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("يْسْ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ys 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (fub)", () => {
		expect(p.parse("Yeremiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("يٜرٜمِيَ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("يٜرْ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (fub)", () => {
		expect(p.parse("عٜزٜکِيٜلْ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekiyel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("عٜزْ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Hos (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (fub)", () => {
		expect(p.parse("Hose'a 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("حٛسٜعَ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("حٛسْ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (fub)", () => {
		expect(p.parse("يٛوعٜلْ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yo'el 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("يْلْ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (fub)", () => {
		expect(p.parse("عَمٛسْ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("عَمْ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (fub)", () => {
		expect(p.parse("عٛبَدِيَ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("عٛبَ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (fub)", () => {
		expect(p.parse("يُونُسَ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yonas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("يٛنْ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (fub)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("مِکَ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("مِکْ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (fub)", () => {
		expect(p.parse("نَحُمْ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("نَحْ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (fub)", () => {
		expect(p.parse("حَبَکُکْ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("حَبْ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (fub)", () => {
		expect(p.parse("Sefaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("سٜڢَنِيَ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("سٜڢْ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (fub)", () => {
		expect(p.parse("حَغَّيْ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haggay 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("حَغْ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (fub)", () => {
		expect(p.parse("Zekariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("جٜکَرِيَ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("زٜکْ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (fub)", () => {
		expect(p.parse("Malakiya 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("مَلَکِيَ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("مَلْ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (fub)", () => {
		expect(p.parse("Matta 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مَتَّ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مَتْ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (fub)", () => {
		expect(p.parse("مَرْکُسْ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مْکْ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (fub)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لُکَ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لْکْ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (fub)", () => {
		expect(p.parse("1 Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 يُحَنَّ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 يُحْ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yuh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. يُحَنَّ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. يُحْ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (fub)", () => {
		expect(p.parse("2 Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 يُحَنَّ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 يُحْ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yuh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. يُحَنَّ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. يُحْ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (fub)", () => {
		expect(p.parse("3 Yuhanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 يُحَنَّ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 يُحْ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yuh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yuhanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. يُحَنَّ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. يُحْ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yuh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (fub)", () => {
		expect(p.parse("Yuhanna 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يُحَنَّ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يُحْ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (fub)", () => {
		expect(p.parse("کُوطٜ نٜلَابٜٔ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kuuɗe Nelaaɓe 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("کْنْ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kn 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (fub)", () => {
		expect(p.parse("رٛمَعٜنْ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roma'en 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رْمْ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (fub)", () => {
		expect(p.parse("1 کٛرِنْتُعٜنْ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintu'en 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 کٛرْ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. کٛرِنْتُعٜنْ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintu'en 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. کٛرْ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (fub)", () => {
		expect(p.parse("2 کٛرِنْتُعٜنْ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintu'en 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 کٛرْ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. کٛرِنْتُعٜنْ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintu'en 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. کٛرْ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (fub)", () => {
		expect(p.parse("کٛلٛسِّعٜنْ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolossi'en 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("کٛلْ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (fub)", () => {
		expect(p.parse("غَلَاتِيَعٜنْ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galaatiya'en 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("غَلْ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (fub)", () => {
		expect(p.parse("عٜڢٜسُعٜنْ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesu'en 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("عٜڢْ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (fub)", () => {
		expect(p.parse("ڢِلِݠِّعٜنْ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filippi'en 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ڢِلْ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (fub)", () => {
		expect(p.parse("1 Tessaloniiki'en 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 تٜسَّلٛنِکِعٜنْ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 تٜسّ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessaloniiki'en 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تٜسَّلٛنِکِعٜنْ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تٜسّ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (fub)", () => {
		expect(p.parse("2 Tessaloniiki'en 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 تٜسَّلٛنِکِعٜنْ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 تٜسّ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessaloniiki'en 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تٜسَّلٛنِکِعٜنْ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تٜسّ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (fub)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 تِمٛتٜ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 تِمْ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تِمٛتٜ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تِمْ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (fub)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 تِمٛتٜ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 تِمْ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تِمٛتٜ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تِمْ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (fub)", () => {
		expect(p.parse("تِتُسْ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تِتْ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (fub)", () => {
		expect(p.parse("ڢِلٜمٛنْ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ڢْلْمْ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (fub)", () => {
		expect(p.parse("عِبْرَنِنغْکٜعٜنْ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibraniŋke'en 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عِبْرْ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (fub)", () => {
		expect(p.parse("Yaakuba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يَاکُبَ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يَاکْ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (fub)", () => {
		expect(p.parse("1 ݠِيٜرْ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Piyer 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ݠِ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ݠِيٜرْ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piyer 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ݠِ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (fub)", () => {
		expect(p.parse("2 ݠِيٜرْ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Piyer 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ݠِ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ݠِيٜرْ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piyer 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ݠِ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (fub)", () => {
		expect(p.parse("Yahuuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يَحُودَ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يَحْ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yah 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (fub)", () => {
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (fub)", () => {
		expect(p.parse("Yudit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (fub)", () => {
		expect(p.parse("Baruk 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (fub)", () => {
		expect(p.parse("Suzan 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Suz 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (fub)", () => {
		expect(p.parse("1 Makabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Ma 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Ma 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (fub)", () => {
		expect(p.parse("2 Makabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Ma 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Ma 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Dan (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (fub)", () => {
		expect(p.parse("دَنِيٜلْ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daniyel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("دَنْ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Esth (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (fub)", () => {
		expect(p.parse("عَسْتَ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("عَسْتْ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Asta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ast 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Preferred book names (fub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (fub)", () => {
		expect(p.parse("Daniyel yunaniŋkeere 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("DYU 1:1").osis()).toEqual("PrAzar.1.1");
	});
});

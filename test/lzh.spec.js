"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lzh.js";

describe("Localized book Gen (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (lzh)", () => {
		expect(p.parse("創世歷代傳或稱厄尼西書 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("摩西一書創世記 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("神造萬物書 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("創世記 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("創 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (lzh)", () => {
		expect(p.parse("以所多書即是出去以至比多傳 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("摩西二書出伊及記 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("出以至百多書 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("出埃及記 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("出 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (lzh)", () => {
		expect(p.parse("摩西三書利未記 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("利未氐古書傳 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("論利未輩之書 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("利未記 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("利 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (lzh)", () => {
		expect(p.parse("數以色耳勒子輩之書 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("摩西四書民數記 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("算民數之書傳 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("民數紀畧 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("民數記 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("民 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (lzh)", () => {
		expect(p.parse("先知者耶利未亞之哀詞 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("耶利米亞悲歎書傳 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("耶利米哀歌 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("哀 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lzh)", () => {
		expect(p.parse("使徒約翰得啟示錄 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("使徒若翰顯示之書 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("使徒約翰默示錄 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("聖若翰現示之書 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("啟示錄 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("默示錄 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("啟錄 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("啟 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (lzh)", () => {
		expect(p.parse("摩西之第五書名曰吐嘚咡挼咪啞譯言復講法律傳 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("摩西五書申命記 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("摩西復示律書 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("復傳律例書 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("申命記 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("申 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (lzh)", () => {
		expect(p.parse("舊約全書第六卷約書亞記 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("若書亞之傳 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("若書亞之書 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("約書亞記 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("約書亞 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("書 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (lzh)", () => {
		expect(p.parse("士師記第七卷 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("列審司之書 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("審司書傳 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("士師記 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("士師 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("士 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (lzh)", () => {
		expect(p.parse("路得氏傳書 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("路得之書 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("路得記 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("路得 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("得 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (lzh)", () => {
		expect(p.parse("先知以賽亞之書 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("以賽亞書 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("以賽亞 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("賽 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lzh)", () => {
		expect(p.parse("撒母以勒書上卷或曰王輩書 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("撒母以勒之第一書 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("撒母耳記上 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("撒母耳前 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("撒上 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lzh)", () => {
		expect(p.parse("撒母以勒之第二書 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("撒母以勒書下卷 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("撒母耳記下 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("撒母耳後 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("撒下 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lzh)", () => {
		expect(p.parse("王輩之第一書 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("列王傳上卷 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("列王紀畧上 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("列王紀上 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("列王上 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("王上 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lzh)", () => {
		expect(p.parse("王輩之第二書 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("列王傳下卷 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("列王紀畧下 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("列王紀下 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("列王下 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("王下 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (lzh)", () => {
		expect(p.parse("列史官之第一書 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("歷代史紀書上卷 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("歷代志畧上 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("歷代志上 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("歷代上 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("代上 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (lzh)", () => {
		expect(p.parse("列史官之第二書 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("歷代史紀下卷 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("歷代志畧下 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("歷代志下 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("歷代下 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("代下 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (lzh)", () => {
		expect(p.parse("以士拉之書 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("以士喇紀 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("以斯拉記 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("依沙耳亞 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("以斯拉 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("拉 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (lzh)", () => {
		expect(p.parse("尼希米亞之書 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("尼希米紀 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("尼希米記 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("尼希米 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("尼 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (lzh)", () => {
		expect(p.parse("以士得耳之書 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("依士得耳之書 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("以士帖紀 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("以斯帖記 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("以斯帖 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("斯 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (lzh)", () => {
		expect(p.parse("若百之書傳 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("約伯記 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("約百紀 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("若百書 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("約百 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("伯 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (lzh)", () => {
		expect(p.parse("大五得詩 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("神詩書傳 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("詩篇 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("詩 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (lzh)", () => {
		expect(p.parse("所羅們之俗語 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("諺語傳書 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("箴言 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("箴 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (lzh)", () => {
		expect(p.parse("宣道傳或名倚基理西亞書 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("宣道者書 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("傳道書 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("傳道 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("傳 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (lzh)", () => {
		expect(p.parse("所羅門歌又名雅歌 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("所羅們之詩歌 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("所羅門之歌 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("雅歌 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("歌 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (lzh)", () => {
		expect(p.parse("達未來者耶利米亞傳書 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("預知者耶利未亞之書 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("耶利米書 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("耶利米 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("耶 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (lzh)", () => {
		expect(p.parse("預知者以西基路之書 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("先知依西其理書 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("以西結書 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("以西結 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("結 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (lzh)", () => {
		expect(p.parse("先知者但依勒之書 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("達未來者但依理書 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("但以理書 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("但以理 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("但 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (lzh)", () => {
		expect(p.parse("預知者賀西亞之書 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("何西亞之書 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("何西阿書 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("何西書 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("何西阿 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("何 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (lzh)", () => {
		expect(p.parse("先知者若以利之書 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("若以利之書 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("約珥書 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("約耳書 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("約珥 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("珥 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (lzh)", () => {
		expect(p.parse("預知者亞摩士之書 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("亞麼士書 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("亞麽士書 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("阿摩司書 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("亞摩斯 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("摩 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (lzh)", () => {
		expect(p.parse("先知者俄罷氐亞之書 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("俄巴底亞書 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("阿巴氐亞書 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("阿巴底亞 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("阿巴底書 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("俄 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (lzh)", () => {
		expect(p.parse("預知者拿若之書 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("若拿傳書 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("約拿書 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("約拿 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("拿 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (lzh)", () => {
		expect(p.parse("先知者米加之書 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("米加傳書 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("彌迦書 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("米迦書 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("彌迦 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("彌 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (lzh)", () => {
		expect(p.parse("預知者那孚模之書 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("拿戶馬傳書 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("拿翁書 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("那鴻書 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("那鴻 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("鴻 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (lzh)", () => {
		expect(p.parse("先知者夏巴革之書 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("夏巴古傳書 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("哈巴谷書 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("哈巴谷 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("哈 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (lzh)", () => {
		expect(p.parse("預知者西法尼亞之書 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("洗法尼亞傳書 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("西番雅書 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("西番雅 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("番 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (lzh)", () => {
		expect(p.parse("先知者夏佳之書 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("夏哀傳書 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("哈基書 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("哈該書 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("哈該 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("該 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (lzh)", () => {
		expect(p.parse("預知者西加利亞之書 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("撒加利亞書 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("撒迦利亞書 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("洗革利亞傳 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("撒迦利亞 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("亞 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (lzh)", () => {
		expect(p.parse("達未來者馬拉其傳書 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("先知者馬拉記之書 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("瑪拉基書 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("馬拉基書 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("瑪拉基 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("瑪 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lzh)", () => {
		expect(p.parse("瑪竇攸編耶穌基督聖福音 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("聖馬竇傳福音書卷一 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("使徒馬竇傳福音書 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("福音一依馬太 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("馬太傳福音書 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("聖馬太福音 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("馬太福音傳 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("馬太福音書 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("馬太福音 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("太 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lzh)", () => {
		expect(p.parse("麻耳谷攸編耶穌基督聖福音 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("聖馬耳可傳福音書卷二 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("馬耳可傳福音書 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("福音二依馬可 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("馬可傳福音書 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("聖馬可福音 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("馬可福音傳 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("馬可福音 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("可 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lzh)", () => {
		expect(p.parse("聖路加傳福音書卷三 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("聖路加傳福音之書 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("聖路加攸編之福音 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("福音三依路加 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("路加傳福音書 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("聖路加福音 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("路加福音傳 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("路加福音 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("路加 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("路 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lzh)", () => {
		expect(p.parse("使徒若翰之第一公書 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("聖若翰之第一公書 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("使徒約翰第一書 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("約翰達眾第一書 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("約翰第一書 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("約翰一書 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("約壹 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lzh)", () => {
		expect(p.parse("使徒若翰之第二書 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("聖若翰之第二公書 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("使徒約翰第二書 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("約翰達眾第二書 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("約翰第二書 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("約翰二書 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("約贰 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lzh)", () => {
		expect(p.parse("使徒若翰之第三書 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("聖若翰之第三公書 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("使徒約翰第三書 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("約翰達眾第三書 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("約翰第三書 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("約翰三書 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("約叁 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lzh)", () => {
		expect(p.parse("聖若翰傳福音之書卷四 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("若翰攸編耶穌基督福音 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("若翰傳福音之書 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("福音四依約翰 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("約翰傳福音書 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("約翰福音傳 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("聖約翰福音 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("約翰福音 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("約 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lzh)", () => {
		expect(p.parse("使徒行傳卷五 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("使徒行傳 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("使徒行 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("徒 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lzh)", () => {
		expect(p.parse("聖保羅使徒與羅馬輩書卷六 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("福保祿使徒與羅瑪軰書 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("使徒保羅與羅馬輩書 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("使徒保羅達羅馬人書 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("達羅馬人書 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("羅馬書 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("羅 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lzh)", () => {
		expect(p.parse("福保祿使徒與戈林多軰第一書 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("使徒保羅達哥林多人前書 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("使徒保羅達歌林多人前書 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("聖保羅與可林多輩第一書 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("使徒保羅與可林多輩書 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("達哥林多人前書 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("哥林多前書 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("林前 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lzh)", () => {
		expect(p.parse("福保祿使徒與戈林多軰第二書 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("使徒保羅與可林多輩第二書 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("使徒保羅達哥林多人後書 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("使徒保羅達歌林多人後書 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("聖保羅與可林多輩第二書 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("達哥林多人後書 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("哥林多後書 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("林後 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lzh)", () => {
		expect(p.parse("福保祿使徒與戈洛所軰書 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("聖保羅使徒與可羅所輩書 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("使徒保羅與可羅所輩書 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("使徒保羅達哥羅西人書 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("使徒保羅達歌羅西人書 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("達哥羅西人書 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("歌羅西書 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("西 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lzh)", () => {
		expect(p.parse("聖保羅與厄拉氐亞輩書卷七 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("使徒保羅與厄拉氐亞輩書 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("使徒保羅達加拉太人書 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("使徒保羅達迦拉太人書 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("福保祿與雅辣逹軰書 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("保羅達加拉太人書 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("保羅達加拉太書 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("達加拉太人書 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("加拉太書 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("加 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lzh)", () => {
		expect(p.parse("聖保羅使徒與以弗所輩書 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("使徒保羅與以弗所輩書 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("使徒保羅達以弗所人書 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("使徙保羅達以弗所人書 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("福保祿與厄弗所軰書 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("保羅達以弗所人書 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("達以弗所人書 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("以弗所書 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("弗 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lzh)", () => {
		expect(p.parse("福保祿與［非邑］里比軰書 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("聖保羅使徒與腓利比輩書 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("使徒保羅與腓利比輩書 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("使徒保羅達腓力此人書 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("使徒保羅達腓力比人書 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("使徒保羅達腓立比人書 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("達腓立比人書 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("腓立比書 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("腓 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lzh)", () => {
		expect(p.parse("使徒保羅達帖撒羅尼迦人前書 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("使徒保羅達提撒羅尼迦人前書 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("聖保羅使徒與弟撒羅尼亞輩書 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("使徒保羅與弟撒羅尼亞輩書 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("使徒保羅達帖撒羅尼加前書 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("福保祿與特撒羅軰第一書 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("達帖撒羅尼迦人前書 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("帖撒羅尼迦前書 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("帖前 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lzh)", () => {
		expect(p.parse("聖保羅使徒與弟撒羅尼亞輩第二書 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("使徒保羅與弟羅撒尼亞輩第二書 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("使徒保羅達帖撒羅尼迦人後書 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("使徒保羅達提撒羅尼迦人後書 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("使徒保羅達帖撒羅尼加後書 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("福保祿與特撒羅軰第二書 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("達帖撒羅尼迦人後書 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("帖撒羅尼迦後書 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("帖後 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lzh)", () => {
		expect(p.parse("福保祿使徒與氐末陡第一書 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("聖保羅使徒與弟摩氐第一書 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("使徒保羅與弟摩氐第一書 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("使徒保羅達底摩太前書 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("使徒保羅達提摩太前書 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("達提摩太前書 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("提摩太前書 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("提前 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lzh)", () => {
		expect(p.parse("福保祿使徒與氐末陡第二書 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("聖保羅使徒與弟摩氐第二書 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("使徒保羅與弟摩氐第二書 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("使徒保羅達底摩太後書 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("使徒保羅達提摩太後書 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("達提摩太後書 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("提摩太後書 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("提後 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lzh)", () => {
		expect(p.parse("福保祿使徒與的多書 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("聖保羅使徒與弟多書 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("使徒保羅與弟多書 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("使徒保羅達提多書 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("保羅達底多書 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("達提多書 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("提多書 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("多 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lzh)", () => {
		expect(p.parse("福保祿使徒與斐肋莫書 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("聖保羅使徒與腓利們書 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("使徒保羅與腓利們書 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("使徒保羅達腓利門書 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("使徒保羅達腓立門書 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("保羅達腓利門書 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("達腓利門書 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("腓利門書 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("門 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lzh)", () => {
		expect(p.parse("聖保羅使徒與希比留輩書卷八 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("使徒保羅與希百耳輩書 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("使徒保羅達希伯來人書 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("福保祿使徒與赫伯軰書 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("達希伯來人書 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("希伯來書 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("來 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lzh)", () => {
		expect(p.parse("者米士或稱牙可百之公書 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("者米士即牙可百之公書 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("使徒雅各書 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("雅佮達眾書 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("雅各書 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("雅 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lzh)", () => {
		expect(p.parse("使徒彼多羅之第一公書 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("聖彼多羅之第一公書 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("使徒彼得前書 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("彼得達眾前書 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("彼得前書 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("彼前 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lzh)", () => {
		expect(p.parse("使徒彼多羅之第二公書 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("聖彼多羅之第二公書 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("使徒彼得後書 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("彼得達眾後書 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("彼得後書 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("彼後 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lzh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lzh)", () => {
		expect(p.parse("聖如大或稱如大士之公書 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("使徒如大之公書 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("使徒猶大書 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("猶大達眾書 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("猶大書 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("猶 1:1").osis()).toEqual("Jude.1.1");
	});
});

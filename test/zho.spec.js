"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/zho.js";

describe("Localized book Gen (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (zho)", () => {
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("创世记 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("創世紀 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("創世記 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("创 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("創 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (zho)", () => {
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("出埃及記 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("出埃及记 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("出埃及 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("出谷紀 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("出 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (zho)", () => {
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (zho)", () => {
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("利未記 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("利未记 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("利末记 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("肋未紀 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("利 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (zho)", () => {
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("戶籍紀 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("民数记 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("民數記 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("民 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (zho)", () => {
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("德訓篇 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (zho)", () => {
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("智慧篇 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Rev (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (zho)", () => {
		expect(p.parse("若望默示錄 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("启示录 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("啓示錄 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("啟示錄 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("默示錄 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("启 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("啟 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (zho)", () => {
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (zho)", () => {
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("申命紀 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("申命記 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("申命记 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("申 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Judg (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (zho)", () => {
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("士师记 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("士師記 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("民長紀 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("士 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (zho)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("盧德傳 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("路得記 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("路得记 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("得 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (zho)", () => {
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (zho)", () => {
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (zho)", () => {
		expect(p.parse("以賽亚书 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("以賽亞書 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("以赛亚书 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("依撒意亞 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("賽 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("赛 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 2Sam (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (zho)", () => {
		expect(p.parse("撒慕爾紀下 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("撒母耳記下 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("撒母耳记下 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("撒下 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (zho)", () => {
		expect(p.parse("撒慕爾紀上 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("撒母耳記上 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("撒母耳记上 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("撒上 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Kgs (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (zho)", () => {
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("列王紀下 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("列王纪下 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("列王记下 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("王下 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (zho)", () => {
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("列王紀上 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("列王纪上 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("列王记上 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("王上 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Chr (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (zho)", () => {
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("历代志下 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("歷代志下 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("編年紀下 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("代下 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("歷下 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (zho)", () => {
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("历代志上 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("歷代志上 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("編年紀上 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("代上 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("歷上 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (zho)", () => {
		expect(p.parse("厄斯德拉上 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("以斯拉記 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("以斯拉记 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("拉 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (zho)", () => {
		expect(p.parse("厄斯德拉下 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("尼希米記 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("尼希米记 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("尼 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Amos (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (zho)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("阿摩司书 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("阿摩司書 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("亞毛斯 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("摩 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Job (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (zho)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("約伯傳 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("約伯記 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("约伯记 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("伯 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (zho)", () => {
		expect(p.parse("聖詠集 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("詩篇 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("诗篇 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("詩 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("诗 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (zho)", () => {
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (zho)", () => {
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("箴言 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("箴 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book SgThree (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (zho)", () => {
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Lam (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (zho)", () => {
		expect(p.parse("耶利米哀歌 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("連同哀歌 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("哀 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Song (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (zho)", () => {
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("雅歌 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("歌 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book EpJer (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (zho)", () => {
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Jer (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (zho)", () => {
		expect(p.parse("耶利米书 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("耶利米書 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("耶肋米亞 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("耶 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (zho)", () => {
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("以西結书 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("以西結書 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("以西结书 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("厄則克耳 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("結 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("结 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (zho)", () => {
		expect(p.parse("但以理书 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("但以理書 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("達尼爾 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("但 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (zho)", () => {
		expect(p.parse("何西阿书 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("何西阿書 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("歐瑟亞 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("何 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (zho)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("岳厄爾 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("約珥書 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("约珥书 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("约饵书 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("珥 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Obad (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (zho)", () => {
		expect(p.parse("俄巴底亚书 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("俄巴底亞書 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("亞北底亞 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("俄 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (zho)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("約拿書 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("约拿书 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("約納 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("拿 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (zho)", () => {
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("弥迦书 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("彌迦書 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("米該亞 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("弥 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("彌 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (zho)", () => {
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("那鴻书 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("那鴻書 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("那鸿书 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("納鴻 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("鴻 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("鸿 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (zho)", () => {
		expect(p.parse("哈巴谷书 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("哈巴谷書 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("哈巴谷 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("哈 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (zho)", () => {
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("索福尼亞 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("西番雅书 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("西番雅書 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("番 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (zho)", () => {
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("哈該书 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("哈該書 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("哈该书 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("哈蓋 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("該 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("该 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Mal (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (zho)", () => {
		expect(p.parse("玛拉基书 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("瑪拉基亞 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("瑪拉基書 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("玛拉基 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("玛 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("瑪 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Gal (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (zho)", () => {
		expect(p.parse("加拉太书 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("加拉太書 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("戛拉提亞 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("迦拉達書 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("加 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Zech (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (zho)", () => {
		expect(p.parse("撒加利亞書 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("撒迦利亚书 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("撒迦利亞書 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("匝加利亞 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("撒迦利亞 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("亚 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("亞 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Matt (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (zho)", () => {
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("瑪竇福音 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("馬太福音 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("马太福音 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("瑪特斐 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("太 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (zho)", () => {
		expect(p.parse("馬爾谷福音 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("馬可福音 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("马可福音 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("瑪爾克 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("可 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (zho)", () => {
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("路加福音 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("魯喀 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("路 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (zho)", () => {
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("伊望第一 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("約翰一書 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("約翰壹書 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("约翰一书 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("约翰壹书 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("若望一書 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("約壹 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("约壹 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (zho)", () => {
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("伊望第二 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("約翰二書 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("約翰貳書 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("约翰二书 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("约翰贰书 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("若望二書 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("約貳 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("約贰 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("约贰 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (zho)", () => {
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("伊望第三 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("約翰三書 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("約翰參書 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("约翰三书 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("约翰叁书 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("若望三書 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("約三 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("約叁 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("约三 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("约叁 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (zho)", () => {
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("約翰福音 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("约翰福音 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("若望福音 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("伊望 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("約 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("约 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Rom (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (zho)", () => {
		expect(p.parse("羅爾瑪書 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("罗马书 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("羅馬書 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("罗 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("羅 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 2Cor (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (zho)", () => {
		expect(p.parse("哥林多后书 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("哥林多後書 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("格林多後書 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("歌林多後書 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("适凌爾福後 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("林后 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("林後 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (zho)", () => {
		expect(p.parse("哥林多前书 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("哥林多前書 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("格林多前書 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("歌林多前書 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("适凌爾福前 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("林前 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Eph (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (zho)", () => {
		expect(p.parse("以弗所书 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("以弗所書 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("厄弗所書 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("耶斐斯 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("弗 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (zho)", () => {
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("斐理伯書 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("腓立比书 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("腓立比書 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("肥利批 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("腓 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (zho)", () => {
		expect(p.parse("哥羅森書 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("歌罗西书 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("歌羅西書 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("适羅斯 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("西 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book GkEsth (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (zho)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (zho)", () => {
		expect(p.parse("艾斯德爾傳 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("以斯帖記 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("以斯帖记 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("斯 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Acts (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (zho)", () => {
		expect(p.parse("宗徒大事錄 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("使徒行传 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("使徒行傳 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("宗徒行實 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("徒 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Tob (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (zho)", () => {
		expect(p.parse("多俾亞傳 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (zho)", () => {
		expect(p.parse("友弟德傳 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Eccl (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (zho)", () => {
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("传道书 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("傳道書 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("訓道篇 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("传 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("傳 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book 2Thess (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (zho)", () => {
		expect(p.parse("帖撒罗尼迦后书 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("帖撒羅尼迦後書 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("得撒洛尼後書 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("莎倫後 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("帖后 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("帖後 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (zho)", () => {
		expect(p.parse("帖撒罗尼迦前书 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("帖撒羅尼迦前書 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("得撒洛尼前書 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("莎倫前 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("帖前 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Tim (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (zho)", () => {
		expect(p.parse("弟茂德後書 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("提摩太后书 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("提摩太後書 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("提摩斐後 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("提后 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("提後 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (zho)", () => {
		expect(p.parse("弟茂德前書 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("提摩太前书 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("提摩太前書 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("提摩斐前 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("提前 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (zho)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("弟鐸書 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("提多书 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("提多書 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("提特書 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("多 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (zho)", () => {
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("腓利門書 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("腓利门书 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("費肋孟書 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("肥利孟 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("門 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("门 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (zho)", () => {
		expect(p.parse("希伯來书 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("希伯來書 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("希伯来书 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("耶烏雷爾 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("來 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("来 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (zho)", () => {
		expect(p.parse("雅各伯書 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("亞适烏 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("雅各书 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("雅各書 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("雅 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 2Pet (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (zho)", () => {
		expect(p.parse("伯多祿後書 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("彼得后书 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("彼得後書 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("撇特爾後 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("彼后 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("彼後 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (zho)", () => {
		expect(p.parse("伯多祿前書 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("彼得前书 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("彼得前書 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("撇特爾前 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("彼前 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (zho)", () => {
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("伊屋達 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("犹大书 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("猶大書 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("猶達書 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("犹 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("猶 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Bar (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (zho)", () => {
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("巴路克 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (zho)", () => {
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 2Macc (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (zho)", () => {
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("瑪加伯下 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (zho)", () => {
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (zho)", () => {
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (zho)", () => {
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("瑪加伯上 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book Josh (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (zho)", () => {
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("約書亞記 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("约书亚记 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("若蘇厄書 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("书 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("書 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Parser helper should handle ranges (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (zho)", () => {
		expect(p.parse("Titus 1:1 ～ 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1～2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 ～ 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
		expect(p.parse("Titus 1:1 ~ 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1~2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 ~ 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (zho)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 chapter 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (zho)", () => {
		expect(p.parse("Exod 1:1 verse 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm verse 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (zho)", () => {
		expect(p.parse("Exod 1:1 ； 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 ； 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
		expect(p.parse("Exod 1:1 ， 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 ， 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
		expect(p.parse("Exod 1:1 參 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 參 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
		expect(p.parse("Exod 1:1 、 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 、 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (zho)", () => {
		expect(p.parse("Ps 3 篇, 4:2, 5:篇").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'ff' (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'ff' (zho)", () => {
		expect(p.parse("Rev 3ff, 4:2ff").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
	});
});
describe("Parser helper should handle translations (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (zho)", () => {
		expect(p.parse("Lev 1 (CUV)").osis_and_translations()).toEqual([["Lev.1","CUV"]]);
		expect(p.parse("Lev 1 (CNV)").osis_and_translations()).toEqual([["Lev.1","CNV"]]);
		expect(p.parse("Lev 1 (CUVMP)").osis_and_translations()).toEqual([["Lev.1","CUVMP"]]);
	});
});
describe("Parser helper should handle book ranges (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (zho)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1John ～ 3John").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1John ~ 3John").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (zho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (zho)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/jpn.js";

describe("Localized book Gen (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (jpn)", () => {
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("創世記 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("創世 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("創 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (jpn)", () => {
		expect(p.parse("出エジプト記 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("出エジプト 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("出 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (jpn)", () => {
		expect(p.parse("ベルと竜 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("ベルと龍 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (jpn)", () => {
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("レビ記 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("レビ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (jpn)", () => {
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("民数記 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("民数 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("民 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (jpn)", () => {
		expect(p.parse("シラフの子イイススの知恵書 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("シラ書（集会の書） 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("ベン・シラの智慧 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("ベン・シラの知恵 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("集会の書 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("シラ書 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("シラ 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (jpn)", () => {
		expect(p.parse("ソロモンの知恵書 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("ソロモンの智慧 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("知恵の書 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("知恵 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("知 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (jpn)", () => {
		expect(p.parse("エレミヤの哀歌 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("哀歌 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("哀 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (jpn)", () => {
		expect(p.parse("イエレミヤの達書 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("エレミヤの手紙 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("エレミヤの書翰 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("エレミヤ・手 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (jpn)", () => {
		expect(p.parse("ヨハネの默示録 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ヨハネの黙示録 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("黙示録 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (jpn)", () => {
		expect(p.parse("マナセのいのり 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("マナセの祈り 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("マナセの祈禱 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (jpn)", () => {
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("申命記 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("申命 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("申 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (jpn)", () => {
		expect(p.parse("ヨシュア記 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ヨシュア 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (jpn)", () => {
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("士師記 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("士師 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("士 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (jpn)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ルツ記 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ルツ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (jpn)", () => {
		expect(p.parse("エズドラ第一巻 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("エズラ第一書 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (jpn)", () => {
		expect(p.parse("エズドラ第二巻 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("エズラ第二書 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (jpn)", () => {
		expect(p.parse("イザヤ書 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("イザヤ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 2Sam (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (jpn)", () => {
		expect(p.parse("サムエル 2 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("サムエル後書 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("サムエル記Ⅱ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("サムエル記下 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("列王記第二巻 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ⅱサムエル 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("サムエル下 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (jpn)", () => {
		expect(p.parse("サムエル 1 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("サムエル前書 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("サムエル記Ⅰ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("サムエル記上 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("列王記第一巻 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ⅰサムエル 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("サムエル上 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Kgs (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (jpn)", () => {
		expect(p.parse("列王記第四巻 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("列王紀略下 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("列王 2 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("列王紀下 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("列王記Ⅱ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("列王記下 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ⅱ列王 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("列下 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (jpn)", () => {
		expect(p.parse("列王記第三巻 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("列王紀略上 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("列王 1 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("列王紀上 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("列王記Ⅰ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("列王記上 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ⅰ列王 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("列上 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Chr (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (jpn)", () => {
		expect(p.parse("歴代志略下 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("歴代誌 2 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("歴代史下 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("歴代志下 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("歴代誌Ⅱ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("歴代誌下 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ⅱ歴代 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("歴下 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (jpn)", () => {
		expect(p.parse("歴代志略上 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("歴代誌 1 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("歴代史上 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("歴代志上 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("歴代誌Ⅰ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("歴代誌上 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ⅰ歴代 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("歴上 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (jpn)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("エズラ書 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("エズラ記 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("エズラ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (jpn)", () => {
		expect(p.parse("ネヘミヤ 記 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ネヘミヤ記 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ネヘミヤ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (jpn)", () => {
		expect(p.parse("エステル書殘篇 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("エステル記補遺 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (jpn)", () => {
		expect(p.parse("エステル 記 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("エステル書 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("エステル記 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("エステル 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (jpn)", () => {
		expect(p.parse("ヨブ 記 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ヨブ記 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ヨブ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (jpn)", () => {
		expect(p.parse("詩篇/聖詠 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("詩篇 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("詩編 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("詩 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (jpn)", () => {
		expect(p.parse("アザルヤの祈り 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (jpn)", () => {
		expect(p.parse("箴言 知恵の泉 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("格言の書 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("箴言 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("格 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (jpn)", () => {
		expect(p.parse("コヘレトのことば 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("コヘレトの言葉 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("伝道者の書 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("コヘレト 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("伝道の書 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("伝道者の 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("傳道之書 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (jpn)", () => {
		expect(p.parse("三人の若者の賛歌 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("三童兒の歌 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (jpn)", () => {
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("諸歌の歌 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("雅歌 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("雅 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (jpn)", () => {
		expect(p.parse("エレミヤ書 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ヱレミヤ記 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("エレミヤ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (jpn)", () => {
		expect(p.parse("エゼキエル書 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("エゼキエル 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (jpn)", () => {
		expect(p.parse("ダニエル書 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ダニエル 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (jpn)", () => {
		expect(p.parse("ホセアしょ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ホセア書 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ホセア 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (jpn)", () => {
		expect(p.parse("よえるしょ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ヨエル書 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ヨエル 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (jpn)", () => {
		expect(p.parse("アモスしょ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("アモス書 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("アモス 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (jpn)", () => {
		expect(p.parse("オバデヤしょ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("オバデア書 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("オバデヤ書 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("オバデヤ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("オバ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (jpn)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ヨナしょ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ヨナ書 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ヨナ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (jpn)", () => {
		expect(p.parse("ミカしょ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ミカ書 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ミカ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (jpn)", () => {
		expect(p.parse("ナホムしょ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ナホム書 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ナホム 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (jpn)", () => {
		expect(p.parse("ハバククしょ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ハバクク書 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ハバクク 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (jpn)", () => {
		expect(p.parse("ゼファニヤしょ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ゼファニア書 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ゼファニヤ書 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ゼパニヤ書 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ゼファニア 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ゼパニヤ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ゼファ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (jpn)", () => {
		expect(p.parse("ハガイしょ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ハガイ書 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ハガイ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (jpn)", () => {
		expect(p.parse("ゼカリヤしょ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ゼカリヤ書 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ゼカリヤ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (jpn)", () => {
		expect(p.parse("マラキ書 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("マラキ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("マラ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (jpn)", () => {
		expect(p.parse("マタイによる福音書 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("マタイの福音書 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("マタイ傳福音書 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("マタイ福音書 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("マタイ伝 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("マタイ書 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("マタイ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (jpn)", () => {
		expect(p.parse("マルコによる福音書 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("マルコの福音書 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("マルコ傳福音書 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("マルコ福音書 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("マルコ伝 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("マルコ書 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("マルコ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (jpn)", () => {
		expect(p.parse("ルカによる福音書 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ルカの福音書 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ルカ傳福音書 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ルカ福音書 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ルカ伝 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ルカ書 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ルカ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (jpn)", () => {
		expect(p.parse("ヨハネの第一の手紙 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ヨハネの第一の書 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ヨハネの手紙Ⅰ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ヨハネの手紙一 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ⅰ ヨハネ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ヨハネ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("一ヨハネ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (jpn)", () => {
		expect(p.parse("ヨハネの第二の手紙 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ヨハネの第二の書 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ヨハネの手紙Ⅱ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ヨハネの手紙二 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ⅱ ヨハネ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ヨハネ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("二ヨハネ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (jpn)", () => {
		expect(p.parse("ヨハネの第三の手紙 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ヨハネの第三の書 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ヨハネの手紙Ⅲ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ヨハネの手紙三 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Ⅲ ヨハネ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ヨハネ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("三ヨハネ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (jpn)", () => {
		expect(p.parse("ヨハネによる福音書 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ヨハネの福音書 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ヨハネ傳福音書 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ヨハネ福音書 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ヨハネ伝 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ヨハネ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (jpn)", () => {
		expect(p.parse("使徒の活動記録 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("使徒の働き 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("使徒言行録 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("使徒行伝 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("使徒行傳 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("使徒行録 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("使徒書 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("使徒 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (jpn)", () => {
		expect(p.parse("ローマの信徒への手紙 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ローマ人への手紙 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ロマ人への書 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ローマ人へ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ローマ書 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ローマ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 2Cor (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (jpn)", () => {
		expect(p.parse("コリントの信徒への手紙二 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("コリント人への第二の手紙 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("コリント人への後の書 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("コリント人への手紙Ⅱ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("コリント人への手紙二 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ⅱ コリント人へ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("コリント 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("コリント後書 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2コリント 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (jpn)", () => {
		expect(p.parse("コリントの信徒への手紙一 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("コリント人への第一の手紙 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("コリント人への前の書 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("コリント人への手紙Ⅰ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("コリント人への手紙一 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ⅰ コリント人へ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("コリント 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("コリント前書 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1コリント 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (jpn)", () => {
		expect(p.parse("ガラテヤの信徒への手紙 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ガラテヤ人への手紙 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ガラテヤ人への書 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ガラテヤ人へ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ガラテヤ書 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ガラテヤ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (jpn)", () => {
		expect(p.parse("エフェソの信徒への手紙 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("エフェソ人への手紙 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("エペソ人への手紙 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("エペソ人への書 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("エフェソ書 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("エペソ人へ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("エフェソ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("エペソ書 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("エペソ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (jpn)", () => {
		expect(p.parse("フィリピの信徒への手紙 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("フィリピ人への手紙 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ピリピ人への手紙 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ピリピ人への書 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ピリピ人へ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("フィリピ書 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ピリピ書 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("フィリピ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ピリピ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (jpn)", () => {
		expect(p.parse("コロサイの信徒への手紙 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("コロサイ人への手紙 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("コロサイ人への書 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("コロサイ人へ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("コロサイ書 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("コロサイ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 2Thess (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (jpn)", () => {
		expect(p.parse("テサロニケの信徒への手紙二 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("テサロニケ人への第二の手紙 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("テサロニケ人への後の書 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("テサロニケ人への手紙Ⅱ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("テサロニケ人への手紙二 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ⅱ テサロニケ人へ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("テサロニケ 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("テサロニケ後書 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2テサロニケ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (jpn)", () => {
		expect(p.parse("テサロニケの信徒への手紙一 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("テサロニケ人への第一の手紙 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("テサロニケ人への前の書 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("テサロニケ人への手紙Ⅰ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("テサロニケ人への手紙一 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ⅰ テサロニケ人へ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("テサロニケ 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("テサロニケ前書 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1テサロニケ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Tim (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (jpn)", () => {
		expect(p.parse("テモテヘの第二の手紙 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("テモテへの後の書 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("テモテへの手紙Ⅱ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("テモテへの手紙二 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ⅱ テモテへ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("テモテ 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("テモテ後書 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2テモテ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("二テモテ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (jpn)", () => {
		expect(p.parse("テモテヘの第一の手紙 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("テモテへの前の書 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("テモテへの手紙Ⅰ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("テモテへの手紙一 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ⅰ テモテへ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("テモテ 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("テモテ前書 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1テモテ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("一テモテ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (jpn)", () => {
		expect(p.parse("ティトに達する書 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("テトスへのてがみ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("テトスへの手紙 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("テトスヘの手紙 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("テトスへの書 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("テトスへ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("テトス書 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("テトス 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (jpn)", () => {
		expect(p.parse("フィレモンへの手紙 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ピレモンへの手紙 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ピレモンヘの手紙 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ピレモンへの書 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("フィレモン書 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ピレモンへ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ピレモン書 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("フィレモン 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ピレモン 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (jpn)", () => {
		expect(p.parse("ヘブライ人への手紙 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("へブル人への手紙 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ヘブル人への手紙 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ヘブル人への書 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ヘブライ書 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ヘブル人へ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ヘブライ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ヘブル書 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("へブル 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (jpn)", () => {
		expect(p.parse("ヤコブからの手紙 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ヤコブの手紙 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ヤコブの書 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ヤコブ書 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ヤコブ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 2Pet (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (jpn)", () => {
		expect(p.parse("ペテロの第二の手紙 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ペトロの第二の手紙 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ペテロの後の書 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ペテロの手紙Ⅱ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ペトロの手紙二 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ⅱ ペテロ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ペトロ 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ペテロ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("二ペトロ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (jpn)", () => {
		expect(p.parse("ペテロの第一の手紙 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ペトロの第一の手紙 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ペテロの前の書 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ペテロの手紙Ⅰ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ペトロの手紙一 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ⅰ ペテロ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ペトロ 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ペテロ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("一ペトロ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (jpn)", () => {
		expect(p.parse("ユダからの手紙 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ユダの手紙 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ユダの書 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ユダ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (jpn)", () => {
		expect(p.parse("トビト書 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("トビト記 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("トビト 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (jpn)", () => {
		expect(p.parse("ユディト記 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("ユディト 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("ユデト書 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (jpn)", () => {
		expect(p.parse("ワルフの預言書 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("バルク書 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("バルク 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (jpn)", () => {
		expect(p.parse("スザンナ物語 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("スザンナ 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 2Macc (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (jpn)", () => {
		expect(p.parse("マカビー第二書 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("マカバイ 2 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("マカバイ記2 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("マカバイ記下 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("マカバイ下 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (jpn)", () => {
		expect(p.parse("マカビー第三書 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("マカバイ 3 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("マカバイ記3 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (jpn)", () => {
		expect(p.parse("マカビー第四書 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("マカバイ 4 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("マカバイ記4 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (jpn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (jpn)", () => {
		expect(p.parse("マカビー第一書 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("マカバイ 1 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("マカバイ記1 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("マカバイ記上 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("マカバイ上 1:1").osis()).toEqual("1Macc.1.1");
	});
});

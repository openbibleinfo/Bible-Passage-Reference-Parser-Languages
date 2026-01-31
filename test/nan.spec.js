"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nan.js";

describe("Localized book Gen (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (nan)", () => {
		expect(p.parse("Chhòng-sè-kì 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Chhòng 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("創世記 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("創 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (nan)", () => {
		expect(p.parse("Chhut-ai-ki̍p-kì 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Chhut 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("出埃及記 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("出 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (nan)", () => {
		expect(p.parse("Lī-bī-kì 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("利未記 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lī 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("利 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (nan)", () => {
		expect(p.parse("Bîn-sò͘-kì 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Bîn 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("民數記 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("民 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (nan)", () => {
		expect(p.parse("Ai-ko 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ai 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("哀歌 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("哀 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nan)", () => {
		expect(p.parse("Khé-sī-lio̍k 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Khé 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("啟示錄 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("啟 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (nan)", () => {
		expect(p.parse("Sin-bēng-kì 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Sin 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("申命記 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("申 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (nan)", () => {
		expect(p.parse("Iok-su-a-kì 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("約書亞記 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Su 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("書 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (nan)", () => {
		expect(p.parse("Sū-su-kì 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("士師記 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Sū 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("士 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (nan)", () => {
		expect(p.parse("Lō͘-tek-kì 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Tek 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("路得記 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("得 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (nan)", () => {
		expect(p.parse("Í-sài-a-su 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("以賽亞書 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Sài 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("賽 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nan)", () => {
		expect(p.parse("1 Sat 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sat 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nan)", () => {
		expect(p.parse("2 Sat 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sat 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nan)", () => {
		expect(p.parse("Sat-bó-ní-kì Siōng-koàn 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("撒母耳記上卷 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("撒上 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nan)", () => {
		expect(p.parse("Sat-bó-ní-kì Hā-koàn 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("撒母耳記下卷 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("撒下 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nan)", () => {
		expect(p.parse("1 Ông 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ông 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nan)", () => {
		expect(p.parse("2 Ông 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ông 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nan)", () => {
		expect(p.parse("Lia̍t-ông-kì Siōng-koàn 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("列王紀上卷 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("王上 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nan)", () => {
		expect(p.parse("Lia̍t-ông-kì Hā-koàn 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("列王紀下卷 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("王下 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nan)", () => {
		expect(p.parse("1 Tāi 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Tāi 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nan)", () => {
		expect(p.parse("2 Tāi 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tāi 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nan)", () => {
		expect(p.parse("Le̍k-tāi-chì Siōng-koàn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("歷代志上卷 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("代上 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nan)", () => {
		expect(p.parse("Le̍k-tāi-chì Hā-koàn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("歷代志下卷 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("代下 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (nan)", () => {
		expect(p.parse("Í-su-la-kì 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("以斯拉記 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("La 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("拉 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (nan)", () => {
		expect(p.parse("Nî-hi-bí-kì 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("尼希米記 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nî 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("尼 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (nan)", () => {
		expect(p.parse("Í-su-thiap-kì 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Su&3 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("以斯帖記 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("斯 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (nan)", () => {
		expect(p.parse("Iok-pek-kì 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Pek 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("約伯記 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("伯 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (nan)", () => {
		expect(p.parse("Si-phian 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Si 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("詩篇 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("詩 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (nan)", () => {
		expect(p.parse("Chim-giân 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Chim 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("箴言 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("箴 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (nan)", () => {
		expect(p.parse("Thoân-tō-su 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Thoân 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("傳道書 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("傳 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (nan)", () => {
		expect(p.parse("Ngá-ko 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ko 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("雅歌 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("歌 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (nan)", () => {
		expect(p.parse("Iâ-lī-bí-su 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("耶利米書 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Iâ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("耶 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (nan)", () => {
		expect(p.parse("Í-se-kiat-su 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Kiat 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("以西結書 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("結 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (nan)", () => {
		expect(p.parse("Tān-í-lí-su 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("但以理書 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Tān 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("但 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (nan)", () => {
		expect(p.parse("Hô-se-a-su 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("何西阿書 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hô 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("何 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (nan)", () => {
		expect(p.parse("Iok-ní-su 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("約珥書 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ní 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("珥 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (nan)", () => {
		expect(p.parse("A-mô͘-sū-su 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("阿摩司書 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Mô͘ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("摩 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (nan)", () => {
		expect(p.parse("Gô-pa-tí-a-su 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("俄巴底亞書 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Gô 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("俄 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (nan)", () => {
		expect(p.parse("Iok-ná-su 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("約拿書 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ná 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("拿 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (nan)", () => {
		expect(p.parse("Bí-ka-su 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("彌迦書 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Bí 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("彌 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (nan)", () => {
		expect(p.parse("Ná-hông-su 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Hông 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("那鴻書 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("鴻 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (nan)", () => {
		expect(p.parse("Hap-pa-kok-su 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("哈巴谷書 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hap 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("哈 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (nan)", () => {
		expect(p.parse("Se-hoan-ngá-su 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Hoan 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("西番雅書 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("番 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (nan)", () => {
		expect(p.parse("Hap-kai-su 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Kai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("哈該書 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("該 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (nan)", () => {
		expect(p.parse("Sat-ka-lī-a-su 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("撒迦利亞書 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("A 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("亞 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (nan)", () => {
		expect(p.parse("Má-la-ki-su 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("瑪拉基書 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Má 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("瑪 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nan)", () => {
		expect(p.parse("Má-thài Hok-im 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Thài 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("馬太福音 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("太 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nan)", () => {
		expect(p.parse("Má-khó Hok-im 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("馬可福音 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Khó 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("可 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nan)", () => {
		expect(p.parse("Lō͘-ka Hok-im 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("路加福音 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lō͘ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("路 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nan)", () => {
		expect(p.parse("Iok-hān It-su 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("約翰一書 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("約壹 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nan)", () => {
		expect(p.parse("Iok-hān Jī-su 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("約翰二書 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("約貳 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nan)", () => {
		expect(p.parse("Iok-hān Sam-su 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Iok 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("約翰三書 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("約參 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nan)", () => {
		expect(p.parse("1 Iok 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Iok 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nan)", () => {
		expect(p.parse("2 Iok 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Iok 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nan)", () => {
		expect(p.parse("Iok-hān Hok-im 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("約翰福音 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Iok 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("約 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nan)", () => {
		expect(p.parse("Sù-tô͘ Hēng-toān 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("使徒行傳 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tô͘ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("徒 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nan)", () => {
		expect(p.parse("Lô-má-su 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("羅馬書 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lô 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("羅 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nan)", () => {
		expect(p.parse("1 Lîm 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Lîm 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nan)", () => {
		expect(p.parse("2 Lîm 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Lîm 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nan)", () => {
		expect(p.parse("Ko-lîm-to Chiân-su 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("哥林多前書 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("林前 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nan)", () => {
		expect(p.parse("Ko-lîm-to Hō͘-su 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("哥林多後書 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("林後 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nan)", () => {
		expect(p.parse("Ko-lô-se-su 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("歌羅西書 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Se 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("西 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nan)", () => {
		expect(p.parse("Ka-lia̍p-thài-su 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("加拉太書 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ka 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("加 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nan)", () => {
		expect(p.parse("Í-hut-só͘-su 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("以弗所書 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Hut 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("弗 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nan)", () => {
		expect(p.parse("Hui-li̍p-pí-su 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("腓立比書 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Hui 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("腓 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nan)", () => {
		expect(p.parse("1 Thiap 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thiap 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nan)", () => {
		expect(p.parse("2 Thiap 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thiap 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nan)", () => {
		expect(p.parse("Thiap-sat-lô-nî-ka Chiân-su 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("帖撒羅尼迦前書 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("帖前 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nan)", () => {
		expect(p.parse("Thiap-sat-lô-nî-ka Hō͘-su 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("帖撒羅尼迦後書 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("帖後 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nan)", () => {
		expect(p.parse("1 Thê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Thê 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nan)", () => {
		expect(p.parse("2 Thê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Thê 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nan)", () => {
		expect(p.parse("Thê-mô͘-thài Chiân-su 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("提摩太前書 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("提前 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nan)", () => {
		expect(p.parse("Thê-mô͘-thài Hō͘-su 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("提摩太後書 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("提後 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nan)", () => {
		expect(p.parse("Thê-to-su 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("提多書 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("To 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("多 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nan)", () => {
		expect(p.parse("Hui-lī-bûn-su 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("腓利門書 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Bûn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("門 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nan)", () => {
		expect(p.parse("Hi-pek-lâi-su 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("希伯來書 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Lâi 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("來 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nan)", () => {
		expect(p.parse("Ngá-kok-su 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ngá 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("雅各書 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("雅 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nan)", () => {
		expect(p.parse("1 Pí 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pí 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nan)", () => {
		expect(p.parse("2 Pí 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pí 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nan)", () => {
		expect(p.parse("Pí-tek Chiân-su 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("彼得前書 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("彼前 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nan)", () => {
		expect(p.parse("Pí-tek Hō͘-su 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("彼得後書 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("彼後 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nan)", () => {
		expect(p.parse("Iû-tāi-su 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("猶大書 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Iû 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("猶 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (nan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (nan)", () => {
		expect(p.parse("Le̍k-tāi-chì Siōng-koàn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Tāi 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ko-lîm-to Chiân-su 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Lîm 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Iok-hān It-su 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Lia̍t-ông-kì Siōng-koàn 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ông 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pí-tek Chiân-su 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pí 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Sat-bó-ní-kì Siōng-koàn 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Thiap-sat-lô-nî-ka Chiân-su 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Thê-mô͘-thài Chiân-su 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Thê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Le̍k-tāi-chì Hā-koàn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Tāi 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ko-lîm-to Hō͘-su 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Lîm 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Iok-hān Jī-su 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Lia̍t-ông-kì Hā-koàn 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ông 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Pí-tek Hō͘-su 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pí 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Sat-bó-ní-kì Hā-koàn 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Thiap-sat-lô-nî-ka Hō͘-su 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Thê-mô͘-thài Hō͘-su 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Thê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Iok-hān Sam-su 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Sù-tô͘ Hēng-toān 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tô͘ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("A-mô͘-sū-su 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Mô͘ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ko-lô-se-su 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Tān-í-lí-su 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Tān 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Sin-bēng-kì 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Thoân-tō-su 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Thoân 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Í-hut-só͘-su 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Í-su-thiap-kì 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Chhut-ai-ki̍p-kì 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Í-se-kiat-su 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Í-su-la-kì 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ka-lia̍p-thài-su 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Chhòng-sè-kì 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Chhòng 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Hi-pek-lâi-su 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Lâi 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hô-se-a-su 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hô 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Í-sài-a-su 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Sài 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ngá-kok-su 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ngá 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Iâ-lī-bí-su 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Iâ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Iok-pek-kì 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Iok-ní-su 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ní 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Iok-hān Hok-im 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Iok-ná-su 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ná 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Iok-su-a-kì 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iû-tāi-su 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Iû 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Sū-su-kì 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Sū 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Lī-bī-kì 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lī 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lō͘-ka Hok-im 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lō͘ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Má-la-ki-su 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Má 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Má-khó Hok-im 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Khó 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Má-thài Hok-im 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Thài 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Bí-ka-su 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Bí 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Ná-hông-su 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Hông 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nî-hi-bí-kì 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nî 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Bîn-sò͘-kì 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Bîn 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Gô-pa-tí-a-su 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Gô 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Hui-li̍p-pí-su 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Hui-lī-bûn-su 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Bûn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Chim-giân 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Khé-sī-lio̍k 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Khé 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Lô-má-su 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lô 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lō͘-tek-kì 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ngá-ko 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Thê-to-su 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Sat-ka-lī-a-su 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Se-hoan-ngá-su 1:1").osis()).toEqual("Zeph.1.1");
	});
});

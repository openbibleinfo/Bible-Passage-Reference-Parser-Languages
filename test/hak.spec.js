"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hak.js";

describe("Localized book Gen (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (hak)", () => {
		expect(p.parse("Chhóng-sṳ Ki 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("創世記 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (hak)", () => {
		expect(p.parse("Chhut Âi-khi̍p Ki 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("出埃及記 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (hak)", () => {
		expect(p.parse("Li-vi Ki 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("利未記 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (hak)", () => {
		expect(p.parse("Mìn-su Ki 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("民數記 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (hak)", () => {
		expect(p.parse("Yâ-li-mí Ôi-kô 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("耶利米哀歌 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (hak)", () => {
		expect(p.parse("Khí-sṳ-liu̍k 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("啟示錄 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (hak)", () => {
		expect(p.parse("Sṳ̂n-min Ki 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("申命記 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (hak)", () => {
		expect(p.parse("Yok-sû-â Ki 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("約書亞記 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (hak)", () => {
		expect(p.parse("Sṳ-sṳ̂ Ki 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("士師記 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (hak)", () => {
		expect(p.parse("Lu-tet Ki 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("路得記 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (hak)", () => {
		expect(p.parse("Yî-soi-â Sû 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("以賽亞書 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hak)", () => {
		expect(p.parse("Sat-mû-ngí Ki-song 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("撒母耳記上 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hak)", () => {
		expect(p.parse("Sat-mû-ngí Ki-ha 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("撒母耳記下 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hak)", () => {
		expect(p.parse("Lie̍t-vòng Ki-song 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("列王紀上 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hak)", () => {
		expect(p.parse("Lie̍t-vòng Ki-ha 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("列王紀下 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hak)", () => {
		expect(p.parse("Li̍t-thoi-chṳ Song 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("歷代志上 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hak)", () => {
		expect(p.parse("Li̍t-thoi-chṳ Ha 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("歷代志下 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (hak)", () => {
		expect(p.parse("Yî-sṳ̂-lâ Ki 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("以斯拉記 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (hak)", () => {
		expect(p.parse("Nì-hî-mí Ki 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("尼希米記 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (hak)", () => {
		expect(p.parse("Yî-sṳ̂-thiap Ki 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("以斯帖記 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (hak)", () => {
		expect(p.parse("Yok-pak Ki 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("約伯記 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (hak)", () => {
		expect(p.parse("Sṳ̂-phiên 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("詩篇 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (hak)", () => {
		expect(p.parse("Chṳ̂m-ngièn 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("箴言 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (hak)", () => {
		expect(p.parse("Chhòn-tho Sû 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("傳道書 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (hak)", () => {
		expect(p.parse("Ngâ-kô 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("雅歌 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (hak)", () => {
		expect(p.parse("Yâ-li-mí Sû 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("耶利米書 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (hak)", () => {
		expect(p.parse("Yî-sî-kiet Sû 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("以西結書 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (hak)", () => {
		expect(p.parse("Tan-yî-lî Sû 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("但以理書 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (hak)", () => {
		expect(p.parse("Hò-sî-â Sû 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("何西阿書 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (hak)", () => {
		expect(p.parse("Yok-ngí Sû 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("約珥書 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (hak)", () => {
		expect(p.parse("Â-mô-sṳ̂ Sû 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("阿摩司書 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (hak)", () => {
		expect(p.parse("Ngò-pâ-tí-â Sû 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("俄巴底亞書 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (hak)", () => {
		expect(p.parse("Yok-nâ Sû 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("約拿書 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (hak)", () => {
		expect(p.parse("Mì-kâ Sû 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("彌迦書 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (hak)", () => {
		expect(p.parse("Nâ-fùng Sû 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("那鴻書 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (hak)", () => {
		expect(p.parse("Ha̍p-pâ-kuk Sû 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("哈巴谷書 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (hak)", () => {
		expect(p.parse("Sî-fân-ngâ Sû 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("西番雅書 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (hak)", () => {
		expect(p.parse("Ha̍p-kâi Sû 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("哈該書 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (hak)", () => {
		expect(p.parse("Sat-kâ-li-â Sû 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("撒迦利亞書 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (hak)", () => {
		expect(p.parse("Mâ-lâ-kî Sû 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("瑪拉基書 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (hak)", () => {
		expect(p.parse("Mâ-thai 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("馬太 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (hak)", () => {
		expect(p.parse("Mâ-khó 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("馬可 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (hak)", () => {
		expect(p.parse("Lu-kâ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("路加 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hak)", () => {
		expect(p.parse("Yok-hon Yit-sû 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("約翰一書 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hak)", () => {
		expect(p.parse("Yok-hon Ngi-sû 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("約翰二書 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hak)", () => {
		expect(p.parse("Yok-hon Sâm-sû 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("約翰三書 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hak)", () => {
		expect(p.parse("Yok-hon 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("約翰 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (hak)", () => {
		expect(p.parse("Sṳ́-thù Hàng-chhon 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("使徒 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (hak)", () => {
		expect(p.parse("Lò-mâ Sû 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("羅馬書 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hak)", () => {
		expect(p.parse("Kô-lìm-tô Chhièn-sû 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("哥林多前書 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hak)", () => {
		expect(p.parse("Kô-lìm-tô Heu-sû 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("哥林多後書 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (hak)", () => {
		expect(p.parse("Kô-lò-sî Sû 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("歌羅西書 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (hak)", () => {
		expect(p.parse("Kâ-lâ-thai Sû 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("加拉太書 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (hak)", () => {
		expect(p.parse("Yî-fut-só Sû 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("以弗所書 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (hak)", () => {
		expect(p.parse("Fî-li̍p-pí Sû 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("腓立比書 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hak)", () => {
		expect(p.parse("Thiap-sat-lò-nì-kâ Chhièn-sû 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("帖撒羅尼迦前書 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hak)", () => {
		expect(p.parse("Thiap-sat-lò-nì-kâ Heu-sû 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("帖撒羅尼迦後書 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hak)", () => {
		expect(p.parse("Thì-mô-thai Chhièn-sû 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("提摩太前書 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hak)", () => {
		expect(p.parse("Thì-mô-thai Heu-sû 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("提摩太後書 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (hak)", () => {
		expect(p.parse("Thì-tô Sû 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("提多書 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (hak)", () => {
		expect(p.parse("Fî-li-mùn Sû 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("腓利門書 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (hak)", () => {
		expect(p.parse("Hî-pak-lòi Sû 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("希伯來書 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (hak)", () => {
		expect(p.parse("Ngâ-kok Sû 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("雅各書 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hak)", () => {
		expect(p.parse("Pí-tet Chhièn-sû 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("彼得前書 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hak)", () => {
		expect(p.parse("Pí-tet Heu-sû 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("彼得後書 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (hak)", () => {
		expect(p.parse("Yù-thai Sû 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("猶大書 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (hak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (hak)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yok-hon Yit-sû - Yok-hon Sâm-sû").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yok-hon Yit-sû – Yok-hon Sâm-sû").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yok-hon Yit-sû — Yok-hon Sâm-sû").osis()).toEqual("1John.1-3John.1");
	});
});

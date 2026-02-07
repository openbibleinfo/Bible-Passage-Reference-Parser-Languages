"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ksw.js";

describe("Localized book Gen (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ksw)", () => {
		expect(p.parse("လံာ်စီၤမိၤရှ့အခီၣ်ထံးတဘ့ၣ်. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("လံာ်တၢ်ကဲထီၣ်အခီၣ်ထံး 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ကဲထီၣ်. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("၁မိၤ. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ksw)", () => {
		expect(p.parse("လံာ်စီၤမိၤရှ့ခံဘ့ၣ်တဘ့ၣ်. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("လံာ်တၢ်ဟးထီၣ်ကွံာ် 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ဟးထီၣ်. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("၂မိၤ. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ksw)", () => {
		expect(p.parse("လံာ်စီၤမိၤရှ့သၢဘ့ၣ်တဘ့ၣ်. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("လံာ်တၢ်ဘူၣ်ထီၣ်ဘါထီၣ် 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ဘူၣ်ဘါ. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("၃မိၤ. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ksw)", () => {
		expect(p.parse("လံာ်စီၤမိၤရှ့လွံၢ်ဘ့ၣ်တဘ့ၣ်. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("လံာ်တၢ်ဂံၢ် 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("တၢ်ဂံၢ်. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("၄မိၤ. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ksw)", () => {
		expect(p.parse("လံာ်သးသယုၢ်တၢ်. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("လံာ်သးသယုၢ်တၢ် 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("သး. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("သး 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ksw)", () => {
		expect(p.parse("လံာ်တၢ်လီၣ်ဖျါလၢစီၤယိၤဟၣ်. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("လံာ်လီၣ်ဖျါ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("လီၣ်. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("လီၣ် 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ksw)", () => {
		expect(p.parse("လံာ်စီၤမိၤရှ့ယဲၢ်ဘ့ၣ်တဘ့ၣ်. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("လံာ်သိၣ်လီၤသီလီၤတၢ် 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("သိၣ်သီ. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("၅မိၤ. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ksw)", () => {
		expect(p.parse("လံာ်စီၤယိၤရှူ. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("လံာ်စီၤယိၤၡူ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ရှူ. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ၡူ. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ksw)", () => {
		expect(p.parse("လံာ်ပှၤစံၣ်ညီၣ်ကွီၢ်. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("လံာ်ပှၤစံၣ်ညီၣ်ကွီၢ် 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("စံၣ်ညီၣ်. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ksw)", () => {
		expect(p.parse("လံာ်နီၢ်ရူၤသး. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("လံာ်နီၢ်ရူၤသး 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ရူၤ. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ရူၤ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ksw)", () => {
		expect(p.parse("လံာ်ယၡါယၤ. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("လံာ်ယၡါယၤ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ရှါ. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ၡါ. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ksw)", () => {
		expect(p.parse("၁ မူၤ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁. မူၤ. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ksw)", () => {
		expect(p.parse("၂ မူၤ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂. မူၤ. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ksw)", () => {
		expect(p.parse("လံာ်စီၤၡမူၤအ့လးအခီၣ်ထံးတဘ့ၣ်. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("လံာ်စီၤၡမူၤအ့လးအခီၣ်ထံးတဘ့ၣ် 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁မူၤ. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ksw)", () => {
		expect(p.parse("လံာ်စီၤၡမူၤအ့လးခံဘ့ၣ်တဘ့ၣ်. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("လံာ်စီၤၡမူၤအ့လးခံဘ့ၣ်တဘ့ၣ် 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂မူၤ. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ksw)", () => {
		expect(p.parse("လံာ်စီၤပၤအခီၣ်ထံးတဘ့ၣ်. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("လံာ်စီၤပၤအခီၣ်ထံးတဘ့ၣ် 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("၁စီၤပၤ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("၁စီၤ. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ksw)", () => {
		expect(p.parse("လံာ်စီၤပၤခံဘ့ၣ်တဘ့ၣ်. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("လံာ်စီၤပၤခံဘ့ၣ်တဘ့ၣ် 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၂စီၤပၤ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၂စီၤ. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ksw)", () => {
		expect(p.parse("လံာ်ကွဲးနီၣ်တၢ်အခီၣ်ထံးတဘ့ၣ်. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("လံာ်ကွဲးနီၣ်တၢ်အခီၣ်ထံးတဘ့ၣ် 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၁ကွဲး. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ksw)", () => {
		expect(p.parse("လံာ်ကွဲးနီၣ်တၢ်ခံဘ့ၣ်တဘ့ၣ်. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("လံာ်ကွဲးနီၣ်တၢ်ခံဘ့ၣ်တဘ့ၣ် 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂ကွဲး. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ksw)", () => {
		expect(p.parse("လံာ်စီၤဧ့စြၤ. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("လံာ်စီၤဧ့စြၤ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ဧ့. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ksw)", () => {
		expect(p.parse("လံာ်စီၤနဃ့မယၤ. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("လံာ်စီၤနဃ့မယၤ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ဃ့. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ksw)", () => {
		expect(p.parse("လံာ်နီၢ်အ့ၤစတၢ်. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("လံာ်နီၢ်အ့ၤစတၢ် 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("အ့ၤ. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("အ့ၤ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ksw)", () => {
		expect(p.parse("လံာ်စီၤယိၤဘး 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ယိၤဘး 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ဘး. 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ksw)", () => {
		expect(p.parse("စံးထီၣ်ပတြၢၤ. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("စံးထီၣ်ပတြၢၤ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("စံး. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ksw)", () => {
		expect(p.parse("လံာ်တၢ်ကူၣ်သ့အတၢ်ကတိၤ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("တၢ်ကတိၤဒိ. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ကူၣ်သ့ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ကတိၤ. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ksw)", () => {
		expect(p.parse("လံာ်ပှၤစံၣ်တဲၤတဲလီၤတၢ်. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("လံာ်ပှၤစံၣ်တဲၤတဲလီၤတၢ် 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("စံၣ်. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("စံၣ် 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ksw)", () => {
		expect(p.parse("လံာ်တၢ်သးဝံၣ်တဖၣ်အတၢ်သးဝံၣ်. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("လံာ်တၢ်သးဝံၣ်တဖၣ်အတၢ်သးဝံၣ် 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("တၢ်. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("တၢ် 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ksw)", () => {
		expect(p.parse("လံာ်ယံးရမံယၤ. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("လံာ်ယံးရမံယၤ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ယံး. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ksw)", () => {
		expect(p.parse("လံာ်ယဃ့းစက့လး 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ဝံယဃ့းစက့လး. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ဃ့း. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ksw)", () => {
		expect(p.parse("လံာ်ဒၤနံးယ့လး. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("လံာ်ဒၤနံးယ့လး 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ဒၤ. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ksw)", () => {
		expect(p.parse("လံာ်ဟိၤရှ့. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("လံာ်ဟိၤၡ့ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ဟိၤ. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ksw)", () => {
		expect(p.parse("လံာ်ယိၤအ့လး. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("လံာ်ယိၤအ့လး 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("အ့. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ksw)", () => {
		expect(p.parse("လံာ်ဧၤမိၣ်. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("လံာ်ဧၤမိၣ် 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ဧၤ. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ksw)", () => {
		expect(p.parse("လံာ်စီၤဧိၤဘါဒယၤ. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("လံာ်ဧိၤဘါဒယၤ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ဧိၤ. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ksw)", () => {
		expect(p.parse("လံာ်ယိၤနါ. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("လံာ်ယိၤနါ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("နါ. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ksw)", () => {
		expect(p.parse("လံာ်မံကၤ. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("လံာ်မံကၤ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("မံ. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ksw)", () => {
		expect(p.parse("လံာ်နၤဃူၣ်. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("လံာ်နၤဃူၣ် 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("နၤ. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("နၤ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ksw)", () => {
		expect(p.parse("လံာ်ဃဘးကူာ်. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("လံာ်ဃဘးကူာ် 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ဃဘး. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ဃဘး 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ksw)", () => {
		expect(p.parse("လံာ်စဖါနယၤ. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("လံာ်စဖါနယၤ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("စဖါ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ဖါ. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ksw)", () => {
		expect(p.parse("လံာ်ဃးကဲ. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("လံာ်ဃးကဲ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ဃး. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ဃး 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ksw)", () => {
		expect(p.parse("လံာ်စကၤရယၤ. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("လံာ်စကၤရယၤ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ကၤ. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("စကၤ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ksw)", () => {
		expect(p.parse("လံာ်မၤလကံ. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("လံာ်မၤလကံ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("မၤ. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("မၤ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ksw)", () => {
		expect(p.parse("လံာ်တၢ်သးခုကစီၣ်လၢခရံာ်အဂ့ၢ်. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("လံာ်မးသဲ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("မး. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ksw)", () => {
		expect(p.parse("လံာ်တၢ်သးခုကစီၣ်ဒ်စီၤမၢ်ကူးကွဲးဝဲအသိးန့ၣ်. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("လံာ်မၢ်ကူး 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("မၢ်. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ksw)", () => {
		expect(p.parse("တၢ်သးခုအကစီၣ်ဒ်စီၤလူၤကၣ်ကွဲးဝဲအသိးန့ၣ်. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("လံာ်လူၤကၣ် 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("လူၤ. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ksw)", () => {
		expect(p.parse("လံာ်စီၤယိၤဟၣ်ကွဲးဝဲအခီၣ်ထံးတဘ့ၣ်. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁ယိၤ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁ယိၤ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ksw)", () => {
		expect(p.parse("လံာ်စီၤယိၤဟၣ်ကွဲးဝဲခံဘ့ၣ်တဘ့ၣ်. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂ယိၤ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂ယိၤ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ksw)", () => {
		expect(p.parse("လံာ်စီၤယိၤဟၣ်ကွဲးဝဲသၢဘ့ၣ်တဘ့ၣ်. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃ ယိၤဟၣ် 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃ယိၤ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃ယိၤ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ksw)", () => {
		expect(p.parse("၁ ယိၤဟၣ် 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁. ယိၤဟၣ် 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ksw)", () => {
		expect(p.parse("၂ ယိၤဟၣ် 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂. ယိၤဟၣ် 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ksw)", () => {
		expect(p.parse("တၢ်သးခုအကစီၣ်ဒ်စီၤယိၤဟၣ်ကွဲးဝဲအသိးန့ၣ်. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("လံာ်ယိၤဟၣ် 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ယိၤ. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ksw)", () => {
		expect(p.parse("ပှၤတၢ်မၢဖိအမၤတၢ်. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("မၤတၢ်. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("မၤတၢ် 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ksw)", () => {
		expect(p.parse("လံာ်စီၤပီလူးကွဲးန့ၢ်ပှၤရိမ့ၤဖိ. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ရိမ့ၤ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ရိ. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ရိ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ksw)", () => {
		expect(p.parse("လံာ်စီၤပီလူးကွဲးန့ၢ်ပှၤကရံၣ်သူးဖိအခီၣ်ထံးတဘ့ၣ်. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ကရံၣ်သူး 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁ကရံၣ်. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ksw)", () => {
		expect(p.parse("၂ ကရံၣ်သူး 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂. ကရံၣ်သူး 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ksw)", () => {
		expect(p.parse("လံာ်စီၤပီလူးကွဲးန့ၢ်ပှၤကရံၣ်သူးဖိပှဲၤထီၣ်ခံဘ့ၣ်တဘ့ၣ်. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂ကရံၣ်. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ksw)", () => {
		expect(p.parse("လံာ်စီၤပီလူးကွဲးန့ၢ်ပှၤကလီးစဲဖိ. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ကလီးစဲ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ကလီး. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ကလီး 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ksw)", () => {
		expect(p.parse("လံာ်စီၤပီလူးကွဲးန့ၢ်ပှၤကလၤတံဖိ. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ကလၤတံ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ကလၤ. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ကလၤ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ksw)", () => {
		expect(p.parse("လံာ်စီၤပီလူးကွဲးန့ၢ်ပှၤအ့းဖ့းစူးဖိ. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("အ့းဖ့းစူး 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("အ့း. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("အ့း 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ksw)", () => {
		expect(p.parse("လံာ်စီၤပီလူးကွဲးန့ၢ်ပှၤဖံလံးပံၤဖိ. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ဖံလံးပံၤ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ဖံလံး. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ဖံလံး 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ksw)", () => {
		expect(p.parse("၁ သ့းစၤလနံ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁. သ့းစၤလနံ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ksw)", () => {
		expect(p.parse("၂ သ့းစၤလနံ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂. သ့းစၤလနံ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ksw)", () => {
		expect(p.parse("လံာ်စီၤပီလူးကွဲးန့ၢ်ပှၤသ့းစၤလနံဖိ အခီၣ်ထံးတဘ့ၣ်. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁သ့း. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁သ့း 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ksw)", () => {
		expect(p.parse("လံာ်စီၤပီလူးကွဲးန့ၢ်ပှၤသ့းစၤလနံဖိခံဘ့ၣ်တဘ့ၣ်. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂သ့း. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂သ့း 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ksw)", () => {
		expect(p.parse("၁ တံၤမသ့း 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁. တံၤမသ့း 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ksw)", () => {
		expect(p.parse("၂ တံၤမသ့း 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂. တံၤမသ့း 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ksw)", () => {
		expect(p.parse("လံာ်စီၤပီလူးကွဲးန့ၢ်စီၤတံၤမသ့းအခီၣ်ထံးတဘ့ၣ် 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁တံၤ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁တံၤ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ksw)", () => {
		expect(p.parse("လံာ်စီၤပီလူးကွဲးန့ၢ်စီၤတံၤမသ့းခံဘ့ၣ်တဘ့ၣ် 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂တံၤ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂တံၤ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ksw)", () => {
		expect(p.parse("လံာ်စီၤပီလူးကွဲးန့ၢ်စီၤတံတူး. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("တံတူး 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("တံ. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("တံ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ksw)", () => {
		expect(p.parse("လံာ်စီၤပီလူးကွဲးန့ၢ်စီၤဖံၤလ့မိၣ်. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ဖံၤလ့မိၣ် 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ဖံၤ. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ဖံၤ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ksw)", () => {
		expect(p.parse("လံာ်စီၤပီလူးကွဲးန့ၢ်ပှၤဧ့ၤဘြံၤဖိ. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ဧ့ၤဘြံၤ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ဧ့ၤ. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ဧ့ၤ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ksw)", () => {
		expect(p.parse("လံာ်စီၤယၤကိာ်ကွဲးဝဲ. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ယၤကိာ် 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ယၤ. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ယၤ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ksw)", () => {
		expect(p.parse("၁ ပ့းတရူး 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁. ပ့းတရူး 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ksw)", () => {
		expect(p.parse("၂ ပ့းတရူး 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂. ပ့းတရူး 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ksw)", () => {
		expect(p.parse("လံာ်စီၤပ့းတရူးကွဲးဝဲအခီၣ်ထံးတဘ့ၣ်. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁ပ့း. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁ပ့း 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ksw)", () => {
		expect(p.parse("လံာ်စီၤပ့းတရူးကွဲးဝဲခံဘ့ၣ်တဘ့ၣ် 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂ပ့း. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂ပ့း 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ksw)", () => {
		expect(p.parse("လံာ်စီၤယူဒၤကွဲးဝဲ. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ယူဒၤ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ယူ. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ယူ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (ksw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (ksw)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("လံာ်စီၤယိၤဟၣ်ကွဲးဝဲအခီၣ်ထံးတဘ့ၣ်. - လံာ်စီၤယိၤဟၣ်ကွဲးဝဲသၢဘ့ၣ်တဘ့ၣ်.").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("လံာ်စီၤယိၤဟၣ်ကွဲးဝဲအခီၣ်ထံးတဘ့ၣ်. – လံာ်စီၤယိၤဟၣ်ကွဲးဝဲသၢဘ့ၣ်တဘ့ၣ်.").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("လံာ်စီၤယိၤဟၣ်ကွဲးဝဲအခီၣ်ထံးတဘ့ၣ်. — လံာ်စီၤယိၤဟၣ်ကွဲးဝဲသၢဘ့ၣ်တဘ့ၣ်.").osis()).toEqual("1John.1-3John.1");
	});
});

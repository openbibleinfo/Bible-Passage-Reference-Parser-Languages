"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/pce.js";

describe("Localized book Gen (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (pce)", () => {
		expect(p.parse("ဒေါ ဂုဝ် 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ดอ โฆว 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ดฆ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("တဂ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (pce)", () => {
		expect(p.parse("เลห 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("လေး 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ลอ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (pce)", () => {
		expect(p.parse("ดา อี หลู 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("အီ လှူ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("อ หล 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("အလ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (pce)", () => {
		expect(p.parse("แปร กาฮ็อห 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ပြဲ ကာဟဝ်း 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("กฮ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ကဟ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (pce)", () => {
		expect(p.parse("က့လိုဝ် 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("กลึร 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("นก 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ကလ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (pce)", () => {
		expect(p.parse("ပပ် 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ปบ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ပပ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Josh (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (pce)", () => {
		expect(p.parse("အာယုဝ်ဆူအာ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("อาโยวซูอา 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("โยว 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ယဆအ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (pce)", () => {
		expect(p.parse("အီ ဆုင်ဖျာတ် 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("อี ซูงพยาด 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ซพ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ဆဖ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (pce)", () => {
		expect(p.parse("နာင် ရူထာ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("นาง รูทา 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("รูทา 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ရထ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (pce)", () => {
		expect(p.parse("อาอีซายัะ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("အာအီဆာယ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("อซย 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("အဆယ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (pce)", () => {
		expect(p.parse("1 အာဆာမူအေန် 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 อาซามูเอน 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ซา 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ဆာ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. အာဆာမူအေန် 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. อาซามูเอน 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ซา 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ဆာ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁ အာဆာမူအေန် 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁ อาซามูเอน 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁ ซา 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁ ဆာ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁. အာဆာမူအေန် 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁. อาซามูเอน 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁. ซา 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁. ဆာ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (pce)", () => {
		expect(p.parse("2 အာဆာမူအေန် 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 อาซามูเอน 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ซา 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ဆာ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. အာဆာမူအေန် 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. อาซามูเอน 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ซา 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ဆာ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂ အာဆာမူအေန် 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂ อาซามูเอน 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂ ซา 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂ ဆာ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂. အာဆာမူအေန် 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂. อาซามูเอน 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂. ซา 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂. ဆာ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (pce)", () => {
		expect(p.parse("1 ခုန်ဒီခမ် 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 คูนดีคัม 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ခုန် 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 คูน 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ခုန်ဒီခမ် 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. คูนดีคัม 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ခုန် 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. คูน 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("၁ ခုန်ဒီခမ် 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("၁ คูนดีคัม 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("၁ ခုန် 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("၁ คูน 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("၁. ခုန်ဒီခမ် 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("၁. คูนดีคัม 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("၁. ခုန် 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("၁. คูน 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (pce)", () => {
		expect(p.parse("2 ခုန်ဒီခမ် 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 คูนดีคัม 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ခုန် 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 คูน 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ခုန်ဒီခမ် 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. คูนดีคัม 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ခုန် 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. คูน 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၂ ခုန်ဒီခမ် 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၂ คูนดีคัม 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၂ ခုန် 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၂ คูน 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၂. ခုန်ဒီခမ် 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၂. คูนดีคัม 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၂. ခုန် 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၂. คูน 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (pce)", () => {
		expect(p.parse("1 ဘိူန် 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 บืน 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ဘိူန် 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. บืน 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၁ ဘိူန် 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၁ บืน 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၁. ဘိူန် 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၁. บืน 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (pce)", () => {
		expect(p.parse("2 ဘိူန် 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 บืน 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ဘိူန် 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. บืน 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂ ဘိူန် 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂ บืน 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂. ဘိူန် 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂. บืน 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (pce)", () => {
		expect(p.parse("อาเอซารา 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("အာအေဆာရာ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("อซร 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("အဆရ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (pce)", () => {
		expect(p.parse("อาเนฮามี 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("အာနေဟာမီ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("นฮม 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("နဟမ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (pce)", () => {
		expect(p.parse("နာင် အေဆာထာ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("นาง เอซาทา 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("อซท 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("အဆထ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (pce)", () => {
		expect(p.parse("အာယုဝ်ဘာ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("อาโยวบา 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ยบ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ယဘ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (pce)", () => {
		expect(p.parse("မှုဝ် 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("หม 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("မဝ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (pce)", () => {
		expect(p.parse("အင် 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("อง 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("အင 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (pce)", () => {
		expect(p.parse("ဟုဝ် ဒါရာ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("โฮว ดารา 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("อี ฮด 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ဟ ဒ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Deut (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (pce)", () => {
		expect(p.parse("ดารา 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ဒါရာ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ดร 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ဒရ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Song (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (pce)", () => {
		expect(p.parse("ရွက့် 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ร็อก 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ล ร 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("လရ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (pce)", () => {
		expect(p.parse("อาเยเรมี 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("အာယေရေမီ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ยรม 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ယရမ 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (pce)", () => {
		expect(p.parse("အာအေဆေခေန် 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("อาเอเซเคน 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("อซค 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("အဆခ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (pce)", () => {
		expect(p.parse("อาดาเนลัะ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("အာဒါနေလ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ดนล 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ဒနလ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (pce)", () => {
		expect(p.parse("အာဟုဝ်ဆီယာ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("อาโฮวซียา 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ฮซย 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ဟဆယ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (pce)", () => {
		expect(p.parse("อาโยวเอลัะ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("အာယုဝ်အေလ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ยอล 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ယအလ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (pce)", () => {
		expect(p.parse("အာမုဝ်ဆာ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("อาโมวซา 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("อมซ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("အမဆ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (pce)", () => {
		expect(p.parse("အာအောဘာဒီ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("อาออบาดี 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("อบด 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("အဘဒ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (pce)", () => {
		expect(p.parse("အာယုဝ်နာ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("อาโยวนา 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ยน 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ယန 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (pce)", () => {
		expect(p.parse("อามีคา 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("အာမီခါ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("มค 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("မခ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (pce)", () => {
		expect(p.parse("အာနာဟူမ် 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("อานาโฮม 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("นฮ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("နဟ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (pce)", () => {
		expect(p.parse("အာဟာဘာဂုက် 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("อาฮาบาฆูก 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ฮบฆ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ဟဘဂ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (pce)", () => {
		expect(p.parse("อาเจพานี 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("အာစေဖာနီ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("จพน 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("စဖန 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (pce)", () => {
		expect(p.parse("အာဟာကာယ် 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("อาฮากาย 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ฮก 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ဟက 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (pce)", () => {
		expect(p.parse("อาซาคารา 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("အာဆာခါရာ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ซคร 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ဆခရ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (pce)", () => {
		expect(p.parse("อามาลาคี 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("အာမာလာခီ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("มลค 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("မလခ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (pce)", () => {
		expect(p.parse("มท 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("မထ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (pce)", () => {
		expect(p.parse("มก 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("မက 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (pce)", () => {
		expect(p.parse("လက် 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ลก 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("လက 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (pce)", () => {
		expect(p.parse("3 ยฮ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃ ယဟ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pce)", () => {
		expect(p.parse("1 ยฮ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ယဟ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ยฮ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ယဟ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁ ยฮ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁ ယဟ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁. ยฮ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁. ယဟ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pce)", () => {
		expect(p.parse("2 ยฮ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ယဟ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ยฮ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ယဟ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂ ยฮ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂ ယဟ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂. ยฮ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂. ယဟ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (pce)", () => {
		expect(p.parse("ยฮ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ယဟ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (pce)", () => {
		expect(p.parse("ปร 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ပရ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (pce)", () => {
		expect(p.parse("ရမ် 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("รม 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ရမ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pce)", () => {
		expect(p.parse("1 คร 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ခရ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. คร 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ခရ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁ คร 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁ ခရ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁. คร 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁. ခရ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pce)", () => {
		expect(p.parse("2 คร 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ခရ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. คร 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ခရ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂ คร 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂ ခရ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂. คร 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂. ခရ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (pce)", () => {
		expect(p.parse("กซ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ကဆ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (pce)", () => {
		expect(p.parse("ဂလထ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ฆท 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ဂထ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (pce)", () => {
		expect(p.parse("อพ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("အဖ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (pce)", () => {
		expect(p.parse("พพ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ဖဖ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pce)", () => {
		expect(p.parse("1 ทล 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ထလ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ทล 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ထလ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁ ทล 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁ ထလ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁. ทล 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁. ထလ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pce)", () => {
		expect(p.parse("2 ทล 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ထလ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ทล 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ထလ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂ ทล 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂ ထလ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂. ทล 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂. ထလ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pce)", () => {
		expect(p.parse("1 ทม 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ထမ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ทม 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ထမ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁ ทม 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁ ထမ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁. ทม 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁. ထမ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pce)", () => {
		expect(p.parse("2 ทม 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ထမ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ทม 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ထမ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂ ทม 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂ ထမ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂. ทม 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂. ထမ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (pce)", () => {
		expect(p.parse("อท 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("အထ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (pce)", () => {
		expect(p.parse("ဖမ် 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("พม 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ဖမ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (pce)", () => {
		expect(p.parse("ဟပ် 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ฮบ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ဟဘ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (pce)", () => {
		expect(p.parse("ยก 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ယက 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pce)", () => {
		expect(p.parse("1 ปต 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ပတ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ปต 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ပတ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁ ปต 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁ ပတ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁. ปต 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁. ပတ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pce)", () => {
		expect(p.parse("2 ปต 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ပတ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ปต 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ပတ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂ ปต 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂ ပတ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂. ปต 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂. ပတ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (pce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (pce)", () => {
		expect(p.parse("ยด 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ယဒ 1:1").osis()).toEqual("Jude.1.1");
	});
});

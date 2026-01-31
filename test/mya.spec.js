"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mya.js";

describe("Localized book Gen (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mya)", () => {
		expect(p.parse("ကမ္ဘာဦးကျမ်း။ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ကမ္ဘာဦးကျမ်း 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ကမ႓ာဦးက်မ္း 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("က​မၻာ​ဦး 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ကမ္ဘာ​ဦး 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ကမၻာ​ဦး 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ကမ္ဘာဦး 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("က၊ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("က 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (mya)", () => {
		expect(p.parse("ထြက္ေျမာက္ရာက်မ္း 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ထွက်မြောက်ရာကျမ်း 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ထွက်လွတ်ရာကျမ်း။ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ထြက္​ေျမာက္​ရာ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ထြက္​ေျမာက္ရာ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ထွက်မြောက်ရာ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ထွက်​မြောက် 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ထြ၊ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ထွ၊ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ထြ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ထွ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (mya)", () => {
		expect(p.parse("လေဝိ၀တ်ထုံးကျမ်း။ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ဝတ္ျပဳရာက်မ္း 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ဝတ်ပြုရာကျမ်း 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ဝတ္​ျပဳ​ရာ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ဝတ်ပြုရာ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ဝတ္​ျပဳ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ဝတ်​ပြု 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ဝတ္၊ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ဝတ်၊ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ဝတ္ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ဝတ် 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (mya)", () => {
		expect(p.parse("စာရင်းတော်ဝင်ကျမ်း။ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("တောလည်ရာကျမ်း 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ေတာလည္ရာက်မ္း 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ေတာ​လည္​ရာ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ေတာ​လည္ရာ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("တောလည်ရာ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("တော​လည် 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("တော၊ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ေတာ၊ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("တော 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ေတာ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (mya)", () => {
		expect(p.parse("ယေရမိမြည်တမ်းစကား 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ေယ​ရ​မိ​ျမည္​တမ္း 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ေယရမိျမည္တမ္းစကား 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ပရိဒေဝဂီတကျမ်း။ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("မြည်​တမ်း​စ​ကား 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ျမည္​တမ္း​စ​ကား 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ယေရမိမြည်တမ်း 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ျမည္​၊ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("မြည်၊ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ျမည္၊ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("မြည် 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ျမည္ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mya)", () => {
		expect(p.parse("ဗျာဒိတ်တော်ကျမ်း။ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ဗျာဒိတ်ကျမ်း 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ဗ်ာဒိတ္က်မ္း 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ဗျာ​ဒိတ် 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ဗ်ာ​ဒိတ္ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ဗျာဒိတ် 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ဗ်ာဒိတ္ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ဗျာ၊ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ဗ်ာ၊ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ဗျာ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ဗ်ာ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (mya)", () => {
		expect(p.parse("ဓမ္မထပ်ဆင့်ကျမ်း။ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("တရားဟောရာကျမ်း 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("တရားေဟာရာက်မ္း 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("တ​ရား​ေဟာ​ရာ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("တ​ရား​ေဟာရာ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("တ​ရား​ဟော 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("တရားဟောရာ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("တ​ရား၊ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("တရား၊ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("တရား 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (mya)", () => {
		expect(p.parse("ယောရှုမှတ်စာ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ေယာ႐ႈမွတ္စာ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ေယာ​ရွု၊ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ယော​ရှု 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ယောရှု၊ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ယောရှု။ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ေယာ​ရွု 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ယောရှု 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ေယာရႈ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (mya)", () => {
		expect(p.parse("တရားသူကြီးမှတ်စာ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("တရားသူႀကီးမွတ္စာ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("တ​ရား​သူ​ႀကီး 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("တရားသူကြီး 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("တရားမင်း။ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("သူ​ႀကီး၊ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("သူ​ကြီး 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("သူကြီး၊ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("သူ​ႀကီး 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("သူကြီး 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("သူႀကီး 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (mya)", () => {
		expect(p.parse("ရုသဝတ္ထု 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("႐ုသဝတၳဳ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("႐ု​သ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ရု​သ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ရုသ။ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("႐ု၊ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ရု၊ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("႐ု 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ရု 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (mya)", () => {
		expect(p.parse("ဟေရှာယအနာဂတ္တိကျမ်း 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ေဟ႐ွာယအနာဂတၱိက်မ္း 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ဟေရှာယကျမ်း။ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ဟေ​ရှာ​ယ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ေဟ​ရွာ​ယ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ေဟ​ရွာ၊ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ဟေရှာ၊ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ဟေရှာယ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ဟေရှာ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ေဟရွာ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mya)", () => {
		expect(p.parse("ဓမ္မရာဇဝင်ပထမစောင် 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ဓမၼရာဇဝင္ပထမေစာင္ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁ရာ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mya)", () => {
		expect(p.parse("ဓမ္မရာဇဝင်ဒုတိယစောင် 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ဓမၼရာဇဝင္ဒုတိယေစာင္ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂ရာ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mya)", () => {
		expect(p.parse("၁ ဘုရင်မင်း။ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("၁. ဘုရင်မင်း။ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mya)", () => {
		expect(p.parse("၂ ဘုရင်မင်း။ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၂. ဘုရင်မင်း။ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၂​ ဘုရင်မင်း။ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၂​. ဘုရင်မင်း။ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mya)", () => {
		expect(p.parse("ဓမ္မရာဇဝင်တတိယစောင် 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ဓမၼရာဇဝင္တတိယေစာင္ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("၃ ဓ​မၼ​ရာ​ဇ​ဝင္ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("၃ ဓမၼ​ရာဇဝင္ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("၃ ဓမ္မရာဇဝင် 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("၃ ရာ၊ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("၃ ရာ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("၃ရာ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mya)", () => {
		expect(p.parse("ဓမ္မရာဇဝင်စတုတ္ထစောင် 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ဓမၼရာဇဝင္စတုတၳေစာင္ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၄ ဓ​မၼ​ရာ​ဇ​ဝင္ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၄ ဓမၼ​ရာဇဝင္ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၄ ဓမ္မရာဇဝင် 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၄ ရာ၊ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၄ ရာ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၄ရာ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mya)", () => {
		expect(p.parse("၁ ရာ​ဇ​ဝင္​ခ်ဳပ္ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၁ ရာဇ​ဝင္​ခ်ဳပ္ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၁ ရာဇဝင်ချုပ် 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၁ ရာ​ခ်ဳပ္၊ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၁ ရာ​ချုပ် 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၁ ရာဇဝံသ။ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၁. ရာ​ဇ​ဝင္​ခ်ဳပ္ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၁. ရာဇ​ဝင္​ခ်ဳပ္ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၁. ရာဇဝင်ချုပ် 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၁. ရာ​ခ်ဳပ္၊ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၁. ရာ​ချုပ် 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၁. ရာဇဝံသ။ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 1Chr (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mya)", () => {
		expect(p.parse("ရာဇဝင္ခ်ဳပ္ပထမေစာင္ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ရာဇဝင်ချုပ်ပထမစောင် 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၅ ရာ၊ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၅ရာ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mya)", () => {
		expect(p.parse("၂ ရာ​ဇ​ဝင္​ခ်ဳပ္ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂ ရာဇဝင်ချုပ် 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂ ရာ​ခ်ဳပ္၊ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂ ရာ​ချုပ် 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂ ရာ​ခ်ဳပ္ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂. ရာ​ဇ​ဝင္​ခ်ဳပ္ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂. ရာဇဝင်ချုပ် 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂. ရာ​ခ်ဳပ္၊ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂. ရာ​ချုပ် 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂. ရာ​ခ်ဳပ္ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂​ ရာ​ဇ​ဝင္​ခ်ဳပ္ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂​ ရာဇဝင်ချုပ် 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂​ ရာ​ခ်ဳပ္၊ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂​ ရာ​ချုပ် 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂​ ရာ​ခ်ဳပ္ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂​. ရာ​ဇ​ဝင္​ခ်ဳပ္ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂​. ရာဇဝင်ချုပ် 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂​. ရာ​ခ်ဳပ္၊ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂​. ရာ​ချုပ် 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂​. ရာ​ခ်ဳပ္ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mya)", () => {
		expect(p.parse("ရာဇဝင္ခ်ဳပ္ဒုတိယေစာင္ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ရာဇဝင်ချုပ်ဒုတိယစောင် 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ရာဇဝံသကျမ်းဒုတိယတွဲ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၆​ ရာ၊ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၆ ရာ၊ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၆ရာ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Sam (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mya)", () => {
		expect(p.parse("၁ ဓ​မၼ​ရာ​ဇ​ဝင္ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁ ဓမၼ​ရာဇဝင္ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁ ဓမ္မရာဇဝင် 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁ ရှမွေလ။ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁ ရာ၊ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁ ရာ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁. ဓ​မၼ​ရာ​ဇ​ဝင္ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁. ဓမၼ​ရာဇဝင္ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁. ဓမ္မရာဇဝင် 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁. ရှမွေလ။ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁. ရာ၊ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁. ရာ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mya)", () => {
		expect(p.parse("၂ ဓ​မၼ​ရာ​ဇ​ဝင္ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂ ဓမၼ​ရာဇဝင္ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂ ဓမ္မရာဇဝင် 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂ ရှမွေလ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂ ရာ၊ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂ ရာ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂. ဓ​မၼ​ရာ​ဇ​ဝင္ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂. ဓမၼ​ရာဇဝင္ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂. ဓမ္မရာဇဝင် 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂. ရှမွေလ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂. ရာ၊ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂. ရာ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂​ ဓ​မၼ​ရာ​ဇ​ဝင္ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂​ ဓမၼ​ရာဇဝင္ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂​ ဓမ္မရာဇဝင် 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂​ ရှမွေလ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂​ ရာ၊ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂​ ရာ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂​. ဓ​မၼ​ရာ​ဇ​ဝင္ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂​. ဓမၼ​ရာဇဝင္ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂​. ဓမ္မရာဇဝင် 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂​. ရှမွေလ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂​. ရာ၊ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂​. ရာ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book Ezra (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (mya)", () => {
		expect(p.parse("ဧဇရမွတ္စာ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ဧဇရမှတ်စာ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ဧ​ဇ​ရ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ဧ​ဇ၊ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ဧဇရ။ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ဧဇ၊ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ဧဇရ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ဧဇ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (mya)", () => {
		expect(p.parse("နေဟမိမှတ်စာ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ေနဟမိမွတ္စာ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("နေ​ဟ​မိ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ေန​ဟ​မိ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("နေဟမိ။ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("နေဟမိ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("နေ၊ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ေန၊ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("နေ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ေန 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (mya)", () => {
		expect(p.parse("ဧသတာဝတ္ထု 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ဧသတာဝတၳဳ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ဧ​သ​တာ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ဧသတာ။ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ဧ​သ၊ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ဧသတာ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ဧသ၊ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ဧသ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (mya)", () => {
		expect(p.parse("ယောဘဝတ္တု။ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ယောဘဝတ္ထု 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ေယာဘဝတၳဳ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ေယာ​ဘ၊ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ယောဘ၊ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ယောဘ။ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ေယာ​ဘ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ေယာဘ၊ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ယောဘ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ေယာဘ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (mya)", () => {
		expect(p.parse("ဆာလံကျမ်း 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ဆာလံက်မ္း 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ဆာ​လံ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ဆာလံ။ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ဆာလံ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ဆာ၊ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ဆာ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (mya)", () => {
		expect(p.parse("နယပုံပြင်ကျမ်း။ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("သုတ္တံကျမ်း။ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("သုတ္တံကျမ်း 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("သုတၱံက်မ္း 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("သု​တၱံ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("သုတ္တံ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("သုတၱံ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("သု၊ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("သု 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (mya)", () => {
		expect(p.parse("အာစရိယောဝါဒကျမ်း။ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ဒေသနာကျမ်း။ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ဒေသနာကျမ်း 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ေဒသနာက်မ္း 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ေဒ​သ​နာ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ဒေသနာ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ေဒသနာ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ဒေ၊ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ေဒ၊ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ဒေ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ေဒ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (mya)", () => {
		expect(p.parse("ရှောလမုန်သီချင်း။ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ရှောလမုန်သီချင်း 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ေ႐ွာလမုန္သီခ်င္း 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("သီ​ခ်င္း၊ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ဂီတမေဒဏီ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("သီချင်း 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("သီခ်င္း 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("သီ၊ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("သီ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (mya)", () => {
		expect(p.parse("ယေရမိအနာဂတ္တိကျမ်း 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ေယရမိအနာဂတၱိက်မ္း 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ယေရမိကျမ်း။ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ယေ​ရ​မိ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ေယ​ရ​မိ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ယေရမိ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ယေ၊ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ေယ၊ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ယေ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ေယ 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (mya)", () => {
		expect(p.parse("ယေဇကျေလအနာဂတ္တိကျမ်း 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ေယဇေက်လအနာဂတၱိက်မ္း 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ယေဇကျေလကျမ်း။ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ယေ​ဇ​ကျေ​လ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ေယ​ဇ​ေက်​လ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ယေဇကျေလ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ေယ​ဇ၊ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ယေဇ၊ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ယေဇ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ေယဇ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (mya)", () => {
		expect(p.parse("ဒံယေလအနာဂတ္တိကျမ်း 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ဒံေယလအနာဂတၱိက်မ္း 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ဒံယေလကျမ်း။ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ဒံ​ယေ​လ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ဒံ​ေယ​လ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ဒံယေလ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ဒံ၊ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ဒံ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (mya)", () => {
		expect(p.parse("ဟောရှေအနာဂတ္တိကျမ်း 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ေဟာေ႐ွအနာဂတၱိက်မ္း 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ဟောရှေကျမ်း။ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ဟော​ရှေ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ေဟာ​ေရွ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ဟောရှေ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ဟော၊ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ေဟာ၊ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ဟော 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ေဟာ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (mya)", () => {
		expect(p.parse("ယောလအနာဂတ္တိကျမ်း 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ေယာလအနာဂတၱိက်မ္း 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ယောလကျမ်း။ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ေယာ​လ၊ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ယော​လ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ယောလ၊ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ေယာ​လ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ယောလ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ေယာလ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (mya)", () => {
		expect(p.parse("အာမုတ်အနာဂတ္တိကျမ်း 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("အာမုတ္အနာဂတၱိက်မ္း 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("အာမုတ်ကျမ်း။ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("အာ​မုတ္ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("အာ​မုတ် 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("အာမုတ် 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("အာ၊ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("အာ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (mya)", () => {
		expect(p.parse("ဩဗဒိအနာဂတ္တိကျမ်း 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ဩဗဒိအနာဂတၱိက်မ္း 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ဩဗဒိကျမ်း။ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ၾသ​ဗ​ဒိ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("သြ​ဗ​ဒိ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ဩ​ဗ​ဒိ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ဩဗဒိ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ၾသ၊ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ဩ၊ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ဩ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (mya)", () => {
		expect(p.parse("ယောနကျမ်း 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ယောနဝတ္ထု 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ေယာနဝတၳဳ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ေယာ​န၊ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ယော​န 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ယောန၊ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ေယာ​န 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ယောန 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ေယာန 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (mya)", () => {
		expect(p.parse("မိက္ခာအနာဂတ္တိကျမ်း 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("မိကၡာအနာဂတၱိက်မ္း 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("မိက္ခာကျမ်း။ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("မိ​ကၡာ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("မိက္ခာ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("မိကၡာ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("မိ၊ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("မိ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (mya)", () => {
		expect(p.parse("နာဟုံအနာဂတ္တိကျမ်း 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("နာဟုံအနာဂတၱိက်မ္း 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("နာဟုံကျမ်း။ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("နာ​ဟုံ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("နာဟုံ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("နာ၊ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("နာ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (mya)", () => {
		expect(p.parse("ဟာဗက္ကုတ်အနာဂတ္တိကျမ်း 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ဟာဗကၠဳတ္အနာဂတၱိက်မ္း 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ဟဗက္ကုတ်ကျမ်း။ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ဟ​ဗ​ကၠဳတ္ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ဟ​ဗက္ကုတ် 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ဟ​ဗကၠဳတ္ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ဟဗက္ကုတ် 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ဟ​ဗ၊ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ဟဗ၊ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ဟဗ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (mya)", () => {
		expect(p.parse("ဇေဖနိအနာဂတ္တိကျမ်း 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ေဇဖနိအနာဂတၱိက်မ္း 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ဇေဖနိကျမ်း။ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ေဇ​ဖ​နိ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ဇေဖနိ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ေဇဖနိ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ဇေ၊ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ေဇ၊ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ဇေ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ေဇ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (mya)", () => {
		expect(p.parse("ဟဂ္ဂဲအနာဂတ္တိကျမ်း 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ဟဂၢဲအနာဂတၱိက်မ္း 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ဟဂ္ဂဲကျမ်း။ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ဟ​ဂၢဲ၊ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ဟဂ္ဂဲ၊ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ဟ​ဂၢဲ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ဟဂ္ဂဲ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ဟဂၢဲ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ဟ္ဂဲ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (mya)", () => {
		expect(p.parse("ဇာခရိအနာဂတ္တိကျမ်း 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ဇာခရိအနာဂတၱိက်မ္း 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ဇာခရိကျမ်း။ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ဇာ​ခ​ရိ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ဇာခရိ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ဇာ၊ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ဇာ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (mya)", () => {
		expect(p.parse("မာလခိအနာဂတ္တိကျမ်း 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("မာလခိအနာဂတၱိက်မ္း 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("မာလခိကျမ်း။ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("မာ​လ​ခိ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("မာ​လ၊ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("မာလခိ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("မာလ၊ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("မာလ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mya)", () => {
		expect(p.parse("ရွင္မႆဲခရစ္ဝင္ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ရှင်မဿဲခရစ်ဝင် 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ရွင္​မႆဲ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ရှင်မဿဲ။ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ရွင္မႆဲ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ရှင်မဿဲ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("မဿဲ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("မ၊ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("မ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mya)", () => {
		expect(p.parse("႐ွင္မာကုခရစ္ဝင္ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ရှင်မာကုခရစ်ဝင် 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ရွင္​မာ​ကု 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ရွင္မာကု 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ရှင်မာကု 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("မာကု 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("မာ၊ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("မာ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mya)", () => {
		expect(p.parse("႐ွင္လုကာခရစ္ဝင္ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ရှင်လုကာခရစ်ဝင် 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ရွင္​လု​ကာ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ရွင္လုကာ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ရှင်လုကာ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("လုကာ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("လု၊ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("လု 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mya)", () => {
		expect(p.parse("ယောဟန်၏ဩဝါဒကျမ်းပဌမစောင်။ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ရွင္ေယာဟန္ဩဝါဒစာပထမေစာင္ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ရှင်ယောဟန်ဩဝါဒစာပထမစောင် 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁ယော 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁ေယာ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mya)", () => {
		expect(p.parse("႐ွင္ေယာဟန္ဩဝါဒစာဒုတိယေစာင္ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ရှင်ယောဟန်ဩဝါဒစာဒုတိယစောင် 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂ယော 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂ေယာ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mya)", () => {
		expect(p.parse("႐ွင္ေယာဟန္ဩဝါဒစာတတိယေစာင္ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ရှင်ယောဟန်ဩဝါဒစာတတိယစောင် 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃ ရွင္​ေယာ​ဟန္ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃ ရှင်ယောဟန် 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃ ယောဟန်။ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃ ယောဟန် 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃ ေယာဟန္ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃ ယော၊ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃ ေယာ၊ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃ ယော 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃ယော 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃ေယာ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mya)", () => {
		expect(p.parse("၁ ရွင္​ေယာ​ဟန္ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁ ရှင်ယောဟန် 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁ ယောဟန် 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁ ေယာဟန္ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁ ယော၊ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁ ေယာ၊ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁ ယော 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁. ရွင္​ေယာ​ဟန္ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁. ရှင်ယောဟန် 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁. ယောဟန် 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁. ေယာဟန္ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁. ယော၊ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁. ေယာ၊ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁. ယော 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mya)", () => {
		expect(p.parse("၂ ရွင္​ေယာ​ဟန္ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂ ရှင်ယောဟန် 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂ ယောဟန်။ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂ ယောဟန် 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂ ေယာဟန္ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂ ယော၊ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂ ေယာ၊ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂ ယော 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂. ရွင္​ေယာ​ဟန္ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂. ရှင်ယောဟန် 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂. ယောဟန်။ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂. ယောဟန် 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂. ေယာဟန္ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂. ယော၊ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂. ေယာ၊ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂. ယော 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂​ ရွင္​ေယာ​ဟန္ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂​ ရှင်ယောဟန် 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂​ ယောဟန်။ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂​ ယောဟန် 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂​ ေယာဟန္ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂​ ယော၊ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂​ ေယာ၊ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂​ ယော 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂​. ရွင္​ေယာ​ဟန္ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂​. ရှင်ယောဟန် 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂​. ယောဟန်။ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂​. ယောဟန် 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂​. ေယာဟန္ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂​. ယော၊ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂​. ေယာ၊ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂​. ယော 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mya)", () => {
		expect(p.parse("႐ွင္ေယာဟန္ခရစ္ဝင္ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ရှင်ယောဟန်ခရစ်ဝင် 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ရွင္​ေယာ​ဟန္ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ရွင္ေယာဟန္ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ရှင်ယောဟန် 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ယောဟန် 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ယော၊ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ေယာ၊ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ယော 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ေယာ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mya)", () => {
		expect(p.parse("တမန်တော်ဝတ္ထု။ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("တမန်တော်ဝတ္ထု 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("တမန္ေတာ္ဝတၳဳ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("တ​မန္​ေတာ္ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("တမန္ေတာ္ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("တမန်တော် 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("တ၊ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("တ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mya)", () => {
		expect(p.parse("ရောမဩဝါဒကျမ်း။ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ရောမဩဝါဒစာ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ေရာမဩဝါဒစာ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ရော​မ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ေရာ​မ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ရော၊ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ရောမ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ေရာ၊ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ရော 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ေရာ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mya)", () => {
		expect(p.parse("၁ ကောရိန္သုဩဝါဒကျမ်း 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁ ေကာ​ရိ​ႏ္သဳ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁ ကောရိန္သု 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁ ေကာရိန္သု 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁ ကော၊ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁ ေကာ၊ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁ ကော 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁. ကောရိန္သုဩဝါဒကျမ်း 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁. ေကာ​ရိ​ႏ္သဳ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁. ကောရိန္သု 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁. ေကာရိန္သု 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁. ကော၊ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁. ေကာ၊ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁. ကော 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mya)", () => {
		expect(p.parse("ကောရိန္သုဩဝါဒစာပထမစောင် 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ေကာရိန္သုဩဝါဒစာပထမေစာင္ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁ကော 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁ေကာ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mya)", () => {
		expect(p.parse("၂ ကောရိန္သုဩဝါဒကျမ်း။ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂ ေကာ​ရိ​ႏ္သဳ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂ ကောရိန္သု 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂ ေကာရိန္သု 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂ ကော၊ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂ ေကာ၊ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂ ကော 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂. ကောရိန္သုဩဝါဒကျမ်း။ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂. ေကာ​ရိ​ႏ္သဳ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂. ကောရိန္သု 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂. ေကာရိန္သု 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂. ကော၊ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂. ေကာ၊ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂. ကော 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂​ ကောရိန္သုဩဝါဒကျမ်း။ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂​ ေကာ​ရိ​ႏ္သဳ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂​ ကောရိန္သု 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂​ ေကာရိန္သု 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂​ ကော၊ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂​ ေကာ၊ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂​ ကော 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂​. ကောရိန္သုဩဝါဒကျမ်း။ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂​. ေကာ​ရိ​ႏ္သဳ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂​. ကောရိန္သု 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂​. ေကာရိန္သု 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂​. ကော၊ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂​. ေကာ၊ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂​. ကော 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mya)", () => {
		expect(p.parse("ကောရိန္သုဩဝါဒစာဒုတိယစောင် 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ေကာရိန္သုဩဝါဒစာဒုတိယေစာင္ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂ကော 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂ေကာ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mya)", () => {
		expect(p.parse("ကောလောသဲဩဝါဒကျမ်း။ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ကောလောသဲဩဝါဒစာ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ေကာေလာသဲဩဝါဒစာ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ကော​လော​သဲ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ေကာ​ေလာ​သဲ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ကောလောသဲ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ကော၊ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ေကာ၊ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ကော 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ေကာ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mya)", () => {
		expect(p.parse("ဂလာတိဩဝါဒကျမ်း။ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ဂလာတိဩဝါဒစာ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ဂ​လာ​တိ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ဂလာတိ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ဂ​လ၊ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ဂလ၊ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ဂလာ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ဂလ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mya)", () => {
		expect(p.parse("ဧဖက်ဩဝါဒကျမ်း။ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ဧဖက္ဩဝါဒစာ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ဧဖက်ဩဝါဒစာ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ဧ​ဖက္ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ဧ​ဖက် 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ဧဖက် 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ဧ၊ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ဧ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mya)", () => {
		expect(p.parse("ဖိလိပ္ပိဩဝါဒကျမ်း။ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ဖိလိပ္ပိသြဝါဒစာ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ဖိလိပၸိၾသဝါဒစာ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ဖိ​လိ​ပၸိ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ဖိ​လိပ္ပိ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ဖိ​လိပၸိ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ဖိလိပ္ပိ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ဖိ၊ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ဖိ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mya)", () => {
		expect(p.parse("သက်သာလောနိတ်ဩဝါဒကျမ်း ပဌမစောင်။ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("သက္သာေလာနိတ္ဩဝါဒစာပထမေစာင္ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("သက်သာလောနိတ်ဩဝါဒစာပထမစောင် 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁​ သက္၊ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁သက္ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁သက် 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mya)", () => {
		expect(p.parse("၁ သက္​သာ​ေလာ​နိတ္ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁ သက္သာေလာနိတ္ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁ သက်သာလောနိတ် 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁ သက္၊ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁ သက်၊ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁ သက် 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁. သက္​သာ​ေလာ​နိတ္ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁. သက္သာေလာနိတ္ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁. သက်သာလောနိတ် 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁. သက္၊ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁. သက်၊ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁. သက် 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mya)", () => {
		expect(p.parse("၂ သက္​သာ​ေလာ​နိတ္ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂ သက္သာေလာနိတ္ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂ သက်သာလောနိတ် 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂ သက္၊ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂ သက်၊ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂ သက် 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂. သက္​သာ​ေလာ​နိတ္ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂. သက္သာေလာနိတ္ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂. သက်သာလောနိတ် 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂. သက္၊ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂. သက်၊ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂. သက် 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂​ သက္​သာ​ေလာ​နိတ္ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂​ သက္သာေလာနိတ္ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂​ သက်သာလောနိတ် 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂​ သက္၊ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂​ သက်၊ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂​ သက် 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂​. သက္​သာ​ေလာ​နိတ္ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂​. သက္သာေလာနိတ္ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂​. သက်သာလောနိတ် 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂​. သက္၊ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂​. သက်၊ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂​. သက် 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mya)", () => {
		expect(p.parse("သက်သာလောနိတ်ဩဝါဒကျမ်း ဒုတိယစောင်။ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("သက္သာေလာနိတ္ဩဝါဒစာဒုတိယေစာင္ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("သက်သာလောနိတ်ဩဝါဒစာဒုတိယစောင် 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂သက္ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂သက် 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mya)", () => {
		expect(p.parse("၁ တိ​ေမာ​ေသ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁ တိမောသေ။ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁ တိမောသေ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁ တိေမာေသ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁ တိ၊ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁ တိ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁. တိ​ေမာ​ေသ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁. တိမောသေ။ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁. တိမောသေ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁. တိေမာေသ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁. တိ၊ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁. တိ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mya)", () => {
		expect(p.parse("တိမောသေဩဝါဒစာပထမစောင် 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("တိေမာေသဩဝါဒစာပထမေစာင္ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁တိ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mya)", () => {
		expect(p.parse("၂ တိ​ေမာ​ေသ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂ တိမောသေ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂ တိေမာေသ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂ တိ၊ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂ တိ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂. တိ​ေမာ​ေသ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂. တိမောသေ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂. တိေမာေသ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂. တိ၊ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂. တိ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂​ တိ​ေမာ​ေသ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂​ တိမောသေ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂​ တိေမာေသ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂​ တိ၊ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂​ တိ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂​. တိ​ေမာ​ေသ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂​. တိမောသေ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂​. တိေမာေသ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂​. တိ၊ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂​. တိ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mya)", () => {
		expect(p.parse("တိမောသေဩဝါဒကျမ်း ဒုတိယစောင်။ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("တိမောသေဩဝါဒစာဒုတိယစောင် 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("တိေမာေသဩဝါဒစာဒုတိယေစာင္ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂တိ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mya)", () => {
		expect(p.parse("တိတုဩဝါဒကျမ်း။ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("တိတုဩဝါဒစာ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("တိ​တု 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("တိတု 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("တိ၊ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("တိ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mya)", () => {
		expect(p.parse("ဖိလေမုန်ဩဝါဒကျမ်း။ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ဖိလေမုန်ဩဝါဒစာ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ဖိေလမုန္ဩဝါဒစာ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ဖိ​လေ​မုန် 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ဖိ​ေလ​မုန္ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ဖိလေမုန် 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ဖိ​ေလ၊ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ဖိလေ၊ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ဖိလေ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ဖိေလ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mya)", () => {
		expect(p.parse("ဟေဗြဲဩဝါဒကျမ်း။ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ဟေဗြဲဩဝါဒစာ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ေဟၿဗဲဩဝါဒစာ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ေဟ​ျဗဲ၊ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ဟေ​ဗြဲ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ဟေဗြဲ၊ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ေဟ​ျဗဲ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ဟေဗြဲ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ေဟၿဗဲ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mya)", () => {
		expect(p.parse("႐ွင္ယာကုပ္ဩဝါဒစာ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ယာကုပ်ဩဝါဒကျမ်း။ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ရှင်ယာကုပ်ဩဝါဒစာ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ရွင္​ယာ​ကုပ္ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ရှင်ယာကုပ် 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ယာ​ကုပ္ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ယာ​ကုပ် 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ယာကုပ် 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ယာ၊ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ယာ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mya)", () => {
		expect(p.parse("၁ ရွင္​ေပ​တ​႐ု 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁ ရှင်ပေတရု 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁ ပေတရု 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁ ေပတ႐ု 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁ ပေ၊ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁ ေပ၊ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁ ပေ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁. ရွင္​ေပ​တ​႐ု 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁. ရှင်ပေတရု 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁. ပေတရု 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁. ေပတ႐ု 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁. ပေ၊ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁. ေပ၊ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁. ပေ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 1Pet (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mya)", () => {
		expect(p.parse("ပေတရုဩဝါဒကျမ်းပဌမစောင်။ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ရွင္ေပတ႐ုဩဝါဒစာပထမေစာင္ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ရှင်ပေတရုဩဝါဒစာပထမစောင် 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁ပေ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁ေပ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mya)", () => {
		expect(p.parse("၂ ရွင္​ေပ​တ​႐ု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂ ရှင်ပေတရု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂ ပေတရု။ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂ ပေတရု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂ ေပတ႐ု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂ ပေ၊ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂ ေပ၊ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂ ပေ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂. ရွင္​ေပ​တ​႐ု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂. ရှင်ပေတရု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂. ပေတရု။ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂. ပေတရု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂. ေပတ႐ု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂. ပေ၊ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂. ေပ၊ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂. ပေ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂​ ရွင္​ေပ​တ​႐ု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂​ ရှင်ပေတရု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂​ ပေတရု။ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂​ ပေတရု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂​ ေပတ႐ု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂​ ပေ၊ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂​ ေပ၊ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂​ ပေ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂​. ရွင္​ေပ​တ​႐ု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂​. ရှင်ပေတရု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂​. ပေတရု။ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂​. ပေတရု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂​. ေပတ႐ု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂​. ပေ၊ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂​. ေပ၊ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂​. ပေ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mya)", () => {
		expect(p.parse("႐ွင္ေပတ႐ုဩဝါဒစာဒုတိယေစာင္ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ရှင်ပေတရုဩဝါဒစာဒုတိယစောင် 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂ပေ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂ေပ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mya)", () => {
		expect(p.parse("႐ွင္ယုဒဩဝါဒစာ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ယုဒဩဝါဒကျမ်း။ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ရှင်ယုဒဩဝါဒစာ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ရွင္​ယု​ဒ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ရှင်ယုဒ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ယု​ဒ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ယု၊ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ယုဒ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ယု 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (mya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (mya)", () => {
		expect(p.parse("၁ ရာ~ဇ~ဝံ~သ။ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၁ ကော~ရိ~န္သု~ဩ~ဝါ~ဒ~ကျမ်း 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ယော~ဟန်၏~ဩ~ဝါ~ဒ~ကျမ်း~ပ~ဌ~မ~စောင်။ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁ ဘု~ရင်~မင်း။ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ပေ~တ~ရု~ဩ~ဝါ~ဒ~ကျမ်း~ပ~ဌ~မ~စောင်။ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁ ရှ~မွေ~လ။ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("သက်~သာ~လော~နိတ်~ဩ~ဝါ~ဒ~ကျမ်း ပ~ဌ~မ~စောင်။ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁ တိ~မော~သေ။ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ရာ~ဇ~ဝံ~သ~ကျမ်း~ဒု~တိ~ယ~တွဲ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂ ကော~ရိ~န္သု~ဩ~ဝါ~ဒ~ကျမ်း။ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂ ﻿ယော~ဟန်။ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂ ဘု~ရင်~မင်း။ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၂ ပေ~တ~ရု။ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂ ရှ~မွေ~လ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("သက်~သာ~လော~နိတ်~ဩ~ဝါ~ဒ~ကျမ်း ဒု~တိ~ယ~စောင်။ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("တိ~မော~သေ~ဩ~ဝါ~ဒကျမ်း ဒု~တိ~ယ~စောင်။ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၃ ယော~ဟန်။ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("တ~မန်~တော်~ဝ~တ္ထု။ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("အာ~မုတ်~ကျမ်း။ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ကော~လော~သဲ~ဩ~ဝါ~ဒ~ကျမ်း။ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ဒံ~ယေ~လ~ကျမ်း။ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ဓ~မ္မ~ထပ်~ဆင့်~ကျမ်း။ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("အာ~စ~ရိ~ယော~ဝါ~ဒ~ကျမ်း။ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ဧ~ဖက်~ဩ~ဝါ~ဒ~ကျမ်း။ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ဧ~သ~တာ။ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ထွက်~လွတ်~ရာ~ကျမ်း။ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ယေ~ဇ~ကျေ~လ~ကျမ်း။ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ဧ~ဇ~ရ။ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ဂ~လာ~တိ~ဩ~ဝါ~ဒ~ကျမ်း။ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("က~မ္ဘာ~ဦး~ကျမ်း။ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ဟ~ဗ~က္ကုတ်~ကျမ်း။ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ဟ~ဂ္ဂဲ~ကျမ်း။ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ဟေ~ဗြဲ~ဩ~ဝါ~ဒ~ကျမ်း။ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ဟော~ရှေ~ကျမ်း။ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ဟေ~ရှာ~ယ~ကျမ်း။ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ယာ~ကုပ်~ဩ~ဝါ~ဒ~ကျမ်း။ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ယေ~ရ~မိ~ကျမ်း။ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ယော~ဘ။ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ယော~လ~ကျမ်း။ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ယော~န~ကျမ်း 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ယော~ရှု။ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ယု~ဒ~ဩ~ဝါ~ဒ~ကျမ်း။ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("တ~ရား~မင်း။ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ပ~ရိ~ဒေ~ဝ~ဂီ~တ~ကျမ်း။ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("လေ~ဝိ~၀တ်~ထုံး~ကျမ်း။ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ရှင်~လု~ကာ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("မာ~လ~ခိ~ကျမ်း။ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ရှင်~မာ~ကု 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ရှင်~မဿဲ။ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("မိ~က္ခာ~ကျမ်း။ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("နာ~ဟုံ~ကျမ်း။ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("နေ~ဟ~မိ။ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("စာ~ရင်း~တော်~ဝင်~ကျမ်း။ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ဩ~ဗ~ဒိ~ကျမ်း။ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ဖိ~လိ~ပ္ပိ~ဩ~ဝါ~ဒ~ကျမ်း။ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ဖိ~လေ~မုန်~ဩ~ဝါ~ဒ~ကျမ်း။ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("န~ယ~ပုံ~ပြင်~ကျမ်း။ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ဆာ~လံ။ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ဗျာ~ဒိတ်~တော်~ကျမ်း။ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ရော~မ~ဩ~ဝါ~ဒ~ကျမ်း။ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ရု~သ။ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ဂီ~တ~မေ~ဒ~ဏီ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("﻿တိ~တု~ဩ~ဝါ~ဒ~ကျမ်း။ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ဇာ~ခ~ရိ~ကျမ်း။ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ဇေ~ဖ~နိ~ကျမ်း။ 1:1").osis()).toEqual("Zeph.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lbj.js";

describe("Localized book Gen (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (lbj)", () => {
		expect(p.parse("གོ༌ཟུག༌ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (lbj)", () => {
		expect(p.parse("བིང༌ཏེ༌ ཆའ༌ཁན༌ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lbj)", () => {
		expect(p.parse("ཡོང༌ཅེས༌ཅན༌ནི༌ དུས༌ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("یونگچیسچانّی دوس 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("یونگچیسچان 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Josh (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (lbj)", () => {
		expect(p.parse("ཡོ༌ཤུའ༌། 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ཡོ༌ཤུའ༌ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (lbj)", () => {
		expect(p.parse("སྐྱོབ༌ཁན༌ནི༌ གོ༌ཁྲིད༌གུན༌ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (lbj)", () => {
		expect(p.parse("རུཐ༌ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Dan (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (lbj)", () => {
		expect(p.parse("དཱ༌ནི༌ཨེལ༌ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Matt (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lbj)", () => {
		expect(p.parse("مادتھا 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("མད༌ཐཱ༌ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("متّی 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lbj)", () => {
		expect(p.parse("མར༌ཀུས༌ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مارکوس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مرقُس 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lbj)", () => {
		expect(p.parse("ལུ༌ཀ༌ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لُوک 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لوکا 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lbj)", () => {
		expect(p.parse("ཡོ༌ཧཱ༌ནན༌ 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1یُوؔحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("یوہའنའن ۱ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lbj)", () => {
		expect(p.parse("ཡོ༌ཧཱ༌ནན༌ 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("یوہའنའن ۲ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lbj)", () => {
		expect(p.parse("ཡོ༌ཧཱ༌ནན༌ 3 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 یوحنّان 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("یوہའنའن ۳ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 2John (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lbj)", () => {
		expect(p.parse("2 یوحنّان 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. یوحنّان 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lbj)", () => {
		expect(p.parse("ཡོ༌ཧཱ༌ནན༌ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("یوہانان 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("یوحنّا 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lbj)", () => {
		expect(p.parse("چھاگلاسگون 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ཆག༌ལས༌གུན༌ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("چھاگلاس 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lbj)", () => {
		expect(p.parse("རོམ༌པ༌ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رومپا 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("روم 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lbj)", () => {
		expect(p.parse("ཀོ༌རིན༌ཐི༌པ༌ 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("کورینتھیپའ ۱ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1کرِنت 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lbj)", () => {
		expect(p.parse("ཀོ༌རིན༌ཐི༌པ༌ 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("کورینتھیپའ ۲ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2کرِنت 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lbj)", () => {
		expect(p.parse("ཀོ༌ལོ༌སིའི༌པ༌ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("کولوسیپا 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("کولوسی 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lbj)", () => {
		expect(p.parse("གཱ༌ལ༌ཏི༌ཡཱ༌པ༌ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("گالاتییاپا 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("گلَتیہ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lbj)", () => {
		expect(p.parse("ཨེ༌ཕེ༌སུས༌པ༌ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ایپھیسوسپا 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("اِفسُس 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lbj)", () => {
		expect(p.parse("ཕི༌ལི༌པི༌པ༌ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("پھیلیپیپا 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فِلپّی 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lbj)", () => {
		expect(p.parse("ཐེ༌ས༌ལོ༌ནི༌ཀ༌པ༌ 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("تھیسའلونیکའپའ ۱ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1تھسلُنیکے 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lbj)", () => {
		expect(p.parse("ཐེ༌ས༌ལོ༌ནི༌ཀ༌པ༌ 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("تھیسའلونیکའپའ ۲ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2تھسلُنیکے 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lbj)", () => {
		expect(p.parse("ཏི༌མོ༌ཐི༌ 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("تیموتھِی ۱ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1تِیمُتی 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lbj)", () => {
		expect(p.parse("ཏི༌མོ༌ཐི༌ 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("تیموتھِی ۲ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2تِیمُتی 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lbj)", () => {
		expect(p.parse("ཏི༌ཏུས༌ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تیتوس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("طِطُس 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lbj)", () => {
		expect(p.parse("ཕི༌ལི༌མོན༌ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("پھیلیمون 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lbj)", () => {
		expect(p.parse("عبرانی پا 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ཨིབ༌རི༌པ༌ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عِبرانی 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lbj)", () => {
		expect(p.parse("یعقُوبؔ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ཡ༌ཀོབ༌ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("یاکوب 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 2Pet (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lbj)", () => {
		expect(p.parse("2 پطرؔس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. پطرؔس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lbj)", () => {
		expect(p.parse("པི༌ཏྲར༌ 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("پیٹའر ۲ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lbj)", () => {
		expect(p.parse("པི༌ཏྲར༌ 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1پطرؔس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("پیٹའر 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (lbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lbj)", () => {
		expect(p.parse("ཡུ༌དཱ༌ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("یودا 1:1").osis()).toEqual("Jude.1.1");
	});
});

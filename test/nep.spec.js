"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nep.js";

describe("Localized book Gen (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (nep)", () => {
		expect(p.parse("उत्पत्तिको पुस्तक 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("utpattiko pustak 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("उत्पत्तिको 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("utpattiko 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("उत्पत्ति 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (nep)", () => {
		expect(p.parse("prastʰānko pustak 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("प्रस्थानको पुस्तक 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("prastʰānko 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("प्रस्थानको 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("प्रस्थान 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (nep)", () => {
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (nep)", () => {
		expect(p.parse("levīharūko pustak 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("लेवीहरूको पुस्तक 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("levīharūko 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("लेवीहरूको 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("लेवि 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("लेवी 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (nep)", () => {
		expect(p.parse("gantīko pustak 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("गन्तीको पुस्तक 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("gantīko 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("गन्तीको 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("गन्ती 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (nep)", () => {
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (nep)", () => {
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (nep)", () => {
		expect(p.parse("yarmiyāko vilāp 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("यर्मियाको विलाप 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("विलाप 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (nep)", () => {
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nep)", () => {
		expect(p.parse("yūhannālāī bʰaeko prakāš 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("यूहन्नालाई भएको प्रकाश 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रकाश 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (nep)", () => {
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (nep)", () => {
		expect(p.parse("vyavastʰāko pustak 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("व्यवस्थाको पुस्तक 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("vyavastʰāko 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("व्यवस्थाको 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("व्यावस्था 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("व्यवस्था 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (nep)", () => {
		expect(p.parse("yahošūko pustak 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("यहोशूको पुस्तक 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("yahošūko 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("यहोशूको 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("यहोशू 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (nep)", () => {
		expect(p.parse("nyāyakarttāharūko pustak 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("न्यायकर्त्ताहरूको पुस्तक 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("न्यायकर्ताहरूको पुस्तक 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("nyāyakarttāharūko 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("न्यायकर्त्ताहरूको 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("न्यायकर्ता 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (nep)", () => {
		expect(p.parse("rūtʰko pustak 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("रूथको पुस्तक 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("rūtʰko 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("रूथको 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("रूथ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (nep)", () => {
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (nep)", () => {
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (nep)", () => {
		expect(p.parse("yašəiyāko pustak 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("यशैयाको पुस्तक 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("yašəiyāko 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("यशैयाको 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("येशैया 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("यशैया 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nep)", () => {
		expect(p.parse("1 šamūelko 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 शमूएलको 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 शामुएल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 शमूएल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. šamūelko 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. शमूएलको 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. शामुएल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. शमूएल 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nep)", () => {
		expect(p.parse("2 šamūelko 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 शमूएलको 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 शामुएल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 शमूएल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. šamūelko 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. शमूएलको 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. शामुएल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. शमूएल 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nep)", () => {
		expect(p.parse("शमूएलको दोस्रो पुस्तक 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 शमूएल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nep)", () => {
		expect(p.parse("शमूएलको पहिलो पुस्तक 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("šamūelko pustak 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 शमूएल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nep)", () => {
		expect(p.parse("1 rāǳāharūko 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 राजाहरूको 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 राजा 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. rāǳāharūko 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. राजाहरूको 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. राजा 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nep)", () => {
		expect(p.parse("2 rāǳāharūko 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 राजाहरूको 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 राजा 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. rāǳāharūko 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. राजाहरूको 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. राजा 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nep)", () => {
		expect(p.parse("राजाहरूको दोस्रो पुस्तक 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 राजा 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nep)", () => {
		expect(p.parse("राजाहरूक पहिल पुस्तक 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("rāǳāharūko pustak 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 राजा 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nep)", () => {
		expect(p.parse("1 itihāsko 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 इतिहासको 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. itihāsko 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. इतिहासको 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. इतिहास 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nep)", () => {
		expect(p.parse("2 itihāsko 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 इतिहासको 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 इतिहास 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. itihāsko 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. इतिहासको 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. इतिहास 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nep)", () => {
		expect(p.parse("इतिहासको दोस्रो पुस्तक 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 इतिहास 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nep)", () => {
		expect(p.parse("इतिहासको पहिलो पुस्तक 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("itihāsko pustak 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (nep)", () => {
		expect(p.parse("एज्राको पुस्तक 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("एज्राको 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("eǳrāko 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("एज्रा 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (nep)", () => {
		expect(p.parse("nahemyāhko pustak 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("नहेम्याहको पुस्तक 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("nahemyāhko 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("नहेम्याहको 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("नहेम्याह 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (nep)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (nep)", () => {
		expect(p.parse("estarko pustak 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("एस्तरको पुस्तक 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("estarko 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("एस्तरको 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("एस्तर 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (nep)", () => {
		expect(p.parse("अय्यूबको पुस्तक 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ayyūbko pustak 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("अय्यूबको 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ayyūbko 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("अय्यूब 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (nep)", () => {
		expect(p.parse("bʰaǳansaṃgrah 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("भजनसंग्रह 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("भजनसग्रह 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("भजन 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (nep)", () => {
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (nep)", () => {
		expect(p.parse("hitopadeško pustak 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("हितोपदेशको पुस्तक 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("hitopadeško 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("हितोपदेशको 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("हितोपदेश 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (nep)", () => {
		expect(p.parse("upadešakko pustak 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("उपदेशकको पुस्तक 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("upadešakko 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("उपदेशकको 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("उपदेशक 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (nep)", () => {
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (nep)", () => {
		expect(p.parse("sulemānko šreṣṭʰagīt 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("सुलेमानको श्रेष्ठगीत 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("श्रेष्ठगीत 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (nep)", () => {
		expect(p.parse("yarmiyāko pustak 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("यर्मियाको पुस्तक 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("yarmiyāko 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("यर्मियाको 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("यर्मिया 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (nep)", () => {
		expect(p.parse("iǳakielko pustak 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("इजकिएलको पुस्तक 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("iǳakielko 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("इजकिएलको 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("इजकिएल 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (nep)", () => {
		expect(p.parse("dāniyalko pustak 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("दानियलको पुस्तक 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("dāniyalko 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("दानियलको 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("दानियल 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (nep)", () => {
		expect(p.parse("होशेको पुस्तक 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("hoše 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("होशे 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (nep)", () => {
		expect(p.parse("योएलको पुस्तक 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("yoel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("योएल 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (nep)", () => {
		expect(p.parse("आमोसको पुस्तक 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("āmos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("अमोस 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("आमोस 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (nep)", () => {
		expect(p.parse("ओबदियाको पुस्तक 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("obadiyā 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ओबदिया 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (nep)", () => {
		expect(p.parse("योनाको पुस्तक 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("yonā 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("योना 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (nep)", () => {
		expect(p.parse("मीकाको पुस्तक 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("mīkā 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("मिका 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("मीका 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (nep)", () => {
		expect(p.parse("नहूमको पुस्तक 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("nahūm 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("नहूम 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (nep)", () => {
		expect(p.parse("हबकूकको पुस्तक 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("habakūk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("हबकूक 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (nep)", () => {
		expect(p.parse("सपन्याहको पुस्तक 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("sapanyāh 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("सपन्याह 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (nep)", () => {
		expect(p.parse("हाग्गैको पुस्तक 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("hāggəi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("हाग्गै 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (nep)", () => {
		expect(p.parse("जकरियाको पुस्तक 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("jakariyā 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("जकरिया 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (nep)", () => {
		expect(p.parse("मलाकीको पुस्तक 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("malākī 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("मलाकी 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("मलकी 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nep)", () => {
		expect(p.parse("mattīle lekʰeko susmācār 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मत्तीले लेखेको सुसमाचार 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मत्तीको सुसमाचार 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("mattīle 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मत्तीले 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मत्ति 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nep)", () => {
		expect(p.parse("markūsle lekʰeko susmācār 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्कूसले लेखेको सुसमाचार 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्कूसको सुसमाचार 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("markūsle 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्कूसले 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्कुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्कूश 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्कूस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("र्मकूस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("र्मकस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nep)", () => {
		expect(p.parse("lūkāle lekʰeko susmācār 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूकाले लेखेको सुसमाचार 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूकाको सुसमाचार 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("lūkāle 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूकाले 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लुका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nep)", () => {
		expect(p.parse("1 yūhannāko 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 यूहन्नाको 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. yūhannāko 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहन्नाको 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nep)", () => {
		expect(p.parse("2 yūhannāko 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 यूहन्नाको 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. yūhannāko 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहन्नाको 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nep)", () => {
		expect(p.parse("3 yūhannāko 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 यूहन्नाको 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. yūhannāko 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूहन्नाको 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nep)", () => {
		expect(p.parse("yūhannāko pahilo patra 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("यूहन्नाको पहिलो पत्र 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nep)", () => {
		expect(p.parse("यूहन्नाको दोस्त्रो पत्र 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("yūhannāko dostro patra 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("यूहन्नाको दोस्रो पत्र 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nep)", () => {
		expect(p.parse("यूहन्नाको तेस्त्रो पत्र 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("yūhannāko testro patra 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("यूहन्नाको तेस्रो पत्र 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nep)", () => {
		expect(p.parse("1 यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहन्ना 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nep)", () => {
		expect(p.parse("2 यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहन्ना 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nep)", () => {
		expect(p.parse("3 यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूहन्ना 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nep)", () => {
		expect(p.parse("यूहन्ना 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nep)", () => {
		expect(p.parse("yūhannāle lekʰeko susmācār 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूहन्नाले लेखेको सुसमाचार 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूहन्नाको सुसमाचार 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("yūhannāle 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूहन्नाले 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूहान्ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यहून्ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("युहन्ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूहना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nep)", () => {
		expect(p.parse("preritharūkā kām 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरितहरूका काम 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरित 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nep)", () => {
		expect(p.parse("रोमीहरूलाई पावलको पत्र 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("romīharūlāī patra 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमीहरूलाई पत्र 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("romīharūlāī 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमीहरूलाई 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमी 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nep)", () => {
		expect(p.parse("1 korintʰīharūlāī 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कोरिन्थीहरूलाई 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कोरिन्थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. korintʰīharūlāī 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कोरिन्थीहरूलाई 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कोरिन्थी 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nep)", () => {
		expect(p.parse("2 korintʰīharūlāī 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कोरिन्थीहरूलाई 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कोरिन्थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. korintʰīharūlāī 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कोरिन्थीहरूलाई 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कोरिन्थी 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nep)", () => {
		expect(p.parse("कोरिन्थीहरूलाई पावलको दोस्रो पत्र 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("korintʰīharūlāī dostro patra 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("कोरिन्थीहरूलाई दोस्त्रो पत्र 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कोरिन्थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nep)", () => {
		expect(p.parse("कोरिन्थीहरूलाई पावलको पहिलो पत्र 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("korintʰīharūlāī pahilo patra 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("कोरिन्थीहरूलाई पहिलो पत्र 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कोरिन्थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nep)", () => {
		expect(p.parse("गलातीहरूलाई पावलको पत्र 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("galātīharūlāī patra 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गलातीहरूलाई पत्र 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("galātīharūlāī 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गलातीहरूलाई 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गलाती 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nep)", () => {
		expect(p.parse("एफिसीहरूलाई पावलको पत्र 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("epʰisīharūlāī patra 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("एफिसीहरूलाई पत्र 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("epʰisīharūlāī 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("एफिसीहरूलाई 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("एफिसी 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nep)", () => {
		expect(p.parse("फिलिप्पीहरूलाई पावलको पत्र 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("pʰilippīharūlāī patra 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलिप्पीहरूलाई पत्र 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("pʰilippīharūlāī 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलिप्पीहरूलाई 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलिप्पी 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nep)", () => {
		expect(p.parse("कलस्सीहरूलाई पावलको पत्र 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("kalassīharūlāī patra 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कलस्सीहरूलाई पत्र 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("kalassīharūlāī 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कलस्सीहरूलाई 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कलस्सी 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nep)", () => {
		expect(p.parse("1 tʰissalonikīharūlāī 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिस्सलोनिकीहरूलाई 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिस्सलोनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. tʰissalonikīharūlāī 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्सलोनिकीहरूलाई 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्सलोनिकी 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nep)", () => {
		expect(p.parse("2 tʰissalonikīharūlāī 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिस्सलोनिकीहरूलाई 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिस्सलोनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. tʰissalonikīharūlāī 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्सलोनिकीहरूलाई 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्सलोनिकी 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nep)", () => {
		expect(p.parse("थिस्सलोनिकीहरूलाई पावलको दोस्रो पत्र 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("tʰissalonikīharūlāī dostro patra 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("थिस्सलोनिकीहरूलाई दोस्त्रो पत्र 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिस्सलोनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nep)", () => {
		expect(p.parse("थिस्सलोनिकीहरूलाई पावलको पहिलो पत्र 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("tʰissalonikīharūlāī pahilo patra 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("थिस्सलोनिकीहरूलाई पहिलो पत्र 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिस्सलोनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nep)", () => {
		expect(p.parse("1 timotʰīlāī 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तिमोथीलाई 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तिमोथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. timotʰīlāī 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमोथीलाई 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमोथी 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nep)", () => {
		expect(p.parse("2 timotʰīlāī 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तिमोथीलाई 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तिमोथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. timotʰīlāī 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमोथीलाई 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमोथी 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nep)", () => {
		expect(p.parse("तिमोथीलाई पावलको दोस्रो पत्र 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("timotʰīlāī dostro patra 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("तिमोथीलाई दोस्त्रो पत्र 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तिमोथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nep)", () => {
		expect(p.parse("तिमोथीलाईर् पावलको पहिलो पत्र 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("timotʰīlāī pahilo patra 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("तिमोथीलाई पहिलो पत्र 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तिमोथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nep)", () => {
		expect(p.parse("तीतसलाई पावलको पत्र 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("tītaslāī patra 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीतसलाई पत्र 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("tītaslāī 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीतसलाई 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीतस 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nep)", () => {
		expect(p.parse("फिलेमोनलाई पावलको पत्र 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("pʰilemonlāī patra 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिलेमोनलाई पत्र 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("pʰilemonlāī 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिलेमोनलाई 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nep)", () => {
		expect(p.parse("hibrūharūko nimti patra 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("हिब्रूहरूको निम्ति पत्र 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("हिब्रूहरूको निम्ति 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("hibrūharūko nimti 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("हिब्रू 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nep)", () => {
		expect(p.parse("yākūbko patra 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकूबको पत्र 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("yākūbko 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकूबको 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nep)", () => {
		expect(p.parse("1 patrusko 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पत्रुसको 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. patrusko 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत्रुसको 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nep)", () => {
		expect(p.parse("2 patrusko 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पत्रुसको 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. patrusko 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत्रुसको 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nep)", () => {
		expect(p.parse("पत्रुसको दोस्त्रो पत्र 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("patrusko dostro patra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("पत्रुसको दोस्रो पत्र 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nep)", () => {
		expect(p.parse("patrusko pahilo patra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("पत्रुसको पहिलो पत्र 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nep)", () => {
		expect(p.parse("yahūdāko patra 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहूदाको पत्र 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("yahūdāko 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहूदाको 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (nep)", () => {
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (nep)", () => {
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (nep)", () => {
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (nep)", () => {
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 2Macc (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (nep)", () => {
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (nep)", () => {
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (nep)", () => {
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (nep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (nep)", () => {
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});

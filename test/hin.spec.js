"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hin.js";

describe("Localized book Gen (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (hin)", () => {
		expect(p.parse("उत्पत्ति 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Utpaati 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("उत्पाति 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (hin)", () => {
		expect(p.parse("Nirgaman 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("निर्गमन 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (hin)", () => {
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (hin)", () => {
		expect(p.parse("Laaivyavyavastha 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("लैव्य्व्य्वस्था 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("लैव्यव्यवस्था 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("लैव्यव्यवस्थ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("लैव्यवस्था 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("लैव्य 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (hin)", () => {
		expect(p.parse("Ginatee 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("गिनती 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (hin)", () => {
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (hin)", () => {
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (hin)", () => {
		expect(p.parse("Vilapageet 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("विलापगीत 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("विलापगेत 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("विलाप 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (hin)", () => {
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Acts (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (hin)", () => {
		expect(p.parse("प्रेरितों के कामों 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Praeriton Ke Kam 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरितों के काम 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("मसीह-दूत 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरित 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्र. क 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरि 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्र क 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्र.क 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रक 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rev (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (hin)", () => {
		expect(p.parse("Prakashaitavakya 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रकाशित-वाक्‍य 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रकाशित वाक्य 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रकाशितवाक्य 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रकाशन 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्र. व 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्र व 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रका 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (hin)", () => {
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (hin)", () => {
		expect(p.parse("Vyavasthaavivaran 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("व्यवस्था विवरण 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("व्य्वस्थाविवरन 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("व्यवस्थाविवरण 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("व्यवस्था 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (hin)", () => {
		expect(p.parse("Yahoshoo 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("यहोशु 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("यहोशू 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (hin)", () => {
		expect(p.parse("न्यायिय का विर्तान्त 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("न्यायियों 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Nyayiyon 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (hin)", () => {
		expect(p.parse("Root 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("रुत 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("रूत 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (hin)", () => {
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (hin)", () => {
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (hin)", () => {
		expect(p.parse("yashaayaah 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("यशायाह 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("यशाया 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("यशा 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hin)", () => {
		expect(p.parse("1 Shamooael 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 शमूएल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 शमू 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Shamooael 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. शमूएल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. शमू 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hin)", () => {
		expect(p.parse("2 Shamooael 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 शमूएल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 शमू 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Shamooael 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. शमूएल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. शमू 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hin)", () => {
		expect(p.parse("शमुऐयल की २री पुस्तक 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 शमूएल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 शमू 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hin)", () => {
		expect(p.parse("शमुऐल की १ली पुस्तक 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 शमूएल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 शमू 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hin)", () => {
		expect(p.parse("1 राजाओं 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Raja 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 राजा 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. राजाओं 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Raja 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. राजा 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hin)", () => {
		expect(p.parse("2 राजाओं 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Raja 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 राजा 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. राजाओं 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Raja 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. राजा 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hin)", () => {
		expect(p.parse("राजाओ का विर्तान्त २रा भाग 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 राजा 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hin)", () => {
		expect(p.parse("राजाओ का विर्तान्त १ला भाग् 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 राजा 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hin)", () => {
		expect(p.parse("1 Itihas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 इति 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Itihas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. इति 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hin)", () => {
		expect(p.parse("2 Itihas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 इतिहास 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 इति 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Itihas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. इतिहास 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. इति 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hin)", () => {
		expect(p.parse("इतिहास २रा भाग 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 इतिहास 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 इति 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hin)", () => {
		expect(p.parse("इतिहास १ला भाग 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 इति 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (hin)", () => {
		expect(p.parse("Aejra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("एज्रा 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (hin)", () => {
		expect(p.parse("न्हेम्याह 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nahemyah 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("नहेमायाह 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("नहेम्याह 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("नहेमा 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (hin)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (hin)", () => {
		expect(p.parse("Aester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("एस्तेर 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ऐस्तेर 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (hin)", () => {
		expect(p.parse("Ayyoob 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("अय्यूब 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("अययुब 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (hin)", () => {
		expect(p.parse("भजन-सहिन्ता 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("भजन संहिता 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Bhjan 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("भजन 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (hin)", () => {
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (hin)", () => {
		expect(p.parse("Neetivachan 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("नीति वचन 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("नीतिबचन 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("नीतिवचन 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("नीति 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (hin)", () => {
		expect(p.parse("Sabhopadeshak 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("सभोपदेशक 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("सभो 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (hin)", () => {
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (hin)", () => {
		expect(p.parse("Reshthageet 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("स्रेस्ट गीत 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("श्रेष्ठगीत 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("श्रेष्ठ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (hin)", () => {
		expect(p.parse("Yirmayah 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("यिर्मयाह 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("यिर्म 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (hin)", () => {
		expect(p.parse("Yahejakel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("यहेजकेल 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("यहेज 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (hin)", () => {
		expect(p.parse("Daaniyyel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("दानिय्येल 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("दानिय्यल 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("दानि 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (hin)", () => {
		expect(p.parse("Hosho 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("होशे 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (hin)", () => {
		expect(p.parse("Yoael 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("योएल 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (hin)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("आमोस 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (hin)", () => {
		expect(p.parse("Obadhah 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ओबद्दाह 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ओबद्याह 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ओबेधाह 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ओबधाह 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ओब 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (hin)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("योना 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (hin)", () => {
		expect(p.parse("Meeka 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("मीका 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (hin)", () => {
		expect(p.parse("Nahoom 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("नहूम 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (hin)", () => {
		expect(p.parse("Habakkook 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("हबक्कूक 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("हबक 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (hin)", () => {
		expect(p.parse("Sapanyah 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("सपन्याह 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("सपन 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (hin)", () => {
		expect(p.parse("Haggaai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("हाग्गे 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("हाग्गै 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (hin)", () => {
		expect(p.parse("Jakaryah 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("जकयार्ह 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("जकर्याह 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (hin)", () => {
		expect(p.parse("Malakee 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("मलाकी 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (hin)", () => {
		expect(p.parse("मत्तियाह 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattee 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मत्ति 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (hin)", () => {
		expect(p.parse("Marakus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मारक 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (hin)", () => {
		expect(p.parse("Looka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूकॉ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hin)", () => {
		expect(p.parse("1 Yoohanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoohanna 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hin)", () => {
		expect(p.parse("2 Yoohanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoohanna 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hin)", () => {
		expect(p.parse("3 Yoohanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoohanna 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hin)", () => {
		expect(p.parse("1 यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hin)", () => {
		expect(p.parse("2 यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hin)", () => {
		expect(p.parse("3 यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hin)", () => {
		expect(p.parse("1 युहत्रा 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 योहन 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. युहत्रा 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. योहन 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hin)", () => {
		expect(p.parse("2 युहत्रा 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 योहन 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. युहत्रा 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. योहन 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hin)", () => {
		expect(p.parse("3 युहत्रा 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 योहन 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. युहत्रा 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. योहन 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hin)", () => {
		expect(p.parse("युहत्रा 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूहन्ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("योहन 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hin)", () => {
		expect(p.parse("Yuhanna 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Rom (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (hin)", () => {
		expect(p.parse("Romiyon 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमियों 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमियो 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमी 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोम 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hin)", () => {
		expect(p.parse("1 Kurinthiayon 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरिन्यि़यों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरिन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरिन्थियो 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कोरिन्थॉस 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कोरिन्‍थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरिन्थ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kurinthiayon 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिन्यि़यों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिन्थियो 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कोरिन्थॉस 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कोरिन्‍थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिन्थ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hin)", () => {
		expect(p.parse("2 Kurinthiayon 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरिन्यि़यों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरिन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरिन्थियो 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कोरिन्थॉस 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कोरिन्‍थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरिन्थ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kurinthiayon 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिन्यि़यों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिन्थियो 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कोरिन्थॉस 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कोरिन्‍थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिन्थ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hin)", () => {
		expect(p.parse("2 कोरि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कोरि 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hin)", () => {
		expect(p.parse("2 कुरिन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरिन्थ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hin)", () => {
		expect(p.parse("1 कुरिन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरिन्थ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (hin)", () => {
		expect(p.parse("Galatiyon 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गलातियों 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गलतियों 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गलातिया 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गलाति 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गलाती 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (hin)", () => {
		expect(p.parse("Iafisiyon 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफिसियों 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफ़ेसॉस 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफिसि 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफिसी 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (hin)", () => {
		expect(p.parse("Filippaiyon 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलिप्पियों 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फ़िलिप्पॉय 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलिप्‍पी 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलिप्पि 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (hin)", () => {
		expect(p.parse("Kulussaiyon 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कुलुस्सियों 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कुलुस्‍सी 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कोलोस्सॉय 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कुलुस्सि 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कोलो 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hin)", () => {
		expect(p.parse("1 Thaissaluneekiyon 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिस्सलुनीकियों 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिसलुनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिस्स 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thaissaluneekiyon 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्सलुनीकियों 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिसलुनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्स 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hin)", () => {
		expect(p.parse("2 Thaissaluneekiyon 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिस्सलुनीकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिसलुनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिस्स 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thaissaluneekiyon 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्सलुनीकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिसलुनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्स 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hin)", () => {
		expect(p.parse("2 थेस्सलोनिकेयुस 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थेस्सलोनिकेयुस 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hin)", () => {
		expect(p.parse("2 थिस्सलुनीकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिस्स 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hin)", () => {
		expect(p.parse("1 थेस्सलोनि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थेस्स 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थेस्सलोनि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थेस्स 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hin)", () => {
		expect(p.parse("1 थिस्सलुनीकियों 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिस्स 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hin)", () => {
		expect(p.parse("1 Teemuathaiyus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तीमुाथैयुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तिमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तिमोथियॉस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तीम 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Teemuathaiyus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमुाथैयुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमोथियॉस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीम 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hin)", () => {
		expect(p.parse("2 Teemuathaiyus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तीमुाथैयुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तिमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तिमोथियॉस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तीम 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Teemuathaiyus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमुाथैयुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमोथियॉस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीम 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hin)", () => {
		expect(p.parse("2 तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तीम 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hin)", () => {
		expect(p.parse("1 तिमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमो 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hin)", () => {
		expect(p.parse("1 तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तीम 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (hin)", () => {
		expect(p.parse("Teetus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीतुस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीतॉस 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (hin)", () => {
		expect(p.parse("फ़िलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (hin)", () => {
		expect(p.parse("Ibraaaniyon 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्रानियों 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्रानि 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्रानी 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्री 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (hin)", () => {
		expect(p.parse("Yakoob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याक़ोब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hin)", () => {
		expect(p.parse("1 Pataras 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पेतरॉस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पतर 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pataras 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पेतरॉस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पतर 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hin)", () => {
		expect(p.parse("2 Pataras 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पेतरॉस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पतर 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pataras 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पेतरॉस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पतर 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hin)", () => {
		expect(p.parse("2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पतर 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hin)", () => {
		expect(p.parse("1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पतर 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (hin)", () => {
		expect(p.parse("Yahooda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहूदाह 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (hin)", () => {
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (hin)", () => {
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (hin)", () => {
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (hin)", () => {
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 2Macc (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (hin)", () => {
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (hin)", () => {
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (hin)", () => {
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (hin)", () => {
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Parser helper should handle ranges (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (hin)", () => {
		expect(p.parse("Titus 1:1 to 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1to2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 to 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (hin)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 chapter 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (hin)", () => {
		expect(p.parse("Exod 1:1 verse 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm verse 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (hin)", () => {
		expect(p.parse("Exod 1:1 and 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 and 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (hin)", () => {
		expect(p.parse("Ps 3 title, 4:2, 5:title").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'ff' (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'ff' (hin)", () => {
		expect(p.parse("Rev 3ff, 4:2ff").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
	});
});
describe("Parser helper should handle translations (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (hin)", () => {
		expect(p.parse("Lev 1 (ERV)").osis_and_translations()).toEqual([["Lev.1","ERV"]]);
	});
});
describe("Parser helper should handle book ranges (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (hin)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yoohanna to 3 Yoohanna").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (hin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (hin)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});

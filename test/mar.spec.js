"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mar.js";

describe("Localized book Gen (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mar)", () => {
		expect(p.parse("उत्पत्ति 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("utpatti 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("उत्पति 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (mar)", () => {
		expect(p.parse("nirgam 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("निर्गम 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (mar)", () => {
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (mar)", () => {
		expect(p.parse("lewīy 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("लेवीय 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (mar)", () => {
		expect(p.parse("gaṇanā 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("गणना 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (mar)", () => {
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (mar)", () => {
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (mar)", () => {
		expect(p.parse("wilāpgīt 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("विलापगीत 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (mar)", () => {
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mar)", () => {
		expect(p.parse("yohānālā ǳʰālele prakaṭīkaraṇ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("योहानाला झालेले प्रकटीकरण 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("prakaṭīkaraṇ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रकटीकरण 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (mar)", () => {
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (mar)", () => {
		expect(p.parse("anuwād 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("अनुवाद 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (mar)", () => {
		expect(p.parse("yahoŝawā 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("यहोशवा 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (mar)", () => {
		expect(p.parse("शास्ते 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ŝāste 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (mar)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("rūtʰ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("रूथ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (mar)", () => {
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (mar)", () => {
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (mar)", () => {
		expect(p.parse("yaŝayā 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("यशया 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("यशाय 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 2Sam (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mar)", () => {
		expect(p.parse("दुसरे शमुवेल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ŝamuwel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 शमुवेल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mar)", () => {
		expect(p.parse("पहिले शमुवेल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ŝamuwel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 शमुवेल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Kgs (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mar)", () => {
		expect(p.parse("दुसरे राजे 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 rāǳe 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 राजे 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mar)", () => {
		expect(p.parse("पहिले राजे 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 rāǳe 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 राजे 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Chr (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mar)", () => {
		expect(p.parse("दुसरे इतिहास 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 itihās 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 इतिहास 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mar)", () => {
		expect(p.parse("पहिले इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 itihās 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (mar)", () => {
		expect(p.parse("edzrā 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("एज्रा 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("eǳrā 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (mar)", () => {
		expect(p.parse("nahemyā 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("नहेम्या 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (mar)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (mar)", () => {
		expect(p.parse("एस्तेर 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (mar)", () => {
		expect(p.parse("īyob 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("इयोब 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ईयोब 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (mar)", () => {
		expect(p.parse("स्त्रोत्रसंहिता 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("stotrasaṃhitā 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("स्तोत्रसंहिता 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("स्तोत्र 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (mar)", () => {
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (mar)", () => {
		expect(p.parse("नीतिसूत्रें 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("नीतिसूत्रे 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("nītisūtre 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (mar)", () => {
		expect(p.parse("upadeŝak 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("उपदेशक 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (mar)", () => {
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (mar)", () => {
		expect(p.parse("gītratna 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("गीतरत्न 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (mar)", () => {
		expect(p.parse("yirmayā 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("यिर्मया 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (mar)", () => {
		expect(p.parse("yahedzkel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("yaheǳkel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("यहेज्केल 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (mar)", () => {
		expect(p.parse("दानीएल्र 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("dānīel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("दानीएल 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (mar)", () => {
		expect(p.parse("hoŝey 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("होशेय 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (mar)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("yoel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("योएल 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (mar)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("āmos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("अमोस 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("आमोस 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (mar)", () => {
		expect(p.parse("obadʰā 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ओबद्या 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ओबधा 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (mar)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("yonā 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("योना 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (mar)", () => {
		expect(p.parse("mīkʰā 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("मीखा 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (mar)", () => {
		expect(p.parse("nahūm 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("नहूम 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (mar)", () => {
		expect(p.parse("habakkūk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("हबक्कूक 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("हबक्कू 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (mar)", () => {
		expect(p.parse("sapʰanyā 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("सफन्या 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (mar)", () => {
		expect(p.parse("hāggay 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("हाग्गय 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (mar)", () => {
		expect(p.parse("jakʰaryā 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("जखर्या 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("जखऱ्या 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (mar)", () => {
		expect(p.parse("malākʰī 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("मलाखी 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mar)", () => {
		expect(p.parse("mattayāne lihilele ŝubʰavartamān 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मत्तयाने लिहिलेले शुभवर्तमान 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("mattayāne 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मत्तयाने 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मत्तय 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mar)", () => {
		expect(p.parse("mārkāne lihilele ŝubʰavartamān 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मार्काने लिहिलेले शुभवर्तमान 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मार्काने 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("mārkāne 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मार्क 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mar)", () => {
		expect(p.parse("lūkāne lihilele ŝubʰavartamān 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूकाने लिहिलेले शुभवर्तमान 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("lūkāne 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूकाने 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूक 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mar)", () => {
		expect(p.parse("yohānāceṃ pahile patra 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("योहानाचें पहिले पत्र 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 yohānāceṃ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 योहानाच 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 योहान 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mar)", () => {
		expect(p.parse("yohānāceṃ dusre patra 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("योहानाचें दुसरे पत्र 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 yohānāceṃ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 योहानाच 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 योहान 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mar)", () => {
		expect(p.parse("yohānāceṃ tisre patra 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("योहानाचें तिसरे पत्र 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 yohānāceṃ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 योहानाच 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 योहान 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mar)", () => {
		expect(p.parse("yohānāne lihilele ŝubʰavartamān 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("योहानाने लिहिलेले शुभवर्तमान 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("yohānāne 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("योहानाने 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("योहान 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mar)", () => {
		expect(p.parse("प्रेषितांचीं कृत्यें 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("prešitāṃcīṃ kr̥tyeṃ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेषितांची कृत्यें 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेषितांचीं कृत्ये 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mar)", () => {
		expect(p.parse("पौलाचे रोमकरांस पत्र 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("romkarāṃs patra 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमकरांस पत्र 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("romkarāṃs 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमकंरास 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमकरांस 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 2Cor (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mar)", () => {
		expect(p.parse("पौलाचे करिंथकरांस दूसरे पत्र 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("kariṃtʰkarāṃs dusre patra 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("करिंथकरांस दुसरे पत्र 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 kariṃtʰkarāṃs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 करिंथकरांस 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mar)", () => {
		expect(p.parse("पौलाचे करिंथकरांस पहिले पत्र 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("kariṃtʰkarāṃs pahile patra 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("करिंथकरांस पहिले पत्र 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 kariṃtʰkarāṃs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 करिंथकरांस 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mar)", () => {
		expect(p.parse("पौलाचे गलतीकरांस पत्र 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("galatīkarāṃs patra 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गलतीकरांस पत्र 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("galatīkarāṃs 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गलतीकरांस 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mar)", () => {
		expect(p.parse("पौलाचे इफिसकरांस पत्र 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ipʰiskarāṃs patra 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफिसकरांस पत्र 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ipʰiskarāṃs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफिसकरांस 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mar)", () => {
		expect(p.parse("पौलाचे फिलिप्पैकरांस पत्र 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("pʰilippaikarāṃs patra 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलिप्पैकरांस पत्र 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("pʰilippaikarāṃs 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलिप्पैकरांस 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mar)", () => {
		expect(p.parse("पौलाचे कलस्सैकरांस पत्र 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("kalassaikarāṃs patra 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कलस्सैकरांस पत्र 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("kalassaikarāṃs 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कलस्सैकरांस 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कलसैकरांस 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 2Thess (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mar)", () => {
		expect(p.parse("पौलाचे थेस्सलनीकाकरांस दुसरे पत्र 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("tʰessalanīkākarāṃs dusre patra 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("थेस्सलनीकाकरांस दुसरे पत्र 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 tʰessalanīkākarāṃs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थेस्सलनीकाकरांस 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mar)", () => {
		expect(p.parse("पौलाचे थेस्सलनीकाकरांस पहिले पत्र 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("tʰessalanīkākarāṃs pahile patra 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("थेस्सलनीकाकरांस पहिले पत्र 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 tʰessalanīkākarāṃs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थेस्सलनीकाकरांस 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Tim (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mar)", () => {
		expect(p.parse("पौलाचे तीमथ्थाला दुसरे पत्र 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("tīmatʰtʰālā dusre patra 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("तीमथ्थाला दुसरे पत्र 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 tīmatʰtʰālā 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तीमथ्थाला 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mar)", () => {
		expect(p.parse("पौलाचे तीमथ्याला पहिले पत्र 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("tīmatʰtʰālā pahile patra 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("तीमथ्थाला पहिले पत्र 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 tīmatʰtʰālā 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तीमथ्थाला 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तीमथ्याला 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mar)", () => {
		expect(p.parse("पौलाचे तीताला पत्र 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("tītālā patra 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीताला पत्र 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("tītālā 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीताला 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mar)", () => {
		expect(p.parse("पौलाचे फिलेमोनाला पत्र 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("pʰilemonālā patra 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिलेमोनाला पत्र 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("pʰilemonālā 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिलेमोनाला 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिलेमोना 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mar)", () => {
		expect(p.parse("ibrī lokāṃs patra 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्री लोकांस पत्र 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्री लोकांस 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ibrī lokāṃs 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्री 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mar)", () => {
		expect(p.parse("yākobāceṃ patra 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकोबाचें पत्र 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("yākobāceṃ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकोबाचें 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकोब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 2Pet (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mar)", () => {
		expect(p.parse("petrāceṃ dusre patra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("पेत्राचें दुसरे पत्र 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("पौलाचें दुसरे पत्र 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पेत्राचें 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 petrāceṃ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पेत्र 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mar)", () => {
		expect(p.parse("petrāceṃ pahile patra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("पेत्राचें पहिले पत्र 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("पेत्राचे पहिले पत्र 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पेत्राचें 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 petrāceṃ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पेत्र 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mar)", () => {
		expect(p.parse("yahūdāceṃ patra 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहूदाचें पत्र 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("yahūdāceṃ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहूदाचें 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (mar)", () => {
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (mar)", () => {
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (mar)", () => {
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (mar)", () => {
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 2Macc (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (mar)", () => {
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (mar)", () => {
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (mar)", () => {
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (mar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (mar)", () => {
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});

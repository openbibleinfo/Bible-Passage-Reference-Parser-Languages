"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/awa.js";

describe("Localized book Gen (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (awa)", () => {
		expect(p.parse("उत्पत्ति 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (awa)", () => {
		expect(p.parse("निर्गमन 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("निर्ग. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (awa)", () => {
		expect(p.parse("लैव्यव्यवस्था 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("लैव्य. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (awa)", () => {
		expect(p.parse("गनती 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (awa)", () => {
		expect(p.parse("विलापगीत 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("विलाप. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (awa)", () => {
		expect(p.parse("प्रकासित वाक्य 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्र. वा. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (awa)", () => {
		expect(p.parse("व्यवस्था विवरण 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("व्यवस्था 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (awa)", () => {
		expect(p.parse("यहोसू 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (awa)", () => {
		expect(p.parse("निआवाधीसन 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (awa)", () => {
		expect(p.parse("रूत 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (awa)", () => {
		expect(p.parse("यसायाह 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("यसा. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (awa)", () => {
		expect(p.parse("1 समूएल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 समू. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. समूएल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. समू. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("पहिला समूएल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("पहिला समू. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("पहिला. समूएल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("पहिला. समू. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (awa)", () => {
		expect(p.parse("2 समूएल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 समू. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. समूएल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. समू. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("दूसर समूएल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("दूसर समू. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("दूसर. समूएल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("दूसर. समू. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (awa)", () => {
		expect(p.parse("1 राजा 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. राजा 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("पहिला राजा 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("पहिला. राजा 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (awa)", () => {
		expect(p.parse("2 राजा 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. राजा 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("दूसर राजा 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("दूसर. राजा 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (awa)", () => {
		expect(p.parse("1 इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 इति. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. इति. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("पहिला इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("पहिला इति. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("पहिला. इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("पहिला. इति. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (awa)", () => {
		expect(p.parse("2 इतिहास 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 इति. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. इतिहास 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. इति. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("दूसर इतिहास 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("दूसर इति. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("दूसर. इतिहास 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("दूसर. इति. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (awa)", () => {
		expect(p.parse("एज्रा 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (awa)", () => {
		expect(p.parse("नहेमायाह 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("नहे. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (awa)", () => {
		expect(p.parse("एस्तेर 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (awa)", () => {
		expect(p.parse("अय्यूब 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (awa)", () => {
		expect(p.parse("भजन संहिता 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("भ. सं. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (awa)", () => {
		expect(p.parse("नीतिवचन 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("नीति. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (awa)", () => {
		expect(p.parse("सभोपदेसक 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("सभो. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (awa)", () => {
		expect(p.parse("स्रेस्ठगीत 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (awa)", () => {
		expect(p.parse("यिर्मयाह 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("यिर्म. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (awa)", () => {
		expect(p.parse("यहेजकेल 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (awa)", () => {
		expect(p.parse("दानिय्येल 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (awa)", () => {
		expect(p.parse("होसे 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (awa)", () => {
		expect(p.parse("योए. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("योएल 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (awa)", () => {
		expect(p.parse("आमोस 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (awa)", () => {
		expect(p.parse("ओबद्याह 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (awa)", () => {
		expect(p.parse("योना 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (awa)", () => {
		expect(p.parse("मीका 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (awa)", () => {
		expect(p.parse("नहूम 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (awa)", () => {
		expect(p.parse("हबक्कूक 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (awa)", () => {
		expect(p.parse("सपन्याह 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (awa)", () => {
		expect(p.parse("हाग्गै 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (awa)", () => {
		expect(p.parse("जकर्याह 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (awa)", () => {
		expect(p.parse("मलाकी 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (awa)", () => {
		expect(p.parse("मत्ती रचित सुसमाचार 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (awa)", () => {
		expect(p.parse("मरकुस रचित सुसमाचार 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (awa)", () => {
		expect(p.parse("लूका रचित सुसमाचार 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (awa)", () => {
		expect(p.parse("यूहन्ना क पहिली पत्र 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (awa)", () => {
		expect(p.parse("यूहन्ना क दूसरी पत्र 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (awa)", () => {
		expect(p.parse("यूहन्ना क तीसरी पत्र 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 यूहन्ना 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (awa)", () => {
		expect(p.parse("यूहन्ना रचित सुसमाचार 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूहन्ना 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (awa)", () => {
		expect(p.parse("1 यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("पहिला यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("पहिला. यूहन्ना 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (awa)", () => {
		expect(p.parse("2 यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("दूसर यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("दूसर. यूहन्ना 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (awa)", () => {
		expect(p.parse("प्रेरितन क काम 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरितन 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (awa)", () => {
		expect(p.parse("रोमियन क पत्र 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमि. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (awa)", () => {
		expect(p.parse("1 कुरिन्थि. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिन्थि. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("पहिला कुरिन्थि. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("पहिला. कुरिन्थि. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (awa)", () => {
		expect(p.parse("2 कुरिन्थि. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिन्थि. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("दूसर कुरिन्थि. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("दूसर. कुरिन्थि. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (awa)", () => {
		expect(p.parse("कुरिन्थियन क पहिली पत्र 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (awa)", () => {
		expect(p.parse("कुरिन्थियन क दूसरी पत्र 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (awa)", () => {
		expect(p.parse("कुलुस्सियन क पत्र 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कुलु. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (awa)", () => {
		expect(p.parse("गलातियन क पत्र 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गलाति. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (awa)", () => {
		expect(p.parse("इफिसियन क पत्र 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफि. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (awa)", () => {
		expect(p.parse("फिलिप्पियन क पत्र 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलिप्पि. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (awa)", () => {
		expect(p.parse("1 थिस्स. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्स. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("पहिला थिस्स. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("पहिला. थिस्स. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (awa)", () => {
		expect(p.parse("2 थिस्स. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्स. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("दूसर थिस्स. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("दूसर. थिस्स. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (awa)", () => {
		expect(p.parse("थिस्सलुनीकियन क पहिली पत्र 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (awa)", () => {
		expect(p.parse("थिस्सलुनीकियन क दूसरी पत्र 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (awa)", () => {
		expect(p.parse("1 तीमु. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमु. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("पहिला तीमु. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("पहिला. तीमु. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (awa)", () => {
		expect(p.parse("2 तीमु. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमु. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("दूसर तीमु. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("दूसर. तीमु. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (awa)", () => {
		expect(p.parse("तीमुथियुस क पहिली पत्र 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (awa)", () => {
		expect(p.parse("तीमुथियुस क दूसरी पत्र 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (awa)", () => {
		expect(p.parse("तीतुस क पत्र 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीतुस 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (awa)", () => {
		expect(p.parse("फिलेमोन क पत्र 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (awa)", () => {
		expect(p.parse("इब्रनियन क पत्र 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्रनि. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (awa)", () => {
		expect(p.parse("याकूब क पत्र 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (awa)", () => {
		expect(p.parse("पतरस क पहिली पत्र 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (awa)", () => {
		expect(p.parse("पतरस क दूसरी पत्र 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (awa)", () => {
		expect(p.parse("1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("पहिला पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("पहिला. पतरस 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (awa)", () => {
		expect(p.parse("2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("दूसर पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("दूसर. पतरस 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (awa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (awa)", () => {
		expect(p.parse("यहूदा क पत्र 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
	});
});

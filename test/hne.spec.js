"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hne.js";

describe("Localized book Gen (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (hne)", () => {
		expect(p.parse("उतपत्ती 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("उत 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (hne)", () => {
		expect(p.parse("निरगमन 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("निर 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (hne)", () => {
		expect(p.parse("लैव्य-ब्यवस्था 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("लैव्य 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (hne)", () => {
		expect(p.parse("गनती 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("गन 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (hne)", () => {
		expect(p.parse("बिलापगीत 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("बिला 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (hne)", () => {
		expect(p.parse("दरसन 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("दर 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (hne)", () => {
		expect(p.parse("ब्यवस्था 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ब्यव 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (hne)", () => {
		expect(p.parse("यहोसू 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("यहो 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (hne)", () => {
		expect(p.parse("नियायीमन 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("निया 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (hne)", () => {
		expect(p.parse("रूत 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (hne)", () => {
		expect(p.parse("यसायाह 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("यसा 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hne)", () => {
		expect(p.parse("1 समूएल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 समू 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. समूएल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. समू 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hne)", () => {
		expect(p.parse("2 समूएल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 समू 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. समूएल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. समू 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hne)", () => {
		expect(p.parse("1 राजा 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. राजा 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hne)", () => {
		expect(p.parse("2 राजा 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. राजा 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hne)", () => {
		expect(p.parse("1 इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 इति 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. इति 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hne)", () => {
		expect(p.parse("2 इतिहास 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 इति 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. इतिहास 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. इति 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (hne)", () => {
		expect(p.parse("एजरा 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("एज 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (hne)", () => {
		expect(p.parse("नहेमियाह 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("नहे 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (hne)", () => {
		expect(p.parse("एस्तर 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("एस्त 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (hne)", () => {
		expect(p.parse("अयूब 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("अयू 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (hne)", () => {
		expect(p.parse("भजन-संहिता 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("भजन 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (hne)", () => {
		expect(p.parse("नीतिबचन 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("नीति 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (hne)", () => {
		expect(p.parse("सभोपदेसक 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("सभो 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (hne)", () => {
		expect(p.parse("उत्तम गीत 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("उत्तम 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (hne)", () => {
		expect(p.parse("यरमियाह 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("यर 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (hne)", () => {
		expect(p.parse("यहेजकेल 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("यहे 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (hne)", () => {
		expect(p.parse("दानिएल 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("दानि 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (hne)", () => {
		expect(p.parse("होसे 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (hne)", () => {
		expect(p.parse("योएल 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("योए 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (hne)", () => {
		expect(p.parse("आमोस 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("आमो 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (hne)", () => {
		expect(p.parse("ओबदयाह 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ओब 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (hne)", () => {
		expect(p.parse("योना 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (hne)", () => {
		expect(p.parse("मीका 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (hne)", () => {
		expect(p.parse("नहूम 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("नहू 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (hne)", () => {
		expect(p.parse("हबक्कूक 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("हब 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (hne)", () => {
		expect(p.parse("सपनयाह 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("सप 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (hne)", () => {
		expect(p.parse("हाग्गै 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (hne)", () => {
		expect(p.parse("जकरयाह 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("जकर 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (hne)", () => {
		expect(p.parse("मलाकी 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("मला 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (hne)", () => {
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (hne)", () => {
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (hne)", () => {
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hne)", () => {
		expect(p.parse("1यूहन्ना 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hne)", () => {
		expect(p.parse("2यूहन्ना 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hne)", () => {
		expect(p.parse("3 यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 यूह 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hne)", () => {
		expect(p.parse("1 यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 यूह 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूह 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hne)", () => {
		expect(p.parse("2 यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 यूह 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूह 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hne)", () => {
		expect(p.parse("यूहन्ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूह 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (hne)", () => {
		expect(p.parse("प्रेरितमन के काम 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरितमन 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरि 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (hne)", () => {
		expect(p.parse("रोमीमन 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमी 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hne)", () => {
		expect(p.parse("1 कुरिन्‍थुस 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरिन्थुस 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरिन्थ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिन्‍थुस 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिन्थुस 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिन्थ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरि 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hne)", () => {
		expect(p.parse("2 कुरिन्‍थुस 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरिन्थुस 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरिन्थ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिन्‍थुस 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिन्थुस 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिन्थ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरि 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (hne)", () => {
		expect(p.parse("कुलुस्सी 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कुलु 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (hne)", () => {
		expect(p.parse("गलातिया 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गलाति 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गला 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (hne)", () => {
		expect(p.parse("इफिसुस 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफि 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (hne)", () => {
		expect(p.parse("फिलिप्‍पी 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलिप्पी 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hne)", () => {
		expect(p.parse("1 थिस्‍सलुनीके 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिस्सलुनीके 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिस्स 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्‍सलुनीके 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्सलुनीके 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्स 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hne)", () => {
		expect(p.parse("2 थिस्‍सलुनीके 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिस्सलुनीके 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिस्स 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्‍सलुनीके 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्सलुनीके 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्स 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hne)", () => {
		expect(p.parse("1थिस्‍सलुनीके 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hne)", () => {
		expect(p.parse("2थिस्‍सलुनीके 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hne)", () => {
		expect(p.parse("1 तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तीमु 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमु 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hne)", () => {
		expect(p.parse("2 तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तीमु 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमु 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hne)", () => {
		expect(p.parse("1तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hne)", () => {
		expect(p.parse("2तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (hne)", () => {
		expect(p.parse("तीतुस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीतु 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (hne)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (hne)", () => {
		expect(p.parse("इबरानीमन 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इबरीमन 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (hne)", () => {
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकू 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hne)", () => {
		expect(p.parse("1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पत 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hne)", () => {
		expect(p.parse("2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पत 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hne)", () => {
		expect(p.parse("1पतरस 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hne)", () => {
		expect(p.parse("2पतरस 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (hne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (hne)", () => {
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहू 1:1").osis()).toEqual("Jude.1.1");
	});
});

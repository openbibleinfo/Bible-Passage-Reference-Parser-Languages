"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hyw.js";

describe("Localized book Gen (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (hyw)", () => {
		expect(p.parse("Ծննդոց 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ծննդ. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (hyw)", () => {
		expect(p.parse("Ելից 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (hyw)", () => {
		expect(p.parse("Ղեւտացւոց 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ղեւտ. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (hyw)", () => {
		expect(p.parse("Թուոց 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (hyw)", () => {
		expect(p.parse("Ողբք Երեմեայ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (hyw)", () => {
		expect(p.parse("Յայտնութիւն Յովհաննու 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Յայտ. Յովհ. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Յայտ․ Յովհ․ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Յայտնութիւն 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Յյտ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (hyw)", () => {
		expect(p.parse("Բ. Օրինաց 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Բ. Օր. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (hyw)", () => {
		expect(p.parse("Յեսուայ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Յես. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (hyw)", () => {
		expect(p.parse("Դատաւորաց 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Դատ. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (hyw)", () => {
		expect(p.parse("Հռութ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (hyw)", () => {
		expect(p.parse("Եսայեայ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Եսայ. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Kgs (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hyw)", () => {
		expect(p.parse("Գ. Թագաւորաց 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Գ. Թագ. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hyw)", () => {
		expect(p.parse("Դ. Թագաւորաց 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Դ. Թագ. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hyw)", () => {
		expect(p.parse("Ա. Թագաւորաց 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ա. Թագ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Առաջին Թագաւորաց 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Առաջին Թագ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Առաջին. Թագաւորաց 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Առաջին. Թագ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ա․ Թագաւորաց 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ա․ Թագ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ա․. Թագաւորաց 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ա․. Թագ. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hyw)", () => {
		expect(p.parse("Բ. Թագաւորաց 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Բ. Թագ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Բ․ Թագաւորաց 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Բ․ Թագ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Բ․. Թագաւորաց 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Բ․. Թագ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Երկրորդ Թագաւորաց 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Երկրորդ Թագ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Երկրորդ. Թագաւորաց 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Երկրորդ. Թագ. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Chr (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hyw)", () => {
		expect(p.parse("Ա. Մնացորդաց 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ա. Մնաց. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Առաջին Մնացորդաց 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Առաջին Մնաց. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Առաջին. Մնացորդաց 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Առաջին. Մնաց. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ա․ Մնացորդաց 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ա․ Մնաց. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ա․. Մնացորդաց 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ա․. Մնաց. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hyw)", () => {
		expect(p.parse("Բ. Մնացորդաց 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Բ. Մնաց. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Բ․ Մնացորդաց 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Բ․ Մնաց. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Բ․. Մնացորդաց 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Բ․. Մնաց. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Երկրորդ Մնացորդաց 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Երկրորդ Մնաց. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Երկրորդ. Մնացորդաց 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Երկրորդ. Մնաց. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (hyw)", () => {
		expect(p.parse("Եզրաս 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (hyw)", () => {
		expect(p.parse("Նէեմեայ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Նէեմ. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (hyw)", () => {
		expect(p.parse("Եսթեր 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (hyw)", () => {
		expect(p.parse("Յոբայ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (hyw)", () => {
		expect(p.parse("Սաղմոս 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Սաղմ. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (hyw)", () => {
		expect(p.parse("Առակաց 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (hyw)", () => {
		expect(p.parse("Ժողովողի 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (hyw)", () => {
		expect(p.parse("Երգ Երգոց 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (hyw)", () => {
		expect(p.parse("Երեմեայ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Երեմ. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (hyw)", () => {
		expect(p.parse("Եզեկիէլի 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Եզեկ. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (hyw)", () => {
		expect(p.parse("Դանիէլ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (hyw)", () => {
		expect(p.parse("Ովսեայ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (hyw)", () => {
		expect(p.parse("Յովելեայ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (hyw)", () => {
		expect(p.parse("Ամովսայ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (hyw)", () => {
		expect(p.parse("Աբդիու 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (hyw)", () => {
		expect(p.parse("Յովնանու 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (hyw)", () => {
		expect(p.parse("Միքիայ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (hyw)", () => {
		expect(p.parse("Նաւումայ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (hyw)", () => {
		expect(p.parse("Ամբակումայ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (hyw)", () => {
		expect(p.parse("Սոփոնեայ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (hyw)", () => {
		expect(p.parse("Անգեայ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (hyw)", () => {
		expect(p.parse("Զաքարեայ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (hyw)", () => {
		expect(p.parse("Մաղաքեայ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (hyw)", () => {
		expect(p.parse("Ըստ Մատթէոսի 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Մատթէոս 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Մատթ. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Մտ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (hyw)", () => {
		expect(p.parse("Ըստ Մարկոսի 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Մարկոս 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Մարկ. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Մր 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (hyw)", () => {
		expect(p.parse("Ըստ Ղուկասի 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ղոիկաս 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ղուկ. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ղկ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hyw)", () => {
		expect(p.parse("Յովհաննէսի Առաջին 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ա.Յհ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hyw)", () => {
		expect(p.parse("Յովհաննէսի Երկրորդ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Բ.Յհ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hyw)", () => {
		expect(p.parse("Յովհաննէսի Երրորդ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Երրորդ Յովհաննու 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Գ. Յովհ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Գ․ Յովհ․ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Գ.Յհ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hyw)", () => {
		expect(p.parse("Ա. Յովհաննու 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ա. Յովհ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ա. Յովհ․ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Առաջին Յովհաննու 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Առաջին Յովհ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Առաջին Յովհ․ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Առաջին. Յովհաննու 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Առաջին. Յովհ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Առաջին. Յովհ․ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ա․ Յովհաննու 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ա․ Յովհ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ա․ Յովհ․ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ա․. Յովհաննու 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ա․. Յովհ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ա․. Յովհ․ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hyw)", () => {
		expect(p.parse("Բ. Յովհաննու 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Բ. Յովհ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Բ. Յովհ․ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Բ․ Յովհաննու 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Բ․ Յովհ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Բ․ Յովհ․ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Բ․. Յովհաննու 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Բ․. Յովհ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Բ․. Յովհ․ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Երկրորդ Յովհաննու 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Երկրորդ Յովհ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Երկրորդ Յովհ․ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Երկրորդ. Յովհաննու 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Երկրորդ. Յովհ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Երկրորդ. Յովհ․ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hyw)", () => {
		expect(p.parse("Ըստ Յովհաննէսի 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Յովհաննոի 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Յովհ. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Յհ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (hyw)", () => {
		expect(p.parse("Առաքեալներու Գործերը 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Գործք Առաքելոց 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Գործ. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Գրծ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (hyw)", () => {
		expect(p.parse("Հռոմայեցիներուն 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Հռովմայեցիս 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Հռովմ. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Հռովմ․ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Հռ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hyw)", () => {
		expect(p.parse("Ա. Նամակը Կորնթացիներուն 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ա. Կորնթացիս 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ա. Կորթ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Առաջին Նամակը Կորնթացիներուն 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Առաջին Կորնթացիս 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Առաջին Կորթ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Առաջին. Նամակը Կորնթացիներուն 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Առաջին. Կորնթացիս 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Առաջին. Կորթ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ա․ Նամակը Կորնթացիներուն 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ա․ Կորնթացիս 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ա․ Կորթ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ա․. Նամակը Կորնթացիներուն 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ա․. Կորնթացիս 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ա․. Կորթ. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hyw)", () => {
		expect(p.parse("Ա.Կր 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hyw)", () => {
		expect(p.parse("Բ. Նամակը Կորնթացիներուն 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Բ. Կորնթացիս 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Բ. Կորթ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Բ. Կորթ․ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Բ․ Նամակը Կորնթացիներուն 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Բ․ Կորնթացիս 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Բ․ Կորթ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Բ․ Կորթ․ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Բ․. Նամակը Կորնթացիներուն 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Բ․. Կորնթացիս 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Բ․. Կորթ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Բ․. Կորթ․ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Երկրորդ Նամակը Կորնթացիներուն 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Երկրորդ Կորնթացիս 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Երկրորդ Կորթ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Երկրորդ Կորթ․ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Երկրորդ. Նամակը Կորնթացիներուն 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Երկրորդ. Կորնթացիս 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Երկրորդ. Կորթ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Երկրորդ. Կորթ․ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hyw)", () => {
		expect(p.parse("Բ.Կր 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (hyw)", () => {
		expect(p.parse("Կողոսացիներուն 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Կողոսացիս 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Կող. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Կող․ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Կղ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (hyw)", () => {
		expect(p.parse("Գաղատացիներուն 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Գաղատացիս 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Գաղ. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Գաղ․ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Գղ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (hyw)", () => {
		expect(p.parse("Եփեսացիներուն 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Եփեսացիս 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Եփս. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Եփս․ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Եփ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (hyw)", () => {
		expect(p.parse("Փիլիպպեցիներուն 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Փիլիպպեցիս 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Փիլպ. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Փիլպ․ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Փլպ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hyw)", () => {
		expect(p.parse("Ա. Նամակը Թեսաղոնիկեցիներուն 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ա. Թեսաղոնիկեցիս 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ա. Թես. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ա. Թես․ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Առաջին Նամակը Թեսաղոնիկեցիներուն 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Առաջին Թեսաղոնիկեցիս 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Առաջին Թես. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Առաջին Թես․ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Առաջին. Նամակը Թեսաղոնիկեցիներուն 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Առաջին. Թեսաղոնիկեցիս 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Առաջին. Թես. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Առաջին. Թես․ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ա․ Նամակը Թեսաղոնիկեցիներուն 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ա․ Թեսաղոնիկեցիս 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ա․ Թես. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ա․ Թես․ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ա․. Նամակը Թեսաղոնիկեցիներուն 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ա․. Թեսաղոնիկեցիս 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ա․. Թես. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ա․. Թես․ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hyw)", () => {
		expect(p.parse("Ա.Թս 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hyw)", () => {
		expect(p.parse("Բ. Նամակը Թեսաղոնիկեցիներուն 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Բ. Թեսաղոնիկեցիս 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Բ. Թես 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Բ․ Նամակը Թեսաղոնիկեցիներուն 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Բ․ Թեսաղոնիկեցիս 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Բ․ Թես 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Բ․. Նամակը Թեսաղոնիկեցիներուն 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Բ․. Թեսաղոնիկեցիս 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Բ․. Թես 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Երկրորդ Նամակը Թեսաղոնիկեցիներուն 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Երկրորդ Թեսաղոնիկեցիս 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Երկրորդ Թես 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Երկրորդ. Նամակը Թեսաղոնիկեցիներուն 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Երկրորդ. Թեսաղոնիկեցիս 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Երկրորդ. Թես 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hyw)", () => {
		expect(p.parse("Բ.Թս 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hyw)", () => {
		expect(p.parse("Ա. Նամակը Տիմոթէոսին 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ա. Տիմոթէոս 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ա. Տիմ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ա. Տիմ․ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Առաջին Նամակը Տիմոթէոսին 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Առաջին Տիմոթէոս 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Առաջին Տիմ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Առաջին Տիմ․ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Առաջին. Նամակը Տիմոթէոսին 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Առաջին. Տիմոթէոս 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Առաջին. Տիմ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Առաջին. Տիմ․ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ա․ Նամակը Տիմոթէոսին 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ա․ Տիմոթէոս 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ա․ Տիմ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ա․ Տիմ․ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ա․. Նամակը Տիմոթէոսին 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ա․. Տիմոթէոս 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ա․. Տիմ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ա․. Տիմ․ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hyw)", () => {
		expect(p.parse("Բ. Նամակը Տիմոթէոսին 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Բ. Տիմոթէոս 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Բ. Տիմ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Բ. Տիմ․ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Բ․ Նամակը Տիմոթէոսին 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Բ․ Տիմոթէոս 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Բ․ Տիմ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Բ․ Տիմ․ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Բ․. Նամակը Տիմոթէոսին 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Բ․. Տիմոթէոս 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Բ․. Տիմ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Բ․. Տիմ․ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Երկրորդ Նամակը Տիմոթէոսին 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Երկրորդ Տիմոթէոս 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Երկրորդ Տիմ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Երկրորդ Տիմ․ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Երկրորդ. Նամակը Տիմոթէոսին 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Երկրորդ. Տիմոթէոս 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Երկրորդ. Տիմ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Երկրորդ. Տիմ․ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hyw)", () => {
		expect(p.parse("Ա.Տմ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hyw)", () => {
		expect(p.parse("Բ.Տմ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (hyw)", () => {
		expect(p.parse("Տիտոսին 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Տիտոս 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Տիտ. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Տիտ․ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Տիտ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (hyw)", () => {
		expect(p.parse("Փիլիմոնին 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Փիլիմոն 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Փիլ. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Փիլ․ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Փլմ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (hyw)", () => {
		expect(p.parse("Եբրայեցիներուն 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Եբրայեցիս 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Եբր. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Եբր․ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Եբր 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (hyw)", () => {
		expect(p.parse("Յակոբոս 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Յակոբու 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Յակ. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Յակ․ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Յկ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hyw)", () => {
		expect(p.parse("Պետրոսի Առաջին 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hyw)", () => {
		expect(p.parse("Պետրոսի Երկրորդ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Բ.Պտ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hyw)", () => {
		expect(p.parse("Ա. Պետրոսի 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ա. Պետ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ա. Պետ․ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ա. Պտ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Առաջին Պետրոսի 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Առաջին Պետ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Առաջին Պետ․ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Առաջին Պտ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Առաջին. Պետրոսի 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Առաջին. Պետ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Առաջին. Պետ․ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Առաջին. Պտ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ա․ Պետրոսի 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ա․ Պետ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ա․ Պետ․ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ա․ Պտ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ա․. Պետրոսի 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ա․. Պետ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ա․. Պետ․ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ա․. Պտ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hyw)", () => {
		expect(p.parse("Բ. Պետրոսի 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Բ. Պետ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Բ. Պետ․ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Բ․ Պետրոսի 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Բ․ Պետ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Բ․ Պետ․ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Բ․. Պետրոսի 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Բ․. Պետ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Բ․. Պետ․ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Երկրորդ Պետրոսի 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Երկրորդ Պետ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Երկրորդ Պետ․ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Երկրորդ. Պետրոսի 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Երկրորդ. Պետ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Երկրորդ. Պետ․ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (hyw)", () => {
		expect(p.parse("Յուդայի 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Յուդ. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Յուդ․ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Յուդա 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Յդ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (hyw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (hyw)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Յովհաննէսի Առաջին - Յովհաննէսի Երրորդ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Յովհաննէսի Առաջին – Յովհաննէսի Երրորդ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Յովհաննէսի Առաջին — Յովհաննէսի Երրորդ").osis()).toEqual("1John.1-3John.1");
	});
});

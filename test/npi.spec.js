"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/npi.js";

describe("Localized book Gen (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (npi)", () => {
		expect(p.parse("उत्पत्तिको पुस्तक 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("उत्‍पत्ति 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("उत्पत्ति 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("उत्प 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("उत 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (npi)", () => {
		expect(p.parse("प्रस्थानको पुस्तक 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("प्रस्‍थान 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("प्रस्थान 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("प्रस 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (npi)", () => {
		expect(p.parse("लेवीहरूको पुस्तक 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("लेवीहरू 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("लेवी 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (npi)", () => {
		expect(p.parse("गन्तीको पुस्तक 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("गन्‍ती 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("गन्ती 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (npi)", () => {
		expect(p.parse("यर्मियाको विलाप 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("विलाप 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("विला 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (npi)", () => {
		expect(p.parse("यूहन्नालाई भएको प्रकाश 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रकाश 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रका 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (npi)", () => {
		expect(p.parse("व्यवस्थाको पुस्तक 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("व्‍यवस्‍था 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("व्यवस्था 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("व्‍य 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("व्यव 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (npi)", () => {
		expect(p.parse("यहोशूको पुस्तक 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("यहोशू 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("यहो 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (npi)", () => {
		expect(p.parse("न्यायकर्ताहरूको पुस्तक 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("न्यायकर्ताहरू 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("न्यायकर्ता 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("न्‍याय 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("न्याय 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (npi)", () => {
		expect(p.parse("रूथको पुस्तक 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("रूथ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (npi)", () => {
		expect(p.parse("यशैयाको पुस्तक 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("यशैया 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("यशै 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (npi)", () => {
		expect(p.parse("1 शमूएल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 शमू 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. शमूएल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. शमू 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("१ शमूएल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("१ शमू 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("१. शमूएल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("१. शमू 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (npi)", () => {
		expect(p.parse("2 शमूएल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 शमू 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. शमूएल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. शमू 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("२ शमूएल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("२ शमू 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("२. शमूएल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("२. शमू 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (npi)", () => {
		expect(p.parse("शमूएलको पहिलो पुस्तक 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (npi)", () => {
		expect(p.parse("शमूएलको दोस्रो पुस्तक 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (npi)", () => {
		expect(p.parse("1 राजाहरू 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 राजा 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 राज 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. राजाहरू 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. राजा 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. राज 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("१ राजाहरू 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("१ राजा 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("१ राज 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("१. राजाहरू 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("१. राजा 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("१. राज 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (npi)", () => {
		expect(p.parse("2 राजाहरू 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 राजा 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 राज 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. राजाहरू 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. राजा 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. राज 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("२ राजाहरू 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("२ राजा 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("२ राज 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("२. राजाहरू 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("२. राजा 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("२. राज 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (npi)", () => {
		expect(p.parse("राजाहरूक पहिल पुस्तक 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1राजाहरू 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (npi)", () => {
		expect(p.parse("राजाहरूको दोस्रो पुस्तक 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (npi)", () => {
		expect(p.parse("1 इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 इति 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. इति 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("१ इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("१ इति 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("१. इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("१. इति 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (npi)", () => {
		expect(p.parse("2 इतिहास 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 इति 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. इतिहास 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. इति 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("२ इतिहास 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("२ इति 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("२. इतिहास 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("२. इति 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (npi)", () => {
		expect(p.parse("इतिहासको पहिलो पुस्तक 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (npi)", () => {
		expect(p.parse("इतिहासको दोस्रो पुस्तक 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (npi)", () => {
		expect(p.parse("एज्राको पुस्तक 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("एज्रा 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (npi)", () => {
		expect(p.parse("नहेम्याहको पुस्तक 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("नहेम्‍याह 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("नहेम्याह 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("नहे 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (npi)", () => {
		expect(p.parse("एस्तरको पुस्तक 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("एस्‍तर 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("एस्तर 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("एस 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (npi)", () => {
		expect(p.parse("अय्यूबको पुस्तक 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("अय्‍यूब 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("अय्यूब 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("इयोब 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("अयू 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (npi)", () => {
		expect(p.parse("भजनसंग्रह 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("भजन 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("भज 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (npi)", () => {
		expect(p.parse("हितोपदेशको पुस्तक 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("हितोपदेश 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("हितो 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (npi)", () => {
		expect(p.parse("उपदेशकको पुस्तक 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("उपदेशक 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("उप 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (npi)", () => {
		expect(p.parse("सुलेमानको श्रेष्ठगीत 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("श्रेष्‍ठगीत 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("श्रेष्ठगीत 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("श्रेष्‍ठ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (npi)", () => {
		expect(p.parse("यर्मियाको पुस्तक 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("यर्मिया 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("यर 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (npi)", () => {
		expect(p.parse("इजकिएलको पुस्तक 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("इजकिएल 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("इज 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (npi)", () => {
		expect(p.parse("दानियलको पुस्तक 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("दानिएल 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("दानियल 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("दानि 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("दान 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (npi)", () => {
		expect(p.parse("होशेको पुस्तक 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("होशे 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (npi)", () => {
		expect(p.parse("योएलको पुस्तक 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("योएल 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("योए 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (npi)", () => {
		expect(p.parse("आमोसको पुस्तक 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("आमोस 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("आमो 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (npi)", () => {
		expect(p.parse("ओबदियाको पुस्तक 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ओबदिया 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ओब 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (npi)", () => {
		expect(p.parse("योनाको पुस्तक 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("योना 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (npi)", () => {
		expect(p.parse("मीकाको पुस्तक 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("मीका 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (npi)", () => {
		expect(p.parse("नहूमको पुस्तक 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("नहूम 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("नहू 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (npi)", () => {
		expect(p.parse("हबकूकको पुस्तक 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("हबकूक 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("हब 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (npi)", () => {
		expect(p.parse("सपन्याहको पुस्तक 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("सपन्‍याह 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("सपन्याह 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("सप 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (npi)", () => {
		expect(p.parse("हाग्गैको पुस्तक 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("हाग्‍गै 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("हाग्गै 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("हाग 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (npi)", () => {
		expect(p.parse("जकरियाको पुस्तक 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("जकरिया 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("जक 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (npi)", () => {
		expect(p.parse("मलाकीको पुस्तक 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("मलाकी 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("मला 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (npi)", () => {
		expect(p.parse("मत्तीको सुसमाचार 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (npi)", () => {
		expect(p.parse("मर्कूसको सुसमाचार 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्कूस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्कू 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्क 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (npi)", () => {
		expect(p.parse("लूकाको सुसमाचार 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूक 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (npi)", () => {
		expect(p.parse("यूहन्नाको पहिलो पत्र 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (npi)", () => {
		expect(p.parse("यूहन्नाको दोस्रो पत्र 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (npi)", () => {
		expect(p.parse("यूहन्नाको तेस्रो पत्र 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 यूहन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३ यूहन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 यूह 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३ यूह 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (npi)", () => {
		expect(p.parse("1 यूहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 यूह 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूह 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ यूहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ यूह 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. यूहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. यूह 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (npi)", () => {
		expect(p.parse("2 यूहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 यूह 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूह 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ यूहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ यूह 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. यूहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. यूह 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (npi)", () => {
		expect(p.parse("यूहन्नाको सुसमाचार 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूहन्‍ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूहन्ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूह 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (npi)", () => {
		expect(p.parse("प्रेरितहरूका काम 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरित 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रे 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (npi)", () => {
		expect(p.parse("रोमीहरूलाई पावलको पत्र 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमी 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोम 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (npi)", () => {
		expect(p.parse("1 कोरिन्थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कोरि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कोर 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कोरिन्थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कोरि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कोर 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ कोरिन्थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ कोरि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ कोर 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरिन्थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोर 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (npi)", () => {
		expect(p.parse("2 कोरिन्थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कोरि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कोर 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कोरिन्थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कोरि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कोर 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ कोरिन्थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ कोरि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ कोर 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरिन्थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोर 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (npi)", () => {
		expect(p.parse("कोरिन्थीहरूलाई पावलको पहिलो पत्र 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (npi)", () => {
		expect(p.parse("कोरिन्थीहरूलाई पावलको दोस्रो पत्र 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (npi)", () => {
		expect(p.parse("कलस्सीहरूलाई पावलको पत्र 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कलस्सी 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कल 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (npi)", () => {
		expect(p.parse("गलातीहरूलाई पावलको पत्र 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गलाती 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गला 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (npi)", () => {
		expect(p.parse("एफिसीहरूलाई पावलको पत्र 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("एफिसी 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("एफि 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (npi)", () => {
		expect(p.parse("फिलिप्पीहरूलाई पावलको पत्र 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलिप्पी 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (npi)", () => {
		expect(p.parse("1 थिस्सलोनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थेसलोनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थेस 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्सलोनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थेसलोनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थेस 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थिस्सलोनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थेसलोनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थेस 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थिस्सलोनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेसलोनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेस 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (npi)", () => {
		expect(p.parse("2 थिस्सलोनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थेसलोनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थेस 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्सलोनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थेसलोनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थेस 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थिस्सलोनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थेसलोनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थेस 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थिस्सलोनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेसलोनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेस 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (npi)", () => {
		expect(p.parse("थिस्सलोनिकीहरूलाई पावलको पहिलो पत्र 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (npi)", () => {
		expect(p.parse("थिस्सलोनिकीहरूलाई पावलको दोस्रो पत्र 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (npi)", () => {
		expect(p.parse("1 तिमोथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तिमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमोथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ तिमोथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ तिमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमोथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमो 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (npi)", () => {
		expect(p.parse("2 तिमोथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तिमो 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमोथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमो 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ तिमोथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ तिमो 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमोथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमो 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (npi)", () => {
		expect(p.parse("तिमोथीलाईर् पावलको पहिलो पत्र 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (npi)", () => {
		expect(p.parse("तिमोथीलाई पावलको दोस्रो पत्र 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (npi)", () => {
		expect(p.parse("तीतसलाई पावलको पत्र 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीतस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीत 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (npi)", () => {
		expect(p.parse("फिलेमोनलाई पावलको पत्र 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (npi)", () => {
		expect(p.parse("हिब्रूहरूको निम्ति पत्र 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("हिब्रूहरू 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("हिब्रू 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("हिब 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (npi)", () => {
		expect(p.parse("याकूबको पत्र 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकोब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याको 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याक 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (npi)", () => {
		expect(p.parse("पत्रुसको पहिलो पत्र 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (npi)", () => {
		expect(p.parse("पत्रुसको दोस्रो पत्र 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (npi)", () => {
		expect(p.parse("यहूदाको पत्र 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहू 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book 1Pet (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (npi)", () => {
		expect(p.parse("1 पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पत्रु 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पत्र 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत्रु 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत्र 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पत्रु 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पत्र 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत्रु 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत्र 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (npi)", () => {
		expect(p.parse("2 पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पत्रु 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पत्र 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत्रु 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत्र 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पत्रु 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पत्र 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत्रु 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत्र 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Parser helper should handle book ranges (npi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (npi)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("यूहन्नाको पहिलो पत्र - यूहन्नाको तेस्रो पत्र").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("यूहन्नाको पहिलो पत्र – यूहन्नाको तेस्रो पत्र").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("यूहन्नाको पहिलो पत्र — यूहन्नाको तेस्रो पत्र").osis()).toEqual("1John.1-3John.1");
	});
});

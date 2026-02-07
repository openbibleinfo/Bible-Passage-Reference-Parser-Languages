"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bns.js";

describe("Localized book Gen (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bns)", () => {
		expect(p.parse("- उत्पत्ति 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("- उत. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bns)", () => {
		expect(p.parse("- यूहन्‍ना के दरसन कौ खुलासा 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("- यूहन्‍ना कौ दरसन 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Josh (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (bns)", () => {
		expect(p.parse("- यहोशू 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("- यहो. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book 1Chr (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bns)", () => {
		expect(p.parse("- पैलो इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("- 1 इति. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("-. पैलो इतिहास 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("-. 1 इति. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Neh (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (bns)", () => {
		expect(p.parse("- नहेम्याह 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("- नहे. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (bns)", () => {
		expect(p.parse("- एस्तेर 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("- एस. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Jonah (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (bns)", () => {
		expect(p.parse("- योना 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bns)", () => {
		expect(p.parse("- मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bns)", () => {
		expect(p.parse("- मरकुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("- मर. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bns)", () => {
		expect(p.parse("- लूका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bns)", () => {
		expect(p.parse("- 1 यूहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("- 1 यूह. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("-. 1 यूहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("-. 1 यूह. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bns)", () => {
		expect(p.parse("- 2 यूहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("- 2 यूह. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("-. 2 यूहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("-. 2 यूह. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bns)", () => {
		expect(p.parse("- 3 यूहन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("- 3 यूह. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bns)", () => {
		expect(p.parse("- यूहन्‍ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("- यूह. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bns)", () => {
		expect(p.parse("- प्रेरितन के काम 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("- प्रेरि. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bns)", () => {
		expect(p.parse("- रोमियों 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("- रोमि. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bns)", () => {
		expect(p.parse("- पैली कुरिन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("- 1 कुरि. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("-. पैली कुरिन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("-. 1 कुरि. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bns)", () => {
		expect(p.parse("- दूसरी कुरिन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("- 2 कुरि. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("-. दूसरी कुरिन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("-. 2 कुरि. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bns)", () => {
		expect(p.parse("- कुलुस्सियों 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("- कुलु. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bns)", () => {
		expect(p.parse("- गलतियों 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("- गल. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bns)", () => {
		expect(p.parse("- इफिसियों 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("- इफि. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bns)", () => {
		expect(p.parse("- फिलिप्पियों 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("- फिलि. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bns)", () => {
		expect(p.parse("- 1 थिस्सलुनीकियों 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("- 1 थिस्स. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("-. 1 थिस्सलुनीकियों 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("-. 1 थिस्स. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bns)", () => {
		expect(p.parse("- 2 थिस्सलुनीकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("- 2 थिस्स. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("-. 2 थिस्सलुनीकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("-. 2 थिस्स. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bns)", () => {
		expect(p.parse("- 1 तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("- 1 तीमु. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("-. 1 तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("-. 1 तीमु. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bns)", () => {
		expect(p.parse("- 2 तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("- 2 तीमु. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("-. 2 तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("-. 2 तीमु. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bns)", () => {
		expect(p.parse("- तीतु. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("- तीतुस 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bns)", () => {
		expect(p.parse("- फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("- फिले. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bns)", () => {
		expect(p.parse("- इब्रानियों 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("- इब्रा. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bns)", () => {
		expect(p.parse("- याकू. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("- याकूब 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bns)", () => {
		expect(p.parse("- 1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("- 1 पत. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("-. 1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("-. 1 पत. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bns)", () => {
		expect(p.parse("- 2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("- 2 पत. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("-. 2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("-. 2 पत. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bns)", () => {
		expect(p.parse("- यहूदा 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (bns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (bns)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("- 1 यूहन्‍ना - - 3 यूहन्‍ना").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("- 1 यूहन्‍ना – - 3 यूहन्‍ना").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("- 1 यूहन्‍ना — - 3 यूहन्‍ना").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/aar.js";

describe("Localized book Josh (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (aar)", () => {
		expect(p.parse("Yoosuwa 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (aar)", () => {
		expect(p.parse("Makaabon 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (aar)", () => {
		expect(p.parse("Ruut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (aar)", () => {
		expect(p.parse("Yasaqya 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (aar)", () => {
		expect(p.parse("1 Samuwel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuwel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (aar)", () => {
		expect(p.parse("2 Samuwel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuwel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (aar)", () => {
		expect(p.parse("1 Malikwa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Malikwa 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (aar)", () => {
		expect(p.parse("2 Malikwa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Malikwa 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (aar)", () => {
		expect(p.parse("1 Aydaad 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Aydaad 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (aar)", () => {
		expect(p.parse("2 Aydaad 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Aydaad 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (aar)", () => {
		expect(p.parse("Qedra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (aar)", () => {
		expect(p.parse("Nacmiya 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (aar)", () => {
		expect(p.parse("Aster 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Jer (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (aar)", () => {
		expect(p.parse("Ermiyaas 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (aar)", () => {
		expect(p.parse("Yacedkel 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (aar)", () => {
		expect(p.parse("Daaniyel 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (aar)", () => {
		expect(p.parse("Hosiqa 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (aar)", () => {
		expect(p.parse("Ayyuqel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (aar)", () => {
		expect(p.parse("Qaamus 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (aar)", () => {
		expect(p.parse("Qobadya 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (aar)", () => {
		expect(p.parse("Yoonas 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (aar)", () => {
		expect(p.parse("Miika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (aar)", () => {
		expect(p.parse("Naacum 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (aar)", () => {
		expect(p.parse("Cabakkuk 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (aar)", () => {
		expect(p.parse("Xafanya 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (aar)", () => {
		expect(p.parse("Caggay 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (aar)", () => {
		expect(p.parse("Zakariyya 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (aar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (aar)", () => {
		expect(p.parse("Malaaki 1:1").osis()).toEqual("Mal.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ikz.js";

describe("Localized book Rev (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ikz)", () => {
		expect(p.parse("Ubhwɨrɨkibhwa 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ikz)", () => {
		expect(p.parse("Mataayo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ikz)", () => {
		expect(p.parse("Maaroko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ikz)", () => {
		expect(p.parse("Ruuka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ikz)", () => {
		expect(p.parse("1 Yoohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoohana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ikz)", () => {
		expect(p.parse("2 Yoohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoohana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ikz)", () => {
		expect(p.parse("3 Yoohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoohana 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ikz)", () => {
		expect(p.parse("Yoohana 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ikz)", () => {
		expect(p.parse("Amahocha ga Abhatumwa 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ikz)", () => {
		expect(p.parse("Abharuumi 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ikz)", () => {
		expect(p.parse("1 Abhakʉrintʉ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Abhakʉrintʉ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ikz)", () => {
		expect(p.parse("2 Abhakʉrintʉ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Abhakʉrintʉ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ikz)", () => {
		expect(p.parse("Abhakorosaayi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ikz)", () => {
		expect(p.parse("Abhagaraatiya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ikz)", () => {
		expect(p.parse("Abheefeeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ikz)", () => {
		expect(p.parse("Abhafiripi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ikz)", () => {
		expect(p.parse("1 Abhatɨsarʉʉnikɨ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Abhatɨsarʉʉnikɨ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ikz)", () => {
		expect(p.parse("2 Abhatɨsarʉʉnikɨ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Abhatɨsarʉʉnikɨ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ikz)", () => {
		expect(p.parse("1 Timoseo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoseo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ikz)", () => {
		expect(p.parse("2 Timoseo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoseo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ikz)", () => {
		expect(p.parse("Tiitʉ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ikz)", () => {
		expect(p.parse("Firimʉʉni 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ikz)", () => {
		expect(p.parse("Abhɨɨbhuraaniya 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ikz)", () => {
		expect(p.parse("Yaakobho 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ikz)", () => {
		expect(p.parse("1 Peetero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peetero 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ikz)", () => {
		expect(p.parse("2 Peetero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peetero 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ikz)", () => {
		expect(p.parse("Yuuda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (ikz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (ikz)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yoohana - 3 Yoohana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yoohana – 3 Yoohana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yoohana — 3 Yoohana").osis()).toEqual("1John.1-3John.1");
	});
});

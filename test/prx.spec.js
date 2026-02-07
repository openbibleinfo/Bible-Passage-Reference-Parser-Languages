"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/prx.js";

describe("Localized book Rev (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (prx)", () => {
		expect(p.parse("Khyenluks 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (prx)", () => {
		expect(p.parse("Matthaisioi Phrinzangpo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (prx)", () => {
		expect(p.parse("Markosi Phrinzangpo 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (prx)", () => {
		expect(p.parse("Lukasi Phrinzangpo 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (prx)", () => {
		expect(p.parse("III Yoannes 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (prx)", () => {
		expect(p.parse("I Yoannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yoannes 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (prx)", () => {
		expect(p.parse("II Yoannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Y 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yoannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Y 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (prx)", () => {
		expect(p.parse("Yoannesi Phrinzangpo 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (prx)", () => {
		expect(p.parse("Narpa Phingchaun 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (prx)", () => {
		expect(p.parse("Romapaun 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (prx)", () => {
		expect(p.parse("I Korinthyapaun 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinthyapaun 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (prx)", () => {
		expect(p.parse("II Korinthyapaun 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinthyapaun 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (prx)", () => {
		expect(p.parse("Kolossyapaun 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (prx)", () => {
		expect(p.parse("Galatyapaun 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (prx)", () => {
		expect(p.parse("Ephesyapaun 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (prx)", () => {
		expect(p.parse("Philippyapaun 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (prx)", () => {
		expect(p.parse("I Thessalonikyapaun 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thessalonikyapaun 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (prx)", () => {
		expect(p.parse("II Thessalonikyapaun 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thessalonikyapaun 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (prx)", () => {
		expect(p.parse("I Timotheos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timotheos 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (prx)", () => {
		expect(p.parse("II Timotheos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timotheos 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (prx)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (prx)", () => {
		expect(p.parse("Philemon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (prx)", () => {
		expect(p.parse("Heberpaun 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (prx)", () => {
		expect(p.parse("Yaqobos 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (prx)", () => {
		expect(p.parse("I Petros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petros 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (prx)", () => {
		expect(p.parse("II Petros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petros 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (prx)", () => {
		expect(p.parse("Yude 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle ranges (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (prx)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
	});
});
describe("Parser helper should handle chapters (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (prx)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
	});
});
describe("Parser helper should handle book ranges (prx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (prx)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Yoannes - III Yoannes").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Yoannes – III Yoannes").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Yoannes — III Yoannes").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hif.js";

describe("Localized book Rev (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (hif)", () => {
		expect(p.parse("Revelaishan 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (hif)", () => {
		expect(p.parse("Methiu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (hif)", () => {
		expect(p.parse("Maak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (hif)", () => {
		expect(p.parse("Luuk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hif)", () => {
		expect(p.parse("1 Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuhanna 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hif)", () => {
		expect(p.parse("2 Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuhanna 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hif)", () => {
		expect(p.parse("3 Yuhanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yuhanna 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hif)", () => {
		expect(p.parse("Yuhanna 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (hif)", () => {
		expect(p.parse("Prerito ke Kaam 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (hif)", () => {
		expect(p.parse("Raom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hif)", () => {
		expect(p.parse("1 Kurinth 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kurinth 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hif)", () => {
		expect(p.parse("2 Kurinth 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kurinth 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (hif)", () => {
		expect(p.parse("Kolosia 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (hif)", () => {
		expect(p.parse("Galeshia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (hif)", () => {
		expect(p.parse("Efisia 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (hif)", () => {
		expect(p.parse("Filippi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hif)", () => {
		expect(p.parse("1 Thisluneeka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thisluneeka 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hif)", () => {
		expect(p.parse("2 Thisluneeka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thisluneeka 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hif)", () => {
		expect(p.parse("1 Ṭimathi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ṭimathi 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hif)", () => {
		expect(p.parse("2 Ṭimathi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ṭimathi 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (hif)", () => {
		expect(p.parse("Ṭaayṭas 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (hif)", () => {
		expect(p.parse("Fileman 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (hif)", () => {
		expect(p.parse("Heebru 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (hif)", () => {
		expect(p.parse("Jeims 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hif)", () => {
		expect(p.parse("1 Peeṭa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peeṭa 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hif)", () => {
		expect(p.parse("2 Peeṭa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peeṭa 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (hif)", () => {
		expect(p.parse("Juuḍ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (hif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (hif)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yuhanna - 3 Yuhanna").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yuhanna – 3 Yuhanna").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yuhanna — 3 Yuhanna").osis()).toEqual("1John.1-3John.1");
	});
});

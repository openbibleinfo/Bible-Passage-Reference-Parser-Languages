"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/soy.js";

describe("Localized book Rev (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (soy)", () => {
		expect(p.parse("Yohɑni Mɛyɛnɛ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (soy)", () => {
		expect(p.parse("Mɑtiyee 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (soy)", () => {
		expect(p.parse("Mɑriki 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (soy)", () => {
		expect(p.parse("Luki 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (soy)", () => {
		expect(p.parse("1 Yohɑni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohɑni 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (soy)", () => {
		expect(p.parse("2 Yohɑni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohɑni 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (soy)", () => {
		expect(p.parse("3 Yohɑni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yohɑni 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (soy)", () => {
		expect(p.parse("Yohɑni 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (soy)", () => {
		expect(p.parse("Uléécɑɑ Pitumɛ Mɛwɑi 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (soy)", () => {
		expect(p.parse("Rɔm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (soy)", () => {
		expect(p.parse("1 Korɛnti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korɛnti 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (soy)", () => {
		expect(p.parse("2 Korɛnti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korɛnti 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (soy)", () => {
		expect(p.parse("Kolɔɔsi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (soy)", () => {
		expect(p.parse("Kɑlɑɑti 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (soy)", () => {
		expect(p.parse("Efɛɛsi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (soy)", () => {
		expect(p.parse("Filipu 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (soy)", () => {
		expect(p.parse("1 Tɛsɑloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsɑloniki 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (soy)", () => {
		expect(p.parse("2 Tɛsɑloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsɑloniki 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (soy)", () => {
		expect(p.parse("1 Timotee 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotee 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (soy)", () => {
		expect(p.parse("2 Timotee 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotee 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (soy)", () => {
		expect(p.parse("Tiiti 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (soy)", () => {
		expect(p.parse("Filemɔɔ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (soy)", () => {
		expect(p.parse("Epireeyɛ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (soy)", () => {
		expect(p.parse("Yɑkupu 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (soy)", () => {
		expect(p.parse("1 Piyɛɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piyɛɛ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (soy)", () => {
		expect(p.parse("2 Piyɛɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piyɛɛ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (soy)", () => {
		expect(p.parse("Yuuti 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (soy)", () => {
		expect(p.parse("Uléécɑɑ Pitumɛ Mɛwɑi 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Parser helper should handle book ranges (soy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (soy)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yohɑni - 3 Yohɑni").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yohɑni – 3 Yohɑni").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yohɑni — 3 Yohɑni").osis()).toEqual("1John.1-3John.1");
	});
});

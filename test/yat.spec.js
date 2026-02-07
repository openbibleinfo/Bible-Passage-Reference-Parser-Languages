"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/yat.js";

describe("Localized book Rev (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (yat)", () => {
		expect(p.parse("Yiífínínin 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Yií 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (yat)", () => {
		expect(p.parse("Maʼtɛ́as 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maʼt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (yat)", () => {
		expect(p.parse("Mə́líʼkus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mə́l 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (yat)", () => {
		expect(p.parse("Lóʼkas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lóʼk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (yat)", () => {
		expect(p.parse("1Sŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (yat)", () => {
		expect(p.parse("2Sŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (yat)", () => {
		expect(p.parse("3 Sɛ́aŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Sŋ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (yat)", () => {
		expect(p.parse("1 Sɛ́aŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Sɛ́aŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (yat)", () => {
		expect(p.parse("2 Sɛ́aŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Sɛ́aŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (yat)", () => {
		expect(p.parse("Sɛ́aŋ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Sɛ́a 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (yat)", () => {
		expect(p.parse("Pigólí 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Pig 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (yat)", () => {
		expect(p.parse("Ɔlɔ́ma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ɔlɔ́ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (yat)", () => {
		expect(p.parse("1 Kɔlɛ́ɛnt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔlɛ́ɛnt 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (yat)", () => {
		expect(p.parse("2 Kɔlɛ́ɛnt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔlɛ́ɛnt 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (yat)", () => {
		expect(p.parse("1Kɔ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (yat)", () => {
		expect(p.parse("2Kɔ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (yat)", () => {
		expect(p.parse("Kolóos 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (yat)", () => {
		expect(p.parse("Kalasíi 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (yat)", () => {
		expect(p.parse("Ɛfɛ́ɛs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛfɛ́ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (yat)", () => {
		expect(p.parse("Filíib 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (yat)", () => {
		expect(p.parse("1 Təsaloníig 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Təsaloníig 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (yat)", () => {
		expect(p.parse("2 Təsaloníig 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Təsaloníig 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (yat)", () => {
		expect(p.parse("1Tə 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (yat)", () => {
		expect(p.parse("2Tə 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (yat)", () => {
		expect(p.parse("1 Timoʼtə́ə 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoʼtə́ə 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (yat)", () => {
		expect(p.parse("2 Timoʼtə́ə 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoʼtə́ə 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (yat)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (yat)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (yat)", () => {
		expect(p.parse("Tíid 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tíi 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (yat)", () => {
		expect(p.parse("Fɛlɛmɔ́ɔŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fɛl 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (yat)", () => {
		expect(p.parse("Əbələ́ə 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Əbə 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (yat)", () => {
		expect(p.parse("Sɛ́ag 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Sag 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (yat)", () => {
		expect(p.parse("1 Píɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Píɛ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (yat)", () => {
		expect(p.parse("2 Píɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Píɛ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (yat)", () => {
		expect(p.parse("1Pí 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (yat)", () => {
		expect(p.parse("2Pí 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (yat)", () => {
		expect(p.parse("Síud 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Síu 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (yat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (yat)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Sŋ - 3 Sɛ́aŋ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Sŋ – 3 Sɛ́aŋ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Sŋ — 3 Sɛ́aŋ").osis()).toEqual("1John.1-3John.1");
	});
});

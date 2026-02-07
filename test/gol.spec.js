"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gol.js";

describe("Localized book Rev (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gol)", () => {
		expect(p.parse("Maŋ kèì nyɛɛnɛŋ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Maŋ kèì 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gol)", () => {
		expect(p.parse("Maafiù 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mf 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Luke (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gol)", () => {
		expect(p.parse("Luù 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gol)", () => {
		expect(p.parse("1Jɔ̀ɔŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Jɔ̀ŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gol)", () => {
		expect(p.parse("2Jɔ̀ɔŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Jɔ̀ŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gol)", () => {
		expect(p.parse("3Jɔ̀ɔŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jɔ̀ŋ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gol)", () => {
		expect(p.parse("Jɔ̀ɔŋ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jɔ̀ŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gol)", () => {
		expect(p.parse("Nyɛ̀nɛ̀ŋ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Nyɛ̀ŋ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gol)", () => {
		expect(p.parse("Luùm 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lum 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gol)", () => {
		expect(p.parse("1Kɔ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gol)", () => {
		expect(p.parse("2Kɔ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gol)", () => {
		expect(p.parse("Kòlo 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gol)", () => {
		expect(p.parse("Gàla 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gà 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gol)", () => {
		expect(p.parse("Ɛfe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gol)", () => {
		expect(p.parse("Fèle 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fè 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gol)", () => {
		expect(p.parse("1Tɛsè 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tɛ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gol)", () => {
		expect(p.parse("2Tɛsè 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tɛ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gol)", () => {
		expect(p.parse("1Time 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gol)", () => {
		expect(p.parse("2Time 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gol)", () => {
		expect(p.parse("Taitɔ̀ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Ta 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gol)", () => {
		expect(p.parse("Fele 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fe 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gol)", () => {
		expect(p.parse("Hiɓu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hiɓ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gol)", () => {
		expect(p.parse("Jìiiŋ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jì 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gol)", () => {
		expect(p.parse("1Pììlɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pì 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gol)", () => {
		expect(p.parse("2Pììlɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pì 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gol)", () => {
		expect(p.parse("Juù 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ju 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (gol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (gol)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jɔ̀ɔŋ - 3Jɔ̀ɔŋ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jɔ̀ɔŋ – 3Jɔ̀ɔŋ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jɔ̀ɔŋ — 3Jɔ̀ɔŋ").osis()).toEqual("1John.1-3John.1");
	});
});

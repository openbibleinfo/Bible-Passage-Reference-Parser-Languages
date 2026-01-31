"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lia.js";

describe("Localized book Rev (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lia)", () => {
		expect(p.parse("Matɔŋinɔkɔ mȧŋ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Matɔ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lia)", () => {
		expect(p.parse("Mathiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Math 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lia)", () => {
		expect(p.parse("Maki 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lia)", () => {
		expect(p.parse("Luku 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lia)", () => {
		expect(p.parse("1 Yɔni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yɔni 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lia)", () => {
		expect(p.parse("2 Yɔni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yɔni 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lia)", () => {
		expect(p.parse("3 Yɔni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yɔni 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lia)", () => {
		expect(p.parse("Yɔni 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lia)", () => {
		expect(p.parse("Baseriŋ Bithɔɔkɔ beŋ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Bb 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lia)", () => {
		expect(p.parse("BiRomaŋ beŋ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lia)", () => {
		expect(p.parse("1 BiKɔrinthi beŋ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kɔr 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. BiKɔrinthi beŋ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lia)", () => {
		expect(p.parse("2 BiKɔrinthi beŋ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kɔr 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. BiKɔrinthi beŋ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lia)", () => {
		expect(p.parse("BiKalasi beŋ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kls 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lia)", () => {
		expect(p.parse("BiKaletiya beŋ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lia)", () => {
		expect(p.parse("BiƐfɛsɔsi beŋ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛf 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lia)", () => {
		expect(p.parse("BiFilipay beŋ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lia)", () => {
		expect(p.parse("1 BiThɛsalonaika beŋ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thɛs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. BiThɛsalonaika beŋ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thɛs 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lia)", () => {
		expect(p.parse("2 BiThɛsalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thɛs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. BiThɛsalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thɛs 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lia)", () => {
		expect(p.parse("1 Timothi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lia)", () => {
		expect(p.parse("2 Timothi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lia)", () => {
		expect(p.parse("Taitɔsi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tai 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lia)", () => {
		expect(p.parse("Filimɔŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lia)", () => {
		expect(p.parse("BiHiburu beŋ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lia)", () => {
		expect(p.parse("Yemisi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yem 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lia)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lia)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lia)", () => {
		expect(p.parse("Yudi 1:1").osis()).toEqual("Jude.1.1");
	});
});

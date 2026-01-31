"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mav.js";

describe("Localized book Rev (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mav)", () => {
		expect(p.parse("Iesui Aru E Hap 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Aru 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mav)", () => {
		expect(p.parse("Mateu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mav)", () => {
		expect(p.parse("Maku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mav)", () => {
		expect(p.parse("Iruka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ir 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mav)", () => {
		expect(p.parse("1 Iuwãu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Iuw 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Iuwãu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Iuw 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mav)", () => {
		expect(p.parse("2 Iuwãu 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Iuw 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Iuwãu 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Iuw 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mav)", () => {
		expect(p.parse("3 Iuwãu 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Iuw 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Iuwãu 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Iuw 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mav)", () => {
		expect(p.parse("Iuwãu 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Iuw 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mav)", () => {
		expect(p.parse("Iesui Potmuꞌeria 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Pot 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mav)", () => {
		expect(p.parse("Humanu 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Hum 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mav)", () => {
		expect(p.parse("1 Kuriniu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kur 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kuriniu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kur 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mav)", () => {
		expect(p.parse("2 Kuriniu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kur 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kuriniu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kur 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mav)", () => {
		expect(p.parse("Korosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kor 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mav)", () => {
		expect(p.parse("Karasia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kar 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mav)", () => {
		expect(p.parse("Ewesu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ew 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mav)", () => {
		expect(p.parse("Wiripu 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Wrp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mav)", () => {
		expect(p.parse("1 Tesaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mav)", () => {
		expect(p.parse("2 Tesaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mav)", () => {
		expect(p.parse("1 Timoteu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mav)", () => {
		expect(p.parse("2 Timoteu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mav)", () => {
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mav)", () => {
		expect(p.parse("Wiremu 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Wrm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mav)", () => {
		expect(p.parse("Epereu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ep 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mav)", () => {
		expect(p.parse("Tiaku 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Tiak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mav)", () => {
		expect(p.parse("1 Peteru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peteru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mav)", () => {
		expect(p.parse("2 Peteru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peteru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mav)", () => {
		expect(p.parse("Iuta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Iut 1:1").osis()).toEqual("Jude.1.1");
	});
});

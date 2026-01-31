"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ake.js";

describe("Localized book Rev (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ake)", () => {
		expect(p.parse("Isenpoikasaꞌ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Isen 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ake)", () => {
		expect(p.parse("Maꞌsiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ms 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ake)", () => {
		expect(p.parse("Maꞌ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Ma 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ake)", () => {
		expect(p.parse("Ʉruꞌ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ʉr 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ake)", () => {
		expect(p.parse("1Ise 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ake)", () => {
		expect(p.parse("2Ise 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ake)", () => {
		expect(p.parse("3 Isaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Isa 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ake)", () => {
		expect(p.parse("1 Isaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Isaan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ake)", () => {
		expect(p.parse("2 Isaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Isaan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ake)", () => {
		expect(p.parse("Isaan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ake)", () => {
		expect(p.parse("Inkupʉꞌpʉ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ink 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ake)", () => {
		expect(p.parse("Ron 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ake)", () => {
		expect(p.parse("1 Koren 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koren 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ake)", () => {
		expect(p.parse("2 Koren 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koren 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ake)", () => {
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ake)", () => {
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ake)", () => {
		expect(p.parse("Koroꞌse 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kor 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ake)", () => {
		expect(p.parse("Kareꞌsiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kar 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ake)", () => {
		expect(p.parse("Eꞌpeꞌsas 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ep 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ake)", () => {
		expect(p.parse("Piriꞌpai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pir 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ake)", () => {
		expect(p.parse("1 Tesaroniꞌka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaroniꞌka 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ake)", () => {
		expect(p.parse("2 Tesaroniꞌka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaroniꞌka 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ake)", () => {
		expect(p.parse("1Ts 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ake)", () => {
		expect(p.parse("2Ts 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ake)", () => {
		expect(p.parse("1 Temuꞌti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Temuꞌti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ake)", () => {
		expect(p.parse("2 Temuꞌti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Temuꞌti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ake)", () => {
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ake)", () => {
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ake)", () => {
		expect(p.parse("Taiꞌtas 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tai 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ake)", () => {
		expect(p.parse("Pairiman 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pair 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ake)", () => {
		expect(p.parse("Ipuru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ipu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ake)", () => {
		expect(p.parse("Isens 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Is 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ake)", () => {
		expect(p.parse("1 Piꞌta 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piꞌta 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ake)", () => {
		expect(p.parse("2 Piꞌta 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piꞌta 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ake)", () => {
		expect(p.parse("1Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ake)", () => {
		expect(p.parse("2Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ake)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ake)", () => {
		expect(p.parse("Isutʉ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Isu 1:1").osis()).toEqual("Jude.1.1");
	});
});

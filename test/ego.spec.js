"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ego.js";

describe("Localized book Rev (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ego)", () => {
		expect(p.parse("Otsotsa 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ego)", () => {
		expect(p.parse("aMatiyu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ego)", () => {
		expect(p.parse("Amarku 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ego)", () => {
		expect(p.parse("Oluka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ego)", () => {
		expect(p.parse("1 Eyohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Eyohana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ego)", () => {
		expect(p.parse("2 Eyohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Eyohana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ego)", () => {
		expect(p.parse("3 Eyohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Eyohana 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ego)", () => {
		expect(p.parse("Eyohana 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ego)", () => {
		expect(p.parse("Otum 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ego)", () => {
		expect(p.parse("MoaOroma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ego)", () => {
		expect(p.parse("1 MoaOkorinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. MoaOkorinti 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ego)", () => {
		expect(p.parse("2 MoaOkorinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. MoaOkorinti 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ego)", () => {
		expect(p.parse("MoaOkolosi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ego)", () => {
		expect(p.parse("MoaEgalasiya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ego)", () => {
		expect(p.parse("MoAfisu 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ego)", () => {
		expect(p.parse("MoaEfilibi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ego)", () => {
		expect(p.parse("1 MoaEtasolonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. MoaEtasolonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ego)", () => {
		expect(p.parse("2 MoaEtasolonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. MoaEtasolonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ego)", () => {
		expect(p.parse("1 Etimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Etimoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ego)", () => {
		expect(p.parse("2 Etimoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Etimoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ego)", () => {
		expect(p.parse("Etitu 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ego)", () => {
		expect(p.parse("Efilimo 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ego)", () => {
		expect(p.parse("MoaIbrani 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ego)", () => {
		expect(p.parse("Eyakubu 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ego)", () => {
		expect(p.parse("1 Ebitru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ebitru 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ego)", () => {
		expect(p.parse("2 Ebitru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Ebitru 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ego)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ego)", () => {
		expect(p.parse("Eyahuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

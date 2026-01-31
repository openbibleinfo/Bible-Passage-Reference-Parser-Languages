"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ldb.js";

describe("Localized book Rev (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ldb)", () => {
		expect(p.parse("Irhi Uyohana 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Irhi 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ldb)", () => {
		expect(p.parse("Umatta 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Umat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ldb)", () => {
		expect(p.parse("Umarku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Umar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ldb)", () => {
		expect(p.parse("Irhuka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Irh 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ldb)", () => {
		expect(p.parse("1Uyo 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ldb)", () => {
		expect(p.parse("2Uyo 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ldb)", () => {
		expect(p.parse("3 Uyohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Uyo 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ldb)", () => {
		expect(p.parse("1 Uyohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Uyohana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ldb)", () => {
		expect(p.parse("2 Uyohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Uyohana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ldb)", () => {
		expect(p.parse("Uyohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Uyoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ldb)", () => {
		expect(p.parse("Abi Itser-Yesu 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Aiy 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ldb)", () => {
		expect(p.parse("Uroma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Urom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ldb)", () => {
		expect(p.parse("1 Ukorinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ukorinti 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ldb)", () => {
		expect(p.parse("2 Ukorinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ukorinti 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ldb)", () => {
		expect(p.parse("1Uko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ldb)", () => {
		expect(p.parse("2Uko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ldb)", () => {
		expect(p.parse("Ukorhosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ukor 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ldb)", () => {
		expect(p.parse("Ugarhati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ugar 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ldb)", () => {
		expect(p.parse("Uafisa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Uafi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ldb)", () => {
		expect(p.parse("Ufirhibi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ufrb 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ldb)", () => {
		expect(p.parse("1 Utasorhonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Utasorhonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ldb)", () => {
		expect(p.parse("2 Utasorhonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Utasorhonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ldb)", () => {
		expect(p.parse("1Uta 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ldb)", () => {
		expect(p.parse("2Uta 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ldb)", () => {
		expect(p.parse("1 Utimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Utimoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ldb)", () => {
		expect(p.parse("2 Utimoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Utimoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ldb)", () => {
		expect(p.parse("1Uti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ldb)", () => {
		expect(p.parse("2Uti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ldb)", () => {
		expect(p.parse("Utitu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Utit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ldb)", () => {
		expect(p.parse("Ufirhimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Ufrm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ldb)", () => {
		expect(p.parse("Uibrani 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Uibr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ldb)", () => {
		expect(p.parse("Uyaku 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Uyak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ldb)", () => {
		expect(p.parse("1 Ubitru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ubitru 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ldb)", () => {
		expect(p.parse("2 Ubitru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Ubitru 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ldb)", () => {
		expect(p.parse("1Ubi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ldb)", () => {
		expect(p.parse("2Ubi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ldb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ldb)", () => {
		expect(p.parse("Uyahuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Uyah 1:1").osis()).toEqual("Jude.1.1");
	});
});

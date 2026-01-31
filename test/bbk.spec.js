"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bbk.js";

describe("Localized book Rev (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bbk)", () => {
		expect(p.parse("Kəmwetə 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kəm 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bbk)", () => {
		expect(p.parse("Matìyò 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bbk)", () => {
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bbk)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bbk)", () => {
		expect(p.parse("1Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bbk)", () => {
		expect(p.parse("2Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bbk)", () => {
		expect(p.parse("3 Joyn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bbk)", () => {
		expect(p.parse("1 Joyn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joyn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bbk)", () => {
		expect(p.parse("2 Joyn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joyn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bbk)", () => {
		expect(p.parse("Joyn 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bbk)", () => {
		expect(p.parse("Shwèʼ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("She 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bbk)", () => {
		expect(p.parse("Lumans 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lum 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bbk)", () => {
		expect(p.parse("1 Kolìntyàns 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolìntyàns 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bbk)", () => {
		expect(p.parse("2 Kolìntyàns 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolìntyàns 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bbk)", () => {
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bbk)", () => {
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bbk)", () => {
		expect(p.parse("Kòlòsyàns 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kòl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bbk)", () => {
		expect(p.parse("Gàlesìyà 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gàl 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bbk)", () => {
		expect(p.parse("Efisyàns 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bbk)", () => {
		expect(p.parse("Filìbàyns 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bbk)", () => {
		expect(p.parse("1 Tèsàlonyà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tèsàlonyà 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bbk)", () => {
		expect(p.parse("2 Tèsàlonyà 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tèsàlonyà 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bbk)", () => {
		expect(p.parse("1Tè 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bbk)", () => {
		expect(p.parse("2Tè 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bbk)", () => {
		expect(p.parse("1 Timotì 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotì 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bbk)", () => {
		expect(p.parse("2 Timotì 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotì 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bbk)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bbk)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bbk)", () => {
		expect(p.parse("Taytùs 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tay 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bbk)", () => {
		expect(p.parse("Filimùyn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bbk)", () => {
		expect(p.parse("Hibùlù 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bbk)", () => {
		expect(p.parse("Jems 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jem 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bbk)", () => {
		expect(p.parse("1 Bità 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bità 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bbk)", () => {
		expect(p.parse("2 Bità 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bità 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bbk)", () => {
		expect(p.parse("1Bi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bbk)", () => {
		expect(p.parse("2Bi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bbk)", () => {
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (bbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (bbk)", () => {
		expect(p.parse("1 Kolìntyàns 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Bità 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Tèsàlonyà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tè 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Timotì 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("2 Kolìntyàns 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Bità 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Tèsàlonyà 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tè 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Timotì 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Shwèʼ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kòlòsyàns 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kòl 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Efisyàns 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Gàlesìyà 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gàl 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Hibùlù 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Matìyò 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Filìbàyns 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filimùyn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Taytùs 1:1").osis()).toEqual("Titus.1.1");
	});
});

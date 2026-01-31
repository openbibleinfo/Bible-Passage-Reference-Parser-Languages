"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tlf.js";

describe("Localized book Rev (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tlf)", () => {
		expect(p.parse("Revelesen 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tlf)", () => {
		expect(p.parse("Matyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tlf)", () => {
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tlf)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tlf)", () => {
		expect(p.parse("1 Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tlf)", () => {
		expect(p.parse("2 Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tlf)", () => {
		expect(p.parse("3 Jon 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jon 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tlf)", () => {
		expect(p.parse("Jon 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tlf)", () => {
		expect(p.parse("Aposel 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ap 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tlf)", () => {
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tlf)", () => {
		expect(p.parse("1 Korin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tlf)", () => {
		expect(p.parse("2 Korin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tlf)", () => {
		expect(p.parse("Kolosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tlf)", () => {
		expect(p.parse("Galesia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tlf)", () => {
		expect(p.parse("Efesis 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tlf)", () => {
		expect(p.parse("Filipai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fpai 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tlf)", () => {
		expect(p.parse("1 Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tlf)", () => {
		expect(p.parse("2 Tesalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tlf)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tlf)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tlf)", () => {
		expect(p.parse("Taitas 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tat 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tlf)", () => {
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tlf)", () => {
		expect(p.parse("Hibru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tlf)", () => {
		expect(p.parse("Jems 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tlf)", () => {
		expect(p.parse("1 Fita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Fit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Fita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Fit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tlf)", () => {
		expect(p.parse("2 Fita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Fit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Fita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Fit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tlf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tlf)", () => {
		expect(p.parse("Jut 1:1").osis()).toEqual("Jude.1.1");
	});
});

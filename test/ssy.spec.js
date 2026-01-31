"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ssy.js";

describe("Localized book Rev (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ssy)", () => {
		expect(p.parse("Waxye 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Wax. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ssy)", () => {
		expect(p.parse("Maatiyos 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ssy)", () => {
		expect(p.parse("Markos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ssy)", () => {
		expect(p.parse("Luukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luuk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ssy)", () => {
		expect(p.parse("1 Yohannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ssy)", () => {
		expect(p.parse("2 Yohannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ssy)", () => {
		expect(p.parse("3 Yohannis 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoh. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yohannis 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ssy)", () => {
		expect(p.parse("Yohannis 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ssy)", () => {
		expect(p.parse("Fartottit hi Abittot 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Fart. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ssy)", () => {
		expect(p.parse("Room. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rooma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ssy)", () => {
		expect(p.parse("1 Korintos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ssy)", () => {
		expect(p.parse("2 Korintos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ssy)", () => {
		expect(p.parse("Kolossay 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ssy)", () => {
		expect(p.parse("Galaatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ssy)", () => {
		expect(p.parse("Efesos 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ssy)", () => {
		expect(p.parse("Filibbi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ssy)", () => {
		expect(p.parse("1 Tessaloniike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessaloniike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tess. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ssy)", () => {
		expect(p.parse("2 Tessaloniike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessaloniike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tess. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ssy)", () => {
		expect(p.parse("1 Timoteyos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteyos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ssy)", () => {
		expect(p.parse("2 Timoteyos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteyos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ssy)", () => {
		expect(p.parse("Tiitos 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tiit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ssy)", () => {
		expect(p.parse("Filmoon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ssy)", () => {
		expect(p.parse("Cibraan 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Cib. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ssy)", () => {
		expect(p.parse("Yacqoob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yac. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ssy)", () => {
		expect(p.parse("1 Bithroos 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Bith. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bithroos 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bith. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ssy)", () => {
		expect(p.parse("2 Bithroos 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Bith. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bithroos 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bith. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ssy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ssy)", () => {
		expect(p.parse("Yahuuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yaah. 1:1").osis()).toEqual("Jude.1.1");
	});
});

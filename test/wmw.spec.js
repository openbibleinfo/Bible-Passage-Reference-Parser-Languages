"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/wmw.js";

describe("Localized book Gen (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (wmw)", () => {
		expect(p.parse("Mwanzo 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (wmw)", () => {
		expect(p.parse("Kulawa 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (wmw)", () => {
		expect(p.parse("Ufunuri 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (wmw)", () => {
		expect(p.parse("Kumbukumbu 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Ruth (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (wmw)", () => {
		expect(p.parse("Ruti 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Sam (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (wmw)", () => {
		expect(p.parse("1 Samuweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuweli 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (wmw)", () => {
		expect(p.parse("2 Samuweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuweli 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (wmw)", () => {
		expect(p.parse("1Samuweli 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (wmw)", () => {
		expect(p.parse("2Samuweli 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book Ps (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (wmw)", () => {
		expect(p.parse("Zaburi 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Matt (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (wmw)", () => {
		expect(p.parse("Matwaya 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (wmw)", () => {
		expect(p.parse("Maruku 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (wmw)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (wmw)", () => {
		expect(p.parse("1Yahaya 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (wmw)", () => {
		expect(p.parse("2Yahaya 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (wmw)", () => {
		expect(p.parse("3 Yahaya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yahaya 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (wmw)", () => {
		expect(p.parse("1 Yahaya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yahaya 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (wmw)", () => {
		expect(p.parse("2 Yahaya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yahaya 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (wmw)", () => {
		expect(p.parse("Yahaya 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (wmw)", () => {
		expect(p.parse("Vitendo 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (wmw)", () => {
		expect(p.parse("waRoma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (wmw)", () => {
		expect(p.parse("1 waKorintiyu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. waKorintiyu 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (wmw)", () => {
		expect(p.parse("2 waKorintiyu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. waKorintiyu 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (wmw)", () => {
		expect(p.parse("1waKorintiyu 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (wmw)", () => {
		expect(p.parse("2waKorintiyu 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (wmw)", () => {
		expect(p.parse("waKolosayi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (wmw)", () => {
		expect(p.parse("waGalata 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (wmw)", () => {
		expect(p.parse("waEfezu 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (wmw)", () => {
		expect(p.parse("waFilipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (wmw)", () => {
		expect(p.parse("1 Watesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Watesalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (wmw)", () => {
		expect(p.parse("2 Watesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Watesalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (wmw)", () => {
		expect(p.parse("1waTesalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (wmw)", () => {
		expect(p.parse("2waTesalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (wmw)", () => {
		expect(p.parse("1 Timotiyu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotiyu 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (wmw)", () => {
		expect(p.parse("2 Timotiyu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotiyu 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (wmw)", () => {
		expect(p.parse("1Timotiyu 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (wmw)", () => {
		expect(p.parse("2Timotiyu 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (wmw)", () => {
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (wmw)", () => {
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (wmw)", () => {
		expect(p.parse("Waebraniya 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (wmw)", () => {
		expect(p.parse("Yakobu 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (wmw)", () => {
		expect(p.parse("1 Peduru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peduru 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (wmw)", () => {
		expect(p.parse("2 Peduru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peduru 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (wmw)", () => {
		expect(p.parse("1Peduru 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (wmw)", () => {
		expect(p.parse("2Peduru 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (wmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (wmw)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

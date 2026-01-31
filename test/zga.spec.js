"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/zga.js";

describe("Localized book Rev (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (zga)", () => {
		expect(p.parse("Uluvonekelo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Lʉvonekelo 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (zga)", () => {
		expect(p.parse("Mataayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matai 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (zga)", () => {
		expect(p.parse("Malika 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maliko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (zga)", () => {
		expect(p.parse("Luuka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (zga)", () => {
		expect(p.parse("1 Johani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (zga)", () => {
		expect(p.parse("2 Johani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (zga)", () => {
		expect(p.parse("3 Johani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Johani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yohana 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (zga)", () => {
		expect(p.parse("Johani 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yohana 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (zga)", () => {
		expect(p.parse("Mbombo tsa Vapositili 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Vapositili 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (zga)", () => {
		expect(p.parse("Valooma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Loma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (zga)", () => {
		expect(p.parse("1 Vakolinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kolinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Vakolinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolinti 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (zga)", () => {
		expect(p.parse("2 Vakolinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kolinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Vakolinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolinti 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (zga)", () => {
		expect(p.parse("Vakolosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (zga)", () => {
		expect(p.parse("Vagalatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galati 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (zga)", () => {
		expect(p.parse("VaEfeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epesi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (zga)", () => {
		expect(p.parse("Vafilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pilipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (zga)", () => {
		expect(p.parse("1 Vatesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Vatesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloniki 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (zga)", () => {
		expect(p.parse("2 Vatesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Vatesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloniki 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (zga)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (zga)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (zga)", () => {
		expect(p.parse("Titi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (zga)", () => {
		expect(p.parse("Filimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pilemoni 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (zga)", () => {
		expect(p.parse("Vaebulaniya 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebuli 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (zga)", () => {
		expect(p.parse("Jakobu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (zga)", () => {
		expect(p.parse("1 Petele 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petulo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petele 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petulo 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (zga)", () => {
		expect(p.parse("2 Petele 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petulo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petele 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petulo 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (zga)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (zga)", () => {
		expect(p.parse("Ilipisitili Lya Juta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

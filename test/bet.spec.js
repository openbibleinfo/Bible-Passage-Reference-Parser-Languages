"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bet.js";

describe("Localized book Rev (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bet)", () => {
		expect(p.parse("'Ylimötulanɩlii 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("'Ylimö 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bet)", () => {
		expect(p.parse("Matie 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bet)", () => {
		expect(p.parse("Maakö 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bet)", () => {
		expect(p.parse("Lwiikö 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lwii 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bet)", () => {
		expect(p.parse("1 Zaa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zaa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bet)", () => {
		expect(p.parse("2 Zaa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zaa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bet)", () => {
		expect(p.parse("3 Zaa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zaa 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bet)", () => {
		expect(p.parse("Zaa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bet)", () => {
		expect(p.parse("Nʋnʋlii 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Nʋnʋ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bet)", () => {
		expect(p.parse("Ghlɔɔmö a ‑nʋa 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ghlɔ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bet)", () => {
		expect(p.parse("1 Kolɛɛtɩ a ‑nʋa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kolɛ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolɛɛtɩ a ‑nʋa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolɛ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bet)", () => {
		expect(p.parse("2 Kolɛɛtɩ a ‑nʋa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kolɛ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolɛɛtɩ a ‑nʋa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolɛ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bet)", () => {
		expect(p.parse("Kolɔɔsɩ a ‑nʋa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolɔ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bet)", () => {
		expect(p.parse("Galatii a ‑nʋa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gala 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bet)", () => {
		expect(p.parse("Efɛɛzɩ a ‑nʋa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bet)", () => {
		expect(p.parse("Filiipö a ‑nʋa 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fili 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bet)", () => {
		expect(p.parse("1 Tesaloniikö a ‑nʋa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloniikö a ‑nʋa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bet)", () => {
		expect(p.parse("2 Tesaloniikö a ‑nʋa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloniikö a ‑nʋa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesa 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bet)", () => {
		expect(p.parse("1 Timotee 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotee 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bet)", () => {
		expect(p.parse("2 Timotee 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotee 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bet)", () => {
		expect(p.parse("Tiitɩ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bet)", () => {
		expect(p.parse("Filemɔɔ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bet)", () => {
		expect(p.parse("Ebleewaa 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eblee 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bet)", () => {
		expect(p.parse("Zaakö 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bet)", () => {
		expect(p.parse("1 Piɛlɩ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Piɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piɛlɩ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piɛ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bet)", () => {
		expect(p.parse("2 Piɛlɩ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Piɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piɛlɩ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piɛ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bet)", () => {
		expect(p.parse("Zwiidɩ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Zwii 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (bet)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (bet)", () => {
		expect(p.parse("1 Tesaloniikö a ‑nʋa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("2 Tesaloniikö a ‑nʋa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Zaakö 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Lwiikö 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Maakö 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Filiipö a ‑nʋa 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("'Ylimötulanɩlii 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("'Ylimö 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ghlɔɔmö a ‑nʋa 1:1").osis()).toEqual("Rom.1.1");
	});
});

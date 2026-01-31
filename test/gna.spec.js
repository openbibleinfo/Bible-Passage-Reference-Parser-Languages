"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gna.js";

describe("Localized book Rev (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gna)", () => {
		expect(p.parse("Bʋka'ma 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Bʋk 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gna)", () => {
		expect(p.parse("Matíyé 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gna)", () => {
		expect(p.parse("Márkɩ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Már 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gna)", () => {
		expect(p.parse("Lúki 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lúk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gna)", () => {
		expect(p.parse("1Jã́ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gna)", () => {
		expect(p.parse("2Jã́ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gna)", () => {
		expect(p.parse("3 Jã́ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jã́ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gna)", () => {
		expect(p.parse("1 Jã́ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jã́ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gna)", () => {
		expect(p.parse("2 Jã́ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jã́ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gna)", () => {
		expect(p.parse("Jã́ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gna)", () => {
		expect(p.parse("Mɩ́déenɲe 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mɩ́d 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gna)", () => {
		expect(p.parse("Ɔrɔ́mɩbɔ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ɔrɔ́ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gna)", () => {
		expect(p.parse("1 Kóorɛ́ntɩbɛ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kóorɛ́ntɩbɛ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gna)", () => {
		expect(p.parse("2 Kóorɛ́ntɩbɛ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kóorɛ́ntɩbɛ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gna)", () => {
		expect(p.parse("1Kó 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gna)", () => {
		expect(p.parse("2Kó 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gna)", () => {
		expect(p.parse("Kɔ́lɔ́sɩbɔ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kɔ́l 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gna)", () => {
		expect(p.parse("Gálásíbe 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gál 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gna)", () => {
		expect(p.parse("Éfɛ́zɩbɛ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Éfɛ́ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gna)", () => {
		expect(p.parse("Filípibe 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gna)", () => {
		expect(p.parse("1 Tésálóníkibe 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tésálóníkibe 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gna)", () => {
		expect(p.parse("2 Tésálóníkibe 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tésálóníkibe 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gna)", () => {
		expect(p.parse("1Té 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gna)", () => {
		expect(p.parse("2Té 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gna)", () => {
		expect(p.parse("1 Tímóté 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tímóté 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gna)", () => {
		expect(p.parse("2 Tímóté 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tímóté 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gna)", () => {
		expect(p.parse("1Tí 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gna)", () => {
		expect(p.parse("2Tí 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gna)", () => {
		expect(p.parse("Títi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tít 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gna)", () => {
		expect(p.parse("Fílémɔ́ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gna)", () => {
		expect(p.parse("Eburubo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gna)", () => {
		expect(p.parse("Jákɩ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ják 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gna)", () => {
		expect(p.parse("1 Pɛ́ɛrɩ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pɛ́ɛrɩ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gna)", () => {
		expect(p.parse("2 Pɛ́ɛrɩ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pɛ́ɛrɩ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gna)", () => {
		expect(p.parse("1Pɛ́ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gna)", () => {
		expect(p.parse("2Pɛ́ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gna)", () => {
		expect(p.parse("Júdi 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Júd 1:1").osis()).toEqual("Jude.1.1");
	});
});

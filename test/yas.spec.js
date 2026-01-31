"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/yas.js";

describe("Localized book Rev (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (yas)", () => {
		expect(p.parse("Tóogio 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tóo 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (yas)", () => {
		expect(p.parse("Motíosi 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mot 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (yas)", () => {
		expect(p.parse("Mélékusu 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mél 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (yas)", () => {
		expect(p.parse("Lókasɛ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lók 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (yas)", () => {
		expect(p.parse("1Sá 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (yas)", () => {
		expect(p.parse("2Sá 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (yas)", () => {
		expect(p.parse("3 Sáŋa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Sá 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (yas)", () => {
		expect(p.parse("1 Sáŋa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Sáŋa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (yas)", () => {
		expect(p.parse("2 Sáŋa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Sáŋa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (yas)", () => {
		expect(p.parse("Sáŋa 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Sáŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (yas)", () => {
		expect(p.parse("Meŋiigíe 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Meŋ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (yas)", () => {
		expect(p.parse("Olóma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Oló 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (yas)", () => {
		expect(p.parse("1 Kɔlɛ́ntɛ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔlɛ́ntɛ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (yas)", () => {
		expect(p.parse("2 Kɔlɛ́ntɛ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔlɛ́ntɛ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (yas)", () => {
		expect(p.parse("1Kɔ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (yas)", () => {
		expect(p.parse("2Kɔ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (yas)", () => {
		expect(p.parse("Kolóose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (yas)", () => {
		expect(p.parse("Galáatɛ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (yas)", () => {
		expect(p.parse("Ɛ́fɛsɛ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛ́fɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (yas)", () => {
		expect(p.parse("Filípe 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (yas)", () => {
		expect(p.parse("1 Tɛsalonɛ́ka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsalonɛ́ka 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (yas)", () => {
		expect(p.parse("2 Tɛsalonɛ́ka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsalonɛ́ka 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (yas)", () => {
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (yas)", () => {
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (yas)", () => {
		expect(p.parse("1 Timotée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotée 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (yas)", () => {
		expect(p.parse("2 Timotée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotée 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (yas)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (yas)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (yas)", () => {
		expect(p.parse("Tíite 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tíi 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (yas)", () => {
		expect(p.parse("Fɛlɛmɔ́ŋɔ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fɛl 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (yas)", () => {
		expect(p.parse("Behébelée 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Beh 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (yas)", () => {
		expect(p.parse("Sáakɛ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Sáa 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (yas)", () => {
		expect(p.parse("1 Píele 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Píele 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (yas)", () => {
		expect(p.parse("2 Píele 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Píele 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (yas)", () => {
		expect(p.parse("1Pí 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (yas)", () => {
		expect(p.parse("2Pí 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (yas)", () => {
		expect(p.parse("Yúude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yúu 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (yas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (yas)", () => {
		expect(p.parse("1 Sáŋa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Sá 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Píele 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pí 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Timotée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("2 Sáŋa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Sá 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Píele 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pí 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Timotée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("3 Sáŋa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Sá 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Meŋiigíe 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kolóose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Galáatɛ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Behébelée 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Sáakɛ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Sáa 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Sáŋa 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Sáŋ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yúude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yúu 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Lókasɛ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lók 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Mélékusu 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mél 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Motíosi 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Filípe 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Tóogio 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tóo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Olóma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Oló 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Tíite 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tíi 1:1").osis()).toEqual("Titus.1.1");
	});
});

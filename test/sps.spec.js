"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sps.js";

describe("Localized book Gen (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (sps)", () => {
		expect(p.parse("Jenesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Jen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sps)", () => {
		expect(p.parse("Vegiaun Tapokaa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Vt 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Josh (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (sps)", () => {
		expect(p.parse("Josua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Matt (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sps)", () => {
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sps)", () => {
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sps)", () => {
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sps)", () => {
		expect(p.parse("1Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sps)", () => {
		expect(p.parse("2Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sps)", () => {
		expect(p.parse("Fafofopis Jon 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sps)", () => {
		expect(p.parse("1 Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Vaamuan Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Vaamuan. Jon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sps)", () => {
		expect(p.parse("2 Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Fafuan Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Fafuan. Jon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sps)", () => {
		expect(p.parse("Jon 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sps)", () => {
		expect(p.parse("Binun Tan Amaraav 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sps)", () => {
		expect(p.parse("Roum 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sps)", () => {
		expect(p.parse("1 Korin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Vaamuan Korin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Vaamuan. Korin 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sps)", () => {
		expect(p.parse("2 Korin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Fafuan Korin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Fafuan. Korin 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sps)", () => {
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sps)", () => {
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sps)", () => {
		expect(p.parse("Kolosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sps)", () => {
		expect(p.parse("Galesia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sps)", () => {
		expect(p.parse("Efeses 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sps)", () => {
		expect(p.parse("Filipai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sps)", () => {
		expect(p.parse("1 Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Vaamuan Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Vaamuan. Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sps)", () => {
		expect(p.parse("2 Tesalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Fafuan Tesalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Fafuan. Tesalonaika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sps)", () => {
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sps)", () => {
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sps)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Vaamuan Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Vaamuan. Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sps)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Fafuan Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Fafuan. Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sps)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sps)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sps)", () => {
		expect(p.parse("Taitus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tai 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sps)", () => {
		expect(p.parse("Filimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sps)", () => {
		expect(p.parse("Hiburu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hi 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sps)", () => {
		expect(p.parse("Jemis 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Je 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sps)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Vaamuan Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Vaamuan. Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sps)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Fafuan Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Fafuan. Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sps)", () => {
		expect(p.parse("1Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sps)", () => {
		expect(p.parse("2Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sps)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sps)", () => {
		expect(p.parse("Jut 1:1").osis()).toEqual("Jude.1.1");
	});
});

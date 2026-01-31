"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mcu.js";

describe("Localized book Rev (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mcu)", () => {
		expect(p.parse("Mvù vuû 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Vuú 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mcu)", () => {
		expect(p.parse("Matíô 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mcu)", () => {
		expect(p.parse("Mârk 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mcu)", () => {
		expect(p.parse("Lûk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mcu)", () => {
		expect(p.parse("1 Jâŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jâŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mcu)", () => {
		expect(p.parse("2 Jâŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jâŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mcu)", () => {
		expect(p.parse("3 Jâŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jâŋ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mcu)", () => {
		expect(p.parse("Jâŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mcu)", () => {
		expect(p.parse("Seé b. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mcu)", () => {
		expect(p.parse("Rɔ̂m 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mcu)", () => {
		expect(p.parse("1 Kɔrênt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kɔr. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔrênt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔr. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mcu)", () => {
		expect(p.parse("2 Kɔrênt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kɔr. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔrênt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔr. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mcu)", () => {
		expect(p.parse("Kɔlɔ̂se 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kɔl. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mcu)", () => {
		expect(p.parse("Galatî 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mcu)", () => {
		expect(p.parse("Efêse 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mcu)", () => {
		expect(p.parse("Filîp 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mcu)", () => {
		expect(p.parse("1 Tesalonîk 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonîk 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mcu)", () => {
		expect(p.parse("2 Tesalonîk 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonîk 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mcu)", () => {
		expect(p.parse("1 Timotê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mcu)", () => {
		expect(p.parse("2 Timotê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mcu)", () => {
		expect(p.parse("Tîte 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mcu)", () => {
		expect(p.parse("Filemɔ̂ŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mcu)", () => {
		expect(p.parse("Hebreêh 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mcu)", () => {
		expect(p.parse("Jâk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mcu)", () => {
		expect(p.parse("1 Piêr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pi. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piêr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pi. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mcu)", () => {
		expect(p.parse("2 Piêr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pi. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piêr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pi. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mcu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mcu)", () => {
		expect(p.parse("Jûde 1:1").osis()).toEqual("Jude.1.1");
	});
});

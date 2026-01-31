"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kfa.js";

describe("Localized book Gen (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kfa)", () => {
		expect(p.parse("ಆದ್ಯಯತ್‌ರ ಪುಸ್ತಕ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ಆದ್ಯತ್‌ರ ಪುಸ್ತಕ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kfa)", () => {
		expect(p.parse("ಪ್ರಕಟನೆ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Esth (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kfa)", () => {
		expect(p.parse("ಎಸ್ತೆರ್‌ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Prov (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kfa)", () => {
		expect(p.parse("ಜ್ಞಾನತ್‌ರ ಪಡಿಮ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Jonah (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kfa)", () => {
		expect(p.parse("ಯೋನ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mal (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kfa)", () => {
		expect(p.parse("ಮಲಾಕಿ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kfa)", () => {
		expect(p.parse("ಮತ್ತಾಯ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kfa)", () => {
		expect(p.parse("ಮಾರ್ಕ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kfa)", () => {
		expect(p.parse("ಲೂಕ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kfa)", () => {
		expect(p.parse("1 ಯೋಹಾನ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ಯೋಹಾನ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kfa)", () => {
		expect(p.parse("2 ಯೋಹಾನ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ಯೋಹಾನ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kfa)", () => {
		expect(p.parse("3 ಯೋಹಾನ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ಯೋಹಾನ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kfa)", () => {
		expect(p.parse("ಯೋಹಾನ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kfa)", () => {
		expect(p.parse("ಅಪೊಸ್ತಲ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kfa)", () => {
		expect(p.parse("ರೋಮ್ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kfa)", () => {
		expect(p.parse("1 ಕೊರಿಂಥ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ಕೊರಿಂಥ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kfa)", () => {
		expect(p.parse("2 ಕೊರಿಂಥ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ಕೊರಿಂಥ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kfa)", () => {
		expect(p.parse("ಕೊಲೊಸ್ಸೆ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kfa)", () => {
		expect(p.parse("ಗಲಾತ್ಯ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kfa)", () => {
		expect(p.parse("ಎಫೆಸ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kfa)", () => {
		expect(p.parse("ಫಿಲಿಪ್ಪಿ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kfa)", () => {
		expect(p.parse("1 ಥೆಸಲೊನೀಕ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ಥೆಸಲೊನೀಕ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kfa)", () => {
		expect(p.parse("2 ಥೆಸಲೊನೀಕ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ಥೆಸಲೊನೀಕ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kfa)", () => {
		expect(p.parse("1 ತಿಮೊಥೆಯ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ತಿಮೊಥೆಯ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kfa)", () => {
		expect(p.parse("2 ತಿಮೊಥೆಯ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ತಿಮೊಥೆಯ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kfa)", () => {
		expect(p.parse("ತೀತ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kfa)", () => {
		expect(p.parse("ಫಿಲೆಮೋನ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kfa)", () => {
		expect(p.parse("ಇಬ್ರಿಯ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kfa)", () => {
		expect(p.parse("ಯಾಕೋಬ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kfa)", () => {
		expect(p.parse("1 ಪೇತ್ರ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ಪೇತ್ರ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kfa)", () => {
		expect(p.parse("2 ಪೇತ್ರ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ಪೇತ್ರ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kfa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kfa)", () => {
		expect(p.parse("ಯೂದ 1:1").osis()).toEqual("Jude.1.1");
	});
});

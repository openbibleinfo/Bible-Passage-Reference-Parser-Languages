"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tcy.js";

describe("Localized book Rev (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tcy)", () => {
		expect(p.parse("ಪ್ರಕಟಣೆ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ಪ್ರಕ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tcy)", () => {
		expect(p.parse("ಮತ್ತಾಯೆ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ಮತ್ತಾ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tcy)", () => {
		expect(p.parse("ಮಾರ್ಕೆ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ಮಾರ್ಕ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tcy)", () => {
		expect(p.parse("ಲೂಕೆ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ಲೂಕ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tcy)", () => {
		expect(p.parse("1ಯೋಹಾ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tcy)", () => {
		expect(p.parse("2ಯೋಹಾ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tcy)", () => {
		expect(p.parse("3 ಯೋಹಾನೆ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ಯೋಹಾ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tcy)", () => {
		expect(p.parse("1 ಯೋಹಾನೆ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ಯೋಹಾನೆ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tcy)", () => {
		expect(p.parse("2 ಯೋಹಾನೆ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ಯೋಹಾನೆ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tcy)", () => {
		expect(p.parse("ಯೋಹಾನೆ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ಯೋಹಾ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tcy)", () => {
		expect(p.parse("ಅಪೊ.ಕ್ರಿ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tcy)", () => {
		expect(p.parse("ರೋಮಾಯೆರೆಗ್ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ರೋಮಾ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tcy)", () => {
		expect(p.parse("1 ಕೊರಿಂಥ್ಯೆರೆಗ್ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ಕೊರಿಂಥ್ಯೆರೆಗ್ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tcy)", () => {
		expect(p.parse("2 ಕೊರಿಂಥ್ಯೆರೆಗ್ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ಕೊರಿಂಥ್ಯೆರೆಗ್ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tcy)", () => {
		expect(p.parse("1ಕೊರಿ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tcy)", () => {
		expect(p.parse("2ಕೊರಿ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tcy)", () => {
		expect(p.parse("ಕೊಲೊಸ್ಸಿಯೆರೆಗ್ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ಕೊಲೊ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tcy)", () => {
		expect(p.parse("ಗಲಾತ್ಯೆರೆಗ್ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ಗಲಾ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tcy)", () => {
		expect(p.parse("ಎಫೆಸ್ಯೆರೆಗ್ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ಎಫೆ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tcy)", () => {
		expect(p.parse("ಫಿಲಿಪ್ಪಿಯೆರೆಗ್ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ಫಿಲಿ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tcy)", () => {
		expect(p.parse("1 ಥೆಸಲೋನಿಕೆರೆಗ್‌ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ಥೆಸಲೋನಿಕೆರೆಗ್‌ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tcy)", () => {
		expect(p.parse("2 ಥೆಸಲೋನಿಕೆರೆಗ್‌ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ಥೆಸಲೋನಿಕೆರೆಗ್‌ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tcy)", () => {
		expect(p.parse("1ಥೆಸ್ಸ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tcy)", () => {
		expect(p.parse("2ಥೆಸ್ಸ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tcy)", () => {
		expect(p.parse("1 ತಿಮೋಥಿ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ತಿಮೋಥಿ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tcy)", () => {
		expect(p.parse("2 ತಿಮೋಥಿ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ತಿಮೋಥಿ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tcy)", () => {
		expect(p.parse("1ತಿಮೋ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tcy)", () => {
		expect(p.parse("2ತಿಮೋ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tcy)", () => {
		expect(p.parse("ತೀತ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tcy)", () => {
		expect(p.parse("ಫಿಲೆಮೋನುಗು 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ಫಿಲೆ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tcy)", () => {
		expect(p.parse("ಇಬ್ರಿಯೆರೆಗ್ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ಇಬ್ರಿ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tcy)", () => {
		expect(p.parse("ಯಾಕೋಬು 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ಯಾಕೋ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tcy)", () => {
		expect(p.parse("1 ಪೇತ್ರೆ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ಪೇತ್ರೆ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tcy)", () => {
		expect(p.parse("2 ಪೇತ್ರೆ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ಪೇತ್ರೆ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tcy)", () => {
		expect(p.parse("1ಪೇತ್ರ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tcy)", () => {
		expect(p.parse("2ಪೇತ್ರ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tcy)", () => {
		expect(p.parse("ಯೂದೆ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ಯೂದ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (tcy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (tcy)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1ಯೋಹಾ - 3 ಯೋಹಾನೆ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1ಯೋಹಾ – 3 ಯೋಹಾನೆ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1ಯೋಹಾ — 3 ಯೋಹಾನೆ").osis()).toEqual("1John.1-3John.1");
	});
});

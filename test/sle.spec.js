"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sle.js";

describe("Localized book Rev (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sle)", () => {
		expect(p.parse("ಪ್ರಕಟನೆ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sle)", () => {
		expect(p.parse("ಮತ್ತಾಯ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sle)", () => {
		expect(p.parse("ಮಾರ್ಕ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sle)", () => {
		expect(p.parse("ಲುಕ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sle)", () => {
		expect(p.parse("1 ಯೊಹಾನ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ಯೊಹಾನ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sle)", () => {
		expect(p.parse("2 ಯೊಹಾನ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ಯೊಹಾನ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sle)", () => {
		expect(p.parse("3 ಯೊಹಾನ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ಯೊಹಾನ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sle)", () => {
		expect(p.parse("ಯೊಹಾನ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sle)", () => {
		expect(p.parse("ಅಪೊಸ್ತಲೊ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sle)", () => {
		expect(p.parse("ರೊಮಾಪೂರ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ರೊಮ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sle)", () => {
		expect(p.parse("1 ಕೊರಿಂಥವಾಲಾವೊನೆ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ಕೊರಿಂಥ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ಕೊರಿಂಥವಾಲಾವೊನೆ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ಕೊರಿಂಥ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sle)", () => {
		expect(p.parse("2 ಕೊರಿಂಥ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ಕೊರಿಂಥ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sle)", () => {
		expect(p.parse("ಕೊಲೆಸ್ಸೆ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sle)", () => {
		expect(p.parse("ಗಲಾತ್ಯ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sle)", () => {
		expect(p.parse("ಎಫೆಸ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sle)", () => {
		expect(p.parse("ಫಿಲಿಪ್ಪಿ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sle)", () => {
		expect(p.parse("1 ಥೆಸಲೊನಿಕ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ಥೆಸಲೊನಿಕ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sle)", () => {
		expect(p.parse("2 ಥೆಸಲೊನಿಕ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ಥೆಸಲೊನಿಕ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sle)", () => {
		expect(p.parse("1 ತಿಮೊತಿನೆ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ತಿಮೊತಿ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ತಿಮೊತಿನೆ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ತಿಮೊತಿ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sle)", () => {
		expect(p.parse("2 ತಿಮೊತಿ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ತಿಮೊತಿ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sle)", () => {
		expect(p.parse("ತಿತನೆ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sle)", () => {
		expect(p.parse("ಫಿಲೊಮನನೆ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ಫಿಲೊಮನ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sle)", () => {
		expect(p.parse("ಇಬ್ರಿಯ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sle)", () => {
		expect(p.parse("ಯಾಕೊಬ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sle)", () => {
		expect(p.parse("1 ಪೆತ್ರಾ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ಪೆತ್ರಾ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sle)", () => {
		expect(p.parse("2 ಪೆತ್ರಾ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ಪೆತ್ರಾ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sle)", () => {
		expect(p.parse("ಯುದ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (sle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (sle)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ಯೊಹಾನ - 3 ಯೊಹಾನ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ಯೊಹಾನ – 3 ಯೊಹಾನ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ಯೊಹಾನ — 3 ಯೊಹಾನ").osis()).toEqual("1John.1-3John.1");
	});
});

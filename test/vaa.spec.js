"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/vaa.js";

describe("Localized book Rev (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (vaa)", () => {
		expect(p.parse("ಪ್ರಕಾಶಿತ್ ವಚನ್‌ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ಪ್ರಕಾಶಿತ್ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (vaa)", () => {
		expect(p.parse("ಮತ್ತಾಯ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (vaa)", () => {
		expect(p.parse("ಮಾರ್ಕ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (vaa)", () => {
		expect(p.parse("ಲೂಕ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (vaa)", () => {
		expect(p.parse("1 ಯೋಹಾನ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ಯೋಹಾನ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 3John (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (vaa)", () => {
		expect(p.parse("3 ಯೋಹಾ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 2John (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (vaa)", () => {
		expect(p.parse("2 ಯೋಹಾ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ಯೋಹಾ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (vaa)", () => {
		expect(p.parse("ಯೋಹಾನ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ಯೋಹಾ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (vaa)", () => {
		expect(p.parse("ಅಪೊ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (vaa)", () => {
		expect(p.parse("ರೋಮ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (vaa)", () => {
		expect(p.parse("1 ಕೊರಿಂಥ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ಕೊರಿಂಥ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (vaa)", () => {
		expect(p.parse("2 ಕೊರಿಂಥ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ಕೊರಿಂಥ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (vaa)", () => {
		expect(p.parse("ಕೊಲೊಸ್ಸೆ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (vaa)", () => {
		expect(p.parse("ಗಲಾತ್ಯ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (vaa)", () => {
		expect(p.parse("ಎಫೆಸ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (vaa)", () => {
		expect(p.parse("ಫಿಲಿಪ್ಪಿ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (vaa)", () => {
		expect(p.parse("1 ಥೆಸ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ಥೆಸ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (vaa)", () => {
		expect(p.parse("2 ಥೆಸ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ಥೆಸ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (vaa)", () => {
		expect(p.parse("1 ತಿಮೊ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ತಿಮೊ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (vaa)", () => {
		expect(p.parse("2 ತಿಮೊ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ತಿಮೊ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (vaa)", () => {
		expect(p.parse("ತೀತ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (vaa)", () => {
		expect(p.parse("ಫಿಲೆಮೋನ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (vaa)", () => {
		expect(p.parse("ಇಬ್ರಿ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (vaa)", () => {
		expect(p.parse("ಯಾಕೋಬ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (vaa)", () => {
		expect(p.parse("1 ಪೇತ್ರ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ಪೇತ್ರ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (vaa)", () => {
		expect(p.parse("2 ಪೇತ್ರ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ಪೇತ್ರ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (vaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (vaa)", () => {
		expect(p.parse("ಯೂದ 1:1").osis()).toEqual("Jude.1.1");
	});
});

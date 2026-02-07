"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kan.js";

describe("Localized book Gen (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kan)", () => {
		expect(p.parse("ಆದಿಕಾಂಡ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ಆದಿ. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ಆದಿ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kan)", () => {
		expect(p.parse("ವಿಮೋಚನಕಾಂಡ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ವಿಮೋಚನ. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ವಿಮೋ. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ವಿಮೋ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kan)", () => {
		expect(p.parse("ಯಾಜಕಕಾಂಡ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ಯಾಜಕ. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ಯಾಜ. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ಯಾಜಕ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ಯಾಜ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kan)", () => {
		expect(p.parse("ಸಂಖ್ಯಾಕಾಂಡ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ಅರಣ್ಯಕಾಂಡ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ಸಂಖ್ಯಾ. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ಅರಣ್ಯ. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ಅರಣ್ಯ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (kan)", () => {
		expect(p.parse("ಪ್ರಲಾಪಗಳು 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ಪ್ರಲಾ. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ಪ್ರಲಾಪ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ಪ್ರಲಾ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kan)", () => {
		expect(p.parse("ಯೋಹಾನನು ಬರೆದ ಪ್ರಕಟನೆ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ಜು.ದರ್ಶನಾ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ಪ್ರಕಟನೆ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ದರ್ಶನಾ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ಪ್ರಕ. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ಪ್ರಕ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kan)", () => {
		expect(p.parse("ಧರ್ಮೋಪದೇಶಕಾಂಡ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ಧರ್ಮೋಪ. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ಧರ್ಮೋ. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ಧರ್ಮೋ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kan)", () => {
		expect(p.parse("ಯೆಹೋಶುವನು 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ಯೆಹೋಶುವ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ಯೆಹೋ. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ಯೆಹೋ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kan)", () => {
		expect(p.parse("ನ್ಯಾಯಸ್ಥಾಪಕರು 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ನ್ಯಾಯ. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ನ್ಯಾಯ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kan)", () => {
		expect(p.parse("ರೂತಳು 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ರೂತ. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ರೂತ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (kan)", () => {
		expect(p.parse("ಯೆಶಾ. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ಯೆಶಾಯ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ಯೆಶಾ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kan)", () => {
		expect(p.parse("1 ಸಮುವೇಲನು 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ಸಮುಯೇಲ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ಸಮು. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ಸಮು 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ಸಮುವೇಲನು 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ಸಮುಯೇಲ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ಸಮು. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ಸಮು 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("೧ ಸಮುವೇಲನು 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("೧ ಸಮುಯೇಲ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("೧ ಸಮು. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("೧ ಸಮು 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("೧. ಸಮುವೇಲನು 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("೧. ಸಮುಯೇಲ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("೧. ಸಮು. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("೧. ಸಮು 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kan)", () => {
		expect(p.parse("2 ಸಮುವೇಲನು 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ಸಮುಯೇಲ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ಸಮು. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ಸಮು 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ಸಮುವೇಲನು 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ಸಮುಯೇಲ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ಸಮು. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ಸಮು 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("೨ ಸಮುವೇಲನು 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("೨ ಸಮುಯೇಲ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("೨ ಸಮು. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("೨ ಸಮು 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("೨. ಸಮುವೇಲನು 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("೨. ಸಮುಯೇಲ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("೨. ಸಮು. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("೨. ಸಮು 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kan)", () => {
		expect(p.parse("1ಸಮು 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kan)", () => {
		expect(p.parse("2ಸಮು 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kan)", () => {
		expect(p.parse("1 ರಾಜರುಗಳು 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ಅರಸುಗಳು 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ಅರಸು. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ರಾಜರು 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ಅರಸು 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ರಾಜರುಗಳು 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ಅರಸುಗಳು 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ಅರಸು. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ರಾಜರು 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ಅರಸು 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("೧ ರಾಜರುಗಳು 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("೧ ಅರಸುಗಳು 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("೧ ಅರಸು. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("೧ ರಾಜರು 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("೧ ಅರಸು 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("೧. ರಾಜರುಗಳು 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("೧. ಅರಸುಗಳು 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("೧. ಅರಸು. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("೧. ರಾಜರು 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("೧. ಅರಸು 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kan)", () => {
		expect(p.parse("2 ರಾಜರುಗಳು 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ಅರಸುಗಳು 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ಅರಸು. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ರಾಜರು 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ಅರಸು 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ರಾಜರುಗಳು 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ಅರಸುಗಳು 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ಅರಸು. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ರಾಜರು 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ಅರಸು 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("೨ ರಾಜರುಗಳು 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("೨ ಅರಸುಗಳು 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("೨ ಅರಸು. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("೨ ರಾಜರು 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("೨ ಅರಸು 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("೨. ರಾಜರುಗಳು 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("೨. ಅರಸುಗಳು 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("೨. ಅರಸು. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("೨. ರಾಜರು 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("೨. ಅರಸು 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kan)", () => {
		expect(p.parse("1ಅರಸು 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kan)", () => {
		expect(p.parse("2ಅರಸು 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kan)", () => {
		expect(p.parse("1 ಪೂರ್ವಕಾಲ ವೃತ್ತಾಂತ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ಪೂರ್ವಕಾಲದ ಇತಿಹಾಸ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ಪೂರ್ವಕಾಲವೃತ್ತಾಂತ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ಪೂ.ಕಾ.ವೃ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ಪೂರ್ವ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ಪೂರ್ವ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ಪೂರ್ವಕಾಲ ವೃತ್ತಾಂತ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ಪೂರ್ವಕಾಲದ ಇತಿಹಾಸ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ಪೂರ್ವಕಾಲವೃತ್ತಾಂತ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ಪೂ.ಕಾ.ವೃ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ಪೂರ್ವ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ಪೂರ್ವ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("೧ ಪೂರ್ವಕಾಲ ವೃತ್ತಾಂತ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("೧ ಪೂರ್ವಕಾಲದ ಇತಿಹಾಸ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("೧ ಪೂರ್ವಕಾಲವೃತ್ತಾಂತ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("೧ ಪೂ.ಕಾ.ವೃ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("೧ ಪೂರ್ವ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("೧ ಪೂರ್ವ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("೧. ಪೂರ್ವಕಾಲ ವೃತ್ತಾಂತ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("೧. ಪೂರ್ವಕಾಲದ ಇತಿಹಾಸ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("೧. ಪೂರ್ವಕಾಲವೃತ್ತಾಂತ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("೧. ಪೂ.ಕಾ.ವೃ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("೧. ಪೂರ್ವ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("೧. ಪೂರ್ವ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kan)", () => {
		expect(p.parse("2 ಪೂರ್ವಕಾಲ ವೃತ್ತಾಂತ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ಪೂರ್ವಕಾಲದ ಇತಿಹಾಸ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ಪೂರ್ವಕಾಲವೃತ್ತಾಂತ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ಪೂ.ಕಾ.ವೃ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ಪೂರ್ವ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ಪೂರ್ವ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ಪೂರ್ವಕಾಲ ವೃತ್ತಾಂತ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ಪೂರ್ವಕಾಲದ ಇತಿಹಾಸ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ಪೂರ್ವಕಾಲವೃತ್ತಾಂತ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ಪೂ.ಕಾ.ವೃ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ಪೂರ್ವ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ಪೂರ್ವ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("೨ ಪೂರ್ವಕಾಲ ವೃತ್ತಾಂತ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("೨ ಪೂರ್ವಕಾಲದ ಇತಿಹಾಸ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("೨ ಪೂರ್ವಕಾಲವೃತ್ತಾಂತ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("೨ ಪೂ.ಕಾ.ವೃ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("೨ ಪೂರ್ವ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("೨ ಪೂರ್ವ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("೨. ಪೂರ್ವಕಾಲ ವೃತ್ತಾಂತ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("೨. ಪೂರ್ವಕಾಲದ ಇತಿಹಾಸ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("೨. ಪೂರ್ವಕಾಲವೃತ್ತಾಂತ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("೨. ಪೂ.ಕಾ.ವೃ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("೨. ಪೂರ್ವ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("೨. ಪೂರ್ವ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kan)", () => {
		expect(p.parse("1ಪೂರ್ವ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kan)", () => {
		expect(p.parse("2ಪೂರ್ವ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (kan)", () => {
		expect(p.parse("ಎಜ್ರನು 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ಎಜ್ರ. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ಎಜ್ರ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (kan)", () => {
		expect(p.parse("ನೆಹೆಮೀಯ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ನೆಹೆ. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ನೆಹೆ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kan)", () => {
		expect(p.parse("ಎಸ್ತೇರಳು 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ಎಸ್ತೇರ. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ಎಸ್ತೇ, 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ಎಸ್ತೇರ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ಎಸ್ತೇ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (kan)", () => {
		expect(p.parse("ಯೋಬನ ಗ್ರಂಥ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ಯೋಬನು 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ಯೋಬ. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ಯೋಬ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kan)", () => {
		expect(p.parse("ಕೀರ್ತನೆಗಳು 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ಕೀರ್ತನೆ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ಕೀರ್ತ. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ಕೀರ್ತ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kan)", () => {
		expect(p.parse("ಜ್ಞಾನೋಕ್ತಿಗಳು 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ಜ್ಞಾನೋಕ್ತಿ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ಜ್ಞಾನೋ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ಜ್ಞಾ. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kan)", () => {
		expect(p.parse("ಪ್ರಸಂಗಿ. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ಪ್ರಸಂಗಿ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ಉಪದೇಶಕ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ಪ್ರಸ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (kan)", () => {
		expect(p.parse("ಪರಮ ಗೀತ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ಪರಮಗೀತೆ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ಪ. ಗೀ. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ಪರಮಗೀತ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ಪ.ಗೀ. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ಗೀತೆ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ಪರಮ. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ಪರಮ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (kan)", () => {
		expect(p.parse("ಯೆರೆಮೀಯ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ಯೆರೆ. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ಯೆರೆ 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (kan)", () => {
		expect(p.parse("ಯೆಜೆಕಿಯೇಲನು 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ಯೆಹೆಜ್ಕೇಲನು 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ಯೆಹೆಜ್ಕೇಲ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ಯೆಜೆ. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ಯೆಹೆ. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ಯೆಹೆ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kan)", () => {
		expect(p.parse("ದಾನಿಯೇಲನು 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ದಾನಿಯೇಲ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ದಾನಿ. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ದಾನಿ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (kan)", () => {
		expect(p.parse("ಹೋಶೇ. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ಹೋಶೇಯ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ಹೋಶೇ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (kan)", () => {
		expect(p.parse("ಯೋಯೇಲ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ಯೋವೇ. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ಯೋವೇಲ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ಯೋವೇ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (kan)", () => {
		expect(p.parse("ಆಮೋ. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ಆಮೋಸ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ಆಮೋ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (kan)", () => {
		expect(p.parse("ಓಬದ್ಯ. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ಒಬದ್ಯ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ಓಬದ್ಯ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ಓಬ. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ಓಬ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kan)", () => {
		expect(p.parse("ಯೋನನು 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ಯೋನ. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ಯೋನ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (kan)", () => {
		expect(p.parse("ಮೀಕ. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ಮೀಕ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (kan)", () => {
		expect(p.parse("ನಹೂ. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ನಹೂಮ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ನಹೂ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (kan)", () => {
		expect(p.parse("ಹಬಕ್ಕೂ. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ಹಬಕ್ಕೂಕ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ಹಬ. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ಹಬ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (kan)", () => {
		expect(p.parse("ಚೆಫನ್ಯ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ಜೆಫನ್ಯ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ಚೆಫ. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ಜೆಫ. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ಚೆಫ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (kan)", () => {
		expect(p.parse("ಹಗ್ಗಾ. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ಹಗ್ಗಾಯ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ಹಗ್ಗಾ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (kan)", () => {
		expect(p.parse("ಜೆಕರ್ಯ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ಜೆಕ. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ಜೆಕ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kan)", () => {
		expect(p.parse("ಮಲಾಕಿಯ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ಮಲಾಕಿ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ಮಲಾ. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ಮಲಾ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kan)", () => {
		expect(p.parse("ಮತ್ತಾಯನ ಸುವಾರ್ತೆ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ಮತ್ತಾ. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ಮತ್ತಾಯ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ಮಾತೆವ್ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ಮತ್ತಾ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kan)", () => {
		expect(p.parse("ಮಾರ್ಕನ ಸುವಾರ್ತೆ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ಮಾರ್ಕ. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ಮಾರ್ಕ್ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ಮಾರ್ಕ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kan)", () => {
		expect(p.parse("ಲೂಕನ ಸುವಾರ್ತೆ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ಲುಕ್ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ಲೂಕ. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ಲೂಕ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kan)", () => {
		expect(p.parse("ಯೋಹಾನನು ಬರೆದ ಮೊದಲನೆ ಪತ್ರ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ಯೋಹಾ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kan)", () => {
		expect(p.parse("ಯೋಹಾನನು ಬರೆದ ಎರಡನೆ ಪತ್ರ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ಯೋಹಾ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kan)", () => {
		expect(p.parse("ಯೋಹಾನನು ಬರೆದ ಮೂರನೆ ಪತ್ರ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ಯೊವಾನ್ನನು 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ಜುವಾಂವ್ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ಯೋಹಾನನು 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("೩ ಯೊವಾ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ಯೋಹಾ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ಯೋಹಾನ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ಜುವಾ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ಯೋಹಾ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ಯೋಹಾ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kan)", () => {
		expect(p.parse("1 ಯೊವಾನ್ನನು 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ಜುವಾಂವ್ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ಯೋಹಾನನು 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ಯೊವಾ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ಯೋಹಾ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ಯೋಹಾನ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ಜುವಾ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ಯೋಹಾ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ಯೊವಾನ್ನನು 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ಜುವಾಂವ್ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ಯೋಹಾನನು 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ಯೊವಾ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ಯೋಹಾ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ಯೋಹಾನ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ಜುವಾ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ಯೋಹಾ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("೧ ಯೊವಾನ್ನನು 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("೧ ಜುವಾಂವ್ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("೧ ಯೋಹಾನನು 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("೧ ಯೊವಾ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("೧ ಯೋಹಾ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("೧ ಯೋಹಾನ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("೧ ಜುವಾ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("೧ ಯೋಹಾ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("೧. ಯೊವಾನ್ನನು 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("೧. ಜುವಾಂವ್ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("೧. ಯೋಹಾನನು 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("೧. ಯೊವಾ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("೧. ಯೋಹಾ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("೧. ಯೋಹಾನ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("೧. ಜುವಾ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("೧. ಯೋಹಾ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kan)", () => {
		expect(p.parse("2 ಯೊವಾನ್ನನು 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ಜುವಾಂವ್ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ಯೋಹಾನನು 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ಯೊವಾ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ಯೋಹಾ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ಯೋಹಾನ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ಜುವಾ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ಯೋಹಾ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ಯೊವಾನ್ನನು 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ಜುವಾಂವ್ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ಯೋಹಾನನು 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ಯೊವಾ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ಯೋಹಾ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ಯೋಹಾನ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ಜುವಾ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ಯೋಹಾ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("೨ ಯೊವಾನ್ನನು 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("೨ ಜುವಾಂವ್ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("೨ ಯೋಹಾನನು 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("೨ ಯೊವಾ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("೨ ಯೋಹಾ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("೨ ಯೋಹಾನ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("೨ ಜುವಾ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("೨ ಯೋಹಾ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("೨. ಯೊವಾನ್ನನು 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("೨. ಜುವಾಂವ್ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("೨. ಯೋಹಾನನು 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("೨. ಯೊವಾ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("೨. ಯೋಹಾ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("೨. ಯೋಹಾನ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("೨. ಜುವಾ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("೨. ಯೋಹಾ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kan)", () => {
		expect(p.parse("ಯೋಹಾನನ ಸುವಾರ್ತೆ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ಜುವಾಂವ್ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ಯೊವಾನ್ನ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ಯೊವಾ. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ಯೋಹಾ. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ಯೋಹಾನ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ಯೋಹಾ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kan)", () => {
		expect(p.parse("ಪ್ರೇಷಿತರ ಕಾರ್ಯಕಲಾಪಗಳು 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ಅಪೊಸ್ತಲರ ಕಾರ್ಯಗಳು 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ಅಪೊಸ್ತಲರ ಕೃತ್ಯಗಳು 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ಅಪೊಸ್ತಲಾಂಚಿ ಕಾಮಾ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ಪ್ರೇ. ಕಾ. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ಅ. ಕೃ. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ಅ. ಕೃ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ಅ.ಕಾ. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ಅ.ಕಾ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kan)", () => {
		expect(p.parse("ರೋಮ್‌ನಗರದವರಿಗೆ ಬರೆದ ಪತ್ರ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ರೋಮಾಪುರದವರಿಗೆ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ರೊಮ್‍ಕಾರಾ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ರೋಮನರಿಗೆ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ರೋಮ್‌. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ರೋಮಾ. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ರೊಮ್ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ರೋಮ. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ರೋಮಾ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kan)", () => {
		expect(p.parse("ಕೊರಿಂಥದವರಿಗೆ ಬರೆದ ಮೊದಲನೆ ಪತ್ರ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ಕೊರಿ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kan)", () => {
		expect(p.parse("ಕೊರಿಂಥದವರಿಗೆ ಬರೆದ ಎರಡನೆ ಪತ್ರ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ಕೊರಿಂಥ್ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ಕೊರಿ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kan)", () => {
		expect(p.parse("1 ಕೊರಿಂಥದವರಿಗೆ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ಕೊರಿಂಥಿಯರಿಗೆ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ಕೊರಿಂಥ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ಕೊರಿಂಥ್ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ಕೊರಿಂಥ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ಕೊರಿ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ಕೊರಿಂಥದವರಿಗೆ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ಕೊರಿಂಥಿಯರಿಗೆ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ಕೊರಿಂಥ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ಕೊರಿಂಥ್ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ಕೊರಿಂಥ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ಕೊರಿ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("೧ ಕೊರಿಂಥದವರಿಗೆ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("೧ ಕೊರಿಂಥಿಯರಿಗೆ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("೧ ಕೊರಿಂಥ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("೧ ಕೊರಿಂಥ್ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("೧ ಕೊರಿಂಥ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("೧ ಕೊರಿ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("೧. ಕೊರಿಂಥದವರಿಗೆ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("೧. ಕೊರಿಂಥಿಯರಿಗೆ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("೧. ಕೊರಿಂಥ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("೧. ಕೊರಿಂಥ್ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("೧. ಕೊರಿಂಥ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("೧. ಕೊರಿ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kan)", () => {
		expect(p.parse("2 ಕೊರಿಂಥದವರಿಗೆ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ಕೊರಿಂಥಿಯರಿಗೆ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ಕೊರಿಂಥ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ಕೊರಿಂಥ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ಕೊರಿ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ಕೊರಿಂಥದವರಿಗೆ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ಕೊರಿಂಥಿಯರಿಗೆ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ಕೊರಿಂಥ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ಕೊರಿಂಥ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ಕೊರಿ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("೨ ಕೊರಿಂಥದವರಿಗೆ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("೨ ಕೊರಿಂಥಿಯರಿಗೆ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("೨ ಕೊರಿಂಥ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("೨ ಕೊರಿಂಥ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("೨ ಕೊರಿ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("೨. ಕೊರಿಂಥದವರಿಗೆ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("೨. ಕೊರಿಂಥಿಯರಿಗೆ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("೨. ಕೊರಿಂಥ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("೨. ಕೊರಿಂಥ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("೨. ಕೊರಿ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kan)", () => {
		expect(p.parse("ಕೊಲೊಸ್ಸೆಯವರಿಗೆ ಬರೆದ ಪತ್ರ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ಕೊಲೊಸ್ಸೆಯವರಿಗೆ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ಕೊಲೊಸ್ಸೆಯರಿಗೆ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ಕೊಲೆಸ್ಸೆ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ಕೊಲೊಸ್ಸೆ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ಕೊಲೊ. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ಕೊಲೆ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ಕೊಲೊ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kan)", () => {
		expect(p.parse("ಗಲಾತ್ಯದವರಿಗೆ ಬರೆದ ಪತ್ರ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ಗಲಾತ್ಯದವರಿಗೆ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ಗಲಾತ್ಯರಿಗೆ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ಗಲಾತ್ಯ. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ಗಲಾತ್ಯ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ಗಾಲಾತ್ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ಗಲಾ. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ಗಲಾ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kan)", () => {
		expect(p.parse("ಎಫೆಸದವರಿಗೆ ಬರೆದ ಪತ್ರ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ಎಫೆಸದವರಿಗೆ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ಎಫೆಸಿಯರಿಗೆ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ಎಫೆಜ್ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ಎಫೆಸ. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ಎಫೆ. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ಎಫೆಸ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ಎಫೆ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kan)", () => {
		expect(p.parse("ಫಿಲಿಪ್ಪಿಯವರಿಗೆ ಬರೆದ ಪತ್ರ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ಫಿಲಿಪ್ಪಿಯವರಿಗೆ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ಫಿಲಿಪ್ಪಿಯರಿಗೆ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ಫಿಲಿಪ್ಪಿ. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ಫಿಲಿಪ್ಪಿ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ಫಿಲಿ. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kan)", () => {
		expect(p.parse("ಥೆಸಲೋನಿಕದವರಿಗೆ ಬರೆದ ಮೊದಲನೆ ಪತ್ರ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ಥೆಸ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kan)", () => {
		expect(p.parse("ಥೆಸಲೋನಿಕದವರಿಗೆ ಬರೆದ ಎರಡನೆ ಪತ್ರ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ಥೆಸ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kan)", () => {
		expect(p.parse("1 ಥೆಸ್ಸಾಲೊನಿಕಾಕಾರಾ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ಥೆಸಲೋನಿಕದವರಿಗೆ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ಥೆಸಲೋನಿಯರಿಗೆ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ಥೆಸಲೋನಿಕದ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ಥಸ್ಸಾ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ಥೆಸ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ಥೆಸ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ಥೆಸ್ಸಾಲೊನಿಕಾಕಾರಾ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ಥೆಸಲೋನಿಕದವರಿಗೆ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ಥೆಸಲೋನಿಯರಿಗೆ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ಥೆಸಲೋನಿಕದ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ಥಸ್ಸಾ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ಥೆಸ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ಥೆಸ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("೧ ಥೆಸ್ಸಾಲೊನಿಕಾಕಾರಾ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("೧ ಥೆಸಲೋನಿಕದವರಿಗೆ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("೧ ಥೆಸಲೋನಿಯರಿಗೆ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("೧ ಥೆಸಲೋನಿಕದ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("೧ ಥಸ್ಸಾ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("೧ ಥೆಸ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("೧ ಥೆಸ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("೧. ಥೆಸ್ಸಾಲೊನಿಕಾಕಾರಾ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("೧. ಥೆಸಲೋನಿಕದವರಿಗೆ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("೧. ಥೆಸಲೋನಿಯರಿಗೆ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("೧. ಥೆಸಲೋನಿಕದ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("೧. ಥಸ್ಸಾ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("೧. ಥೆಸ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("೧. ಥೆಸ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kan)", () => {
		expect(p.parse("2 ಥೆಸ್ಸಾಲೊನಿಕಾ‍ಕಾರಾಕ್ನಿ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ಥೆಸಲೋನಿಕದವರಿಗೆ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ಥೆಸಲೋನಿಯರಿಗೆ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ಥೆಸಲೋನಿಕದ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ಥೆಸ್ಸಾ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ಥೆಸ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ಥೆಸ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ಥೆಸ್ಸಾಲೊನಿಕಾ‍ಕಾರಾಕ್ನಿ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ಥೆಸಲೋನಿಕದವರಿಗೆ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ಥೆಸಲೋನಿಯರಿಗೆ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ಥೆಸಲೋನಿಕದ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ಥೆಸ್ಸಾ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ಥೆಸ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ಥೆಸ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("೨ ಥೆಸ್ಸಾಲೊನಿಕಾ‍ಕಾರಾಕ್ನಿ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("೨ ಥೆಸಲೋನಿಕದವರಿಗೆ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("೨ ಥೆಸಲೋನಿಯರಿಗೆ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("೨ ಥೆಸಲೋನಿಕದ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("೨ ಥೆಸ್ಸಾ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("೨ ಥೆಸ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("೨ ಥೆಸ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("೨. ಥೆಸ್ಸಾಲೊನಿಕಾ‍ಕಾರಾಕ್ನಿ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("೨. ಥೆಸಲೋನಿಕದವರಿಗೆ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("೨. ಥೆಸಲೋನಿಯರಿಗೆ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("೨. ಥೆಸಲೋನಿಕದ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("೨. ಥೆಸ್ಸಾ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("೨. ಥೆಸ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("೨. ಥೆಸ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kan)", () => {
		expect(p.parse("ತಿಮೊಥೆಯನಿಗೆ ಬರೆದ ಮೊದಲನೆ ಪತ್ರ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ತಿಮೊ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kan)", () => {
		expect(p.parse("ತಿಮೊಥೆಯನಿಗೆ ಬರೆದ ಎರಡನೆ ಪತ್ರ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ತಿಮೊ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kan)", () => {
		expect(p.parse("1 ತಿಮೊಥೆಯನಿಗೆ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ತಿಮೊಥೇಯನಿಗೆ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ತಿಮೊಥೆ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ತಿಮೊಥಿ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ತಿಮೊಥೆ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ತಿಮೊ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ತಿಮೊ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ತಿಮೊಥೆಯನಿಗೆ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ತಿಮೊಥೇಯನಿಗೆ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ತಿಮೊಥೆ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ತಿಮೊಥಿ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ತಿಮೊಥೆ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ತಿಮೊ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ತಿಮೊ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("೧ ತಿಮೊಥೆಯನಿಗೆ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("೧ ತಿಮೊಥೇಯನಿಗೆ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("೧ ತಿಮೊಥೆ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("೧ ತಿಮೊಥಿ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("೧ ತಿಮೊಥೆ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("೧ ತಿಮೊ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("೧ ತಿಮೊ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("೧. ತಿಮೊಥೆಯನಿಗೆ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("೧. ತಿಮೊಥೇಯನಿಗೆ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("೧. ತಿಮೊಥೆ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("೧. ತಿಮೊಥಿ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("೧. ತಿಮೊಥೆ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("೧. ತಿಮೊ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("೧. ತಿಮೊ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kan)", () => {
		expect(p.parse("2 ತಿಮೊಥೆಯನಿಗೆ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ತಿಮೊಥೇಯನಿಗೆ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ತಿಮೊಥೆ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ತಿಮೊಥಿ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ತಿಮೊಥೆ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ತಿಮೊ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ತಿಮೊ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ತಿಮೊಥೆಯನಿಗೆ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ತಿಮೊಥೇಯನಿಗೆ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ತಿಮೊಥೆ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ತಿಮೊಥಿ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ತಿಮೊಥೆ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ತಿಮೊ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ತಿಮೊ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("೨ ತಿಮೊಥೆಯನಿಗೆ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("೨ ತಿಮೊಥೇಯನಿಗೆ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("೨ ತಿಮೊಥೆ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("೨ ತಿಮೊಥಿ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("೨ ತಿಮೊಥೆ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("೨ ತಿಮೊ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("೨ ತಿಮೊ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("೨. ತಿಮೊಥೆಯನಿಗೆ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("೨. ತಿಮೊಥೇಯನಿಗೆ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("೨. ತಿಮೊಥೆ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("೨. ತಿಮೊಥಿ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("೨. ತಿಮೊಥೆ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("೨. ತಿಮೊ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("೨. ತಿಮೊ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kan)", () => {
		expect(p.parse("ತೀತನಿಗೆ ಬರೆದ ಪತ್ರ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ತೀತನಿಗೆ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ತಿತಾಕ್ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ತಿತ್ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ತೀತ. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ತೀತ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kan)", () => {
		expect(p.parse("ಫಿಲೆಮೋನನಿಗೆ ಬರೆದ ಪತ್ರ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ಫಿಲೆಮೋನನಿಗೆ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ಫಿಲೆಮುನ್ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ಫಿಲೆಮೊನ್ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ಫಿಲೆಮೋ. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ಫಿಲೆಮೋನ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ಫಿಲೆ. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ಫಿಲೆ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kan)", () => {
		expect(p.parse("ಇಬ್ರಿಯರಿಗೆ ಬರೆದ ಪತ್ರ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ಹಿಬ್ರಿಯರಿಗೆ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ಇಬ್ರಿಯರಿಗೆ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ಹೆಬ್ರೆವ್ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ಹಿಬ್ರಿ. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ಇಬ್ರಿ. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ಇಬ್ರಿ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kan)", () => {
		expect(p.parse("ಯಾಕೋಬನು ಬರೆದ ಪತ್ರ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ಯಾಕೋಬನು 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ಜಾಕೊಬ್ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ಯಕೋಬನು 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ಯಾಕೋಬ. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ಯಾಕೋ. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ಯಾಕೋಬ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ಜಾಕೊ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ಯಾಕೋ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kan)", () => {
		expect(p.parse("ಪೇತ್ರನು ಬರೆದ ಮೊದಲನೆ ಪತ್ರ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ಪೆದ್ರುಚಿ ಪಯ್ಲಿಚಿ ಚಿಟ್ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ಪೇತ್ರ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kan)", () => {
		expect(p.parse("ಪೇತ್ರನು ಬರೆದ ಎರಡನೆ ಪತ್ರ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ಪೆದ್ರುಚಿ ದುಸ್ರಿ ಚಿಟ್ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ಪೇತ್ರ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kan)", () => {
		expect(p.parse("1 ಪೇತ್ರನು 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ಪೆದ್ರು 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ಪೇತ್ರ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ಪೇತ್ರ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ಪೇತ್ರನು 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ಪೆದ್ರು 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ಪೇತ್ರ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ಪೇತ್ರ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("೧ ಪೇತ್ರನು 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("೧ ಪೆದ್ರು 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("೧ ಪೇತ್ರ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("೧ ಪೇತ್ರ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("೧. ಪೇತ್ರನು 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("೧. ಪೆದ್ರು 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("೧. ಪೇತ್ರ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("೧. ಪೇತ್ರ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kan)", () => {
		expect(p.parse("2 ಪೇತ್ರನು 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ಪೆದ್ರು 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ಪೇತ್ರ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ಪೇತ್ರ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ಪೇತ್ರನು 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ಪೆದ್ರು 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ಪೇತ್ರ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ಪೇತ್ರ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("೨ ಪೇತ್ರನು 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("೨ ಪೆದ್ರು 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("೨ ಪೇತ್ರ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("೨ ಪೇತ್ರ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("೨. ಪೇತ್ರನು 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("೨. ಪೆದ್ರು 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("೨. ಪೇತ್ರ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("೨. ಪೇತ್ರ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kan)", () => {
		expect(p.parse("ಯೂದನು ಬರೆದ ಪತ್ರ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ಯೂದನು 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ಜುದ್ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ಯೂದ. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ಯೂದ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (kan)", () => {
		expect(p.parse("೧ ಪೇತ್ರ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ಪೇತ್ರನು 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ಪೇತ್ರ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ಸಮುವೇಲನು 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ತಿಮೊಥೆಯನಿಗೆ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("೧ ತಿಮೊ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ತಿಮೊಥೆ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("೨ ಪೇತ್ರ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ಪೇತ್ರನು 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ಪೇತ್ರ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ಸಮುವೇಲನು 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ತಿಮೊಥೆಯನಿಗೆ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("೨ ತಿಮೊ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ತಿಮೊಥೆ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ಅಪೊಸ್ತಲರ ಕೃತ್ಯಗಳು 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ಧರ್ಮೋಪದೇಶಕಾಂಡ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ಧರ್ಮೋ. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ಎಸ್ತೇರ. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ಎಸ್ತೇರಳು 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ಎಸ್ತೇ, 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ಯೆಹೆಜ್ಕೇಲ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ಹೋಶೇ. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ಹೋಶೇಯ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ಯೋವೇ. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ಯೋವೇಲ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ಕೀರ್ತನೆಗಳು 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ಕೀರ್ತ. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ಪರಮಗೀತ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ತೀತನಿಗೆ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ತೀತ. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Parser helper should handle book ranges (kan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (kan)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ಯೋಹಾನನು ಬರೆದ ಮೊದಲನೆ ಪತ್ರ - ಯೋಹಾನನು ಬರೆದ ಮೂರನೆ ಪತ್ರ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ಯೋಹಾನನು ಬರೆದ ಮೊದಲನೆ ಪತ್ರ – ಯೋಹಾನನು ಬರೆದ ಮೂರನೆ ಪತ್ರ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ಯೋಹಾನನು ಬರೆದ ಮೊದಲನೆ ಪತ್ರ — ಯೋಹಾನನು ಬರೆದ ಮೂರನೆ ಪತ್ರ").osis()).toEqual("1John.1-3John.1");
	});
});

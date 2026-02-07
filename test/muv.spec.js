"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/muv.js";

describe("Localized book Rev (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (muv)", () => {
		expect(p.parse("വെളിപ്പടത്ത് 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("വെളി. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (muv)", () => {
		expect(p.parse("മത്തായ് 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("മത്താ. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (muv)", () => {
		expect(p.parse("മർക്കോശ് 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("മർ. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (muv)", () => {
		expect(p.parse("ലൂക്കോശ് 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ലൂക്കോ. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (muv)", () => {
		expect(p.parse("1 ഓകന്നാൻ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ഓക. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ഓകന്നാൻ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ഓക. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (muv)", () => {
		expect(p.parse("2 ഓകന്നാൻ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ഓക. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ഓകന്നാൻ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ഓക. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (muv)", () => {
		expect(p.parse("3 ഓകന്നാൻ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ഓക. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ഓകന്നാൻ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ഓക. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (muv)", () => {
		expect(p.parse("ഓകന്നാൻ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ഓക. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (muv)", () => {
		expect(p.parse("അപ്പൊശ്തലൻമാര തെയ്‌വവേലകള് 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("അപ്പൊ. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (muv)", () => {
		expect(p.parse("റോമറ് 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("റോമ. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (muv)", () => {
		expect(p.parse("1 കൊരിന്തിയിര് 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 കൊരി. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. കൊരിന്തിയിര് 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. കൊരി. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (muv)", () => {
		expect(p.parse("2 കൊരിന്തിയിര് 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 കൊരി. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. കൊരിന്തിയിര് 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. കൊരി. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (muv)", () => {
		expect(p.parse("കൊലൊശ്‌യിര് 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("കൊലൊ. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (muv)", () => {
		expect(p.parse("കെലാത്തിയിര് 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("കെലാ. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (muv)", () => {
		expect(p.parse("എപെശിയിര് 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("എപെ. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (muv)", () => {
		expect(p.parse("പിലിപ്പിയിര് 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("പിലി. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (muv)", () => {
		expect(p.parse("1 തെശലോനിക്കിയിര് 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 തെശ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. തെശലോനിക്കിയിര് 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. തെശ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (muv)", () => {
		expect(p.parse("2 തെശലോനിക്കിയിര് 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 തെശ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. തെശലോനിക്കിയിര് 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. തെശ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (muv)", () => {
		expect(p.parse("1 തിമ്ത്തിയോശ് 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 തിമ്. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. തിമ്ത്തിയോശ് 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. തിമ്. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (muv)", () => {
		expect(p.parse("2 തിമ്ത്തിയോശ് 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 തിമ്. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. തിമ്ത്തിയോശ് 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. തിമ്. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (muv)", () => {
		expect(p.parse("തിത്തോശ് 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("തീത്തോ. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (muv)", () => {
		expect(p.parse("പിലേമോൻ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("പിലേ. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (muv)", () => {
		expect(p.parse("എപ്പറായിര് 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("എപ്പറാ. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (muv)", () => {
		expect(p.parse("ശാക്കോവ് 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ശാക്കോ. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (muv)", () => {
		expect(p.parse("1 പത്ത്റോശ് 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 പത്ത്. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. പത്ത്റോശ് 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. പത്ത്. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (muv)", () => {
		expect(p.parse("2 പത്ത്റോശ് 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 പത്ത്. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. പത്ത്റോശ് 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. പത്ത്. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (muv)", () => {
		expect(p.parse("ശൂത. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ശൂത 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (muv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (muv)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ഓകന്നാൻ - 3 ഓകന്നാൻ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ഓകന്നാൻ – 3 ഓകന്നാൻ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ഓകന്നാൻ — 3 ഓകന്നാൻ").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/udg.js";

describe("Localized book Rev (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (udg)", () => {
		expect(p.parse("ബെ്ളിപട്ട കാര്യഗ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (udg)", () => {
		expect(p.parse("മത്തായി 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (udg)", () => {
		expect(p.parse("മറ്‌ക്കോസ് 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (udg)", () => {
		expect(p.parse("ലൂക്കോസ് 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (udg)", () => {
		expect(p.parse("1 ഓഗന്നാ് 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ഓഗന്നാ് 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (udg)", () => {
		expect(p.parse("2 ഓഗന്നാ് 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ഓഗന്നാ് 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (udg)", () => {
		expect(p.parse("3 ഓഗന്നാ് 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ഓഗന്നാ് 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (udg)", () => {
		expect(p.parse("ഓഗന്നാ് 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (udg)", () => {
		expect(p.parse("അപ്പൊസലല 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (udg)", () => {
		expect(p.parse("റോമക്കാറാര് 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (udg)", () => {
		expect(p.parse("1 കൊരിന്ത്യക്കാറാര് 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. കൊരിന്ത്യക്കാറാര് 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (udg)", () => {
		expect(p.parse("2 കൊരിന്ത്യക്കാറാര് 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. കൊരിന്ത്യക്കാറാര് 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (udg)", () => {
		expect(p.parse("കൊലോസ്യക്കാറാര് 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (udg)", () => {
		expect(p.parse("ഗലാത്ത്യക്കാറാര് 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (udg)", () => {
		expect(p.parse("എപ്പെസോസ്‌ക്കാറാര് 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (udg)", () => {
		expect(p.parse("പിലിപ്പ്യക്കാറാര് 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (udg)", () => {
		expect(p.parse("1 തെസ്‌ലോനിക്ക്യക്കാറാര് 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. തെസ്‌ലോനിക്ക്യക്കാറാര് 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (udg)", () => {
		expect(p.parse("2 തെസ്‌ലോനിക്ക്യക്കാറാര് 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. തെസ്‌ലോനിക്ക്യക്കാറാര് 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (udg)", () => {
		expect(p.parse("1 തിമത്തോസ് 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. തിമത്തോസ് 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (udg)", () => {
		expect(p.parse("2 തിമത്തോസ് 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. തിമത്തോസ് 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (udg)", () => {
		expect(p.parse("തീത്തോസ് 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (udg)", () => {
		expect(p.parse("പിലേമോന് 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (udg)", () => {
		expect(p.parse("എവുറാര് 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (udg)", () => {
		expect(p.parse("ആക്കോവു 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (udg)", () => {
		expect(p.parse("1 പത്ത്‌റോസ് 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. പത്ത്‌റോസ് 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (udg)", () => {
		expect(p.parse("2 പത്ത്‌റോസ് 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. പത്ത്‌റോസ് 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (udg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (udg)", () => {
		expect(p.parse("ജൂദാ് 1:1").osis()).toEqual("Jude.1.1");
	});
});

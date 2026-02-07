"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/pkr.js";

describe("Localized book Rev (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (pkr)", () => {
		expect(p.parse("ബെ്ളിപട്ട കാര്യ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (pkr)", () => {
		expect(p.parse("മത്തായി 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (pkr)", () => {
		expect(p.parse("മര്‌ക്കോസു 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (pkr)", () => {
		expect(p.parse("ലൂക്കോസു 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pkr)", () => {
		expect(p.parse("1 ഓഗന്നാന് 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ഓഗന്നാന് 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pkr)", () => {
		expect(p.parse("2 ഓഗന്നാന് 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ഓഗന്നാന് 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (pkr)", () => {
		expect(p.parse("3 ഓഗന്നാന് 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ഓഗന്നാന് 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (pkr)", () => {
		expect(p.parse("ഓഗന്നാന് 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (pkr)", () => {
		expect(p.parse("അപ്പോസുത്തലാര് 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (pkr)", () => {
		expect(p.parse("റോമഗാറാര് 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pkr)", () => {
		expect(p.parse("1 കൊരിന്ത്യഗാറാര് 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. കൊരിന്ത്യഗാറാര് 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pkr)", () => {
		expect(p.parse("2 കൊരിന്ത്യഗാറാര് 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. കൊരിന്ത്യഗാറാര് 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (pkr)", () => {
		expect(p.parse("കൊലേസ്യഗാറാര് 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (pkr)", () => {
		expect(p.parse("ഗലാത്ത്യഗാറാര് 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (pkr)", () => {
		expect(p.parse("എപസോസുഗാറാര് 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (pkr)", () => {
		expect(p.parse("പിലിപ്പ്യഗാറാര് 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pkr)", () => {
		expect(p.parse("1 തെസെലോനിക്ക്യഗാറാര് 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. തെസെലോനിക്ക്യഗാറാര് 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pkr)", () => {
		expect(p.parse("2 തെസെലോനിക്ക്യഗാറാര് 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. തെസെലോനിക്ക്യഗാറാര് 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pkr)", () => {
		expect(p.parse("1 തിമിത്തോസു 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. തിമിത്തോസു 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pkr)", () => {
		expect(p.parse("2 തിമിത്തോസു 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. തിമിത്തോസു 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (pkr)", () => {
		expect(p.parse("തീത്തോസു 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (pkr)", () => {
		expect(p.parse("പിലെമോനു 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (pkr)", () => {
		expect(p.parse("എവുറായാര് 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (pkr)", () => {
		expect(p.parse("ആക്കോവു 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pkr)", () => {
		expect(p.parse("1 പത്ത്‌റോസു 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. പത്ത്‌റോസു 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pkr)", () => {
		expect(p.parse("2 പത്ത്‌റോസു 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. പത്ത്‌റോസു 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (pkr)", () => {
		expect(p.parse("ജൂദാന് 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (pkr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (pkr)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ഓഗന്നാന് - 3 ഓഗന്നാന്").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ഓഗന്നാന് – 3 ഓഗന്നാന്").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ഓഗന്നാന് — 3 ഓഗന്നാന്").osis()).toEqual("1John.1-3John.1");
	});
});

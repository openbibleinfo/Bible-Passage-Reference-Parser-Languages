"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/yea.js";

describe("Localized book Rev (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (yea)", () => {
		expect(p.parse("കാട്ടികൊടുത്ത കാരിയ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("കാട്ടി 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (yea)", () => {
		expect(p.parse("മത്തായി 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("മത്താ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (yea)", () => {
		expect(p.parse("മറുക്കോച്ചു 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("മറു 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (yea)", () => {
		expect(p.parse("ലൂക്കോച്ചു 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ലൂക്കോ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (yea)", () => {
		expect(p.parse("1 ഓഗെന്നാനു 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ഓഗെ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ഓഗെന്നാനു 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ഓഗെ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (yea)", () => {
		expect(p.parse("2 ഓഗെന്നാനു 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ഓഗെ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ഓഗെന്നാനു 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ഓഗെ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (yea)", () => {
		expect(p.parse("3 ഓഗെന്നാനു 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ഓഗെ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ഓഗെന്നാനു 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ഓഗെ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (yea)", () => {
		expect(p.parse("ഓഗെന്നാനു 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ഓഗെ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (yea)", () => {
		expect(p.parse("അപ്പോച്ചോലെര ചെയിദ കാരിയ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("അപ്പോ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (yea)", () => {
		expect(p.parse("റോമിലെര 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("റോമി 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (yea)", () => {
		expect(p.parse("1 കൊരിന്തിയെര 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 കൊരി 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. കൊരിന്തിയെര 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. കൊരി 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (yea)", () => {
		expect(p.parse("2 കൊരിന്തിയെര 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 കൊരി 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. കൊരിന്തിയെര 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. കൊരി 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (yea)", () => {
		expect(p.parse("കൊലോച്ചിയെര 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("കൊലോ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (yea)", () => {
		expect(p.parse("ഗെലാത്തിയെര 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ഗെലാ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (yea)", () => {
		expect(p.parse("എപേച്ചിയെര 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("എപേ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (yea)", () => {
		expect(p.parse("പിലിപ്പിയെര 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("പിലി 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (yea)", () => {
		expect(p.parse("1 തെച്ചലോനിക്കെര 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 തെച്ച 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. തെച്ചലോനിക്കെര 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. തെച്ച 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (yea)", () => {
		expect(p.parse("2 തെച്ചലോനിക്കെര 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 തെച്ച 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. തെച്ചലോനിക്കെര 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. തെച്ച 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (yea)", () => {
		expect(p.parse("1 തിമോത്തിയോച്ചു 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 തിമോ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. തിമോത്തിയോച്ചു 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. തിമോ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (yea)", () => {
		expect(p.parse("2 തിമോത്തിയോച്ചു 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 തിമോ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. തിമോത്തിയോച്ചു 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. തിമോ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (yea)", () => {
		expect(p.parse("തീത്തോച്ചു 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("തീത്തോ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (yea)", () => {
		expect(p.parse("പിലോമോനു 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("പിലോ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (yea)", () => {
		expect(p.parse("എബ്ബുറായെര 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("എബ്ബു 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (yea)", () => {
		expect(p.parse("ആക്കോബു 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ആക്കോ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (yea)", () => {
		expect(p.parse("1 പത്തുറോച്ചു 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 പത്തു 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. പത്തുറോച്ചു 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. പത്തു 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (yea)", () => {
		expect(p.parse("2 പത്തുറോച്ചു 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 പത്തു 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. പത്തുറോച്ചു 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. പത്തു 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (yea)", () => {
		expect(p.parse("ഊദെ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (yea)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (yea)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ഓഗെന്നാനു - 3 ഓഗെന്നാനു").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ഓഗെന്നാനു – 3 ഓഗെന്നാനു").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ഓഗെന്നാനു — 3 ഓഗെന്നാനു").osis()).toEqual("1John.1-3John.1");
	});
});

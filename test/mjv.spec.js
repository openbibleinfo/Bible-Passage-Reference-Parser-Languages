"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mjv.js";

describe("Localized book Rev (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mjv)", () => {
		expect(p.parse("വെളിപ്പാട് 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("വെളി. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mjv)", () => {
		expect(p.parse("മത്തായി 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("മത്താ. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mjv)", () => {
		expect(p.parse("മരുക്കോശ് 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("മരു. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mjv)", () => {
		expect(p.parse("ലൂക്കോശ് 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ലൂക്കോ. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mjv)", () => {
		expect(p.parse("1 ഓകന്നാന് 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ഓക. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ഓകന്നാന് 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ഓക. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mjv)", () => {
		expect(p.parse("2 ഓകന്നാന് 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ഓക. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ഓകന്നാന് 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ഓക. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mjv)", () => {
		expect(p.parse("3 ഓകന്നാന് 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ഓക. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ഓകന്നാന് 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ഓക. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mjv)", () => {
		expect(p.parse("ഓകന്നാൻ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ഓക. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mjv)", () => {
		expect(p.parse("അപ്പോശ്‌ത്തലര് തെയ്‌വ വേലെ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("അപ്പോ. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mjv)", () => {
		expect(p.parse("റോമര് 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("റോമ. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mjv)", () => {
		expect(p.parse("1 കൊരിന്തിയര് 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 കൊരി. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. കൊരിന്തിയര് 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. കൊരി. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mjv)", () => {
		expect(p.parse("2 കൊരിന്തിയര് 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 കൊരി. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. കൊരിന്തിയര് 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. കൊരി. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mjv)", () => {
		expect(p.parse("കൊലോശിയര് 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("കൊലോ. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mjv)", () => {
		expect(p.parse("കെലാത്തിയര് 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("കെലാ. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mjv)", () => {
		expect(p.parse("എപേശിയര് 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("എപേ. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mjv)", () => {
		expect(p.parse("പിലിപ്പിയര് 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("പിലി. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mjv)", () => {
		expect(p.parse("1 തെശലോനിയര് 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 തെശലോ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. തെശലോനിയര് 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. തെശലോ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mjv)", () => {
		expect(p.parse("2 തെശലോനിയര് 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 തെശലോ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. തെശലോനിയര് 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. തെശലോ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mjv)", () => {
		expect(p.parse("1 തിമോത്തിയോശ് 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 തിമോ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. തിമോത്തിയോശ് 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. തിമോ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mjv)", () => {
		expect(p.parse("2 തിമോത്തിയോശ് 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 തിമോ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. തിമോത്തിയോശ് 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. തിമോ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mjv)", () => {
		expect(p.parse("തീത്തോശ് 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("തീത്തോ. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mjv)", () => {
		expect(p.parse("പിലേമോന് 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("പിലേ. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mjv)", () => {
		expect(p.parse("എബുറായര് 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("എബു. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mjv)", () => {
		expect(p.parse("ആക്കോവ് 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ആക്കോ. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mjv)", () => {
		expect(p.parse("1 പത്തിരോശ് 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 പത്തി. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. പത്തിരോശ് 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. പത്തി. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mjv)", () => {
		expect(p.parse("2 പത്തിരോശ് 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 പത്തി. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. പത്തിരോശ് 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. പത്തി. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mjv)", () => {
		expect(p.parse("ഊതാ. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ഊതാ 1:1").osis()).toEqual("Jude.1.1");
	});
});

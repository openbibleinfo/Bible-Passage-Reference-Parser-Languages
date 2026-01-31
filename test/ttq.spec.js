"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ttq.js";

describe("Localized book Rev (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ttq)", () => {
		expect(p.parse("Ǝnǝfilal 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ⵏⴼⵍⵍ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ǝnǝ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ⵏ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ttq)", () => {
		expect(p.parse("Matta 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ⵎⵜⴰ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ⵎⵜ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ttq)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ⵎⵔⴾⵙ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ⵎⵔ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ttq)", () => {
		expect(p.parse("Luqa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luq 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ⵍⵆⴰ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ⵍⵆ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ttq)", () => {
		expect(p.parse("1Ya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ⵢⴰ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ttq)", () => {
		expect(p.parse("2Ya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ⵢⴰ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ttq)", () => {
		expect(p.parse("3 Yaxya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ⵢⵈⵢⴰ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Ya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ⵢⴰ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ttq)", () => {
		expect(p.parse("1 Yaxya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ⵢⵈⵢⴰ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yaxya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ⵢⵈⵢⴰ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ttq)", () => {
		expect(p.parse("2 Yaxya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ⵢⵈⵢⴰ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yaxya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ⵢⵈⵢⴰ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ttq)", () => {
		expect(p.parse("Yaxya 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ⵢⵈⵢⴰ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yax 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ⵢⵈ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ttq)", () => {
		expect(p.parse("Igitan 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Igi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ⴶⵜⵏ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ⴶⵢ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ttq)", () => {
		expect(p.parse("Kǝl-Ǝrrum 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ⴾⵍⵔⵎ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ǝrr 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ⵔ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ttq)", () => {
		expect(p.parse("1 Kǝl-Korent 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ⴾⵍⴾⵔⵏ⵿ⵜ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kǝl-Korent 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ⴾⵍⴾⵔⵏ⵿ⵜ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ttq)", () => {
		expect(p.parse("2 Kǝl-Korent 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ⴾⵍⴾⵔⵏ⵿ⵜ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kǝl-Korent 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ⴾⵍⴾⵔⵏ⵿ⵜ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ttq)", () => {
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ⴾ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ttq)", () => {
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ⴾ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ttq)", () => {
		expect(p.parse("Kǝl-Kolosǝya 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ⴾⵍⴾⵍⵙⵢⴰ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ⴾⵍ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ttq)", () => {
		expect(p.parse("Kǝl-Galatǝya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ⴾⵍⴶⵍⵜⵢⴰ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ⴶⵍ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ttq)", () => {
		expect(p.parse("Kǝl-Efez 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ⴾⵍⴼⵤ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ⴼ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ttq)", () => {
		expect(p.parse("Kǝl-Filib 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ⴾⵍⴼⵍⵀ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flb 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ⴼⵍⵀ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ttq)", () => {
		expect(p.parse("1 Kǝl-Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ⴾⵍ⵿ⵜⵙⵍⵏⴾ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Kǝl-Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ⴾⵍ⵿ⵜⵙⵍⵏⴾ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ttq)", () => {
		expect(p.parse("2 Kǝl-Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ⴾⵍ⵿ⵜⵙⵍⵏⴾ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Kǝl-Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ⴾⵍ⵿ⵜⵙⵍⵏⴾ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ttq)", () => {
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ⵜ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ttq)", () => {
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ⵜ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ttq)", () => {
		expect(p.parse("1 Timotay 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ⵜⵎⵜⵢ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotay 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ⵜⵎⵜⵢ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ttq)", () => {
		expect(p.parse("2 Timotay 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ⵜⵎⵜⵢ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotay 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ⵜⵎⵜⵢ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ttq)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ⵜⵢ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ttq)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ⵜⵢ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ttq)", () => {
		expect(p.parse("Titǝs 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ⵜⵜⵙ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ⵜⵜ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ttq)", () => {
		expect(p.parse("Filemona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ⴼⵍⵎⵏⴰ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ⴼⵍⵎ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ttq)", () => {
		expect(p.parse("Kǝl-Ɣibri 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ⴾⵍⵗⵀⵔⵢ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ɣib 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ⵗⵀ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ttq)", () => {
		expect(p.parse("Yaqub 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaq 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ⵢⵆⵀ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ⵢⵆ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ttq)", () => {
		expect(p.parse("1 Butros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ⵀⵜⵔⵙ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Butros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ⵀⵜⵔⵙ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ttq)", () => {
		expect(p.parse("2 Butros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ⵀⵜⵔⵙ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Butros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ⵀⵜⵔⵙ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ttq)", () => {
		expect(p.parse("1Bu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ⵀⵓ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ttq)", () => {
		expect(p.parse("2Bu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ⵀⵓ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ttq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ttq)", () => {
		expect(p.parse("Yuday 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ⵢⴹⵢ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ⵢⴹ 1:1").osis()).toEqual("Jude.1.1");
	});
});

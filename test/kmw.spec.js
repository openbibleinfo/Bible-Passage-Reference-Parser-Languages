"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kmw.js";

describe("Localized book Rev (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kmw)", () => {
		expect(p.parse("Mphaniɔ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mph 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kmw)", () => {
		expect(p.parse("Matáyɔ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kmw)", () => {
		expect(p.parse("Málikɔ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mkɔ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kmw)", () => {
		expect(p.parse("Lóka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lók 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kmw)", () => {
		expect(p.parse("1 Yoáni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoá 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoáni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoá 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kmw)", () => {
		expect(p.parse("2 Yoáni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoá 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoáni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoá 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kmw)", () => {
		expect(p.parse("3 Yoáni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoá 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoáni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoá 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kmw)", () => {
		expect(p.parse("Yoáni 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoá 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kmw)", () => {
		expect(p.parse("Ekuma á ɓateki 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Eku 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kmw)", () => {
		expect(p.parse("Ɓalɔ́ma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ɓlm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kmw)", () => {
		expect(p.parse("1 Ɓakɔlítɔ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ɓkt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ɓakɔlítɔ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ɓkt 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kmw)", () => {
		expect(p.parse("2 Ɓakɔlítɔ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ɓkt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ɓakɔlítɔ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ɓkt 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kmw)", () => {
		expect(p.parse("Ɓakɔlɔsái 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ɓks 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kmw)", () => {
		expect(p.parse("Ɓagalatía 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ɓgt 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kmw)", () => {
		expect(p.parse("Ɓaɛphɛ́sɔ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɓɛph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kmw)", () => {
		expect(p.parse("Ɓaphilípi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ɓph 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kmw)", () => {
		expect(p.parse("1 Ɓatɛsalɔníka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ɓts 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ɓatɛsalɔníka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ɓts 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kmw)", () => {
		expect(p.parse("2 Ɓatɛsalɔníka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ɓts 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ɓatɛsalɔníka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ɓts 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kmw)", () => {
		expect(p.parse("1 Timɔtɛ́ɔ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timɔtɛ́ɔ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kmw)", () => {
		expect(p.parse("2 Timɔtɛ́ɔ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timɔtɛ́ɔ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kmw)", () => {
		expect(p.parse("Títɔ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kmw)", () => {
		expect(p.parse("Philɛmɔ́nɔ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kmw)", () => {
		expect(p.parse("Ɓaɛbulanía 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ɓɛb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kmw)", () => {
		expect(p.parse("Yakɔ́ɓɔ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kmw)", () => {
		expect(p.parse("1 Pɛ́tɛɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pɛ́t 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pɛ́tɛɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pɛ́t 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kmw)", () => {
		expect(p.parse("2 Pɛ́tɛɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pɛ́t 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pɛ́tɛɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pɛ́t 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kmw)", () => {
		expect(p.parse("Yúda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yúd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (kmw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (kmw)", () => {
		expect(p.parse("1 Ɓakɔlítɔ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Yoáni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoá 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ɓatɛsalɔníka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("2 Ɓakɔlítɔ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Yoáni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoá 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ɓatɛsalɔníka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("3 Yoáni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoá 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Ekuma á ɓateki 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ɓakɔlɔsái 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ɓagalatía 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ɓaɛbulanía 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Yoáni 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoá 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yúda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yúd 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Lóka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lók 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Málikɔ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Matáyɔ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ɓaphilípi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Títɔ 1:1").osis()).toEqual("Titus.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mnf.js";

describe("Localized book Rev (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mnf)", () => {
		expect(p.parse("Ètsə 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Èt 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mnf)", () => {
		expect(p.parse("Matìù 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mnf)", () => {
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mnf)", () => {
		expect(p.parse("Lûk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mnf)", () => {
		expect(p.parse("1 Jɔ̌n 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jɔ̌n 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mnf)", () => {
		expect(p.parse("2 Jɔ̌n 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jɔ̌n 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mnf)", () => {
		expect(p.parse("3 Jɔ̌n 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jɔ̌n 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mnf)", () => {
		expect(p.parse("Jɔ̌n 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mnf)", () => {
		expect(p.parse("ÀfaꞋa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Àf 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mnf)", () => {
		expect(p.parse("Lûm 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mnf)", () => {
		expect(p.parse("1 Kɔlìn 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kɔ̀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔlìn 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔ̀ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mnf)", () => {
		expect(p.parse("2 Kɔlìn 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kɔ̀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔlìn 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔ̀ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mnf)", () => {
		expect(p.parse("Kɔ̀losìà 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mnf)", () => {
		expect(p.parse("Gàlashìà 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mnf)", () => {
		expect(p.parse("Efesɔ̀s 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mnf)", () => {
		expect(p.parse("Filìpȩ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mnf)", () => {
		expect(p.parse("1 Tèsàlonikà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tès 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tèsàlonikà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tès 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mnf)", () => {
		expect(p.parse("2 Tèsàlonikà 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tès 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tèsàlonikà 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tès 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mnf)", () => {
		expect(p.parse("1 Tɔ̀màtià 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tɔ̀m 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tɔ̀màtià 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tɔ̀m 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mnf)", () => {
		expect(p.parse("2 Tɔ̀màtià 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tɔ̀m 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tɔ̀màtià 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tɔ̀m 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mnf)", () => {
		expect(p.parse("Tȩtɔ̀s 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tȩ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mnf)", () => {
		expect(p.parse("Fȩlemùn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mnf)", () => {
		expect(p.parse("Ebùlù 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mnf)", () => {
		expect(p.parse("Jimsì 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jim 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mnf)", () => {
		expect(p.parse("1 Pità 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pità 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mnf)", () => {
		expect(p.parse("2 Pità 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pità 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mnf)", () => {
		expect(p.parse("Jûd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (mnf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (mnf)", () => {
		expect(p.parse("1 Kɔlìn 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Pità 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Tèsàlonikà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tès 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tɔ̀màtià 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("2 Kɔlìn 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Pità 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Tèsàlonikà 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tès 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tɔ̀màtià 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ÀfaꞋa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Àf 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kɔ̀losìà 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Gàlashìà 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ebùlù 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Jimsì 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jûd 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Lûk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Matìù 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Filìpȩ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fȩlemùn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Ètsə 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Èt 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Lûm 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Tȩtɔ̀s 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tȩ 1:1").osis()).toEqual("Titus.1.1");
	});
});

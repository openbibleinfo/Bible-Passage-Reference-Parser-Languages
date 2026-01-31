"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ked.js";

describe("Localized book Rev (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ked)", () => {
		expect(p.parse("Kusurura 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kusur. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ked)", () => {
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ked)", () => {
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ked)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ked)", () => {
		expect(p.parse("1 Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ked)", () => {
		expect(p.parse("2 Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ked)", () => {
		expect(p.parse("3 Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoh. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ked)", () => {
		expect(p.parse("Yohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ked)", () => {
		expect(p.parse("Ebikorwa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ebik 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ked)", () => {
		expect(p.parse("Ha Banaroma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Banarom. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ked)", () => {
		expect(p.parse("1 Ha Banakorinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Banakor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ha Banakorinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Banakor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ked)", () => {
		expect(p.parse("2 Ha Banakorinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Banakor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ha Banakorinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Banakor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ked)", () => {
		expect(p.parse("Ha Banakolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Banakol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ked)", () => {
		expect(p.parse("Ha Banagalata 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Banagal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ked)", () => {
		expect(p.parse("Ha Banefwezi 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Banef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ked)", () => {
		expect(p.parse("Ha BanaFilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ked)", () => {
		expect(p.parse("1 Ha BanaTesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Banates. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ha BanaTesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Banates. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ked)", () => {
		expect(p.parse("2 Ha BanaTesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Banates. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ha BanaTesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Banates. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ked)", () => {
		expect(p.parse("1 Hali Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Hali Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ked)", () => {
		expect(p.parse("2 Hali Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Hali Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ked)", () => {
		expect(p.parse("Hali Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ked)", () => {
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ked)", () => {
		expect(p.parse("Ha Bahebrei 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Baheb. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ked)", () => {
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ked)", () => {
		expect(p.parse("1 Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ked)", () => {
		expect(p.parse("2 Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ked)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ked)", () => {
		expect(p.parse("Yude 1:1").osis()).toEqual("Jude.1.1");
	});
});

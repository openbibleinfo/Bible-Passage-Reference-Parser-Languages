"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gbr.js";

describe("Localized book Rev (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gbr)", () => {
		expect(p.parse("Yohanna Ɓewyegye 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gbr)", () => {
		expect(p.parse("Matta 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gbr)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gbr)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gbr)", () => {
		expect(p.parse("Yohanna I 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gbr)", () => {
		expect(p.parse("Yohanna II 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gbr)", () => {
		expect(p.parse("Yohanna III 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gbr)", () => {
		expect(p.parse("Yohanna 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gbr)", () => {
		expect(p.parse("Atnu-tnuyi Aɓozhin 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gbr)", () => {
		expect(p.parse("Aromayi 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gbr)", () => {
		expect(p.parse("Akorintiyi I 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gbr)", () => {
		expect(p.parse("Akorintiyi II 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gbr)", () => {
		expect(p.parse("Akolosiyi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gbr)", () => {
		expect(p.parse("Agalatiyayi 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gbr)", () => {
		expect(p.parse("Afisusuyi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gbr)", () => {
		expect(p.parse("Afilibiyi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gbr)", () => {
		expect(p.parse("Atasalunikayi I 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gbr)", () => {
		expect(p.parse("Atasalunikayi II 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gbr)", () => {
		expect(p.parse("Timatawus I 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gbr)", () => {
		expect(p.parse("Timatawus II 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gbr)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gbr)", () => {
		expect(p.parse("Filimon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gbr)", () => {
		expect(p.parse("Aibraniyi 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gbr)", () => {
		expect(p.parse("Yakubu 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gbr)", () => {
		expect(p.parse("Bitrus I 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gbr)", () => {
		expect(p.parse("Bitrus II 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gbr)", () => {
		expect(p.parse("Yahuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ndj.js";

describe("Localized book Rev (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ndj)", () => {
		expect(p.parse("Ugubutulu 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ugl 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ndj)", () => {
		expect(p.parse("Mateyi 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ndj)", () => {
		expect(p.parse("Maliku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mlk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ndj)", () => {
		expect(p.parse("Lukasi 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ndj)", () => {
		expect(p.parse("1 Yohani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yhn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yhn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ndj)", () => {
		expect(p.parse("2 Yohani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yhn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yhn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ndj)", () => {
		expect(p.parse("3 Yohani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yhn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yohani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yhn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ndj)", () => {
		expect(p.parse("Yohani 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yhn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ndj)", () => {
		expect(p.parse("Figoli 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Fgl 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ndj)", () => {
		expect(p.parse("VaLoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Vlm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ndj)", () => {
		expect(p.parse("1 Vakolindu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Vkl 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Vakolindu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Vkl 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ndj)", () => {
		expect(p.parse("2 Vakolindu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Vkl 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Vakolindu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Vkl 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ndj)", () => {
		expect(p.parse("Vakolusayi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Vks 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ndj)", () => {
		expect(p.parse("Vagalatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Vag 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ndj)", () => {
		expect(p.parse("Vaifesu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Vfs 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ndj)", () => {
		expect(p.parse("Vafilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Vfp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ndj)", () => {
		expect(p.parse("1 Vatesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Vtk 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Vatesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Vtk 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ndj)", () => {
		expect(p.parse("2 Vatesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Vtk 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Vatesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Vtk 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ndj)", () => {
		expect(p.parse("1 Timotewu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tmt 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotewu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tmt 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ndj)", () => {
		expect(p.parse("2 Timotewu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tmt 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotewu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tmt 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ndj)", () => {
		expect(p.parse("Titusi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ndj)", () => {
		expect(p.parse("Filimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ndj)", () => {
		expect(p.parse("Vayibulaniya 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Vbl 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ndj)", () => {
		expect(p.parse("Yakobi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ykb 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ndj)", () => {
		expect(p.parse("1 Petili 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Ptl 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petili 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ptl 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ndj)", () => {
		expect(p.parse("2 Petili 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Ptl 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petili 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Ptl 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ndj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ndj)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});

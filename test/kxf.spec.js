"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kxf.js";

describe("Localized book Gen (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kxf)", () => {
		expect(p.parse("Mǒhtûlû̌hǎhtûsa 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kxf)", () => {
		expect(p.parse("Ta̤dǔlè̌lṳ̌htò̌ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ta̤dǔlè̌nǎ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ps (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kxf)", () => {
		expect(p.parse("Htû̌sò̌htò̌ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ta̤htû̌sò̌ǐ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Matt (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kxf)", () => {
		expect(p.parse("Matè̌ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matěo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kxf)", () => {
		expect(p.parse("Mǎ̤riko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Makǔ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kxf)", () => {
		expect(p.parse("Lǔka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kxf)", () => {
		expect(p.parse("Jowǎ̤ni̤ awǐlǒ tabǎ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Yṳ̂ha awǐlǒ tôbǎ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kxf)", () => {
		expect(p.parse("Jowǎ̤ni̤ ginǐ̤bǎ tabǎ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Yṳ̂ha ginǐ̤bǎ tôbǎ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kxf)", () => {
		expect(p.parse("Jowǎ̤ni̤ subǎ tabǎ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Yṳ̂ha subǎ tôbǎ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kxf)", () => {
		expect(p.parse("Jowǎ̤ni̤ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yṳ̂ha 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kxf)", () => {
		expect(p.parse("Pwa̤nophû̌ toǒ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Pwa̤nophû̌ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kxf)", () => {
		expect(p.parse("Rò̌mǎphû̌ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rṳ̂̌me̤ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kxf)", () => {
		expect(p.parse("Kòrî̌tiaphû̌ awǐlǒ tabǎ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kôritu awǐlǒ tôbǎ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kxf)", () => {
		expect(p.parse("Kòrî̌tiaphû̌ ginǐ̤bǎ tabǎ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kôritu ginǐ̤bǎ tôbǎ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kxf)", () => {
		expect(p.parse("Kòlò̌shiaphû̌ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kòlòtè̌ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kxf)", () => {
		expect(p.parse("Galatǐaphû̌ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatǐ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kxf)", () => {
		expect(p.parse("Ephè̌shiaphû̌ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ěphěsu 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kxf)", () => {
		expect(p.parse("Phǐlǐpiaphû̌ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phǐlǐpǐ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kxf)", () => {
		expect(p.parse("Tè̌shalò̌niaphû̌ awǐlǒ tabǎ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tîsalònǐ awǐlǒ tôbǎ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kxf)", () => {
		expect(p.parse("Tè̌shalò̌niaphû̌ ginǐ̤bǎ tabǎ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tîsalònǐ ginǐ̤bǎ tôbǎ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kxf)", () => {
		expect(p.parse("Timò̤̌te awǐlǒ tabǎ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tîmôte awǐlǒ tôbǎ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kxf)", () => {
		expect(p.parse("Timò̤̌te ginǐ̤bǎ tabǎ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tîmôte ginǐ̤bǎ tôbǎ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kxf)", () => {
		expect(p.parse("Tǐtu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tǐtǔ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kxf)", () => {
		expect(p.parse("Phǐlǐmṳ̂ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philemo 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kxf)", () => {
		expect(p.parse("Ebrephû̌ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrǔ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kxf)", () => {
		expect(p.parse("Jǎgomo̤ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ya̤kû 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kxf)", () => {
		expect(p.parse("Petarǔ awǐlǒ tôbǎ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Petru awǐlǒ tabǎ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kxf)", () => {
		expect(p.parse("Petarǔ ginǐ̤bǎ tôbǎ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Petru ginǐ̤bǎ tabǎ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kxf)", () => {
		expect(p.parse("Yṳ̌da 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yǔda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (kxf)", () => {
		expect(p.parse("Kòrî̌tiaphû̌ awǐlǒ tabǎ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kôritu awǐlǒ tôbǎ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Jowǎ̤ni̤ awǐlǒ tabǎ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Yṳ̂ha awǐlǒ tôbǎ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Petarǔ awǐlǒ tôbǎ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Petru awǐlǒ tabǎ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Tè̌shalò̌niaphû̌ awǐlǒ tabǎ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tîsalònǐ awǐlǒ tôbǎ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Timò̤̌te awǐlǒ tabǎ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tîmôte awǐlǒ tôbǎ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kòrî̌tiaphû̌ ginǐ̤bǎ tabǎ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kôritu ginǐ̤bǎ tôbǎ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Jowǎ̤ni̤ ginǐ̤bǎ tabǎ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Yṳ̂ha ginǐ̤bǎ tôbǎ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Petarǔ ginǐ̤bǎ tôbǎ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Petru ginǐ̤bǎ tabǎ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Tè̌shalò̌niaphû̌ ginǐ̤bǎ tabǎ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tîsalònǐ ginǐ̤bǎ tôbǎ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Timò̤̌te ginǐ̤bǎ tabǎ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tîmôte ginǐ̤bǎ tôbǎ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Jowǎ̤ni̤ subǎ tabǎ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Yṳ̂ha subǎ tôbǎ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Pwa̤nophû̌ toǒ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ěphěsu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Galatǐ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatǐaphû̌ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Mǒhtûlû̌hǎhtûsa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Hebrǔ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Jǎgomo̤ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jowǎ̤ni̤ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yṳ̂ha 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yǔda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yṳ̌da 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Lǔka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Makǔ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mǎ̤riko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Matěo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Phǐlǐpiaphû̌ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phǐlǐpǐ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phǐlǐmṳ̂ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Ta̤htû̌sò̌ǐ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ta̤dǔlè̌lṳ̌htò̌ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ta̤dǔlè̌nǎ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rò̌mǎphû̌ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rṳ̂̌me̤ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Tǐtu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tǐtǔ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Parser helper should handle book ranges (kxf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (kxf)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Jowǎ̤ni̤ awǐlǒ tabǎ - Jowǎ̤ni̤ subǎ tabǎ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Jowǎ̤ni̤ awǐlǒ tabǎ – Jowǎ̤ni̤ subǎ tabǎ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Jowǎ̤ni̤ awǐlǒ tabǎ — Jowǎ̤ni̤ subǎ tabǎ").osis()).toEqual("1John.1-3John.1");
	});
});

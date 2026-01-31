"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bwo.js";

describe("Localized book Rev (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bwo)", () => {
		expect(p.parse("Yohans Bek'o 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Bek'. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bwo)", () => {
		expect(p.parse("Matiwos Dooshishiyo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bwo)", () => {
		expect(p.parse("Mark'os Dooshishiyo 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bwo)", () => {
		expect(p.parse("Luk'as Dooshishiyo 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk'. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book John (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bwo)", () => {
		expect(p.parse("Yohans Dooshishiyo 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bwo)", () => {
		expect(p.parse("1 Yohans 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohans 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bwo)", () => {
		expect(p.parse("2 Yohans 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohans 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bwo)", () => {
		expect(p.parse("3 Yohans 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoh. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yohans 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book Acts (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bwo)", () => {
		expect(p.parse("Woshetswotsi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Wosh. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bwo)", () => {
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bwo)", () => {
		expect(p.parse("1 K'orontos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 K'or. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. K'orontos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. K'or. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bwo)", () => {
		expect(p.parse("2 K'orontos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 K'or. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. K'orontos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. K'or. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bwo)", () => {
		expect(p.parse("K'olasiyas 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("K'ol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bwo)", () => {
		expect(p.parse("Gelati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gel. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bwo)", () => {
		expect(p.parse("Efeson 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bwo)", () => {
		expect(p.parse("Filp'siyos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filp. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bwo)", () => {
		expect(p.parse("1 Teselonk'e 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Teselonk'e 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bwo)", () => {
		expect(p.parse("2 Teselonk'e 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Teselonk'e 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bwo)", () => {
		expect(p.parse("1 T'imotiwos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 T'im. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. T'imotiwos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. T'im. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bwo)", () => {
		expect(p.parse("2 T'imotiwos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 T'im. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. T'imotiwos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. T'im. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bwo)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bwo)", () => {
		expect(p.parse("Filimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Film. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bwo)", () => {
		expect(p.parse("Ibrawiyots 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bwo)", () => {
		expect(p.parse("Yak'ob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak'. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bwo)", () => {
		expect(p.parse("1 P'et'ros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 P'et'. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. P'et'ros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. P'et'. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bwo)", () => {
		expect(p.parse("2 P'et'ros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 P'et'. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. P'et'ros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. P'et'. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bwo)", () => {
		expect(p.parse("Yhu. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yhud 1:1").osis()).toEqual("Jude.1.1");
	});
});

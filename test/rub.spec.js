"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/rub.js";

describe("Localized book Rev (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (rub)", () => {
		expect(p.parse("Kuwonekerwa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kuw 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (rub)", () => {
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (rub)", () => {
		expect(p.parse("Mari̱ko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (rub)", () => {
		expect(p.parse("Lu̱u̱ka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lu̱k 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rub)", () => {
		expect(p.parse("1Yo 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rub)", () => {
		expect(p.parse("2Yo 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (rub)", () => {
		expect(p.parse("3 Yohaana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yo 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rub)", () => {
		expect(p.parse("1 Yohaana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohaana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rub)", () => {
		expect(p.parse("2 Yohaana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohaana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (rub)", () => {
		expect(p.parse("Yohaana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (rub)", () => {
		expect(p.parse("Bikorwa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Bik 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (rub)", () => {
		expect(p.parse("Baru̱u̱mi̱ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rub)", () => {
		expect(p.parse("1 Bakoli̱nso 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bakoli̱nso 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rub)", () => {
		expect(p.parse("2 Bakoli̱nso 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bakoli̱nso 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rub)", () => {
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rub)", () => {
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (rub)", () => {
		expect(p.parse("Bakolosaayi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Bak 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (rub)", () => {
		expect(p.parse("Bagalati̱ya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Bag 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (rub)", () => {
		expect(p.parse("Beefeeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Bef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (rub)", () => {
		expect(p.parse("Bafi̱ri̱pi̱ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Baf 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rub)", () => {
		expect(p.parse("1 Basosolonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Basosolonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rub)", () => {
		expect(p.parse("2 Basosolonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Basosolonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rub)", () => {
		expect(p.parse("1So 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rub)", () => {
		expect(p.parse("2So 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rub)", () => {
		expect(p.parse("1 Ti̱mi̱teo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti̱mi̱teo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rub)", () => {
		expect(p.parse("2 Ti̱mi̱teo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti̱mi̱teo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rub)", () => {
		expect(p.parse("1Ti̱ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rub)", () => {
		expect(p.parse("2Ti̱ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (rub)", () => {
		expect(p.parse("Ti̱to 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Ti̱t 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (rub)", () => {
		expect(p.parse("Fi̱ri̱mooni̱ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fi̱r 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (rub)", () => {
		expect(p.parse("Bahebburania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Bah 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (rub)", () => {
		expect(p.parse("Yakobbo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rub)", () => {
		expect(p.parse("1 Peeteru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peeteru 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rub)", () => {
		expect(p.parse("2 Peeteru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peeteru 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rub)", () => {
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rub)", () => {
		expect(p.parse("2Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (rub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (rub)", () => {
		expect(p.parse("Yu̱da 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yu̱d 1:1").osis()).toEqual("Jude.1.1");
	});
});

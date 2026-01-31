"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dtb.js";

describe("Localized book Rev (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dtb)", () => {
		expect(p.parse("Pinointalang 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pinoint. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dtb)", () => {
		expect(p.parse("Matius 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dtb)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dtb)", () => {
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dtb)", () => {
		expect(p.parse("1 Yay. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yaya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yay. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yaya 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dtb)", () => {
		expect(p.parse("2 Yay. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yaya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yay. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yaya 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dtb)", () => {
		expect(p.parse("3 Yay. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yaya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yay. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yaya 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dtb)", () => {
		expect(p.parse("Yaya 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dtb)", () => {
		expect(p.parse("Susuuon 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dtb)", () => {
		expect(p.parse("Ruum 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dtb)", () => {
		expect(p.parse("1 Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dtb)", () => {
		expect(p.parse("2 Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dtb)", () => {
		expect(p.parse("Kolusi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dtb)", () => {
		expect(p.parse("Golotia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gol. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dtb)", () => {
		expect(p.parse("Ipisus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ipi. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dtb)", () => {
		expect(p.parse("Polipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pol. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dtb)", () => {
		expect(p.parse("1 Tosolunika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tos. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tosolunika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tos. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dtb)", () => {
		expect(p.parse("2 Tosolunika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tos. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tosolunika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tos. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dtb)", () => {
		expect(p.parse("1 Tomotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tom. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tomotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tom. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dtb)", () => {
		expect(p.parse("2 Tomotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tom. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tomotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tom. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dtb)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dtb)", () => {
		expect(p.parse("Pilimun 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pil. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dtb)", () => {
		expect(p.parse("Ibrani 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dtb)", () => {
		expect(p.parse("Yakub 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dtb)", () => {
		expect(p.parse("1 Pitrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pit. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pitrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pit. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dtb)", () => {
		expect(p.parse("2 Pitrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pit. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pitrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pit. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dtb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dtb)", () => {
		expect(p.parse("Yudas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud. 1:1").osis()).toEqual("Jude.1.1");
	});
});

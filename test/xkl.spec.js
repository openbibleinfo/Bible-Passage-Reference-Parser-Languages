"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/xkl.js";

describe("Localized book Rev (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (xkl)", () => {
		expect(p.parse("Puyan Luha’ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (xkl)", () => {
		expect(p.parse("Matius 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (xkl)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (xkl)", () => {
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (xkl)", () => {
		expect(p.parse("1 Yaya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yaya 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (xkl)", () => {
		expect(p.parse("2 Yaya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yaya 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (xkl)", () => {
		expect(p.parse("3 Yaya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yaya 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (xkl)", () => {
		expect(p.parse("Yaya 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (xkl)", () => {
		expect(p.parse("Pemuyan Lawa Injil 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Pemuyan 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (xkl)", () => {
		expect(p.parse("Rum 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (xkl)", () => {
		expect(p.parse("1 Kurintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kurintus 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (xkl)", () => {
		expect(p.parse("2 Kurintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kurintus 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (xkl)", () => {
		expect(p.parse("Kuluse 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (xkl)", () => {
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (xkl)", () => {
		expect(p.parse("Ipesus 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (xkl)", () => {
		expect(p.parse("Pilipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (xkl)", () => {
		expect(p.parse("1 Tesalunika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalunika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (xkl)", () => {
		expect(p.parse("2 Tesalunika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalunika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (xkl)", () => {
		expect(p.parse("1 Timutius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timutus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timutius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timutus 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (xkl)", () => {
		expect(p.parse("2 Timutius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timutus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timutius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timutus 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (xkl)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (xkl)", () => {
		expect(p.parse("Pilimun 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (xkl)", () => {
		expect(p.parse("Iberani 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (xkl)", () => {
		expect(p.parse("Yakup 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (xkl)", () => {
		expect(p.parse("1 Peterus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peterus 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (xkl)", () => {
		expect(p.parse("2 Peterus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peterus 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (xkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (xkl)", () => {
		expect(p.parse("Yahuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

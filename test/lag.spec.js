"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lag.js";

describe("Localized book Rev (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lag)", () => {
		expect(p.parse("Wiivariyuli 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lag)", () => {
		expect(p.parse("Matáayo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lag)", () => {
		expect(p.parse("Maáriki 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lag)", () => {
		expect(p.parse("Lʉ́ka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lag)", () => {
		expect(p.parse("1 Yooháani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yooháani 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lag)", () => {
		expect(p.parse("2 Yooháani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yooháani 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lag)", () => {
		expect(p.parse("3 Yooháani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yooháani 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lag)", () => {
		expect(p.parse("Yooháani 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lag)", () => {
		expect(p.parse("Mɨrɨmo ya Vatumwi 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lag)", () => {
		expect(p.parse("Varúumi 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lag)", () => {
		expect(p.parse("1 Vakoríinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Vakoríinto 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lag)", () => {
		expect(p.parse("2 Vakoríinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Vakoríinto 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lag)", () => {
		expect(p.parse("Vakolosáai 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lag)", () => {
		expect(p.parse("Vagalatía 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lag)", () => {
		expect(p.parse("Vaeféeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lag)", () => {
		expect(p.parse("Vafilíipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lag)", () => {
		expect(p.parse("1 Vatesaloníike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Vatesaloníike 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lag)", () => {
		expect(p.parse("2 Vatesaloníike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Vatesaloníike 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lag)", () => {
		expect(p.parse("1 Timotéeo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotéeo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lag)", () => {
		expect(p.parse("2 Timotéeo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotéeo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lag)", () => {
		expect(p.parse("Tíito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lag)", () => {
		expect(p.parse("Filemóoni 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lag)", () => {
		expect(p.parse("Vaeburanía 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lag)", () => {
		expect(p.parse("Yaakúupu 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lag)", () => {
		expect(p.parse("1 Peéteri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peéteri 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lag)", () => {
		expect(p.parse("2 Peéteri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peéteri 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lag)", () => {
		expect(p.parse("Yʉ́ʉda 1:1").osis()).toEqual("Jude.1.1");
	});
});

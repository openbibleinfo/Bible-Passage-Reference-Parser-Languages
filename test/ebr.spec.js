"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ebr.js";

describe("Localized book Rev (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ebr)", () => {
		expect(p.parse("Apokalísi 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ebr)", () => {
		expect(p.parse("Ɔ́n wú Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mathie 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ebr)", () => {
		expect(p.parse("Ɔ́n wú Mák 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mákhi 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ebr)", () => {
		expect(p.parse("Ɔ́n wú Lwik 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lwikhi 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book John (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ebr)", () => {
		expect(p.parse("Ɔ́n wú Jan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ebr)", () => {
		expect(p.parse("1 Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ebr)", () => {
		expect(p.parse("2 Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ebr)", () => {
		expect(p.parse("3 Jan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book Acts (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ebr)", () => {
		expect(p.parse("Júmán Hrɔ́ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ɔ́n wú Júm 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ebr)", () => {
		expect(p.parse("Rɔ́mɛn Khúbhɛ́nɛ́n 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ebr)", () => {
		expect(p.parse("1 Khorɛ́nthi Khúbhɛ́nɛ́n 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Khorɛ́nthi Khúbhɛ́nɛ́n 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ebr)", () => {
		expect(p.parse("2 Khorɛ́nthi Khúbhɛ́nɛ́n 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Khorɛ́nthi Khúbhɛ́nɛ́n 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ebr)", () => {
		expect(p.parse("1Khor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ebr)", () => {
		expect(p.parse("2Khor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ebr)", () => {
		expect(p.parse("Kholɔ́su Khúbhɛ́nɛ́n 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ebr)", () => {
		expect(p.parse("Galáthi Khúbhɛ́nɛ́n 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ebr)", () => {
		expect(p.parse("Efɛ́zi Khúbhɛ́nɛ́n 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ebr)", () => {
		expect(p.parse("Filíphu Khúbhɛ́nɛ́n 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ebr)", () => {
		expect(p.parse("1 Tesaloníkhi Khúbhɛ́nɛ́n 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesaloníkhi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloníkhi Khúbhɛ́nɛ́n 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloníkhi 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ebr)", () => {
		expect(p.parse("2 Tesaloníkhi Khúbhɛ́nɛ́n, 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesaloníkhi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloníkhi Khúbhɛ́nɛ́n, 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloníkhi 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ebr)", () => {
		expect(p.parse("1 Thimote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Thimote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ebr)", () => {
		expect(p.parse("2 Thimote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Thimote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ebr)", () => {
		expect(p.parse("Thite 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ebr)", () => {
		expect(p.parse("Filemɔn 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ebr)", () => {
		expect(p.parse("Ebrenɛ́n 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ebr)", () => {
		expect(p.parse("Jakhi 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ebr)", () => {
		expect(p.parse("1 Piɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piɛ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ebr)", () => {
		expect(p.parse("2 Piɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piɛ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ebr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ebr)", () => {
		expect(p.parse("Ɔ́n wú Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/rei.js";

describe("Localized book Rev (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (rei)", () => {
		expect(p.parse("ప్రకటన 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (rei)", () => {
		expect(p.parse("మత్తయి 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book 1John (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rei)", () => {
		expect(p.parse("1 యోహాను 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. యోహాను 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rei)", () => {
		expect(p.parse("2 యోహాను 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. యోహాను 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (rei)", () => {
		expect(p.parse("3 యోహాను 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. యోహాను 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1Cor (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rei)", () => {
		expect(p.parse("1 కొరింది 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. కొరింది 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rei)", () => {
		expect(p.parse("2 కొరింది 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. కొరింది 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (rei)", () => {
		expect(p.parse("కొలస్సీ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (rei)", () => {
		expect(p.parse("గలతీ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (rei)", () => {
		expect(p.parse("ఎపేసీ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (rei)", () => {
		expect(p.parse("పిలిప్పీ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rei)", () => {
		expect(p.parse("1 తెస్సలొని 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. తెస్సలొని 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rei)", () => {
		expect(p.parse("2 తెస్సలొని 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. తెస్సలొని 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rei)", () => {
		expect(p.parse("1 తిమోతి 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. తిమోతి 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rei)", () => {
		expect(p.parse("2 తిమోతి 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. తిమోతి 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (rei)", () => {
		expect(p.parse("తీతు 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (rei)", () => {
		expect(p.parse("ఫిలేమోను 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (rei)", () => {
		expect(p.parse("హెబ్రీ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jude (rei)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (rei)", () => {
		expect(p.parse("యూదా 1:1").osis()).toEqual("Jude.1.1");
	});
});

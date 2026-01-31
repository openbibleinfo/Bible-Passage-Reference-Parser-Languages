"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/wbq.js";

describe("Localized book Mark (wbq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (wbq)", () => {
		expect(p.parse("मार्क 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (wbq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (wbq)", () => {
		expect(p.parse("लूक 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book Acts (wbq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (wbq)", () => {
		expect(p.parse("प्रेषित 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book 1Cor (wbq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (wbq)", () => {
		expect(p.parse("1 करिंथ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. करिंथ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (wbq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (wbq)", () => {
		expect(p.parse("1करिंथ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (wbq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (wbq)", () => {
		expect(p.parse("गलती 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book 1Thess (wbq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (wbq)", () => {
		expect(p.parse("1 थेस्स 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थेस्स 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (wbq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (wbq)", () => {
		expect(p.parse("2 थेस्स 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थेस्स 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (wbq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (wbq)", () => {
		expect(p.parse("1थेस्स 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (wbq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (wbq)", () => {
		expect(p.parse("2थेस्स 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (wbq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (wbq)", () => {
		expect(p.parse("1 तीमथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमथी 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (wbq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (wbq)", () => {
		expect(p.parse("2 तीमथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमथी 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (wbq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (wbq)", () => {
		expect(p.parse("1तीमथी 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (wbq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (wbq)", () => {
		expect(p.parse("2तीमथी 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (wbq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (wbq)", () => {
		expect(p.parse("तीत 1:1").osis()).toEqual("Titus.1.1");
	});
});

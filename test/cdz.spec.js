"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/cdz.js";

describe("Localized book Mark (cdz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (cdz)", () => {
		expect(p.parse("মার্ক 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (cdz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (cdz)", () => {
		expect(p.parse("লুক 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book Acts (cdz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (cdz)", () => {
		expect(p.parse("কুলিজকুরাআ কামি 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("কুলিচ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book 1Cor (cdz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (cdz)", () => {
		expect(p.parse("1 করিন্থীয় 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. করিন্থীয় 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (cdz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (cdz)", () => {
		expect(p.parse("1করি 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (cdz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (cdz)", () => {
		expect(p.parse("গালাতীয় 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("গালা 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book 1Thess (cdz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (cdz)", () => {
		expect(p.parse("1 থিষলনীকীয় 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. থিষলনীকীয় 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (cdz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (cdz)", () => {
		expect(p.parse("2 থিষলনীকীয় 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. থিষলনীকীয় 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (cdz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (cdz)", () => {
		expect(p.parse("1থিষ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (cdz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (cdz)", () => {
		expect(p.parse("2থিষ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (cdz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (cdz)", () => {
		expect(p.parse("1 তীমথিয় 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. তীমথিয় 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (cdz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (cdz)", () => {
		expect(p.parse("2 তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (cdz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (cdz)", () => {
		expect(p.parse("1তীম 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (cdz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (cdz)", () => {
		expect(p.parse("2তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (cdz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (cdz)", () => {
		expect(p.parse("তীত। 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("তীত 1:1").osis()).toEqual("Titus.1.1");
	});
});

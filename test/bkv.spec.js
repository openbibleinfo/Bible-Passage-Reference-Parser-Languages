"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bkv.js";

describe("Localized book Gen (bkv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bkv)", () => {
		expect(p.parse("Okpi-iku 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Okpi 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (bkv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (bkv)", () => {
		expect(p.parse("Ukwo Atangani 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ukwo 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (bkv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (bkv)", () => {
		expect(p.parse("Ukum Ashangani 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ukum 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (bkv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (bkv)", () => {
		expect(p.parse("Eni Abuoni 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Eni 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Deut (bkv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (bkv)", () => {
		expect(p.parse("Unaa Awereni 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Unaa 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Ruth (bkv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (bkv)", () => {
		expect(p.parse("Iruth 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Esth (bkv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (bkv)", () => {
		expect(p.parse("Esther (Hebrew) 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esther 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Eccl (bkv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (bkv)", () => {
		expect(p.parse("Ecclesiastes 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Dan (bkv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (bkv)", () => {
		expect(p.parse("Daniel (Hebrew) 1:1").osis()).toEqual("Dan.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lla.js";

describe("Localized book Matt (lla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lla)", () => {
		expect(p.parse("Matta 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lla)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lla)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book John (lla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lla)", () => {
		expect(p.parse("Yohanna 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lla)", () => {
		expect(p.parse("Ayyukan 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book 1Tim (lla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lla)", () => {
		expect(p.parse("Likarkar ntiiri Bulus yǝ nyorsǝ Timotawus wa 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lla)", () => {
		expect(p.parse("Likarkar rabte Bulus yǝ nyorsǝ Timotawus wa 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Jas (lla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lla)", () => {
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});

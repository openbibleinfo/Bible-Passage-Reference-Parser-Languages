"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/yai.js";

describe("Localized book Gen (yai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (yai)", () => {
		expect(p.parse("Ҳастӣ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ҳас. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (yai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (yai)", () => {
		expect(p.parse("Хуруҷ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Хур. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Ruth (yai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (yai)", () => {
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Sam (yai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (yai)", () => {
		expect(p.parse("Якум подшоҳт 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Подш. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book Jonah (yai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (yai)", () => {
		expect(p.parse("Юнус 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Юн. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Luke (yai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (yai)", () => {
		expect(p.parse("Луқой Инҷил 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Луқ. 1:1").osis()).toEqual("Luke.1.1");
	});
});

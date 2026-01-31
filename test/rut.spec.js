"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/rut.js";

describe("Localized book Luke (rut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (rut)", () => {
		expect(p.parse("Лукара йибкьыд Шадды Хабар 1:1").osis()).toEqual("Luke.1.1");
	});
});

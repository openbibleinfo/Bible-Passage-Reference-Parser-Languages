"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/scn.js";

describe("Localized book Ruth (scn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (scn)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Song (scn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (scn)", () => {
		expect(p.parse("La Cantica di li Cantici 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cantica 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Matt (scn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (scn)", () => {
		expect(p.parse("Secunnu Matteu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matteu 1:1").osis()).toEqual("Matt.1.1");
	});
});

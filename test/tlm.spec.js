"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tlm.js";

describe("Localized book Jonah (tlm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tlm)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Hag (tlm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (tlm)", () => {
		expect(p.parse("Hakai 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Mal (tlm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (tlm)", () => {
		expect(p.parse("Malakai 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (tlm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tlm)", () => {
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book John (tlm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tlm)", () => {
		expect(p.parse("Jon 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tlm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tlm)", () => {
		expect(p.parse("Ra Vei Hira Yarisula 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Phil (tlm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tlm)", () => {
		expect(p.parse("Yilipai 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Tim (tlm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tlm)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tlm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tlm)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mjz.js";

describe("Localized book Mark (mjz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mjz)", () => {
		expect(p.parse("मर्‌कुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्‌क 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mjz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mjz)", () => {
		expect(p.parse("लुका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लुक 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book Acts (mjz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mjz)", () => {
		expect(p.parse("पेरित 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("पे 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book 1Thess (mjz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mjz)", () => {
		expect(p.parse("१ थेसलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेसलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mjz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mjz)", () => {
		expect(p.parse("२ थेसलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेसलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (mjz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mjz)", () => {
		expect(p.parse("१थेस 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mjz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mjz)", () => {
		expect(p.parse("२थेस 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mjz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mjz)", () => {
		expect(p.parse("१ तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mjz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mjz)", () => {
		expect(p.parse("२ तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (mjz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mjz)", () => {
		expect(p.parse("१ति 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mjz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mjz)", () => {
		expect(p.parse("२ति 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mjz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mjz)", () => {
		expect(p.parse("तितस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तित 1:1").osis()).toEqual("Titus.1.1");
	});
});

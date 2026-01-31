"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ukk.js";

describe("Localized book Mark (ukk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ukk)", () => {
		expect(p.parse("caam: ma kux 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ukk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ukk)", () => {
		expect(p.parse("caam: luk ka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ukk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ukk)", () => {
		expect(p.parse("1 caam: yo: haan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. caam: yo: haan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ukk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ukk)", () => {
		expect(p.parse("2 caam: yo: haan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. caam: yo: haan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ukk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ukk)", () => {
		expect(p.parse("3 caam: yo: haan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. caam: yo: haan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ukk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ukk)", () => {
		expect(p.parse("caam: yo: haan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ukk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ukk)", () => {
		expect(p.parse("caam: ta maan caox 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book 1Thess (ukk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ukk)", () => {
		expect(p.parse("1 caam: taet sa law: nek 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. caam: taet sa law: nek 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ukk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ukk)", () => {
		expect(p.parse("2 caam: taet sa law: nek 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. caam: taet sa law: nek 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ukk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ukk)", () => {
		expect(p.parse("1 caam: tix maw: se 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. caam: tix maw: se 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ukk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ukk)", () => {
		expect(p.parse("2 caam: tix maw: se 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. caam: tix maw: se 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ukk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ukk)", () => {
		expect(p.parse("caam: tix tux 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ukk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ukk)", () => {
		expect(p.parse("caam: phix le mon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Jas (ukk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ukk)", () => {
		expect(p.parse("caam: ya kop 1:1").osis()).toEqual("Jas.1.1");
	});
});

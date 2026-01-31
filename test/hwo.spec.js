"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hwo.js";

describe("Localized book Matt (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (hwo)", () => {
		expect(p.parse("Matta 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (hwo)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (hwo)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hwo)", () => {
		expect(p.parse("1 Yahaya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yahaya 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hwo)", () => {
		expect(p.parse("2 Yahaya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yahaya 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hwo)", () => {
		expect(p.parse("3 Yahaya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yahaya 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hwo)", () => {
		expect(p.parse("Yahaya 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hwo)", () => {
		expect(p.parse("1Yahaya 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 1Cor (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hwo)", () => {
		expect(p.parse("1 Korontiyaya 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korontiyaya 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hwo)", () => {
		expect(p.parse("2 Korontiyaya 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korontiyaya 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (hwo)", () => {
		expect(p.parse("Kolosiyaya 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (hwo)", () => {
		expect(p.parse("Nggalatiyaya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Phil (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (hwo)", () => {
		expect(p.parse("Filibiyaya 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hwo)", () => {
		expect(p.parse("1Tasalonikaya 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hwo)", () => {
		expect(p.parse("2 Tasalonikaya 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tasalonikaya 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hwo)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hwo)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (hwo)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (hwo)", () => {
		expect(p.parse("Filimon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Jas (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (hwo)", () => {
		expect(p.parse("Yakubu 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book Jude (hwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (hwo)", () => {
		expect(p.parse("Yahuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

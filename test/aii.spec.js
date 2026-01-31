"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/aii.js";

describe("Localized book Rev (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (aii)", () => {
		expect(p.parse("ܓܠܝܢܐ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ps (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (aii)", () => {
		expect(p.parse("ܡܙܡܘܪ̈ܐ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ܡܙܡܘܪܐ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Matt (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (aii)", () => {
		expect(p.parse("ܡܬ‌ܝ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (aii)", () => {
		expect(p.parse("ܡܪܩܘܣ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (aii)", () => {
		expect(p.parse("ܠܘܩܐ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (aii)", () => {
		expect(p.parse("ܐ ܝܘܚܢܢ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ܐ. ܝܘܚܢܢ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (aii)", () => {
		expect(p.parse("ܒ ܝܘܚܢܢ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ܒ. ܝܘܚܢܢ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (aii)", () => {
		expect(p.parse("ܓ ܝܘܚܢܢ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ܓ. ܝܘܚܢܢ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (aii)", () => {
		expect(p.parse("ܝܘܚܢܢ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (aii)", () => {
		expect(p.parse("ܣܘܥܪ̈ܢܐ ܕܫܠܝܚ̈ܐ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (aii)", () => {
		expect(p.parse("ܪ̈ܗܘܡܝܐ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (aii)", () => {
		expect(p.parse("ܐ ܩܘܪ̈ܢܬܝܐ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ܐ. ܩܘܪ̈ܢܬܝܐ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (aii)", () => {
		expect(p.parse("ܒ ܩܘܪ̈ܢܬܝܐ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ܒ. ܩܘܪ̈ܢܬܝܐ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (aii)", () => {
		expect(p.parse("ܩܘܠܣܝ̈ܐ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (aii)", () => {
		expect(p.parse("ܓܠܛܝ̈ܐ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (aii)", () => {
		expect(p.parse("ܐܦܣܝ̈ܐ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (aii)", () => {
		expect(p.parse("ܦܝܠܝܦܣܝ̈ܐ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (aii)", () => {
		expect(p.parse("ܐ ܬܣܠܘܢܝܩܝ̈ܐ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ܐ. ܬܣܠܘܢܝܩܝ̈ܐ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (aii)", () => {
		expect(p.parse("ܒ ܬܣܠܘܢܝܩܝ̈ܐ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ܒ. ܬܣܠܘܢܝܩܝ̈ܐ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (aii)", () => {
		expect(p.parse("ܐ ܛܝܡܬܐܘܣ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ܐ. ܛܝܡܬܐܘܣ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (aii)", () => {
		expect(p.parse("ܒ ܛܝܡܬܐܘܣ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ܒ. ܛܝܡܬܐܘܣ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (aii)", () => {
		expect(p.parse("ܛܛܘܣ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (aii)", () => {
		expect(p.parse("ܦܝܠܡܘܢ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (aii)", () => {
		expect(p.parse("ܥܒ݂ܪ̈ܝܐ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (aii)", () => {
		expect(p.parse("ܝܥܩܘܒ݂ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (aii)", () => {
		expect(p.parse("ܐ ܦܛܪܘܣ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ܐ. ܦܛܪܘܣ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (aii)", () => {
		expect(p.parse("ܒ ܦܛܪܘܣ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ܒ. ܦܛܪܘܣ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (aii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (aii)", () => {
		expect(p.parse("ܝܗܘܕܐ 1:1").osis()).toEqual("Jude.1.1");
	});
});

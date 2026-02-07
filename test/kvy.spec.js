"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kvy.js";

describe("Localized book Gen (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kvy)", () => {
		expect(p.parse("ꤟꤢ꤭ꤔ-ꤋꤢꤨ꤭ꤋꤢ꤬ꤜꤢꤨ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kvy)", () => {
		expect(p.parse("ꤜꤢ꤬ꤘꤣꤧꤜꤟꤢꤦ꤬ꤓꤢ꤭ꤔ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ps (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kvy)", () => {
		expect(p.parse("ꤓꤣꤪ꤭ꤏꤢꤓꤢ꤭ꤔ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Matt (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kvy)", () => {
		expect(p.parse("ꤗꤢꤒꤢꤧ꤭ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kvy)", () => {
		expect(p.parse("ꤗꤢ꤬ꤊꤢꤨ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kvy)", () => {
		expect(p.parse("ꤜꤢꤨꤊꤢ꤬ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kvy)", () => {
		expect(p.parse("ꤛꤥ꤭ꤟꤢ꤬ ꤢ꤬ꤚꤣꤧ꤬ꤜꤢꤦ ꤒꤢ꤬ꤢꤨ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kvy)", () => {
		expect(p.parse("ꤛꤥ꤭ꤟꤢ꤬ ꤔꤤ꤬ꤢꤨꤙꤝꤣꤩ ꤔꤢꤦ꤬ ꤒꤢ꤬ꤢꤨ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kvy)", () => {
		expect(p.parse("ꤛꤥ꤭ꤟꤢ꤬ ꤞꤢꤨꤢꤨꤙꤝꤣꤩ ꤔꤢꤦ꤬ ꤒꤢ꤬ꤢꤨ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kvy)", () => {
		expect(p.parse("ꤛꤥ꤭ꤟꤢ꤬ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kvy)", () => {
		expect(p.parse("ꤖꤟꤚꤢ꤬ꤘꤣꤨꤒꤢ꤬ꤔꤣꤧꤖꤢꤨ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kvy)", () => {
		expect(p.parse("ꤚꤟꤥꤗꤢꤩ꤬ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kvy)", () => {
		expect(p.parse("ꤊꤢ꤬ꤚꤤ꤬ꤒꤢꤨ꤬ ꤢ꤬ꤚꤣꤧ꤬ꤜꤢꤦ ꤒꤢ꤬ꤢꤨ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kvy)", () => {
		expect(p.parse("ꤊꤢ꤬ꤚꤤ꤬ꤒꤢꤨ꤬ ꤔꤤ꤬ꤢꤨꤙꤝꤣꤩ ꤔꤢꤦ꤬ ꤒꤢ꤬ꤢꤨ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kvy)", () => {
		expect(p.parse("ꤊꤢ꤬ꤜꤢꤪ꤬ꤐꤢꤧ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kvy)", () => {
		expect(p.parse("ꤊꤢ꤬ꤜꤢ꤬ꤒꤤ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kvy)", () => {
		expect(p.parse("ꤢꤩꤖꤢꤩꤐꤢꤨ꤬ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kvy)", () => {
		expect(p.parse("ꤖꤤꤜꤤ꤬ꤕꤤ꤬ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kvy)", () => {
		expect(p.parse("ꤞꤢꤩ꤬ꤐꤢ꤬ꤜꤢ꤬ꤔꤤ ꤢ꤬ꤚꤣꤧ꤬ꤜꤢꤦ ꤒꤢ꤬ꤢꤨ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kvy)", () => {
		expect(p.parse("ꤞꤢꤩ꤬ꤐꤢ꤬ꤜꤢ꤬ꤔꤤ ꤔꤤ꤬ꤢꤨꤙꤝꤣꤩ ꤔꤢꤦ꤬ ꤒꤢ꤬ꤢꤨ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kvy)", () => {
		expect(p.parse("ꤒꤤ꤬ꤗꤢ꤬ꤒꤢꤩ꤬ ꤢ꤬ꤚꤣꤧ꤬ꤜꤢꤦ ꤒꤢ꤬ꤢꤨ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kvy)", () => {
		expect(p.parse("ꤒꤤ꤬ꤗꤢ꤬ꤒꤢꤩ꤬ ꤔꤤ꤬ꤢꤨꤙꤝꤣꤩ ꤔꤢꤦ꤬ ꤒꤢ꤬ꤢꤨ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kvy)", () => {
		expect(p.parse("ꤒꤤꤒꤢꤨ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kvy)", () => {
		expect(p.parse("ꤖꤤꤜꤢ꤬ꤗꤥ꤬ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kvy)", () => {
		expect(p.parse("ꤟꤤꤙꤚꤢꤨ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kvy)", () => {
		expect(p.parse("ꤡꤛꤢꤩ꤭ꤗꤢ꤬ꤐꤣ꤬ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kvy)", () => {
		expect(p.parse("ꤕꤢꤩ꤬ꤒꤢ꤬ꤚꤢꤨ ꤢ꤬ꤚꤣꤧ꤬ꤜꤢꤦ ꤒꤢ꤬ꤢꤨ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kvy)", () => {
		expect(p.parse("ꤕꤢꤩ꤬ꤒꤢ꤬ꤚꤢꤨ ꤔꤤ꤬ꤢꤨꤙꤝꤣꤩ ꤔꤢꤦ꤬ ꤒꤢ꤬ꤢꤨ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kvy)", () => {
		expect(p.parse("ꤛꤢꤨꤘꤢ꤬ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (kvy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (kvy)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ꤛꤥ꤭ꤟꤢ꤬ ꤢ꤬ꤚꤣꤧ꤬ꤜꤢꤦ ꤒꤢ꤬ꤢꤨ - ꤛꤥ꤭ꤟꤢ꤬ ꤞꤢꤨꤢꤨꤙꤝꤣꤩ ꤔꤢꤦ꤬ ꤒꤢ꤬ꤢꤨ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ꤛꤥ꤭ꤟꤢ꤬ ꤢ꤬ꤚꤣꤧ꤬ꤜꤢꤦ ꤒꤢ꤬ꤢꤨ – ꤛꤥ꤭ꤟꤢ꤬ ꤞꤢꤨꤢꤨꤙꤝꤣꤩ ꤔꤢꤦ꤬ ꤒꤢ꤬ꤢꤨ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ꤛꤥ꤭ꤟꤢ꤬ ꤢ꤬ꤚꤣꤧ꤬ꤜꤢꤦ ꤒꤢ꤬ꤢꤨ — ꤛꤥ꤭ꤟꤢ꤬ ꤞꤢꤨꤢꤨꤙꤝꤣꤩ ꤔꤢꤦ꤬ ꤒꤢ꤬ꤢꤨ").osis()).toEqual("1John.1-3John.1");
	});
});

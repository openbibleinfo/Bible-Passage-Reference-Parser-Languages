"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kyu.js";

describe("Localized book Gen (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kyu)", () => {
		expect(p.parse("ꤟꤢꤩ꤬ꤋꤢꤨ꤬ꤓꤝꤟꤥ꤭ꤜꤢꤨ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kyu)", () => {
		expect(p.parse("ꤓꤢꤩ꤬ꤡꤛꤣꤏꤤ꤬ꤕꤜꤢꤧ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kyu)", () => {
		expect(p.parse("ꤡꤢꤪꤙꤢꤨ꤬ꤡꤢꤪꤙꤢꤧ꤭ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kyu)", () => {
		expect(p.parse("ꤜꤢꤩ꤭ꤗꤟꤤ꤬ꤊꤜꤢꤧ꤭ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Rev (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kyu)", () => {
		expect(p.parse("ꤒꤟꤢꤧ꤬ꤘꤛꤢꤩꤜꤟꤌꤣ꤭ꤓꤛꤢ꤬ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tè̤dyéluô̌htya 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tè̤d 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kyu)", () => {
		expect(p.parse("ꤘꤣ꤬ꤑꤢ꤭ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kyu)", () => {
		expect(p.parse("ꤛꤥ꤬ꤏꤛꤢꤨ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kyu)", () => {
		expect(p.parse("ꤕꤚꤟꤢꤧ꤬ꤡꤤ꤬ꤚꤛꤢ꤬ꤒꤟꤢꤧ꤬ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kyu)", () => {
		expect(p.parse("ꤚꤢꤨꤒꤢ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Sam (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kyu)", () => {
		expect(p.parse("ꤏꤛꤢ꤬ꤗꤢꤨ꤬ꤢꤩꤜꤢ꤬ ꤢ꤬ꤚꤟꤢꤩꤜꤣ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kyu)", () => {
		expect(p.parse("ꤏꤛꤢ꤬ꤗꤢꤨ꤬ꤢꤩꤜꤢ꤬ ꤔꤛꤢꤩ꤭ꤙꤢ꤬ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kyu)", () => {
		expect(p.parse("ꤋꤝꤤ ꤢ꤬ꤚꤟꤢꤩꤜꤣ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book Esth (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kyu)", () => {
		expect(p.parse("ꤢꤧ꤬ꤞꤢ꤬ꤒꤢ꤬ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Ps (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kyu)", () => {
		expect(p.parse("ꤓꤢꤨ꤬ꤞꤢꤧꤓꤛꤢ꤬ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kyu)", () => {
		expect(p.parse("ꤕꤚꤟꤢꤧ꤬ꤞꤤꤖꤢꤧꤍꤟꤥ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Jonah (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kyu)", () => {
		expect(p.parse("ꤡꤛꤥ꤬ꤔꤢ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kyu)", () => {
		expect(p.parse("Matteo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ꤗꤢꤞꤢꤧ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kyu)", () => {
		expect(p.parse("ꤗꤢ꤬ꤊꤢꤨ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kyu)", () => {
		expect(p.parse("ꤜꤢꤨꤊꤢ꤬ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kyu)", () => {
		expect(p.parse("ꤛꤥ꤭ꤟꤢ꤬ ꤢ꤬ꤚꤟꤢꤩꤜꤣ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Giovanni aré̤lố tôba 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Gi 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kyu)", () => {
		expect(p.parse("ꤛꤥ꤭ꤟꤢ꤬ ꤔꤛꤢꤩ꤭ꤙꤢ꤬ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Giovanni nyě̤ba tôba 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Gi 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kyu)", () => {
		expect(p.parse("Giovanni thuô̌ba tôba 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ꤛꤥ꤭ꤟꤢ꤬ ꤞꤌꤣ꤭ꤙꤢ꤬ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Gi 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kyu)", () => {
		expect(p.parse("Giovanni 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ꤛꤥ꤭ꤟꤢ꤬ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Gio 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kyu)", () => {
		expect(p.parse("ꤕꤚꤟꤢꤧ꤬ꤘꤣ꤬ꤑꤢ꤭ꤖꤢꤨ ꤒꤢ꤬ꤟꤢꤩ꤬ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Prè̤dônyǎphú tahe 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tah 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kyu)", () => {
		expect(p.parse("ꤚꤟꤥꤗꤢꤩ꤬ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kyu)", () => {
		expect(p.parse("ꤊꤢ꤬ꤚꤤ꤬ꤞꤢꤨ꤬ ꤢ꤬ꤚꤟꤢꤩꤜꤣ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Corinthia aré̤lố tôba 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Co 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kyu)", () => {
		expect(p.parse("ꤊꤢ꤬ꤚꤤ꤬ꤞꤢꤨ꤬ ꤔꤛꤢꤩ꤭ꤙꤢ꤬ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Corinthia nyě̤ba tôba 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Co 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kyu)", () => {
		expect(p.parse("ꤊꤢ꤬ꤜꤢꤪ꤬ꤎꤢꤧ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Colossae 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kyu)", () => {
		expect(p.parse("ꤊꤢ꤬ꤜꤢ꤬ꤒꤤ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galasia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kyu)", () => {
		expect(p.parse("ꤢꤩꤖꤢꤩꤎꤢꤨ꤬ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epheso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kyu)", () => {
		expect(p.parse("Philippi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ꤖꤤꤜꤤ꤬ꤕꤤ꤬ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Php 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kyu)", () => {
		expect(p.parse("ꤞꤢꤩ꤬ꤎꤢ꤬ꤜꤢ꤬ꤔꤤ ꤢ꤬ꤚꤟꤢꤩꤜꤣ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Thessalonia aré̤lố tôba 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Th 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kyu)", () => {
		expect(p.parse("ꤞꤢꤩ꤬ꤎꤢ꤬ꤜꤢ꤬ꤔꤤ ꤔꤛꤢꤩ꤭ꤙꤢ꤬ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Thessalonia nyě̤ba tôba 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Th 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kyu)", () => {
		expect(p.parse("ꤒꤤ꤬ꤗꤢ꤬ꤞꤢꤩ꤬ ꤢ꤬ꤚꤟꤢꤩꤜꤣ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Timothy aré̤lố tôba 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kyu)", () => {
		expect(p.parse("ꤒꤤ꤬ꤗꤢ꤬ꤞꤢꤩ꤬ ꤔꤛꤢꤩ꤭ꤙꤢ꤬ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Timothy nyě̤ba tôba 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kyu)", () => {
		expect(p.parse("ꤒꤤꤒꤢꤨ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kyu)", () => {
		expect(p.parse("Philomena 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ꤖꤤꤜꤢ꤬ꤗꤥ꤬ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kyu)", () => {
		expect(p.parse("Hebreo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ꤟꤤꤙꤚꤢꤨ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kyu)", () => {
		expect(p.parse("ꤡꤛꤢꤩ꤭ꤗꤢ꤬ꤎꤣ꤬ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakomo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kyu)", () => {
		expect(p.parse("ꤕꤢꤩ꤬ꤒꤢ꤬ꤚꤢꤨ ꤢ꤬ꤚꤟꤢꤩꤜꤣ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Petru aré̤lố tôba 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kyu)", () => {
		expect(p.parse("ꤕꤢꤩ꤬ꤒꤢ꤬ꤚꤢꤨ ꤔꤛꤢꤩ꤭ꤙꤢ꤬ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Petru nyě̤ba tôba 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kyu)", () => {
		expect(p.parse("ꤛꤢꤨꤘꤢ꤬ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (kyu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (kyu)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ꤛꤥ꤭ꤟꤢ꤬ ꤢ꤬ꤚꤟꤢꤩꤜꤣ ꤒꤣ꤬ꤙꤢ꤬ - Giovanni thuô̌ba tôba").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ꤛꤥ꤭ꤟꤢ꤬ ꤢ꤬ꤚꤟꤢꤩꤜꤣ ꤒꤣ꤬ꤙꤢ꤬ – Giovanni thuô̌ba tôba").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ꤛꤥ꤭ꤟꤢ꤬ ꤢ꤬ꤚꤟꤢꤩꤜꤣ ꤒꤣ꤬ꤙꤢ꤬ — Giovanni thuô̌ba tôba").osis()).toEqual("1John.1-3John.1");
	});
});

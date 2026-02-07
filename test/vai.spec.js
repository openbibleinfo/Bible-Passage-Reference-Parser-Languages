"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/vai.js";

describe("Localized book Rev (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (vai)", () => {
		expect(p.parse("ꕪꘋꕓ ꕞ ꖏ ꖷ ꖸ ꕀꕩ ꗘꘋ ꕞ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (vai)", () => {
		expect(p.parse("ꕮꕊꔱꖳ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (vai)", () => {
		expect(p.parse("ꕮꕊꕃ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (vai)", () => {
		expect(p.parse("ꖨꕃ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (vai)", () => {
		expect(p.parse("ꗘꘋ ꕞ ꕺꖃꔀ ꔖꔜꕯꕊ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (vai)", () => {
		expect(p.parse("ꗘꘋ ꕞ ꕺꖃꔀ ꗱꕞꕯꕊ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (vai)", () => {
		expect(p.parse("ꗘꘋ ꕞ ꕺꖃꔀ ꕢꕔꕯꕊ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (vai)", () => {
		expect(p.parse("ꗘꘋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (vai)", () => {
		expect(p.parse("ꔎꖫꘂ ꖸꕊ ꕮ ꖏꔀ ꖸ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (vai)", () => {
		expect(p.parse("ꖃꕱꘋ ꕺꖃꔀ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (vai)", () => {
		expect(p.parse("ꗛꔷꘋꔳ ꕺꖃꔀ ꔖꔜꕯꕊ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (vai)", () => {
		expect(p.parse("ꗛꔷꘋꔳ ꕺꖃꔀ ꗱꕞꕯꕊ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (vai)", () => {
		expect(p.parse("ꗛꗏꕢꔤ ꕺꖃꔀ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (vai)", () => {
		expect(p.parse("ꕭꔒꔳꕩ ꕺꖃꔀ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (vai)", () => {
		expect(p.parse("ꗡꕘꕢ ꕺꖃꔀ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (vai)", () => {
		expect(p.parse("ꔱꔷꕐꔤ ꕺꖃꔀ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (vai)", () => {
		expect(p.parse("ꗳꕢꖃꕇꕪ ꕺꖃꔀ ꔖꔜꕯꕊ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (vai)", () => {
		expect(p.parse("ꗳꕢꖃꕇꕪ ꕺꖃꔀ ꗱꕞꕯꕊ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (vai)", () => {
		expect(p.parse("ꔳꗞꔎ ꕺꖃꔀ ꔖꔜꕯꕊ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (vai)", () => {
		expect(p.parse("ꔳꗞꔎ ꕺꖃꔀ ꗱꕞꕯꕊ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (vai)", () => {
		expect(p.parse("ꕚꔤꕚꔻ ꕺꖃꔀ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (vai)", () => {
		expect(p.parse("ꔱꔒꗞꘋ ꕺꖃꔀ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (vai)", () => {
		expect(p.parse("ꕑꕇꔻꕞꔤꕞ ꕺꖃꔀ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (vai)", () => {
		expect(p.parse("ꔛꕆꔻ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (vai)", () => {
		expect(p.parse("ꔪꗳ ꕞ ꕺꖃꔀ ꔖꔜꕯꕊ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (vai)", () => {
		expect(p.parse("ꔪꗳ ꕞ ꕺꖃꔀ ꗱꕞꕯꕊ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (vai)", () => {
		expect(p.parse("ꖱꖕ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (vai)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (vai)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ꗘꘋ ꕞ ꕺꖃꔀ ꔖꔜꕯꕊ - ꗘꘋ ꕞ ꕺꖃꔀ ꕢꕔꕯꕊ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ꗘꘋ ꕞ ꕺꖃꔀ ꔖꔜꕯꕊ – ꗘꘋ ꕞ ꕺꖃꔀ ꕢꕔꕯꕊ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ꗘꘋ ꕞ ꕺꖃꔀ ꔖꔜꕯꕊ — ꗘꘋ ꕞ ꕺꖃꔀ ꕢꕔꕯꕊ").osis()).toEqual("1John.1-3John.1");
	});
});

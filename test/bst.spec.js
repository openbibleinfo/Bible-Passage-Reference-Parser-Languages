"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bst.js";

describe("Localized book Rev (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bst)", () => {
		expect(p.parse("ሳጻ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bst)", () => {
		expect(p.parse("ማ̈ቶ̈ሳ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማ̈ቶ̈ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bst)", () => {
		expect(p.parse("ማ̈ርቆ̈ሳ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማ̈ር 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bst)", () => {
		expect(p.parse("ሉቃ̈ሳ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃ̈ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bst)", () => {
		expect(p.parse("1 ዋ̈ኒ̇ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ዋ̈ኒ̇ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bst)", () => {
		expect(p.parse("2 ዋ̈ኒ̇ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ዋ̈ኒ̇ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bst)", () => {
		expect(p.parse("3 ዋ̈ኒ̇ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ዋ̈ኒ̇ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bst)", () => {
		expect(p.parse("ዋ̈ኒ̇ሳ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዋ̈ኒ̇ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bst)", () => {
		expect(p.parse("ሃዋ̈ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bst)", () => {
		expect(p.parse("ሮሜ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bst)", () => {
		expect(p.parse("1 ቆሮ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ቆሮ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bst)", () => {
		expect(p.parse("2 ቆሮ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ቆሮ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bst)", () => {
		expect(p.parse("ቆላ̈ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bst)", () => {
		expect(p.parse("ጋላ̈ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bst)", () => {
		expect(p.parse("ኤፍ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bst)", () => {
		expect(p.parse("ፊል 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bst)", () => {
		expect(p.parse("1 ታሳ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ታሳ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bst)", () => {
		expect(p.parse("2 ታሳ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ታሳ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bst)", () => {
		expect(p.parse("1 ጢማ̈ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ጢማ̈ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bst)", () => {
		expect(p.parse("2 ጢማ̈ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ጢማ̈ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bst)", () => {
		expect(p.parse("ቲ̈ታ̇ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bst)", () => {
		expect(p.parse("ፊልሞ̈ና 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bst)", () => {
		expect(p.parse("ኢብ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bst)", () => {
		expect(p.parse("ዓይ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bst)", () => {
		expect(p.parse("1 ጴጥ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ጴጥ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bst)", () => {
		expect(p.parse("2 ጴጥ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ጴጥ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bst)", () => {
		expect(p.parse("ዪሁ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (bst)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (bst)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ዋ̈ኒ̇ - 3 ዋ̈ኒ̇").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ዋ̈ኒ̇ – 3 ዋ̈ኒ̇").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ዋ̈ኒ̇ — 3 ዋ̈ኒ̇").osis()).toEqual("1John.1-3John.1");
	});
});

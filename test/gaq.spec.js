"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gaq.js";

describe("Localized book Rev (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gaq)", () => {
		expect(p.parse("ପ୍ରକାସିତ୍‌ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gaq)", () => {
		expect(p.parse("ମାତିଉ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gaq)", () => {
		expect(p.parse("ମାର୍‌କ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gaq)", () => {
		expect(p.parse("ଲୁକ୍‌ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gaq)", () => {
		expect(p.parse("୧ ଜହନ୍‌ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧. ଜହନ୍‌ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gaq)", () => {
		expect(p.parse("୨ ଜହନ୍‌ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨. ଜହନ୍‌ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gaq)", () => {
		expect(p.parse("୩ ଜହନ୍‌ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("୩. ଜହନ୍‌ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gaq)", () => {
		expect(p.parse("ଜହନ୍‌ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gaq)", () => {
		expect(p.parse("ପ୍ରେରିତ୍‌ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gaq)", () => {
		expect(p.parse("ରମିୟ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gaq)", () => {
		expect(p.parse("୧ କରିନ୍‌ତିୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କରିନ୍‌ତିୟ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gaq)", () => {
		expect(p.parse("୨ କରିନ୍‌ତିୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨. କରିନ୍‌ତିୟ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gaq)", () => {
		expect(p.parse("କଲସିୟ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gaq)", () => {
		expect(p.parse("ଗାଲାତିୟ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gaq)", () => {
		expect(p.parse("ଏପିସିୟ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gaq)", () => {
		expect(p.parse("ପିଲିପିୟ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gaq)", () => {
		expect(p.parse("୧ ତେସଲନିକିୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ତେସଲନିକିୟ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gaq)", () => {
		expect(p.parse("୨ ତେସଲନିକିୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨. ତେସଲନିକିୟ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gaq)", () => {
		expect(p.parse("୧ ତିମତି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧. ତିମତି 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gaq)", () => {
		expect(p.parse("୨ ତିମତି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨. ତିମତି 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gaq)", () => {
		expect(p.parse("ତିତସ୍‌ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gaq)", () => {
		expect(p.parse("ପିଲିମନ୍‌ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gaq)", () => {
		expect(p.parse("ଏବ୍‌ରି 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gaq)", () => {
		expect(p.parse("ଜାକୁବ୍‌ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gaq)", () => {
		expect(p.parse("୧ ପିତର୍‌ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ପିତର୍‌ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gaq)", () => {
		expect(p.parse("୨ ପିତର 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨. ପିତର 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gaq)", () => {
		expect(p.parse("ଜିଉଦା 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (gaq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (gaq)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("୧ ଜହନ୍‌ - ୩ ଜହନ୍‌").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("୧ ଜହନ୍‌ – ୩ ଜହନ୍‌").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("୧ ଜହନ୍‌ — ୩ ଜହନ୍‌").osis()).toEqual("1John.1-3John.1");
	});
});

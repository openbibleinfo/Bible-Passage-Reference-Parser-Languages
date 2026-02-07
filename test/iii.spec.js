"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/iii.js";

describe("Localized book Rev (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (iii)", () => {
		expect(p.parse("ţ̦̔Ħ ŧŉ ųǒ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (iii)", () => {
		expect(p.parse("ŭŋ Ť̟Ħ Ť̕ Ŵ̦ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (iii)", () => {
		expect(p.parse("Ŭŋ ŧĦǑ Ť̕ Ŵ̦ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (iii)", () => {
		expect(p.parse("Ŭǒ Ū̐ Ť̕ Ŵ̦ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (iii)", () => {
		expect(p.parse("Źǒ Ũǎ Ťŕŋ ųǒ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (iii)", () => {
		expect(p.parse("Źǒ Ũǎ Ṳ̊ ųǒ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (iii)", () => {
		expect(p.parse("Źǒ Ũǎ ųǁ ųǒ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (iii)", () => {
		expect(p.parse("Źǒ Ũǎ Ť̕ Ŵ̦ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (iii)", () => {
		expect(p.parse("Ŵǐ Ŭ̗ Ů̕ ŧŵ Ūƹ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (iii)", () => {
		expect(p.parse("Ţǁ Ŭů Ůŧǒ Ŭů ŭǃ Ŷǁ Ŵħǁ Ť̕ Ťŕĺ ųǒ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (iii)", () => {
		expect(p.parse("Ţǁ Ŭůůŧǒ ŧ̥ Ŭũ Ůť̥ Ŷǁ Ŵħǁ Ť̕ Ťŕĺ Ṳ̙̄ ųǒ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ţǁ. Ŭůůŧǒ ŧ̥ Ŭũ Ůť̥ Ŷǁ Ŵħǁ Ť̕ Ťŕĺ Ṳ̙̄ ųǒ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (iii)", () => {
		expect(p.parse("Ţǁ Ŭů Ůūǒ ŧ̥ Ŭũ Ůť̥ Ŷǁ Ŵħǁ Ť̕ Ťŕĺ Ț̌ ųǒ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ţǁ. Ŭů Ůūǒ ŧ̥ Ŭũ Ůť̥ Ŷǁ Ŵħǁ Ť̕ Ťŕĺ Ț̌ ųǒ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (iii)", () => {
		expect(p.parse("Ţǁ Ŭů Ůūǒ ŧ̥ Ŭů Ÿ̤ Ŷǁ Ŵħǁ Ť̕ Ťŕĺ ųǒ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (iii)", () => {
		expect(p.parse("Ţǁ Ŭůůūǒ Ū̐ Ŭ̗ Ťħǌ Ŷǁ Ŵħǁ Ť̕ Ťŕĺ ųǒ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (iii)", () => {
		expect(p.parse("Ţǁ Ŭů Ůūǒ šǐ Ŧŵ ųǑŶǁ Ŵħǁ Ť̕ Ťŕĺ ųǒ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (iii)", () => {
		expect(p.parse("Ţǁ Ŭů Ůūǒ Ŧǆ Ŭǐ Ţǐ Ŷǁ Ŵħǁ Ť̕ Ťŕĺ ųǒ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (iii)", () => {
		expect(p.parse("Ţǁ Ŭů Ůūǒ Ťŕũŏ ųŋ Ŭů Ůũ Ū̐ Ŷǁ Ŵħǁ Ť̕ Ťŕĺ Ṳ̙̄ ųǒ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ţǁ. Ŭů Ůūǒ Ťŕũŏ ųŋ Ŭů Ůũ Ū̐ Ŷǁ Ŵħǁ Ť̕ Ťŕĺ Ṳ̙̄ ųǒ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (iii)", () => {
		expect(p.parse("Ţǁ Ŭů Ůūƪ Ťŕũŏ ųŋ Ŭũ Ůũ Ū̐ Ŷǁ Ŵħǁ Ť̕ Ťŕĺ Ț̌ ųǒ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ţǁ. Ŭů Ůūƪ Ťŕũŏ ųŋ Ŭũ Ůũ Ū̐ Ŷǁ Ŵħǁ Ť̕ Ťŕĺ Ț̌ ųǒ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (iii)", () => {
		expect(p.parse("Ţǁ Ŭůůūǒ Ťŕũ ŭǑ Ťħǌ Ť̕ Ťŕĺ Ṳ̙̄ ųǒ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ţǁ. Ŭůůūǒ Ťŕũ ŭǑ Ťħǌ Ť̕ Ťŕĺ Ṳ̙̄ ųǒ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (iii)", () => {
		expect(p.parse("Ţǁ Ŭůůūǒ Ťŕũ ŭǑ Ťħǌ Ť̕ Ťŕĺ Ț̌ ųǒ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ţǁ. Ŭůůūǒ Ťŕũ ŭǑ Ťħǌ Ť̕ Ťŕĺ Ț̌ ųǒ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (iii)", () => {
		expect(p.parse("Ţǁ Ŭů ŮūǑ Ťŕũ Ť̥Ť̕ Ťŕĺ ųǒ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (iii)", () => {
		expect(p.parse("Ţǁ Ŭů ŮūǑ Ŧō Ŭǐ ŭŎ Ť̕ Ťŕĺ ųǒ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (iii)", () => {
		expect(p.parse("Ÿ̤ Ţǀ Ŭœ ųǒ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (iii)", () => {
		expect(p.parse("Źŋ ūǑ ųǒ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (iii)", () => {
		expect(p.parse("Ţǐ Ťň Ṳ̙̄ ųǒ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (iii)", () => {
		expect(p.parse("Ţǐ Ťǀ Ț̌ ųǒ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (iii)", () => {
		expect(p.parse("Źř Ťǃ ųǒ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (iii)", () => {
		expect(p.parse("ŹǑ ŨǍ Ṳ̊ ųǒ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ţǐ Ťǀ Ț̌ ųǒ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Parser helper should handle book ranges (iii)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (iii)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Źǒ Ũǎ Ťŕŋ ųǒ - Źǒ Ũǎ ųǁ ųǒ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Źǒ Ũǎ Ťŕŋ ųǒ – Źǒ Ũǎ ųǁ ųǒ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Źǒ Ũǎ Ťŕŋ ųǒ — Źǒ Ũǎ ųǁ ųǒ").osis()).toEqual("1John.1-3John.1");
	});
});

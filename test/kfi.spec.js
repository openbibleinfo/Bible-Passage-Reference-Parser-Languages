"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kfi.js";

describe("Localized book Rev (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kfi)", () => {
		expect(p.parse("வெளி. காரியகோளு 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("வெளி 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kfi)", () => {
		expect(p.parse("மத்தேயு 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kfi)", () => {
		expect(p.parse("மாற்கு 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kfi)", () => {
		expect(p.parse("லூக்கா 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kfi)", () => {
		expect(p.parse("1 யோவானு 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. யோவானு 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kfi)", () => {
		expect(p.parse("2 யோவானு 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. யோவானு 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kfi)", () => {
		expect(p.parse("3 யோவானு 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. யோவானு 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kfi)", () => {
		expect(p.parse("யோவானு 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kfi)", () => {
		expect(p.parse("வி.தூ. கெலசகோளு 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("வி.தூ.கெலசகோளு 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kfi)", () => {
		expect(p.parse("ரோமரு 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kfi)", () => {
		expect(p.parse("1 கொரிந்தியரு 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 கொரி 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. கொரிந்தியரு 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. கொரி 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kfi)", () => {
		expect(p.parse("2 கொரிந்தியரு 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 கொரி 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. கொரிந்தியரு 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. கொரி 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kfi)", () => {
		expect(p.parse("கொலோசெயரு 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kfi)", () => {
		expect(p.parse("கலாத்தியரு 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kfi)", () => {
		expect(p.parse("எபேசியரு 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kfi)", () => {
		expect(p.parse("பிலிப்பியரு 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kfi)", () => {
		expect(p.parse("1 தெசலோனிக்கேயா 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 தெசலோனிகேயரு 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. தெசலோனிக்கேயா 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. தெசலோனிகேயரு 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kfi)", () => {
		expect(p.parse("2 தெசலோனிக்கேயா 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 தெசலோனிகேயரு 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. தெசலோனிக்கேயா 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. தெசலோனிகேயரு 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kfi)", () => {
		expect(p.parse("1 தீமோத்தேயு 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. தீமோத்தேயு 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kfi)", () => {
		expect(p.parse("2 தீமோத்தேயு 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. தீமோத்தேயு 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kfi)", () => {
		expect(p.parse("தீத்து 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kfi)", () => {
		expect(p.parse("பிலேமோனு 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kfi)", () => {
		expect(p.parse("எபிரெயரு 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kfi)", () => {
		expect(p.parse("யாக்கோபு 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kfi)", () => {
		expect(p.parse("1 பேதுரு 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. பேதுரு 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kfi)", () => {
		expect(p.parse("2 பேதுரு 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. பேதுரு 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kfi)", () => {
		expect(p.parse("யூதா 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (kfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (kfi)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 யோவானு - 3 யோவானு").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 யோவானு – 3 யோவானு").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 யோவானு — 3 யோவானு").osis()).toEqual("1John.1-3John.1");
	});
});

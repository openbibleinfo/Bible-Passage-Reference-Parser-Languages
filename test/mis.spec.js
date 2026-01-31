"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mis.js";

describe("Localized book Rev (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mis)", () => {
		expect(p.parse("தரிசன. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("தரிசன 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mis)", () => {
		expect(p.parse("மத்தாயி 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mis)", () => {
		expect(p.parse("மாற்கு. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("மாற்கு 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mis)", () => {
		expect(p.parse("லூக்கா 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("லூக். 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mis)", () => {
		expect(p.parse("1 யோவானு. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 யோவானு 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. யோவானு. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. யோவானு 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mis)", () => {
		expect(p.parse("2 யோவானு. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 யோவானு 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. யோவானு. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. யோவானு 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mis)", () => {
		expect(p.parse("3 யோவானு. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 யோவானு 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. யோவானு. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. யோவானு 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mis)", () => {
		expect(p.parse("யோவானு. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("யோவானு 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mis)", () => {
		expect(p.parse("அப்போஸ்தலம்மாரு 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("அப். 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mis)", () => {
		expect(p.parse("ரோமாக்காரு 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ரோமா. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mis)", () => {
		expect(p.parse("1 கொரிந்தி 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 கொரி. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. கொரிந்தி 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. கொரி. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mis)", () => {
		expect(p.parse("2 கொரிந்தி 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 கொரி. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. கொரிந்தி 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. கொரி. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mis)", () => {
		expect(p.parse("கொலோசிக்காரு 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("கொலோசி. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mis)", () => {
		expect(p.parse("கலாத்தி 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("கலா. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mis)", () => {
		expect(p.parse("எபேசியம்மாரு 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("எபேசி. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mis)", () => {
		expect(p.parse("பிலிப்பி 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("பிலி. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mis)", () => {
		expect(p.parse("1 தெசலோனி 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 தெச. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. தெசலோனி 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. தெச. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mis)", () => {
		expect(p.parse("2 தெசலோனி 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 தெச. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. தெசலோனி 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. தெச. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mis)", () => {
		expect(p.parse("1 திமோத்தி 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 திமோ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. திமோத்தி 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. திமோ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mis)", () => {
		expect(p.parse("2 திமோத்தி 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 திமோ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. திமோத்தி 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. திமோ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mis)", () => {
		expect(p.parse("தீத்து. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("தீத்து 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mis)", () => {
		expect(p.parse("பிலேமோனு 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("பிலே. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mis)", () => {
		expect(p.parse("எபிரெயம்மாரு 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("எபி. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mis)", () => {
		expect(p.parse("யாக்கோபு 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("யாக். 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mis)", () => {
		expect(p.parse("1 பேதுரு. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 பேதுரு 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. பேதுரு. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. பேதுரு 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mis)", () => {
		expect(p.parse("2 பேதுரு. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 பேதுரு 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. பேதுரு. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. பேதுரு 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mis)", () => {
		expect(p.parse("யூதா. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("யூதா 1:1").osis()).toEqual("Jude.1.1");
	});
});

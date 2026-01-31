"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/cty.js";

describe("Localized book Rev (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (cty)", () => {
		expect(p.parse("தரிசன. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("தரிசன 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (cty)", () => {
		expect(p.parse("மத்தாயி 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (cty)", () => {
		expect(p.parse("மாற்கு. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("மாற்கு 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (cty)", () => {
		expect(p.parse("லூக்கா 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("லூக். 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (cty)", () => {
		expect(p.parse("1 யோவானு. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 யோவானு 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. யோவானு. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. யோவானு 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (cty)", () => {
		expect(p.parse("2 யோவானு. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 யோவானு 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. யோவானு. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. யோவானு 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (cty)", () => {
		expect(p.parse("3 யோவானு. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 யோவானு 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. யோவானு. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. யோவானு 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (cty)", () => {
		expect(p.parse("யோவானு. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("யோவானு 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (cty)", () => {
		expect(p.parse("அப்போஸ்தலம்மாரு 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("அப். 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (cty)", () => {
		expect(p.parse("ரோமாக்காரு 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ரோமா. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (cty)", () => {
		expect(p.parse("1 கொரிந்தி 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 கொரி. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. கொரிந்தி 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. கொரி. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (cty)", () => {
		expect(p.parse("2 கொரிந்தி 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 கொரி. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. கொரிந்தி 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. கொரி. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (cty)", () => {
		expect(p.parse("கொலோசிக்காரு 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("கொலோசி. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (cty)", () => {
		expect(p.parse("கலாத்தி 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("கலா. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (cty)", () => {
		expect(p.parse("எபேசியம்மாரு 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("எபேசி. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (cty)", () => {
		expect(p.parse("பிலிப்பி 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("பிலி. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (cty)", () => {
		expect(p.parse("1 தெசலோனி 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 தெச. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. தெசலோனி 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. தெச. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (cty)", () => {
		expect(p.parse("2 தெசலோனி 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 தெச. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. தெசலோனி 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. தெச. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (cty)", () => {
		expect(p.parse("1 திமோத்தி 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 திமோ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. திமோத்தி 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. திமோ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (cty)", () => {
		expect(p.parse("2 திமோத்தி 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 திமோ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. திமோத்தி 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. திமோ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (cty)", () => {
		expect(p.parse("தீத்து. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("தீத்து 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (cty)", () => {
		expect(p.parse("பிலேமோனு 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("பிலே. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (cty)", () => {
		expect(p.parse("எபிரெயம்மாரு 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("எபி. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (cty)", () => {
		expect(p.parse("யாக்கோபு 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("யாக். 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (cty)", () => {
		expect(p.parse("1 பேதுரு. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 பேதுரு 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. பேதுரு. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. பேதுரு 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (cty)", () => {
		expect(p.parse("2 பேதுரு. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 பேதுரு 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. பேதுரு. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. பேதுரு 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (cty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (cty)", () => {
		expect(p.parse("யூதா. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("யூதா 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/jbn.js";

describe("Localized book Gen (jbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (jbn)", () => {
		expect(p.parse("التَّكوِين 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("تك 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Ruth (jbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (jbn)", () => {
		expect(p.parse("رَاعُوثَ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("را 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Dan (jbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (jbn)", () => {
		expect(p.parse("دانيال 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("دان 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Mark (jbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (jbn)", () => {
		expect(p.parse("مَرقُس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مر 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (jbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (jbn)", () => {
		expect(p.parse("لُوقَا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لو 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (jbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (jbn)", () => {
		expect(p.parse("1يُوحَنَّ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1يو 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (jbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (jbn)", () => {
		expect(p.parse("2يُوحَنَّ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2يو 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (jbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (jbn)", () => {
		expect(p.parse("3يُوحَنَّ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3يو 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1Cor (jbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (jbn)", () => {
		expect(p.parse("1كُورِنتُوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1كو 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Eph (jbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (jbn)", () => {
		expect(p.parse("أَفَسُس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أف 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (jbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (jbn)", () => {
		expect(p.parse("فِيلِبِّي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("في 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (jbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (jbn)", () => {
		expect(p.parse("1تسَلُونِيكِ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1تس 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book Jas (jbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (jbn)", () => {
		expect(p.parse("يَعقُوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يع 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (jbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (jbn)", () => {
		expect(p.parse("1بُطرُس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1بط 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (jbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (jbn)", () => {
		expect(p.parse("2بُطرُس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2بط 1:1").osis()).toEqual("2Pet.1.1");
	});
});

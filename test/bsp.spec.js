"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bsp.js";

describe("Localized book Gen (bsp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bsp)", () => {
		expect(p.parse("Dəkəcop 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Dcop 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (bsp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (bsp)", () => {
		expect(p.parse("Kəwur 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kwur 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (bsp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (bsp)", () => {
		expect(p.parse("Alewy 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lewy 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (bsp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (bsp)", () => {
		expect(p.parse("Kəlɔm 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Klɔm 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Deut (bsp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (bsp)", () => {
		expect(p.parse("Sariyɛ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Sryɛ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (bsp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (bsp)", () => {
		expect(p.parse("Yosuwe 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Ruth (bsp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (bsp)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Matt (bsp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bsp)", () => {
		expect(p.parse("Matiye 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bsp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bsp)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bsp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bsp)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bsp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bsp)", () => {
		expect(p.parse("1 Isaŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Saŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bsp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bsp)", () => {
		expect(p.parse("2 Isaŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Saŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bsp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bsp)", () => {
		expect(p.parse("3 Isaŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Saŋ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book Acts (bsp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bsp)", () => {
		expect(p.parse("Yɛbəc ya Asom a Yesu 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Asom 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Jas (bsp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bsp)", () => {
		expect(p.parse("Sak 1:1").osis()).toEqual("Jas.1.1");
	});
});

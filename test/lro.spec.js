"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lro.js";

describe("Localized book Rev (lro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lro)", () => {
		expect(p.parse("ꞌTäälü 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book 1John (lro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lro)", () => {
		expect(p.parse("1 Yuwana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuwana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book John (lro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lro)", () => {
		expect(p.parse("Yuwana 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lro)", () => {
		expect(p.parse("Yiiru 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book 2Cor (lro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lro)", () => {
		expect(p.parse("2 Küründüj 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lro)", () => {
		expect(p.parse("Külüjï 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lro)", () => {
		expect(p.parse("Galatiya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lro)", () => {
		expect(p.parse("Abijuj 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lro)", () => {
		expect(p.parse("Bïlïpï 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lro)", () => {
		expect(p.parse("1 Täjlänükï 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Täjlänükï 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book Phlm (lro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lro)", () => {
		expect(p.parse("Bïlïmün 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lro)", () => {
		expect(p.parse("Ngwïbrü 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lro)", () => {
		expect(p.parse("Yagub 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lro)", () => {
		expect(p.parse("1 Butruj 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Butruj 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (lro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lro)", () => {
		expect(p.parse("Yäwüdä 1:1").osis()).toEqual("Jude.1.1");
	});
});

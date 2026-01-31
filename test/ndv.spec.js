"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ndv.js";

describe("Localized book Rev (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ndv)", () => {
		expect(p.parse("Feeñiyoh 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Fñy 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Luke (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ndv)", () => {
		expect(p.parse("Lúkkë 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lúk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ndv)", () => {
		expect(p.parse("1Sŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ndv)", () => {
		expect(p.parse("2Sŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ndv)", () => {
		expect(p.parse("3 Saŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Sŋ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ndv)", () => {
		expect(p.parse("1 Saŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Saŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ndv)", () => {
		expect(p.parse("2 Saŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Saŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ndv)", () => {
		expect(p.parse("Saŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Phil (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ndv)", () => {
		expect(p.parse("Fílíp 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ndv)", () => {
		expect(p.parse("1 Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ndv)", () => {
		expect(p.parse("2 Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ndv)", () => {
		expect(p.parse("1Ts 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ndv)", () => {
		expect(p.parse("2Ts 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Tim (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ndv)", () => {
		expect(p.parse("2 Timoote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ndv)", () => {
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ndv)", () => {
		expect(p.parse("Tít 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ndv)", () => {
		expect(p.parse("Filemoo 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Jas (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ndv)", () => {
		expect(p.parse("Saak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Saa 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ndv)", () => {
		expect(p.parse("1 Peer 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peer 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 1Pet (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ndv)", () => {
		expect(p.parse("1Pr 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (ndv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ndv)", () => {
		expect(p.parse("Yúɗ 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tsu.js";

describe("Localized book Rev (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tsu)", () => {
		expect(p.parse("mokusi 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tsu)", () => {
		expect(p.parse("Matai 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tsu)", () => {
		expect(p.parse("Maluko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tsu)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tsu)", () => {
		expect(p.parse("Yohane 1 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tsu)", () => {
		expect(p.parse("Yohane 2 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tsu)", () => {
		expect(p.parse("Yohane 3 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tsu)", () => {
		expect(p.parse("Yohane 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tsu)", () => {
		expect(p.parse("sitoo 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tsu)", () => {
		expect(p.parse("Looma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tsu)", () => {
		expect(p.parse("kolinto 1 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tsu)", () => {
		expect(p.parse("kolinto 2 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tsu)", () => {
		expect(p.parse("Kolosai 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tsu)", () => {
		expect(p.parse("ngalatea 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tsu)", () => {
		expect(p.parse("'epeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tsu)", () => {
		expect(p.parse("Pilipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tsu)", () => {
		expect(p.parse("tesalonike 1 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tsu)", () => {
		expect(p.parse("tesalonike 2 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tsu)", () => {
		expect(p.parse("temote 1 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tsu)", () => {
		expect(p.parse("temote 2 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tsu)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tsu)", () => {
		expect(p.parse("fuilimong 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tsu)", () => {
		expect(p.parse("hevulu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tsu)", () => {
		expect(p.parse("yakovu 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tsu)", () => {
		expect(p.parse("petelo 1 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tsu)", () => {
		expect(p.parse("petelo 2 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tsu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tsu)", () => {
		expect(p.parse("Yuta 1:1").osis()).toEqual("Jude.1.1");
	});
});

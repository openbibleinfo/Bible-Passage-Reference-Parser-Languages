"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gau.js";

describe("Localized book Rev (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gau)", () => {
		expect(p.parse("ప్రకటన 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gau)", () => {
		expect(p.parse("మత్తయి 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gau)", () => {
		expect(p.parse("మార్కు 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gau)", () => {
		expect(p.parse("లూకా 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gau)", () => {
		expect(p.parse("1యోహాను 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gau)", () => {
		expect(p.parse("2యోహాను 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gau)", () => {
		expect(p.parse("3యోహాను 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gau)", () => {
		expect(p.parse("యోహాను 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gau)", () => {
		expect(p.parse("అపొ:కా 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gau)", () => {
		expect(p.parse("రోమా 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gau)", () => {
		expect(p.parse("1కొరింథి 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gau)", () => {
		expect(p.parse("2కొరింథి 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gau)", () => {
		expect(p.parse("కొలొస్స 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gau)", () => {
		expect(p.parse("గలతీ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gau)", () => {
		expect(p.parse("ఎపెసీ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gau)", () => {
		expect(p.parse("ఫిలిప్పీ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gau)", () => {
		expect(p.parse("1థెస్సలొనీ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gau)", () => {
		expect(p.parse("2థెస్సలొనీ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gau)", () => {
		expect(p.parse("1తిమోతి 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gau)", () => {
		expect(p.parse("2 తిమోతి 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2తిమోతి 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gau)", () => {
		expect(p.parse("తీతు 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gau)", () => {
		expect(p.parse("ఫిలేమోను 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gau)", () => {
		expect(p.parse("హెబ్రీ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gau)", () => {
		expect(p.parse("యాకోబు 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gau)", () => {
		expect(p.parse("1పేతురు 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gau)", () => {
		expect(p.parse("2పేతురు 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gau)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gau)", () => {
		expect(p.parse("యూదా 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/vgr.js";

describe("Localized book Rev (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (vgr)", () => {
		expect(p.parse("ప్రక 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (vgr)", () => {
		expect(p.parse("మత్త 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (vgr)", () => {
		expect(p.parse("మార్కు 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (vgr)", () => {
		expect(p.parse("లూకా 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (vgr)", () => {
		expect(p.parse("1యోహా 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (vgr)", () => {
		expect(p.parse("2యోహా 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (vgr)", () => {
		expect(p.parse("3యోహా 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (vgr)", () => {
		expect(p.parse("యోహా 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (vgr)", () => {
		expect(p.parse("అపొ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (vgr)", () => {
		expect(p.parse("రోమా 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (vgr)", () => {
		expect(p.parse("1కొరింథీ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (vgr)", () => {
		expect(p.parse("2కొరింథీ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (vgr)", () => {
		expect(p.parse("కొలొస్సీ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (vgr)", () => {
		expect(p.parse("గలతీ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (vgr)", () => {
		expect(p.parse("ఎఫెసీ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (vgr)", () => {
		expect(p.parse("ఫిలిప్పీ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (vgr)", () => {
		expect(p.parse("1థెస్స 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (vgr)", () => {
		expect(p.parse("2థెస్స 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (vgr)", () => {
		expect(p.parse("1తిమో 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (vgr)", () => {
		expect(p.parse("2తిమో 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (vgr)", () => {
		expect(p.parse("తీతు 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (vgr)", () => {
		expect(p.parse("ఫిలేమోన్ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ఫిలే 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (vgr)", () => {
		expect(p.parse("హెబ్రీ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (vgr)", () => {
		expect(p.parse("యాకో 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (vgr)", () => {
		expect(p.parse("1పేతు 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (vgr)", () => {
		expect(p.parse("2పేతు 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (vgr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (vgr)", () => {
		expect(p.parse("యూదా 1:1").osis()).toEqual("Jude.1.1");
	});
});

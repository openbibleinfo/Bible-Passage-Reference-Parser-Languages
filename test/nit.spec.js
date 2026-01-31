"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nit.js";

describe("Localized book Rev (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nit)", () => {
		expect(p.parse("ప్రకటన 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nit)", () => {
		expect(p.parse("మత్తయ్ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nit)", () => {
		expect(p.parse("మార్క 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nit)", () => {
		expect(p.parse("లూక్ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nit)", () => {
		expect(p.parse("1 యోహాన్ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. యోహాన్ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nit)", () => {
		expect(p.parse("2 యోహాన్ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. యోహాన్ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nit)", () => {
		expect(p.parse("3 యోహాన్ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. యోహాన్ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nit)", () => {
		expect(p.parse("యోహాన్ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nit)", () => {
		expect(p.parse("అపొస్తు 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nit)", () => {
		expect(p.parse("రోమీ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nit)", () => {
		expect(p.parse("1 కొరింతి 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. కొరింతి 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nit)", () => {
		expect(p.parse("2 కొరింతి 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. కొరింతి 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nit)", () => {
		expect(p.parse("కొలస్సి 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nit)", () => {
		expect(p.parse("గలతి 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nit)", () => {
		expect(p.parse("ఎపెసి 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nit)", () => {
		expect(p.parse("పిలిపి 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nit)", () => {
		expect(p.parse("1 తెస్సలోని 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. తెస్సలోని 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nit)", () => {
		expect(p.parse("2 తెస్సలోని 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. తెస్సలోని 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nit)", () => {
		expect(p.parse("1 తిమోతి 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. తిమోతి 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nit)", () => {
		expect(p.parse("2 తిమోతి 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. తిమోతి 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nit)", () => {
		expect(p.parse("తీతుకు 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nit)", () => {
		expect(p.parse("పిలేమోన్ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nit)", () => {
		expect(p.parse("హెబ్రీ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nit)", () => {
		expect(p.parse("యాకోబ్ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nit)", () => {
		expect(p.parse("1 పేతుర్ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. పేతుర్ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nit)", () => {
		expect(p.parse("2 పేతుర్ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. పేతుర్ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nit)", () => {
		expect(p.parse("యూద 1:1").osis()).toEqual("Jude.1.1");
	});
});

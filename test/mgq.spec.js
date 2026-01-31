"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mgq.js";

describe("Localized book Rev (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mgq)", () => {
		expect(p.parse("Wukuwi wa Yookhani 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mgq)", () => {
		expect(p.parse("Mataayi 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mgq)", () => {
		expect(p.parse("Maalika 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mgq)", () => {
		expect(p.parse("Luuka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mgq)", () => {
		expect(p.parse("1 Yookhani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yookhani 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mgq)", () => {
		expect(p.parse("2 Yookhani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yookhani 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mgq)", () => {
		expect(p.parse("3 Yookhani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yookhani 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mgq)", () => {
		expect(p.parse("Yookhani 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mgq)", () => {
		expect(p.parse("Mbombo zya Bhasundikwa 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mgq)", () => {
		expect(p.parse("Bhaluumi 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mgq)", () => {
		expect(p.parse("1 Bhakolinso 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bhakolinso 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mgq)", () => {
		expect(p.parse("2 Bhakolinso 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bhakolinso 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mgq)", () => {
		expect(p.parse("Bhakolosaayi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mgq)", () => {
		expect(p.parse("Bhagalatiya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mgq)", () => {
		expect(p.parse("Bhaefeeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mgq)", () => {
		expect(p.parse("Bhafiliipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mgq)", () => {
		expect(p.parse("1 Bhatesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Bhatesalonike 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mgq)", () => {
		expect(p.parse("2 Bhatesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Bhatesalonike 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mgq)", () => {
		expect(p.parse("1 Tiimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tiimoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mgq)", () => {
		expect(p.parse("2 Tiimoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tiimoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mgq)", () => {
		expect(p.parse("Tiito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mgq)", () => {
		expect(p.parse("Fiilimooni 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mgq)", () => {
		expect(p.parse("Bhaebulaniya 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mgq)", () => {
		expect(p.parse("Yaakobo 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mgq)", () => {
		expect(p.parse("1 Peeteli 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peeteli 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mgq)", () => {
		expect(p.parse("2 Peeteli 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peeteli 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mgq)", () => {
		expect(p.parse("Yʉʉda 1:1").osis()).toEqual("Jude.1.1");
	});
});

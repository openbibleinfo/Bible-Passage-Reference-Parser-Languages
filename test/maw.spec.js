"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/maw.js";

describe("Localized book Rev (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (maw)", () => {
		expect(p.parse("Kasigri 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (maw)", () => {
		expect(p.parse("Matiyu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (maw)", () => {
		expect(p.parse("Maaki 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (maw)", () => {
		expect(p.parse("Luuki 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (maw)", () => {
		expect(p.parse("I Gyɔni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Gyɔni 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (maw)", () => {
		expect(p.parse("II Gyɔni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Gyɔni 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (maw)", () => {
		expect(p.parse("III Gyɔni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Gyɔni 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (maw)", () => {
		expect(p.parse("Gyɔni 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (maw)", () => {
		expect(p.parse("Tuumudima Tuma 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (maw)", () => {
		expect(p.parse("Room Dima 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (maw)", () => {
		expect(p.parse("I Kɔrinti Dima 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kɔrinti Dima 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (maw)", () => {
		expect(p.parse("II Kɔrinti Dima 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kɔrinti Dima 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (maw)", () => {
		expect(p.parse("Kɔloosidima 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (maw)", () => {
		expect(p.parse("Galɛseaa Dima 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (maw)", () => {
		expect(p.parse("Ɛfɛsusi Dima 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (maw)", () => {
		expect(p.parse("Filipaai Dima 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (maw)", () => {
		expect(p.parse("I Tɛsalɔnika Dima 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tɛsalɔnika Dima 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (maw)", () => {
		expect(p.parse("II Tɛsalɔnika Dima 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tɛsalɔnika Dima 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (maw)", () => {
		expect(p.parse("I Timɔti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timɔti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (maw)", () => {
		expect(p.parse("II Timɔti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timɔti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (maw)", () => {
		expect(p.parse("Taituusi 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (maw)", () => {
		expect(p.parse("Failiimɔn 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (maw)", () => {
		expect(p.parse("Hibruu Dima 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (maw)", () => {
		expect(p.parse("Gyeemsi 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (maw)", () => {
		expect(p.parse("I Piita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Piita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (maw)", () => {
		expect(p.parse("II Piita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Piita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (maw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (maw)", () => {
		expect(p.parse("Gyuuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

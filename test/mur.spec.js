"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mur.js";

describe("Localized book Gen (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mur)", () => {
		expect(p.parse("Ɛɛnycan O Loocu 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mur)", () => {
		expect(p.parse("Wunozyak 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mur)", () => {
		expect(p.parse("Matiyu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mur)", () => {
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mur)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mur)", () => {
		expect(p.parse("1 Jɔn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jɔn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mur)", () => {
		expect(p.parse("2 Jɔn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jɔn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mur)", () => {
		expect(p.parse("3 Jɔn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jɔn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mur)", () => {
		expect(p.parse("Jɔn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mur)", () => {
		expect(p.parse("Toonnyak 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mur)", () => {
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mur)", () => {
		expect(p.parse("1 Korintiya 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintiya 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mur)", () => {
		expect(p.parse("2 Korintiya 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintiya 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mur)", () => {
		expect(p.parse("Kolosiya 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mur)", () => {
		expect(p.parse("Galatiya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mur)", () => {
		expect(p.parse("Evesos 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mur)", () => {
		expect(p.parse("Vilipiya 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mur)", () => {
		expect(p.parse("1 Tɛsalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mur)", () => {
		expect(p.parse("2 Tɛsalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mur)", () => {
		expect(p.parse("1 Timozi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timozi 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mur)", () => {
		expect(p.parse("2 Timozi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timozi 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mur)", () => {
		expect(p.parse("Titos 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mur)", () => {
		expect(p.parse("Vilimon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mur)", () => {
		expect(p.parse("Ibiro 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mur)", () => {
		expect(p.parse("Jemis 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mur)", () => {
		expect(p.parse("1 Pitɔr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pitɔr 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mur)", () => {
		expect(p.parse("2 Pitɔr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pitɔr 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mur)", () => {
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

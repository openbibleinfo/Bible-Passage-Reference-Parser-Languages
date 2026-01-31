"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bfo.js";

describe("Localized book Rev (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bfo)", () => {
		expect(p.parse("Miilfʋ Sɛbɛ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Miil 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bfo)", () => {
		expect(p.parse("Matie Sɛbɛ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bfo)", () => {
		expect(p.parse("Markɩ Sɛbɛ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bfo)", () => {
		expect(p.parse("Luki Sɛbɛ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bfo)", () => {
		expect(p.parse("1 Jã Sɛbɛ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jã 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jã Sɛbɛ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jã 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bfo)", () => {
		expect(p.parse("2 Jã Sɛbɛ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jã 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jã Sɛbɛ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jã 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bfo)", () => {
		expect(p.parse("3 Jã Sɛbɛ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jã 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jã Sɛbɛ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jã 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bfo)", () => {
		expect(p.parse("Jã Sɛbɛ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jã 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bfo)", () => {
		expect(p.parse("Nɩ-tʋnɩsɩ tʋmɔ Sɛbɛ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ntt 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bfo)", () => {
		expect(p.parse("Orom Sɛbɛ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Or 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bfo)", () => {
		expect(p.parse("1 Kɔrɛ̃tɩ Sɛbɛ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kɔr 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔrɛ̃tɩ Sɛbɛ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bfo)", () => {
		expect(p.parse("2 Kɔrɛ̃tɩ Sɛbɛ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kɔr 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔrɛ̃tɩ Sɛbɛ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bfo)", () => {
		expect(p.parse("Kɔlɔsɩ Sɛbɛ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kɔl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bfo)", () => {
		expect(p.parse("Galatɩ Sɛbɛ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bfo)", () => {
		expect(p.parse("Ɛfɛɛsɩ Sɛbɛ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛfɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bfo)", () => {
		expect(p.parse("Fɩlɩpɩ Sɛbɛ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fɩlɩ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bfo)", () => {
		expect(p.parse("1 Tɛsaloniki Sɛbɛ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tɛs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsaloniki Sɛbɛ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛs 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bfo)", () => {
		expect(p.parse("2 Tɛsaloniki Sɛbɛ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tɛs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsaloniki Sɛbɛ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛs 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bfo)", () => {
		expect(p.parse("1 Timote Sɛbɛ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote Sɛbɛ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bfo)", () => {
		expect(p.parse("2 Timote Sɛbɛ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote Sɛbɛ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bfo)", () => {
		expect(p.parse("Tɩtɩ Sɛbɛ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tɩ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bfo)", () => {
		expect(p.parse("Filemɔ̃ Sɛbɛ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bfo)", () => {
		expect(p.parse("Eburo Sɛbɛ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bfo)", () => {
		expect(p.parse("Jakɩ Sɛbɛ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bfo)", () => {
		expect(p.parse("1 Pɩɛr Sɛbɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pɩ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pɩɛr Sɛbɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pɩ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bfo)", () => {
		expect(p.parse("2 Pɩɛr Sɛbɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pɩ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pɩɛr Sɛbɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pɩ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bfo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bfo)", () => {
		expect(p.parse("Judi Sɛbɛ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ju 1:1").osis()).toEqual("Jude.1.1");
	});
});

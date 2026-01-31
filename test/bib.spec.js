"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bib.js";

describe("Localized book Rev (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bib)", () => {
		expect(p.parse("Hénkarå Ci. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bib)", () => {
		expect(p.parse("Matiyee 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bib)", () => {
		expect(p.parse("Markɩ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bib)", () => {
		expect(p.parse("Likki 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bib)", () => {
		expect(p.parse("1 Zaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zaan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bib)", () => {
		expect(p.parse("2 Zaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zaan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bib)", () => {
		expect(p.parse("3 Zaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zaan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bib)", () => {
		expect(p.parse("Zaan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bib)", () => {
		expect(p.parse("Zibəəzannɔ Ci 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bib)", () => {
		expect(p.parse("Rɔm zannɔ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bib)", () => {
		expect(p.parse("1 Korɛntɩ zannɔ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korɛntɩ zannɔ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bib)", () => {
		expect(p.parse("2 Korɛntɩ zannɔ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korɛntɩ zannɔ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bib)", () => {
		expect(p.parse("Kolɔɔsɩ zannɔ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bib)", () => {
		expect(p.parse("Galasii zannɔ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bib)", () => {
		expect(p.parse("Efɛɛzɩ zannɔ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bib)", () => {
		expect(p.parse("Filipii zannɔ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bib)", () => {
		expect(p.parse("1 Tesaloniki zannɔ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloniki zannɔ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bib)", () => {
		expect(p.parse("2 Tesaloniki zannɔ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloniki zannɔ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bib)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bib)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bib)", () => {
		expect(p.parse("Tiitɩ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bib)", () => {
		expect(p.parse("Filemɔn 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bib)", () => {
		expect(p.parse("Ebree gʊɔɔ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bib)", () => {
		expect(p.parse("Zakkɩ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bib)", () => {
		expect(p.parse("1 Pɩyɛɛr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pɩyɛɛr 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bib)", () => {
		expect(p.parse("2 Pɩyɛɛr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pɩyɛɛr 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bib)", () => {
		expect(p.parse("Ziidi 1:1").osis()).toEqual("Jude.1.1");
	});
});

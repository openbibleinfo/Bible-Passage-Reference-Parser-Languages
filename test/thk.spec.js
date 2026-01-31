"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/thk.js";

describe("Localized book Rev (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (thk)", () => {
		expect(p.parse("Kûgwûrîrwa 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (thk)", () => {
		expect(p.parse("Mathayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Math. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (thk)", () => {
		expect(p.parse("Maariko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mko. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (thk)", () => {
		expect(p.parse("Ruka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (thk)", () => {
		expect(p.parse("1 Njoana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Njoana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (thk)", () => {
		expect(p.parse("2 Njoana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Njoana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (thk)", () => {
		expect(p.parse("3 Njoana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Njoana 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (thk)", () => {
		expect(p.parse("Njoana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Njo. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (thk)", () => {
		expect(p.parse("Ngûgî 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ngû. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (thk)", () => {
		expect(p.parse("aRooma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (thk)", () => {
		expect(p.parse("1 Akorintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Akor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Akorintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Akor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (thk)", () => {
		expect(p.parse("2 Akorintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Akor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Akorintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Akor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (thk)", () => {
		expect(p.parse("Akorosai 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (thk)", () => {
		expect(p.parse("Agaratia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (thk)", () => {
		expect(p.parse("Aebeeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (thk)", () => {
		expect(p.parse("Apiripi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (thk)", () => {
		expect(p.parse("1 Athesaronike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Athesaronike 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (thk)", () => {
		expect(p.parse("2 Athesaronike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Athesaronike 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (thk)", () => {
		expect(p.parse("1 Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotheo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (thk)", () => {
		expect(p.parse("2 Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotheo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (thk)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (thk)", () => {
		expect(p.parse("Piremoni 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (thk)", () => {
		expect(p.parse("Aibirania 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (thk)", () => {
		expect(p.parse("Njakubu 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (thk)", () => {
		expect(p.parse("1 Petûrû 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petûrû 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (thk)", () => {
		expect(p.parse("2 Petûrû 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petûrû 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (thk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (thk)", () => {
		expect(p.parse("Njunda 1:1").osis()).toEqual("Jude.1.1");
	});
});

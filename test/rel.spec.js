"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/rel.js";

describe("Localized book Rev (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (rel)", () => {
		expect(p.parse("Bakkaahit 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Bak 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (rel)", () => {
		expect(p.parse("Mattaayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (rel)", () => {
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (rel)", () => {
		expect(p.parse("Luuka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rel)", () => {
		expect(p.parse("1 Yoohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yooh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yooh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rel)", () => {
		expect(p.parse("2 Yoohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yooh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yooh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (rel)", () => {
		expect(p.parse("3 Yoohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yooh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yooh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (rel)", () => {
		expect(p.parse("Yoohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yooh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (rel)", () => {
		expect(p.parse("Hilassi Ergaano 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ergaano 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (rel)", () => {
		expect(p.parse("Rooma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rel)", () => {
		expect(p.parse("1 Koriinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koriinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rel)", () => {
		expect(p.parse("2 Koriinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koriinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (rel)", () => {
		expect(p.parse("Kolossaay 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (rel)", () => {
		expect(p.parse("Galaatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (rel)", () => {
		expect(p.parse("Efeesso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (rel)", () => {
		expect(p.parse("Fiiliffi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fiili 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rel)", () => {
		expect(p.parse("1 'Dessaloonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 'Des 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. 'Dessaloonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. 'Des 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rel)", () => {
		expect(p.parse("2 'Dessaloonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 'Des 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. 'Dessaloonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. 'Des 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rel)", () => {
		expect(p.parse("1 Timooti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timooti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rel)", () => {
		expect(p.parse("2 Timooti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timooti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (rel)", () => {
		expect(p.parse("Tiito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (rel)", () => {
		expect(p.parse("Fiilemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fiilem 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (rel)", () => {
		expect(p.parse("Ibiraaniya 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("iBir 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (rel)", () => {
		expect(p.parse("Yaakoobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rel)", () => {
		expect(p.parse("1 Beetero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Beet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Beetero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Beet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rel)", () => {
		expect(p.parse("2 Beetero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Beet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Beetero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Beet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (rel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (rel)", () => {
		expect(p.parse("Yuuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

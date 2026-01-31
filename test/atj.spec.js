"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/atj.js";

describe("Localized book Rev (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (atj)", () => {
		expect(p.parse("Ka ki ici wapatahakaniwitc Jean 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (atj)", () => {
		expect(p.parse("Matio 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (atj)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (atj)", () => {
		expect(p.parse("Luc 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (atj)", () => {
		expect(p.parse("1 Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jean 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (atj)", () => {
		expect(p.parse("2 Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jean 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (atj)", () => {
		expect(p.parse("3 Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jean 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (atj)", () => {
		expect(p.parse("Jean 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (atj)", () => {
		expect(p.parse("Ka ki aitotiskeritci Cecoc otarotakana 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (atj)", () => {
		expect(p.parse("Rome iriniwok 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (atj)", () => {
		expect(p.parse("1 Corinthe iriniwok 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthe iriniwok 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (atj)", () => {
		expect(p.parse("2 Corinthe iriniwok 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthe iriniwok 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (atj)", () => {
		expect(p.parse("Colosse iriniwok 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (atj)", () => {
		expect(p.parse("Galatie iriniwok 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (atj)", () => {
		expect(p.parse("Éphèse iriniwok 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (atj)", () => {
		expect(p.parse("Pirip iriniwok 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (atj)", () => {
		expect(p.parse("1 Thessalonique irinowok 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonique irinowok 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (atj)", () => {
		expect(p.parse("2 Thessalonique iriniwok 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonique iriniwok 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (atj)", () => {
		expect(p.parse("1 Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothée 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (atj)", () => {
		expect(p.parse("2 Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothée 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (atj)", () => {
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (atj)", () => {
		expect(p.parse("Philémon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (atj)", () => {
		expect(p.parse("Hébreux iriniwok 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (atj)", () => {
		expect(p.parse("Cak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (atj)", () => {
		expect(p.parse("1 Pien 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pien 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (atj)", () => {
		expect(p.parse("2 Pien 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pien 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (atj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (atj)", () => {
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
	});
});

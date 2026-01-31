"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/beh.js";

describe("Localized book Gen (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (beh)", () => {
		expect(p.parse("Genèse. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genèse 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (beh)", () => {
		expect(p.parse("Apocalypse. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apocalypse 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (beh)", () => {
		expect(p.parse("Matthieu. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matthieu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (beh)", () => {
		expect(p.parse("Marc. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marc 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (beh)", () => {
		expect(p.parse("Luc. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (beh)", () => {
		expect(p.parse("1 Jean. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jean. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jean 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (beh)", () => {
		expect(p.parse("2 Jean. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jean. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jean 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (beh)", () => {
		expect(p.parse("3 Jean. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jean. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jean 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (beh)", () => {
		expect(p.parse("Jean. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jean 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (beh)", () => {
		expect(p.parse("Actes. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Actes 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (beh)", () => {
		expect(p.parse("Romains. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romains 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (beh)", () => {
		expect(p.parse("1 Corinthiens. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthiens. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (beh)", () => {
		expect(p.parse("2 Corinthiens. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthiens. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (beh)", () => {
		expect(p.parse("Colossiens. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Colossiens 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (beh)", () => {
		expect(p.parse("Galates. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galates 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (beh)", () => {
		expect(p.parse("Éphésiens. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Éphésiens 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (beh)", () => {
		expect(p.parse("Philippiens. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Philippiens 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (beh)", () => {
		expect(p.parse("1 Thessaloniciens. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessaloniciens. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (beh)", () => {
		expect(p.parse("2 Thessaloniciens. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessaloniciens. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (beh)", () => {
		expect(p.parse("1 Timothée. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothée. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothée 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (beh)", () => {
		expect(p.parse("2 Timothée. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothée. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothée 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (beh)", () => {
		expect(p.parse("Tite. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (beh)", () => {
		expect(p.parse("Philémon. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philémon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (beh)", () => {
		expect(p.parse("Hébreux. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hébreux 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (beh)", () => {
		expect(p.parse("Jacques. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jacques 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (beh)", () => {
		expect(p.parse("1 Pierre. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pierre. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pierre 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (beh)", () => {
		expect(p.parse("2 Pierre. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pierre. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pierre 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (beh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (beh)", () => {
		expect(p.parse("Jude. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
	});
});

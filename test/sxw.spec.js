"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sxw.js";

describe("Localized book Rev (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sxw)", () => {
		expect(p.parse("Apocalypse. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apocalypse 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sxw)", () => {
		expect(p.parse("Matthieu. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matthieu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sxw)", () => {
		expect(p.parse("Marc. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marc 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sxw)", () => {
		expect(p.parse("Luc. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sxw)", () => {
		expect(p.parse("1 Jean. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jean. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jean 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sxw)", () => {
		expect(p.parse("2 Jean. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jean. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jean 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sxw)", () => {
		expect(p.parse("3 Jean. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jean. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jean 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sxw)", () => {
		expect(p.parse("Jean. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jean 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sxw)", () => {
		expect(p.parse("Actes. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Actes 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sxw)", () => {
		expect(p.parse("Romains. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romains 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sxw)", () => {
		expect(p.parse("1 Corinthiens. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthiens. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sxw)", () => {
		expect(p.parse("2 Corinthiens. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthiens. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sxw)", () => {
		expect(p.parse("Colossiens. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Colossiens 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sxw)", () => {
		expect(p.parse("Galates. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galates 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sxw)", () => {
		expect(p.parse("Éphésiens. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Éphésiens 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sxw)", () => {
		expect(p.parse("Philippiens. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Philippiens 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sxw)", () => {
		expect(p.parse("1 Thessaloniciens. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessaloniciens. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sxw)", () => {
		expect(p.parse("2 Thessaloniciens. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessaloniciens. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sxw)", () => {
		expect(p.parse("1 Timothée. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothée. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothée 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sxw)", () => {
		expect(p.parse("2 Timothée. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothée. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothée 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sxw)", () => {
		expect(p.parse("Tite. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sxw)", () => {
		expect(p.parse("Philémon. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philémon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sxw)", () => {
		expect(p.parse("Hébreux. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hébreux 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sxw)", () => {
		expect(p.parse("Jacques. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jacques 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sxw)", () => {
		expect(p.parse("1 Pierre. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pierre. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pierre 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sxw)", () => {
		expect(p.parse("2 Pierre. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pierre. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pierre 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sxw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sxw)", () => {
		expect(p.parse("Jude. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
	});
});

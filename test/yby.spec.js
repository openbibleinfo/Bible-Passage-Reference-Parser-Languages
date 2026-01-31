"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/yby.js";

describe("Localized book Rev (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (yby)", () => {
		expect(p.parse("Levelaisiyoni 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (yby)", () => {
		expect(p.parse("Matiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (yby)", () => {
		expect(p.parse("Maki 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (yby)", () => {
		expect(p.parse("Luku 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (yby)", () => {
		expect(p.parse("1 Joni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (yby)", () => {
		expect(p.parse("2 Joni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (yby)", () => {
		expect(p.parse("3 Joni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jon 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Joni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jon 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (yby)", () => {
		expect(p.parse("Joni 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (yby)", () => {
		expect(p.parse("Aposolo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apo 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (yby)", () => {
		expect(p.parse("Lomu 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (yby)", () => {
		expect(p.parse("1 Kolinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kol 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kol 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (yby)", () => {
		expect(p.parse("2 Kolinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kol 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kol 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (yby)", () => {
		expect(p.parse("Kolosiyoni 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (yby)", () => {
		expect(p.parse("Galaisiyoni 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (yby)", () => {
		expect(p.parse("Ipisiyoni 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ipi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (yby)", () => {
		expect(p.parse("Pilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (yby)", () => {
		expect(p.parse("1 Tesolonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesolonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (yby)", () => {
		expect(p.parse("2 Tesolonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesolonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (yby)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (yby)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (yby)", () => {
		expect(p.parse("Taetasi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tae 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (yby)", () => {
		expect(p.parse("Pailimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pai 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (yby)", () => {
		expect(p.parse("Hibulu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (yby)", () => {
		expect(p.parse("Jemisi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jem 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (yby)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (yby)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (yby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (yby)", () => {
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

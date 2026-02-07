"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/jgo.js";

describe("Localized book Rev (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (jgo)", () => {
		expect(p.parse("Mɛnu ɛ́ ńdɑ́Ꞌ ńcẅɛt 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mdc 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (jgo)", () => {
		expect(p.parse("Mɑtʉ̈ɔ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mɑt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (jgo)", () => {
		expect(p.parse("Mɑ́lɛ́kúshi 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mɑ́l 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (jgo)", () => {
		expect(p.parse("Lúkɑ́shi 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (jgo)", () => {
		expect(p.parse("1Jŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (jgo)", () => {
		expect(p.parse("2Jŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (jgo)", () => {
		expect(p.parse("3 Jɑ̂ŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jŋ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (jgo)", () => {
		expect(p.parse("1 Jɑ̂ŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jɑ̂ŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (jgo)", () => {
		expect(p.parse("2 Jɑ̂ŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jɑ̂ŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (jgo)", () => {
		expect(p.parse("Jɑ̂ŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (jgo)", () => {
		expect(p.parse("ŊwɑꞋnɛ-Gɑŋntúu Yɛ́su Kɛlístɔ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gɑŋ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (jgo)", () => {
		expect(p.parse("Pʉɔ-Lɔ́mɑ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lɔ́m 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (jgo)", () => {
		expect(p.parse("1 Kɔlɛ̂ŋtɛ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔlɛ̂ŋtɛ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (jgo)", () => {
		expect(p.parse("2 Kɔlɛ̂ŋtɛ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔlɛ̂ŋtɛ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (jgo)", () => {
		expect(p.parse("1Kɔ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (jgo)", () => {
		expect(p.parse("2Kɔ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (jgo)", () => {
		expect(p.parse("Kɔlɔsíyɛ̂ŋ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kɔl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (jgo)", () => {
		expect(p.parse("Ŋɡɑlɑ̂t 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ŋɡɑ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (jgo)", () => {
		expect(p.parse("Ɛ́fɛ̂zɛ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛ́fɛ̂ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (jgo)", () => {
		expect(p.parse("Filipɛ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (jgo)", () => {
		expect(p.parse("1 Tɛsɑlɔník 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsɑlɔník 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (jgo)", () => {
		expect(p.parse("2 Tɛsɑlɔník 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsɑlɔník 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (jgo)", () => {
		expect(p.parse("1Ts 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (jgo)", () => {
		expect(p.parse("2Ts 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (jgo)", () => {
		expect(p.parse("1 Timɔtɛ́ɛ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timɔtɛ́ɛ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (jgo)", () => {
		expect(p.parse("2 Timɔtɛ́ɛ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timɔtɛ́ɛ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (jgo)", () => {
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (jgo)", () => {
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (jgo)", () => {
		expect(p.parse("Tîtɛ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tît 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (jgo)", () => {
		expect(p.parse("Filɛmɔ̂ŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (jgo)", () => {
		expect(p.parse("Ɛ́bɛlʉʉ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ɛ́bɛ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (jgo)", () => {
		expect(p.parse("Jɑ̂k 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (jgo)", () => {
		expect(p.parse("1 Pyɛ̂ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pyɛ̂ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (jgo)", () => {
		expect(p.parse("2 Pyɛ̂ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pyɛ̂ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (jgo)", () => {
		expect(p.parse("1Py 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (jgo)", () => {
		expect(p.parse("2Py 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (jgo)", () => {
		expect(p.parse("Jẅidɛ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jẅd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (jgo)", () => {
		expect(p.parse("1 Tɛsɑlɔník 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("2 Tɛsɑlɔník 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ŊwɑꞋnɛ-Gɑŋntúu Yɛ́su Kɛlístɔ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kɔlɔsíyɛ̂ŋ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Lúkɑ́shi 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Mɑ́lɛ́kúshi 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mɛnu ɛ́ ńdɑ́Ꞌ ńcẅɛt 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tîtɛ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tît 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Parser helper should handle book ranges (jgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (jgo)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jŋ - 3 Jɑ̂ŋ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jŋ – 3 Jɑ̂ŋ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jŋ — 3 Jɑ̂ŋ").osis()).toEqual("1John.1-3John.1");
	});
});

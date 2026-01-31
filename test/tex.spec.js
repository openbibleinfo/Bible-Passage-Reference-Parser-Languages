"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tex.js";

describe("Localized book Gen (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (tex)", () => {
		expect(p.parse("Kananet 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Kan 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (tex)", () => {
		expect(p.parse("Lu̱ge̱z 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Lu̱g 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tex)", () => {
		expect(p.parse("O̱no̱zzo̱k 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("O̱no̱ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tex)", () => {
		expect(p.parse("Ruz 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Jonah (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tex)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jna 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tex)", () => {
		expect(p.parse("Ma̱te̱yo̱ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ma̱t 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tex)", () => {
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tex)", () => {
		expect(p.parse("Lu̱ka̱ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lu̱k 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tex)", () => {
		expect(p.parse("1Jon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tex)", () => {
		expect(p.parse("2Jon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tex)", () => {
		expect(p.parse("3 Jon 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jon 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tex)", () => {
		expect(p.parse("1 Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tex)", () => {
		expect(p.parse("2 Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tex)", () => {
		expect(p.parse("Jon 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tex)", () => {
		expect(p.parse("Buk wa To̱ni̱a̱u̱ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("To̱n 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tex)", () => {
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tex)", () => {
		expect(p.parse("1 Ko̱ri̱nto̱ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ko̱ri̱nto̱ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tex)", () => {
		expect(p.parse("2 Ko̱ri̱nto̱ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ko̱ri̱nto̱ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tex)", () => {
		expect(p.parse("1Ko̱r 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tex)", () => {
		expect(p.parse("2Ko̱r 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tex)", () => {
		expect(p.parse("Kolosiya 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tex)", () => {
		expect(p.parse("Ga̱la̱ti̱a̱ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ga̱l 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tex)", () => {
		expect(p.parse("Evesos 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tex)", () => {
		expect(p.parse("Vilipia 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Vlp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tex)", () => {
		expect(p.parse("1 Te̱se̱lo̱ni̱ka̱ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te̱se̱lo̱ni̱ka̱ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tex)", () => {
		expect(p.parse("2 Te̱se̱lo̱ni̱ka̱ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te̱se̱lo̱ni̱ka̱ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tex)", () => {
		expect(p.parse("1Te̱s 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tex)", () => {
		expect(p.parse("2Te̱s 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tex)", () => {
		expect(p.parse("1 Ti̱mo̱te̱yo̱ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti̱mo̱te̱yo̱ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tex)", () => {
		expect(p.parse("2 Ti̱mo̱te̱yo̱ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti̱mo̱te̱yo̱ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tex)", () => {
		expect(p.parse("1Ti̱m 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tex)", () => {
		expect(p.parse("2Ti̱m 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tex)", () => {
		expect(p.parse("Ti̱to̱ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Ti̱t 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tex)", () => {
		expect(p.parse("Vilomene 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Vlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tex)", () => {
		expect(p.parse("I̱bu̱ru̱ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("I̱bu̱ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tex)", () => {
		expect(p.parse("Je̱mi̱s 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Je̱m 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tex)", () => {
		expect(p.parse("1 Peturu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peturu 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tex)", () => {
		expect(p.parse("2 Peturu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peturu 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tex)", () => {
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tex)", () => {
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tex)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tex)", () => {
		expect(p.parse("Ju̱da̱ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ju̱d 1:1").osis()).toEqual("Jude.1.1");
	});
});

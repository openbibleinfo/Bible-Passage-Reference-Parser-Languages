"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bng.js";

describe("Localized book Rev (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bng)", () => {
		expect(p.parse("Ilevudwě 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ilev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bng)", () => {
		expect(p.parse("Matyiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bng)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bng)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bng)", () => {
		expect(p.parse("III. Jâni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jân 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bng)", () => {
		expect(p.parse("1 Jâni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jân 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jâni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jân 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jâni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jân 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bng)", () => {
		expect(p.parse("2 Jâni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jân 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jâni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jân 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jâni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jân 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bng)", () => {
		expect(p.parse("Jân 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bng)", () => {
		expect(p.parse("Behadi 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bng)", () => {
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bng)", () => {
		expect(p.parse("1 Kâriniti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kâr 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kâriniti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kâr 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kâriniti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kâr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bng)", () => {
		expect(p.parse("2 Kâriniti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kâr 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kâriniti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kâr 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kâriniti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kâr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bng)", () => {
		expect(p.parse("Kalâsi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kal 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bng)", () => {
		expect(p.parse("Geletiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gelet 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bng)", () => {
		expect(p.parse("Efisu 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bng)", () => {
		expect(p.parse("Filipai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bng)", () => {
		expect(p.parse("1 Těsilonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Těs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Těsilonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Těs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Těsilonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Těs 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bng)", () => {
		expect(p.parse("2 Těsilonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Těs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Těsilonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Těs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Těsilonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Těs 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bng)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bng)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bng)", () => {
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bng)", () => {
		expect(p.parse("Filimâni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filim 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bng)", () => {
		expect(p.parse("Hibru 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bng)", () => {
		expect(p.parse("Jemisi 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bng)", () => {
		expect(p.parse("1 Pitě 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pitě 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pitě 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bng)", () => {
		expect(p.parse("2 Pitě 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pitě 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pitě 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bng)", () => {
		expect(p.parse("Judi 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (bng)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (bng)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jâni - III. Jâni").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jâni – III. Jâni").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jâni — III. Jâni").osis()).toEqual("1John.1-3John.1");
	});
});

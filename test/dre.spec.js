"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dre.js";

describe("Localized book Rev (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dre)", () => {
		expect(p.parse("མངོན་པ། 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dre)", () => {
		expect(p.parse("མད་ཐཱ། 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dre)", () => {
		expect(p.parse("མར་ཀུ། 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dre)", () => {
		expect(p.parse("ལུ་ཀཱ། 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dre)", () => {
		expect(p.parse("ཡོ་ཧ་ནན་དང་པོ། 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dre)", () => {
		expect(p.parse("ཡོ་ཧ་ནན་གཉིས་པ​། 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ཡོ་ཧ་ནན་གཉིས་པ། 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dre)", () => {
		expect(p.parse("ཡོ་ཧ་ནན་​གསུམ་པ། 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ཡོ་ཧ་ནན་གསུམ་པ། 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dre)", () => {
		expect(p.parse("ཡོ་ཧ་ནན། 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dre)", () => {
		expect(p.parse("མཛད་པ། 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dre)", () => {
		expect(p.parse("རོ་མཱ་པ། 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dre)", () => {
		expect(p.parse("ཀོ་རིན་ཐུ་པ་དང་པོ། 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dre)", () => {
		expect(p.parse("ཀོ་རིན་ཐུ་པ་གཉིས་པ། 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dre)", () => {
		expect(p.parse("ཀོ་ལོ་སཱ་པ། 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dre)", () => {
		expect(p.parse("ག་ལད་ཡཱ་པ། 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dre)", () => {
		expect(p.parse("ཨེ་ཕེ་སི་པ། 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dre)", () => {
		expect(p.parse("ཕི་ལིབ་པི་པ། 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dre)", () => {
		expect(p.parse("ཐེ་ས་ལོ་ནི་ཀེ་​དང་པོ། 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dre)", () => {
		expect(p.parse("ཐེ་ས་ལོ་ནི་ཀེ་​གཉིས་པ། 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dre)", () => {
		expect(p.parse("ཐི་མོ་ཐེ་དང་པོ། 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dre)", () => {
		expect(p.parse("ཐི་མོ་ཐེ་གཉིས་པ། 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dre)", () => {
		expect(p.parse("ཐེ་ཏོ། 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dre)", () => {
		expect(p.parse("ཕི་ལེ་མོན། 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dre)", () => {
		expect(p.parse("ཨིབ་རི་པ། 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dre)", () => {
		expect(p.parse("ཡ་ཀོབ། 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dre)", () => {
		expect(p.parse("པེ་ཏྲོ་དང་པོ། 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dre)", () => {
		expect(p.parse("པེ་ཏྲོ་གཉིས་པ། 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dre)", () => {
		expect(p.parse("ཡ་ཧུ་དཱ། 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (dre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (dre)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ཡོ་ཧ་ནན་དང་པོ། - ཡོ་ཧ་ནན་​གསུམ་པ།").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ཡོ་ཧ་ནན་དང་པོ། – ཡོ་ཧ་ནན་​གསུམ་པ།").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ཡོ་ཧ་ནན་དང་པོ། — ཡོ་ཧ་ནན་​གསུམ་པ།").osis()).toEqual("1John.1-3John.1");
	});
});

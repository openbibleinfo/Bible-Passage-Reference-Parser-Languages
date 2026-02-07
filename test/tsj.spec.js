"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tsj.js";

describe("Localized book Rev (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tsj)", () => {
		expect(p.parse("མཇལ་ཁ། 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tsj)", () => {
		expect(p.parse("མ་ཏི། 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tsj)", () => {
		expect(p.parse("མར་ཀུས། 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tsj)", () => {
		expect(p.parse("ལུ་ཀ། 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tsj)", () => {
		expect(p.parse("དང་པ་ཡུ་ཧན་ན། 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tsj)", () => {
		expect(p.parse("གཉིས་པ་ཡུ་ཧན་ན། 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tsj)", () => {
		expect(p.parse("གསུམ་པ་ ཡུ་ཧན་ན། 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tsj)", () => {
		expect(p.parse("ཡུ་ཧན་ན། 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tsj)", () => {
		expect(p.parse("མཛད༌པ། 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tsj)", () => {
		expect(p.parse("རོ་མི། 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tsj)", () => {
		expect(p.parse("དང་པ་ཀོ་རིན་ཐི། 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tsj)", () => {
		expect(p.parse("གཉིད་པ་ཀོ་རིན་ཐི། 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tsj)", () => {
		expect(p.parse("ཀ་ལཱས་སི། 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tsj)", () => {
		expect(p.parse("ག་ལ་ཏི། 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tsj)", () => {
		expect(p.parse("ཨེ་ཕི་སི། 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tsj)", () => {
		expect(p.parse("ཕི་ལིབ་པི། 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tsj)", () => {
		expect(p.parse("དང་པ་ཐེ་ས་ལོ་ནི་ཀི། 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tsj)", () => {
		expect(p.parse("གཉིས་པ་ཐེ་ས་ལོ་ནི་ཀི། 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tsj)", () => {
		expect(p.parse("དང་པ་ཏི་མོ་ཐི། 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tsj)", () => {
		expect(p.parse("གཉིས་པ་ཏི་མོ་ཐི། 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tsj)", () => {
		expect(p.parse("ཏི་ཏཱས། 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tsj)", () => {
		expect(p.parse("ཕི་ལེ་མོན། 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tsj)", () => {
		expect(p.parse("ཧི་བུརུ། 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tsj)", () => {
		expect(p.parse("ཡ་ཀུབ། 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tsj)", () => {
		expect(p.parse("དང་པ་པ་ཏྲུས། 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tsj)", () => {
		expect(p.parse("གཉིས་པ་པ་ཏྲུས། 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tsj)", () => {
		expect(p.parse("ཡ་ཧུ་ད། 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (tsj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (tsj)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("དང་པ་ཡུ་ཧན་ན། - གསུམ་པ་ ཡུ་ཧན་ན།").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("དང་པ་ཡུ་ཧན་ན། – གསུམ་པ་ ཡུ་ཧན་ན།").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("དང་པ་ཡུ་ཧན་ན། — གསུམ་པ་ ཡུ་ཧན་ན།").osis()).toEqual("1John.1-3John.1");
	});
});

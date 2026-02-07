"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dzo.js";

describe("Localized book Rev (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dzo)", () => {
		expect(p.parse("མཐོང་སྣང་ལེའུ་ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dzo)", () => {
		expect(p.parse("མེ་ཐིའུ་ལེའུ་ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dzo)", () => {
		expect(p.parse("མཱར་ཀུ་ལེའུ་ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dzo)", () => {
		expect(p.parse("ལུ་ཀ་ལེའུ་ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dzo)", () => {
		expect(p.parse("ཡོ་ཧ་ནཱན་དང་པ་ལེའུ་ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dzo)", () => {
		expect(p.parse("ཡོ་ཧ་ནཱན་གཉིས་པ་ལེའུ་ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dzo)", () => {
		expect(p.parse("ཡོ་ཧ་ནཱན་གསུམ་པ་ལེའུ་ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dzo)", () => {
		expect(p.parse("ཡོ་ཧ་ནཱན་ལེའུ་ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dzo)", () => {
		expect(p.parse("མཛད་པ་ལེའུ་ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dzo)", () => {
		expect(p.parse("རོམ་མི་ལེའུ་ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dzo)", () => {
		expect(p.parse("ཀོ་རཱིན་ཐི་དང་པ་ལེའུ་ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dzo)", () => {
		expect(p.parse("ཀོ་རཱིན་ཐི་གཉིས་པ་ལེའུ་ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dzo)", () => {
		expect(p.parse("ཀོ་ལོ་སི་ལེའུ་ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dzo)", () => {
		expect(p.parse("ག་ལ་ཏི་ལེའུ་ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dzo)", () => {
		expect(p.parse("ཨི་ཕི་སིཔ་ལེའུ་ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dzo)", () => {
		expect(p.parse("ཕི་ལི་པི་ལེའུ་ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dzo)", () => {
		expect(p.parse("ཐེ་ས་ལོ་ནི་ཀ་དང་པ་ལེའུ་ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dzo)", () => {
		expect(p.parse("ཐེ་ས་ལོ་ནི་ཀ་གཉིས་པ་ལེའུ་ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dzo)", () => {
		expect(p.parse("ཏི་མོ་ཐི་དང་པ་ལེའུ་ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dzo)", () => {
		expect(p.parse("ཏི་མོ་ཐི་གཉིས་པ་ལེའུ་ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dzo)", () => {
		expect(p.parse("ཏི་ཏུས་ལེའུ་ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dzo)", () => {
		expect(p.parse("ཕི་ལེ་མཱོན་ལེའུ་ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dzo)", () => {
		expect(p.parse("ཧིབ་རུ་ལེའུ་ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dzo)", () => {
		expect(p.parse("ཡ་ཀོབ་ལེའུ་ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dzo)", () => {
		expect(p.parse("པེ་ཏྲོ་དང་པ་ལེའུ་ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dzo)", () => {
		expect(p.parse("པེ་ཏྲོ་གཉིས་པ་ལེའུ་ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dzo)", () => {
		expect(p.parse("ཡུ་དཱས་ལེའུ་ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (dzo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (dzo)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ཡོ་ཧ་ནཱན་དང་པ་ལེའུ་ - ཡོ་ཧ་ནཱན་གསུམ་པ་ལེའུ་").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ཡོ་ཧ་ནཱན་དང་པ་ལེའུ་ – ཡོ་ཧ་ནཱན་གསུམ་པ་ལེའུ་").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ཡོ་ཧ་ནཱན་དང་པ་ལེའུ་ — ཡོ་ཧ་ནཱན་གསུམ་པ་ལེའུ་").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/pac.js";

describe("Localized book Rev (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (pac)", () => {
		expect(p.parse("Apáh Baih 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (pac)", () => {
		expect(p.parse("Mathie 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (pac)", () => {
		expect(p.parse("Mac 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (pac)", () => {
		expect(p.parse("Luca 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pac)", () => {
		expect(p.parse("Yon Mui 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pac)", () => {
		expect(p.parse("Yon Bar 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (pac)", () => {
		expect(p.parse("Yon Pe 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (pac)", () => {
		expect(p.parse("Yon 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (pac)", () => {
		expect(p.parse("Arnáq Táq 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (pac)", () => {
		expect(p.parse("Rô-ma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pac)", () => {
		expect(p.parse("Cô-rin-tô Mui 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pac)", () => {
		expect(p.parse("Cô-rin-tô Bar 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (pac)", () => {
		expect(p.parse("Cô-lusê 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (pac)", () => {
		expect(p.parse("Ca-lati 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (pac)", () => {
		expect(p.parse("Ê-phê-sô 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (pac)", () => {
		expect(p.parse("Phi-lip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pac)", () => {
		expect(p.parse("Tê-salô-naca Mui 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pac)", () => {
		expect(p.parse("Tê-salô-naca Bar 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pac)", () => {
		expect(p.parse("Ti-muthê Mui 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pac)", () => {
		expect(p.parse("Ti-muthê Bar 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (pac)", () => {
		expect(p.parse("Titô 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (pac)", () => {
		expect(p.parse("Phi-lamôn 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (pac)", () => {
		expect(p.parse("Hê-brơ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (pac)", () => {
		expect(p.parse("Yacơ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pac)", () => {
		expect(p.parse("Phi-er Mui 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pac)", () => {
		expect(p.parse("Phi-er Bar 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (pac)", () => {
		expect(p.parse("Yude 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (pac)", () => {
		expect(p.parse("Arnáq Táq 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Parser helper should handle book ranges (pac)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (pac)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yon Mui - Yon Pe").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yon Mui – Yon Pe").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yon Mui — Yon Pe").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/wsg.js";

describe("Localized book Rev (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (wsg)", () => {
		expect(p.parse("ఉజగిరి అరుస్వల్ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ఉజగిరి అ. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (wsg)", () => {
		expect(p.parse("మత్తయి 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (wsg)", () => {
		expect(p.parse("మార్క్ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (wsg)", () => {
		expect(p.parse("లూక 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (wsg)", () => {
		expect(p.parse("1వ యోహన్ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1వ. యోహన్ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (wsg)", () => {
		expect(p.parse("2వ యోహన్ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2వ. యోహన్ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (wsg)", () => {
		expect(p.parse("3వ యోహన్ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3వ. యోహన్ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (wsg)", () => {
		expect(p.parse("యోహన్ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (wsg)", () => {
		expect(p.parse("అపొ. కా. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (wsg)", () => {
		expect(p.parse("రోమ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (wsg)", () => {
		expect(p.parse("1వ కొరంతి 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1వ. కొరంతి 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (wsg)", () => {
		expect(p.parse("2వ కొరంతి 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2వ. కొరంతి 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (wsg)", () => {
		expect(p.parse("కొలసి 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (wsg)", () => {
		expect(p.parse("గలతి 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (wsg)", () => {
		expect(p.parse("ఎపెసి 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (wsg)", () => {
		expect(p.parse("పిలిపి 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (wsg)", () => {
		expect(p.parse("1వ తెసలొనిక 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1వ. తెసలొనిక 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (wsg)", () => {
		expect(p.parse("2వ తెసలొనిక 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2వ. తెసలొనిక 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (wsg)", () => {
		expect(p.parse("1వ తిమొతి 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1వ. తిమొతి 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (wsg)", () => {
		expect(p.parse("2వ తిమొతి 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2వ. తిమొతి 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (wsg)", () => {
		expect(p.parse("తీతు 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (wsg)", () => {
		expect(p.parse("పిలెమోన్ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (wsg)", () => {
		expect(p.parse("హెబ్రి 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (wsg)", () => {
		expect(p.parse("యాకొబ్ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (wsg)", () => {
		expect(p.parse("1వ పేతురు 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1వ. పేతురు 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (wsg)", () => {
		expect(p.parse("2వ పేతురు 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2వ. పేతురు 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (wsg)", () => {
		expect(p.parse("యూద 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (wsg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (wsg)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1వ యోహన్ - 3వ యోహన్").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1వ యోహన్ – 3వ యోహన్").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1వ యోహన్ — 3వ యోహన్").osis()).toEqual("1John.1-3John.1");
	});
});

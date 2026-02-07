"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ngp.js";

describe("Localized book Rev (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ngp)", () => {
		expect(p.parse("Ugubulo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ugub 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ngp)", () => {
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mata 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ngp)", () => {
		expect(p.parse("Maliko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ngp)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ngp)", () => {
		expect(p.parse("1Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yoha 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ngp)", () => {
		expect(p.parse("2Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yoha 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ngp)", () => {
		expect(p.parse("3Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoha 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ngp)", () => {
		expect(p.parse("Yohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoha 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ngp)", () => {
		expect(p.parse("Imitendele 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Imit 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ngp)", () => {
		expect(p.parse("Walumi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Walo 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ngp)", () => {
		expect(p.parse("1Wakolinso 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Wako 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ngp)", () => {
		expect(p.parse("2 Wakolinso 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Wako 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Wakolinso 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Wako 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ngp)", () => {
		expect(p.parse("Wakolosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Wakol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ngp)", () => {
		expect(p.parse("Wagalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Wagal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ngp)", () => {
		expect(p.parse("Waefeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Waef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ngp)", () => {
		expect(p.parse("waFilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Waf 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ngp)", () => {
		expect(p.parse("1Wasesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Wase 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ngp)", () => {
		expect(p.parse("2Wasesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Wase 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ngp)", () => {
		expect(p.parse("1Timoseo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Timo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ngp)", () => {
		expect(p.parse("2Timoseo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Timo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ngp)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ngp)", () => {
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ngp)", () => {
		expect(p.parse("Waibulania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Waib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ngp)", () => {
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yako 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ngp)", () => {
		expect(p.parse("1 Petulo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petu 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ngp)", () => {
		expect(p.parse("2 Petulo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petulo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petu 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ngp)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (ngp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (ngp)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yohana - 3Yohana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yohana – 3Yohana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yohana — 3Yohana").osis()).toEqual("1John.1-3John.1");
	});
});

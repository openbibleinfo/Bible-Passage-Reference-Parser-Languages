"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sce.js";

describe("Localized book Rev (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sce)", () => {
		expect(p.parse("Mejieghasan 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mej 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sce)", () => {
		expect(p.parse("Matai 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sce)", () => {
		expect(p.parse("Make 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sce)", () => {
		expect(p.parse("Lujia 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luj 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sce)", () => {
		expect(p.parse("1Yaheiya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yah 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sce)", () => {
		expect(p.parse("2Yaheiya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yah 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sce)", () => {
		expect(p.parse("3Yaheiya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yah 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sce)", () => {
		expect(p.parse("Yaheiya 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yah 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sce)", () => {
		expect(p.parse("Tujila 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tuj 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sce)", () => {
		expect(p.parse("Loma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sce)", () => {
		expect(p.parse("1Gelindo 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Gel 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sce)", () => {
		expect(p.parse("2Gelindo 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Gel 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sce)", () => {
		expect(p.parse("Geloxi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Glx 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sce)", () => {
		expect(p.parse("Jialatai 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Jia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sce)", () => {
		expect(p.parse("Ifuso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ifs 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sce)", () => {
		expect(p.parse("Feilibi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flb 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sce)", () => {
		expect(p.parse("1Qiesalonijia 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Qie 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sce)", () => {
		expect(p.parse("2Qiesalonijia 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Qie 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sce)", () => {
		expect(p.parse("1Qimotai 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Qim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sce)", () => {
		expect(p.parse("2Qimotai 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Qim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sce)", () => {
		expect(p.parse("Qido 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Qid 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sce)", () => {
		expect(p.parse("Feilimen 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sce)", () => {
		expect(p.parse("Xibolai 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Xib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sce)", () => {
		expect(p.parse("Yagebu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yag 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sce)", () => {
		expect(p.parse("1Beduru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Bed 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sce)", () => {
		expect(p.parse("2Beduru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Bed 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sce)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (sce)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (sce)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yaheiya - 3Yaheiya").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yaheiya – 3Yaheiya").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yaheiya — 3Yaheiya").osis()).toEqual("1John.1-3John.1");
	});
});

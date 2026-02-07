"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sop.js";

describe("Localized book Rev (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sop)", () => {
		expect(p.parse("Kibafumulwe 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sop)", () => {
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sop)", () => {
		expect(p.parse("Mako 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sop)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sop)", () => {
		expect(p.parse("I Yoano 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yoano 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sop)", () => {
		expect(p.parse("Ii Yoano 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ii. Yoano 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sop)", () => {
		expect(p.parse("Iii Yoano 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Iii. Yoano 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sop)", () => {
		expect(p.parse("Yoano 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sop)", () => {
		expect(p.parse("Bikitshino 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sop)", () => {
		expect(p.parse("Bena Loma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sop)", () => {
		expect(p.parse("I Bena Kodinda 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Bena Kodinda 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sop)", () => {
		expect(p.parse("Ii Bena Kodinda 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ii. Bena Kodinda 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sop)", () => {
		expect(p.parse("Bena Kolose 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sop)", () => {
		expect(p.parse("Bena Ngalatea 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sop)", () => {
		expect(p.parse("Bena Efisesa 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sop)", () => {
		expect(p.parse("Bena Fidihai 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sop)", () => {
		expect(p.parse("I Bena Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Bena Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sop)", () => {
		expect(p.parse("Ii Bena Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ii. Bena Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sop)", () => {
		expect(p.parse("I Temote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Temote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sop)", () => {
		expect(p.parse("Ii Temote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ii. Temote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sop)", () => {
		expect(p.parse("Tetusa 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sop)", () => {
		expect(p.parse("Filemone 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sop)", () => {
		expect(p.parse("Bena Bahebelu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sop)", () => {
		expect(p.parse("Yakoba 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sop)", () => {
		expect(p.parse("I Petelo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petelo 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sop)", () => {
		expect(p.parse("Ii Petelo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ii. Petelo 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sop)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (sop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (sop)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Yoano - Iii Yoano").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Yoano – Iii Yoano").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Yoano — Iii Yoano").osis()).toEqual("1John.1-3John.1");
	});
});

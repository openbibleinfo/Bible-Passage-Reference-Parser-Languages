"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/rap.js";

describe("Localized book Rev (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (rap)", () => {
		expect(p.parse("Meꞌe Haka Takeꞌa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mht 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (rap)", () => {
		expect(p.parse("Māteo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Māt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (rap)", () => {
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (rap)", () => {
		expect(p.parse("Ruka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ruk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rap)", () => {
		expect(p.parse("1Io 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rap)", () => {
		expect(p.parse("2Io 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (rap)", () => {
		expect(p.parse("3 Iovani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Io 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rap)", () => {
		expect(p.parse("1 Iovani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Iovani 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rap)", () => {
		expect(p.parse("2 Iovani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Iovani 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (rap)", () => {
		expect(p.parse("Iovani 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Iov 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (rap)", () => {
		expect(p.parse("Aŋa o te ꞌĀpōtoro 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Aŋa 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (rap)", () => {
		expect(p.parse("Rōmano 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rōm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rap)", () => {
		expect(p.parse("1 Kōrinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kōrinto 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rap)", () => {
		expect(p.parse("2 Kōrinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kōrinto 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rap)", () => {
		expect(p.parse("1Kō 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rap)", () => {
		expect(p.parse("2Kō 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (rap)", () => {
		expect(p.parse("Kōrosa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kōr 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (rap)", () => {
		expect(p.parse("Karatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kar 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (rap)", () => {
		expect(p.parse("Ēfeto 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ēfe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (rap)", () => {
		expect(p.parse("Fīripo 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Frp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rap)", () => {
		expect(p.parse("1 Tētārōnika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tētārōnika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rap)", () => {
		expect(p.parse("2 Tētārōnika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tētārōnika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rap)", () => {
		expect(p.parse("1Tē 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rap)", () => {
		expect(p.parse("2Tē 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rap)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rap)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rap)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rap)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (rap)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (rap)", () => {
		expect(p.parse("Firemono 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Frm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (rap)", () => {
		expect(p.parse("ꞌEvereo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ꞌEv 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (rap)", () => {
		expect(p.parse("Tanatiako 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Tan 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rap)", () => {
		expect(p.parse("1 Pētero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pētero 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rap)", () => {
		expect(p.parse("2 Pētero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pētero 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rap)", () => {
		expect(p.parse("1Pē 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rap)", () => {
		expect(p.parse("2Pē 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (rap)", () => {
		expect(p.parse("Hura 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Hur 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (rap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (rap)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Io - 3 Iovani").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Io – 3 Iovani").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Io — 3 Iovani").osis()).toEqual("1John.1-3John.1");
	});
});

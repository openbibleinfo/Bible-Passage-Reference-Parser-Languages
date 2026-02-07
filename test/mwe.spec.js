"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mwe.js";

describe("Localized book Rev (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mwe)", () => {
		expect(p.parse("Maunukulo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ngb 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mwe)", () => {
		expect(p.parse("Matei 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mwe)", () => {
		expect(p.parse("Maliko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mlk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mwe)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mwe)", () => {
		expect(p.parse("1 Yowana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ywn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yowana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ywn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mwe)", () => {
		expect(p.parse("2 Yowana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ywn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yowana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ywn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mwe)", () => {
		expect(p.parse("3 Yowana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ywn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yowana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ywn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mwe)", () => {
		expect(p.parse("Yowana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ywn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mwe)", () => {
		expect(p.parse("Itendi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Itd 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mwe)", () => {
		expect(p.parse("Bhalumi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Blm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mwe)", () => {
		expect(p.parse("1 Bhakolinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Bkt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bhakolinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bkt 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mwe)", () => {
		expect(p.parse("2 Bhakolinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Bkt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bhakolinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bkt 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mwe)", () => {
		expect(p.parse("Bhakoloshai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Bks 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mwe)", () => {
		expect(p.parse("Bhagalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Bgt 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mwe)", () => {
		expect(p.parse("Bhaepheso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Bep 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mwe)", () => {
		expect(p.parse("Bhapilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Bpp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mwe)", () => {
		expect(p.parse("1 Bhateshalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Btl 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Bhateshalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Btl 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mwe)", () => {
		expect(p.parse("2 Bhateshalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Btl 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Bhateshalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Btl 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mwe)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tms 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tms 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mwe)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tms 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tms 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mwe)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tts 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mwe)", () => {
		expect(p.parse("Pilimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Plm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mwe)", () => {
		expect(p.parse("Bhaebhulania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Beb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mwe)", () => {
		expect(p.parse("Yakobho 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ykb 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mwe)", () => {
		expect(p.parse("1 Petili 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Ptl 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petili 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ptl 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mwe)", () => {
		expect(p.parse("2 Petili 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Ptl 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petili 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Ptl 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mwe)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (mwe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (mwe)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yowana - 3 Yowana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yowana – 3 Yowana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yowana — 3 Yowana").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bfm.js";

describe("Localized book Rev (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bfm)", () => {
		expect(p.parse("Etyə̂yn ə paynsêzè 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ety 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bfm)", () => {
		expect(p.parse("Matyò 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bfm)", () => {
		expect(p.parse("Mâk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bfm)", () => {
		expect(p.parse("Lûk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bfm)", () => {
		expect(p.parse("1Njɔ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bfm)", () => {
		expect(p.parse("2Njɔ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bfm)", () => {
		expect(p.parse("3 Njɔyn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Njɔ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bfm)", () => {
		expect(p.parse("1 Njɔyn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Njɔyn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bfm)", () => {
		expect(p.parse("2 Njɔyn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Njɔyn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bfm)", () => {
		expect(p.parse("Njɔyn 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Njɔ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bfm)", () => {
		expect(p.parse("Ətefɨ̂aʼ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Efɨ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bfm)", () => {
		expect(p.parse("Lûm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bfm)", () => {
		expect(p.parse("1 Kɔlìŋ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔlìŋ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bfm)", () => {
		expect(p.parse("1Kɔ̀l 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bfm)", () => {
		expect(p.parse("2 Kolìŋ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolìŋ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bfm)", () => {
		expect(p.parse("2Kɔl 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bfm)", () => {
		expect(p.parse("Kòlosè 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kòl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bfm)", () => {
		expect(p.parse("Ngàleshyà 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ngà 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bfm)", () => {
		expect(p.parse("Ɛfesùs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛfe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bfm)", () => {
		expect(p.parse("Filìpây 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bfm)", () => {
		expect(p.parse("1 Tèsàlonikà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tèsàlonikà 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bfm)", () => {
		expect(p.parse("2 Tèsàlonikà 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tèsàlonikà 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bfm)", () => {
		expect(p.parse("1Tès 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bfm)", () => {
		expect(p.parse("2Tès 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bfm)", () => {
		expect(p.parse("1 Timotì 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotì 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bfm)", () => {
		expect(p.parse("2 Timotì 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotì 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bfm)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bfm)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bfm)", () => {
		expect(p.parse("Taytùs 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tay 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bfm)", () => {
		expect(p.parse("Filemùyn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bfm)", () => {
		expect(p.parse("Ipilù 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ipi 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bfm)", () => {
		expect(p.parse("Njə̂m 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Njə̂ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bfm)", () => {
		expect(p.parse("1 Pità 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pità 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bfm)", () => {
		expect(p.parse("2 Pità 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pità 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bfm)", () => {
		expect(p.parse("1Pit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bfm)", () => {
		expect(p.parse("2Pit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bfm)", () => {
		expect(p.parse("Njût 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Njû 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (bfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (bfm)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Njɔ - 3 Njɔyn").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Njɔ – 3 Njɔyn").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Njɔ — 3 Njɔyn").osis()).toEqual("1John.1-3John.1");
	});
});

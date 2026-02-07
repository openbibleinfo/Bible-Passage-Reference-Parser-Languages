"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/oym.js";

describe("Localized book Rev (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (oym)", () => {
		expect(p.parse("Jesu jimoikatuawerà 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("J.Jim. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (oym)", () => {
		expect(p.parse("Mateusi 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (oym)", () => {
		expect(p.parse("Mak. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maku 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (oym)", () => {
		expect(p.parse("Rukasi 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ruk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (oym)", () => {
		expect(p.parse("1Juw. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (oym)", () => {
		expect(p.parse("2Juw. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (oym)", () => {
		expect(p.parse("3 Juwão 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Juw. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (oym)", () => {
		expect(p.parse("1 Juwão 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Juwão 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (oym)", () => {
		expect(p.parse("2 Juwão 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Juwão 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (oym)", () => {
		expect(p.parse("Juwão 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Juw. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (oym)", () => {
		expect(p.parse("Jesu koty rewarà kõ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("J.K.R. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (oym)", () => {
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romã 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (oym)", () => {
		expect(p.parse("1 Korĩtu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korĩtu 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (oym)", () => {
		expect(p.parse("2 Korĩtu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korĩtu 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (oym)", () => {
		expect(p.parse("1Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (oym)", () => {
		expect(p.parse("2Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (oym)", () => {
		expect(p.parse("Korosu 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Krs. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (oym)", () => {
		expect(p.parse("Karasia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kar. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (oym)", () => {
		expect(p.parse("Epesu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eps. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (oym)", () => {
		expect(p.parse("Piripu 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Prp. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (oym)", () => {
		expect(p.parse("1 Tesaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaronika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (oym)", () => {
		expect(p.parse("2 Tesaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaronika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (oym)", () => {
		expect(p.parse("1Tes. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (oym)", () => {
		expect(p.parse("2Tes. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (oym)", () => {
		expect(p.parse("1 Timoteu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteu 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (oym)", () => {
		expect(p.parse("2 Timoteu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteu 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (oym)", () => {
		expect(p.parse("1Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (oym)", () => {
		expect(p.parse("2Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (oym)", () => {
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (oym)", () => {
		expect(p.parse("Piremõ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Prm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (oym)", () => {
		expect(p.parse("Epereu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Epr. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (oym)", () => {
		expect(p.parse("Tiaku 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Tku. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (oym)", () => {
		expect(p.parse("1 Peturu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peturu 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (oym)", () => {
		expect(p.parse("2 Peturu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peturu 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (oym)", () => {
		expect(p.parse("1Pe. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (oym)", () => {
		expect(p.parse("2Pe. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (oym)", () => {
		expect(p.parse("Jut. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juta 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (oym)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (oym)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Juw. - 3 Juwão").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Juw. – 3 Juwão").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Juw. — 3 Juwão").osis()).toEqual("1John.1-3John.1");
	});
});

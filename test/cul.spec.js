"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/cul.js";

describe("Localized book Rev (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (cul)", () => {
		expect(p.parse("Apocalipsis 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apocaripisi 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (cul)", () => {
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (cul)", () => {
		expect(p.parse("Maraco 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mc 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (cul)", () => {
		expect(p.parse("Roca 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Rc 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (cul)", () => {
		expect(p.parse("1Hn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (cul)", () => {
		expect(p.parse("2Hn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (cul)", () => {
		expect(p.parse("3 Huanocca 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Zouao 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Hn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (cul)", () => {
		expect(p.parse("1 Huanocca 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Zouao 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Huanocca 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zouao 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (cul)", () => {
		expect(p.parse("2 Huanocca 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Zouao 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Huanocca 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zouao 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (cul)", () => {
		expect(p.parse("Huano 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Zouao 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Hn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (cul)", () => {
		expect(p.parse("Tahimarideni 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Atos 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tah 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (cul)", () => {
		expect(p.parse("Romanodenidsa 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rromanodeniza 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (cul)", () => {
		expect(p.parse("1 Corintodenidsa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corintodeniza 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corintodenidsa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corintodeniza 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (cul)", () => {
		expect(p.parse("2 Corintodenidsa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corintodeniza 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corintodenidsa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corintodeniza 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (cul)", () => {
		expect(p.parse("1Co 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (cul)", () => {
		expect(p.parse("2Co 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (cul)", () => {
		expect(p.parse("Corosadenidsa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Corosadeniza 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Cor 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (cul)", () => {
		expect(p.parse("Carasiadenidsa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Carasiadeniza 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Car 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (cul)", () => {
		expect(p.parse("Epesodenidsa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epesodeniza 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ep 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (cul)", () => {
		expect(p.parse("Piripodenidsa 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Piripodeniza 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Prp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (cul)", () => {
		expect(p.parse("1 Tesaronicadenidsa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesaronicadeniza 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaronicadenidsa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaronicadeniza 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (cul)", () => {
		expect(p.parse("2 Tesaronicadenidsa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesaronicadeniza 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaronicadenidsa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaronicadeniza 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (cul)", () => {
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (cul)", () => {
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (cul)", () => {
		expect(p.parse("1 Timoteodsa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteodsa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (cul)", () => {
		expect(p.parse("2 Timoteodsa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteodsa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (cul)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (cul)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (cul)", () => {
		expect(p.parse("Titodsa 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (cul)", () => {
		expect(p.parse("Piremaodsa 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Piremao 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Prm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (cul)", () => {
		expect(p.parse("Ebreodenidsa 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebreo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (cul)", () => {
		expect(p.parse("Satiacocca 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Tiaco 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Sat 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (cul)", () => {
		expect(p.parse("1 Pedrocca 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pedoro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pedrocca 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pedoro 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (cul)", () => {
		expect(p.parse("2 Pedrocca 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pedoro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pedrocca 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pedoro 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (cul)", () => {
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (cul)", () => {
		expect(p.parse("2Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (cul)", () => {
		expect(p.parse("Jodacca 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Zoda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jod 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (cul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (cul)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Hn - 3 Huanocca").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Hn – 3 Huanocca").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Hn — 3 Huanocca").osis()).toEqual("1John.1-3John.1");
	});
});

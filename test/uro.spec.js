"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/uro.js";

describe("Localized book Rev (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (uro)", () => {
		expect(p.parse("Ama Ñämñäm Sage Ma Jon 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ñäm 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (uro)", () => {
		expect(p.parse("Ma Matyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (uro)", () => {
		expect(p.parse("Ma Mak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (uro)", () => {
		expect(p.parse("Ma Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (uro)", () => {
		expect(p.parse("Ma Jon 3 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jo 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (uro)", () => {
		expect(p.parse("1 Jon 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jo 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jon 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jo 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ma Jon 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ma Jo 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ma. Jon 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ma. Jo 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (uro)", () => {
		expect(p.parse("2 Jon 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jo 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jon 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jo 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ma Jon 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ma Jo 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ma. Jon 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ma. Jo 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (uro)", () => {
		expect(p.parse("Ma Jon 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (uro)", () => {
		expect(p.parse("Ama Ngangda Arha Lat 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Lat 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (uro)", () => {
		expect(p.parse("Ma Romgäna 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (uro)", () => {
		expect(p.parse("1 Koringäna 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ko 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koringäna 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ko 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ma Koringäna 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ma Ko 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ma. Koringäna 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ma. Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (uro)", () => {
		expect(p.parse("2 Koringäna 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ko 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koringäna 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ko 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ma Koringäna 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ma Ko 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ma. Koringäna 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ma. Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (uro)", () => {
		expect(p.parse("Ma Kolosiqäna 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (uro)", () => {
		expect(p.parse("Ma Galesiaqäna 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (uro)", () => {
		expect(p.parse("Ma Efesuskäna 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (uro)", () => {
		expect(p.parse("Ma Filipaiqäna 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (uro)", () => {
		expect(p.parse("1 Tesalonaikaqäna 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonaikaqäna 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ma Tesalonaikaqäna 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ma Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ma. Tesalonaikaqäna 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ma. Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (uro)", () => {
		expect(p.parse("2 Tesalonaikaqäna 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonaikaqäna 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ma Tesalonaikaqäna 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ma Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ma. Tesalonaikaqäna 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ma. Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (uro)", () => {
		expect(p.parse("1 Timoti 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ma Timoti 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ma Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ma. Timoti 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ma. Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (uro)", () => {
		expect(p.parse("2 Timoti 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ma Timoti 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ma Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ma. Timoti 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ma. Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (uro)", () => {
		expect(p.parse("Ma Taitus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (uro)", () => {
		expect(p.parse("Ma Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (uro)", () => {
		expect(p.parse("Ma Hibruqäna 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (uro)", () => {
		expect(p.parse("Ma Jems 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jem 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (uro)", () => {
		expect(p.parse("1 Pita 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ma Pita 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ma Pi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ma. Pita 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ma. Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (uro)", () => {
		expect(p.parse("2 Pita 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ma Pita 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ma Pi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ma. Pita 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ma. Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (uro)", () => {
		expect(p.parse("Ma Jut 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jut 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (uro)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (uro)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jon 1 - Ma Jon 3").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jon 1 – Ma Jon 3").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jon 1 — Ma Jon 3").osis()).toEqual("1John.1-3John.1");
	});
});

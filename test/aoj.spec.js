"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/aoj.js";

describe("Localized book Rev (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (aoj)", () => {
		expect(p.parse("Kamapim Tok Hait 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Revelesen 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Re 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (aoj)", () => {
		expect(p.parse("Matyu Nandaꞌafi 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (aoj)", () => {
		expect(p.parse("Mak Nandaꞌafi 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (aoj)", () => {
		expect(p.parse("Luk Nandaꞌafi 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book John (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (aoj)", () => {
		expect(p.parse("Jon Nandaꞌafi 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jo 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (aoj)", () => {
		expect(p.parse("1 Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jo 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jo 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Faliꞌ Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Faliꞌ Jo 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Faliꞌ. Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Faliꞌ. Jo 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (aoj)", () => {
		expect(p.parse("2 Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jo 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jo 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Fagiꞌ Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Fagiꞌ Jo 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Fagiꞌ. Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Fagiꞌ. Jo 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (aoj)", () => {
		expect(p.parse("3 Jon 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jo 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jon 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jo 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book Acts (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (aoj)", () => {
		expect(p.parse("Maol Amom Aposeli 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Aposel 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ap 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (aoj)", () => {
		expect(p.parse("Fagafeꞌma Esis Romi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (aoj)", () => {
		expect(p.parse("1 Fagafeꞌma Esis Korini 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ko 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Fagafeꞌma Esis Korini 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ko 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Faliꞌ Fagafeꞌma Esis Korini 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Faliꞌ Korin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Faliꞌ Ko 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Faliꞌ. Fagafeꞌma Esis Korini 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Faliꞌ. Korin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Faliꞌ. Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (aoj)", () => {
		expect(p.parse("2 Fagafeꞌma Esis Korini 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ko 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Fagafeꞌma Esis Korini 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ko 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Fagiꞌ Fagafeꞌma Esis Korini 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Fagiꞌ Korin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Fagiꞌ Ko 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Fagiꞌ. Fagafeꞌma Esis Korini 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Fagiꞌ. Korin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Fagiꞌ. Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (aoj)", () => {
		expect(p.parse("Fagafeꞌma Esis Kolosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (aoj)", () => {
		expect(p.parse("Fagafeꞌma Esis Galesiai 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galesia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (aoj)", () => {
		expect(p.parse("Fagafeꞌma Esis Efesusi 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (aoj)", () => {
		expect(p.parse("Fagafeꞌma Esis Filipaii 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fl 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (aoj)", () => {
		expect(p.parse("1 Fagafeꞌma Tesalonaikai 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Fagafeꞌma Tesalonaikai 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Faliꞌ Fagafeꞌma Tesalonaikai 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Faliꞌ Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Faliꞌ Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Faliꞌ. Fagafeꞌma Tesalonaikai 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Faliꞌ. Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Faliꞌ. Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (aoj)", () => {
		expect(p.parse("2 Fagafeꞌma Tesalonaikai 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Fagafeꞌma Tesalonaikai 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Fagiꞌ Fagafeꞌma Tesalonaikai 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Fagiꞌ Tesalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Fagiꞌ Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Fagiꞌ. Fagafeꞌma Tesalonaikai 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Fagiꞌ. Tesalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Fagiꞌ. Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (aoj)", () => {
		expect(p.parse("1 Fagafeꞌma Timotii 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Fagafeꞌma Timotii 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Faliꞌ Fagafeꞌma Timotii 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Faliꞌ Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Faliꞌ Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Faliꞌ. Fagafeꞌma Timotii 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Faliꞌ. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Faliꞌ. Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (aoj)", () => {
		expect(p.parse("2 Fagafeꞌma Timotii 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Fagafeꞌma Timotii 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Fagiꞌ Fagafeꞌma Timotii 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Fagiꞌ Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Fagiꞌ Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Fagiꞌ. Fagafeꞌma Timotii 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Fagiꞌ. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Fagiꞌ. Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (aoj)", () => {
		expect(p.parse("Fagafeꞌma Taitusi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Taitus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Ta 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (aoj)", () => {
		expect(p.parse("Fagafeꞌma Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (aoj)", () => {
		expect(p.parse("Hibrui 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hibru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hi 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (aoj)", () => {
		expect(p.parse("Jems 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Je 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (aoj)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Faliꞌ Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Faliꞌ Pi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Faliꞌ. Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Faliꞌ. Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (aoj)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Fagiꞌ Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Fagiꞌ Pi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Fagiꞌ. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Fagiꞌ. Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (aoj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (aoj)", () => {
		expect(p.parse("Jut 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ju 1:1").osis()).toEqual("Jude.1.1");
	});
});

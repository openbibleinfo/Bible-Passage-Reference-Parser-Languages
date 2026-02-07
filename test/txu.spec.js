"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/txu.js";

describe("Localized book Rev (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (txu)", () => {
		expect(p.parse("Mỳjja apôx 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (txu)", () => {
		expect(p.parse("Matêu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (txu)", () => {
		expect(p.parse("Makô 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (txu)", () => {
		expect(p.parse("Ruka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ruk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (txu)", () => {
		expect(p.parse("Djuão kumrẽx 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Dju k 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 3John (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (txu)", () => {
		expect(p.parse("Djuãoo ino rer 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Dju o 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (txu)", () => {
		expect(p.parse("Djuão rax 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Dju r 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 2John (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (txu)", () => {
		expect(p.parse("A Djuão 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("A Dju 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("A. Djuão 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("A. Dju 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Atãri Djuão 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Atãri Dju 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Atãri. Djuão 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Atãri. Dju 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (txu)", () => {
		expect(p.parse("Metĩndjwỳnh Karõ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kar 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (txu)", () => {
		expect(p.parse("Rôma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rô 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (txu)", () => {
		expect(p.parse("Kôritu kumrẽx 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kô k 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (txu)", () => {
		expect(p.parse("A Kôritu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("A Kô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("A. Kôritu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("A. Kô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Atãri Kôritu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Atãri Kô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Atãri. Kôritu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Atãri. Kô 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (txu)", () => {
		expect(p.parse("Korxi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kor 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (txu)", () => {
		expect(p.parse("Garaxa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gar 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (txu)", () => {
		expect(p.parse("Epexu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ep 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (txu)", () => {
		expect(p.parse("Pirpu 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pir 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (txu)", () => {
		expect(p.parse("Texarônika kumrẽx 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tex k 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (txu)", () => {
		expect(p.parse("A Texarônika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("A Tex 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("A. Texarônika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("A. Tex 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Atãri Texarônika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Atãri Tex 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Atãri. Texarônika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Atãri. Tex 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (txu)", () => {
		expect(p.parse("Ximoxi kumrẽx 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Xim k 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (txu)", () => {
		expect(p.parse("A Ximoxi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("A Xim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("A. Ximoxi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("A. Xim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Atãri Ximoxi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Atãri Xim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Atãri. Ximoxi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Atãri. Xim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (txu)", () => {
		expect(p.parse("Xitu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Xit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (txu)", () => {
		expect(p.parse("Piremõ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pire 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (txu)", () => {
		expect(p.parse("Mekbê idjaer 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Idja 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (txu)", () => {
		expect(p.parse("Xijagu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Xij 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (txu)", () => {
		expect(p.parse("Pedru kumrẽx 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ped k 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (txu)", () => {
		expect(p.parse("A Pedru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("A Ped 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("A. Pedru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("A. Ped 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Atãri Pedru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Atãri Ped 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Atãri. Pedru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Atãri. Ped 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (txu)", () => {
		expect(p.parse("Djuda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (txu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (txu)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Djuão kumrẽx - Djuãoo ino rer").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Djuão kumrẽx – Djuãoo ino rer").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Djuão kumrẽx — Djuãoo ino rer").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/cjo.js";

describe("Localized book Rev (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (cjo)", () => {
		expect(p.parse("Roñaagayitakirini 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Roñ. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (cjo)", () => {
		expect(p.parse("Mateeyo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (cjo)", () => {
		expect(p.parse("Marikoshi 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mr. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (cjo)", () => {
		expect(p.parse("Rookashi 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Rk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (cjo)", () => {
		expect(p.parse("1 Jowa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 J. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jowa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. J. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (cjo)", () => {
		expect(p.parse("2 Jowa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 J. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jowa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. J. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (cjo)", () => {
		expect(p.parse("3 Jowa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 J. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jowa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. J. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (cjo)", () => {
		expect(p.parse("Jowa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (cjo)", () => {
		expect(p.parse("Rantayitakirini 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ran. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (cjo)", () => {
		expect(p.parse("Oroomajatzi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Or. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (cjo)", () => {
		expect(p.parse("1 Korintojatzi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ko. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintojatzi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ko. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (cjo)", () => {
		expect(p.parse("2 Korintojatzi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ko. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintojatzi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ko. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (cjo)", () => {
		expect(p.parse("Korojaashijatzi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Koro. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (cjo)", () => {
		expect(p.parse("Karaashiyajatzi 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kar. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (cjo)", () => {
		expect(p.parse("Ejeesojatzi 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eje. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (cjo)", () => {
		expect(p.parse("Jiriposhijatzi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Jir. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (cjo)", () => {
		expect(p.parse("1 Tejawoonikajatzi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tej. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tejawoonikajatzi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tej. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (cjo)", () => {
		expect(p.parse("2 Tejawoonikajatzi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tej. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tejawoonikajatzi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tej. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (cjo)", () => {
		expect(p.parse("1 Temoteeyo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tm. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Temoteeyo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tm. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (cjo)", () => {
		expect(p.parse("2 Temoteeyo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tm. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Temoteeyo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tm. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (cjo)", () => {
		expect(p.parse("Teeto 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Te. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (cjo)", () => {
		expect(p.parse("Jirimooni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Jrm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (cjo)", () => {
		expect(p.parse("Ijoriiyotzinkarite 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ijor. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (cjo)", () => {
		expect(p.parse("Jantyaako 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jnty. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (cjo)", () => {
		expect(p.parse("1 Peetero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 P. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peetero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. P. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (cjo)", () => {
		expect(p.parse("2 Peetero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 P. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peetero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. P. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (cjo)", () => {
		expect(p.parse("Joorashi 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jor. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (cjo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (cjo)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jowa - 3 Jowa").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jowa – 3 Jowa").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jowa — 3 Jowa").osis()).toEqual("1John.1-3John.1");
	});
});

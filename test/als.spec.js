"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/als.js";

describe("Localized book Gen (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (als)", () => {
		expect(p.parse("të bërëtë 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Zan 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (als)", () => {
		expect(p.parse("të dalëtë 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Dal 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (als)", () => {
		expect(p.parse("Apolalipsi 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (als)", () => {
		expect(p.parse("nom i dytë 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Lp 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Isa (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (als)", () => {
		expect(p.parse("Isaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Is 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book Ps (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (als)", () => {
		expect(p.parse("Psalltiri 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (als)", () => {
		expect(p.parse("Fjalët e urta 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Fu 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Matt (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (als)", () => {
		expect(p.parse("Mattheo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (als)", () => {
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (als)", () => {
		expect(p.parse("Lluka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (als)", () => {
		expect(p.parse("1 Ioannit 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ioannit 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (als)", () => {
		expect(p.parse("2 Ioannit 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ioannit 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (als)", () => {
		expect(p.parse("3 Ioannit 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ioannit 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (als)", () => {
		expect(p.parse("Ioanni 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (als)", () => {
		expect(p.parse("Bëratë 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (als)", () => {
		expect(p.parse("Romanë 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (als)", () => {
		expect(p.parse("1 Korinthi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinthi 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (als)", () => {
		expect(p.parse("2 Korinthi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinthi 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (als)", () => {
		expect(p.parse("Kollosait 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (als)", () => {
		expect(p.parse("Gallatë 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (als)", () => {
		expect(p.parse("Efesio 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (als)", () => {
		expect(p.parse("Filippiot 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (als)", () => {
		expect(p.parse("1 Seleniqiot 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Seleniqiot 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (als)", () => {
		expect(p.parse("2 Seleniqiot 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Seleniqiot 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (als)", () => {
		expect(p.parse("1 Timothe 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothe 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (als)", () => {
		expect(p.parse("2 Timothe 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothe 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (als)", () => {
		expect(p.parse("Titonë 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (als)", () => {
		expect(p.parse("Filimonë 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (als)", () => {
		expect(p.parse("Çifut 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (als)", () => {
		expect(p.parse("Iakovit 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (als)", () => {
		expect(p.parse("1 Petrosë 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrosë 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (als)", () => {
		expect(p.parse("2 Petrosë 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrosë 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (als)", () => {
		expect(p.parse("Iudhësë 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle titles (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (als)", () => {
		expect(p.parse("Ps 3 title, 4:2, 5:title").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle book ranges (als)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (als)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Ioannit - 3 Ioannit").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Ioannit – 3 Ioannit").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Ioannit — 3 Ioannit").osis()).toEqual("1John.1-3John.1");
	});
});

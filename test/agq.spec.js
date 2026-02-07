"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/agq.js";

describe("Localized book Rev (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (agq)", () => {
		expect(p.parse("Edêe Fughu 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Edê 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (agq)", () => {
		expect(p.parse("Matìo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (agq)", () => {
		expect(p.parse("Mâk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (agq)", () => {
		expect(p.parse("Lûk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (agq)", () => {
		expect(p.parse("1Dz 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (agq)", () => {
		expect(p.parse("2Dz 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (agq)", () => {
		expect(p.parse("3 Dzɔ̌n 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Dz 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (agq)", () => {
		expect(p.parse("1 Dzɔ̌n 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Dzɔ̌n 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (agq)", () => {
		expect(p.parse("2 Dzɔ̌n 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Dzɔ̌n 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (agq)", () => {
		expect(p.parse("Dzɔ̌n 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Dzn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (agq)", () => {
		expect(p.parse("Kə̀fwàʼ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kfw 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (agq)", () => {
		expect(p.parse("Lumà 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lum 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (agq)", () => {
		expect(p.parse("1 Kòlentìan 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kòlentìan 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (agq)", () => {
		expect(p.parse("2 Kòlentìan 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kòlentìan 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (agq)", () => {
		expect(p.parse("1Kò 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (agq)", () => {
		expect(p.parse("2Kò 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (agq)", () => {
		expect(p.parse("Kòloshìan 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kòl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (agq)", () => {
		expect(p.parse("Gàlashìan 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gàl 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (agq)", () => {
		expect(p.parse("Efɛsùs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efs 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (agq)", () => {
		expect(p.parse("Fèlepìan 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fèl 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (agq)", () => {
		expect(p.parse("1 Tɛ̀sàlonìan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛ̀sàlonìan 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (agq)", () => {
		expect(p.parse("2 Tɛ̀sàlonìan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛ̀sàlonìan 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (agq)", () => {
		expect(p.parse("1Tɛ̀ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (agq)", () => {
		expect(p.parse("2Tɛ̀ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (agq)", () => {
		expect(p.parse("1 Timotì 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotì 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (agq)", () => {
		expect(p.parse("2 Timotì 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotì 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (agq)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (agq)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (agq)", () => {
		expect(p.parse("Taetùs 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tae 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (agq)", () => {
		expect(p.parse("Filemùn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (agq)", () => {
		expect(p.parse("Hibùlù 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (agq)", () => {
		expect(p.parse("Dzɛ̂ms 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Dzm 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (agq)", () => {
		expect(p.parse("1 Pità 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pità 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (agq)", () => {
		expect(p.parse("2 Pità 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pità 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (agq)", () => {
		expect(p.parse("1Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (agq)", () => {
		expect(p.parse("2Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (agq)", () => {
		expect(p.parse("Dzûd 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Dzd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (agq)", () => {
		expect(p.parse("1 Kòlentìan 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kò 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Pità 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Tɛ̀sàlonìan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Timotì 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("2 Kòlentìan 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kò 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Pità 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Tɛ̀sàlonìan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Timotì 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kə̀fwàʼ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kòloshìan 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kòl 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Efɛsùs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Gàlashìan 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gàl 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Hibùlù 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Dzûd 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Lûk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Mâk 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Matìo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Fèlepìan 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fèl 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filemùn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Edêe Fughu 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Edê 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Lumà 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Taetùs 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Parser helper should handle book ranges (agq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (agq)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Dz - 3 Dzɔ̌n").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Dz – 3 Dzɔ̌n").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Dz — 3 Dzɔ̌n").osis()).toEqual("1John.1-3John.1");
	});
});

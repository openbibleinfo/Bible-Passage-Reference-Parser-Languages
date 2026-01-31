"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nse.js";

describe("Localized book Rev (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nse)", () => {
		expect(p.parse("Mavundululiwe 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("coku 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Cok 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nse)", () => {
		expect(p.parse("M. Mattayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nse)", () => {
		expect(p.parse("M. Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mako 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nse)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nse)", () => {
		expect(p.parse("1Yh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nse)", () => {
		expect(p.parse("2Yh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nse)", () => {
		expect(p.parse("3 Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nse)", () => {
		expect(p.parse("M. Yohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nse)", () => {
		expect(p.parse("1 Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nse)", () => {
		expect(p.parse("2 Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nse)", () => {
		expect(p.parse("Machitilo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Macitilo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mc 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nse)", () => {
		expect(p.parse("aRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("aRo 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ar 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nse)", () => {
		expect(p.parse("1 Akorinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ako 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Akorinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ako 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nse)", () => {
		expect(p.parse("2 Akorinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ako 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Akorinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ako 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nse)", () => {
		expect(p.parse("1Ak 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nse)", () => {
		expect(p.parse("2Ak 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nse)", () => {
		expect(p.parse("aKolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Akolo 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Aks 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nse)", () => {
		expect(p.parse("aGalatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("aGa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ag 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nse)", () => {
		expect(p.parse("aEfeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Aife 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ai 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nse)", () => {
		expect(p.parse("aFilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("aFi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Af 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nse)", () => {
		expect(p.parse("1 Atessalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ate 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Atessalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ate 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nse)", () => {
		expect(p.parse("2 Atessalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ate 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Atessalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ate 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nse)", () => {
		expect(p.parse("1At 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nse)", () => {
		expect(p.parse("2At 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nse)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nse)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nse)", () => {
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nse)", () => {
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nse)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nse)", () => {
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fili 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fi 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nse)", () => {
		expect(p.parse("Ahebrayo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Aheb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ahb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nse)", () => {
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yako 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nse)", () => {
		expect(p.parse("1 Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nse)", () => {
		expect(p.parse("2 Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nse)", () => {
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nse)", () => {
		expect(p.parse("2Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nse)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nse)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yd 1:1").osis()).toEqual("Jude.1.1");
	});
});

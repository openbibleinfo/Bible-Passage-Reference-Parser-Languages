"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gle.js";

describe("Localized book Gen (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (gle)", () => {
		expect(p.parse("Geineasas 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gei 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (gle)", () => {
		expect(p.parse("Eaxodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eax 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (gle)", () => {
		expect(p.parse("Lebhiticus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Leḃiticus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Léivític 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Leḃ. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Léi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (gle)", () => {
		expect(p.parse("Uibhreacha 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Uimhreacha 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Uiḃreaċa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Uiḃr. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Uim 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (gle)", () => {
		expect(p.parse("Síorach 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sío 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (gle)", () => {
		expect(p.parse("Eagna 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Eag 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (gle)", () => {
		expect(p.parse("Leabhar na n-Olagón 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Triabhuin 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Triaḃuin 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ola 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gle)", () => {
		expect(p.parse("Apacailipsis 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Taispeántadh 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Taisbeanadh 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Taisbeanádh 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Taisbeunaḋ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Taispeáint 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Taisb. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apac. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tais 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apa 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (gle)", () => {
		expect(p.parse("Deotranaimí 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deuteronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deo 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (gle)", () => {
		expect(p.parse("Iosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iósua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iós 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (gle)", () => {
		expect(p.parse("Breitheamhuin 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Breiṫeaṁuin 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Breithiúna 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Breiṫ. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Breit 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Bre 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (gle)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rút 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (gle)", () => {
		expect(p.parse("Isaiah 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Íseáia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Íse 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (gle)", () => {
		expect(p.parse("1 Samúéil 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samúéil 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samúéil 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samúéil 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (gle)", () => {
		expect(p.parse("2 Samúéil 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samúéil 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samúéil 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samúéil 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (gle)", () => {
		expect(p.parse("1Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (gle)", () => {
		expect(p.parse("2Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (gle)", () => {
		expect(p.parse("1 Riogh 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ríthe 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Rioġ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Riogh 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ríthe 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Rioġ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Riogh 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Ríthe 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Rioġ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Riogh 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Ríthe 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Rioġ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (gle)", () => {
		expect(p.parse("2 Riogh 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ríthe 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Rioġ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Riogh 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ríthe 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Rioġ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Riogh 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Ríthe 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Rioġ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Riogh 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Ríthe 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Rioġ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (gle)", () => {
		expect(p.parse("1Rí 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (gle)", () => {
		expect(p.parse("2Rít 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (gle)", () => {
		expect(p.parse("1 Croinicoibh 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Croinicoiḃ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Croinic. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Croinicí 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Croinic 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Croinicoibh 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Croinicoiḃ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Croinic. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Croinicí 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Croinic 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Croinicoibh 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Croinicoiḃ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Croinic. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Croinicí 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Croinic 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Croinicoibh 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Croinicoiḃ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Croinic. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Croinicí 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Croinic 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 1Chr (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (gle)", () => {
		expect(p.parse("1Cr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (gle)", () => {
		expect(p.parse("2 Croiniclibh 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Croinicliḃ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Croinic. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Croinicí 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Croinic 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Croiniclibh 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Croinicliḃ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Croinic. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Croinicí 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Croinic 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Croiniclibh 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Croinicliḃ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Croinic. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Croinicí 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Croinic 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Croiniclibh 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Croinicliḃ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Croinic. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Croinicí 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Croinic 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (gle)", () => {
		expect(p.parse("2Cr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (gle)", () => {
		expect(p.parse("Eazrá 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Eaz 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (gle)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nihimiá 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nih 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (gle)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (gle)", () => {
		expect(p.parse("Iób 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (gle)", () => {
		expect(p.parse("Na Sailm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psailm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sailm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sal 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (gle)", () => {
		expect(p.parse("Seanfhocal 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Seanraite 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Sea 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (gle)", () => {
		expect(p.parse("Ecclesiastes 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Cóheilit 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Cóh 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (gle)", () => {
		expect(p.parse("Caintic Sholaimh 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Laoi na Laoithe 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Caintic Ṡolaiṁ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Caintic 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Lao 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (gle)", () => {
		expect(p.parse("Ieremiah 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Irimia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Iri 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (gle)", () => {
		expect(p.parse("Eizicéil 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esechiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eseċiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eiz 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (gle)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (gle)", () => {
		expect(p.parse("Hóisé 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hói 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (gle)", () => {
		expect(p.parse("Ióéil 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ioel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ióé 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (gle)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amós 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amó 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (gle)", () => {
		expect(p.parse("Obadiah 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obaidiá 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (gle)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ióna 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ión 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (gle)", () => {
		expect(p.parse("Micah 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Míocá 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mío 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (gle)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahúm 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (gle)", () => {
		expect(p.parse("Habaccuc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habacúc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habac. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habac 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (gle)", () => {
		expect(p.parse("Sephaniah 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Seṗaniah 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zafainiá 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Seph. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Seṗ. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zaf 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (gle)", () => {
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (gle)", () => {
		expect(p.parse("Sechariah 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Seċariah 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zacairia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sech. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Seċ. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zac 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (gle)", () => {
		expect(p.parse("Malachi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malaicí 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malaċi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gle)", () => {
		expect(p.parse("Maitiú 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mait. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matha 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ṁaṫa 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mth. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mth 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gle)", () => {
		expect(p.parse("Marcas 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marcus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marc. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mc. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gle)", () => {
		expect(p.parse("Lúcas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lúcás 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lúc. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lúc 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gle)", () => {
		expect(p.parse("1Eóin 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Eo 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gle)", () => {
		expect(p.parse("2Eo 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gle)", () => {
		expect(p.parse("III Eóin 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Eoin 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Eóin 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Eóin 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Eo 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gle)", () => {
		expect(p.parse("1 Eoin 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Eóin 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Eoin 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Eóin 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Eoin 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Eóin 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Eoin 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Eóin 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gle)", () => {
		expect(p.parse("2 Eoin 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Eóin 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Eoin 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Eóin 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Eoin 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Eóin 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Eoin 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Eóin 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gle)", () => {
		expect(p.parse("Eoin 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Eóin 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Eoi 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gle)", () => {
		expect(p.parse("Gníomhartha 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gníoṁarṫa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gníomh. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gníoṁ. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gníomh 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gní 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gle)", () => {
		expect(p.parse("Rómhánaigh 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romhánach 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rómhánach 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roṁánaċ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rómh. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Róm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gle)", () => {
		expect(p.parse("1 Chum na gCoirinnteach 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ccorintiánach 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ccorintiánaċ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Coraintigh 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corantaigh 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ccor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Co 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Chum na gCoirinnteach 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ccorintiánach 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ccorintiánaċ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Coraintigh 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corantaigh 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ccor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Co 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Chum na gCoirinnteach 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Ccorintiánach 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Ccorintiánaċ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Coraintigh 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Corantaigh 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Ccor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Co 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Chum na gCoirinnteach 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Ccorintiánach 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Ccorintiánaċ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Coraintigh 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Corantaigh 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Ccor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Co 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gle)", () => {
		expect(p.parse("2 Chum na gCoirinnteach 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ccorintiánach 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ccorintiánaċ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Coraintigh 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corantaigh 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ccor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Co 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Chum na gCoirinnteach 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ccorintiánach 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ccorintiánaċ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Coraintigh 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corantaigh 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ccor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Co 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Chum na gCoirinnteach 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Ccorintiánach 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Ccorintiánaċ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Coraintigh 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Corantaigh 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Ccor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Co 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Chum na gCoirinnteach 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Ccorintiánach 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Ccorintiánaċ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Coraintigh 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Corantaigh 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Ccor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Co 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gle)", () => {
		expect(p.parse("1Ccor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Co 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gle)", () => {
		expect(p.parse("2Ccor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Co 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gle)", () => {
		expect(p.parse("Chum na gColossaeach 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ccolossianach 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ccolossianaċ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Colosséigh 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Colosaigh 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ccol. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ccol 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gle)", () => {
		expect(p.parse("Chum na nGalátach 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatiánach 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatiánaċ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galataigh 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galátaigh 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galat. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gle)", () => {
		expect(p.parse("Chum na nEiféiseach 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Hephesiánach 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Heṗesiánaċ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eiféisigh 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eifisigh 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eif. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Heṗ. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Heph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eif 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gle)", () => {
		expect(p.parse("Chum na bhFilipíneach 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Bhphilippiánach 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ḃfilippiánaċ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipéigh 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipigh 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Bhphil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ḃfil. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gle)", () => {
		expect(p.parse("1 Chum na dTesaloníceach 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ttessalonicanach 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ttessalonicanaċ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Teasalónaigh 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalóinigh 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ttess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Teas. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Chum na dTesaloníceach 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ttessalonicanach 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ttessalonicanaċ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Teasalónaigh 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalóinigh 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ttess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Teas. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Chum na dTesaloníceach 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Ttessalonicanach 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Ttessalonicanaċ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Teasalónaigh 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesalóinigh 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Ttess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Teas. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Chum na dTesaloníceach 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Ttessalonicanach 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Ttessalonicanaċ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Teasalónaigh 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalóinigh 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Ttess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Teas. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gle)", () => {
		expect(p.parse("1Ttess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gle)", () => {
		expect(p.parse("2 Chum na dTesaloníceach 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ttessalonicanach 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ttessalonicanaċ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Teasalónaigh 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalóinigh 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ttess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Teas. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Chum na dTesaloníceach 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ttessalonicanach 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ttessalonicanaċ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Teasalónaigh 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalóinigh 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ttess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Teas. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Chum na dTesaloníceach 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Ttessalonicanach 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Ttessalonicanaċ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Teasalónaigh 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalóinigh 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Ttess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Teas. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Chum na dTesaloníceach 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Ttessalonicanach 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Ttessalonicanaċ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Teasalónaigh 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalóinigh 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Ttess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Teas. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gle)", () => {
		expect(p.parse("2Ttess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gle)", () => {
		expect(p.parse("1 Chum Timóteuis 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timóteuis 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timótéus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tiomóid 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tiom. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Chum Timóteuis 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timóteuis 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timótéus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tiomóid 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tiom. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Chum Timóteuis 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timóteuis 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timótéus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tiomóid 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tiom. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Chum Timóteuis 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timóteuis 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timótéus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tiomóid 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tiom. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gle)", () => {
		expect(p.parse("2 Chum Timóteuis 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timóteuis 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timótéus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tiomóid 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tiom. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Chum Timóteuis 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timóteuis 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timótéus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tiomóid 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tiom. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Chum Timóteuis 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timóteuis 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timótéus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tiomóid 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tiom. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Chum Timóteuis 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timóteuis 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timótéus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tiomóid 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tiom. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gle)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gle)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gle)", () => {
		expect(p.parse("Chum Tituis 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Títeas 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tituis 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Títus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tít 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gle)", () => {
		expect(p.parse("Chum Filéamóin 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philémoin 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filéamón 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philémón 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Ṗilémoin 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filéam 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Ṗilém. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gle)", () => {
		expect(p.parse("Chum na nEabhraidheach 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Neabhruidheach 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Neaḃruiḋeaċ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eabhraigh 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eabh. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Neaḃ. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eabh 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eab 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Nea 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gle)", () => {
		expect(p.parse("Sheamuis 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ṡeamuis 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Séamas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Séam. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Shea 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Séa 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gle)", () => {
		expect(p.parse("1 Pheadair 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Ṗeadair 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Peadar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pead. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Ṗead. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Phe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pheadair 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ṗeadair 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peadar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pead. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ṗead. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Phe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pheadair 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Ṗeadair 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Peadar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pead. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Ṗead. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Phe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pheadair 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Ṗeadair 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Peadar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pead. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Ṗead. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Phe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gle)", () => {
		expect(p.parse("2 Pheadair 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Ṗeadair 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Peadar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pead. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Ṗead. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Phe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pheadair 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Ṗeadair 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peadar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pead. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Ṗead. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Phe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pheadair 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Ṗeadair 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Peadar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pead. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Ṗead. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Phe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pheadair 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Ṗeadair 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Peadar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pead. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Ṗead. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Phe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gle)", () => {
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gle)", () => {
		expect(p.parse("2Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gle)", () => {
		expect(p.parse("Iudais 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Iúdás 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Iud 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Iúd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (gle)", () => {
		expect(p.parse("Tóibít 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tói 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (gle)", () => {
		expect(p.parse("Iúidit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Iúi 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (gle)", () => {
		expect(p.parse("Barúch 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (gle)", () => {
		expect(p.parse("1 Macabaech 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Macabaech 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Macabaech 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Macabaech 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (gle)", () => {
		expect(p.parse("2 Macabaech 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Macabaech 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Macabaech 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Macabaech 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 1Macc (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (gle)", () => {
		expect(p.parse("1Ma 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (gle)", () => {
		expect(p.parse("2Ma 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Preferred book names (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (gle)", () => {
		expect(p.parse("Apacailipsis (Taispeántadh) 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Parser helper should handle ranges (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (gle)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
	});
});
describe("Parser helper should handle chapters (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (gle)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
	});
});
describe("Parser helper should handle titles (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (gle)", () => {
		expect(p.parse("Ps 3 title, 4:2, 5:title").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle book ranges (gle)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (gle)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Eóin - III Eóin").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Eóin – III Eóin").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Eóin — III Eóin").osis()).toEqual("1John.1-3John.1");
	});
});

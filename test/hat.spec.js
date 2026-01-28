"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hat.js";

describe("Localized book Gen (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (hat)", () => {
		expect(p.parse("liv Konmansman an 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Konmansman 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Jenèz 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Jen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (hat)", () => {
		expect(p.parse("liv delivrans lan 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Delivrans 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Egzòd 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Egz 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (hat)", () => {
		expect(p.parse("liv Prensip lavi nan Bondye 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levitik 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (hat)", () => {
		expect(p.parse("liv Resansman an 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Resansman 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nonb 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Res 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (hat)", () => {
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (hat)", () => {
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (hat)", () => {
		expect(p.parse("Chante pou plenn Sò lavil Jerizalèm 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lamantasyon 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Plenn 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Pl 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (hat)", () => {
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (hat)", () => {
		expect(p.parse("Revelasyon 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apokalips 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (hat)", () => {
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (hat)", () => {
		expect(p.parse("Dezyèm liv Lalwa a 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deteronòm 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Detewonòm 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Det 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (hat)", () => {
		expect(p.parse("Liv Jozye a 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jozye 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joz 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (hat)", () => {
		expect(p.parse("Liv Chèf yo 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jij 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (hat)", () => {
		expect(p.parse("Liv Rit la 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rit 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (hat)", () => {
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (hat)", () => {
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (hat)", () => {
		expect(p.parse("Liv Ezayi a 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ezayi 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hat)", () => {
		expect(p.parse("Premye Samyèl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Premye. Samyèl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samyèl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samyèl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samyèl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samyèl 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hat)", () => {
		expect(p.parse("Dezyèm Samyèl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Dezyèm. Samyèl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samyèl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samyèl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samyèl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samyèl 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hat)", () => {
		expect(p.parse("Dezyèm liv Samyèl la 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samyèl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hat)", () => {
		expect(p.parse("Premye liv Samyèl la 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samyèl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hat)", () => {
		expect(p.parse("Premye Wa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Premye. Wa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Wa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Wa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Wa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Wa 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hat)", () => {
		expect(p.parse("Dezyèm Wa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Dezyèm. Wa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Wa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Wa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Wa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Wa 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hat)", () => {
		expect(p.parse("Dezyèm liv Wa yo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Wa 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hat)", () => {
		expect(p.parse("Premye liv Wa yo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Wa 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hat)", () => {
		expect(p.parse("Premye Kwonik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Premye Istwa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Premye. Kwonik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Premye. Istwa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kwonik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Istwa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kwonik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Istwa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Kwonik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Istwa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Kwonik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Istwa 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hat)", () => {
		expect(p.parse("Dezyèm Kwonik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Dezyèm Istwa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Dezyèm. Kwonik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Dezyèm. Istwa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kwonik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Istwa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kwonik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Istwa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Kwonik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Istwa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Kwonik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Istwa 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hat)", () => {
		expect(p.parse("Dezyèm liv Kwonik la 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Istwa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ist 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hat)", () => {
		expect(p.parse("Premye liv Kwonik la 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Istwa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ist 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (hat)", () => {
		expect(p.parse("Liv Esdras la 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esdras 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esd 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (hat)", () => {
		expect(p.parse("Liv Neyemi an 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neyemi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neemi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Ne 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (hat)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (hat)", () => {
		expect(p.parse("Liv Estè a 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Estè 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (hat)", () => {
		expect(p.parse("Liv Jòb la 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jòb 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (hat)", () => {
		expect(p.parse("Liv Sòm yo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sòm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (hat)", () => {
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (hat)", () => {
		expect(p.parse("Liv Pwovèb yo 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pwovèb 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pw 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (hat)", () => {
		expect(p.parse("Eklezyas - Liv Filozòf la 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Liv Filozòf la 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eklezyas 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Filozòf 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ekl 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (hat)", () => {
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (hat)", () => {
		expect(p.parse("Kantid de Kantik 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Pi bèl Chante a 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Chante Salomon 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Chante 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (hat)", () => {
		expect(p.parse("Liv Jeremi an 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (hat)", () => {
		expect(p.parse("Liv Ezekyèl la 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekyèl 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (hat)", () => {
		expect(p.parse("Liv Danyèl la 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Danyèl 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (hat)", () => {
		expect(p.parse("Liv Oze a 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oze 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (hat)", () => {
		expect(p.parse("Liv Jowèl la 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jowèl 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (hat)", () => {
		expect(p.parse("Liv Amòs la 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amòs 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (hat)", () => {
		expect(p.parse("Liv Abdyas la 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abdias 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abdyas 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (hat)", () => {
		expect(p.parse("Liv Jonas la 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonas 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (hat)", () => {
		expect(p.parse("Liv Miche a 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Miche 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (hat)", () => {
		expect(p.parse("Liv Nawoum lan 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nawoum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nawoun 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naw 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (hat)", () => {
		expect(p.parse("Liv Abakik la 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Abakouk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Abakik 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Abak 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (hat)", () => {
		expect(p.parse("Liv Sofoni an 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofoni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (hat)", () => {
		expect(p.parse("Liv Aje a 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Aje 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (hat)", () => {
		expect(p.parse("Liv Zakari a 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zakari 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (hat)", () => {
		expect(p.parse("Liv Malachi a 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malachi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (hat)", () => {
		expect(p.parse("Matye 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (hat)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (hat)", () => {
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lik 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hat)", () => {
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hat)", () => {
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hat)", () => {
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hat)", () => {
		expect(p.parse("Premye Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Premye. Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hat)", () => {
		expect(p.parse("Dezyèm Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Dezyèm. Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hat)", () => {
		expect(p.parse("3 Jan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Jan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Jan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hat)", () => {
		expect(p.parse("Jan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hat)", () => {
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (hat)", () => {
		expect(p.parse("Aksyon apòt yo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Travay apòt yo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Akdèzapot 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Travay 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tr 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (hat)", () => {
		expect(p.parse("Romen 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ròm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hat)", () => {
		expect(p.parse("Premye Korentyen 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Premye Korint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Premye. Korentyen 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Premye. Korint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korentyen 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korentyen 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korentyen 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korentyen 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korint 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hat)", () => {
		expect(p.parse("Dezyèm Korentyen 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Dezyèm Korint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Dezyèm. Korentyen 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Dezyèm. Korint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korentyen 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korentyen 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korentyen 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korentyen 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korint 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hat)", () => {
		expect(p.parse("2 Korint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hat)", () => {
		expect(p.parse("1 Korint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (hat)", () => {
		expect(p.parse("Galasyen 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galasi 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (hat)", () => {
		expect(p.parse("Efezyen 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efèz 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (hat)", () => {
		expect(p.parse("Filipyen 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (hat)", () => {
		expect(p.parse("Kolosyen 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolòs 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hat)", () => {
		expect(p.parse("Premye Tesalonikyen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Premye Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Premye. Tesalonikyen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Premye. Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonikyen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonikyen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesalonikyen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonikyen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hat)", () => {
		expect(p.parse("Dezyèm Tesalonikyen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Dezyèm Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Dezyèm. Tesalonikyen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Dezyèm. Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonikyen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonikyen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalonikyen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonikyen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hat)", () => {
		expect(p.parse("2 Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hat)", () => {
		expect(p.parse("1 Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hat)", () => {
		expect(p.parse("Premye Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Premye. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hat)", () => {
		expect(p.parse("Dezyèm Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Dezyèm. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hat)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hat)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (hat)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (hat)", () => {
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (hat)", () => {
		expect(p.parse("Ebre 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (hat)", () => {
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hat)", () => {
		expect(p.parse("Premye Piè 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Premye Pyè 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Premye. Piè 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Premye. Pyè 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Piè 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pyè 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piè 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pyè 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Piè 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pyè 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Piè 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pyè 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hat)", () => {
		expect(p.parse("Dezyèm Piè 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Dezyèm Pyè 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Dezyèm. Piè 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Dezyèm. Pyè 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Piè 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pyè 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piè 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pyè 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Piè 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pyè 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Piè 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pyè 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hat)", () => {
		expect(p.parse("2 Piè 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hat)", () => {
		expect(p.parse("1 Piè 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (hat)", () => {
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jid 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (hat)", () => {
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (hat)", () => {
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (hat)", () => {
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (hat)", () => {
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book Bel (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (hat)", () => {
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book 2Macc (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (hat)", () => {
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (hat)", () => {
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (hat)", () => {
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (hat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (hat)", () => {
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});

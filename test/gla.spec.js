"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gla.js";

describe("Localized book Gen (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (gla)", () => {
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (gla)", () => {
		expect(p.parse("Ecsodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ecs 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (gla)", () => {
		expect(p.parse("Bhel Agus An Dragoin 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (gla)", () => {
		expect(p.parse("Lebhiticus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lebh 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (gla)", () => {
		expect(p.parse("Àireamh 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Àir 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (gla)", () => {
		expect(p.parse("Ecclesiasticus 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (gla)", () => {
		expect(p.parse("Gliocas Sholaimh 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (gla)", () => {
		expect(p.parse("Tuireadh Ieremiah 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Tuireadh 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Tuir. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Tuir 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gla)", () => {
		expect(p.parse("Taisbeanandh 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Taisbeanadh 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Taisb. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tais. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tais 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (gla)", () => {
		expect(p.parse("Urnuigh Mhanasseis. 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Urnuigh Mhanasseis 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (gla)", () => {
		expect(p.parse("Deuteronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (gla)", () => {
		expect(p.parse("Iosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ios 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (gla)", () => {
		expect(p.parse("Britheamhan 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Bri 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (gla)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (gla)", () => {
		expect(p.parse("1 Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Esdras 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (gla)", () => {
		expect(p.parse("2 Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Esdras 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (gla)", () => {
		expect(p.parse("Isaiah 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (gla)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (gla)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (gla)", () => {
		expect(p.parse("1 Rìgh 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Rìgh 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Rìgh 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Rìgh 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (gla)", () => {
		expect(p.parse("2 Rìgh 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Rìgh 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Rìgh 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Rìgh 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (gla)", () => {
		expect(p.parse("1 Eachdraidh 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Each 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Eachdraidh 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Each 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Eachdraidh 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Each 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Eachdraidh 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Each 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (gla)", () => {
		expect(p.parse("2 Eachdraidh 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Each 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Eachdraidh 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Each 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Eachdraidh 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Each 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Eachdraidh 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Each 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (gla)", () => {
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (gla)", () => {
		expect(p.parse("Nehemiah 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (gla)", () => {
		expect(p.parse("Esteir 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (gla)", () => {
		expect(p.parse("Iob 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (gla)", () => {
		expect(p.parse("Sailm Dhaibhidh 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sailm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salm 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (gla)", () => {
		expect(p.parse("Gnàth-fhacal 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Gnath-fhocal 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Gnàth‐fhacal 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Gnath-fhoc 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Gnà 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (gla)", () => {
		expect(p.parse("Eclesiastes 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecles. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecl 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (gla)", () => {
		expect(p.parse("Oran An Triuir Chloinne Naoma 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (gla)", () => {
		expect(p.parse("Dàn Sholaimh 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("DànShol 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (gla)", () => {
		expect(p.parse("Ieremiah 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ier 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (gla)", () => {
		expect(p.parse("Eseciel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esec 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (gla)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (gla)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosèa 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (gla)", () => {
		expect(p.parse("Ioel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (gla)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (gla)", () => {
		expect(p.parse("Obadiah 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (gla)", () => {
		expect(p.parse("Ionah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ion 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (gla)", () => {
		expect(p.parse("Micah 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (gla)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (gla)", () => {
		expect(p.parse("Habacuc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habac. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (gla)", () => {
		expect(p.parse("Sephaniah 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Seph 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (gla)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (gla)", () => {
		expect(p.parse("Sechariah 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sech 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (gla)", () => {
		expect(p.parse("Malachi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gla)", () => {
		expect(p.parse("Soisgeul Mhata 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("N. Matu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mata 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gla)", () => {
		expect(p.parse("N. Marc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marcas 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marcus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marc 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gla)", () => {
		expect(p.parse("Soisgeul Lucais 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("N. Luc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lùcas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lùc 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gla)", () => {
		expect(p.parse("III Eoin 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Eoin 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Eòin 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gla)", () => {
		expect(p.parse("Soisgeul Eòin 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("N. Eoin 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Eoin 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Eòin 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gla)", () => {
		expect(p.parse("1 Eoin 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Eòin 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Eoin 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Eòin 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Eoin 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Eòin 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Eoin 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Eòin 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gla)", () => {
		expect(p.parse("2 Eoin 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Eòin 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Eoin 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Eòin 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Eoin 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Eòin 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Eoin 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Eòin 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gla)", () => {
		expect(p.parse("Gnìomharan 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gniomhan 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gnìomhan 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gniomh. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gnìomh. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gnìo 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gla)", () => {
		expect(p.parse("Romanaich 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ròmanaich 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ròmanach 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ròm. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ròm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gla)", () => {
		expect(p.parse("1 Corintianaich 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corintianach 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Chorint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Chor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corintianaich 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corintianach 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Chorint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Chor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Corintianaich 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Corintianach 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Chorint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Chor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Corintianaich 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Corintianach 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Chorint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Chor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gla)", () => {
		expect(p.parse("2 Corintianaich 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corintianach 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Chorint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Chor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corintianaich 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corintianach 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Chorint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Chor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Corintianaich 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Corintianach 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Chorint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Chor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Corintianaich 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Corintianach 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Chorint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Chor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gla)", () => {
		expect(p.parse("Colosianaich 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Colosianach 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Cholosse 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gla)", () => {
		expect(p.parse("Galàtianaich 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galàtianach 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ghalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gla)", () => {
		expect(p.parse("Ephèsianaich 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ephèsianach 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ephesuis 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gla)", () => {
		expect(p.parse("Philipianaich 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Philipianach 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Philippi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Philip. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Philip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gla)", () => {
		expect(p.parse("1 Tesalònianaich 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalònianach 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thessalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesal. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalònianaich 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalònianach 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesal. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesalònianaich 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesalònianach 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thessalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesal. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalònianaich 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalònianach 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thessalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesal. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gla)", () => {
		expect(p.parse("2 Tesalònianaich 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalònianach 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thessalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalònianaich 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalònianach 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalònianaich 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalònianach 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thessalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalònianaich 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalònianach 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thessalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gla)", () => {
		expect(p.parse("1 Timòteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Thimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Thim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timòteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Thimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Thim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timòteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Thimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Thim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timòteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Thimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Thim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gla)", () => {
		expect(p.parse("2 Timòteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timòteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timòteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timòteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gla)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tìtus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tìt. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tìt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gla)", () => {
		expect(p.parse("Philemoin 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philèmon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philem. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gla)", () => {
		expect(p.parse("Eabhraidhich 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("H-eabhraich 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eabhraich 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eabhr. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eabh. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eabh 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gla)", () => {
		expect(p.parse("Sheumais 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Seumas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Seum. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Seum 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gla)", () => {
		expect(p.parse("1 Pheadar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Peadar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Phead. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pead. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pead 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pheadar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peadar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Phead. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pead. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pead 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pheadar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Peadar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Phead. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pead. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pead 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pheadar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Peadar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Phead. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pead. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pead 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gla)", () => {
		expect(p.parse("2 Pheadar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Peadar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Phead. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pead. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pead 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pheadar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peadar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Phead. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pead. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pead 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pheadar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Peadar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Phead. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pead. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pead 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pheadar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Peadar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Phead. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pead. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pead 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gla)", () => {
		expect(p.parse("Iùdais 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Iùdas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Iùd. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Iuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Iùd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (gla)", () => {
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (gla)", () => {
		expect(p.parse("Iudit 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (gla)", () => {
		expect(p.parse("Baruc 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (gla)", () => {
		expect(p.parse("Susanna 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (gla)", () => {
		expect(p.parse("1 Maccabeach 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Maccabeach 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Maccabeach 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Maccabeach 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (gla)", () => {
		expect(p.parse("2 Maccabeach 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Maccabeach 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Maccabeach 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Maccabeach 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Preferred book names (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (gla)", () => {
		expect(p.parse("Oran An Triuir Chloinne Naoma 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Parser helper should handle ranges (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (gla)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Phlm 2 - 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Phlm 2 – 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Phlm 2 — 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (gla)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
	});
});
describe("Parser helper should handle verses (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (gla)", () => {
		expect(p.parse("Phlm verse 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (gla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (gla)", () => {
		expect(p.parse("Phlm 2 & 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});

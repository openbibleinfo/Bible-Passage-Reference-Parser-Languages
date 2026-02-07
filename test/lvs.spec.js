"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lvs.js";

describe("Localized book Gen (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (lvs)", () => {
		expect(p.parse("Pirmā Mozus 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mozus 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1Moz 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (lvs)", () => {
		expect(p.parse("Otra Mozus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mozus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2Moz 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (lvs)", () => {
		expect(p.parse("Trešā Mozus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mozus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3Moz 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (lvs)", () => {
		expect(p.parse("Ceturtā Mozus 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mozus 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4Moz 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (lvs)", () => {
		expect(p.parse("Ecclesiasticus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirach 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sīr 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (lvs)", () => {
		expect(p.parse("Wisdom of Solomon 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Sāl 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (lvs)", () => {
		expect(p.parse("Vaimanu dziesmas 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Raudu dziesmas 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Raud 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Rdz 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Vdz 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (lvs)", () => {
		expect(p.parse("Letter of Jeremiah 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Jerv 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lvs)", () => {
		expect(p.parse("Jaņa Atklāsmes Grāmata 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Jāņa atklāsmes 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Parādīšanas 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Atklāsmes 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Parād 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Atkl 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (lvs)", () => {
		expect(p.parse("Prayer of Manasseh 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Man 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (lvs)", () => {
		expect(p.parse("Piektā Mozus 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mozus 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5Moz 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (lvs)", () => {
		expect(p.parse("Jozuas 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joz 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (lvs)", () => {
		expect(p.parse("Sog̒u 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Soģu 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Soģ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (lvs)", () => {
		expect(p.parse("Rutes 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (lvs)", () => {
		expect(p.parse("1 Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pirmā Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pirmā. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pāvila Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pāvila. Esdras 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 1Esd (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (lvs)", () => {
		expect(p.parse("2Ezr 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book Isa (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (lvs)", () => {
		expect(p.parse("Jesajas 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jesaja 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jes 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lvs)", () => {
		expect(p.parse("1 Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuēla 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuēla 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pirmā Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pirmā Samuēla 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pirmā. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pirmā. Samuēla 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pāvila Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pāvila Samuēla 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pāvila. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pāvila. Samuēla 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lvs)", () => {
		expect(p.parse("2 Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuēla 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuēla 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Otra Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Otra Samuēla 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Otra. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Otra. Samuēla 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Pāvila Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Pāvila Samuēla 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Pāvila. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Pāvila. Samuēla 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lvs)", () => {
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lvs)", () => {
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lvs)", () => {
		expect(p.parse("1 Ķēniņu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ķēniņu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pirmā Ķēniņu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pirmā. Ķēniņu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pāvila Ķēniņu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pāvila. Ķēniņu 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lvs)", () => {
		expect(p.parse("2 Ķēniņu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ķēniņu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Otra Ķēniņu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Otra. Ķēniņu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Pāvila Ķēniņu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Pāvila. Ķēniņu 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lvs)", () => {
		expect(p.parse("1Ķēn 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lvs)", () => {
		expect(p.parse("2Ķēn 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (lvs)", () => {
		expect(p.parse("1Laik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1L 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (lvs)", () => {
		expect(p.parse("Otrā Laiku 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Laik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2L 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (lvs)", () => {
		expect(p.parse("1 Laiku 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Laiku 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pirmā Laiku 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pirmā. Laiku 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pāvila Laiku 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pāvila. Laiku 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (lvs)", () => {
		expect(p.parse("2 Laiku 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Laiku 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Otra Laiku 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Otra. Laiku 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Pāvila Laiku 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Pāvila. Laiku 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (lvs)", () => {
		expect(p.parse("Ezras 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (lvs)", () => {
		expect(p.parse("Nechemijas 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemijas 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehem 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (lvs)", () => {
		expect(p.parse("Esteres 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (lvs)", () => {
		expect(p.parse("Ījaba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ījab 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Īj 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (lvs)", () => {
		expect(p.parse("Dāvida dziesmas 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Dāv.dz 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalmi 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (lvs)", () => {
		expect(p.parse("Salamana Pamācības 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Sakāmie vārdi 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Sakāmvārdi 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pam 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Sak 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (lvs)", () => {
		expect(p.parse("Salamans mācītājs 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mācītājs 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Māc 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (lvs)", () => {
		expect(p.parse("Dziesmu dziesma 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Augstā dziesma 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Augst.dz 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Dz 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (lvs)", () => {
		expect(p.parse("Jeremijas 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremija 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (lvs)", () => {
		expect(p.parse("Ecechiela 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ecehiēla 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ecēhiēla 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ecehiēls 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eceh 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ech 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (lvs)", () => {
		expect(p.parse("Daniēla 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daniēls 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (lvs)", () => {
		expect(p.parse("Hozejas 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hozeja 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoz 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (lvs)", () => {
		expect(p.parse("Joēla 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joēls 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joēl 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (lvs)", () => {
		expect(p.parse("Amosa 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (lvs)", () => {
		expect(p.parse("Obadija 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadjas 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (lvs)", () => {
		expect(p.parse("Jonas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (lvs)", () => {
		expect(p.parse("Michas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mihas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Miha 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mih 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (lvs)", () => {
		expect(p.parse("Nachuma 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahuma 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahūma 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nakums 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nak 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (lvs)", () => {
		expect(p.parse("Habakuka 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuks 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habak 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (lvs)", () => {
		expect(p.parse("Cefanija 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Cefanjas 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Cef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (lvs)", () => {
		expect(p.parse("Hagaja 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (lvs)", () => {
		expect(p.parse("Caharijas 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Cakarijas 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zaharijas 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zaharija 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zaha 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Cah 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zah 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (lvs)", () => {
		expect(p.parse("Maleachija 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Maleahija 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malahija 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lvs)", () => {
		expect(p.parse("Mateja Evaņg̒elijs 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mateja evaņģēlijs 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mateja ev. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mateja 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lvs)", () => {
		expect(p.parse("Marka Evaņg̒elijs 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marka evaņģēlijs 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marka ev. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lvs)", () => {
		expect(p.parse("Lūkas Evaņg̒elijs 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lūkas evaņģēlijs 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lūkas ev. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lūkas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lūk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lvs)", () => {
		expect(p.parse("Jāņa 1. Vēstule 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Jāņ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Jņ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lvs)", () => {
		expect(p.parse("Jāņa 2. Vēstule 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Jāņ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Jņ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lvs)", () => {
		expect(p.parse("Jāņa 3. Vēstule 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jāņa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jāņ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jņ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lvs)", () => {
		expect(p.parse("Jāņa Evaņg̒elijs 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jāņa evaņģēlijs 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jāņa ev. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jāņa 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jāņ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jņ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lvs)", () => {
		expect(p.parse("1 Jāņa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jāņa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pirmā Jāņa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pirmā. Jāņa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pāvila Jāņa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pāvila. Jāņa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lvs)", () => {
		expect(p.parse("2 Jāņa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jāņa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Otra Jāņa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Otra. Jāņa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Pāvila Jāņa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Pāvila. Jāņa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lvs)", () => {
		expect(p.parse("3 Jāņa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jāņa 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book Acts (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lvs)", () => {
		expect(p.parse("Apustuļu darbi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ap.darb 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apd 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lvs)", () => {
		expect(p.parse("Pāvilavēstulē Romiešiem 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romiešiem 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lvs)", () => {
		expect(p.parse("1 1. Vēstule Korintiešiem 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintiešiem 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. 1. Vēstule Korintiešiem 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintiešiem 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pirmā 1. Vēstule Korintiešiem 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pirmā Korintiešiem 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pirmā. 1. Vēstule Korintiešiem 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pirmā. Korintiešiem 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pāvila 1. Vēstule Korintiešiem 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pāvila Korintiešiem 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pāvila. 1. Vēstule Korintiešiem 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pāvila. Korintiešiem 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lvs)", () => {
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lvs)", () => {
		expect(p.parse("2 2. Vēstule Korintiešiem 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintiešiem 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. 2. Vēstule Korintiešiem 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintiešiem 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Otra 2. Vēstule Korintiešiem 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Otra Korintiešiem 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Otra. 2. Vēstule Korintiešiem 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Otra. Korintiešiem 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Pāvila 2. Vēstule Korintiešiem 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Pāvila Korintiešiem 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Pāvila. 2. Vēstule Korintiešiem 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Pāvila. Korintiešiem 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lvs)", () => {
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lvs)", () => {
		expect(p.parse("Pāvila Vēstule Kolosiešiem 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosiešiem 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lvs)", () => {
		expect(p.parse("Pāvila Vēstule Galatiešiem 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatiešiem 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lvs)", () => {
		expect(p.parse("Pāvila Vēstule Efeziešiem 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesiešiem 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeziešiem 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lvs)", () => {
		expect(p.parse("Pāvila Vēstule Filipiešiem 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipiešiem 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lvs)", () => {
		expect(p.parse("1Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lvs)", () => {
		expect(p.parse("2 2. Vēstule Tesaloniķiešiem 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesaloniķiešiem 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonīkiešiem 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. 2. Vēstule Tesaloniķiešiem 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloniķiešiem 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonīkiešiem 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Otra 2. Vēstule Tesaloniķiešiem 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Otra Tesaloniķiešiem 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Otra Tesalonīkiešiem 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Otra. 2. Vēstule Tesaloniķiešiem 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Otra. Tesaloniķiešiem 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Otra. Tesalonīkiešiem 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pāvila 2. Vēstule Tesaloniķiešiem 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pāvila Tesaloniķiešiem 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pāvila Tesalonīkiešiem 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pāvila. 2. Vēstule Tesaloniķiešiem 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pāvila. Tesaloniķiešiem 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pāvila. Tesalonīkiešiem 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lvs)", () => {
		expect(p.parse("1 1. Vēstule Tesalonikiešiem 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesaloniķiešiem 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonīkiešiem 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. 1. Vēstule Tesalonikiešiem 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloniķiešiem 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonīkiešiem 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pirmā 1. Vēstule Tesalonikiešiem 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pirmā Tesaloniķiešiem 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pirmā Tesalonīkiešiem 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pirmā. 1. Vēstule Tesalonikiešiem 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pirmā. Tesaloniķiešiem 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pirmā. Tesalonīkiešiem 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pāvila 1. Vēstule Tesalonikiešiem 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pāvila Tesaloniķiešiem 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pāvila Tesalonīkiešiem 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pāvila. 1. Vēstule Tesalonikiešiem 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pāvila. Tesaloniķiešiem 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pāvila. Tesalonīkiešiem 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lvs)", () => {
		expect(p.parse("2Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lvs)", () => {
		expect(p.parse("1 1. Vēstule Timotejam 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotejam 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. 1. Vēstule Timotejam 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotejam 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pirmā 1. Vēstule Timotejam 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pirmā Timotejam 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pirmā. 1. Vēstule Timotejam 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pirmā. Timotejam 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pāvila 1. Vēstule Timotejam 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pāvila Timotejam 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pāvila. 1. Vēstule Timotejam 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pāvila. Timotejam 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lvs)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lvs)", () => {
		expect(p.parse("2 2. Vēstule Timotejam 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotejam 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. 2. Vēstule Timotejam 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotejam 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Otra 2. Vēstule Timotejam 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Otra Timotejam 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Otra. 2. Vēstule Timotejam 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Otra. Timotejam 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Pāvila 2. Vēstule Timotejam 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Pāvila Timotejam 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Pāvila. 2. Vēstule Timotejam 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Pāvila. Timotejam 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lvs)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lvs)", () => {
		expect(p.parse("Pāvila Vēstule Tītam 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titam 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titum 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lvs)", () => {
		expect(p.parse("Pāvila Vēstule Filemonam 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemonam 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lvs)", () => {
		expect(p.parse("Vēstule Ebrējiem 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebrejiem 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lvs)", () => {
		expect(p.parse("Jēkaba Vēstule 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jēkaba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jēk 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lvs)", () => {
		expect(p.parse("1 Pētera 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pētera 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pirmā Pētera 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pirmā. Pētera 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pāvila Pētera 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pāvila. Pētera 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lvs)", () => {
		expect(p.parse("2 Pētera 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pētera 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Otra Pētera 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Otra. Pētera 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pāvila Pētera 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pāvila. Pētera 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lvs)", () => {
		expect(p.parse("Pēteŗa 1. Vēstule 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pēt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lvs)", () => {
		expect(p.parse("Pēteŗa 2. Vēstule 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pēt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lvs)", () => {
		expect(p.parse("Jūdas Vēstule 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jūdas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jūd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (lvs)", () => {
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (lvs)", () => {
		expect(p.parse("Judith 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (lvs)", () => {
		expect(p.parse("Baruch 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (lvs)", () => {
		expect(p.parse("1Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (lvs)", () => {
		expect(p.parse("2Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (lvs)", () => {
		expect(p.parse("3Mak 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (lvs)", () => {
		expect(p.parse("4 Maccabees 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Mak 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (lvs)", () => {
		expect(p.parse("1 Maccabees 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Maccabees 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pirmā Maccabees 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pirmā. Maccabees 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pāvila Maccabees 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pāvila. Maccabees 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (lvs)", () => {
		expect(p.parse("2 Maccabees 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Maccabees 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Otra Maccabees 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Otra. Maccabees 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Pāvila Maccabees 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Pāvila. Maccabees 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (lvs)", () => {
		expect(p.parse("3 Maccabees 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Maccabees 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Preferred book names (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (lvs)", () => {
		expect(p.parse("1 Esdras (Greek) 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Sirach (Ecclesiasticus) 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Parser helper should handle titles (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (lvs)", () => {
		expect(p.parse("Ps 3 title, 4:2, 5:title").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle book ranges (lvs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (lvs)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Jāņa 1. Vēstule - Jāņa 3. Vēstule").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Jāņa 1. Vēstule – Jāņa 3. Vēstule").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Jāņa 1. Vēstule — Jāņa 3. Vēstule").osis()).toEqual("1John.1-3John.1");
	});
});

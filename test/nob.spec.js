"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nob.js";

describe("Localized book Gen (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (nob)", () => {
		expect(p.parse("Første Mosebok 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mosebok 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mosebok 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mos 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (nob)", () => {
		expect(p.parse("Andre Mosebok 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mosebok 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mosebok 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mos 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (nob)", () => {
		expect(p.parse("Tredje Mosebok 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mosebok 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mosebok 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mos 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (nob)", () => {
		expect(p.parse("Fjerde Mosebok 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mosebok 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mosebok 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mos 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (nob)", () => {
		expect(p.parse("Sirak 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (nob)", () => {
		expect(p.parse("Salomos visdom 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Visd 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (nob)", () => {
		expect(p.parse("Klagesangene 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Klag 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (nob)", () => {
		expect(p.parse("Jeremias brev 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Jer br 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nob)", () => {
		expect(p.parse("Johannes' åpenbaring 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Johannes’ åpenbaring 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Johannesʼ åpenbaring 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Åpenbaringen 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Åp 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (nob)", () => {
		expect(p.parse("Femte Mosebok 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mosebok 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mosebok 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mos 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (nob)", () => {
		expect(p.parse("Josvas bok 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josva 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (nob)", () => {
		expect(p.parse("Dommernes bok 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Dommerne bok 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Dommerne 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Dom 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (nob)", () => {
		expect(p.parse("Ruts bok 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (nob)", () => {
		expect(p.parse("Profeten Jesaja 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jesaja 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jes 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nob)", () => {
		expect(p.parse("1 Samuelsbok 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuelsbok 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Første Samuelsbok 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Første Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Første Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Første. Samuelsbok 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Første. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Første. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nob)", () => {
		expect(p.parse("2 Samuelsbok 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuelsbok 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Andre Samuelsbok 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Andre Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Andre Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Andre. Samuelsbok 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Andre. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Andre. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nob)", () => {
		expect(p.parse("1 Kongebok 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kong 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kongebok 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kong 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Første Kongebok 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Første Kong 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Første. Kongebok 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Første. Kong 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nob)", () => {
		expect(p.parse("2 Kongebok 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kong 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kongebok 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kong 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Andre Kongebok 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Andre Kong 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Andre. Kongebok 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Andre. Kong 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nob)", () => {
		expect(p.parse("1 Krønikebok 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krøn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Krønikebok 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Krøn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Første Krønikebok 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Første Krøn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Første. Krønikebok 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Første. Krøn 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nob)", () => {
		expect(p.parse("2 Krønikebok 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krøn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Krønikebok 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Krøn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Andre Krønikebok 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Andre Krøn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Andre. Krønikebok 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Andre. Krøn 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (nob)", () => {
		expect(p.parse("Esras bok 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (nob)", () => {
		expect(p.parse("Nehemjas bok 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemja 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (nob)", () => {
		expect(p.parse("Jobs bok 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (nob)", () => {
		expect(p.parse("Salmenes bok 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salmene 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sal 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (nob)", () => {
		expect(p.parse("Salomos Ordspråk 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ordspråkene 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ordsp 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (nob)", () => {
		expect(p.parse("Forkynneren 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Fork 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (nob)", () => {
		expect(p.parse("Salomos Høysangen 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Høysangen 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Høys 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (nob)", () => {
		expect(p.parse("Profeten Jeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (nob)", () => {
		expect(p.parse("Profeten Esekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (nob)", () => {
		expect(p.parse("Profeten Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (nob)", () => {
		expect(p.parse("Profeten Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (nob)", () => {
		expect(p.parse("Profeten Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (nob)", () => {
		expect(p.parse("Profeten Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (nob)", () => {
		expect(p.parse("Profeten Obadja 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadja 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (nob)", () => {
		expect(p.parse("Profeten Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (nob)", () => {
		expect(p.parse("Profeten Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (nob)", () => {
		expect(p.parse("Profeten Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (nob)", () => {
		expect(p.parse("Profeten Habakkuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakkuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (nob)", () => {
		expect(p.parse("Profeten Sefanja 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefanja 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (nob)", () => {
		expect(p.parse("Profeten Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (nob)", () => {
		expect(p.parse("Profeten Sakarja 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sakarja 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (nob)", () => {
		expect(p.parse("Profeten Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nob)", () => {
		expect(p.parse("Matteus’ evangelium 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matteus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nob)", () => {
		expect(p.parse("Markus’ evangelium 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nob)", () => {
		expect(p.parse("Lukas’ evangelium 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nob)", () => {
		expect(p.parse("Tredje Johannesbrev 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nob)", () => {
		expect(p.parse("1 Johannesbrev 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johannesbrev 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Første Johannesbrev 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Første Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Første Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Første. Johannesbrev 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Første. Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Første. Joh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nob)", () => {
		expect(p.parse("2 Johannesbrev 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johannesbrev 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Andre Johannesbrev 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Andre Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Andre Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Andre. Johannesbrev 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Andre. Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Andre. Joh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nob)", () => {
		expect(p.parse("Johannes’ evangelium 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Johannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nob)", () => {
		expect(p.parse("Apostlenes gjerninger 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apg 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nob)", () => {
		expect(p.parse("Romerbrevet 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romerne 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nob)", () => {
		expect(p.parse("1 Korinterbrev 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinter 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinterbrev 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinter 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første Korinterbrev 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første Korinter 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første. Korinterbrev 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første. Korinter 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nob)", () => {
		expect(p.parse("2 Korinterbrev 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinter 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinterbrev 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinter 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andre Korinterbrev 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andre Korinter 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andre Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andre. Korinterbrev 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andre. Korinter 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andre. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nob)", () => {
		expect(p.parse("Kolosserbrevet 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosserne 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nob)", () => {
		expect(p.parse("Galaterbrevet 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galaterne 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nob)", () => {
		expect(p.parse("Efeserbrevet 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeserne 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nob)", () => {
		expect(p.parse("Filipperbrevet 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipperne 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nob)", () => {
		expect(p.parse("1 Tessalonikerbrev 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tessaloniker 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessalonikerbrev 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessaloniker 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Første Tessalonikerbrev 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Første Tessaloniker 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Første Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Første. Tessalonikerbrev 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Første. Tessaloniker 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Første. Tess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nob)", () => {
		expect(p.parse("2 Tessalonikerbrev 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tessaloniker 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessalonikerbrev 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessaloniker 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Andre Tessalonikerbrev 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Andre Tessaloniker 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Andre Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Andre. Tessalonikerbrev 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Andre. Tessaloniker 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Andre. Tess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nob)", () => {
		expect(p.parse("1 Timoteusbrev 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteusbrev 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Første Timoteusbrev 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Første Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Første Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Første. Timoteusbrev 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Første. Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Første. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nob)", () => {
		expect(p.parse("2 Timoteusbrev 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteusbrev 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Andre Timoteusbrev 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Andre Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Andre Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Andre. Timoteusbrev 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Andre. Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Andre. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nob)", () => {
		expect(p.parse("Titusbrevet 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nob)", () => {
		expect(p.parse("Filemonbrevet 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nob)", () => {
		expect(p.parse("Hebreerbrevet 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebreerne 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nob)", () => {
		expect(p.parse("Jakobs Brev 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nob)", () => {
		expect(p.parse("1 Petersbrev 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petersbrev 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Første Petersbrev 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Første Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Første Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Første. Petersbrev 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Første. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Første. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nob)", () => {
		expect(p.parse("2 Petersbrev 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petersbrev 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Andre Petersbrev 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Andre Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Andre Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Andre. Petersbrev 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Andre. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Andre. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nob)", () => {
		expect(p.parse("Judas’ brev 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (nob)", () => {
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (nob)", () => {
		expect(p.parse("Judit 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (nob)", () => {
		expect(p.parse("Baruk 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (nob)", () => {
		expect(p.parse("1 Makkabeerbok 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makk 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makkabeerbok 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makk 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Første Makkabeerbok 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Første Makk 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Første. Makkabeerbok 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Første. Makk 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (nob)", () => {
		expect(p.parse("2 Makkabeerbok 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makk 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makkabeerbok 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makk 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Andre Makkabeerbok 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Andre Makk 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Andre. Makkabeerbok 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Andre. Makk 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Esth (nob)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (nob)", () => {
		expect(p.parse("Esters bok 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});

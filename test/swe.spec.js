"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/swe.js";

describe("Localized book Gen (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (swe)", () => {
		expect(p.parse("Första Moseboken 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Första Mosebok 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Första. Moseboken 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Första. Mosebok 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Moseboken 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mosebok 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Moseboken 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mosebok 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (swe)", () => {
		expect(p.parse("Andra Moseboken 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Andra Mosebok 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Andra. Moseboken 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Andra. Mosebok 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Moseboken 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mosebok 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Moseboken 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mosebok 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (swe)", () => {
		expect(p.parse("Tredje Moseboken 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tredje Mosebok 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tredje. Moseboken 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tredje. Mosebok 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3e Moseboken 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3e Mosebok 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3e. Moseboken 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3e. Mosebok 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Moseboken 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mosebok 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Moseboken 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mosebok 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (swe)", () => {
		expect(p.parse("Fjärde Moseboken 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Fjärde Mosebok 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Fjärde. Moseboken 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Fjärde. Mosebok 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Moseboken 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mosebok 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Moseboken 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mosebok 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Deut (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (swe)", () => {
		expect(p.parse("Femte Moseboken 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Femte Mosebok 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Femte. Moseboken 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Femte. Mosebok 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Moseboken 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mosebok 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Moseboken 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mosebok 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Gen (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (swe)", () => {
		expect(p.parse("1 Mosebok 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mos 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (swe)", () => {
		expect(p.parse("2 Mosebok 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mos 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (swe)", () => {
		expect(p.parse("Bel och Ormguden 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (swe)", () => {
		expect(p.parse("Leviticus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mosebok 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mos 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (swe)", () => {
		expect(p.parse("4 Mosebok 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mos 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (swe)", () => {
		expect(p.parse("Jesus Syraks vishet 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ecclesiasticus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ben Sira 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Syrak 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Syr 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (swe)", () => {
		expect(p.parse("Salomos vishet 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Vishetens bok 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Visheten 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Vish 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (swe)", () => {
		expect(p.parse("Klagovisorna 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Klag 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (swe)", () => {
		expect(p.parse("Jeremias brev 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Jer br 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (swe)", () => {
		expect(p.parse("Johannes Uppenbarelse 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Johannes apokalyps 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Uppenbarelseboken 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Upp 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (swe)", () => {
		expect(p.parse("Manasses’ bön 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manasses bön 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manasse bön 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Man 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (swe)", () => {
		expect(p.parse("Deuteronomium 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mosebok 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mos 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (swe)", () => {
		expect(p.parse("Josua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (swe)", () => {
		expect(p.parse("Domarboken 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Dom 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (swe)", () => {
		expect(p.parse("Ruts bok 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (swe)", () => {
		expect(p.parse("3 Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (swe)", () => {
		expect(p.parse("4 Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (swe)", () => {
		expect(p.parse("Första Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Första. Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esra 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 1Esd (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (swe)", () => {
		expect(p.parse("Tredje Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Tredje. Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3e Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3e. Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3 Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3. Esra 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (swe)", () => {
		expect(p.parse("Fjärde Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Fjärde. Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("4 Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("4. Esra 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 2Esd (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (swe)", () => {
		expect(p.parse("Andra Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Andra. Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esra 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (swe)", () => {
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (swe)", () => {
		expect(p.parse("Jesajas bok 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jesaja 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jes 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (swe)", () => {
		expect(p.parse("Första Samuelsboken 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Första. Samuelsboken 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuelsboken 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuelsboken 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (swe)", () => {
		expect(p.parse("Andra Samuelsboken 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Andra. Samuelsboken 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuelsboken 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuelsboken 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (swe)", () => {
		expect(p.parse("2 Samuelsboken 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (swe)", () => {
		expect(p.parse("1 Samuelsboken 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (swe)", () => {
		expect(p.parse("Första Konungaboken 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Första Kungaboken 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Första. Konungaboken 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Första. Kungaboken 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Konungaboken 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kungaboken 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Konungaboken 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kungaboken 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (swe)", () => {
		expect(p.parse("Andra Konungaboken 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Andra Kungaboken 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Andra. Konungaboken 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Andra. Kungaboken 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Konungaboken 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kungaboken 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Konungaboken 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kungaboken 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (swe)", () => {
		expect(p.parse("2 Kungaboken 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kung 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kon 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (swe)", () => {
		expect(p.parse("1 Kungaboken 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kung 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kon 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (swe)", () => {
		expect(p.parse("Första Krönikeboken 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Första. Krönikeboken 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krönikeboken 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Krönikeboken 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (swe)", () => {
		expect(p.parse("Andra Krönikeboken 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Andra. Krönikeboken 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krönikeboken 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Krönikeboken 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (swe)", () => {
		expect(p.parse("2 Krönikeboken 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krön 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (swe)", () => {
		expect(p.parse("1 Krönikeboken 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krön 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (swe)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (swe)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemja 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (swe)", () => {
		expect(p.parse("Ester enligt den grekiska texten 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Est gr 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (swe)", () => {
		expect(p.parse("Esters bok 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (swe)", () => {
		expect(p.parse("Jobs bok 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (swe)", () => {
		expect(p.parse("Psaltaren 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalmen 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (swe)", () => {
		expect(p.parse("Asarias’ bön 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Asarjas’ bön 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Asarias bön 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Asarjas bön 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (swe)", () => {
		expect(p.parse("Ordspråksboken 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ords 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ord 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (swe)", () => {
		expect(p.parse("Predikarens bok 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Predikarboken 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Predikaren 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Pred 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (swe)", () => {
		expect(p.parse("De tre männens lovsång 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (swe)", () => {
		expect(p.parse("Höga visan 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Höga Visan 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hoga v 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Höga V 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Högav 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Höga 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (swe)", () => {
		expect(p.parse("Jeremias 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (swe)", () => {
		expect(p.parse("Hesekiels bok 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hesekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hes 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (swe)", () => {
		expect(p.parse("Daniels bok 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (swe)", () => {
		expect(p.parse("Hoseas bok 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (swe)", () => {
		expect(p.parse("Joels bok 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (swe)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (swe)", () => {
		expect(p.parse("Obadjas bok 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadja 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (swe)", () => {
		expect(p.parse("Jonas bok 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jona bok 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (swe)", () => {
		expect(p.parse("Mikas bok 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mik 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (swe)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (swe)", () => {
		expect(p.parse("Habackuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (swe)", () => {
		expect(p.parse("Sefanjas bok 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefanias 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefanja 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (swe)", () => {
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haggaj 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagg 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (swe)", () => {
		expect(p.parse("Sakaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sakarja 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (swe)", () => {
		expect(p.parse("Malakias 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (swe)", () => {
		expect(p.parse("Mattei evangelium 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matteusevangeliet 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matteus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (swe)", () => {
		expect(p.parse("Markus evangelium 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markusevangeliet 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (swe)", () => {
		expect(p.parse("Lukas evangelium 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukasevangeliet 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (swe)", () => {
		expect(p.parse("Första Johannesbrevet 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Första. Johannesbrevet 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johannesbrevet 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johannesbrevet 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (swe)", () => {
		expect(p.parse("Andra Johannesbrevet 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Andra. Johannesbrevet 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johannesbrevet 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johannesbrevet 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (swe)", () => {
		expect(p.parse("Tredje Johannesbrevet 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tredje. Johannesbrevet 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3e Johannesbrevet 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3e. Johannesbrevet 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johannesbrevet 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Johannesbrevet 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (swe)", () => {
		expect(p.parse("Johannes första brev 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johannesbrevet 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (swe)", () => {
		expect(p.parse("Johannes andra brev 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johannesbrevet 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (swe)", () => {
		expect(p.parse("Johannes tredje brev 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johannesbrevet 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (swe)", () => {
		expect(p.parse("Johannis evangelium 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Johannesevangeliet 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Johannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (swe)", () => {
		expect(p.parse("Apostlagärningarna 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apg 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (swe)", () => {
		expect(p.parse("Romarbrevet 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (swe)", () => {
		expect(p.parse("Första Korinthierbrevet 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Första Korintierbrevet 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Första Korintherbrevet 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Första Korinterbrevet 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Första. Korinthierbrevet 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Första. Korintierbrevet 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Första. Korintherbrevet 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Första. Korinterbrevet 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinthierbrevet 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintierbrevet 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintherbrevet 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinterbrevet 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinthierbrevet 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintierbrevet 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintherbrevet 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinterbrevet 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (swe)", () => {
		expect(p.parse("Andra Korinthierbrevet 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andra Korintierbrevet 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andra Korintherbrevet 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andra Korinterbrevet 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andra. Korinthierbrevet 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andra. Korintierbrevet 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andra. Korintherbrevet 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andra. Korinterbrevet 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinthierbrevet 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintierbrevet 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintherbrevet 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinterbrevet 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinthierbrevet 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintierbrevet 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintherbrevet 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinterbrevet 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (swe)", () => {
		expect(p.parse("2 Korinthierbrevet 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (swe)", () => {
		expect(p.parse("1 Korinthierbrevet 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (swe)", () => {
		expect(p.parse("Galaterbrefvet 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galaterbrevet 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (swe)", () => {
		expect(p.parse("Efesierbrevet 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeserbrevet 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (swe)", () => {
		expect(p.parse("Filipperbrevet 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (swe)", () => {
		expect(p.parse("Kolosserbrevet 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (swe)", () => {
		expect(p.parse("Första Thessalonikerbrevet 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Första Tessalonikerbrevet 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Första. Thessalonikerbrevet 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Första. Tessalonikerbrevet 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thessalonikerbrevet 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tessalonikerbrevet 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonikerbrevet 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessalonikerbrevet 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (swe)", () => {
		expect(p.parse("Andra Thessalonikerbrevet 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Andra Tessalonikerbrevet 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Andra. Thessalonikerbrevet 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Andra. Tessalonikerbrevet 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thessalonikerbrevet 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tessalonikerbrevet 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonikerbrevet 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessalonikerbrevet 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (swe)", () => {
		expect(p.parse("2 Thessalonikerbrevet 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (swe)", () => {
		expect(p.parse("1 Thessalonikerbrevet 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (swe)", () => {
		expect(p.parse("Första Timotheosbrevet 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Första Timoteusbrevet 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Första. Timotheosbrevet 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Första. Timoteusbrevet 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotheosbrevet 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteusbrevet 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotheosbrevet 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteusbrevet 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (swe)", () => {
		expect(p.parse("Andra Timotheosbrevet 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Andra Timoteusbrevet 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Andra. Timotheosbrevet 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Andra. Timoteusbrevet 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotheosbrevet 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteusbrevet 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotheosbrevet 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteusbrevet 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (swe)", () => {
		expect(p.parse("2 Timotheosbrevet 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (swe)", () => {
		expect(p.parse("1 Timotheosbrevet 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (swe)", () => {
		expect(p.parse("Brevet till Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titusbrevet 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (swe)", () => {
		expect(p.parse("Brevet till Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemonbrevet 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Till Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (swe)", () => {
		expect(p.parse("Hebreerbrevet 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebréerbrevet 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (swe)", () => {
		expect(p.parse("Jakobs epistel 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakobsbrevet 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakobs brev 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (swe)", () => {
		expect(p.parse("Första Petrusbrevet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Första. Petrusbrevet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petrusbrevet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrusbrevet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (swe)", () => {
		expect(p.parse("Andra Petrusbrevet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Andra. Petrusbrevet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petrusbrevet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrusbrevet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (swe)", () => {
		expect(p.parse("Petrus andra brev 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petrusbrevet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (swe)", () => {
		expect(p.parse("Petrus första brev 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petrusbrevet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (swe)", () => {
		expect(p.parse("Judas epistel 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judasbrevet 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judas brev 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (swe)", () => {
		expect(p.parse("Tobits bok 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (swe)", () => {
		expect(p.parse("Judit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (swe)", () => {
		expect(p.parse("Baruks bok 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Baruk 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (swe)", () => {
		expect(p.parse("Susanna i badet 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Susanna 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (swe)", () => {
		expect(p.parse("Första Mackabeerboken 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Första Mackabéerboken 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Första. Mackabeerboken 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Första. Mackabéerboken 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mackabeerboken 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mackabéerboken 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mackabeerboken 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mackabéerboken 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (swe)", () => {
		expect(p.parse("Andra Mackabeerboken 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Andra Mackabéerboken 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Andra. Mackabeerboken 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Andra. Mackabéerboken 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mackabeerboken 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mackabéerboken 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mackabeerboken 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mackabéerboken 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (swe)", () => {
		expect(p.parse("Tredje Mackabeerboken 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tredje Mackabéerboken 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tredje. Mackabeerboken 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tredje. Mackabéerboken 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3e Mackabeerboken 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3e Mackabéerboken 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3e. Mackabeerboken 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3e. Mackabéerboken 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mackabeerboken 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mackabéerboken 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Mackabeerboken 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Mackabéerboken 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (swe)", () => {
		expect(p.parse("Fjärde Mackabeerboken 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Fjärde Mackabéerboken 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Fjärde. Mackabeerboken 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Fjärde. Mackabéerboken 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mackabeerboken 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mackabéerboken 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Mackabeerboken 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Mackabéerboken 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (swe)", () => {
		expect(p.parse("2 Mackabeerboken 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mack 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (swe)", () => {
		expect(p.parse("3 Mackabéerboken 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mack 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (swe)", () => {
		expect(p.parse("4 Mackabéerboken 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mack 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (swe)", () => {
		expect(p.parse("1 Mackabeerboken 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mack 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Parser helper should handle ranges (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (swe)", () => {
		expect(p.parse("Titus 1:1 till 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1till2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 till 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (swe)", () => {
		expect(p.parse("Titus 1:1, kapitlen 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 kapitlen 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, kapitlet 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 kapitlet 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, kapitel 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 kapitel 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, kap. 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 kap. 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, kap 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 kap 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (swe)", () => {
		expect(p.parse("Exod 1:1 verser 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm verser 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 v. 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm v. 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 v 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm v 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (swe)", () => {
		expect(p.parse("Exod 1:1 och 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 och 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
		expect(p.parse("Exod 1:1 jfr. 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 jfr. 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
		expect(p.parse("Exod 1:1 jfr 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 jfr 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (swe)", () => {
		expect(p.parse("Ps 3 rubrik, 4:2, 5:rubrik").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'ff' (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'ff' (swe)", () => {
		expect(p.parse("Rev 3ff., 4:2ff.").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
		expect(p.parse("Rev 3ff, 4:2ff").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
		expect(p.parse("Rev 3f., 4:2f.").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
		expect(p.parse("Rev 3f, 4:2f").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
	});
});
describe("Parser helper should handle translations (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (swe)", () => {
		expect(p.parse("Lev 1 (B2000)").osis_and_translations()).toEqual([["Lev.1","B2000"]]);
		expect(p.parse("Lev 1 (SFB)").osis_and_translations()).toEqual([["Lev.1","SFB"]]);
		expect(p.parse("Lev 1 (B1917)").osis_and_translations()).toEqual([["Lev.1","B1917"]]);
		expect(p.parse("Lev 1 (SFB15)").osis_and_translations()).toEqual([["Lev.1","SFB15"]]);
	});
});
describe("Parser helper should handle book ranges (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (swe)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Första Johannesbrevet till Tredje Johannesbrevet").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (swe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (swe)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});

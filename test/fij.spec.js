"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/fij.js";

describe("Localized book Gen (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (fij)", () => {
		expect(p.parse("Nai Vakatekivu 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Vakatekivu 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Vteki 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (fij)", () => {
		expect(p.parse("Na Lako Yani 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Lako Yani 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Lako 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (fij)", () => {
		expect(p.parse("O Bele Kei Na Drakoni Daukata 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("3. Tn 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (fij)", () => {
		expect(p.parse("Na Vunau Ni Soro 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Vunau ni Soro 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Vsoro 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (fij)", () => {
		expect(p.parse("Na Tiko Voli Mai Na Lekutu 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Tiko Voli mai na Lekutu 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Na Tiko Mai Na Lekutu 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Tiko mai na Lekutu 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Tiko 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (fij)", () => {
		expect(p.parse("Siraki 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sr 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (fij)", () => {
		expect(p.parse("Yalomatua 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Ym 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (fij)", () => {
		expect(p.parse("A Lele I Jeremaia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lele i Jeremaia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lele 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (fij)", () => {
		expect(p.parse("Nai Vakatakila I Joni 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ai Vakatakila 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Vakatakila 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Vtaki 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (fij)", () => {
		expect(p.parse("Nai Vakarua 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Vakarua 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Vrua 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (fij)", () => {
		expect(p.parse("Ai Vola Kei Josua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josua 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (fij)", () => {
		expect(p.parse("A Kedrai Vola Na Dauveilewai 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Na Dauveilewai 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Dauveilewai 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Dvei 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (fij)", () => {
		expect(p.parse("Ai Vola Kei Ruci 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruci 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (fij)", () => {
		expect(p.parse("Ai Vola I Isaia, na Parofita 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Aisea 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (fij)", () => {
		expect(p.parse("1 Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuela 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Sam (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (fij)", () => {
		expect(p.parse("Ai I Vola I Simueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Samu 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (fij)", () => {
		expect(p.parse("2 Ai Ni Vola I Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Ai Ni Vola I Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Ai Ni Vola I Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuela 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (fij)", () => {
		expect(p.parse("2Samu 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (fij)", () => {
		expect(p.parse("1 A Kedrai Vola Na Tui 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Tui 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. A Kedrai Vola Na Tui 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Tui 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. A Kedrai Vola Na Tui 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Tui 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Kgs (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (fij)", () => {
		expect(p.parse("1Tui 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (fij)", () => {
		expect(p.parse("2 Ai Kedrai Vola Na Tui 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Tui 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ai Kedrai Vola Na Tui 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Tui 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Ai Kedrai Vola Na Tui 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Tui 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (fij)", () => {
		expect(p.parse("2Tui 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (fij)", () => {
		expect(p.parse("1 A Veika Sa Caka E Na Veigauna 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Veigauna 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. A Veika Sa Caka E Na Veigauna 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Veigauna 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. A Veika Sa Caka E Na Veigauna 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Veigauna 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (fij)", () => {
		expect(p.parse("2 A Veika Sa Caka E Na Veigauna 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Veigauna 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. A Veika Sa Caka E Na Veigauna 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Veigauna 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. A Veika Sa Caka E Na Veigauna 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Veigauna 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (fij)", () => {
		expect(p.parse("1Vei 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (fij)", () => {
		expect(p.parse("2Vei 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (fij)", () => {
		expect(p.parse("Ai Vola I Esira 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esera 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (fij)", () => {
		expect(p.parse("Ai Vola I Niemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Niemaia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nie 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (fij)", () => {
		expect(p.parse("Ai Vola Kei Jope 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jope 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book PrAzar (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (fij)", () => {
		expect(p.parse("Na Masu I Asaria 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("1. Tn 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (fij)", () => {
		expect(p.parse("Ai Vola Vakaibalebale 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Na Vosa Vakaibalebale 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Vosa Vakaibalebale 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Vosavakaibalebale 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Vbale 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (fij)", () => {
		expect(p.parse("A Nonai Vola Na Dauvunau 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Na Dauvunau 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Dauvunau 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Dvu 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (fij)", () => {
		expect(p.parse("Na Nodratou Sere Na Tolu Na Cauravou 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (fij)", () => {
		expect(p.parse("Na Sere I Solomoni 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("A Meke I Solomoni 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sere i Solomoni 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sere 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (fij)", () => {
		expect(p.parse("Na Same 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Meke 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Same 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (fij)", () => {
		expect(p.parse("Ai Vola I Jeremaia Na Parofita 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremaia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jere 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (fij)", () => {
		expect(p.parse("Ai Vola I Isirieli Na Parofita 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Isikeli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Isi 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (fij)", () => {
		expect(p.parse("Ai Vola I Tanieli Na Parofita 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Taniela 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Tani 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (fij)", () => {
		expect(p.parse("Ai Vola I Osea Na Parofita 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Osea 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (fij)", () => {
		expect(p.parse("Ai Vola I Joeli Na Parofita 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joeli 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (fij)", () => {
		expect(p.parse("Ai Vola I Amosi Na Parofita 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Emosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Emo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (fij)", () => {
		expect(p.parse("Ai Vola I Opatiya Na Parofita. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ai Vola I Opatiya Na Parofita 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Opetaia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ope 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (fij)", () => {
		expect(p.parse("Ai Vola I Jona Na Parofita 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (fij)", () => {
		expect(p.parse("Ai Vola I Maika Na Parofita 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Maika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (fij)", () => {
		expect(p.parse("Ai Vola I Neumi Na Parofita. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Ai Vola I Neumi Na Parofita 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Neumi 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (fij)", () => {
		expect(p.parse("Ai Vola I Epakuki Na Parofita 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Apakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Apa 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (fij)", () => {
		expect(p.parse("Ai Vola I Sifaniya Na Parofita 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefanaia 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefa 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (fij)", () => {
		expect(p.parse("Ai Vola I Akei Na Parofita 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Akeai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ake 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (fij)", () => {
		expect(p.parse("Ai Vola I Sikariya Na Parofita 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sakaraia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Saka 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (fij)", () => {
		expect(p.parse("Ai Vola I Malakai Na Parofita 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malakai 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mala 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (fij)", () => {
		expect(p.parse("Maciu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (fij)", () => {
		expect(p.parse("Marika 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mari 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (fij)", () => {
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (fij)", () => {
		expect(p.parse("1Joni 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (fij)", () => {
		expect(p.parse("2Joni 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (fij)", () => {
		expect(p.parse("III. Ai Vola I Joni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Joni 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (fij)", () => {
		expect(p.parse("1 Ai Vola I Joni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ai Vola I Joni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Ai Vola I Joni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Joni 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (fij)", () => {
		expect(p.parse("2 Ai Vola I Joni. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ai Vola I Joni. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Ai Vola I Joni. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Joni 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (fij)", () => {
		expect(p.parse("Joni 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (fij)", () => {
		expect(p.parse("A Cakacaka 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Cakacaka 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Caka 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (fij)", () => {
		expect(p.parse("Vei Ira Na Kai Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (fij)", () => {
		expect(p.parse("1 Vei Ira Na Kai Korinica 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinica 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Vei Ira Na Kai Korinica 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinica 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Vei Ira Na Kai Korinica 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinica 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (fij)", () => {
		expect(p.parse("2 Vei Ira Na Kai Korinica 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinica 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Vei Ira Na Kai Korinica 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinica 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Vei Ira Na Kai Korinica 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinica 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (fij)", () => {
		expect(p.parse("1Kori 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (fij)", () => {
		expect(p.parse("2Kori 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (fij)", () => {
		expect(p.parse("Vei Ira Na Kai Kolosa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolo 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (fij)", () => {
		expect(p.parse("Vei Ira Na Kai Kalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kala 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (fij)", () => {
		expect(p.parse("Vei Ira Na Kai Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (fij)", () => {
		expect(p.parse("Vei Ira Na Kai Filipai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fpai 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (fij)", () => {
		expect(p.parse("1 Vei Ira Na Kai Cesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Cesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Vei Ira Na Kai Cesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Cesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Vei Ira Na Kai Cesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Cesalonaika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (fij)", () => {
		expect(p.parse("2 Vei Ira Na Kai Cesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Cesalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Vei Ira Na Kai Cesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Cesalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Vei Ira Na Kai Cesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Cesalonaika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (fij)", () => {
		expect(p.parse("1Cesa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (fij)", () => {
		expect(p.parse("2Cesa 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (fij)", () => {
		expect(p.parse("1 Timoci 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoci 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoci 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (fij)", () => {
		expect(p.parse("2 Timoci 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoci 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoci 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (fij)", () => {
		expect(p.parse("1Timo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (fij)", () => {
		expect(p.parse("2Timo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (fij)", () => {
		expect(p.parse("Vei Taito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Taito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (fij)", () => {
		expect(p.parse("Vei Filimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fmoni 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (fij)", () => {
		expect(p.parse("Vei Ira Na Iperiu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Iperiu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ipe 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (fij)", () => {
		expect(p.parse("Ai Vola I Jemesi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jemesa 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jeme 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (fij)", () => {
		expect(p.parse("1 Ai Vola I Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ai Vola I Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Ai Vola I Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 1Pet (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (fij)", () => {
		expect(p.parse("1Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (fij)", () => {
		expect(p.parse("2 Ai Vola I Petero. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Ai Vola I Petero. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Ai Vola I Petero. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (fij)", () => {
		expect(p.parse("2Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (fij)", () => {
		expect(p.parse("Ai Vola I Juta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juta 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (fij)", () => {
		expect(p.parse("Tobita 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tb 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (fij)", () => {
		expect(p.parse("Udite 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Ud 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (fij)", () => {
		expect(p.parse("Baruki 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Br 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (fij)", () => {
		expect(p.parse("Na Ivola I Susana 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("2. Tn 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (fij)", () => {
		expect(p.parse("1 Makabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Makabe 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (fij)", () => {
		expect(p.parse("2 Makabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Makabe 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 1Macc (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (fij)", () => {
		expect(p.parse("1M 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (fij)", () => {
		expect(p.parse("2M 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Esth (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (fij)", () => {
		expect(p.parse("Ai Vola Kei Esiteri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esiteri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esi 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Preferred book names (fij)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (fij)", () => {
		expect(p.parse("3. O BELE KEI NA DRAKONI DAUKATA 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("1. NA MASU I ASARIA KEI NA NODRATOU SERE NA TOLU NA CAURAVOU ???? 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("2. NA IVOLA I SUSANA 1:1").osis()).toEqual("Sus.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hun.js";

describe("Localized book Gen (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (hun)", () => {
		expect(p.parse("Első Mózes 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Első. Mózes 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mózes 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mózes 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Mózes 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Mózes 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (hun)", () => {
		expect(p.parse("Második Mózes 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Második. Mózes 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mózes 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mózes 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Mózes 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Mózes 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (hun)", () => {
		expect(p.parse("Harmadik Mózes 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Harmadik. Mózes 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mózes 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mózes 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Mózes 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Mózes 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (hun)", () => {
		expect(p.parse("4 Mózes 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mózes 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Mózes 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Mózes 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Gen (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (hun)", () => {
		expect(p.parse("Teremtés 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mózes I 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Móz 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mz 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ter 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (hun)", () => {
		expect(p.parse("Kivonulás 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mózes II 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Móz 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mz 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kiv 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (hun)", () => {
		expect(p.parse("Baál és a sárkány 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bél és a sárkány 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bél 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (hun)", () => {
		expect(p.parse("Mózes III 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Leviták 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Móz 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mz 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (hun)", () => {
		expect(p.parse("Mózes IV 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Számok 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Móz 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mz 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Szám 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Wis (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (hun)", () => {
		expect(p.parse("Salamon bölcsessége 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Bölcsesség 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Bölcs 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (hun)", () => {
		expect(p.parse("Jeremiás siralmai 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Jeremiás sir 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Siralmak 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Siralm 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Siral 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Sir (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (hun)", () => {
		expect(p.parse("Sirák bölcsessége 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ecclesiasticus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirák fia 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book EpJer (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (hun)", () => {
		expect(p.parse("Jeremiás levele 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (hun)", () => {
		expect(p.parse("János jelenései 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apokalipszis 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Jelenések 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Jel 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (hun)", () => {
		expect(p.parse("Manassé imádsága 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manassze imája 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (hun)", () => {
		expect(p.parse("Második törvénykönyv 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Mózes ötödik könyve 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mózes 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Mózes V 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Móz 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("MTörv 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mz 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (hun)", () => {
		expect(p.parse("Józsué 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Józs 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (hun)", () => {
		expect(p.parse("Bírák 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Bír 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (hun)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (hun)", () => {
		expect(p.parse("Első Ezdrás 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Első. Ezdrás 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ezdrás 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Ezdrás 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Ezdrás 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Ezdrás 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (hun)", () => {
		expect(p.parse("Második Ezdrás 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Második. Ezdrás 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ezdrás 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Ezdrás 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Ezdrás 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Ezdrás 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (hun)", () => {
		expect(p.parse("Ezdrás I 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ezdrás 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ezd 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (hun)", () => {
		expect(p.parse("Ezdrás II 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ezdrás 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ezd 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (hun)", () => {
		expect(p.parse("Első Ezd 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Első. Ezd 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ezd 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Ezd 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Ezd 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Ezd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (hun)", () => {
		expect(p.parse("Második Ezd 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Második. Ezd 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ezd 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Ezd 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Ezd 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Ezd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (hun)", () => {
		expect(p.parse("Ezd 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (hun)", () => {
		expect(p.parse("Ézsaiás 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Izajás 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ésaiás 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ézs 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Iz 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hun)", () => {
		expect(p.parse("Első Sámuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Első Sám 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Első. Sámuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Első. Sám 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sámuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sám 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sámuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sám 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sámuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sám 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sámuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sám 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hun)", () => {
		expect(p.parse("Második Sámuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Második Sám 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Második. Sámuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Második. Sám 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sámuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sám 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sámuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sám 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sámuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sám 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sámuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sám 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hun)", () => {
		expect(p.parse("Sámuel II 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sámuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sám 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hun)", () => {
		expect(p.parse("Sámuel I 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sámuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sám 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hun)", () => {
		expect(p.parse("Első Királyok 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Első Kir 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Első. Királyok 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Első. Kir 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Királyok 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kir 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Királyok 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kir 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Királyok 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Kir 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Királyok 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Kir 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hun)", () => {
		expect(p.parse("Második Királyok 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Második Kir 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Második. Királyok 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Második. Kir 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Királyok 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kir 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Királyok 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kir 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Királyok 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Kir 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Királyok 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Kir 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hun)", () => {
		expect(p.parse("Királyok II 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Királyok 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kir 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hun)", () => {
		expect(p.parse("Királyok I 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Királyok 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kir 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hun)", () => {
		expect(p.parse("Első Krónika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Első Krón 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Első. Krónika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Első. Krón 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krónika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krón 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Krónika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Krón 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Krónika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Krón 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Krónika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Krón 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hun)", () => {
		expect(p.parse("Második Krónika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Második Krón 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Második. Krónika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Második. Krón 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krónika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krón 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Krónika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Krón 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Krónika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Krón 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Krónika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Krón 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hun)", () => {
		expect(p.parse("Krónikák II 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krónika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krón 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hun)", () => {
		expect(p.parse("Krónikák I 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krónika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krón 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (hun)", () => {
		expect(p.parse("Ezsdrás 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezsd 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (hun)", () => {
		expect(p.parse("Nehemiás 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (hun)", () => {
		expect(p.parse("Eszter könyvének kiegészítése 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (hun)", () => {
		expect(p.parse("Eszter 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Eszt 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (hun)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jób 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (hun)", () => {
		expect(p.parse("Zsoltárok 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zsolt 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (hun)", () => {
		expect(p.parse("Azáriás imádsága 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azáriás imája 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (hun)", () => {
		expect(p.parse("Példabeszédek 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Péld 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (hun)", () => {
		expect(p.parse("Prédikátor 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Préd 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (hun)", () => {
		expect(p.parse("Három fiatalember éneke 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (hun)", () => {
		expect(p.parse("Salamon éneke 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Énekek éneke 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Én 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (hun)", () => {
		expect(p.parse("Jeremiás 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (hun)", () => {
		expect(p.parse("Ezékiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (hun)", () => {
		expect(p.parse("Dániel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dán 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (hun)", () => {
		expect(p.parse("Hóseás 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ozeás 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hós 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oz 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (hun)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jóel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jóél 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jo 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (hun)", () => {
		expect(p.parse("Ámosz 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ámos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ámós 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ám 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (hun)", () => {
		expect(p.parse("Abdiás 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (hun)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jónás 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jón 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (hun)", () => {
		expect(p.parse("Mikeás 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mik 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (hun)", () => {
		expect(p.parse("Náhum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Náh 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (hun)", () => {
		expect(p.parse("Habakkuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (hun)", () => {
		expect(p.parse("Szefaniás 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Szofoniás 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofoniás 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zofóniás 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Szof 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (hun)", () => {
		expect(p.parse("Haggeus 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Aggeus 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (hun)", () => {
		expect(p.parse("Zakariás 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (hun)", () => {
		expect(p.parse("Malakiás 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (hun)", () => {
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Máté 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (hun)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Márk 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (hun)", () => {
		expect(p.parse("Lukács 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hun)", () => {
		expect(p.parse("János I 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 János 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hun)", () => {
		expect(p.parse("János II 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 János 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hun)", () => {
		expect(p.parse("János III 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 János 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hun)", () => {
		expect(p.parse("Első János 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Első Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Első. János 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Első. Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 János 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. János 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I János 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. János 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hun)", () => {
		expect(p.parse("Második János 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Második Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Második. János 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Második. Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 János 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. János 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II János 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. János 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hun)", () => {
		expect(p.parse("Harmadik János 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Harmadik Jn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Harmadik. János 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Harmadik. Jn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 János 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. János 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III János 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Jn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. János 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hun)", () => {
		expect(p.parse("János 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hun)", () => {
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (hun)", () => {
		expect(p.parse("Az apostolok cselekedetei 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apostolok cselekedetei 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Cselekedetek 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apostolok 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Az ApCsel 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ap. Csel 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ap Csel 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ApCsel 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (hun)", () => {
		expect(p.parse("Rómaiakhoz 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Róma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Róm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hun)", () => {
		expect(p.parse("Első Korinthusiakhoz 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Első Korinthus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Első Korintusi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Első Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Első. Korinthusiakhoz 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Első. Korinthus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Első. Korintusi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Első. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinthusiakhoz 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinthus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintusi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinthusiakhoz 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinthus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintusi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korinthusiakhoz 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korinthus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korintusi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinthusiakhoz 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinthus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korintusi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hun)", () => {
		expect(p.parse("Második Korinthusiakhoz 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Második Korinthus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Második Korintusi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Második Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Második. Korinthusiakhoz 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Második. Korinthus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Második. Korintusi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Második. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinthusiakhoz 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinthus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintusi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinthusiakhoz 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinthus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintusi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korinthusiakhoz 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korinthus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korintusi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinthusiakhoz 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinthus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korintusi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hun)", () => {
		expect(p.parse("2 Korinthusiakhoz 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hun)", () => {
		expect(p.parse("1 Korinthusiakhoz 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (hun)", () => {
		expect(p.parse("Galatákhoz 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galata 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (hun)", () => {
		expect(p.parse("Epheszosziakhoz 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efezusiakhoz 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efézusiakhoz 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efezus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (hun)", () => {
		expect(p.parse("Philippibeliekhez 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filippiekhez 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flippiekhez 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filippi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (hun)", () => {
		expect(p.parse("Kolosszébeliekhez 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosszeieknek 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosséiakhoz 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolossé 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hun)", () => {
		expect(p.parse("Első Thesszalonikaiakhoz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Első Tesszalonikaiakhoz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Első Thesszalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Első Tesszalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Első Thessz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Első Tessz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Első. Thesszalonikaiakhoz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Első. Tesszalonikaiakhoz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Első. Thesszalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Első. Tesszalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Első. Thessz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Első. Tessz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thesszalonikaiakhoz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesszalonikaiakhoz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thesszalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesszalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thessz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tessz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thesszalonikaiakhoz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesszalonikaiakhoz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thesszalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesszalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thesszalonikaiakhoz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesszalonikaiakhoz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thesszalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesszalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thessz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tessz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thesszalonikaiakhoz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesszalonikaiakhoz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thesszalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesszalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thessz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tessz 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hun)", () => {
		expect(p.parse("Második Thesszalonikaiakhoz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Második Tesszalonikaiakhoz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Második Thesszalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Második Tesszalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Második Thessz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Második Tessz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Második. Thesszalonikaiakhoz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Második. Tesszalonikaiakhoz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Második. Thesszalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Második. Tesszalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Második. Thessz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Második. Tessz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thesszalonikaiakhoz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesszalonikaiakhoz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thesszalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesszalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thessz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tessz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thesszalonikaiakhoz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesszalonikaiakhoz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thesszalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesszalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thesszalonikaiakhoz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesszalonikaiakhoz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thesszalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesszalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thessz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tessz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thesszalonikaiakhoz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesszalonikaiakhoz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thesszalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesszalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thessz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tessz 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hun)", () => {
		expect(p.parse("2 Thesszalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tessz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hun)", () => {
		expect(p.parse("1 Thesszalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tessz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hun)", () => {
		expect(p.parse("Első Timóteushoz 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Első Timóteusnak 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Első Timótheosz 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Első Timóteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Első Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Első. Timóteushoz 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Első. Timóteusnak 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Első. Timótheosz 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Első. Timóteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Első. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timóteushoz 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timóteusnak 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timótheosz 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timóteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timóteushoz 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timóteusnak 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timótheosz 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timóteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timóteushoz 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timóteusnak 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timótheosz 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timóteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timóteushoz 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timóteusnak 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timótheosz 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timóteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hun)", () => {
		expect(p.parse("Második Timóteushoz 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Második Timóteusnak 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Második Timótheosz 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Második Timóteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Második Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Második. Timóteushoz 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Második. Timóteusnak 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Második. Timótheosz 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Második. Timóteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Második. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timóteushoz 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timóteusnak 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timótheosz 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timóteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timóteushoz 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timóteusnak 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timótheosz 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timóteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timóteushoz 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timóteusnak 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timótheosz 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timóteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timóteushoz 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timóteusnak 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timótheosz 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timóteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hun)", () => {
		expect(p.parse("2 Timótheosz 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hun)", () => {
		expect(p.parse("1 Timótheosz 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (hun)", () => {
		expect(p.parse("Tituszhoz 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titushoz 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titusz 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (hun)", () => {
		expect(p.parse("Philemonhoz 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemonhoz 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (hun)", () => {
		expect(p.parse("Zsidókhoz írt levél 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Héber levél 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Zsidókhoz 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Zsidók 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Zsid 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (hun)", () => {
		expect(p.parse("Jakab 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hun)", () => {
		expect(p.parse("Első Péter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Első Pét 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Első. Péter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Első. Pét 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Péter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pét 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Péter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pét 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Péter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pét 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Péter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pét 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hun)", () => {
		expect(p.parse("Második Péter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Második Pét 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Második. Péter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Második. Pét 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Péter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pét 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Péter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pét 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Péter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pét 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Péter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pét 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hun)", () => {
		expect(p.parse("2 Péter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pét 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hun)", () => {
		expect(p.parse("1 Péter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pét 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (hun)", () => {
		expect(p.parse("Júdás 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Júd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (hun)", () => {
		expect(p.parse("Tóbiás 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tób 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (hun)", () => {
		expect(p.parse("Judit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (hun)", () => {
		expect(p.parse("Báruk 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bár 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (hun)", () => {
		expect(p.parse("Zsuzsanna és a vének 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Zsuzsanna 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Zsuzs 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Zsuz 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (hun)", () => {
		expect(p.parse("Első Makkabeusok 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Első Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Első. Makkabeusok 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Első. Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makkabeusok 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makkabeusok 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Makkabeusok 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Makkabeusok 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (hun)", () => {
		expect(p.parse("Második Makkabeusok 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Második Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Második. Makkabeusok 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Második. Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makkabeusok 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makkabeusok 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Makkabeusok 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Makkabeusok 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (hun)", () => {
		expect(p.parse("Harmadik Makkabeusok 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Harmadik Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Harmadik. Makkabeusok 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Harmadik. Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Makkabeusok 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Makkabeusok 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Makkabeusok 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Makkabeusok 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Mak 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (hun)", () => {
		expect(p.parse("4 Makkabeusok 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Makkabeusok 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Makkabeusok 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Makkabeusok 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Mak 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (hun)", () => {
		expect(p.parse("Makkabeusok II 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makkabeusok 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (hun)", () => {
		expect(p.parse("Makkabeusok III 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Makkabeusok 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mak 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (hun)", () => {
		expect(p.parse("Makkabeusok IV 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Makkabeusok 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mak 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (hun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (hun)", () => {
		expect(p.parse("Makkabeusok I 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makkabeusok 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});

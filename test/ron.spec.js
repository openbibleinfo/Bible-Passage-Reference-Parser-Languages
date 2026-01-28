"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ron.js";

describe("Localized book Gen (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ron)", () => {
		expect(p.parse("Facerea 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genesa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Geneza 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ron)", () => {
		expect(p.parse("Ieşirea 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ieșirea 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exodul 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ex 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (ron)", () => {
		expect(p.parse("Istoria omorârii balaurului şi a sfărâmarii lui Bel 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Istoria omorârii balaurului şi a sfărâmării lui Bel 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Istoria Balaurului 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel și dragonul 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ron)", () => {
		expect(p.parse("Leviticul 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levitic 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ron)", () => {
		expect(p.parse("Numerii 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (ron)", () => {
		expect(p.parse("Cartea înţelepciunii lui Isus, fiul lui Sirah 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ecclesiasticul 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ecleziastic 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirach 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Lam (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ron)", () => {
		expect(p.parse("Plângerile profetului Ieremia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Plangerile lui Ieremia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Plângerile lui Ieremia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Plangeri 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Plângeri 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Plâng 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Pl 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (ron)", () => {
		expect(p.parse("Epistola lui Ieremia 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book PrMan (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (ron)", () => {
		expect(p.parse("Rugăciunea regelui Manase 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Rugăciunea lui Manase 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manase 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ron)", () => {
		expect(p.parse("Deuteronomul 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deuteronom 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ron)", () => {
		expect(p.parse("Iosua Navi 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ios 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ron)", () => {
		expect(p.parse("Judecatorii 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judecători 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ron)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (ron)", () => {
		expect(p.parse("1 Ezdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Ezdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Ezdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Ezdra 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 1Esd (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (ron)", () => {
		expect(p.parse("3 Ezdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3. Ezdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("III Ezdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("III. Ezdra 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (ron)", () => {
		expect(p.parse("4 Ezdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("4. Ezdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("IV Ezdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("IV. Ezdra 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 2Esd (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (ron)", () => {
		expect(p.parse("2 Ezdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Ezdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Ezdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Ezdra 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (ron)", () => {
		expect(p.parse("1 Ezdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (ron)", () => {
		expect(p.parse("2 Ezdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ron)", () => {
		expect(p.parse("Isaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Is 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ron)", () => {
		expect(p.parse("1 Regilor 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Regilor 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Regilor 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Regilor 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ron)", () => {
		expect(p.parse("2 Regilor 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Regilor 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Regilor 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Regilor 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ron)", () => {
		expect(p.parse("Cartea a doua a Regilor 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Cartea II a lui Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Cartea II a Regilor 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ron)", () => {
		expect(p.parse("Cartea întâi a Regilor 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Cartea I a lui Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Cartea I a Regilor 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ron)", () => {
		expect(p.parse("1 Imparati 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Împăraţi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Imp 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Împ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Imparati 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Împăraţi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Imp 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Împ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Imparati 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Împăraţi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Imp 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Împ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Imparati 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Împăraţi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Imp 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Împ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ron)", () => {
		expect(p.parse("2 Imparati 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Împăraţi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Imp 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Împ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Imparati 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Împăraţi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Imp 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Împ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Imparati 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Împăraţi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Imp 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Împ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Imparati 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Împăraţi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Imp 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Împ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ron)", () => {
		expect(p.parse("1 Regi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Regi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Regi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Regi 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Kgs (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ron)", () => {
		expect(p.parse("3 Regi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Regi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III Regi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. Regi 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ron)", () => {
		expect(p.parse("4 Regi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Regi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV Regi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. Regi 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ron)", () => {
		expect(p.parse("2 Regi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Regi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Regi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Regi 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ron)", () => {
		expect(p.parse("Cartea a patra a Regilor 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Cartea IV a Regilor 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II a Împăraţilor 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Regi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Imp 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ron)", () => {
		expect(p.parse("Cartea a treia a Regilor 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Cartea III a Regilor 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I a Împăraţilor 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Regi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Imp 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ron)", () => {
		expect(p.parse("1 Paralipomena 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Cronicilor 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Cronici 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Cron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Paralipomena 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Cronicilor 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Cronici 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Cron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Paralipomena 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Cronicilor 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Cronici 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Cron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Paralipomena 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Cronicilor 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Cronici 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Cron 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ron)", () => {
		expect(p.parse("2 Paralipomena 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Cronicilor 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Cronici 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Cron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Paralipomena 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Cronicilor 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Cronici 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Cron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Paralipomena 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Cronicilor 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Cronici 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Cron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Paralipomena 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Cronicilor 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Cronici 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Cron 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ron)", () => {
		expect(p.parse("Cartea a doua Paralipomena 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Cronici 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Cron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ron)", () => {
		expect(p.parse("Cartea întâi Paralipomena 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Cronici 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Cron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ron)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ron)", () => {
		expect(p.parse("Neemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neem 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (ron)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ron)", () => {
		expect(p.parse("Esterei 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Estera 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ron)", () => {
		expect(p.parse("Iov 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ron)", () => {
		expect(p.parse("Cartea Psalmilor 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalmii 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalmul 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalmi 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (ron)", () => {
		expect(p.parse("Rugăciunea lui Azaria 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ron)", () => {
		expect(p.parse("Proverbele lui Solomon 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pildele lui Solomon 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Proverbele 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Proverbe 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ron)", () => {
		expect(p.parse("Ecclesiastul 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesiastul 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecleziastul 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecleziast 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecl 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (ron)", () => {
		expect(p.parse("Cântarea celor trei tineri 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Cântarea celor trei evrei 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Trei tineri 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("3 tineri 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ron)", () => {
		expect(p.parse("Cântarea lui Solomon 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cantarea cantarilor 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cântarea Cântărilor 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cântări 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cânt 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cant 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Wis (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (ron)", () => {
		expect(p.parse("Cartea înţelepciunii lui Solomon 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Înțelepciunea lui Solomon 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Cartea Înțelepciunii 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Solomon 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Jer (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ron)", () => {
		expect(p.parse("Ieremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ier 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ron)", () => {
		expect(p.parse("Iezechiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezechiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezech 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezec 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ron)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ron)", () => {
		expect(p.parse("Osea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Os 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ron)", () => {
		expect(p.parse("Ioel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ioil 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ron)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ron)", () => {
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Avdie 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ron)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Iona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ron)", () => {
		expect(p.parse("Miheia 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mica 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ron)", () => {
		expect(p.parse("Naum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ron)", () => {
		expect(p.parse("Habacuc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Avacum 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ron)", () => {
		expect(p.parse("Sofonie 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Tefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Ţefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Țefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Tef 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Ţef 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Țef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ron)", () => {
		expect(p.parse("Agheu 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ron)", () => {
		expect(p.parse("Zaharia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zah 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ron)", () => {
		expect(p.parse("Maleahi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ron)", () => {
		expect(p.parse("Matei 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ron)", () => {
		expect(p.parse("Marcu 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mc 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ron)", () => {
		expect(p.parse("Luca 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lc 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ron)", () => {
		expect(p.parse("1 Ioan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 In 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ron)", () => {
		expect(p.parse("2 Ioan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 In 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ron)", () => {
		expect(p.parse("3 Ioan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 In 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book Acts (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ron)", () => {
		expect(p.parse("Faptele Apostolilor 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Fapte Apostolilor 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Faptele 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("F. Ap. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("F Ap. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("F. Ap 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Fapte 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("F Ap 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("F.A. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Fapt 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("FA. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("F.A 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Fap 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("FA 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rev (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ron)", () => {
		expect(p.parse("Apocalipsa lui Ioan 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apocalipsa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apoc 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book 1John (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ron)", () => {
		expect(p.parse("1 Ioan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ioan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Ioan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Ioan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ron)", () => {
		expect(p.parse("2 Ioan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ioan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Ioan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Ioan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ron)", () => {
		expect(p.parse("3 Ioan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ioan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Ioan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Ioan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ron)", () => {
		expect(p.parse("Ioan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ron)", () => {
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("In 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Rom (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ron)", () => {
		expect(p.parse("Romani 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ron)", () => {
		expect(p.parse("1 Corintieni 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corinteni 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Co 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corintieni 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinteni 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Co 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Corintieni 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Corinteni 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Co 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Corintieni 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Corinteni 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Co 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ron)", () => {
		expect(p.parse("2 Corintieni 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corinteni 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Co 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corintieni 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinteni 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Co 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Corintieni 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Corinteni 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Co 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Corintieni 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Corinteni 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Co 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ron)", () => {
		expect(p.parse("2 Corinteni 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ron)", () => {
		expect(p.parse("1 Corinteni 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ron)", () => {
		expect(p.parse("Galateni 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ron)", () => {
		expect(p.parse("Efeseni 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efes 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ron)", () => {
		expect(p.parse("Filipeni 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ron)", () => {
		expect(p.parse("Coloseni 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ron)", () => {
		expect(p.parse("1 Tesaloniceni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloniceni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesaloniceni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesaloniceni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ron)", () => {
		expect(p.parse("2 Tesaloniceni 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloniceni 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesaloniceni 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesaloniceni 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ron)", () => {
		expect(p.parse("2 Tesaloniceni 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ron)", () => {
		expect(p.parse("1 Tesaloniceni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ron)", () => {
		expect(p.parse("1 Timotei 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotei 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timotei 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timotei 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ron)", () => {
		expect(p.parse("2 Timotei 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotei 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timotei 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timotei 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ron)", () => {
		expect(p.parse("2 Timotei 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ron)", () => {
		expect(p.parse("1 Timotei 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ron)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ron)", () => {
		expect(p.parse("Filimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filim 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ron)", () => {
		expect(p.parse("Evrei 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Evr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ron)", () => {
		expect(p.parse("Iacob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Iacov 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Iac 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ron)", () => {
		expect(p.parse("1 Petru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ron)", () => {
		expect(p.parse("2 Petru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ron)", () => {
		expect(p.parse("2 Petru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ron)", () => {
		expect(p.parse("1 Petru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ron)", () => {
		expect(p.parse("Iuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (ron)", () => {
		expect(p.parse("Cartea lui Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (ron)", () => {
		expect(p.parse("Iudita 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (ron)", () => {
		expect(p.parse("Baruh 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (ron)", () => {
		expect(p.parse("Istoria Susanei 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Susanei 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Susana 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (ron)", () => {
		expect(p.parse("1 Macabei 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Macabei 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Macabei 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Macabei 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (ron)", () => {
		expect(p.parse("2 Macabei 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Macabei 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Macabei 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Macabei 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (ron)", () => {
		expect(p.parse("3 Macabei 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Macabei 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Macabei 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Macabei 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (ron)", () => {
		expect(p.parse("4 Macabei 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Macabei 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Macabei 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Macabei 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (ron)", () => {
		expect(p.parse("2 Macabei 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (ron)", () => {
		expect(p.parse("3 Macabei 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (ron)", () => {
		expect(p.parse("4 Macabei 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (ron)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (ron)", () => {
		expect(p.parse("1 Macabei 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});

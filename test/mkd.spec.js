"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mkd.js";

describe("Localized book Gen (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mkd)", () => {
		expect(p.parse("Прва книга Мојсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Прва. книга Мојсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Прво книга Мојсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Прво. книга Мојсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 книга Мојсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. книга Мојсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I книга Мојсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. книга Мојсеева 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (mkd)", () => {
		expect(p.parse("Втора книга Мојсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Втора. книга Мојсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Второ книга Мојсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Второ. книга Мојсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 книга Мојсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. книга Мојсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II книга Мојсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. книга Мојсеева 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Gen (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mkd)", () => {
		expect(p.parse("Настанување 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Битие 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (mkd)", () => {
		expect(p.parse("Излез 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (mkd)", () => {
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (mkd)", () => {
		expect(p.parse("Трета книга Мојсеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Левитска книга 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Левитска 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Левит 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (mkd)", () => {
		expect(p.parse("Четврта книга Мојсеева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Броеви 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (mkd)", () => {
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (mkd)", () => {
		expect(p.parse("Книга Мудрост Соломонова 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (mkd)", () => {
		expect(p.parse("Плачот на Еремија 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Плач на Еремиин 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Плач Еремиин 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (mkd)", () => {
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mkd)", () => {
		expect(p.parse("Откровение 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (mkd)", () => {
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (mkd)", () => {
		expect(p.parse("Петта книга Мојсеева 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Повторени закони 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Второзаконие 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (mkd)", () => {
		expect(p.parse("Книга на Исус Невин 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Исус Навин 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Јешуа 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Јошуа 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (mkd)", () => {
		expect(p.parse("Книга на израелеви судии 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Судии 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (mkd)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (mkd)", () => {
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (mkd)", () => {
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (mkd)", () => {
		expect(p.parse("Исаија 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Исаја 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mkd)", () => {
		expect(p.parse("Прва книга Самоилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Прва Самуил 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Прва. книга Самоилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Прва. Самуил 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Прво книга Самоилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Прво Самуил 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Прво. книга Самоилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Прво. Самуил 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 книга Самоилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Самуил 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. книга Самоилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Самуил 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I книга Самоилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Самуил 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. книга Самоилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Самуил 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mkd)", () => {
		expect(p.parse("Втора книга Самоилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Втора Самуил 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Втора. книга Самоилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Втора. Самуил 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Второ книга Самоилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Второ Самуил 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Второ. книга Самоилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Второ. Самуил 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 книга Самоилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Самуил 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. книга Самоилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Самуил 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II книга Самоилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Самуил 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. книга Самоилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Самуил 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mkd)", () => {
		expect(p.parse("2 Самуил 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mkd)", () => {
		expect(p.parse("1 Самуил 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mkd)", () => {
		expect(p.parse("Прва книга за царевите 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Прва Цареви 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Прва. книга за царевите 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Прва. Цареви 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Прво книга за царевите 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Прво Цареви 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Прво. книга за царевите 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Прво. Цареви 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 книга за царевите 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Цареви 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. книга за царевите 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Цареви 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I книга за царевите 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Цареви 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. книга за царевите 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Цареви 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mkd)", () => {
		expect(p.parse("Втора книга за царевите 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Втора Цареви 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Втора. книга за царевите 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Втора. Цареви 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Второ книга за царевите 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Второ Цареви 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Второ. книга за царевите 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Второ. Цареви 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 книга за царевите 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Цареви 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. книга за царевите 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Цареви 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II книга за царевите 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Цареви 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. книга за царевите 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Цареви 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mkd)", () => {
		expect(p.parse("2 Цареви 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mkd)", () => {
		expect(p.parse("1 Цареви 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mkd)", () => {
		expect(p.parse("Прва книга летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Прва Летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Прва. книга летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Прва. Летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Прво книга летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Прво Летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Прво. книга летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Прво. Летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 книга летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. книга летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I книга летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. книга летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Летописи 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mkd)", () => {
		expect(p.parse("Втора книга летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Втора Летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Втора. книга летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Втора. Летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Второ книга летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Второ Летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Второ. книга летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Второ. Летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 книга летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. книга летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II книга летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. книга летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Летописи 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mkd)", () => {
		expect(p.parse("2 Летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mkd)", () => {
		expect(p.parse("1 Летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (mkd)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Езра 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (mkd)", () => {
		expect(p.parse("Нехемија 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Неемија 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (mkd)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (mkd)", () => {
		expect(p.parse("Естира 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Естер 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (mkd)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Јов 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (mkd)", () => {
		expect(p.parse("Псалми 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (mkd)", () => {
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (mkd)", () => {
		expect(p.parse("Пословици 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Изреки 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (mkd)", () => {
		expect(p.parse("Проповедник 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (mkd)", () => {
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (mkd)", () => {
		expect(p.parse("Песната над песните 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Песната на Соломон 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Песна над песните 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Црковни химни 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (mkd)", () => {
		expect(p.parse("Еремија 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (mkd)", () => {
		expect(p.parse("Езекиел 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (mkd)", () => {
		expect(p.parse("Даниел 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Данил 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (mkd)", () => {
		expect(p.parse("Осија 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Хошеа 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (mkd)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Јоел 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Јоил 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (mkd)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Амос 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (mkd)", () => {
		expect(p.parse("Овадија 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Авдиј 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (mkd)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Јона 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (mkd)", () => {
		expect(p.parse("Михеј 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Миха 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (mkd)", () => {
		expect(p.parse("Наум 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (mkd)", () => {
		expect(p.parse("Хабакук 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Хавакук 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (mkd)", () => {
		expect(p.parse("Сефанија 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Софонија 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (mkd)", () => {
		expect(p.parse("Хагај 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Агеј 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (mkd)", () => {
		expect(p.parse("Захарија 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (mkd)", () => {
		expect(p.parse("Малахија 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mkd)", () => {
		expect(p.parse("Евангелието според Матеј 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Евангелие според Матеј 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матеј 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mkd)", () => {
		expect(p.parse("Евангелието според Марко 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Евангелие според Марко 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марко 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mkd)", () => {
		expect(p.parse("Евангелието според Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Евангелие според Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mkd)", () => {
		expect(p.parse("Прва послание на апостол Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Прва писмо од апостол Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Прва Јованово 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Прва. послание на апостол Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Прва. писмо од апостол Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Прва. Јованово 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Прво послание на апостол Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Прво писмо од апостол Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Прво Јованово 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Прво. послание на апостол Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Прво. писмо од апостол Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Прво. Јованово 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 послание на апостол Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 писмо од апостол Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Јованово 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. послание на апостол Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. писмо од апостол Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Јованово 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I послание на апостол Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I писмо од апостол Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Јованово 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. послание на апостол Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. писмо од апостол Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Јованово 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mkd)", () => {
		expect(p.parse("Втора послание на апостол Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Втора писмо од апостол Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Втора Јованово 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Втора. послание на апостол Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Втора. писмо од апостол Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Втора. Јованово 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Второ послание на апостол Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Второ писмо од апостол Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Второ Јованово 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Второ. послание на апостол Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Второ. писмо од апостол Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Второ. Јованово 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 послание на апостол Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 писмо од апостол Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Јованово 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. послание на апостол Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. писмо од апостол Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Јованово 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II послание на апостол Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II писмо од апостол Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Јованово 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. послание на апостол Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. писмо од апостол Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Јованово 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mkd)", () => {
		expect(p.parse("Трета послание на апостол Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трета писмо од апостол Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трета Јованово 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трета. послание на апостол Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трета. писмо од апостол Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трета. Јованово 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трето послание на апостол Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трето писмо од апостол Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трето Јованово 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трето. послание на апостол Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трето. писмо од апостол Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трето. Јованово 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 послание на апостол Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 писмо од апостол Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Јованово 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. послание на апостол Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. писмо од апостол Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Јованово 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III послание на апостол Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III писмо од апостол Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Јованово 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. послание на апостол Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. писмо од апостол Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Јованово 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mkd)", () => {
		expect(p.parse("1 Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mkd)", () => {
		expect(p.parse("2 Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mkd)", () => {
		expect(p.parse("3 Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mkd)", () => {
		expect(p.parse("Прва Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Прва. Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Прво Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Прво. Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Јован 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Јован 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mkd)", () => {
		expect(p.parse("Втора Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Втора. Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Второ Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Второ. Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Јован 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Јован 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mkd)", () => {
		expect(p.parse("Трета Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трета. Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трето Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трето. Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Јован 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Јован 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mkd)", () => {
		expect(p.parse("Јован 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mkd)", () => {
		expect(p.parse("Евангелието според Јован 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Евангелие според Јован 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mkd)", () => {
		expect(p.parse("Дела на светите апостоли 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Дела на апостолите 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Дела Ап 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Дела 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mkd)", () => {
		expect(p.parse("Писмо од апостол Павле до христијаните во Рим 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Римјаните 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Римјани 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mkd)", () => {
		expect(p.parse("Прва писмо од апостол Павле до христијаните во Коринт 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Прва Коринќаните 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Прва Коринтјани 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Прва. писмо од апостол Павле до христијаните во Коринт 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Прва. Коринќаните 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Прва. Коринтјани 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Прво писмо од апостол Павле до христијаните во Коринт 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Прво Коринќаните 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Прво Коринтјани 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Прво. писмо од апостол Павле до христијаните во Коринт 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Прво. Коринќаните 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Прво. Коринтјани 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 писмо од апостол Павле до христијаните во Коринт 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Коринќаните 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Коринтјани 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. писмо од апостол Павле до христијаните во Коринт 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринќаните 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринтјани 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I писмо од апостол Павле до христијаните во Коринт 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Коринќаните 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Коринтјани 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. писмо од апостол Павле до христијаните во Коринт 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Коринќаните 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Коринтјани 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mkd)", () => {
		expect(p.parse("Втора писмо од апостол Павле до христијаните во Коринт 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Втора Коринќаните 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Втора Коринтјани 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Втора. писмо од апостол Павле до христијаните во Коринт 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Втора. Коринќаните 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Втора. Коринтјани 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Второ писмо од апостол Павле до христијаните во Коринт 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Второ Коринќаните 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Второ Коринтјани 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Второ. писмо од апостол Павле до христијаните во Коринт 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Второ. Коринќаните 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Второ. Коринтјани 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 писмо од апостол Павле до христијаните во Коринт 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Коринќаните 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Коринтјани 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. писмо од апостол Павле до христијаните во Коринт 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринќаните 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринтјани 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II писмо од апостол Павле до христијаните во Коринт 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Коринќаните 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Коринтјани 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. писмо од апостол Павле до христијаните во Коринт 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Коринќаните 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Коринтјани 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mkd)", () => {
		expect(p.parse("2 Коринтјани 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mkd)", () => {
		expect(p.parse("1 Коринтјани 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mkd)", () => {
		expect(p.parse("Писмо од апостол Павле до христијаните во Галатија 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галатјани 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галатите 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mkd)", () => {
		expect(p.parse("Писмо од апостол Павле до христијаните во Ефес 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ефешаните 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ефесјани 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mkd)", () => {
		expect(p.parse("Писмо од апостол Павле до христијаните во Филипи 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филипјаните 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филипјани 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mkd)", () => {
		expect(p.parse("Писмо од апостол Павле до христијаните во Колос 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Колошаните 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Колосјани 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mkd)", () => {
		expect(p.parse("Прва писмо од апостол Павле до христијаните во Солун 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Прва Солунците 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Прва Солунјани 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Прва. писмо од апостол Павле до христијаните во Солун 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Прва. Солунците 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Прва. Солунјани 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Прво писмо од апостол Павле до христијаните во Солун 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Прво Солунците 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Прво Солунјани 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Прво. писмо од апостол Павле до христијаните во Солун 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Прво. Солунците 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Прво. Солунјани 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 писмо од апостол Павле до христијаните во Солун 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Солунците 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Солунјани 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. писмо од апостол Павле до христијаните во Солун 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Солунците 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Солунјани 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I писмо од апостол Павле до христијаните во Солун 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Солунците 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Солунјани 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. писмо од апостол Павле до христијаните во Солун 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Солунците 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Солунјани 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mkd)", () => {
		expect(p.parse("Втора писмо од апостол Павле до христијаните во Солун 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Втора Солунците 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Втора Солунјани 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Втора. писмо од апостол Павле до христијаните во Солун 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Втора. Солунците 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Втора. Солунјани 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Второ писмо од апостол Павле до христијаните во Солун 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Второ Солунците 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Второ Солунјани 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Второ. писмо од апостол Павле до христијаните во Солун 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Второ. Солунците 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Второ. Солунјани 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 писмо од апостол Павле до христијаните во Солун 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Солунците 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Солунјани 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. писмо од апостол Павле до христијаните во Солун 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Солунците 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Солунјани 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II писмо од апостол Павле до христијаните во Солун 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Солунците 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Солунјани 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. писмо од апостол Павле до христијаните во Солун 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Солунците 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Солунјани 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mkd)", () => {
		expect(p.parse("2 Солунјани 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mkd)", () => {
		expect(p.parse("1 Солунјани 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mkd)", () => {
		expect(p.parse("Прва писмо од апостол Павле до Тимотеј 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Прва Тимотеј 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Прва. писмо од апостол Павле до Тимотеј 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Прва. Тимотеј 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Прво писмо од апостол Павле до Тимотеј 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Прво Тимотеј 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Прво. писмо од апостол Павле до Тимотеј 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Прво. Тимотеј 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 писмо од апостол Павле до Тимотеј 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тимотеј 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. писмо од апостол Павле до Тимотеј 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимотеј 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I писмо од апостол Павле до Тимотеј 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Тимотеј 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. писмо од апостол Павле до Тимотеј 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Тимотеј 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mkd)", () => {
		expect(p.parse("Втора писмо од апостол Павле до Тимотеј 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Втора Тимотеј 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Втора. писмо од апостол Павле до Тимотеј 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Втора. Тимотеј 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Второ писмо од апостол Павле до Тимотеј 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Второ Тимотеј 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Второ. писмо од апостол Павле до Тимотеј 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Второ. Тимотеј 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 писмо од апостол Павле до Тимотеј 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тимотеј 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. писмо од апостол Павле до Тимотеј 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимотеј 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II писмо од апостол Павле до Тимотеј 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Тимотеј 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. писмо од апостол Павле до Тимотеј 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Тимотеј 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mkd)", () => {
		expect(p.parse("2 Тимотеј 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mkd)", () => {
		expect(p.parse("1 Тимотеј 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mkd)", () => {
		expect(p.parse("Писмо од апостол Павле до Тит 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mkd)", () => {
		expect(p.parse("Писмо од апостол Павле до Филемон 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филимон 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филемон 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mkd)", () => {
		expect(p.parse("Писмо до Евреите 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евреите 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евреи 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mkd)", () => {
		expect(p.parse("Послание на апостол Јаков 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Писмо од апостол Јаков 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Јаков 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mkd)", () => {
		expect(p.parse("Прва послание на апостол Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прва писмо од апостол Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прва Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прва Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прва. послание на апостол Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прва. писмо од апостол Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прва. Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прва. Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прво послание на апостол Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прво писмо од апостол Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прво Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прво Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прво. послание на апостол Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прво. писмо од апостол Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прво. Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прво. Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 послание на апостол Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 писмо од апостол Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. послание на апостол Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. писмо од апостол Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I послание на апостол Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I писмо од апостол Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. послание на апостол Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. писмо од апостол Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Петар 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mkd)", () => {
		expect(p.parse("Втора послание на апостол Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Втора писмо од апостол Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Втора Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Втора Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Втора. послание на апостол Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Втора. писмо од апостол Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Втора. Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Втора. Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ послание на апостол Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ писмо од апостол Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ. послание на апостол Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ. писмо од апостол Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ. Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ. Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 послание на апостол Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 писмо од апостол Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. послание на апостол Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. писмо од апостол Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II послание на апостол Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II писмо од апостол Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. послание на апостол Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. писмо од апостол Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Петар 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mkd)", () => {
		expect(p.parse("2 Петар 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mkd)", () => {
		expect(p.parse("1 Петар 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mkd)", () => {
		expect(p.parse("Послание на апостол Јуда 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Писмо од апостол Јуда 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Јуда 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (mkd)", () => {
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (mkd)", () => {
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (mkd)", () => {
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (mkd)", () => {
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 2Macc (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (mkd)", () => {
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (mkd)", () => {
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (mkd)", () => {
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (mkd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (mkd)", () => {
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});

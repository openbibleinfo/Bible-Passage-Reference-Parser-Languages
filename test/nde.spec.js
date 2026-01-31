"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nde.js";

describe("Localized book Gen (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (nde)", () => {
		expect(p.parse("Ugenesisi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (nde)", () => {
		expect(p.parse("U-Eksodasi 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eks 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (nde)", () => {
		expect(p.parse("Ulevi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (nde)", () => {
		expect(p.parse("AmaNani 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nani 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nan 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (nde)", () => {
		expect(p.parse("iZililo 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lilo 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Izi 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nde)", () => {
		expect(p.parse("IsAmbulo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Isam 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Isb 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (nde)", () => {
		expect(p.parse("Udutheronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dute 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Duth 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (nde)", () => {
		expect(p.parse("Ujoshuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (nde)", () => {
		expect(p.parse("AbAhluleli 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Aba 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Hlu 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (nde)", () => {
		expect(p.parse("uRuthe 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruthe 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (nde)", () => {
		expect(p.parse("U-Isaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nde)", () => {
		expect(p.parse("1 Usamuyeli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Usamuyeli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nde)", () => {
		expect(p.parse("2 Usamuyeli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Usamuyeli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nde)", () => {
		expect(p.parse("1Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nde)", () => {
		expect(p.parse("2Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nde)", () => {
		expect(p.parse("1 Amakhosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kho 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Amakhosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kho 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nde)", () => {
		expect(p.parse("2 Amakhosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kho 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Amakhosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kho 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nde)", () => {
		expect(p.parse("1Khs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nde)", () => {
		expect(p.parse("2Khs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nde)", () => {
		expect(p.parse("1 ImiLando 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Lan 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ImiLando 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Lan 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nde)", () => {
		expect(p.parse("2 ImiLando 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Lan 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ImiLando 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Lan 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nde)", () => {
		expect(p.parse("1Lan 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nde)", () => {
		expect(p.parse("2Lan 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (nde)", () => {
		expect(p.parse("U-Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("uEzra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (nde)", () => {
		expect(p.parse("uNehemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("uNehimiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (nde)", () => {
		expect(p.parse("U-Esta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("uEsta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (nde)", () => {
		expect(p.parse("Ujobe 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jobe 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (nde)", () => {
		expect(p.parse("AmaHubo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Hubo 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (nde)", () => {
		expect(p.parse("IzAga 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Zaga 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Iza 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (nde)", () => {
		expect(p.parse("UmTshumayeli 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Tshu 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Tsh 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (nde)", () => {
		expect(p.parse("Ingoma Yezingoma 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ingoma 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ngoma 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ing 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (nde)", () => {
		expect(p.parse("Ujeremiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (nde)", () => {
		expect(p.parse("Uhezekhiyeli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (nde)", () => {
		expect(p.parse("Udanyeli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (nde)", () => {
		expect(p.parse("Uhosiya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (nde)", () => {
		expect(p.parse("Ujoweli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jow 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (nde)", () => {
		expect(p.parse("U-Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("uAmosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ams 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (nde)", () => {
		expect(p.parse("U-Obhadaya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("uObadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (nde)", () => {
		expect(p.parse("uJona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (nde)", () => {
		expect(p.parse("Umikha 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("uMika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (nde)", () => {
		expect(p.parse("uNahume 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (nde)", () => {
		expect(p.parse("Uhabhakhukhi 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (nde)", () => {
		expect(p.parse("uZefaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (nde)", () => {
		expect(p.parse("uHagayi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (nde)", () => {
		expect(p.parse("Uzakhariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (nde)", () => {
		expect(p.parse("uMalaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nde)", () => {
		expect(p.parse("Umatewu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nde)", () => {
		expect(p.parse("Umakho 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nde)", () => {
		expect(p.parse("Ulukha 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nde)", () => {
		expect(p.parse("1Jh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nde)", () => {
		expect(p.parse("2Jh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nde)", () => {
		expect(p.parse("3 Kajohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ujohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nde)", () => {
		expect(p.parse("1 KaJohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ujohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joha 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. KaJohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ujohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joha 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nde)", () => {
		expect(p.parse("2 Kajohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ujohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Kajohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ujohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johane 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nde)", () => {
		expect(p.parse("Ujohane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joha 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nde)", () => {
		expect(p.parse("Imisebenzi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ims 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Seb 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nde)", () => {
		expect(p.parse("AbaseRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nde)", () => {
		expect(p.parse("1 AbaseKhorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. AbaseKhorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nde)", () => {
		expect(p.parse("2 AbaseKhorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. AbaseKhorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nde)", () => {
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nde)", () => {
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nde)", () => {
		expect(p.parse("AbaseKholose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Khl 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nde)", () => {
		expect(p.parse("AbaseGalathiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nde)", () => {
		expect(p.parse("Abase-Efesu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nde)", () => {
		expect(p.parse("KwabaseFiliphi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("AbaseFiliphi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nde)", () => {
		expect(p.parse("1 Kwabasetesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 AbaseThesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Kwabasetesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. AbaseThesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nde)", () => {
		expect(p.parse("2 Kwabasetesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 AbaseThesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Kwabasetesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. AbaseThesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nde)", () => {
		expect(p.parse("1The 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nde)", () => {
		expect(p.parse("2The 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nde)", () => {
		expect(p.parse("1 Uthimothi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 uTimothi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Uthimothi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. uTimothi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nde)", () => {
		expect(p.parse("2 Uthimothi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 uTimothi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Uthimothi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. uTimothi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nde)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nde)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nde)", () => {
		expect(p.parse("Uthithu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Thi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nde)", () => {
		expect(p.parse("kuFilimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Ufilimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filim 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nde)", () => {
		expect(p.parse("AmaHebheru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nde)", () => {
		expect(p.parse("Ujakhobe 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nde)", () => {
		expect(p.parse("1 Uphethro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Uphethro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nde)", () => {
		expect(p.parse("2 Uphethro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Uphethro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nde)", () => {
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nde)", () => {
		expect(p.parse("2Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nde)", () => {
		expect(p.parse("uJuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

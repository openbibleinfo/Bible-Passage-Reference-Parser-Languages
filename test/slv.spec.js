"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/slv.js";

describe("Localized book Gen (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (slv)", () => {
		expect(p.parse("I. Mosessove Bvqve. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mojzes 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Mojzes 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mz 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (slv)", () => {
		expect(p.parse("II. Mosessove Bvqve. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Mojzes 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mojzes 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mz 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (slv)", () => {
		expect(p.parse("Od Bela v'Babeli. 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel. 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (slv)", () => {
		expect(p.parse("III. Mosessove Bvqve. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Mojzes 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mojzes 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levit. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mz 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (slv)", () => {
		expect(p.parse("Iiii. Mosessove Bvqve. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Mojzes 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mojzes 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mz 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (slv)", () => {
		expect(p.parse("Iesvs Syrah. 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Syrach. 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirah 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (slv)", () => {
		expect(p.parse("Salomonova Modrvst. 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Modrost 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Sap. 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Mdr 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (slv)", () => {
		expect(p.parse("Ieremiavv Klagovanie. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Žalostinke 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Žal 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (slv)", () => {
		expect(p.parse("Jeremijevo pismo 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("JerP 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (slv)", () => {
		expect(p.parse("S. Ioannesa Resodivenie. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Razodetje 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Oznanost 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apoc. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ozn 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Raz 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (slv)", () => {
		expect(p.parse("Manassova Molitov. 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Man. 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (slv)", () => {
		expect(p.parse("V. Mosessove Bvqve. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mojzes 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Mojzes 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mz 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (slv)", () => {
		expect(p.parse("Iosvove Bvqve. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jozue 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ioſ. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joz 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (slv)", () => {
		expect(p.parse("Bvqve Teh Rihtariev. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Sodniki 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Iudic. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Sod 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (slv)", () => {
		expect(p.parse("Bvqve Te Rvthe. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruta 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (slv)", () => {
		expect(p.parse("Iesaias Prerok. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Izaija 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Iesa. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Iz 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (slv)", () => {
		expect(p.parse("1 Samvelove Bvqve. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samvelove Bvqve. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samvelove Bvqve. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samvelove Bvqve. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("K Samvelove Bvqve. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("K Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("K Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("K Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("K. Samvelove Bvqve. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("K. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("K. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("K. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("S. Samvelove Bvqve. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("S. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("S. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("S. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (slv)", () => {
		expect(p.parse("2 Samvelove Bvqve. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samvelove Bvqve. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samvelove Bvqve. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samvelove Bvqve. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("K Samvelove Bvqve. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("K Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("K Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("K Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("K. Samvelove Bvqve. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("K. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("K. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("K. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("S. Samvelove Bvqve. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("S. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("S. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("S. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (slv)", () => {
		expect(p.parse("1 Bvqve Teh Krailev. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kralji 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Reg. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kr 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Bvqve Teh Krailev. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kralji 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Reg. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kr 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Bvqve Teh Krailev. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Kralji 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Reg. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Kr 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Bvqve Teh Krailev. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Kralji 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Reg. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Kr 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("K Bvqve Teh Krailev. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("K Kralji 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("K Reg. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("K Kr 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("K. Bvqve Teh Krailev. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("K. Kralji 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("K. Reg. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("K. Kr 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("S. Bvqve Teh Krailev. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("S. Kralji 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("S. Reg. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("S. Kr 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (slv)", () => {
		expect(p.parse("2 Bvqve Teh Krailev. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kralji 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Reg. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kr 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Bvqve Teh Krailev. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kralji 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Reg. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kr 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Bvqve Teh Krailev. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Kralji 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Reg. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Kr 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Bvqve Teh Krailev. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Kralji 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Reg. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Kr 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("K Bvqve Teh Krailev. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("K Kralji 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("K Reg. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("K Kr 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("K. Bvqve Teh Krailev. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("K. Kralji 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("K. Reg. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("K. Kr 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("S. Bvqve Teh Krailev. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("S. Kralji 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("S. Reg. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("S. Kr 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (slv)", () => {
		expect(p.parse("1 Bvqve Te Hronike. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kroniška 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Letopisi 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Par. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Let 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Bvqve Te Hronike. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kroniška 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Letopisi 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Par. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Krn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Let 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Bvqve Te Hronike. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Kroniška 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Letopisi 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Par. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Krn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Let 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Bvqve Te Hronike. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Kroniška 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Letopisi 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Par. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Krn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Let 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("K Bvqve Te Hronike. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("K Kroniška 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("K Letopisi 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("K Par. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("K Krn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("K Let 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("K. Bvqve Te Hronike. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("K. Kroniška 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("K. Letopisi 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("K. Par. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("K. Krn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("K. Let 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("S. Bvqve Te Hronike. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("S. Kroniška 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("S. Letopisi 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("S. Par. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("S. Krn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("S. Let 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (slv)", () => {
		expect(p.parse("2 Bvqve Te Hronike. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kroniška 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Letopisi 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Par. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Let 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Bvqve Te Hronike. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kroniška 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Letopisi 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Par. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Krn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Let 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Bvqve Te Hronike. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Kroniška 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Letopisi 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Par. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Krn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Let 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Bvqve Te Hronike. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Kroniška 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Letopisi 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Par. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Krn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Let 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("K Bvqve Te Hronike. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("K Kroniška 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("K Letopisi 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("K Par. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("K Krn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("K Let 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("K. Bvqve Te Hronike. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("K. Kroniška 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("K. Letopisi 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("K. Par. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("K. Krn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("K. Let 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("S. Bvqve Te Hronike. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("S. Kroniška 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("S. Letopisi 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("S. Par. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("S. Krn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("S. Let 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (slv)", () => {
		expect(p.parse("Esrave Bvqve. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esdr. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezdra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (slv)", () => {
		expect(p.parse("Nehemiave Bvqve. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemija 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehem. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (slv)", () => {
		expect(p.parse("Iobove Bvqve. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Iob. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (slv)", () => {
		expect(p.parse("Knige žoltárske 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalter. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalmi 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Pſal. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Žolt 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (slv)", () => {
		expect(p.parse("Molitev Aſarja 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (slv)", () => {
		expect(p.parse("Salomonove Pripvvisti. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pregovori 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prg 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (slv)", () => {
		expect(p.parse("Salomonov Predigar. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Propovednik 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Pridigar 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Prd 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Prp 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (slv)", () => {
		expect(p.parse("Peissen Teh Treh Mosh 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (slv)", () => {
		expect(p.parse("Salomonove Vissoke Peisni. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Visoka pesem 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cant. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Vp 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (slv)", () => {
		expect(p.parse("Ieremias Prerok. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremija 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ierem. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (slv)", () => {
		expect(p.parse("Ezekiel Prerok. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekijel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezech. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Hos (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (slv)", () => {
		expect(p.parse("Oseas Prerok. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oſee. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ozea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ozej 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oz 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (slv)", () => {
		expect(p.parse("Ioel Prerok. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ioel. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (slv)", () => {
		expect(p.parse("Amos Prerok. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (slv)", () => {
		expect(p.parse("Obadia Prerok. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadija 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abdija 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (slv)", () => {
		expect(p.parse("Ionas Prerok. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Iona. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (slv)", () => {
		expect(p.parse("Miha Prerok. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mich. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mihej 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Miha 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mih 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (slv)", () => {
		expect(p.parse("Nahvm Prerok. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nach. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (slv)", () => {
		expect(p.parse("Habakvk Prerok. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (slv)", () => {
		expect(p.parse("Zeffania Prerok. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofonija 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefanija 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Soph. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (slv)", () => {
		expect(p.parse("Haggai Prerok. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagaj 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Agej 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Agg. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (slv)", () => {
		expect(p.parse("Saharia Prerok. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zaharija 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zach. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zah 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (slv)", () => {
		expect(p.parse("Maleahi Prerok. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malahija 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (slv)", () => {
		expect(p.parse("S. Mattevsha Evangeli. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Sv. Matevž 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matth. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mátaj 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matej 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mát 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (slv)", () => {
		expect(p.parse("S. Marka Evangeli. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Sv. Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marc. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mr 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (slv)", () => {
		expect(p.parse("S. Lvkesha Evangeli. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Sv. Lukež 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lükáč 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lük 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (slv)", () => {
		expect(p.parse("S. Ioannesa III. Lyst. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Janez 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Jánoš 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ioan. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Janez 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Janez 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (slv)", () => {
		expect(p.parse("S. Ioannesa Evangeli. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Sv. Janez 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ioan. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Janez 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jánoš 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ján 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (slv)", () => {
		expect(p.parse("1 Ioannesa I. Lyst. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ioan. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Janez 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jánoš 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ioannesa I. Lyst. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ioan. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Janez 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jánoš 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Ioannesa I. Lyst. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Ioan. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Janez 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Jánoš 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Ioannesa I. Lyst. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Ioan. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Janez 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jánoš 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("K Ioannesa I. Lyst. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("K Ioan. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("K Janez 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("K Jánoš 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("K Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("K Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("K. Ioannesa I. Lyst. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("K. Ioan. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("K. Janez 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("K. Jánoš 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("K. Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("K. Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("S. Ioannesa I. Lyst. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("S. Ioan. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("S. Janez 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("S. Jánoš 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("S. Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("S. Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (slv)", () => {
		expect(p.parse("2 Ioannesa II. Lyst. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ioan. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Janez 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jánoš 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ioannesa II. Lyst. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ioan. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Janez 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jánoš 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Ioannesa II. Lyst. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Ioan. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Janez 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Jánoš 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Ioannesa II. Lyst. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Ioan. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Janez 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jánoš 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("K Ioannesa II. Lyst. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("K Ioan. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("K Janez 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("K Jánoš 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("K Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("K Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("K. Ioannesa II. Lyst. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("K. Ioan. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("K. Janez 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("K. Jánoš 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("K. Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("K. Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("S. Ioannesa II. Lyst. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("S. Ioan. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("S. Janez 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("S. Jánoš 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("S. Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("S. Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (slv)", () => {
		expect(p.parse("Dianie Teh Apostolov. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apostolska dela 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dejanja 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Djánje 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Act. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dján 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apd 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (slv)", () => {
		expect(p.parse("S. Pavla Lyst Na Rimlane. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("K Rimláncom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rimljanom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rim 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (slv)", () => {
		expect(p.parse("1 Pavla I. Lyst Na Korinterie. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintušáncom I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinčanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Pavla I. Lyst Na Korinterie. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintušáncom I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinčanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Pavla I. Lyst Na Korinterie. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korintušáncom I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korinčanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Pavla I. Lyst Na Korinterie. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korintušáncom I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinčanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("K Pavla I. Lyst Na Korinterie. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("K Korintušáncom I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("K Korinčanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("K Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("K Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("K. Pavla I. Lyst Na Korinterie. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("K. Korintušáncom I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("K. Korinčanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("K. Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("K. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("S. Pavla I. Lyst Na Korinterie. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("S. Korintušáncom I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("S. Korinčanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("S. Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("S. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (slv)", () => {
		expect(p.parse("2 Pavla II. Lyst Na Korinterie. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintušáncom II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinčanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Pavla II. Lyst Na Korinterie. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintušáncom II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinčanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Pavla II. Lyst Na Korinterie. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korintušáncom II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korinčanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Pavla II. Lyst Na Korinterie. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korintušáncom II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinčanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("K Pavla II. Lyst Na Korinterie. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("K Korintušáncom II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("K Korinčanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("K Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("K Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("K. Pavla II. Lyst Na Korinterie. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("K. Korintušáncom II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("K. Korinčanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("K. Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("K. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("S. Pavla II. Lyst Na Korinterie. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("S. Korintušáncom II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("S. Korinčanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("S. Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("S. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (slv)", () => {
		expect(p.parse("S. Pavla Lyst Na Kolosserie. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("K Kološšáncom 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kološanom 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Coloß. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (slv)", () => {
		expect(p.parse("S. Pavla Lyst Na Galaterie. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("K Galatáncom 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galačanom 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatom 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (slv)", () => {
		expect(p.parse("S. Pavla Lyst Na Epheserie. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("K Efezáncom 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efežanom 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (slv)", () => {
		expect(p.parse("S. Pavla Lyst Na Philipperie. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("K Filippéncom 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipljanom 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Philipp. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (slv)", () => {
		expect(p.parse("1 Pavla I. Lyst Na Tessaloniherie. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tessaloničáncom I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Theß. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Pavla I. Lyst Na Tessaloniherie. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessaloničáncom I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Theß. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Pavla I. Lyst Na Tessaloniherie. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tessaloničáncom I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Theß. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Pavla I. Lyst Na Tessaloniherie. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tessaloničáncom I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Theß. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("K Pavla I. Lyst Na Tessaloniherie. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("K Tessaloničáncom I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("K Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("K Theß. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("K Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("K. Pavla I. Lyst Na Tessaloniherie. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("K. Tessaloničáncom I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("K. Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("K. Theß. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("K. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("S. Pavla I. Lyst Na Tessaloniherie. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("S. Tessaloničáncom I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("S. Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("S. Theß. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("S. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (slv)", () => {
		expect(p.parse("2 Pavla II. Lyst Na Tessaloniherie. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tessaloničáncom II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Theß. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Pavla II. Lyst Na Tessaloniherie. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessaloničáncom II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Theß. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Pavla II. Lyst Na Tessaloniherie. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tessaloničáncom II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Theß. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Pavla II. Lyst Na Tessaloniherie. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tessaloničáncom II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Theß. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("K Pavla II. Lyst Na Tessaloniherie. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("K Tessaloničáncom II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("K Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("K Theß. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("K Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("K. Pavla II. Lyst Na Tessaloniherie. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("K. Tessaloničáncom II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("K. Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("K. Theß. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("K. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("S. Pavla II. Lyst Na Tessaloniherie. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("S. Tessaloničáncom II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("S. Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("S. Theß. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("S. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (slv)", () => {
		expect(p.parse("1 Pavla I. Lyst Na Timotea. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteuši I 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteju 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoth. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Pavla I. Lyst Na Timotea. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteuši I 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteju 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoth. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Pavla I. Lyst Na Timotea. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteuši I 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteju 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoth. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Pavla I. Lyst Na Timotea. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteuši I 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteju 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoth. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("K Pavla I. Lyst Na Timotea. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("K Timoteuši I 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("K Timoteju 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("K Timoth. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("K Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("K. Pavla I. Lyst Na Timotea. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("K. Timoteuši I 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("K. Timoteju 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("K. Timoth. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("K. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("S. Pavla I. Lyst Na Timotea. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("S. Timoteuši I 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("S. Timoteju 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("S. Timoth. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("S. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (slv)", () => {
		expect(p.parse("2 Pavla II. Lyst Na Timotea. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteuši II 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteju 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoth. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Pavla II. Lyst Na Timotea. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteuši II 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteju 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoth. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Pavla II. Lyst Na Timotea. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteuši II 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteju 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoth. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Pavla II. Lyst Na Timotea. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteuši II 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteju 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoth. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("K Pavla II. Lyst Na Timotea. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("K Timoteuši II 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("K Timoteju 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("K Timoth. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("K Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("K. Pavla II. Lyst Na Timotea. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("K. Timoteuši II 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("K. Timoteju 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("K. Timoth. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("K. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("S. Pavla II. Lyst Na Timotea. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("S. Timoteuši II 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("S. Timoteju 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("S. Timoth. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("S. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (slv)", () => {
		expect(p.parse("S. Pavla Lyst Na Tita. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("K Tituši 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (slv)", () => {
		expect(p.parse("S. Pavla Lyst Na Philemona. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("K Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemonu 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philem. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (slv)", () => {
		expect(p.parse("Lyst Na Ebreerie. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrejcem 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("K Židovom 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Žid 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (slv)", () => {
		expect(p.parse("S. Iacoba Lyst. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Iacob. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakub 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (slv)", () => {
		expect(p.parse("1 Petra I. Lyst. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petra I. Lyst. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petra I. Lyst. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petra I. Lyst. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("K Petra I. Lyst. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("K Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("K Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("K Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("K Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("K. Petra I. Lyst. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("K. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("K. Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("K. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("K. Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("S. Petra I. Lyst. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("S. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("S. Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("S. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("S. Pt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (slv)", () => {
		expect(p.parse("2 Petra II. Lyst. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petra II. Lyst. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petra II. Lyst. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petra II. Lyst. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("K Petra II. Lyst. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("K Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("K Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("K Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("K Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("K. Petra II. Lyst. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("K. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("K. Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("K. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("K. Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("S. Petra II. Lyst. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("S. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("S. Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("S. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("S. Pt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (slv)", () => {
		expect(p.parse("S. Ivdesha Lyst. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Iudae. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Júdaš 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Júd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (slv)", () => {
		expect(p.parse("Tobieve Bvqve. 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobija 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob. 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (slv)", () => {
		expect(p.parse("Ivditine Bvqve. 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Iudith. 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Judita 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (slv)", () => {
		expect(p.parse("Barvh Prerok. 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Baruch. 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Baruh 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (slv)", () => {
		expect(p.parse("Istoria Od Svsanne Inv Daniela. 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus. 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (slv)", () => {
		expect(p.parse("1 Bvqve Teh Machabeeriev. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makabejci 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mach. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mkb 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Bvqve Teh Machabeeriev. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makabejci 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mach. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mkb 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Bvqve Teh Machabeeriev. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Makabejci 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Mach. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Mkb 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Bvqve Teh Machabeeriev. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Makabejci 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Mach. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Mkb 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("K Bvqve Teh Machabeeriev. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("K Makabejci 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("K Mach. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("K Mkb 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("K. Bvqve Teh Machabeeriev. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("K. Makabejci 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("K. Mach. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("K. Mkb 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("S. Bvqve Teh Machabeeriev. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("S. Makabejci 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("S. Mach. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("S. Mkb 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (slv)", () => {
		expect(p.parse("2 Bvqve Teh Machabeeriev. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makabejci 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mach. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mkb 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Bvqve Teh Machabeeriev. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makabejci 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mach. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mkb 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Bvqve Teh Machabeeriev. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Makabejci 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Mach. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Mkb 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Bvqve Teh Machabeeriev. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Makabejci 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Mach. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Mkb 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("K Bvqve Teh Machabeeriev. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("K Makabejci 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("K Mach. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("K Mkb 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("K. Bvqve Teh Machabeeriev. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("K. Makabejci 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("K. Mach. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("K. Mkb 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("S. Bvqve Teh Machabeeriev. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("S. Makabejci 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("S. Mach. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("S. Mkb 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Dan (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (slv)", () => {
		expect(p.parse("Daniel Prerok. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Danijel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Esth (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (slv)", () => {
		expect(p.parse("Esterine Bvqve. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Eſter. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Estera 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Preferred book names (slv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (slv)", () => {
		expect(p.parse("SHTVKI HDANIELV. 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Add. Dan. 1:1").osis()).toEqual("PrAzar.1.1");
	});
});

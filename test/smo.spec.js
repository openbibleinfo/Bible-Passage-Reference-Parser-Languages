"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/smo.js";

describe("Localized book Gen (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (smo)", () => {
		expect(p.parse("Kenese, 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Kenese 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Kene 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ken 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (smo)", () => {
		expect(p.parse("Esoto 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eso 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (smo)", () => {
		expect(p.parse("Levitiko 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (smo)", () => {
		expect(p.parse("Numera 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nume 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (smo)", () => {
		expect(p.parse("Sirako 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sira 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (smo)", () => {
		expect(p.parse("Poto 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (smo)", () => {
		expect(p.parse("Auega, 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Paruka 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Paru 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Aue 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (smo)", () => {
		expect(p.parse("O le Fa‘aaliga 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Fa‘aaliga 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Faaaliga, 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Fa‘aa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Faal 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (smo)", () => {
		expect(p.parse("Teuteronome, 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Teuteronome 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Teu 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (smo)", () => {
		expect(p.parse("Iosua, 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iosu 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ios 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (smo)", () => {
		expect(p.parse("Fa‘amasino 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Faamasino, 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Fa‘ama 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Faam 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (smo)", () => {
		expect(p.parse("Ruta, 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruta 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (smo)", () => {
		expect(p.parse("Isaia, 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isai 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (smo)", () => {
		expect(p.parse("1 Samuelu, 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuelu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuelu, 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuelu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuelu, 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuelu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samu 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (smo)", () => {
		expect(p.parse("2 Samuelu, 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuelu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuelu, 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuelu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuelu, 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuelu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuelu, 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuelu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samu 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (smo)", () => {
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (smo)", () => {
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (smo)", () => {
		expect(p.parse("I Tupu, 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Tup 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (smo)", () => {
		expect(p.parse("2Tup 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (smo)", () => {
		expect(p.parse("1 Nofoa‘iga a Tupu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Nofoaiga A Tupu, 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 No 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Nofoa‘iga a Tupu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Nofoaiga A Tupu, 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. No 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Nofoa‘iga a Tupu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Nofoaiga A Tupu, 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. No 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (smo)", () => {
		expect(p.parse("2 Nofoa‘iga a Tupu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Nofoaiga A Tupu, 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 No 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Nofoa‘iga a Tupu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Nofoaiga A Tupu, 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. No 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Nofoa‘iga a Tupu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Nofoaiga A Tupu, 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II No 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Nofoa‘iga a Tupu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Nofoaiga A Tupu, 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. No 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Kgs (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (smo)", () => {
		expect(p.parse("1 Tupu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Tu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Tupu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Tu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Tupu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Tu 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (smo)", () => {
		expect(p.parse("2 Tupu, 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Tupu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Tu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Tupu, 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Tupu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Tu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Tupu, 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Tupu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Tu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Tupu, 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Tupu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Tu 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (smo)", () => {
		expect(p.parse("1N.tup 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (smo)", () => {
		expect(p.parse("2N.tup 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (smo)", () => {
		expect(p.parse("Esera, 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esera 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ese 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (smo)", () => {
		expect(p.parse("Neemia, 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nee 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (smo)", () => {
		expect(p.parse("Eseta, 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (smo)", () => {
		expect(p.parse("Iopu, 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Iopu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Iop 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (smo)", () => {
		expect(p.parse("Salamo, 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salāmo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sala 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sal 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (smo)", () => {
		expect(p.parse("Fa‘ata‘oto 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Faataoto, 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Fa‘ata 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Faat 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (smo)", () => {
		expect(p.parse("Failauga, 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Failauga 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Fai 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (smo)", () => {
		expect(p.parse("Le Pese A Solomona, 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("P.sol 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Pese 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (smo)", () => {
		expect(p.parse("Ieremia, 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ieremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Iere 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ier 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (smo)", () => {
		expect(p.parse("Esekielu, 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esekielu 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eseki 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (smo)", () => {
		expect(p.parse("Tanielu, 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Tan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (smo)", () => {
		expect(p.parse("Hosea, 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hose 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (smo)", () => {
		expect(p.parse("Ioelu, 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ioelu 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ioe 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (smo)", () => {
		expect(p.parse("Amosa, 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amosa 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (smo)", () => {
		expect(p.parse("Opetaia. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Opetaia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ope 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (smo)", () => {
		expect(p.parse("Iona, 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Iona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ion 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (smo)", () => {
		expect(p.parse("Mika, 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (smo)", () => {
		expect(p.parse("Nauma, 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nauma 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nau 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (smo)", () => {
		expect(p.parse("Sapakuka, 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Sapakuka 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Sapa 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Sap 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (smo)", () => {
		expect(p.parse("Sefanaia, 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefanaia 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefa 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (smo)", () => {
		expect(p.parse("Hakai, 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hakai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hak 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (smo)", () => {
		expect(p.parse("Sakaria, 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sakaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Saka 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (smo)", () => {
		expect(p.parse("Malaki, 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mala 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (smo)", () => {
		expect(p.parse("Mataio, 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mataio 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mata 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (smo)", () => {
		expect(p.parse("Mareko, 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mareko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mare 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (smo)", () => {
		expect(p.parse("Luka, 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (smo)", () => {
		expect(p.parse("1Ioa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (smo)", () => {
		expect(p.parse("2Ioa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (smo)", () => {
		expect(p.parse("III. Ioane. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ioane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Ioa 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (smo)", () => {
		expect(p.parse("1 Ioane, 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ioane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ioane, 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ioane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Ioane, 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Ioane 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (smo)", () => {
		expect(p.parse("2 Ioane. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ioane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ioane. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ioane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Ioane. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Ioane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Ioane. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Ioane 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (smo)", () => {
		expect(p.parse("Ioane, 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ioane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ioa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (smo)", () => {
		expect(p.parse("Galuega, 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Galuega 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Galu 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (smo)", () => {
		expect(p.parse("Roma, 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (smo)", () => {
		expect(p.parse("1 Korinito, 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kori 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinito, 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kori 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinito, 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kori 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (smo)", () => {
		expect(p.parse("2 Korinito, 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kori 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinito, 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kori 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korinito, 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kori 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinito, 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kori 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (smo)", () => {
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (smo)", () => {
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (smo)", () => {
		expect(p.parse("Kolose, 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolo 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (smo)", () => {
		expect(p.parse("Kalatia, 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kala 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (smo)", () => {
		expect(p.parse("Efeso, 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (smo)", () => {
		expect(p.parse("Filipi, 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fili 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (smo)", () => {
		expect(p.parse("1 Tesalonia, 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonia 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonia, 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonia 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonia, 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonia 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (smo)", () => {
		expect(p.parse("2 Tesalonia, 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonia 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonia, 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonia 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalonia, 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalonia 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonia, 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonia 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesa 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (smo)", () => {
		expect(p.parse("1Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (smo)", () => {
		expect(p.parse("2Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (smo)", () => {
		expect(p.parse("1 Timoteo, 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo, 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteo, 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (smo)", () => {
		expect(p.parse("2 Timoteo, 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo, 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteo, 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteo, 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (smo)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (smo)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (smo)", () => {
		expect(p.parse("Tito, 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (smo)", () => {
		expect(p.parse("Filemoni, 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (smo)", () => {
		expect(p.parse("Eperu, 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eperu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Epe 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (smo)", () => {
		expect(p.parse("Iakopo, 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Iakopo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Iako 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Iak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (smo)", () => {
		expect(p.parse("1 Peteru, 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Peteru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pete 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peteru, 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peteru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pete 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Peteru, 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Peteru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pete 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (smo)", () => {
		expect(p.parse("2 Peteru, 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Peteru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pete 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peteru, 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peteru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pete 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Peteru, 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Peteru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pete 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Peteru, 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Peteru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pete 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (smo)", () => {
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (smo)", () => {
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (smo)", () => {
		expect(p.parse("Iuta. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Iuta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Iut 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (smo)", () => {
		expect(p.parse("Topita 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Topi 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (smo)", () => {
		expect(p.parse("Iutita 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Iuti 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (smo)", () => {
		expect(p.parse("Baruch 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (smo)", () => {
		expect(p.parse("1 Makapaio 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Maka 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makapaio 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Maka 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Makapaio 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Maka 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (smo)", () => {
		expect(p.parse("2 Makapaio 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Maka 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makapaio 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Maka 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Makapaio 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Maka 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Makapaio 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Maka 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Parser helper should handle translations (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (smo)", () => {
		expect(p.parse("Lev 1 (RSCB)").osis_and_translations()).toEqual([["Lev.1","RSCB"]]);
		expect(p.parse("Lev 1 (SOV)").osis_and_translations()).toEqual([["Lev.1","SOV"]]);
		expect(p.parse("Lev 1 (SCNT)").osis_and_translations()).toEqual([["Lev.1","SCNT"]]);
	});
});
describe("Parser helper should handle book ranges (smo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (smo)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Ioa - III. Ioane.").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Ioa – III. Ioane.").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Ioa — III. Ioane.").osis()).toEqual("1John.1-3John.1");
	});
});

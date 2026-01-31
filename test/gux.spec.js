"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gux.js";

describe("Localized book Gen (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (gux)", () => {
		expect(p.parse("Mi cilima 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Cil 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (gux)", () => {
		expect(p.parse("Mi Ñama 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ñam 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (gux)", () => {
		expect(p.parse("Lefi Buolu Yaaba 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lef 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (gux)", () => {
		expect(p.parse("Mi Coadima 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Coa 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (gux)", () => {
		expect(p.parse("Jelemi Bubula 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Jeremi Bubula 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Jbu 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gux)", () => {
		expect(p.parse("Mi Doagidima 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Doa 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (gux)", () => {
		expect(p.parse("Mi Tiadima 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Tia 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (gux)", () => {
		expect(p.parse("Josue 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (gux)", () => {
		expect(p.parse("Bi Bujiaba 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Buj 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (gux)", () => {
		expect(p.parse("Luta 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruti 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Lut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (gux)", () => {
		expect(p.parse("Esayi 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Esa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (gux)", () => {
		expect(p.parse("Samueli Tikpiali 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (gux)", () => {
		expect(p.parse("Samueli Tilieli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (gux)", () => {
		expect(p.parse("1 Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Bi Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Bi. Samueli 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (gux)", () => {
		expect(p.parse("2 Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Bi Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Bi. Samueli 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (gux)", () => {
		expect(p.parse("1Bad 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (gux)", () => {
		expect(p.parse("2Bad 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (gux)", () => {
		expect(p.parse("1 Badiba Jama Tikpiali 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Bi Badiba Jama 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Badiba Jama Tikpiali 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Bi Badiba Jama 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Bi Badiba Jama Tikpiali 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Bi Bi Badiba Jama 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Bi. Badiba Jama Tikpiali 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Bi. Bi Badiba Jama 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 1Chr (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (gux)", () => {
		expect(p.parse("1Baj 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (gux)", () => {
		expect(p.parse("2 Badiba Jama Tilieli 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Bi Badiba Jama 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Badiba Jama Tilieli 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Bi Badiba Jama 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Bi Badiba Jama Tilieli 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Bi Bi Badiba Jama 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Bi. Badiba Jama Tilieli 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Bi. Bi Badiba Jama 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Kgs (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (gux)", () => {
		expect(p.parse("1 Badiba Tikpiali 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Bi Badiba 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Badiba Tikpiali 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Bi Badiba 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Bi Badiba Tikpiali 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Bi Bi Badiba 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Bi. Badiba Tikpiali 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Bi. Bi Badiba 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (gux)", () => {
		expect(p.parse("2 Badiba Tilieli 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Bi Badiba 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Badiba Tilieli 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Bi Badiba 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Bi Badiba Tilieli 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Bi Bi Badiba 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Bi. Badiba Tilieli 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Bi. Bi Badiba 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Chr (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (gux)", () => {
		expect(p.parse("2Baj 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (gux)", () => {
		expect(p.parse("Esidilasi 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esidirasi 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esd 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (gux)", () => {
		expect(p.parse("Nehemi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (gux)", () => {
		expect(p.parse("Esiteri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esita 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (gux)", () => {
		expect(p.parse("Joba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jobi 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jb 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (gux)", () => {
		expect(p.parse("Pisoma 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Pisomi 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Pis 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (gux)", () => {
		expect(p.parse("Mi Kpanjama 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Kpan 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Kpa 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (gux)", () => {
		expect(p.parse("O Yanfuodaano 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("O Yanfodaano 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Yanf 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Yfd 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (gux)", () => {
		expect(p.parse("I Yani 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Yani 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Yan 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (gux)", () => {
		expect(p.parse("Jelemi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jel 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (gux)", () => {
		expect(p.parse("Esekieli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (gux)", () => {
		expect(p.parse("Danieli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (gux)", () => {
		expect(p.parse("Ose 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (gux)", () => {
		expect(p.parse("Joeli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (gux)", () => {
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (gux)", () => {
		expect(p.parse("Abidiasi 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (gux)", () => {
		expect(p.parse("Jonasa 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonasi 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (gux)", () => {
		expect(p.parse("Mise 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mis 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (gux)", () => {
		expect(p.parse("Nahumi 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (gux)", () => {
		expect(p.parse("Habakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (gux)", () => {
		expect(p.parse("Sofoni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (gux)", () => {
		expect(p.parse("Age 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Aje 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (gux)", () => {
		expect(p.parse("Sakali 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sakari 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (gux)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gux)", () => {
		expect(p.parse("Matiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matie 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gux)", () => {
		expect(p.parse("Marki 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gux)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luki 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gux)", () => {
		expect(p.parse("Jan Tikpiali 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Jan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gux)", () => {
		expect(p.parse("Jan Tilieli 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Jan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gux)", () => {
		expect(p.parse("Jan Titaali 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gux)", () => {
		expect(p.parse("1 Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Bi Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Bi. Jan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gux)", () => {
		expect(p.parse("2 Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Bi Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Bi. Jan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gux)", () => {
		expect(p.parse("Jan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gux)", () => {
		expect(p.parse("Jesu Tondiba Tuona 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Jtt 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gux)", () => {
		expect(p.parse("Loma Yaaba 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Loma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gux)", () => {
		expect(p.parse("1 Korenti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korenti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bi Korenti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bi. Korenti 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gux)", () => {
		expect(p.parse("2 Korenti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korenti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Bi Korenti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Bi. Korenti 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gux)", () => {
		expect(p.parse("Kolinta Yaaba Tikpiali 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kol 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gux)", () => {
		expect(p.parse("Kolinta Yaaba Tilieli 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kol 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gux)", () => {
		expect(p.parse("Kolosa Yaaba 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolo 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gux)", () => {
		expect(p.parse("Galati Yaaba 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gux)", () => {
		expect(p.parse("Efesa Yaaba 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gux)", () => {
		expect(p.parse("Filipa Yaaba 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filp 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gux)", () => {
		expect(p.parse("1 Tesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bi Tesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bi. Tesaloniki 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gux)", () => {
		expect(p.parse("2 Tesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Bi Tesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Bi. Tesaloniki 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gux)", () => {
		expect(p.parse("Tesalonika Yaaba Tikpiali 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gux)", () => {
		expect(p.parse("Tesalonika Yaaba Tilieli 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gux)", () => {
		expect(p.parse("Timote Tikpiali 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gux)", () => {
		expect(p.parse("Timote Tilieli 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gux)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Bi Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Bi. Timote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gux)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Bi Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Bi. Timote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gux)", () => {
		expect(p.parse("Tita 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gux)", () => {
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemo 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gux)", () => {
		expect(p.parse("Hebilunba 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebilunba 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebl 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gux)", () => {
		expect(p.parse("Jaka 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jaki 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gux)", () => {
		expect(p.parse("1 Pieri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pieri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Bi Pieri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Bi. Pieri 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gux)", () => {
		expect(p.parse("2 Pieri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pieri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Bi Pieri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Bi. Pieri 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gux)", () => {
		expect(p.parse("Pieli Tikpiali 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pie 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gux)", () => {
		expect(p.parse("Pieli Tilieli 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pie 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gux)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gux)", () => {
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

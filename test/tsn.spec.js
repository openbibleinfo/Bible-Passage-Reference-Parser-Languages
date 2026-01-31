"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tsn.js";

describe("Localized book Gen (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (tsn)", () => {
		expect(p.parse("Genesise 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genese 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genesi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (tsn)", () => {
		expect(p.parse("Ekasodu 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ekesodo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ekesodu 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ekes. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ekes 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (tsn)", () => {
		expect(p.parse("Lefitiko 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levitiko 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lef. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lef 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (tsn)", () => {
		expect(p.parse("Dipalo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Lipalo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (tsn)", () => {
		expect(p.parse("Dilelo Tsa Ga Jeremia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Likhutsahalelo 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Dikhutsafalo 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Dikhuts 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Dilelo 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tsn)", () => {
		expect(p.parse("Ponatsego 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tshenolo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tshen. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tshen 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (tsn)", () => {
		expect(p.parse("Doiteronomio 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deuteronome 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Duteronome 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Doit. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Duter 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (tsn)", () => {
		expect(p.parse("Yehoshue 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jošua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Još. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Još 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (tsn)", () => {
		expect(p.parse("Baatlhodi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Basiamisi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Baatlh. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Baatlh 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tsn)", () => {
		expect(p.parse("Ruthe 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rute 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (tsn)", () => {
		expect(p.parse("Jesaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yesaye 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jes. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tsn)", () => {
		expect(p.parse("1 Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tsn)", () => {
		expect(p.parse("2 Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tsn)", () => {
		expect(p.parse("1 Dikgosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Likhosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Dikg. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Dikg 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Dikgosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Likhosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Dikg. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Dikg 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Dikgosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Likhosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Dikg. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Dikg 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Dikgosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Likhosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Dikg. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Dikg 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tsn)", () => {
		expect(p.parse("2 Dikgosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Likhosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Dikg. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Dikg 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Dikgosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Likhosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Dikg. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Dikg 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Dikgosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Likhosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Dikg. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Dikg 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Dikgosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Likhosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Dikg. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Dikg 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tsn)", () => {
		expect(p.parse("1 Ditirafalo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ditiraf. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Litihalo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ditiraf 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ditirafalo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ditiraf. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Litihalo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ditiraf 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Ditirafalo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Ditiraf. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Litihalo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Ditiraf 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Ditirafalo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Ditiraf. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Litihalo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Ditiraf 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tsn)", () => {
		expect(p.parse("2 Ditirafalo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ditiraf. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Litihalo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ditiraf 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ditirafalo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ditiraf. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Litihalo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ditiraf 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Ditirafalo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Ditiraf. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Litihalo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Ditiraf 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Ditirafalo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Ditiraf. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Litihalo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Ditiraf 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (tsn)", () => {
		expect(p.parse("Esera 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esere 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (tsn)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemie 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (tsn)", () => {
		expect(p.parse("Esethere 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esetere 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Eset. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Eseth 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (tsn)", () => {
		expect(p.parse("Jobe 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yobe 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (tsn)", () => {
		expect(p.parse("Dipesaleme 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("DiPesalome 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Lipesalema 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Pesalema 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Pes. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Pes 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (tsn)", () => {
		expect(p.parse("Diana 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Diane 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Liane 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (tsn)", () => {
		expect(p.parse("Moreri 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (tsn)", () => {
		expect(p.parse("Sefela Sa Difela 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sifela Sa Difela 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sefela 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sehela 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (tsn)", () => {
		expect(p.parse("Jeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yeremie 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (tsn)", () => {
		expect(p.parse("Hesekiele 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esekiele 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hes. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (tsn)", () => {
		expect(p.parse("Daniele 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (tsn)", () => {
		expect(p.parse("Hoshee 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (tsn)", () => {
		expect(p.parse("Joele 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoele 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (tsn)", () => {
		expect(p.parse("Amose 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (tsn)", () => {
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadie 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obatya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tsn)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yone 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (tsn)", () => {
		expect(p.parse("Miga 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mike 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (tsn)", () => {
		expect(p.parse("Nahume 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (tsn)", () => {
		expect(p.parse("Habakuka 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuke 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (tsn)", () => {
		expect(p.parse("Tsefanye 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefanya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (tsn)", () => {
		expect(p.parse("Hagae 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hakai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hak. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (tsn)", () => {
		expect(p.parse("Sagaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sekaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sekarie 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sag. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (tsn)", () => {
		expect(p.parse("Malakie 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Maleagi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tsn)", () => {
		expect(p.parse("Mathaio 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mataio 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matheo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Math. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Math 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tsn)", () => {
		expect(p.parse("Mareko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tsn)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tsn)", () => {
		expect(p.parse("Johane I 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tsn)", () => {
		expect(p.parse("Johane II 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tsn)", () => {
		expect(p.parse("III Johane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Johane III 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tsn)", () => {
		expect(p.parse("1 Johane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Johane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Joh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Johane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Joh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Joh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tsn)", () => {
		expect(p.parse("2 Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Joh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Joh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Joh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tsn)", () => {
		expect(p.parse("Johane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yohane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tsn)", () => {
		expect(p.parse("Litiho tsa Baapostoloi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ditiro 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Litiho 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dit. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tsn)", () => {
		expect(p.parse("Episetole go Baroma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("BaRoma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tsn)", () => {
		expect(p.parse("1 Bakorinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Bakorinta 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Bakor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Bakor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bakorinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bakorinta 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bakor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bakor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Bakorinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Bakorinta 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Bakor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Bakor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Bakorinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Bakorinta 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Bakor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Bakor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tsn)", () => {
		expect(p.parse("2 Bakorinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Bakorinta 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Bakor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Bakor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bakorinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bakorinta 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bakor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bakor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Bakorinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Bakorinta 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Bakor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Bakor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Bakorinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Bakorinta 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Bakor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Bakor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tsn)", () => {
		expect(p.parse("Bakorintha I 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tsn)", () => {
		expect(p.parse("Bakorintha II 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tsn)", () => {
		expect(p.parse("Bakolosa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("BaKolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Bakol. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Bakol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tsn)", () => {
		expect(p.parse("BaGalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Bagal. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Bagal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tsn)", () => {
		expect(p.parse("Baefesia 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("BaEfeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Baef. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Baef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tsn)", () => {
		expect(p.parse("Bafilipa 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("BaFilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Bafil. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Bafil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tsn)", () => {
		expect(p.parse("1 Bathesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Batedaloni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Batesaloni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Bathes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Bathes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Bathesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Batedaloni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Batesaloni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Bathes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Bathes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Bathesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Batedaloni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Batesaloni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Bathes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Bathes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Bathesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Batedaloni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Batesaloni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Bathes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Bathes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tsn)", () => {
		expect(p.parse("Bathesalonia I 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tsn)", () => {
		expect(p.parse("2 Bathesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Batesaloni 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Bathes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Bathes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Bathesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Batesaloni 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Bathes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Bathes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Bathesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Batesaloni 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Bathes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Bathes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Bathesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Batesaloni 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Bathes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Bathes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tsn)", () => {
		expect(p.parse("Bathesalonia II 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tsn)", () => {
		expect(p.parse("Timotheo I 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tsn)", () => {
		expect(p.parse("Timotheo II 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tsn)", () => {
		expect(p.parse("1 Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tsn)", () => {
		expect(p.parse("2 Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tsn)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tsn)", () => {
		expect(p.parse("Filemone 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filimone 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tsn)", () => {
		expect(p.parse("Bahebera 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Bahebere 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Baheb. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Baheb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tsn)", () => {
		expect(p.parse("Jakobe 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tsn)", () => {
		expect(p.parse("Petere I 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tsn)", () => {
		expect(p.parse("Petere II 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tsn)", () => {
		expect(p.parse("1 Petere 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petoro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petere 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petoro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petere 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petoro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petere 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petoro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tsn)", () => {
		expect(p.parse("2 Petere 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petoro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petere 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petoro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petere 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petoro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petere 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petoro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tsn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tsn)", () => {
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

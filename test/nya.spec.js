"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nya.js";

describe("Localized book Gen (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (nya)", () => {
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (nya)", () => {
		expect(p.parse("Eksodo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eks. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ekso 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (nya)", () => {
		expect(p.parse("Levitiko 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (nya)", () => {
		expect(p.parse("Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (nya)", () => {
		expect(p.parse("Mphu. 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (nya)", () => {
		expect(p.parse("Lun. 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (nya)", () => {
		expect(p.parse("Maliro 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Mali. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Mali 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nya)", () => {
		expect(p.parse("Chivumbulutso 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Chiv. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Chiv 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (nya)", () => {
		expect(p.parse("Deuteronomo 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (nya)", () => {
		expect(p.parse("Yoswa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (nya)", () => {
		expect(p.parse("Oweruza 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ower. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Owe. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Owe 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (nya)", () => {
		expect(p.parse("Rut. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rute 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ru 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (nya)", () => {
		expect(p.parse("Yesaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yes. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nya)", () => {
		expect(p.parse("1 Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nya)", () => {
		expect(p.parse("2 Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nya)", () => {
		expect(p.parse("1Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nya)", () => {
		expect(p.parse("2Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nya)", () => {
		expect(p.parse("1 Mafumu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Maf. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Maf 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Mafumu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Maf. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Maf 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nya)", () => {
		expect(p.parse("2 Mafumu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Maf. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Maf 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Mafumu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Maf. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Maf 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nya)", () => {
		expect(p.parse("1Maf. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nya)", () => {
		expect(p.parse("2Maf. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nya)", () => {
		expect(p.parse("1 Mbiri 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Mbi. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Mbi 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Mbiri 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Mbi. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Mbi 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nya)", () => {
		expect(p.parse("2 Mbiri 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Mbi. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Mbi 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Mbiri 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Mbi. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Mbi 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nya)", () => {
		expect(p.parse("1Mbi. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nya)", () => {
		expect(p.parse("2Mbi. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (nya)", () => {
		expect(p.parse("Ezara 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Eza. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (nya)", () => {
		expect(p.parse("Nehemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (nya)", () => {
		expect(p.parse("Estere 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (nya)", () => {
		expect(p.parse("Yob. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yobu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (nya)", () => {
		expect(p.parse("MaSalimo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salimo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mas. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (nya)", () => {
		expect(p.parse("Miyambo 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Miy. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Miy 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (nya)", () => {
		expect(p.parse("Mlaliki 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mlal. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mla. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mla 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (nya)", () => {
		expect(p.parse("Nyimbo ya Solomoni 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Nyi. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Nyi 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (nya)", () => {
		expect(p.parse("Yeremiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (nya)", () => {
		expect(p.parse("Ezekiele 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekieli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezk. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (nya)", () => {
		expect(p.parse("Daniele 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Danieli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (nya)", () => {
		expect(p.parse("Hoseya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (nya)", () => {
		expect(p.parse("Yowele 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoweli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yow. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yow 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (nya)", () => {
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (nya)", () => {
		expect(p.parse("Obadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (nya)", () => {
		expect(p.parse("Yon. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jnh 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (nya)", () => {
		expect(p.parse("Mik. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (nya)", () => {
		expect(p.parse("Nahumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (nya)", () => {
		expect(p.parse("Habakuku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (nya)", () => {
		expect(p.parse("Zefaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (nya)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (nya)", () => {
		expect(p.parse("Zekariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (nya)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mala. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nya)", () => {
		expect(p.parse("Mateyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nya)", () => {
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nya)", () => {
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nya)", () => {
		expect(p.parse("1Yoh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nya)", () => {
		expect(p.parse("2Yoh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nya)", () => {
		expect(p.parse("3 Yohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoh. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nya)", () => {
		expect(p.parse("1 Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nya)", () => {
		expect(p.parse("2 Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nya)", () => {
		expect(p.parse("Yohane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nya)", () => {
		expect(p.parse("Machitidwe a Atumwi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Machitidwe 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mac. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mach 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ntc. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nya)", () => {
		expect(p.parse("aRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Aro. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("aRo 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nya)", () => {
		expect(p.parse("1 Akorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ako. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ako 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Akorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ako. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ako 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nya)", () => {
		expect(p.parse("2 Akorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ako. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ako 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Akorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ako. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ako 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nya)", () => {
		expect(p.parse("1Ako. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nya)", () => {
		expect(p.parse("2Ako. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nya)", () => {
		expect(p.parse("aKolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Akol. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("aKol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nya)", () => {
		expect(p.parse("aGalatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Agal. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Aga. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("aGa 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nya)", () => {
		expect(p.parse("aEfeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Aef. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("aEf 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nya)", () => {
		expect(p.parse("aFilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Afi. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("aFi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nya)", () => {
		expect(p.parse("1 Atesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ate. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ate 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Atesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ate. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ate 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nya)", () => {
		expect(p.parse("2 Atesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ate. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ate 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Atesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ate. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ate 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nya)", () => {
		expect(p.parse("1Ate. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nya)", () => {
		expect(p.parse("2Ate. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nya)", () => {
		expect(p.parse("1 Timoteyo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteyo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nya)", () => {
		expect(p.parse("2 Timoteyo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteyo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nya)", () => {
		expect(p.parse("1Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nya)", () => {
		expect(p.parse("2Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nya)", () => {
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nya)", () => {
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nya)", () => {
		expect(p.parse("aHebri 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Aheb. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ahe. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("aHe 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nya)", () => {
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nya)", () => {
		expect(p.parse("1 Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nya)", () => {
		expect(p.parse("2 Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nya)", () => {
		expect(p.parse("1Pet. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nya)", () => {
		expect(p.parse("2Pet. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nya)", () => {
		expect(p.parse("Yud. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (nya)", () => {
		expect(p.parse("Tob. 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (nya)", () => {
		expect(p.parse("Yud. 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (nya)", () => {
		expect(p.parse("Bar. 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (nya)", () => {
		expect(p.parse("1 Am. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Am. 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (nya)", () => {
		expect(p.parse("2 Am. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Am. 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 1Macc (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (nya)", () => {
		expect(p.parse("1Am. 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (nya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (nya)", () => {
		expect(p.parse("2Am. 1:1").osis()).toEqual("2Macc.1.1");
	});
});

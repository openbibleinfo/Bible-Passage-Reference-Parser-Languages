"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ibo.js";

describe("Localized book Gen (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ibo)", () => {
		expect(p.parse("Jenesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Jen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ibo)", () => {
		expect(p.parse("Ọpupu 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ọpụpụ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ọpụ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ibo)", () => {
		expect(p.parse("Levitikọs 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ibo)", () => {
		expect(p.parse("Ọnu-ọgugu 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ọnụọgụgụ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ọnụ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ibo)", () => {
		expect(p.parse("Abụ Akwa 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Abù-ákwá 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Akw 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ibo)", () => {
		expect(p.parse("Mkpughe 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Nkpughe 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mkp 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ibo)", () => {
		expect(p.parse("Deuteronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Diuteronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dit 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ibo)", () => {
		expect(p.parse("Joshua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ibo)", () => {
		expect(p.parse("Ndị Ikpe 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ndi-ikpe 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Nkp 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ibo)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ibo)", () => {
		expect(p.parse("Aisaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Aịzaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Aịz 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ibo)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ibo)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ibo)", () => {
		expect(p.parse("1Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ibo)", () => {
		expect(p.parse("2Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ibo)", () => {
		expect(p.parse("1 Ndị Eze 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ndi-eze 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ndị Eze 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ndi-eze 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Ndị Eze 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Ndi-eze 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ibo)", () => {
		expect(p.parse("2 Ndị Eze 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ndi-eze 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ndị Eze 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ndi-eze 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Ndị Eze 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Ndi-eze 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ibo)", () => {
		expect(p.parse("1Ez 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ibo)", () => {
		expect(p.parse("2Ez 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ibo)", () => {
		expect(p.parse("1 Ihe E Mere 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ihe Emere 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ihe E Mere 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ihe Emere 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Ihe E Mere 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Ihe Emere 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ibo)", () => {
		expect(p.parse("2 Ihe E Mere 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ihe Emere 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ihe E Mere 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ihe Emere 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Ihe E Mere 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Ihe Emere 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ibo)", () => {
		expect(p.parse("1Ih 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ibo)", () => {
		expect(p.parse("2Ih 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ibo)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ibo)", () => {
		expect(p.parse("Nehemaia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemaya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ibo)", () => {
		expect(p.parse("Esta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ibo)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ibo)", () => {
		expect(p.parse("Ilu 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ibo)", () => {
		expect(p.parse("Ekiliziastis 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eklisiastis 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ekl 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ibo)", () => {
		expect(p.parse("Abù Nke Abù 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Abụ nke Abụ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Abk 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ibo)", () => {
		expect(p.parse("Abù Ọma 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Abụ Ọma 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Abụ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ibo)", () => {
		expect(p.parse("Jeremaia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremaya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ibo)", () => {
		expect(p.parse("Ezikiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Izikiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Izk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ibo)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ibo)", () => {
		expect(p.parse("Hosiya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ibo)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Juel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jul 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ibo)", () => {
		expect(p.parse("Emos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Emọs 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ems 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ibo)", () => {
		expect(p.parse("Obadaia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ọbadaya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ọbd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ibo)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ibo)", () => {
		expect(p.parse("Maika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mai 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ibo)", () => {
		expect(p.parse("Nehum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nhu 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ibo)", () => {
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ibo)", () => {
		expect(p.parse("Zefanaia 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefanaya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ibo)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hegai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Heg 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ibo)", () => {
		expect(p.parse("Zekaraia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zekaraya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ibo)", () => {
		expect(p.parse("Malakai 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malakaị 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ibo)", () => {
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ibo)", () => {
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ibo)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ibo)", () => {
		expect(p.parse("1Jọn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ibo)", () => {
		expect(p.parse("2Jọn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ibo)", () => {
		expect(p.parse("III. Jọn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jọn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jọn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ibo)", () => {
		expect(p.parse("1 Jọn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jọn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jọn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ibo)", () => {
		expect(p.parse("2 Jọn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jọn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jọn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ibo)", () => {
		expect(p.parse("Jọn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ibo)", () => {
		expect(p.parse("Ọlu Ndi-ozi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ọrụ Ndị Ozi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ọrụ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ibo)", () => {
		expect(p.parse("Ndi Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ndị Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ibo)", () => {
		expect(p.parse("1 Ndi Kọrint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ndị Kọrint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ndi Kọrint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ndị Kọrint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Ndi Kọrint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Ndị Kọrint 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ibo)", () => {
		expect(p.parse("2 Ndi Kọrint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ndị Kọrint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ndi Kọrint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ndị Kọrint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Ndi Kọrint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Ndị Kọrint 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ibo)", () => {
		expect(p.parse("1Kọ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ibo)", () => {
		expect(p.parse("2Kọ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ibo)", () => {
		expect(p.parse("Ndi Kọlọsi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ndị Kọlọsị 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kọl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ibo)", () => {
		expect(p.parse("Ndị Galeshịa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ndi Galetia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ibo)", () => {
		expect(p.parse("Ndi Efesọs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ndị Efesọs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ibo)", () => {
		expect(p.parse("Ndi Filipai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ndị Filipai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ibo)", () => {
		expect(p.parse("1 Ndi Tesalọnaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ndị Tesalonaịka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ndi Tesalọnaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ndị Tesalonaịka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Ndi Tesalọnaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Ndị Tesalonaịka 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ibo)", () => {
		expect(p.parse("2 Ndi Tesalọnaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ndị Tesalonaịka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ndi Tesalọnaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ndị Tesalonaịka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Ndi Tesalọnaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Ndị Tesalonaịka 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ibo)", () => {
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ibo)", () => {
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ibo)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timọti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timọti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timọti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ibo)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timọti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timọti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timọti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ibo)", () => {
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ibo)", () => {
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ibo)", () => {
		expect(p.parse("Taitọs 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Taịtọs 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Taị 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ibo)", () => {
		expect(p.parse("Failimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fịlịmọn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fịl 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ibo)", () => {
		expect(p.parse("Ndị Hibru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ndi-hibru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ibo)", () => {
		expect(p.parse("Jemes 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jemis 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jem 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ibo)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ibo)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ibo)", () => {
		expect(p.parse("1Pt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ibo)", () => {
		expect(p.parse("2Pt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ibo)", () => {
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle translations (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (ibo)", () => {
		expect(p.parse("Lev 1 (ICB)").osis_and_translations()).toEqual([["Lev.1","ICB"]]);
		expect(p.parse("Lev 1 (IGBOB)").osis_and_translations()).toEqual([["Lev.1","IGBOB"]]);
	});
});
describe("Parser helper should handle book ranges (ibo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (ibo)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jọn - III. Jọn").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jọn – III. Jọn").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jọn — III. Jọn").osis()).toEqual("1John.1-3John.1");
	});
});

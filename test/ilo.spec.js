"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ilo.js";

describe("Localized book Gen (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ilo)", () => {
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ilo)", () => {
		expect(p.parse("Exodo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ex. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ilo)", () => {
		expect(p.parse("Levitico 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ilo)", () => {
		expect(p.parse("Numeros 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Numero 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ilo)", () => {
		expect(p.parse("Dagiti Un-unnoy 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Dungdung-aw 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("D. Un. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Dung. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ilo)", () => {
		expect(p.parse("Apocalipsis 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Paltiing 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apoc. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pal. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ilo)", () => {
		expect(p.parse("Deuteronomio 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ilo)", () => {
		expect(p.parse("Josue 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ilo)", () => {
		expect(p.parse("Oc-ocom 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Uk-ukom 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Oc. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Uk. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ilo)", () => {
		expect(p.parse("Rut. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rt. 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ilo)", () => {
		expect(p.parse("Isaias 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Is. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ilo)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ilo)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ilo)", () => {
		expect(p.parse("1 Ar-ari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ar. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ar-ari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ar. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Ar-ari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Ar. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Ar-ari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Ar. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ilo)", () => {
		expect(p.parse("2 Ar-ari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ar. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ar-ari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ar. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Ar-ari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Ar. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Ar-ari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Ar. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ilo)", () => {
		expect(p.parse("1 Cronicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Cron. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Cronicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Cron. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Cronicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Cron. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Cronicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Cron. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ilo)", () => {
		expect(p.parse("2 Cronicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Cron. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Cronicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Cron. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Cronicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Cron. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Cronicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Cron. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ilo)", () => {
		expect(p.parse("Esdras 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esd. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ez. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ilo)", () => {
		expect(p.parse("Nehemias 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ilo)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ilo)", () => {
		expect(p.parse("Jb. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ilo)", () => {
		expect(p.parse("Dagiti Proverbio 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ilo)", () => {
		expect(p.parse("Eclesiastes 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecle. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ec. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ilo)", () => {
		expect(p.parse("Ti Canta Ni Salomon 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Kanta ni Solomon 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("C. ni Sal. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Kanta. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ilo)", () => {
		expect(p.parse("Dagiti Salmo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sal. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ilo)", () => {
		expect(p.parse("Jeremias 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ilo)", () => {
		expect(p.parse("Ezequiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ilo)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ilo)", () => {
		expect(p.parse("Oseas 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Os. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ilo)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jl. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ilo)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ilo)", () => {
		expect(p.parse("Obadias 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abdias 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obd. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ab. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ilo)", () => {
		expect(p.parse("Jonas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ilo)", () => {
		expect(p.parse("Mikias 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mik. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mk. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ilo)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ilo)", () => {
		expect(p.parse("Habacuc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ilo)", () => {
		expect(p.parse("Sofonias 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ilo)", () => {
		expect(p.parse("Haggeo 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ilo)", () => {
		expect(p.parse("Zacarias 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zac. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ilo)", () => {
		expect(p.parse("Malakias 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mlk. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ilo)", () => {
		expect(p.parse("San Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ilo)", () => {
		expect(p.parse("San Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ilo)", () => {
		expect(p.parse("San Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ilo)", () => {
		expect(p.parse("III Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ilo)", () => {
		expect(p.parse("San Juan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Juan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ilo)", () => {
		expect(p.parse("1 Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jn. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ilo)", () => {
		expect(p.parse("2 Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jn. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ilo)", () => {
		expect(p.parse("Dagiti Aramid 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("D. Ara. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ara. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ilo)", () => {
		expect(p.parse("Taga Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Taga-Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ilo)", () => {
		expect(p.parse("1 Taga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Taga-Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Taga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Taga-Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Taga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Taga-Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Taga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Taga-Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Cor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ilo)", () => {
		expect(p.parse("2 Taga Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Taga-Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Taga Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Taga-Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Taga Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Taga-Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Taga Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Taga-Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Cor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ilo)", () => {
		expect(p.parse("Taga Colosas 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Taga-Colosas 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ilo)", () => {
		expect(p.parse("Taga Galacia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Taga-Galacia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ilo)", () => {
		expect(p.parse("Taga Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Taga-Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ilo)", () => {
		expect(p.parse("Taga Filipos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Taga-Filipos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fili. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ilo)", () => {
		expect(p.parse("1 Taga Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Taga-Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Taga Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Taga-Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Taga Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Taga-Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Taga Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Taga-Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tes. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ilo)", () => {
		expect(p.parse("2 Taga Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Taga-Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Taga Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Taga-Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Taga Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Taga-Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Taga Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Taga-Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tes. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ilo)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ilo)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ilo)", () => {
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ilo)", () => {
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ilo)", () => {
		expect(p.parse("Hebreo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ilo)", () => {
		expect(p.parse("Santiago 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Sant. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("San. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ilo)", () => {
		expect(p.parse("1 Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Ped. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ped. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Ped. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Ped. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ilo)", () => {
		expect(p.parse("2 Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Ped. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Ped. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Ped. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Ped. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ilo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ilo)", () => {
		expect(p.parse("San Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jd. 1:1").osis()).toEqual("Jude.1.1");
	});
});

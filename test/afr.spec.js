"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/afr.js";

describe("Localized book Gen (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (afr)", () => {
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Génesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gén. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (afr)", () => {
		expect(p.parse("Eksodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eks. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eks 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ex. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (afr)", () => {
		expect(p.parse("Levitikus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levítikus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (afr)", () => {
		expect(p.parse("Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Númeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Núm. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (afr)", () => {
		expect(p.parse("Klaagliedere van Jeremia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Klaagliedere 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Klaagl. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Klaagl 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (afr)", () => {
		expect(p.parse("Die Openbaring 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Openbaring 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Openb. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Openb 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Op. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Op 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (afr)", () => {
		expect(p.parse("Deuteronomium 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deuteronómium 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (afr)", () => {
		expect(p.parse("Josua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (afr)", () => {
		expect(p.parse("Rigters 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Rigt. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Rig. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Rig 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (afr)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (afr)", () => {
		expect(p.parse("Jesaja 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jes. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jes 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (afr)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (afr)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (afr)", () => {
		expect(p.parse("1 Konings 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kon. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kon 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Konings 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kon. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kon 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Konings 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Kon. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Kon 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Konings 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Kon. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Kon 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (afr)", () => {
		expect(p.parse("2 Konings 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kon. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kon 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Konings 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kon. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kon 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Konings 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Kon. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Kon 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Konings 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Kon. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Kon 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (afr)", () => {
		expect(p.parse("1 Kronieke 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kron. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kronieke 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kron. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Kronieke 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Kron. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Kronieke 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Kron. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Kron 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (afr)", () => {
		expect(p.parse("2 Kronieke 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kron. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kronieke 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kron. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Kronieke 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Kron. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Kronieke 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Kron. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Kron 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (afr)", () => {
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (afr)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemía 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (afr)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (afr)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (afr)", () => {
		expect(p.parse("Psalms 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (afr)", () => {
		expect(p.parse("Spreuke 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Spr. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Spr 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (afr)", () => {
		expect(p.parse("Prediker 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Pred. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Pred 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (afr)", () => {
		expect(p.parse("Hooglied 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hoogl. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hoogl 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (afr)", () => {
		expect(p.parse("Jeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (afr)", () => {
		expect(p.parse("Esegiël 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eségiël 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eseg. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eség. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eseg 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (afr)", () => {
		expect(p.parse("Daniël 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (afr)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoséa 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (afr)", () => {
		expect(p.parse("Joël 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (afr)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (afr)", () => {
		expect(p.parse("Obadja 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obádja 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obád. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (afr)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (afr)", () => {
		expect(p.parse("Miga 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (afr)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (afr)", () => {
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hábakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Háb. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (afr)", () => {
		expect(p.parse("Sefanja 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefánja 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (afr)", () => {
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (afr)", () => {
		expect(p.parse("Sagaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sagaría 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sag. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sag 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (afr)", () => {
		expect(p.parse("Maleagi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Maleági 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (afr)", () => {
		expect(p.parse("Matthéüs 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matteus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (afr)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (afr)", () => {
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (afr)", () => {
		expect(p.parse("III Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Joh. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (afr)", () => {
		expect(p.parse("1 Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Joh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Joh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Joh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (afr)", () => {
		expect(p.parse("2 Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Joh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Joh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Joh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (afr)", () => {
		expect(p.parse("Johannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (afr)", () => {
		expect(p.parse("Handelinge 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hand. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hand 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (afr)", () => {
		expect(p.parse("Romeine 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (afr)", () => {
		expect(p.parse("1 Korinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (afr)", () => {
		expect(p.parse("2 Korinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (afr)", () => {
		expect(p.parse("Kolossense 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (afr)", () => {
		expect(p.parse("Galasiërs 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galásiërs 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (afr)", () => {
		expect(p.parse("Efesiërs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efésiërs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efés. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (afr)", () => {
		expect(p.parse("Filippense 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (afr)", () => {
		expect(p.parse("1 Thessalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thessalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tessalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thessalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thessalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tessalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thessalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thessalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tessalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (afr)", () => {
		expect(p.parse("2 Thessalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thessalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tessalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thessalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thessalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tessalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thessalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thessalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tessalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (afr)", () => {
		expect(p.parse("1 Timótheüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timótheüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timótheüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timótheüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (afr)", () => {
		expect(p.parse("2 Timótheüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timótheüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timótheüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timótheüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (afr)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (afr)", () => {
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filémon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filém. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (afr)", () => {
		expect(p.parse("Hebreërs 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebr. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (afr)", () => {
		expect(p.parse("Jakobus 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (afr)", () => {
		expect(p.parse("1 Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petr. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petr. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petr. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petr. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (afr)", () => {
		expect(p.parse("2 Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petr. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petr. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petr. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petr. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (afr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (afr)", () => {
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

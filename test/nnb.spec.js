"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nnb.js";

describe("Localized book Gen (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (nnb)", () => {
		expect(p.parse("Enzũko 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Enz 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (nnb)", () => {
		expect(p.parse("Erĩlũayo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Erĩ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (nnb)", () => {
		expect(p.parse("Abalawĩ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Law 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (nnb)", () => {
		expect(p.parse("Emiganzo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Emig 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (nnb)", () => {
		expect(p.parse("Ekiriro 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Eki 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nnb)", () => {
		expect(p.parse("Erĩbĩsũlĩrwa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Eribisurirwa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Erĩb 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (nnb)", () => {
		expect(p.parse("Eryibuka Ebihano 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ebi 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (nnb)", () => {
		expect(p.parse("Yosũa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (nnb)", () => {
		expect(p.parse("Abatswerĩ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Abat 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (nnb)", () => {
		expect(p.parse("Rũta 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (nnb)", () => {
		expect(p.parse("Ĩsaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ĩsa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nnb)", () => {
		expect(p.parse("1 Samwelĩ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samwelĩ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nnb)", () => {
		expect(p.parse("2 Samwelĩ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samwelĩ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nnb)", () => {
		expect(p.parse("1 Abami 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Bam 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Abami 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Bam 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nnb)", () => {
		expect(p.parse("2 Abami 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Bam 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Abami 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Bam 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nnb)", () => {
		expect(p.parse("1 Emyatsi yʼEmigulu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Emy 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Emyatsi yʼEmigulu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Emy 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nnb)", () => {
		expect(p.parse("2 Emyatsi yʼEmigulu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Emy 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Emyatsi yʼEmigulu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Emy 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (nnb)", () => {
		expect(p.parse("Ezera 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (nnb)", () => {
		expect(p.parse("Nehemĩa 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (nnb)", () => {
		expect(p.parse("Esĩterĩ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esĩ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (nnb)", () => {
		expect(p.parse("Yobũ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (nnb)", () => {
		expect(p.parse("Esyonyimbo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sauma 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Esy 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (nnb)", () => {
		expect(p.parse("Emĩsyo 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Emĩ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (nnb)", () => {
		expect(p.parse("Omũgambũlĩ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Omũ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (nnb)", () => {
		expect(p.parse("Olwimbo lwʼEsyonyimbo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Olw 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (nnb)", () => {
		expect(p.parse("Yeremĩa 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (nnb)", () => {
		expect(p.parse("Ezekĩelĩ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (nnb)", () => {
		expect(p.parse("Danĩelĩ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (nnb)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (nnb)", () => {
		expect(p.parse("Yoelĩ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoe 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (nnb)", () => {
		expect(p.parse("Amosĩ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (nnb)", () => {
		expect(p.parse("Obadĩa 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (nnb)", () => {
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (nnb)", () => {
		expect(p.parse("Mĩka 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (nnb)", () => {
		expect(p.parse("Nahũmũ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (nnb)", () => {
		expect(p.parse("Habakũkĩ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (nnb)", () => {
		expect(p.parse("Zefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (nnb)", () => {
		expect(p.parse("Hagaĩ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (nnb)", () => {
		expect(p.parse("Zekarĩa 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (nnb)", () => {
		expect(p.parse("Malakĩ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nnb)", () => {
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nnb)", () => {
		expect(p.parse("Mariko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marĩko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nnb)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lũka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nnb)", () => {
		expect(p.parse("1 Yoane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nnb)", () => {
		expect(p.parse("2 Yoane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nnb)", () => {
		expect(p.parse("3 Yoane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nnb)", () => {
		expect(p.parse("Yoane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nnb)", () => {
		expect(p.parse("Emibiri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Emĩbĩrĩ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Emĩb 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nnb)", () => {
		expect(p.parse("Abanya Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("AbanyaRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Abar 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nnb)", () => {
		expect(p.parse("1 Abanya Korĩnto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 AbanyaKorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Abanya Korĩnto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. AbanyaKorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nnb)", () => {
		expect(p.parse("2 Abanya Korĩnto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 AbanyaKorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Abanya Korĩnto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. AbanyaKorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nnb)", () => {
		expect(p.parse("Abanya Kolosaĩ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("AbanyaKolosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nnb)", () => {
		expect(p.parse("Abanya Galatĩa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("AbanyaGalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nnb)", () => {
		expect(p.parse("Abanya Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("AbanyaEfeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nnb)", () => {
		expect(p.parse("Abanya Fĩlĩpĩ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("AbanyaFilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fĩl 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nnb)", () => {
		expect(p.parse("1 Abanya Tesalonĩka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 AbanyaTesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Abanya Tesalonĩka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. AbanyaTesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nnb)", () => {
		expect(p.parse("2 Abanya Tesalonĩka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 AbanyaTesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Abanya Tesalonĩka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. AbanyaTesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nnb)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tĩmoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tĩm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tĩmoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tĩm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nnb)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tĩmoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tĩm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tĩmoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tĩm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nnb)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tĩto 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nnb)", () => {
		expect(p.parse("Filemono 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fĩlemono 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fĩle 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nnb)", () => {
		expect(p.parse("AbaEbrania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nnb)", () => {
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nnb)", () => {
		expect(p.parse("1 Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nnb)", () => {
		expect(p.parse("2 Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nnb)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yũda 1:1").osis()).toEqual("Jude.1.1");
	});
});

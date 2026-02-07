"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ktb.js";

describe("Localized book Gen (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ktb)", () => {
		expect(p.parse("Qooccanchi Matsaafa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Qooc. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ktb)", () => {
		expect(p.parse("Fuli Matsaafa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ful. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ktb)", () => {
		expect(p.parse("Leew manni Matsaafa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Leew. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ktb)", () => {
		expect(p.parse("Wollo Matsaafa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Wol. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ktb)", () => {
		expect(p.parse("Aayyeeshsha Matsaafa 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Aay. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ktb)", () => {
		expect(p.parse("Caakki Matsaafa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Caak. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ktb)", () => {
		expect(p.parse("Azzazo Matsaafa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Azz. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ktb)", () => {
		expect(p.parse("Iyyaaso Matsaafa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iys. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ktb)", () => {
		expect(p.parse("Gashshaanni Matsaafa 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Gash. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ktb)", () => {
		expect(p.parse("Ruute Matsaafa 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruut. 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ktb)", () => {
		expect(p.parse("Hiraagaancho Issiyaase Matsaafa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Iss. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ktb)", () => {
		expect(p.parse("Saamueele Wona Matsaafa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Saam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ktb)", () => {
		expect(p.parse("Saamueele Lanki Matsaafa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Saam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ktb)", () => {
		expect(p.parse("Wommaakka Wona Matsaafa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Wom. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ktb)", () => {
		expect(p.parse("Wommaakka Lanki Matsaafa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Wom. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ktb)", () => {
		expect(p.parse("Dudubi Wona Matsaafa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Dud. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ktb)", () => {
		expect(p.parse("Dudubi Lanki Matsaafa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Dud. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ktb)", () => {
		expect(p.parse("Izra Matsaafa 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Izr. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ktb)", () => {
		expect(p.parse("Nahimiya Matsaafa 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ktb)", () => {
		expect(p.parse("Asteere Matsaafa 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ast. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ktb)", () => {
		expect(p.parse("Iyyoobe Matsaafa 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Iyb. 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ktb)", () => {
		expect(p.parse("Mazmuri Matsaafa 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Maz. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ktb)", () => {
		expect(p.parse("Agudiishsha Matsaafa 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Agu. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ktb)", () => {
		expect(p.parse("Qoorima Matsaafa 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Qoor. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ktb)", () => {
		expect(p.parse("Abba Mazmura 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Amaz. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ktb)", () => {
		expect(p.parse("Hiraagaancho Ermiyaase Matsaafa 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Erm. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ktb)", () => {
		expect(p.parse("Hiraagaancho Hizqe'eele Matsaafa 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hiz. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ktb)", () => {
		expect(p.parse("Hiraagaancho Daanieele Matsaafa 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ktb)", () => {
		expect(p.parse("Hiraagaancho Hoose'e Matsaafa 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoos. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ktb)", () => {
		expect(p.parse("Hiraagaancho Iyyoeele Maaxaafa 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Iyl. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ktb)", () => {
		expect(p.parse("Hiraagaancho Amootse Matsaafa 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ktb)", () => {
		expect(p.parse("Hiraagaancho Abdiyo Matsaafa 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ktb)", () => {
		expect(p.parse("Hiraagaancho Yoonaase Matsaafa 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yoon. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ktb)", () => {
		expect(p.parse("Hiraagaancho Mikkiyaase Matsaafa 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mik. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ktb)", () => {
		expect(p.parse("Hiraagaancho Naahoome Matsaafa 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naah. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ktb)", () => {
		expect(p.parse("Hiraagaancho Imbaaqoome Matsaafa 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Imb. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ktb)", () => {
		expect(p.parse("Hiraagaancho Sofooniyaase Matsaafa 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ktb)", () => {
		expect(p.parse("Hiraagaancho Haage Matsaafa 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haag. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ktb)", () => {
		expect(p.parse("Hiraagaancho Zakkaariyaase Matsaafa 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ktb)", () => {
		expect(p.parse("Hiraagaancho Milkiyaase Matsaafa 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mil. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ktb)", () => {
		expect(p.parse("Maatoose Mishiraachchi Matsaafa 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ktb)", () => {
		expect(p.parse("Maarqoose Mishiraachchi Matsaafa 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maar. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ktb)", () => {
		expect(p.parse("Luqaase Mishiraachchi Matsaafa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luq. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ktb)", () => {
		expect(p.parse("Yohaannise Wona Sohinuta 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yoh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ktb)", () => {
		expect(p.parse("Yohaannise Lanki Sohinuta 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yoh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ktb)", () => {
		expect(p.parse("Yohaannise Sakki Sohinuta 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ktb)", () => {
		expect(p.parse("Yohaannise Mishiraachchi Matsaafa 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ktb)", () => {
		expect(p.parse("Soqqamaanni Huje Matsaafa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Soq. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ktb)", () => {
		expect(p.parse("Roome Sohinuta 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Room. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ktb)", () => {
		expect(p.parse("Qorontoosi Wona Sohinuta 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Qor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ktb)", () => {
		expect(p.parse("Qorontoosi Lanki Sohinuta 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Qor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ktb)", () => {
		expect(p.parse("Qollaasiyaasi Sohinuta 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Qol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ktb)", () => {
		expect(p.parse("Galaatiyi Sohinuta 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ktb)", () => {
		expect(p.parse("Efesooni Sohinuta 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efn. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ktb)", () => {
		expect(p.parse("Filiphsuusi Sohinuta 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flph. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ktb)", () => {
		expect(p.parse("Tasaloonqe Wona Sohinuta 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tas. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ktb)", () => {
		expect(p.parse("Tasaloonqe Lanki Sohinta 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tas. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ktb)", () => {
		expect(p.parse("Ximaatoose Wona Sohinuta 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Xim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ktb)", () => {
		expect(p.parse("Ximaatoose Lanki Sohinuta 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Xim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ktb)", () => {
		expect(p.parse("Tiito Sohinuta 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tiit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ktb)", () => {
		expect(p.parse("Filimoone Sohinuta 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ktb)", () => {
		expect(p.parse("Ibr manni Sohinuta 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ktb)", () => {
		expect(p.parse("Yaaqoobe Sohinuta 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaaq. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ktb)", () => {
		expect(p.parse("Pheexiroose Wona Sohinuta 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pheex. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ktb)", () => {
		expect(p.parse("Pheexroose Lanki Sohinuta 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pheex. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ktb)", () => {
		expect(p.parse("Yihudi Sohinuta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yih. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (ktb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (ktb)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yohaannise Wona Sohinuta - Yohaannise Sakki Sohinuta").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yohaannise Wona Sohinuta – Yohaannise Sakki Sohinuta").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yohaannise Wona Sohinuta — Yohaannise Sakki Sohinuta").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lis.js";

describe("Localized book Gen (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (lis)", () => {
		expect(p.parse("yi ce yi wu To L 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("wu 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (lis)", () => {
		expect(p.parse("do je To L 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("do 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (lis)", () => {
		expect(p.parse("lE-yi To L 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("lE 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (lis)", () => {
		expect(p.parse("p xy U To L 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("U 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (lis)", () => {
		expect(p.parse("a CyH jE To L 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Cy 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lis)", () => {
		expect(p.parse("mo gL du To L 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mo 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (lis)", () => {
		expect(p.parse("jU k bA m. To L 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("jU 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (lis)", () => {
		expect(p.parse("yo-xu To L 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("xu 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (lis)", () => {
		expect(p.parse("bA mu xy, P To L 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("bA 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (lis)", () => {
		expect(p.parse("Ru-te To L 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ru 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (lis)", () => {
		expect(p.parse("yi-s-y To L 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("s 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Kgs (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lis)", () => {
		expect(p.parse("1 w ti To L 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 w 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. w ti To L 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. w 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lis)", () => {
		expect(p.parse("2 w ti To L 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 w 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. w ti To L 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. w 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book Ezra (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (lis)", () => {
		expect(p.parse("E,-sL-l To L 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("sL 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (lis)", () => {
		expect(p.parse("ni-y-m-y To L 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Ni 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (lis)", () => {
		expect(p.parse("E-sl-te To L 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("E 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (lis)", () => {
		expect(p.parse("yo-be To L 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("be 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (lis)", () => {
		expect(p.parse("Vo jE To L 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("jE 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (lis)", () => {
		expect(p.parse("m. mi c P To L 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("c 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book 1Chr (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (lis)", () => {
		expect(p.parse("1 c mi To L 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 mi 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. c mi To L 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. mi 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (lis)", () => {
		expect(p.parse("2 c mi To L 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 mi 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. c mi To L 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. mi 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Song (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (lis)", () => {
		expect(p.parse("so-lo-mo mu gw To L 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("So 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (lis)", () => {
		expect(p.parse("mu gw To L 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("gw 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book 1Sam (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lis)", () => {
		expect(p.parse("1 s-mu-ye To L 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 mu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. s-mu-ye To L 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. mu 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lis)", () => {
		expect(p.parse("2 s-mu-ye To L 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 mu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. s-mu-ye To L 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. mu 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book Jer (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (lis)", () => {
		expect(p.parse("ye-li-mi To L 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ye 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (lis)", () => {
		expect(p.parse("yi-xi-ce To L 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ce 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (lis)", () => {
		expect(p.parse("d-ni-le To L 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("d 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (lis)", () => {
		expect(p.parse("ho-xi-y To L 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ho 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Amos (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (lis)", () => {
		expect(p.parse("a-mo-si To L 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("a 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (lis)", () => {
		expect(p.parse("o-bD-d-y; To L 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("o 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (lis)", () => {
		expect(p.parse("yo,-n To L 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("n 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (lis)", () => {
		expect(p.parse("Mi-kd: To L 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Kd 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (lis)", () => {
		expect(p.parse("ne-yu-mD To L 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Ne 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (lis)", () => {
		expect(p.parse("H-b-kl To L 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("h 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (lis)", () => {
		expect(p.parse("Rd-j-n-y; To L 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("J 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (lis)", () => {
		expect(p.parse("h-kD To L 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("kD 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (lis)", () => {
		expect(p.parse("s-cy-li-y To L 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("cy 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (lis)", () => {
		expect(p.parse("MA-lD-kd To L 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("mA 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lis)", () => {
		expect(p.parse("m-Ti To L 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("m 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lis)", () => {
		expect(p.parse("m-Ko To L 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Ko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lis)", () => {
		expect(p.parse("lu-K To L 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lis)", () => {
		expect(p.parse("1 yo-v To L 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yo 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. yo-v To L 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yo 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lis)", () => {
		expect(p.parse("2 yo-v To L 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yo 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. yo-v To L 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yo 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lis)", () => {
		expect(p.parse("3 yo-v To L 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yo 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. yo-v To L 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yo 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lis)", () => {
		expect(p.parse("yo-v To L 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yo 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lis)", () => {
		expect(p.parse("fi du To L 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("fi 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lis)", () => {
		expect(p.parse("ro-m To L 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lis)", () => {
		expect(p.parse("1 Ko-lE-Tu To L 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 lE 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ko-lE-Tu To L 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. lE 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lis)", () => {
		expect(p.parse("2 Ko-lE-Tu To L 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 lE 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ko-lE-Tu To L 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. lE 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lis)", () => {
		expect(p.parse("ko-lo-xi To L 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ko 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lis)", () => {
		expect(p.parse("g-l-Ti-y To L 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("g 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lis)", () => {
		expect(p.parse("yi-Ju-so To L 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("yi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lis)", () => {
		expect(p.parse("Pi-li-Pi To L 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("li 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lis)", () => {
		expect(p.parse("1 Te-s-lo-ni-y To L 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te-s-lo-ni-y To L 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lis)", () => {
		expect(p.parse("2 Te-s-lo-ni-y To L 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te-s-lo-ni-y To L 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lis)", () => {
		expect(p.parse("1 Ti-mo-Ti-wu To L 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti-mo-Ti-wu To L 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lis)", () => {
		expect(p.parse("2 Ti-mo-Ti-wu To L 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti-mo-Ti-wu To L 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Phlm (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lis)", () => {
		expect(p.parse("Pi-li-mD To L 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("mD 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lis)", () => {
		expect(p.parse("vi-bE-ru To L 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("vi 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lis)", () => {
		expect(p.parse("y-ku To L 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("y 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lis)", () => {
		expect(p.parse("1 Pi-te To L 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pi-te To L 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lis)", () => {
		expect(p.parse("2 Pi-te To L 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pi-te To L 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lis)", () => {
		expect(p.parse("yu-t To L 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yu 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Joel (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (lis)", () => {
		expect(p.parse("yo-L To L 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("L 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Titus (lis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lis)", () => {
		expect(p.parse("Ti-to To L 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("To 1:1").osis()).toEqual("Titus.1.1");
	});
});

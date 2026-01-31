"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ahk.js";

describe("Localized book Gen (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ahk)", () => {
		expect(p.parse("Aˇ dahˬ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ahk)", () => {
		expect(p.parse("Doˆ-iˇ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ahk)", () => {
		expect(p.parse("Uˬ duˬ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ahk)", () => {
		expect(p.parse("Bawˇtsahˬ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ahk)", () => {
		expect(p.parse("Ngoeˇ dawˬ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ahk)", () => {
		expect(p.parse("Pah meuˬ-eu 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Panmaeq 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pm 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ahk)", () => {
		expect(p.parse("Dawˬmehˬ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ahk)", () => {
		expect(p.parse("Yawˇshuˆ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ahk)", () => {
		expect(p.parse("Yaˇ kʼaˬ daˇ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ahk)", () => {
		expect(p.parse("Luˇta 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ahk)", () => {
		expect(p.parse("Iˇsaˬyaˇ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ahk)", () => {
		expect(p.parse("1 Saˬmeuˬlaˆ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Saˬmeuˬlaˆ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ahk)", () => {
		expect(p.parse("2 Saˬmeuˬlaˆ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Saˬmeuˬlaˆ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ahk)", () => {
		expect(p.parse("1 Sahˬpaˬ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Sahˬpaˬ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ahk)", () => {
		expect(p.parse("2 Sahˬpaˬ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Sahˬpaˬ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ahk)", () => {
		expect(p.parse("1 Laˬsaˬbaˬ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Laˬsaˬbaˬ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ahk)", () => {
		expect(p.parse("2 Laˬsaˬbaˬ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Laˬsaˬbaˬ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ahk)", () => {
		expect(p.parse("Eˇzaˬlaˬ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ahk)", () => {
		expect(p.parse("Neˬhaˬmiˇ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ahk)", () => {
		expect(p.parse("Iˇsaˬtaˆ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ahk)", () => {
		expect(p.parse("Yawˇbaˆ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ahk)", () => {
		expect(p.parse("Ja ceuˬ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Jaceuq 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Jc 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ahk)", () => {
		expect(p.parse("Dawˬ daˬ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Dawqdaq 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Dd 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ahk)", () => {
		expect(p.parse("Dawˬ tsoˆ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ahk)", () => {
		expect(p.parse("Dawˬ caˇ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ahk)", () => {
		expect(p.parse("Yeˬlaˬmiˇ 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ahk)", () => {
		expect(p.parse("Yeˬsaˬgeˬlaˇ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ahk)", () => {
		expect(p.parse("Daˬyeˬlaˇ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ahk)", () => {
		expect(p.parse("Hawˇseˬ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ahk)", () => {
		expect(p.parse("Yawˇlaˆ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ahk)", () => {
		expect(p.parse("Aˬmoˆ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ahk)", () => {
		expect(p.parse("Aaˇbaˬdiˇ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ahk)", () => {
		expect(p.parse("Yawˇnaˆ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ahk)", () => {
		expect(p.parse("Miˇkaˬ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ahk)", () => {
		expect(p.parse("Naˬhmˬ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ahk)", () => {
		expect(p.parse("Haˬbaˬkuˆ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ahk)", () => {
		expect(p.parse("Zeˬpaˬniˇ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ahk)", () => {
		expect(p.parse("Haˬgaiˇ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ahk)", () => {
		expect(p.parse("Zaˬkaˬliˇ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ahk)", () => {
		expect(p.parse("Maˬlaˬkiˇ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ahk)", () => {
		expect(p.parse("Maꞈtehˬ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maqtaeq 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ahk)", () => {
		expect(p.parse("Maˬkuˆ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maqkuv 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ahk)", () => {
		expect(p.parse("Luˇkaꞈ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lurkaf 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ahk)", () => {
		expect(p.parse("1Yh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ahk)", () => {
		expect(p.parse("2Yh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ahk)", () => {
		expect(p.parse("3 Yoˇhaˬ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yorhaq 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ahk)", () => {
		expect(p.parse("1 Yoˇhaˬ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yorhaq 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoˇhaˬ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yorhaq 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ahk)", () => {
		expect(p.parse("2 Yoˇhaˬ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yorhaq 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoˇhaˬ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yorhaq 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ahk)", () => {
		expect(p.parse("Yoˇhaˬ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yorhaq 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ahk)", () => {
		expect(p.parse("Ghaqkhaer 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gʼaˬkʼehˇ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ghkh 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ahk)", () => {
		expect(p.parse("Loˇmaˆ sahˬ boꞈ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lormav 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ahk)", () => {
		expect(p.parse("1 Gawˇliˬtu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Gawrliqtu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Gawˇliˬtu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Gawrliqtu 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ahk)", () => {
		expect(p.parse("2 Gawˇliˬtu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Gawrliqtu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Gawˇliˬtu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Gawrliqtu 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ahk)", () => {
		expect(p.parse("1Glt 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ahk)", () => {
		expect(p.parse("2Glt 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ahk)", () => {
		expect(p.parse("Gawˇlawˇsehˇ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Gawrlawrsaer 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Gls 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ahk)", () => {
		expect(p.parse("Gaˬlaˬtiˆ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gaqlaqtiv 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Glt 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ahk)", () => {
		expect(p.parse("Eˇpeˇsu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Erpersu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eps 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ahk)", () => {
		expect(p.parse("Piˇliˇpiˆ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pirlirpiv 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Plp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ahk)", () => {
		expect(p.parse("1 Teˇsaˬloˇni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tersaqlorni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Teˇsaˬloˇni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tersaqlorni 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ahk)", () => {
		expect(p.parse("2 Teˇsaˬloˇni 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tersaqlorni 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Teˇsaˬloˇni 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tersaqlorni 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ahk)", () => {
		expect(p.parse("1Tsln 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ahk)", () => {
		expect(p.parse("2Tsln 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ahk)", () => {
		expect(p.parse("1 Tiˆmoˇseˬ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tivmorseq 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tiˆmoˇseˬ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tivmorseq 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ahk)", () => {
		expect(p.parse("2 Tiˆmoˇseˬ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tivmorseq 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tiˆmoˇseˬ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tivmorseq 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ahk)", () => {
		expect(p.parse("1Tms 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ahk)", () => {
		expect(p.parse("2Tms 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ahk)", () => {
		expect(p.parse("Tiˇtuˆ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tirtuv 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ahk)", () => {
		expect(p.parse("Piˇleˇmoˬ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pirlermoq 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Plm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ahk)", () => {
		expect(p.parse("HeˬByehˇ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heqbyaer 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hby 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ahk)", () => {
		expect(p.parse("Yaˬkoˆ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaqkov 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ahk)", () => {
		expect(p.parse("1 Beˬtuˆluˆ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Beqtuvluv 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Beˬtuˆluˆ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Beqtuvluv 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ahk)", () => {
		expect(p.parse("2 Beˬtuˆluˆ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Beqtuvluv 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Beˬtuˆluˆ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Beqtuvluv 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ahk)", () => {
		expect(p.parse("1Btl 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ahk)", () => {
		expect(p.parse("2Btl 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ahk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ahk)", () => {
		expect(p.parse("Yuˇdaˆ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yurdav 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yd 1:1").osis()).toEqual("Jude.1.1");
	});
});

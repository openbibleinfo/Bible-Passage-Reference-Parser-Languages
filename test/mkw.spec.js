"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mkw.js";

describe("Localized book Gen (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mkw)", () => {
		expect(p.parse("Mbandukulu 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mba 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (mkw)", () => {
		expect(p.parse("Kubasika 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kbk 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (mkw)", () => {
		expect(p.parse("Kinganga 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Knz 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (mkw)", () => {
		expect(p.parse("Lutangu 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ltg 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (mkw)", () => {
		expect(p.parse("Manyongo 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Mng 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mkw)", () => {
		expect(p.parse("Luzabusu 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Luz 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (mkw)", () => {
		expect(p.parse("2 Musiku 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("2Mu 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (mkw)", () => {
		expect(p.parse("Yeswa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ywa 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (mkw)", () => {
		expect(p.parse("Bikuudi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Bik 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (mkw)", () => {
		expect(p.parse("Lute 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Lut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (mkw)", () => {
		expect(p.parse("Esaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Esa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mkw)", () => {
		expect(p.parse("1 Samwele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samwele 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mkw)", () => {
		expect(p.parse("2 Samwele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samwele 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mkw)", () => {
		expect(p.parse("1Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mkw)", () => {
		expect(p.parse("2Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mkw)", () => {
		expect(p.parse("1 Bantinu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Bantinu 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mkw)", () => {
		expect(p.parse("2 Bantinu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Bantinu 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mkw)", () => {
		expect(p.parse("1Bt 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mkw)", () => {
		expect(p.parse("2Bt 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mkw)", () => {
		expect(p.parse("1 Kinkulu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kinkulu 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mkw)", () => {
		expect(p.parse("2 Kinkulu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kinkulu 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mkw)", () => {
		expect(p.parse("1Kk 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mkw)", () => {
		expect(p.parse("2Kk 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (mkw)", () => {
		expect(p.parse("Esedase 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esd 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (mkw)", () => {
		expect(p.parse("Neyemi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Ney 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (mkw)", () => {
		expect(p.parse("Esetele 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (mkw)", () => {
		expect(p.parse("Yobi 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yob 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (mkw)", () => {
		expect(p.parse("Mikunga 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mga 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (mkw)", () => {
		expect(p.parse("Bingana 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Bng 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (mkw)", () => {
		expect(p.parse("Kuluntu 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ktu 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (mkw)", () => {
		expect(p.parse("Mukunga ya Kitoko 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Muk 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (mkw)", () => {
		expect(p.parse("Yelemya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yel 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (mkw)", () => {
		expect(p.parse("Ezekyele 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (mkw)", () => {
		expect(p.parse("Danyele 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (mkw)", () => {
		expect(p.parse("Oseya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ose 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (mkw)", () => {
		expect(p.parse("Yowele 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yow 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (mkw)", () => {
		expect(p.parse("Amose 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (mkw)", () => {
		expect(p.parse("Abedyase 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abe 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (mkw)", () => {
		expect(p.parse("Yonase 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (mkw)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mka 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (mkw)", () => {
		expect(p.parse("Nawume 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naw 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (mkw)", () => {
		expect(p.parse("Abakuke 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Abk 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (mkw)", () => {
		expect(p.parse("Sofoni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (mkw)", () => {
		expect(p.parse("Aze 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (mkw)", () => {
		expect(p.parse("Zakali 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zli 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (mkw)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mkw)", () => {
		expect(p.parse("Matayi 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mkw)", () => {
		expect(p.parse("Mke 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mkw)", () => {
		expect(p.parse("Lke 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mkw)", () => {
		expect(p.parse("1Yne 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mkw)", () => {
		expect(p.parse("2Yne 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mkw)", () => {
		expect(p.parse("3 Yowane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yne 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mkw)", () => {
		expect(p.parse("1 Yowane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yowane 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mkw)", () => {
		expect(p.parse("2 Yowane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yowane 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mkw)", () => {
		expect(p.parse("Yowane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yne 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mkw)", () => {
		expect(p.parse("Bisalu 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Bis 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mkw)", () => {
		expect(p.parse("Loma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mkw)", () => {
		expect(p.parse("1 Kolinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolinto 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mkw)", () => {
		expect(p.parse("2 Kolinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolinto 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mkw)", () => {
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mkw)", () => {
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mkw)", () => {
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mkw)", () => {
		expect(p.parse("Ngalatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Nga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mkw)", () => {
		expect(p.parse("Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mkw)", () => {
		expect(p.parse("Filipe 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mkw)", () => {
		expect(p.parse("1 Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mkw)", () => {
		expect(p.parse("2 Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mkw)", () => {
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mkw)", () => {
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mkw)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mkw)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mkw)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mkw)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mkw)", () => {
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mkw)", () => {
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mkw)", () => {
		expect(p.parse("Ba-Ebeleyo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebe 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mkw)", () => {
		expect(p.parse("Zaki 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mkw)", () => {
		expect(p.parse("1 Pyele 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pyele 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mkw)", () => {
		expect(p.parse("2 Pyele 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pyele 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mkw)", () => {
		expect(p.parse("1Py 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mkw)", () => {
		expect(p.parse("2Py 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mkw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mkw)", () => {
		expect(p.parse("Yude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});

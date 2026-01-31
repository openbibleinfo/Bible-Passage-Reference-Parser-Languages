"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ses.js";

describe("Localized book Gen (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ses)", () => {
		expect(p.parse("Šintinoo 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Šin 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ses)", () => {
		expect(p.parse("Fattaroo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Fat 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ses)", () => {
		expect(p.parse("Sargarey 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Sar 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ses)", () => {
		expect(p.parse("Kabuyaney 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kab 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Rev (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ses)", () => {
		expect(p.parse("Bangandiroo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ban 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ses)", () => {
		expect(p.parse("Alhukumoo 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Alh 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ses)", () => {
		expect(p.parse("Žozuwe 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Žoz 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ses)", () => {
		expect(p.parse("Alkaaley 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Alk 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ses)", () => {
		expect(p.parse("Rutti 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Sam (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ses)", () => {
		expect(p.parse("Samiyel 1na 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Sm1 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ses)", () => {
		expect(p.parse("Samiyel 2to 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Sm2 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ses)", () => {
		expect(p.parse("Kokoyey 1na 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ky1 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ses)", () => {
		expect(p.parse("Kokoyey 2to 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ky2 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ses)", () => {
		expect(p.parse("Taarikey 1na 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ta1 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ses)", () => {
		expect(p.parse("Taarikey 2to 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ta2 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ses)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ses)", () => {
		expect(p.parse("Nehemi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ses)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ses)", () => {
		expect(p.parse("Ayuba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ayu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ses)", () => {
		expect(p.parse("Zaburey 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zab 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ses)", () => {
		expect(p.parse("Yaasawey 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Yaa 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ses)", () => {
		expect(p.parse("Waazukaa 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Waa 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Jonah (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ses)", () => {
		expect(p.parse("Yunusa 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yun 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ses)", () => {
		expect(p.parse("Matiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ses)", () => {
		expect(p.parse("Marku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ses)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ses)", () => {
		expect(p.parse("Yehiya bataga 1na 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ye1 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ses)", () => {
		expect(p.parse("Yehiya bataga 2to 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ye2 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ses)", () => {
		expect(p.parse("Yehiya bataga 3to 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Ye3 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ses)", () => {
		expect(p.parse("Yehiya 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yeh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ses)", () => {
		expect(p.parse("Teegoyey 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tee 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ses)", () => {
		expect(p.parse("Rom borey batagaa 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ses)", () => {
		expect(p.parse("Korent borey bataga 1na 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ko1 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ses)", () => {
		expect(p.parse("Korent borey bataga 2to 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ko2 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ses)", () => {
		expect(p.parse("Kolos borey batagaa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ses)", () => {
		expect(p.parse("Galati borey batagaa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ses)", () => {
		expect(p.parse("Efez borey batagaa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ses)", () => {
		expect(p.parse("Filipi borey batagaa 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ses)", () => {
		expect(p.parse("Tesalonik borey bataga 1na 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ts1 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ses)", () => {
		expect(p.parse("Tesalonik borey bataga 2to 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ts2 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ses)", () => {
		expect(p.parse("Timote bataga 1na 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tm1 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ses)", () => {
		expect(p.parse("Timote bataga 2to 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tm2 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ses)", () => {
		expect(p.parse("Tit batagaa 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ses)", () => {
		expect(p.parse("Filemoŋ batagaa 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ses)", () => {
		expect(p.parse("Eberewey batagaa 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebe 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ses)", () => {
		expect(p.parse("Žak batagaa 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Žak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ses)", () => {
		expect(p.parse("Piyer bataga 1na 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pi1 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ses)", () => {
		expect(p.parse("Piyer bataga 2to 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pi2 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ses)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ses)", () => {
		expect(p.parse("Žud batagaa 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Žud 1:1").osis()).toEqual("Jude.1.1");
	});
});

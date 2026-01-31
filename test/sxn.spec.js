"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sxn.js";

describe("Localized book Gen (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (sxn)", () => {
		expect(p.parse("Pěndariadi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Karariadi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pěnd. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Kar. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (sxn)", () => {
		expect(p.parse("Sasěbang 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Sasuwang 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Sasu. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Sas. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (sxn)", () => {
		expect(p.parse("Manga Imang 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Imamat 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Imng. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Im. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (sxn)", () => {
		expect(p.parse("Pẹ̌tatiạ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Rekenang 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Pẹ̌t. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Rek. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (sxn)", () => {
		expect(p.parse("Dal᷊ěmpasiang 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Sasangi 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Dal᷊. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Sai. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sxn)", () => {
		expect(p.parse("Kal᷊al᷊ahe 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pělal᷊ahẹ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kl᷊h. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pěl. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (sxn)", () => {
		expect(p.parse("Pangangonggọ U Toratẹ̌ Kapia 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Saukang 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Pang. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Sau. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (sxn)", () => {
		expect(p.parse("Yosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (sxn)", () => {
		expect(p.parse("Manga Mělahukung 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Mamamonesi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Mam. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Měl. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (sxn)", () => {
		expect(p.parse("Rutẹ̌ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (sxn)", () => {
		expect(p.parse("Yesaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yes. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (sxn)", () => {
		expect(p.parse("Samuel Kahimotongange 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Samuel Humotong 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (sxn)", () => {
		expect(p.parse("Samuel Karuane 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (sxn)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (sxn)", () => {
		expect(p.parse("Manga Ratu Kahimotongange 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Manga Ratu Humotong 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Mar. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Rat. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (sxn)", () => {
		expect(p.parse("Manga Ratu Karuange 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Manga Ratu Karuane 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Mar. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Rat. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (sxn)", () => {
		expect(p.parse("Tawarikh Kahimotongange 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Kararatuang Humotong 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Kar. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Taw. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (sxn)", () => {
		expect(p.parse("2 Tawarikh 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tawarikh 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (sxn)", () => {
		expect(p.parse("Kararatuang Karuane 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Kar. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Taw. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (sxn)", () => {
		expect(p.parse("Esr. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (sxn)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (sxn)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (sxn)", () => {
		expect(p.parse("Ayb. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ayub 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (sxn)", () => {
		expect(p.parse("Mazmurẹ̌ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mazmur 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mzm. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (sxn)", () => {
		expect(p.parse("Baweran Salomo 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Sasasa 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Baw. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Sas. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (sxn)", () => {
		expect(p.parse("Měnanasẹ̌ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Munanasi 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Měn. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mun. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (sxn)", () => {
		expect(p.parse("Kakantarị Patebone 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Samperi Dadalo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Kak. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sad. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (sxn)", () => {
		expect(p.parse("Yeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (sxn)", () => {
		expect(p.parse("Yehezkiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Yeh. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (sxn)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (sxn)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (sxn)", () => {
		expect(p.parse("Yoël 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yl. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (sxn)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ams. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (sxn)", () => {
		expect(p.parse("Obaja 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (sxn)", () => {
		expect(p.parse("Yunus 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yun. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (sxn)", () => {
		expect(p.parse("Mikha 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (sxn)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (sxn)", () => {
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (sxn)", () => {
		expect(p.parse("Zefanya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zepanya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zep. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (sxn)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (sxn)", () => {
		expect(p.parse("Zakharia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Za. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (sxn)", () => {
		expect(p.parse("Maleakhi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sxn)", () => {
		expect(p.parse("Matius 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sxn)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sxn)", () => {
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sxn)", () => {
		expect(p.parse("1Yoh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sxn)", () => {
		expect(p.parse("2Yoh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sxn)", () => {
		expect(p.parse("3 Yohanes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sxn)", () => {
		expect(p.parse("1 Yohanes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohanes 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sxn)", () => {
		expect(p.parse("2 Yohanes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohanes 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sxn)", () => {
		expect(p.parse("Yohanes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sxn)", () => {
		expect(p.parse("Wuke Ngu Manga Rasuli 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Rarolohang 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mmr. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Wuk. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sxn)", () => {
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sxn)", () => {
		expect(p.parse("1 Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintus 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sxn)", () => {
		expect(p.parse("2 Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintus 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sxn)", () => {
		expect(p.parse("1Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sxn)", () => {
		expect(p.parse("2Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sxn)", () => {
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sxn)", () => {
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sxn)", () => {
		expect(p.parse("Efesus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sxn)", () => {
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sxn)", () => {
		expect(p.parse("1 Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sxn)", () => {
		expect(p.parse("2 Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sxn)", () => {
		expect(p.parse("1Tes. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sxn)", () => {
		expect(p.parse("2Tes. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sxn)", () => {
		expect(p.parse("1 Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotius 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sxn)", () => {
		expect(p.parse("2 Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotius 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sxn)", () => {
		expect(p.parse("1Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sxn)", () => {
		expect(p.parse("2Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sxn)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sxn)", () => {
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sxn)", () => {
		expect(p.parse("Ibrani 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sxn)", () => {
		expect(p.parse("Yakobus 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sxn)", () => {
		expect(p.parse("1 Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrus 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sxn)", () => {
		expect(p.parse("2 Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrus 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sxn)", () => {
		expect(p.parse("1Ptr. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sxn)", () => {
		expect(p.parse("2Ptr. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sxn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sxn)", () => {
		expect(p.parse("Yudas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud. 1:1").osis()).toEqual("Jude.1.1");
	});
});

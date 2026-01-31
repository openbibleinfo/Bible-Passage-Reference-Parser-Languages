"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kmr.js";

describe("Localized book Gen (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kmr)", () => {
		expect(p.parse("Destpêk 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Dstp 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kmr)", () => {
		expect(p.parse("Derketin 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Drkt 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kmr)", () => {
		expect(p.parse("Lêwiyî 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lêw 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kmr)", () => {
		expect(p.parse("Hejmartin 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Hejm 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (kmr)", () => {
		expect(p.parse("Lavijên Şînê 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lvj 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kmr)", () => {
		expect(p.parse("آشگَرابون 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ئاشكراكرن 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Eʼyantî 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Әʼйанти 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Peyxam 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Peyx 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kmr)", () => {
		expect(p.parse("Dubarekirina Şerîetê 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dub 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kmr)", () => {
		expect(p.parse("Yêşû 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kmr)", () => {
		expect(p.parse("Dadger 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ddgr 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kmr)", () => {
		expect(p.parse("Rût 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (kmr)", () => {
		expect(p.parse("Îşaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Îşa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kmr)", () => {
		expect(p.parse("Samûêl I, 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Sam I, 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kmr)", () => {
		expect(p.parse("Samûêl II, 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Sam II, 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kmr)", () => {
		expect(p.parse("Padîşah I, 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pad I, 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kmr)", () => {
		expect(p.parse("Padîşah II, 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Pad II, 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kmr)", () => {
		expect(p.parse("Dîrok I, 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Dîr I, 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (kmr)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (kmr)", () => {
		expect(p.parse("Nehemya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kmr)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (kmr)", () => {
		expect(p.parse("Eyûb 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kmr)", () => {
		expect(p.parse("Zebûr 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zeb 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kmr)", () => {
		expect(p.parse("Şîretên Silêman 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Methelokên 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Şîr 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kmr)", () => {
		expect(p.parse("Waiz 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (kmr)", () => {
		expect(p.parse("Helbesta Helbestan 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hlb 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (kmr)", () => {
		expect(p.parse("Yêremya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yêr 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Dan (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kmr)", () => {
		expect(p.parse("Daniyêl 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (kmr)", () => {
		expect(p.parse("Hoşêya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoş 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (kmr)", () => {
		expect(p.parse("Yoêl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (kmr)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (kmr)", () => {
		expect(p.parse("Ovadya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ovad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kmr)", () => {
		expect(p.parse("Ûnis 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (kmr)", () => {
		expect(p.parse("Mîxa 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (kmr)", () => {
		expect(p.parse("Nahûm 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (kmr)", () => {
		expect(p.parse("Habaqûq 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (kmr)", () => {
		expect(p.parse("Sefanya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (kmr)", () => {
		expect(p.parse("Hagay 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (kmr)", () => {
		expect(p.parse("Zekeriya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kmr)", () => {
		expect(p.parse("Melaxî 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mel 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kmr)", () => {
		expect(p.parse("مزگینیا مەتتای 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Metta 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мәтта 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مَتّی 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مەتتا 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Met 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kmr)", () => {
		expect(p.parse("مزگینیا مەرقۆسی 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marqos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марԛос 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مَرقُس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مەرقۆس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kmr)", () => {
		expect(p.parse("مزگینیا لوقای 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lûqa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Луԛа 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لوقا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kmr)", () => {
		expect(p.parse("Yûhenna I, 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Yûhʼenna I 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Йуһʼәнна I 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("یوحنا 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Yûh I, 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kmr)", () => {
		expect(p.parse("Yûhenna II, 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Yûhʼenna II 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Йуһʼәнна II 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Yûh II, 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("یوحنا 2 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kmr)", () => {
		expect(p.parse("Yûhenna III, 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Yûhʼenna III 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Йуһʼәнна III 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 یوحەننا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Yûh III, 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("یوحنا 3 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kmr)", () => {
		expect(p.parse("1 یوحەننا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. یوحەننا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ناما یوحەننا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ناما. یوحەننا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kmr)", () => {
		expect(p.parse("2 یوحەننا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. یوحەننا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ناما یوحەننا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ناما. یوحەننا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kmr)", () => {
		expect(p.parse("مزگینیا یوحەننای 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yûhʼenna 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Йуһʼәнна 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yûhenna 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("یوحەننا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("یوحنا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yûh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kmr)", () => {
		expect(p.parse("Karên Şandiyan 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kʼarêd Şandîya 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Кʼаред Шандийа 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("كارێن هنارتیان 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("شُله رسولا 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Şandiyan 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kmr)", () => {
		expect(p.parse("نامَ بُ رومیا 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rʼomayî 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рʼомайи 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romayî 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رۆما 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kmr)", () => {
		expect(p.parse("1 كورنتۆس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. كورنتۆس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ناما كورنتۆس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ناما. كورنتۆس 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kmr)", () => {
		expect(p.parse("اول قرنتیان 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Korîntî I, 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Korintʼî I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Корьнтʼи I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kor I, 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kmr)", () => {
		expect(p.parse("2 دویه بُ قُرنتیا 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 كورنتۆس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. دویه بُ قُرنتیا 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. كورنتۆس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ناما دویه بُ قُرنتیا 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ناما كورنتۆس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ناما. دویه بُ قُرنتیا 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ناما. كورنتۆس 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kmr)", () => {
		expect(p.parse("Korîntî II, 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Korintʼî II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Корьнтʼи II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kor II, 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kmr)", () => {
		expect(p.parse("نامَ بُ کولُسیا 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosî 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Колоси 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("كۆلۆسی 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kmr)", () => {
		expect(p.parse("نامَ بُ غَلاطیا 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("گالاتیا 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatî 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галати 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kmr)", () => {
		expect(p.parse("نامَ بُ اَفِسُسیا 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ئەفەسۆس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesî 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Әфәси 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kmr)", () => {
		expect(p.parse("نامَ بُ فیلیپیا 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filîpî 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fîlîpî 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филипи 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فیلیپی 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kmr)", () => {
		expect(p.parse("1 اَوِلی بُ تسالونیکیا 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 سالونیكی 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. اَوِلی بُ تسالونیکیا 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. سالونیكی 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ناما اَوِلی بُ تسالونیکیا 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ناما سالونیكی 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ناما. اَوِلی بُ تسالونیکیا 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ناما. سالونیكی 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kmr)", () => {
		expect(p.parse("Tʼêsalonîkî I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Тʼесалоники I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Selanîkî I, 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Sel I, 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kmr)", () => {
		expect(p.parse("2 دویه بُ تسالونیکیا 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 سالونیكی 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. دویه بُ تسالونیکیا 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. سالونیكی 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ناما دویه بُ تسالونیکیا 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ناما سالونیكی 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ناما. دویه بُ تسالونیکیا 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ناما. سالونیكی 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kmr)", () => {
		expect(p.parse("Tʼêsalonîkî II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Тʼесалоники II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Selanîkî II, 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Sel II, 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kmr)", () => {
		expect(p.parse("1 اَوِلی بُ تیموتائوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 تیمۆتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. اَوِلی بُ تیموتائوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تیمۆتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ناما اَوِلی بُ تیموتائوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ناما تیمۆتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ناما. اَوِلی بُ تیموتائوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ناما. تیمۆتاوس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kmr)", () => {
		expect(p.parse("Tîmotêyos I, 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tîmotʼêyo I 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Тимотʼейо I 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tîm I, 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kmr)", () => {
		expect(p.parse("2 دویه بُ تیموتائوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 تیمۆتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. دویه بُ تیموتائوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تیمۆتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ناما دویه بُ تیموتائوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ناما تیمۆتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ناما. دویه بُ تیموتائوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ناما. تیمۆتاوس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kmr)", () => {
		expect(p.parse("Tîmotêyos II, 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tîmotʼêyo II 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Тимотʼейо II 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tîm II 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kmr)", () => {
		expect(p.parse("نامَ بُ تیتوس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tîtos 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تیتۆس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tîto 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тито 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tît 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kmr)", () => {
		expect(p.parse("نامَ بُ فیلیمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filêmon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filîmon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Фьлимон 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فلیمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kmr)", () => {
		expect(p.parse("نامَ بُ مسیحیِت عبرانی 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عیبرانی 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Îbranî 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ибрани 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Îbr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kmr)", () => {
		expect(p.parse("یەعقوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("یعقوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Aqûb 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Аԛуб 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kmr)", () => {
		expect(p.parse("1 پِطرُس یا اَوِلی 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 پەترۆس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. پِطرُس یا اَوِلی 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. پەترۆس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ناما پِطرُس یا اَوِلی 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ناما پەترۆس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ناما. پِطرُس یا اَوِلی 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ناما. پەترۆس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 1Pet (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kmr)", () => {
		expect(p.parse("Petrûs I, 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Petrûs I 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Пәтрус I 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pet I, 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kmr)", () => {
		expect(p.parse("2 پِطرُس یا دویه 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 پەترۆس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. پِطرُس یا دویه 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. پەترۆس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ناما پِطرُس یا دویه 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ناما پەترۆس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ناما. پِطرُس یا دویه 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ناما. پەترۆس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kmr)", () => {
		expect(p.parse("Petrûs II, 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Petrûs II 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Пәтрус II 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pet II, 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kmr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kmr)", () => {
		expect(p.parse("ناما یهودا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Cihûda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Щьһуда 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("یەهودا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Cihd 1:1").osis()).toEqual("Jude.1.1");
	});
});

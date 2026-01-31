"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bin.js";

describe("Localized book Gen (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bin)", () => {
		expect(p.parse("Gẹnẹsis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gẹn 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (bin)", () => {
		expect(p.parse("Ẹksọdọs 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ẹks 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (bin)", () => {
		expect(p.parse("Levitikọs 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (bin)", () => {
		expect(p.parse("Nọmbas 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nọm 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (bin)", () => {
		expect(p.parse("Eve Orriara 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Eve 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bin)", () => {
		expect(p.parse("Arhie Maan 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Arhie 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (bin)", () => {
		expect(p.parse("Diuteronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Diut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (bin)", () => {
		expect(p.parse("Jọsua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jọs 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (bin)", () => {
		expect(p.parse("Giọgis 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Giọg 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (bin)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (bin)", () => {
		expect(p.parse("Aizaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Aiz 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bin)", () => {
		expect(p.parse("I Samuẹl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuẹl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bin)", () => {
		expect(p.parse("II Samuẹl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuẹl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bin)", () => {
		expect(p.parse("I Ọba 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Ọba 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bin)", () => {
		expect(p.parse("II Ọba 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Ọba 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bin)", () => {
		expect(p.parse("I Krọnikol 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Krọ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Krọnikol 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Krọ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bin)", () => {
		expect(p.parse("II Krọnikol 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Krọ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Krọnikol 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Krọ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (bin)", () => {
		expect(p.parse("Ẹzra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (bin)", () => {
		expect(p.parse("Nehimaia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (bin)", () => {
		expect(p.parse("Ẹsta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ẹst 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (bin)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (bin)", () => {
		expect(p.parse("Psalm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psm 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (bin)", () => {
		expect(p.parse("Itan 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (bin)", () => {
		expect(p.parse("Asan-Ibo 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Asan 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (bin)", () => {
		expect(p.parse("Ihuan Ne Ọ Sọọ Ihuan Hia 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ihuan 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (bin)", () => {
		expect(p.parse("Jerimaia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (bin)", () => {
		expect(p.parse("Ezikiẹl 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezik 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (bin)", () => {
		expect(p.parse("Daniẹl 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (bin)", () => {
		expect(p.parse("Hozia 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoz 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (bin)", () => {
		expect(p.parse("Joẹl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (bin)", () => {
		expect(p.parse("Emọs 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (bin)", () => {
		expect(p.parse("Obedaia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obed 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (bin)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (bin)", () => {
		expect(p.parse("Maika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mai 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (bin)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (bin)", () => {
		expect(p.parse("Habakọk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (bin)", () => {
		expect(p.parse("Zẹfanaia 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zẹf 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (bin)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (bin)", () => {
		expect(p.parse("Zẹkaraia 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (bin)", () => {
		expect(p.parse("Malakai 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bin)", () => {
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bin)", () => {
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bin)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bin)", () => {
		expect(p.parse("I Jọn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jọn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bin)", () => {
		expect(p.parse("II Jọn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jọn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bin)", () => {
		expect(p.parse("III Jọn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Jọn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bin)", () => {
		expect(p.parse("Jọn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bin)", () => {
		expect(p.parse("Iwinna 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bin)", () => {
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bin)", () => {
		expect(p.parse("I Kọrinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kọr 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kọrinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kọr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bin)", () => {
		expect(p.parse("II Kọrinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kọr 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kọrinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kọr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bin)", () => {
		expect(p.parse("Kọlose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kọl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bin)", () => {
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bin)", () => {
		expect(p.parse("Ẹfisọs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ẹfis 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bin)", () => {
		expect(p.parse("Filipai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bin)", () => {
		expect(p.parse("I Tẹsalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tẹs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tẹsalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tẹs 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bin)", () => {
		expect(p.parse("II Tẹsalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tẹs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tẹsalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tẹs 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bin)", () => {
		expect(p.parse("I Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bin)", () => {
		expect(p.parse("II Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bin)", () => {
		expect(p.parse("Taitọs 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tai 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bin)", () => {
		expect(p.parse("Failimọn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fai 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bin)", () => {
		expect(p.parse("Hibru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bin)", () => {
		expect(p.parse("Jems 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bin)", () => {
		expect(p.parse("I Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bin)", () => {
		expect(p.parse("II Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bin)", () => {
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

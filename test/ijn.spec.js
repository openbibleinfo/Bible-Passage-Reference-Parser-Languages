"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ijn.js";

describe("Localized book Gen (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ijn)", () => {
		expect(p.parse("Suku-saakị 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Suk 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ijn)", () => {
		expect(p.parse("Paka-so 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Pks 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ijn)", () => {
		expect(p.parse("Lẹvitikọsị 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lẹv 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ijn)", () => {
		expect(p.parse("Kịẹn-aḅịḅị 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kịẹ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ijn)", () => {
		expect(p.parse("Kururu Owu-apọkọ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kur 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ijn)", () => {
		expect(p.parse("Mịẹfinji 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mịẹ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ijn)", () => {
		expect(p.parse("Ditẹrọnọmị 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dit 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ijn)", () => {
		expect(p.parse("Jọsụwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jọs 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ijn)", () => {
		expect(p.parse("Ḅẹrẹkọn-apụ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ḅẹr 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ijn)", () => {
		expect(p.parse("Rufu 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruf 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ijn)", () => {
		expect(p.parse("Ayịzaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ayị 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ijn)", () => {
		expect(p.parse("1 Samụẹlị 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samụẹlị 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ijn)", () => {
		expect(p.parse("2 Samụẹlị 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samụẹlị 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ijn)", () => {
		expect(p.parse("1 Amadapụ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ama 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Amadapụ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ama 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ijn)", () => {
		expect(p.parse("2 Amadapụ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ama 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Amadapụ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ama 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ijn)", () => {
		expect(p.parse("1 Paka-aị 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Pkị 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Paka-aị 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Pkị 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ijn)", () => {
		expect(p.parse("2 Paka-aị 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Pkị 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Paka-aị 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Pkị 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ijn)", () => {
		expect(p.parse("Ẹzịra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ẹzị 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ijn)", () => {
		expect(p.parse("Nehimaya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ijn)", () => {
		expect(p.parse("Ẹsịta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ẹsị 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ijn)", () => {
		expect(p.parse("Jobu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ijn)", () => {
		expect(p.parse("Devidi-Anume 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Dev 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ijn)", () => {
		expect(p.parse("Egberima-Ẹkwẹn 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Egb 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ijn)", () => {
		expect(p.parse("Nimi Tolumaḅọ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Nim 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ijn)", () => {
		expect(p.parse("Sọlọmọnị Ḅẹlẹtẹịn Nume 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sọl 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ijn)", () => {
		expect(p.parse("Jerimaya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ijn)", () => {
		expect(p.parse("Izikẹlị 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Izi 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ijn)", () => {
		expect(p.parse("Danẹlị 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ijn)", () => {
		expect(p.parse("Hosiya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ijn)", () => {
		expect(p.parse("Jowẹlị 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jow 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ijn)", () => {
		expect(p.parse("Emọsị 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Emọ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ijn)", () => {
		expect(p.parse("Obadaya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ijn)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ijn)", () => {
		expect(p.parse("Mayịka 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("May 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ijn)", () => {
		expect(p.parse("Nahọmụ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ijn)", () => {
		expect(p.parse("Habakọkụ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ijn)", () => {
		expect(p.parse("Zẹfanaya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zẹf 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ijn)", () => {
		expect(p.parse("Hegayị 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Heg 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ijn)", () => {
		expect(p.parse("Zẹkaraya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zẹk 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ijn)", () => {
		expect(p.parse("Malakayị 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ijn)", () => {
		expect(p.parse("Matiyo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ijn)", () => {
		expect(p.parse("Makị 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ijn)", () => {
		expect(p.parse("Luku 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ijn)", () => {
		expect(p.parse("1 Jọnị 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jọn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jọnị 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jọn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ijn)", () => {
		expect(p.parse("2 Jọnị 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jọn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jọnị 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jọn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ijn)", () => {
		expect(p.parse("3 Jọnị 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jọn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jọnị 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jọn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ijn)", () => {
		expect(p.parse("Jọnị 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jọn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ijn)", () => {
		expect(p.parse("Fịrịmẹnjịapụ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Fịr 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ijn)", () => {
		expect(p.parse("Romu 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ijn)", () => {
		expect(p.parse("1 Kọrịntị 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kọr 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kọrịntị 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kọr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ijn)", () => {
		expect(p.parse("2 Kọrịntị 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kọr 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kọrịntị 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kọr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ijn)", () => {
		expect(p.parse("Kọlọsị 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kọl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ijn)", () => {
		expect(p.parse("Galesiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ijn)", () => {
		expect(p.parse("Ẹfisọsị 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ẹfi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ijn)", () => {
		expect(p.parse("Filipayị 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ijn)", () => {
		expect(p.parse("1 Tẹsalonịka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tẹs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tẹsalonịka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tẹs 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ijn)", () => {
		expect(p.parse("2 Tẹsalonịka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tẹs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tẹsalonịka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tẹs 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ijn)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ijn)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ijn)", () => {
		expect(p.parse("Tayịtọsị 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tay 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ijn)", () => {
		expect(p.parse("Filimọnị 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ijn)", () => {
		expect(p.parse("Hiburu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ijn)", () => {
		expect(p.parse("Jemụsị 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jem 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ijn)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ijn)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ijn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ijn)", () => {
		expect(p.parse("Judu 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

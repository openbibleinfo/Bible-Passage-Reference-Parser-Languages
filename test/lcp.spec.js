"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lcp.js";

describe("Localized book Gen (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (lcp)", () => {
		expect(p.parse("1 มเซ. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 โมเซ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (lcp)", () => {
		expect(p.parse("2 มเซ. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 โมเซ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (lcp)", () => {
		expect(p.parse("3 มเซ. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 โมเซ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (lcp)", () => {
		expect(p.parse("4 มเซ. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 โมเซ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (lcp)", () => {
		expect(p.parse("รซอมเยือม 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("รซย. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lcp)", () => {
		expect(p.parse("รโฮงะ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("รฮ. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (lcp)", () => {
		expect(p.parse("5 มเซ. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 โมเซ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (lcp)", () => {
		expect(p.parse("โยชูวา 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ยชว. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (lcp)", () => {
		expect(p.parse("ปรเตีฮรตุม 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ปรต. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (lcp)", () => {
		expect(p.parse("รูต. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("รูต 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (lcp)", () => {
		expect(p.parse("อิซยา 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("อซย. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lcp)", () => {
		expect(p.parse("1 ซามูเอน 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ซมอ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ซามูเอน 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ซมอ. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lcp)", () => {
		expect(p.parse("2 ซามูเอน 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ซมอ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ซามูเอน 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ซมอ. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Chr (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (lcp)", () => {
		expect(p.parse("3 กซต. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("3 กซัต 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (lcp)", () => {
		expect(p.parse("4 กซต. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("4 กซัต 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Kgs (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lcp)", () => {
		expect(p.parse("1 กซต. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 กซัต 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. กซต. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. กซัต 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lcp)", () => {
		expect(p.parse("2 กซต. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 กซัต 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. กซต. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. กซัต 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book Ezra (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (lcp)", () => {
		expect(p.parse("เอซรา 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("อซร. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (lcp)", () => {
		expect(p.parse("เนฮะมี 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("นฮม. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (lcp)", () => {
		expect(p.parse("เอซเทอ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("อซท. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (lcp)", () => {
		expect(p.parse("โยป. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("โยป 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (lcp)", () => {
		expect(p.parse("ลืลาว 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ลลว. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (lcp)", () => {
		expect(p.parse("ซตอกรเง่อึม 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ซตง. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (lcp)", () => {
		expect(p.parse("คูไมจพันญา 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("คมญ. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (lcp)", () => {
		expect(p.parse("รซอมเชียซาโลมอน 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ซลม. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (lcp)", () => {
		expect(p.parse("เยเรมี 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ยรม. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (lcp)", () => {
		expect(p.parse("เอเซเคียน 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("อซค. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (lcp)", () => {
		expect(p.parse("ด่านีเอน 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ดนอ. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (lcp)", () => {
		expect(p.parse("โฮเชยา 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ฮชย. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (lcp)", () => {
		expect(p.parse("โยเอน 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ยอน. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (lcp)", () => {
		expect(p.parse("อาโมต 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("อมต. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (lcp)", () => {
		expect(p.parse("โอบ่าดี่ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("อบด. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (lcp)", () => {
		expect(p.parse("ยนา. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("โยนา 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (lcp)", () => {
		expect(p.parse("มคา. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("มีคา 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (lcp)", () => {
		expect(p.parse("นาฮุม 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("นาฮ. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (lcp)", () => {
		expect(p.parse("ฮาบ่ากุก 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ฮบก. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (lcp)", () => {
		expect(p.parse("เซฟันยา 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ซฟย. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (lcp)", () => {
		expect(p.parse("ฮักไก 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ฮกก. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (lcp)", () => {
		expect(p.parse("เซคาริยา 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ซคย. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (lcp)", () => {
		expect(p.parse("มาลาคี 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("มลค. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lcp)", () => {
		expect(p.parse("มัตไท 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("มท. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lcp)", () => {
		expect(p.parse("มาระโก 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("มก. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lcp)", () => {
		expect(p.parse("ลูกา 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ลก. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lcp)", () => {
		expect(p.parse("1 โยฮัน 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ยน. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. โยฮัน 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ยน. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lcp)", () => {
		expect(p.parse("2 โยฮัน 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ยน. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. โยฮัน 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ยน. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lcp)", () => {
		expect(p.parse("3 โยฮัน 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ยน. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. โยฮัน 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ยน. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lcp)", () => {
		expect(p.parse("โยฮัน 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ยฮ. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lcp)", () => {
		expect(p.parse("กันไกญกอ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("กก. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lcp)", () => {
		expect(p.parse("รม. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("โรม 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lcp)", () => {
		expect(p.parse("1 โคริน 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 คร. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. โคริน 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. คร. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lcp)", () => {
		expect(p.parse("2 โคริน 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 คร. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. โคริน 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. คร. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lcp)", () => {
		expect(p.parse("โคโลซี 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("คซ. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lcp)", () => {
		expect(p.parse("กะลาเทีย 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("กท. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lcp)", () => {
		expect(p.parse("เอเฟโซ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("อฟ. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lcp)", () => {
		expect(p.parse("ฟีลิปปี 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ฟป. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lcp)", () => {
		expect(p.parse("1 เทซะโลนิกา 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ทก. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. เทซะโลนิกา 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ทก. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lcp)", () => {
		expect(p.parse("2 เทซะโลนิกา 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ทก. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. เทซะโลนิกา 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ทก. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lcp)", () => {
		expect(p.parse("1 ทิโมที 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ทท. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ทิโมที 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ทท. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lcp)", () => {
		expect(p.parse("2 ทิโมที 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ทท. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ทิโมที 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ทท. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lcp)", () => {
		expect(p.parse("ติโต 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ตต. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lcp)", () => {
		expect(p.parse("ฟีเลโมน 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ฟม. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lcp)", () => {
		expect(p.parse("ฮีบรู 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ฮบ. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lcp)", () => {
		expect(p.parse("ยาโคโบ่ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ยบ. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lcp)", () => {
		expect(p.parse("1 เปโตร 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ปต. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. เปโตร 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ปต. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lcp)", () => {
		expect(p.parse("2 เปโตร 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ปต. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. เปโตร 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ปต. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lcp)", () => {
		expect(p.parse("ยูด่า 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ยด. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (lcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (lcp)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 โยฮัน - 3 โยฮัน").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 โยฮัน – 3 โยฮัน").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 โยฮัน — 3 โยฮัน").osis()).toEqual("1John.1-3John.1");
	});
});

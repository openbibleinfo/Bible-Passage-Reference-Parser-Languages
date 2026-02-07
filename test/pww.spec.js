"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/pww.js";

describe("Localized book Gen (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (pww)", () => {
		expect(p.parse("ทอคางไท้ะ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ทคท. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (pww)", () => {
		expect(p.parse("ทไจทางไฆวะ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ทจฆ. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (pww)", () => {
		expect(p.parse("เลวี​อ​ไฌ่ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ลวฌ. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (pww)", () => {
		expect(p.parse("เกล้​ท​ซ้ะวี่ง 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("กทซ. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (pww)", () => {
		expect(p.parse("ท​ฌางล้างย้าล้าง 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ทฌล. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (pww)", () => {
		expect(p.parse("ท​เน​โพล​ทาง 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ทนท. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (pww)", () => {
		expect(p.parse("โล้​ล้างที๊ง​ทอางแม้เลา 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ลทอ. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (pww)", () => {
		expect(p.parse("โยชูวา 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ยชว. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (pww)", () => {
		expect(p.parse("โพล้งต้ะเซ๊งเท่อ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("พตท. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (pww)", () => {
		expect(p.parse("น่าง​รุ้ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("นร. 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (pww)", () => {
		expect(p.parse("อีซยา 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("อซย. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (pww)", () => {
		expect(p.parse("1ซามูเอง 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1ซมอ. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (pww)", () => {
		expect(p.parse("2​ซามูเอง 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2ซมอ. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (pww)", () => {
		expect(p.parse("1​กจุ้แฆว้ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1กจฆ. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (pww)", () => {
		expect(p.parse("2​กจุ้แฆว้ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2กจฆ. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (pww)", () => {
		expect(p.parse("1​ทกวิ้ไน 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ทกน. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (pww)", () => {
		expect(p.parse("2ทกวิ้ไน 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ทกน. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (pww)", () => {
		expect(p.parse("เอซรา 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("อซร. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (pww)", () => {
		expect(p.parse("เนฮะมี 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("นฮม. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (pww)", () => {
		expect(p.parse("เอซเทอ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("อซท. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (pww)", () => {
		expect(p.parse("โยบา 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ยบ. 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (pww)", () => {
		expect(p.parse("ทอางปฆ้า 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ทอฆ. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (pww)", () => {
		expect(p.parse("ทอางด้อง 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ทอด. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (pww)", () => {
		expect(p.parse("ทโกงซีมองแบ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ทกบ. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (pww)", () => {
		expect(p.parse("ซาโลโมอแท๊ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ซลม. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (pww)", () => {
		expect(p.parse("เยเรมี 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ยรม. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (pww)", () => {
		expect(p.parse("เอเซเคียง 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("อซค. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (pww)", () => {
		expect(p.parse("ดานีเอง 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ดนอ. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (pww)", () => {
		expect(p.parse("โฮเชยา 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ฮชย. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (pww)", () => {
		expect(p.parse("โยเอง 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ยอ. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (pww)", () => {
		expect(p.parse("อาโม 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("อม. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (pww)", () => {
		expect(p.parse("โอบาดี 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("อบด. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (pww)", () => {
		expect(p.parse("โยนา 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ยน. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (pww)", () => {
		expect(p.parse("มีคา 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("มค. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (pww)", () => {
		expect(p.parse("นาฮูง 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("นฮ. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (pww)", () => {
		expect(p.parse("ฮาบากุ้ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ฮบก. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (pww)", () => {
		expect(p.parse("เซฟางยา 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ซฟย. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (pww)", () => {
		expect(p.parse("ฮะไก 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ฮก. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (pww)", () => {
		expect(p.parse("เซคารียา 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ซคย. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (pww)", () => {
		expect(p.parse("มาลาคี 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("มลค. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (pww)", () => {
		expect(p.parse("ม้ะทู 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("มท. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (pww)", () => {
		expect(p.parse("มาร้ะกู 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("มรก. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (pww)", () => {
		expect(p.parse("ลูกา 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ลก. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pww)", () => {
		expect(p.parse("1​โยฮาง 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ยฮ. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pww)", () => {
		expect(p.parse("2​โยฮาง 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ยฮ. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (pww)", () => {
		expect(p.parse("3​โยฮาง 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ยฮ. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (pww)", () => {
		expect(p.parse("โยฮาง 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ยฮ. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (pww)", () => {
		expect(p.parse("ท​แม้ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ทม. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (pww)", () => {
		expect(p.parse("โรมา 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("รม. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pww)", () => {
		expect(p.parse("1​โคเรง 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1คร. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pww)", () => {
		expect(p.parse("2​โคเรง 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2คร. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (pww)", () => {
		expect(p.parse("โคโลซี 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("คลซ. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (pww)", () => {
		expect(p.parse("กาลาเต 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("กลต. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (pww)", () => {
		expect(p.parse("เอเฟโซ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("อฟซ. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (pww)", () => {
		expect(p.parse("ฟีลิ้ปี 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ฟลป. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pww)", () => {
		expect(p.parse("1​เทซาโลนีเก 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ทซล. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pww)", () => {
		expect(p.parse("2​เทซาโลนีเก 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ทซล. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pww)", () => {
		expect(p.parse("1​ทีโมเท 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ทมท. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pww)", () => {
		expect(p.parse("2​ทีโมเท 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ทมท. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (pww)", () => {
		expect(p.parse("ทีต๊ะ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ทต. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (pww)", () => {
		expect(p.parse("ฟีเลโมง 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ฟลม. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (pww)", () => {
		expect(p.parse("ฮีบรู 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ฮบ. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (pww)", () => {
		expect(p.parse("ยาเก้า 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ยก. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pww)", () => {
		expect(p.parse("1เปโต 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ปต. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pww)", () => {
		expect(p.parse("2​เปโต 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ปต. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (pww)", () => {
		expect(p.parse("ยูด้ะ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ยด. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (pww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (pww)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1​โยฮาง - 3​โยฮาง").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1​โยฮาง – 3​โยฮาง").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1​โยฮาง — 3​โยฮาง").osis()).toEqual("1John.1-3John.1");
	});
});

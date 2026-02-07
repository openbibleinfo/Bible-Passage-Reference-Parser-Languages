"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/urk.js";

describe("Localized book Gen (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (urk)", () => {
		expect(p.parse("ลามูลา 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ลมล 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (urk)", () => {
		expect(p.parse("บราเกะ ลารี 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("บรล 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (urk)", () => {
		expect(p.parse("เลวี 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (urk)", () => {
		expect(p.parse("กีรา 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (urk)", () => {
		expect(p.parse("บือปาโตด 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("บปต 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (urk)", () => {
		expect(p.parse("ปลีฮัจ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ปล. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (urk)", () => {
		expect(p.parse("ปือมือเลา ฮูโกบ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ปฮก 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (urk)", () => {
		expect(p.parse("โยซูวา 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ยซว 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (urk)", () => {
		expect(p.parse("ซือมียา กรัจ ฮูโกบ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ซกฮ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (urk)", () => {
		expect(p.parse("รูด 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (urk)", () => {
		expect(p.parse("อิซายา 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("อซย 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (urk)", () => {
		expect(p.parse("1 ซามูเอน 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ซามูเอน 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (urk)", () => {
		expect(p.parse("2 ซามูเอน 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ซามูเอน 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (urk)", () => {
		expect(p.parse("1ซม 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (urk)", () => {
		expect(p.parse("2ซม 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (urk)", () => {
		expect(p.parse("1 ราฌา 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ราฌา 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (urk)", () => {
		expect(p.parse("2 ราฌา 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ราฌา 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (urk)", () => {
		expect(p.parse("1รฌ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (urk)", () => {
		expect(p.parse("2รฌ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (urk)", () => {
		expect(p.parse("1 จรือตา 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. จรือตา 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (urk)", () => {
		expect(p.parse("2 จรือตา 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. จรือตา 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (urk)", () => {
		expect(p.parse("1จร 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (urk)", () => {
		expect(p.parse("2จร 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (urk)", () => {
		expect(p.parse("เอซรา 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("อซร 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (urk)", () => {
		expect(p.parse("เนฮะมียา 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("นมย 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (urk)", () => {
		expect(p.parse("เอซะเทอ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("อซท 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (urk)", () => {
		expect(p.parse("โยบ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (urk)", () => {
		expect(p.parse("ลาฆู มือญาญี 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("มปต 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (urk)", () => {
		expect(p.parse("ฮาดัจ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ฮปอ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (urk)", () => {
		expect(p.parse("ซือมียา อาฌัยํ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ซอฌ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (urk)", () => {
		expect(p.parse("มือญาญี นะ ซาโลมอน 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("มซล 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (urk)", () => {
		expect(p.parse("เยเรมียา 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ยรม 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (urk)", () => {
		expect(p.parse("เอเซเคียน 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("อซค 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (urk)", () => {
		expect(p.parse("ดาเนียน 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ดนย 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (urk)", () => {
		expect(p.parse("โฮเชยา 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ฮชย 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (urk)", () => {
		expect(p.parse("โยเอน 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("โยล 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (urk)", () => {
		expect(p.parse("อาโมด 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("อมด 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (urk)", () => {
		expect(p.parse("โอบาดียา 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("อบด 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (urk)", () => {
		expect(p.parse("โยนา 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("โยน 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (urk)", () => {
		expect(p.parse("มีคา 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("มคา 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (urk)", () => {
		expect(p.parse("นาฮูม 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("นฮม 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (urk)", () => {
		expect(p.parse("ฮาบากุก 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ฮบก 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (urk)", () => {
		expect(p.parse("เซฟันยา 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ซฟย 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (urk)", () => {
		expect(p.parse("ฮักกัย 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ฮกก 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (urk)", () => {
		expect(p.parse("ซะคารียา 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ซคร 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (urk)", () => {
		expect(p.parse("มาลาคี 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("มลค 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (urk)", () => {
		expect(p.parse("มัดทัย 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("มท. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (urk)", () => {
		expect(p.parse("มาระโก 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("มก. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (urk)", () => {
		expect(p.parse("ลูกา 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ลก. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (urk)", () => {
		expect(p.parse("1 โยฮัน 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ยน. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. โยฮัน 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ยน. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (urk)", () => {
		expect(p.parse("2 โยฮัน 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ยน. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. โยฮัน 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ยน. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (urk)", () => {
		expect(p.parse("3 โยฮัน 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ยน. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. โยฮัน 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ยน. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (urk)", () => {
		expect(p.parse("โยฮัน 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ยน. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (urk)", () => {
		expect(p.parse("ปือบูวัจ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ปบ. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (urk)", () => {
		expect(p.parse("รม. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("โรม 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (urk)", () => {
		expect(p.parse("1 โกริน 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 กร. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. โกริน 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. กร. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (urk)", () => {
		expect(p.parse("2 โกริน 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 กร. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. โกริน 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. กร. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (urk)", () => {
		expect(p.parse("โกโลซี 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("กซ. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (urk)", () => {
		expect(p.parse("ฆาลาเตีย 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ฆล. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (urk)", () => {
		expect(p.parse("เอเฟซัด 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("อฟ. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (urk)", () => {
		expect(p.parse("ฟีลิบปี 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ฟป. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (urk)", () => {
		expect(p.parse("1 เทซะโลนิกา 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ทซ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. เทซะโลนิกา 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ทซ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (urk)", () => {
		expect(p.parse("2 เทซะโลนิกา 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ทซ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. เทซะโลนิกา 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ทซ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (urk)", () => {
		expect(p.parse("1 ทิโมที 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ทท. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ทิโมที 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ทท. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (urk)", () => {
		expect(p.parse("2 ทิโมที 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ทท. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ทิโมที 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ทท. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (urk)", () => {
		expect(p.parse("ทีตัด 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ทต. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (urk)", () => {
		expect(p.parse("ฟีเลโมน 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ฟม. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (urk)", () => {
		expect(p.parse("ฮีบรู 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ฮบ. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (urk)", () => {
		expect(p.parse("ยากอบ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ยก. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (urk)", () => {
		expect(p.parse("1 เปโตร 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ปต. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. เปโตร 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ปต. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (urk)", () => {
		expect(p.parse("2 เปโตร 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ปต. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. เปโตร 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ปต. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (urk)", () => {
		expect(p.parse("ยูดา 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ยด. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (urk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (urk)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 โยฮัน - 3 โยฮัน").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 โยฮัน – 3 โยฮัน").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 โยฮัน — 3 โยฮัน").osis()).toEqual("1John.1-3John.1");
	});
});

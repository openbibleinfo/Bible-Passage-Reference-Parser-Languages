"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/pwo.js";

describe("Localized book Gen (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (pwo)", () => {
		expect(p.parse("ၥ မိ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (pwo)", () => {
		expect(p.parse("၂ မိ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (pwo)", () => {
		expect(p.parse("၃ မိ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (pwo)", () => {
		expect(p.parse("၄ မိ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (pwo)", () => {
		expect(p.parse("ဂၪ့ဆၧ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (pwo)", () => {
		expect(p.parse("နဲၪ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (pwo)", () => {
		expect(p.parse("၅ မိ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (pwo)", () => {
		expect(p.parse("ရှုၫ. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (pwo)", () => {
		expect(p.parse("စ့ၩ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (pwo)", () => {
		expect(p.parse("ရု 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (pwo)", () => {
		expect(p.parse("အဲၫ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (pwo)", () => {
		expect(p.parse("၁ စၫ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("၁. စၫ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ၥ စၫ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ၥ. စၫ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (pwo)", () => {
		expect(p.parse("၂ စၫ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("၂. စၫ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (pwo)", () => {
		expect(p.parse("၁ ဎွၩ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("၁. ဎွၩ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ၥ ဎွၩ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ၥ. ဎွၩ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (pwo)", () => {
		expect(p.parse("၂ ဎွၩ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("၂. ဎွၩ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (pwo)", () => {
		expect(p.parse("၁ ကွ့ၭ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("၁. ကွ့ၭ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ၥ ကွ့ၭ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ၥ. ကွ့ၭ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (pwo)", () => {
		expect(p.parse("၂ ကွ့ၭ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("၂. ကွ့ၭ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (pwo)", () => {
		expect(p.parse("ရၫ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (pwo)", () => {
		expect(p.parse("နံၫ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (pwo)", () => {
		expect(p.parse("တၧၫ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (pwo)", () => {
		expect(p.parse("ဘၭ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (pwo)", () => {
		expect(p.parse("အၪ့ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (pwo)", () => {
		expect(p.parse("ဒီၩ့ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (pwo)", () => {
		expect(p.parse("လီၩ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (pwo)", () => {
		expect(p.parse("ထၭ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (pwo)", () => {
		expect(p.parse("မဲအၫ 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (pwo)", () => {
		expect(p.parse("ဇံၫ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (pwo)", () => {
		expect(p.parse("ဒၫ့ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (pwo)", () => {
		expect(p.parse("ဟိၫ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (pwo)", () => {
		expect(p.parse("ယိၫ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (pwo)", () => {
		expect(p.parse("မူၭ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (pwo)", () => {
		expect(p.parse("အိၫ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (pwo)", () => {
		expect(p.parse("နၫ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (pwo)", () => {
		expect(p.parse("မဲ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (pwo)", () => {
		expect(p.parse("ဟၧၫ့ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (pwo)", () => {
		expect(p.parse("ကၧၭ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (pwo)", () => {
		expect(p.parse("ဖနဲ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (pwo)", () => {
		expect(p.parse("ဟၭ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (pwo)", () => {
		expect(p.parse("ရဲ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (pwo)", () => {
		expect(p.parse("ခဲၫ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (pwo)", () => {
		expect(p.parse("မၭ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (pwo)", () => {
		expect(p.parse("မၫ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (pwo)", () => {
		expect(p.parse("လု 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pwo)", () => {
		expect(p.parse("၁ ယီ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁. ယီ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ၥ ယီ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ၥ. ယီ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pwo)", () => {
		expect(p.parse("၂ ယီ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂. ယီ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (pwo)", () => {
		expect(p.parse("၃ ယီ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃. ယီ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (pwo)", () => {
		expect(p.parse("ယီ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (pwo)", () => {
		expect(p.parse("ဆၧ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (pwo)", () => {
		expect(p.parse("ရိ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pwo)", () => {
		expect(p.parse("၁ ကီ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁. ကီ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ၥ ကီ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ၥ. ကီ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pwo)", () => {
		expect(p.parse("၂ ကီ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂. ကီ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (pwo)", () => {
		expect(p.parse("လီ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (pwo)", () => {
		expect(p.parse("လ့ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (pwo)", () => {
		expect(p.parse("အ့ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (pwo)", () => {
		expect(p.parse("ဖံၫ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pwo)", () => {
		expect(p.parse("၁ ၥ့ၭ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁. ၥ့ၭ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ၥ ၥ့ၭ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ၥ. ၥ့ၭ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pwo)", () => {
		expect(p.parse("၂ ၥ့ၭ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂. ၥ့ၭ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pwo)", () => {
		expect(p.parse("၁ ထံ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁. ထံ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ၥ ထံ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ၥ. ထံ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pwo)", () => {
		expect(p.parse("၂ ထံ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂. ထံ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (pwo)", () => {
		expect(p.parse("တဲ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (pwo)", () => {
		expect(p.parse("လံမၧၫ့ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (pwo)", () => {
		expect(p.parse("ဟံ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (pwo)", () => {
		expect(p.parse("ယ့ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pwo)", () => {
		expect(p.parse("၁ ပံ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁. ပံ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ၥ ပံ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ၥ. ပံ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pwo)", () => {
		expect(p.parse("၂ ပံ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂. ပံ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (pwo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (pwo)", () => {
		expect(p.parse("ဒၭ 1:1").osis()).toEqual("Jude.1.1");
	});
});

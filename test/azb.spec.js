"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/azb.js";

describe("Localized book Gen (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (azb)", () => {
		expect(p.parse("یارادیلیش 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (azb)", () => {
		expect(p.parse("چیخیش 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (azb)", () => {
		expect(p.parse("لاوئلی‌لر 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (azb)", () => {
		expect(p.parse("سایلار 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (azb)", () => {
		expect(p.parse("مرثئیه‌لر 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (azb)", () => {
		expect(p.parse("وحی 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (azb)", () => {
		expect(p.parse("تثنئیه 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (azb)", () => {
		expect(p.parse("یوشَع 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (azb)", () => {
		expect(p.parse("داورلر 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("داو. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (azb)", () => {
		expect(p.parse("روت 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (azb)", () => {
		expect(p.parse("اِشَعیا 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("اِش. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (azb)", () => {
		expect(p.parse("۱سمویئل 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (azb)", () => {
		expect(p.parse("۲سمویئل 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (azb)", () => {
		expect(p.parse("۱پادشاهلار 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (azb)", () => {
		expect(p.parse("۲پادشاهلار 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (azb)", () => {
		expect(p.parse("۱سالنامه‌لر 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("سال. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (azb)", () => {
		expect(p.parse("۲سالنامه‌لر 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (azb)", () => {
		expect(p.parse("عِزرا 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (azb)", () => {
		expect(p.parse("نِحِمیا 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (azb)", () => {
		expect(p.parse("اِستِر 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (azb)", () => {
		expect(p.parse("اَیّوب 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (azb)", () => {
		expect(p.parse("مزمورلار 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (azb)", () => {
		expect(p.parse("مثل‌لر کئتابی 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (azb)", () => {
		expect(p.parse("واعئظ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (azb)", () => {
		expect(p.parse("نغمه‌لر 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (azb)", () => {
		expect(p.parse("اِرِمیا 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("اِر. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (azb)", () => {
		expect(p.parse("حِزِقیال 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (azb)", () => {
		expect(p.parse("دانیال 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (azb)", () => {
		expect(p.parse("هوشَع 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (azb)", () => {
		expect(p.parse("یوعِل 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (azb)", () => {
		expect(p.parse("عاموس 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (azb)", () => {
		expect(p.parse("عوبَدیا 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (azb)", () => {
		expect(p.parse("یونوس 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (azb)", () => {
		expect(p.parse("مئکا 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (azb)", () => {
		expect(p.parse("ناحوم 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (azb)", () => {
		expect(p.parse("حَبَقوق 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (azb)", () => {
		expect(p.parse("صِفَنیا 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (azb)", () => {
		expect(p.parse("حَجّه‌ی 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (azb)", () => {
		expect(p.parse("زِکَرئیّا 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (azb)", () => {
		expect(p.parse("مَلاکی 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (azb)", () => {
		expect(p.parse("متّا 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (azb)", () => {
		expect(p.parse("مرقوس 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (azb)", () => {
		expect(p.parse("لوقا 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (azb)", () => {
		expect(p.parse("۱یوحنّا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (azb)", () => {
		expect(p.parse("۲یوحنّا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (azb)", () => {
		expect(p.parse("۳یوحنّا 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (azb)", () => {
		expect(p.parse("یوحنّا 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (azb)", () => {
		expect(p.parse("حوارئلر 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (azb)", () => {
		expect(p.parse("روملو‌لارا 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (azb)", () => {
		expect(p.parse("۱قورئنتلی‌لره 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (azb)", () => {
		expect(p.parse("۲قورئنتلی‌لره 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (azb)", () => {
		expect(p.parse("کولوسلولارا 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (azb)", () => {
		expect(p.parse("قالاتئیالی‌لارا 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (azb)", () => {
		expect(p.parse("اِفِسوسلولارا 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (azb)", () => {
		expect(p.parse("فئلئپئلی‌لره 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (azb)", () => {
		expect(p.parse("۱تسالونئکلی‌لره 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (azb)", () => {
		expect(p.parse("۲تسالونئکلی‌لره 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (azb)", () => {
		expect(p.parse("۱تئموتاعوسا 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (azb)", () => {
		expect(p.parse("۲تئموتاعوسا 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (azb)", () => {
		expect(p.parse("تئطوسا 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (azb)", () => {
		expect(p.parse("فئلئمونا 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (azb)", () => {
		expect(p.parse("عئبرانئلره 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (azb)", () => {
		expect(p.parse("یعقوب 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (azb)", () => {
		expect(p.parse("۱پطروس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (azb)", () => {
		expect(p.parse("۲پطروس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (azb)", () => {
		expect(p.parse("یهودا 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (azb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (azb)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("۱یوحنّا - ۳یوحنّا").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("۱یوحنّا – ۳یوحنّا").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("۱یوحنّا — ۳یوحنّا").osis()).toEqual("1John.1-3John.1");
	});
});

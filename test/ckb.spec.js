"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ckb.js";

describe("Localized book Gen (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ckb)", () => {
		expect(p.parse("پەیدابوون 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ckb)", () => {
		expect(p.parse("دەرچوون 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ckb)", () => {
		expect(p.parse("لێڤییەکان 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ckb)", () => {
		expect(p.parse("سەرژمێری 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ckb)", () => {
		expect(p.parse("شینەکانی یەرمیا 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ckb)", () => {
		expect(p.parse("ئاشکراکردن 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("بینین 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("بی 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ckb)", () => {
		expect(p.parse("دواوتار 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ckb)", () => {
		expect(p.parse("یەشوع 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ckb)", () => {
		expect(p.parse("ڕابەران 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ckb)", () => {
		expect(p.parse("ڕائووس 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ckb)", () => {
		expect(p.parse("ئیشایا 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ckb)", () => {
		expect(p.parse("یه‌كه‌م ساموئێل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("یه‌كه‌م. ساموئێل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("یەکەم ساموئێل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("یەکەم. ساموئێل 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ckb)", () => {
		expect(p.parse("دووه‌م ساموئێل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("دووه‌م. ساموئێل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("دووەم ساموئێل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("دووەم. ساموئێل 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ckb)", () => {
		expect(p.parse("یه‌كه‌م پاشایان 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("یه‌كه‌م. پاشایان 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("یەکەم پاشایان 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("یەکەم. پاشایان 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ckb)", () => {
		expect(p.parse("دووه‌م پاشایان 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("دووه‌م. پاشایان 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("دووەم پاشایان 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("دووەم. پاشایان 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ckb)", () => {
		expect(p.parse("یه‌كه‌م پوختەی مێژوو 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("یه‌كه‌م. پوختەی مێژوو 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("یەکەم پوختەی مێژوو 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("یەکەم. پوختەی مێژوو 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ckb)", () => {
		expect(p.parse("دووه‌م پوختەی مێژوو 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("دووه‌م. پوختەی مێژوو 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("دووەم پوختەی مێژوو 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("دووەم. پوختەی مێژوو 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ckb)", () => {
		expect(p.parse("عەزرا 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ckb)", () => {
		expect(p.parse("نەحەمیا 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ckb)", () => {
		expect(p.parse("ئەستێر 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ckb)", () => {
		expect(p.parse("ئەیوب 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ckb)", () => {
		expect(p.parse("په‌سنییه‌كان 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("زەبوورەکان 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("پس 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ckb)", () => {
		expect(p.parse("پەندەکانی سلێمان 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("پەندەکان 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ckb)", () => {
		expect(p.parse("ژیرمەندی 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ckb)", () => {
		expect(p.parse("گۆرانی گۆرانییەکان 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ckb)", () => {
		expect(p.parse("یەرمیا 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ckb)", () => {
		expect(p.parse("حزقیێل 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ckb)", () => {
		expect(p.parse("دانیال 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ckb)", () => {
		expect(p.parse("هۆشەع 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ckb)", () => {
		expect(p.parse("یۆئێل 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ckb)", () => {
		expect(p.parse("ئامۆس 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ckb)", () => {
		expect(p.parse("عۆبەدیا 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ckb)", () => {
		expect(p.parse("یونس 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ckb)", () => {
		expect(p.parse("میخا 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ckb)", () => {
		expect(p.parse("ناحوم 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ckb)", () => {
		expect(p.parse("حەبەقوق 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ckb)", () => {
		expect(p.parse("سەفەنیا 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ckb)", () => {
		expect(p.parse("حەگەی 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ckb)", () => {
		expect(p.parse("زەکەریا 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ckb)", () => {
		expect(p.parse("مەلاخی 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ckb)", () => {
		expect(p.parse("مه‌تته‌ی 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مەتا 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مت 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ckb)", () => {
		expect(p.parse("مه‌رقوس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مەرقۆس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مر 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ckb)", () => {
		expect(p.parse("لۆقا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لۆ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ckb)", () => {
		expect(p.parse("1یو 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ckb)", () => {
		expect(p.parse("2یو 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ckb)", () => {
		expect(p.parse("سێیه‌م یوخه‌ننه‌ن 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("سێیەم یۆحەنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3یو 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ckb)", () => {
		expect(p.parse("یه‌كه‌م یوخه‌ننه‌ن 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("یه‌كه‌م یۆحەنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("یه‌كه‌م. یوخه‌ننه‌ن 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("یه‌كه‌م. یۆحەنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("یەکەم یوخه‌ننه‌ن 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("یەکەم یۆحەنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("یەکەم. یوخه‌ننه‌ن 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("یەکەم. یۆحەنا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ckb)", () => {
		expect(p.parse("دووه‌م یوخه‌ننه‌ن 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دووه‌م یۆحەنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دووه‌م. یوخه‌ننه‌ن 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دووه‌م. یۆحەنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دووەم یوخه‌ننه‌ن 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دووەم یۆحەنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دووەم. یوخه‌ننه‌ن 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دووەم. یۆحەنا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ckb)", () => {
		expect(p.parse("یوخه‌ننه‌ن 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("یۆحەنا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("یو 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ckb)", () => {
		expect(p.parse("كردار 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("کردار 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("كر 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ckb)", () => {
		expect(p.parse("ڕۆما 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ڕۆ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ckb)", () => {
		expect(p.parse("یه‌كه‌م کۆرنسۆس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("یه‌كه‌م قۆرنتێ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("یه‌كه‌م. کۆرنسۆس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("یه‌كه‌م. قۆرنتێ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("یەکەم کۆرنسۆس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("یەکەم قۆرنتێ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("یەکەم. کۆرنسۆس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("یەکەم. قۆرنتێ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ckb)", () => {
		expect(p.parse("دووه‌م کۆرنسۆس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دووه‌م قۆرنتێ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دووه‌م. کۆرنسۆس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دووه‌م. قۆرنتێ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دووەم کۆرنسۆس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دووەم قۆرنتێ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دووەم. کۆرنسۆس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دووەم. قۆرنتێ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ckb)", () => {
		expect(p.parse("1قۆ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ckb)", () => {
		expect(p.parse("2قۆ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ckb)", () => {
		expect(p.parse("کۆلۆسی 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("قولسێ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("قل 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ckb)", () => {
		expect(p.parse("گه‌ڵاتیه‌ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("گەلاتیا 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("گل 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ckb)", () => {
		expect(p.parse("ئه‌پیسۆس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ئەفەسۆس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ئپ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ckb)", () => {
		expect(p.parse("پیلیۆس 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فیلیپی 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("پل 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ckb)", () => {
		expect(p.parse("یه‌كه‌م تسلۆنیقێ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("یه‌كه‌م سالۆنیکی 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("یه‌كه‌م. تسلۆنیقێ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("یه‌كه‌م. سالۆنیکی 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("یەکەم تسلۆنیقێ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("یەکەم سالۆنیکی 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("یەکەم. تسلۆنیقێ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("یەکەم. سالۆنیکی 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ckb)", () => {
		expect(p.parse("دووه‌م تسلۆنیقێ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دووه‌م سالۆنیکی 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دووه‌م. تسلۆنیقێ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دووه‌م. سالۆنیکی 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دووەم تسلۆنیقێ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دووەم سالۆنیکی 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دووەم. تسلۆنیقێ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دووەم. سالۆنیکی 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ckb)", () => {
		expect(p.parse("1تق 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ckb)", () => {
		expect(p.parse("2تق 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ckb)", () => {
		expect(p.parse("یه‌كه‌م تیماتیئوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("یه‌كه‌م تیمۆساوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("یه‌كه‌م. تیماتیئوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("یه‌كه‌م. تیمۆساوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("یەکەم تیماتیئوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("یەکەم تیمۆساوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("یەکەم. تیماتیئوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("یەکەم. تیمۆساوس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ckb)", () => {
		expect(p.parse("دووه‌م تیماتیئوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دووه‌م تیمۆساوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دووه‌م. تیماتیئوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دووه‌م. تیمۆساوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دووەم تیماتیئوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دووەم تیمۆساوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دووەم. تیماتیئوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دووەم. تیمۆساوس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ckb)", () => {
		expect(p.parse("1تم 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ckb)", () => {
		expect(p.parse("2تم 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ckb)", () => {
		expect(p.parse("تیتۆس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تتوس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تت 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ckb)", () => {
		expect(p.parse("فلیمۆن 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فل 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ckb)", () => {
		expect(p.parse("عیبڕانییه‌كان 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عیبرانییەکان 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عب 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ckb)", () => {
		expect(p.parse("یاقوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("یاقوو 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("یق 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ckb)", () => {
		expect(p.parse("یه‌كه‌م په‌تڕۆس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("یه‌كه‌م پەترۆس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("یه‌كه‌م. په‌تڕۆس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("یه‌كه‌م. پەترۆس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("یەکەم په‌تڕۆس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("یەکەم پەترۆس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("یەکەم. په‌تڕۆس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("یەکەم. پەترۆس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ckb)", () => {
		expect(p.parse("دووه‌م په‌تڕۆس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دووه‌م پەترۆس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دووه‌م. په‌تڕۆس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دووه‌م. پەترۆس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دووەم په‌تڕۆس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دووەم پەترۆس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دووەم. په‌تڕۆس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دووەم. پەترۆس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ckb)", () => {
		expect(p.parse("1پت 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ckb)", () => {
		expect(p.parse("2پت 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ckb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ckb)", () => {
		expect(p.parse("په‌یامی پارسا ئیهوودا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("یەهوزا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ئه 1:1").osis()).toEqual("Jude.1.1");
	});
});

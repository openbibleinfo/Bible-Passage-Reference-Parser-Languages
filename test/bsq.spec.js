"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bsq.js";

describe("Localized book Gen (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bsq)", () => {
		expect(p.parse("Jɛ́nɛ́sì 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Jɛ́n 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (bsq)", () => {
		expect(p.parse("Ɛ́séɖɔ̀ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ɛ́sé 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (bsq)", () => {
		expect(p.parse("Ɖìvéɖékɔ̀ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ɖìvé 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (bsq)", () => {
		expect(p.parse("Nɔ̀ɓà 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (bsq)", () => {
		expect(p.parse("Vĩ̌-wùɖù 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Vĩ̌ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bsq)", () => {
		expect(p.parse("Wɛ̀ɖɛ̀ɓèɖésĩ̀ɔ̀ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Wɛ̀ɖɛ̀ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (bsq)", () => {
		expect(p.parse("Dìtɔ̀wáɖánámɛ̀ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dìtɔ̀ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (bsq)", () => {
		expect(p.parse("Jasúé 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ja 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (bsq)", () => {
		expect(p.parse("Tɔ̀ɔ̀-ɓìɔ̀ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Tɔ̀ɔ̀ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (bsq)", () => {
		expect(p.parse("Wuɖufí 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Wu 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (bsq)", () => {
		expect(p.parse("Àzédyà 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Àzé 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bsq)", () => {
		expect(p.parse("1 Sámíò 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sám 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sámíò 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sám 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bsq)", () => {
		expect(p.parse("2 Sámíò 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sám 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sámíò 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sám 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bsq)", () => {
		expect(p.parse("1 Kĩ́ìn 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kĩ́ìn 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bsq)", () => {
		expect(p.parse("2 Kĩ́ìn 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kĩ́ìn 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bsq)", () => {
		expect(p.parse("1 Kánáníkɔ̀ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kán 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kánáníkɔ̀ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kán 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bsq)", () => {
		expect(p.parse("2 Kánáníkɔ̀ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kán 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kánáníkɔ̀ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kán 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (bsq)", () => {
		expect(p.parse("Ɛ́zùɖùà 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ɛ́zù 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (bsq)", () => {
		expect(p.parse("Níòmádyà 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Níò 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (bsq)", () => {
		expect(p.parse("Ɛsɔ́ɖɔ́ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ɛsɔ́ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (bsq)", () => {
		expect(p.parse("Jóɓò 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (bsq)", () => {
		expect(p.parse("Nɔ́ɔ́ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (bsq)", () => {
		expect(p.parse("Ìkíɖísìásì 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ìkí 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (bsq)", () => {
		expect(p.parse("Sã́ɖòmàà Wɛ́ɖɛ́ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sã́ɖó 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (bsq)", () => {
		expect(p.parse("Wɛ́ɖɛ́ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (bsq)", () => {
		expect(p.parse("Jɛ̀ɖèmádyà 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jɛ̀ɖè 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (bsq)", () => {
		expect(p.parse("Ìzíkìò 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ìzí 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (bsq)", () => {
		expect(p.parse("Dànyá 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dàn 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (bsq)", () => {
		expect(p.parse("Hòzéà 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hò 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (bsq)", () => {
		expect(p.parse("Jóɛ̀ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (bsq)", () => {
		expect(p.parse("Emɔ́ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (bsq)", () => {
		expect(p.parse("Òbòdádyà 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Òbò 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (bsq)", () => {
		expect(p.parse("Jónà 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (bsq)", () => {
		expect(p.parse("Mákà 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (bsq)", () => {
		expect(p.parse("Néhɔ̃̀ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (bsq)", () => {
		expect(p.parse("Hàbákù 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hàbá 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (bsq)", () => {
		expect(p.parse("Zɛ́fènádyà 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zɛ́fè 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (bsq)", () => {
		expect(p.parse("Hágàì 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (bsq)", () => {
		expect(p.parse("Zɛ́kɔ̀wáɖádyà 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zɛ́kɔ̀ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (bsq)", () => {
		expect(p.parse("Máɖékà 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Máɖé 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bsq)", () => {
		expect(p.parse("Máfíò 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bsq)", () => {
		expect(p.parse("Máà 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bsq)", () => {
		expect(p.parse("Ɖúù 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bsq)", () => {
		expect(p.parse("1 Jɔ̃́ɔ́ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jɔ̃́ɔ́ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bsq)", () => {
		expect(p.parse("2 Jɔ̃́ɔ́ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jɔ̃́ɔ́ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bsq)", () => {
		expect(p.parse("3 Jɔ̃́ɔ́ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jɔ̃́ɔ́ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bsq)", () => {
		expect(p.parse("Jɔ̃́ɔ́ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bsq)", () => {
		expect(p.parse("Àpɔ́sò 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Àpɔ́ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bsq)", () => {
		expect(p.parse("Wóɖómà 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Wóɖó 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bsq)", () => {
		expect(p.parse("1 Kɔ̀ɖéíntĩ̀ɔ̀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kɔ̀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔ̀ɖéíntĩ̀ɔ̀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔ̀ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bsq)", () => {
		expect(p.parse("2 Kɔ̀ɖéíntĩ̀ɔ̀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kɔ̀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔ̀ɖéíntĩ̀ɔ̀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔ̀ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bsq)", () => {
		expect(p.parse("Kɔ̀ɖɔ́sĩ̀à 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kɔ̀ɖɔ́ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bsq)", () => {
		expect(p.parse("Gàɖézìà 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gàɖé 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bsq)", () => {
		expect(p.parse("Ìfísĩ̀ɔ̀ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ìfí 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bsq)", () => {
		expect(p.parse("Fèɖópĩ̀à 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fèɖó 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bsq)", () => {
		expect(p.parse("1 Tɛ̀sàɖónìà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tɛ̀ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛ̀sàɖónìà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛ̀ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bsq)", () => {
		expect(p.parse("2 Tɛ̀sàɖónìà 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tɛ̀ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛ̀sàɖónìà 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛ̀ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bsq)", () => {
		expect(p.parse("1 Tímétè 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tí 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tímétè 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tí 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bsq)", () => {
		expect(p.parse("2 Tímétè 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tí 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tímétè 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tí 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bsq)", () => {
		expect(p.parse("Tátɔ̀ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bsq)", () => {
		expect(p.parse("Fàɖímɔ̀ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fàɖí 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bsq)", () => {
		expect(p.parse("Híìbúɖúù 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Híì 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bsq)", () => {
		expect(p.parse("Jĩ́ìn 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bsq)", () => {
		expect(p.parse("1 Píɖɛ̀ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pí 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Píɖɛ̀ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pí 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bsq)", () => {
		expect(p.parse("2 Píɖɛ̀ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pí 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Píɖɛ̀ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pí 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bsq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bsq)", () => {
		expect(p.parse("Júɖè 1:1").osis()).toEqual("Jude.1.1");
	});
});

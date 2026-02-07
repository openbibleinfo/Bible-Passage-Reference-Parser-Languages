"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/pan.js";

describe("Localized book Gen (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (pan)", () => {
		expect(p.parse("utpat 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ਉਤਪਤ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (pan)", () => {
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("kūč 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ਕੂਚ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (pan)", () => {
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (pan)", () => {
		expect(p.parse("levīāṃ dī potʰī 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ਲੇਵੀਆਂ ਦੀ ਪੋਥੀ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("levīāṃ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ਲੇਵੀਆਂ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (pan)", () => {
		expect(p.parse("giṇtī 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ਗਿਣਤੀ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (pan)", () => {
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (pan)", () => {
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (pan)", () => {
		expect(p.parse("virlāp 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ਵਿਰਲਾਪ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (pan)", () => {
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (pan)", () => {
		expect(p.parse("yūhãnā de prakāš dī potʰī 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ਯੂਹੰਨਾ ਦੇ ਪਰਕਾਸ਼ ਦੀ ਪੋਥੀ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("yūhãnā de prakāš 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ਪਰਕਾਸ਼ ਦੀ ਪੋਥੀ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (pan)", () => {
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (pan)", () => {
		expect(p.parse("bivastʰā sār 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ਬਿਵਸਥਾ ਸਾਰ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ਬਿਵਸਥਾ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (pan)", () => {
		expect(p.parse("yahošuā 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ਯਹੋਸ਼ੁਆ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (pan)", () => {
		expect(p.parse("niāīāṃ dī potʰī 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ਨਿਆਂਈਆਂ ਦੀ ਪੋਥੀ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ਨਿਆਈਆਂ ਦੀ ਪੋਥੀ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("niāīāṃ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (pan)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("rūtʰ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ਰੂਥ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (pan)", () => {
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (pan)", () => {
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (pan)", () => {
		expect(p.parse("yasāyāh 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ਯਾਸਾਯਾਹ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ਯਸਾਯਾਹ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ਯਸਾ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 2Sam (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (pan)", () => {
		expect(p.parse("samūel dī dūjī potʰī 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ਸਮੂਏਲ ਦੀ ਦੂਜੀ ਪੋਥੀ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 samūel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ਸਮੂਏਲ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (pan)", () => {
		expect(p.parse("samūel dī pahilī potʰī 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ਸਮੂਏਲ ਦੀ ਪਹਿਲੀ ਪੋਥੀ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 samūel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ਸਮੂਏਲ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Kgs (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (pan)", () => {
		expect(p.parse("rājiāṃ dī dūjī potʰī 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ਰਾਜਿਆਂ ਦੀ ਦੂਜੀ ਪੋਥੀ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 rājiāṃ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ਰਾਜਿਆਂ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (pan)", () => {
		expect(p.parse("rājiāṃ dī pahilī potʰī 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ਰਾਜਿਆਂ ਦੀ ਪਹਿਲੀ ਪੋਥੀ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 rājiāṃ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ਰਾਜਿਆਂ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Chr (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (pan)", () => {
		expect(p.parse("itahās dī dūjī potʰī 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ਇਤਹਾਸ ਦੀ ਦੂਜੀ ਪੋਥੀ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 itahās 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ਇਤਹਾਸ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (pan)", () => {
		expect(p.parse("itahās dī pahilī potʰī 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ਇਤਹਾਸ ਦੀ ਪਹਿਲੀ ਪੋਥੀ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 itahās 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ਇਤਹਾਸ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (pan)", () => {
		expect(p.parse("ਅਜ਼ਰਾ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("azrā 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (pan)", () => {
		expect(p.parse("nahamyāh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ਨਹਮਯਾਹ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (pan)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (pan)", () => {
		expect(p.parse("astar 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ਅਸਤਰ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (pan)", () => {
		expect(p.parse("ayyūb 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ਅੱਯੂਬ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ਅਯੂਬ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (pan)", () => {
		expect(p.parse("zabūr 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ਜ਼ਬੂਰ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ਜਬੂਰ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (pan)", () => {
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (pan)", () => {
		expect(p.parse("kahāutāṃ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ਕਹਾਉਂਤਾ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ਕਹਾਉਤਾਂ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (pan)", () => {
		expect(p.parse("upadešak 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ਉਪਦੇਸ਼ਕ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (pan)", () => {
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (pan)", () => {
		expect(p.parse("salemān dā gīt 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ਸਲੇਮਾਨ ਦਾ ਗੀਤ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (pan)", () => {
		expect(p.parse("yirmiyāh 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ਯਿਰਮਿਯਾਹ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (pan)", () => {
		expect(p.parse("ਹਿਜ਼ਕੀਏਲ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("hizkīel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (pan)", () => {
		expect(p.parse("dānīel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ਦਾਨੀਏਲ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (pan)", () => {
		expect(p.parse("ਹੋਸ਼ੇਆ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("hošeā 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (pan)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("yoel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ਜੋਏਲ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ਯੋਏਲ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (pan)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("āmos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ਆਮੋਸ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (pan)", () => {
		expect(p.parse("obadyāh 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ਓਬਦਯਾਹ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (pan)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("yūnāh 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ਯੂਨਾਹ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (pan)", () => {
		expect(p.parse("mīkāh 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ਮੀਕਾਹ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (pan)", () => {
		expect(p.parse("nahūm 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ਨਹੂਮ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (pan)", () => {
		expect(p.parse("habakkūk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ਹਬਕੱੂਕ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ਹਬੱਕੂਕ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ਹਬਕੂਕ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (pan)", () => {
		expect(p.parse("safanyāh 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ਸਫ਼ਨਯਾਹ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (pan)", () => {
		expect(p.parse("hajjaī 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ਹੱਜਈ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (pan)", () => {
		expect(p.parse("zakaryāh 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ਜ਼ਕਰਜਾਹ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ਜ਼ਕਰਯਾਹ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ਜਕਰਯਾਹ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (pan)", () => {
		expect(p.parse("malākī 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ਮਲਾਕੀ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (pan)", () => {
		expect(p.parse("mattī dī ĩjīl 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ਮੱਤੀ ਦੀ ਇੰਜੀਲ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("mattī 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ਮੱਤੀ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (pan)", () => {
		expect(p.parse("markus dī ĩjīl 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ਮਰਕੁਸ ਦੀ ਇੰਜੀਲ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ਮਰਕੁਸ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (pan)", () => {
		expect(p.parse("ਲੂਕਾ ਦੀ ਇੰਜੀਲ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("lūkā dī ĩjīl 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("lūkā 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ਲੂਕਾ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pan)", () => {
		expect(p.parse("yūhãnā dī pahilī pattrī 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ਯੂਹੰਨਾ ਦੀ ਪਹਿਲੀ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 yūhãnā 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ਯੂਹੰਨਾ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pan)", () => {
		expect(p.parse("yūhãnā dī dūjī pattrī 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ਯੂਹੰਨਾ ਦੀ ਦੂਜੀ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 yūhãnā 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ਯੂਹੰਨਾ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (pan)", () => {
		expect(p.parse("yūhãnā dī tījī pattrī 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ਯੂਹੰਨਾ ਦੀ ਤੀਜੀ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 yūhãnā 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ਯੂਹੰਨਾ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (pan)", () => {
		expect(p.parse("ਯੂਹੰਨਾ ਦੀ ਇੰਜੀਲ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("yūhãnā dī ĩjīl 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ਯੂਹਾਂਨਾ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("yūhãnā 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ਯੂਹੰਨਾ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (pan)", () => {
		expect(p.parse("rasūlāṃ de kartabb 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ਰਸੂਲਾਂ ਦੇ ਕਰਤੱਬ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (pan)", () => {
		expect(p.parse("romīāṃ nū̃ pattrī 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ਰੋਮੀਆਂ ਨੂੰ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ਰੋਮੀਆਂ ਨੂੰ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("romīāṃ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ਰੋਮੀਆਂ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 2Cor (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pan)", () => {
		expect(p.parse("kurĩtʰīāṃ nū̃ dūjī pattrī 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ਕੁਰਿੰਥੀਆਂ ਨੂੰ ਦੂਜੀ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ਕੁਰਿੰਥੀਆਂ ਨੂੰ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 kurĩtʰīāṃ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ਕੁਰਿੰਥੀਆਂ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pan)", () => {
		expect(p.parse("kurĩtʰīāṃ nū̃ pahilī pattrī 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ਕੁਰਿੰਥੀਆਂ ਨੂੰ ਪਹਿਲੀ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ਕੁਰਿੰਥੀਆਂ ਨੂੰ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ਕੁਰਿੰਥੀਆਂ ਨੂੰ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 kurĩtʰīāṃ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ਕੁਰਿੰਥੀਆਂ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (pan)", () => {
		expect(p.parse("galātīāṃ nū̃ pattrī 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ਗਲਾਤੀਆਂ ਨੂੰ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ਗਲਾਤੀਆਂ ਨੂੰ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("galātīāṃ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (pan)", () => {
		expect(p.parse("afasīāṃ nū̃ pattrī 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ਅਫ਼ਸੀਆਂ ਨੂੰ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ਅਫ਼ਸੀਆਂ ਨੂੰ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("afasīāṃ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (pan)", () => {
		expect(p.parse("ਫ਼ਿਲਿੱਪੀਆਂ ਨੂੰ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("filippīāṃ nū̃ pattrī 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ਫ਼ਿਲਿੱਪੀਆਂ ਨੂੰ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("filippīāṃ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (pan)", () => {
		expect(p.parse("kulussīāṃ nū̃ pattrī 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ਕੁਲੁੱਸੀਆਂ ਨੂੰ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ਕੁਲੁੱਸੀਆਂ ਨੂੰ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("kulussīāṃ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 2Thess (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pan)", () => {
		expect(p.parse("tʰassalunīkīāṃ nū̃ dūjī pattrī 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ਥੱਸਲੁਨੀਕੀਆਂ ਨੂੰ ਦੂਜੀ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ਥੱਸਲੁਨੀਕੀਆਂ ਨੂੰ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 tʰassalunīkīāṃ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pan)", () => {
		expect(p.parse("tʰassalunīkīāṃ nū̃ pahilī pattrī 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ਥਸੱਲੁਨੀਕੀਆਂ ਨੂੰ ਪਹਿਲੀ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ਥੱਸਲੁਨੀਕੀਆਂ ਨੂੰ ਪਹਿਲੀ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ਥੱਸਲੁਨੀਕੀਆਂ ਨੂੰ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 tʰassalunīkīāṃ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Tim (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pan)", () => {
		expect(p.parse("timotʰius nū̃ dūjī pattrī 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ਤਿਮੋਥਿਉਸ ਨੂੰ ਦੂਜੀ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ਤਿਮੋਥਿਉਸ ਨੂੰ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 timotʰius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pan)", () => {
		expect(p.parse("timotʰius nū̃ pahilī pattrī 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ਤਿਮੋਥਿਉਸ ਨੂੰ ਪਹਿਲੀ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ਤਿਮੋਥਿਉਸ ਨੂੰ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 timotʰius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (pan)", () => {
		expect(p.parse("tītus nū̃ pattrī 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ਤੀਤੁਸ ਨੂੰ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ਤੀਤੁਸ ਨੂੰ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("tītus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ਤੀਤੁਸ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (pan)", () => {
		expect(p.parse("pʰilemon nū̃ pattrī 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ਫ਼ਿਲੇਮੋਨ ਨੂੰ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ਫਿਲੇਮੋਨ ਨੂੰ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ਫ਼ਿਲੇਮੋਨ ਨੂੰ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("pʰilemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (pan)", () => {
		expect(p.parse("ibrānīāṃ nū̃ pattrī 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ਇਬਰਾਨੀਆਂ ਨੂੰ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ਇਬਰਾਨੀਆਂ ਨੂੰ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ibrānīāṃ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (pan)", () => {
		expect(p.parse("yākūb dī pattrī 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ਯਾਕੂਬ ਦੀ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("yākūb 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ਯਾਕੂਬ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 2Pet (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pan)", () => {
		expect(p.parse("patras dī dūjī pattrī 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ਪਤਰਸ ਦੀ ਦੂਜੀ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 patras 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ਪਤਰਸ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pan)", () => {
		expect(p.parse("patras dī pahilī pattrī 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ਪਤਰਸ ਦੀ ਪਹਿਲੀ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 patras 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ਪਤਰਸ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (pan)", () => {
		expect(p.parse("yahūdāh dī pattrī 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ਯਹੂਦਾਹ ਦੀ ਪੱਤ੍ਰੀ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("yahūdāh 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ਯਹੂਦਾਹ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (pan)", () => {
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (pan)", () => {
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (pan)", () => {
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (pan)", () => {
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 2Macc (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (pan)", () => {
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (pan)", () => {
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (pan)", () => {
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (pan)", () => {
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Parser helper should handle ranges (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (pan)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1-2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 - 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1–2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 – 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1—2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 — 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (pan)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 chapter 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (pan)", () => {
		expect(p.parse("Exod 1:1 ਪਦ 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm ਪਦ 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (pan)", () => {
		expect(p.parse("Exod 1:1 ਜਾਂ 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 ਜਾਂ 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (pan)", () => {
		expect(p.parse("Ps 3 title, 4:2, 5:title").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'ff' (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'ff' (pan)", () => {
		expect(p.parse("Rev 3ff, 4:2ff").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
	});
});
describe("Parser helper should handle translations (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (pan)", () => {
		expect(p.parse("Lev 1 (ERV)").osis_and_translations()).toEqual([["Lev.1","ERV"]]);
	});
});
describe("Parser helper should handle book ranges (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (pan)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("yūhãnā dī pahilī pattrī - yūhãnā dī tījī pattrī").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("yūhãnā dī pahilī pattrī – yūhãnā dī tījī pattrī").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("yūhãnā dī pahilī pattrī — yūhãnā dī tījī pattrī").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (pan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (pan)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});

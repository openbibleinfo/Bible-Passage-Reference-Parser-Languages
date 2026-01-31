"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kat.js";

describe("Localized book Gen (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kat)", () => {
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("დაბ. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("დაბ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kat)", () => {
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("გამ. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("გამ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kat)", () => {
		expect(p.parse("Leviticus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ლევ. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ლევ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kat)", () => {
		expect(p.parse("Numbers 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("რიცხ. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("რცხ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (kat)", () => {
		expect(p.parse("სიბრძნე ზირაქისა წინათქმა 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ecclesiasticus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirach 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("ზრქ 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (kat)", () => {
		expect(p.parse("სიბრძნე სოლომონისა 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wisdom of Solomon 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("სლმ 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (kat)", () => {
		expect(p.parse("Lamentations 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("გოდ. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("გოდ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (kat)", () => {
		expect(p.parse("Letter of Jeremiah 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("ეპისტოლე იერემიასი 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("ეპერ 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kat)", () => {
		expect(p.parse("Revelation 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("გამოცხ. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("გცხ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (kat)", () => {
		expect(p.parse("იუდაელი მეფის მენაშეს ლოცვა 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Prayer of Manasseh 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("მან 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kat)", () => {
		expect(p.parse("Deuteronomy 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("რჯლ. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("რჯ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kat)", () => {
		expect(p.parse("Joshua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("იესო. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ისნ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kat)", () => {
		expect(p.parse("Judges 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("მსაჯ. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("მსჯ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kat)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("რუთ. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("რთ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (kat)", () => {
		expect(p.parse("1 Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esdras 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 1Esd (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (kat)", () => {
		expect(p.parse("მეორე ეზრა 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("2ეზ 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book Isa (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (kat)", () => {
		expect(p.parse("Isaiah 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ეს. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ესა 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kat)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kat)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kat)", () => {
		expect(p.parse("1მეფ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1მფ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kat)", () => {
		expect(p.parse("2მეფ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2მფ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kat)", () => {
		expect(p.parse("1 Kings 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kings 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kat)", () => {
		expect(p.parse("2 Kings 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kings 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kat)", () => {
		expect(p.parse("3მეფ. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3მფ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kat)", () => {
		expect(p.parse("4მეფ. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4მფ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kat)", () => {
		expect(p.parse("1 Chronicles 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Chronicles 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kat)", () => {
		expect(p.parse("2 Chronicles 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Chronicles 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kat)", () => {
		expect(p.parse("1ნეშტ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ნშ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kat)", () => {
		expect(p.parse("2ნეშტ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ნშ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (kat)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ეზრ. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ეზრ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (kat)", () => {
		expect(p.parse("Nehemiah 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ნეემ. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ნეე 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kat)", () => {
		expect(p.parse("Esther (Hebrew) 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esther 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ესთ. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ესთ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (kat)", () => {
		expect(p.parse("იობ. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("იობ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kat)", () => {
		expect(p.parse("Psalms 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ფსალმ. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ფს 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kat)", () => {
		expect(p.parse("Proverbs 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("იგავ. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("იგვ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kat)", () => {
		expect(p.parse("Ecclesiastes 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ეკლ. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ეკლ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (kat)", () => {
		expect(p.parse("Song of Songs 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ქებ. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ქბ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (kat)", () => {
		expect(p.parse("Jeremiah 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("იერ. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("იერ 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (kat)", () => {
		expect(p.parse("Ezekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ეზეკ. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ეზკ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kat)", () => {
		expect(p.parse("Daniel (Hebrew) 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("დან. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("დან 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (kat)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ოს. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ოს 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (kat)", () => {
		expect(p.parse("იოელ. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("იოლ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (kat)", () => {
		expect(p.parse("ამოს. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ამო 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (kat)", () => {
		expect(p.parse("Obadiah 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("აბდ. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("აბდ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kat)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("იონ. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("იონ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (kat)", () => {
		expect(p.parse("Micah 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("მიქ. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("მიქ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (kat)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ნაუმ. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ნამ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (kat)", () => {
		expect(p.parse("Habakkuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("აბაკ. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("აბკ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (kat)", () => {
		expect(p.parse("Zephaniah 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("სოფ. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("სოფ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (kat)", () => {
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ანგ. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ანგ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (kat)", () => {
		expect(p.parse("Zechariah 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ზაქ. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ზაქ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kat)", () => {
		expect(p.parse("Malachi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("მალ. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("მალ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kat)", () => {
		expect(p.parse("Matthew 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("მათ. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("მთ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kat)", () => {
		expect(p.parse("მარკ. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("მრკ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kat)", () => {
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ლუკ. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ლკ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kat)", () => {
		expect(p.parse("1 John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. John 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kat)", () => {
		expect(p.parse("2 John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. John 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kat)", () => {
		expect(p.parse("3 John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. John 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kat)", () => {
		expect(p.parse("1იოან. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1იო 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kat)", () => {
		expect(p.parse("2იოან. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2იო 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kat)", () => {
		expect(p.parse("3იოან. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3იო 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kat)", () => {
		expect(p.parse("იოან. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("იო 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kat)", () => {
		expect(p.parse("საქმე. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("საქ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kat)", () => {
		expect(p.parse("Romans 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("რომ. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("რომ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kat)", () => {
		expect(p.parse("1 Corinthians 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthians 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kat)", () => {
		expect(p.parse("2 Corinthians 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthians 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kat)", () => {
		expect(p.parse("1კორ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1კო 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kat)", () => {
		expect(p.parse("2კორ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2კო 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kat)", () => {
		expect(p.parse("Colossians 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("კოლ. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("კლს 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kat)", () => {
		expect(p.parse("Galatians 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("გალ. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("გლტ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kat)", () => {
		expect(p.parse("Ephesians 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ეფეს. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ეფს 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kat)", () => {
		expect(p.parse("Philippians 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ფილიპ. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ფლპ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kat)", () => {
		expect(p.parse("1 Thessalonians 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonians 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kat)", () => {
		expect(p.parse("2 Thessalonians 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonians 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kat)", () => {
		expect(p.parse("1თეს. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1თს 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kat)", () => {
		expect(p.parse("2თეს. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2თს 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kat)", () => {
		expect(p.parse("1 Timothy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothy 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kat)", () => {
		expect(p.parse("2 Timothy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothy 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kat)", () => {
		expect(p.parse("1ტიმ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ტმ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kat)", () => {
		expect(p.parse("2ტიმ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ტმ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kat)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ტიტ. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ტიტ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kat)", () => {
		expect(p.parse("Philemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ფილ. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ფლმ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kat)", () => {
		expect(p.parse("Hebrews 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ებრ. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ებრ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kat)", () => {
		expect(p.parse("James 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("იაკ. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("იაკ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kat)", () => {
		expect(p.parse("1 Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peter 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kat)", () => {
		expect(p.parse("2 Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peter 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kat)", () => {
		expect(p.parse("1პეტრ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1პტ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kat)", () => {
		expect(p.parse("2პეტრ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2პტ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kat)", () => {
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("იუდ. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("იუდ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (kat)", () => {
		expect(p.parse("ტობითი 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("ტობ. 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("ტობ 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (kat)", () => {
		expect(p.parse("Judith 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("ივდითი 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("ივდ 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (kat)", () => {
		expect(p.parse("ბარუქ წინასწარმეტყველი 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Baruch 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("ბრქ 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (kat)", () => {
		expect(p.parse("1 Maccabees 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Maccabees 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (kat)", () => {
		expect(p.parse("2 Maccabees 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Maccabees 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (kat)", () => {
		expect(p.parse("3 Maccabees 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Maccabees 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 1Macc (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (kat)", () => {
		expect(p.parse("პირველი მაკაბელთა 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1მაკ. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1მკ 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (kat)", () => {
		expect(p.parse("მეორე მაკაბელთა 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2მაკ. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2მკ 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (kat)", () => {
		expect(p.parse("მესამე მაკაბელთა 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3მაკ. 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3მკ 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Preferred book names (kat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (kat)", () => {
		expect(p.parse("1 Esdras (Greek) 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Sirach (Ecclesiasticus) 1:1").osis()).toEqual("Sir.1.1");
	});
});

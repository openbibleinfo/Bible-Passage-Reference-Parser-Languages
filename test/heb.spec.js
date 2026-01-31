"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/heb.js";

describe("Localized book Gen (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (heb)", () => {
		expect(p.parse("בראשית 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("בריאה 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Bereshit 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Bereishith 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Bereshis 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (heb)", () => {
		expect(p.parse("יציאת מצרים 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("יציאה 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("שמות 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Shemot 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Shemoth 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (heb)", () => {
		expect(p.parse("בל והדרקון 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("התנין בבבל 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (heb)", () => {
		expect(p.parse("ספר הלוויים 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ויקרא 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Vayikra 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Vayiqra 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (heb)", () => {
		expect(p.parse("במדבר 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("מניין 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ספירה 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Bamidbar 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (heb)", () => {
		expect(p.parse("משלי בן סירא 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("משלי בן-סירא 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("ספר בן סירא 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (heb)", () => {
		expect(p.parse("חכמת שלמה 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (heb)", () => {
		expect(p.parse("קינות 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("איכה 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Eichah 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Eikhah 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ekhah 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (heb)", () => {
		expect(p.parse("איגרת ירמיהו 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (heb)", () => {
		expect(p.parse("חזון יוחנן 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ההתגלות 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("התגלות 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Hisgalus 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (heb)", () => {
		expect(p.parse("תפילת מנשה 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (heb)", () => {
		expect(p.parse("משנה תורה 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("דברים 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Devarim 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (heb)", () => {
		expect(p.parse("יהושע 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yehoshua 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (heb)", () => {
		expect(p.parse("שופטים 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Shoftim 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Shofetim 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (heb)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("רות 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (heb)", () => {
		expect(p.parse("חזון עזרא 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (heb)", () => {
		expect(p.parse("עזרא החיצוני 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (heb)", () => {
		expect(p.parse("ישעיהו 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ישעיה 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ישעה 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yeshayahu 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yeshayah 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 2Sam (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (heb)", () => {
		expect(p.parse("שמואל ב' 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("שמואל ב 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Shmuel II 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Shmuel Bais 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (heb)", () => {
		expect(p.parse("שמואל א' 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("שמואל א 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Shmuel I 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Shmuel Alef 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Kgs (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (heb)", () => {
		expect(p.parse("מלכים ב' 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("מלכים ב 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Melachim II 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Melakhim II 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Melachim Bais 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (heb)", () => {
		expect(p.parse("מלכים א' 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("מלכים א 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Melachim I 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Melakhim I 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Melachim Alef 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Chr (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (heb)", () => {
		expect(p.parse("דברי הימים ב' 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("דברי הימים ב 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Divrei Hayamim II 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Divrey Hayamim Bais 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (heb)", () => {
		expect(p.parse("דברי הימים א' 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("דברי הימים א 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Divrei Hayamim I 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Divrey Hayamim Alef 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (heb)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("עזרא 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (heb)", () => {
		expect(p.parse("נחמיה 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nechemiah 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nechemyah 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (heb)", () => {
		expect(p.parse("תוספות למגילת אסתר 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (heb)", () => {
		expect(p.parse("אסתר, כולל פרקים גנוזים 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("אסתר 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esther 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (heb)", () => {
		expect(p.parse("איוב 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Iyov 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (heb)", () => {
		expect(p.parse("מזמורים 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("תהילים 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Tehillim 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (heb)", () => {
		expect(p.parse("תפילת עזריה בתוך הכבשן 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("תפילת עזריה 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (heb)", () => {
		expect(p.parse("פתגמים 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("משלים 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("משלי 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Mishlei 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Mishle 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (heb)", () => {
		expect(p.parse("המקהיל 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("המרצה 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("קהלת 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kohelet 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Qoheleth 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (heb)", () => {
		expect(p.parse("שירת שלושת הנערים בכבשן 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (heb)", () => {
		expect(p.parse("שיר השירים 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("שירי שלמה 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Shir Hashirim 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Shir Ha-Shirim 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (heb)", () => {
		expect(p.parse("ירמיהו 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ירמיה 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yirmiyahu 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yirmyah 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yirmeyah 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (heb)", () => {
		expect(p.parse("יחזקאל 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Yechezqel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Yechezkel 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (heb)", () => {
		expect(p.parse("דניאל 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (heb)", () => {
		expect(p.parse("הושע 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoshea 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (heb)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("יואל 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (heb)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("עמוס 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (heb)", () => {
		expect(p.parse("עובדיה 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("עבדיה 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ovadiah 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ovadyah 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (heb)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("יונה 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yonah 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (heb)", () => {
		expect(p.parse("מיכה 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Michah 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mikhah 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Michoh 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (heb)", () => {
		expect(p.parse("נחום 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nachum 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (heb)", () => {
		expect(p.parse("חבקוק 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Chavakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Chavaqquq 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Chabakuk 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (heb)", () => {
		expect(p.parse("צפניה 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Tzefaniah 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Tzefanyah 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (heb)", () => {
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("חגי 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Chaggai 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (heb)", () => {
		expect(p.parse("זכריה 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zechariah 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zecharyah 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (heb)", () => {
		expect(p.parse("מלאכי 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malachi 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (heb)", () => {
		expect(p.parse("הבשורה הקדושה על-פי מתי 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("הבשורה על פי מתי 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("הבשורה על-פי מתי 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("הבשורה לפי מתי 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("מתי 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattityahu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (heb)", () => {
		expect(p.parse("הבשורה על פי מרקוס 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("הבשורה על-פי מרקוס 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("מרקוס 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (heb)", () => {
		expect(p.parse("הבשורה על-פי לוקאס 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("הבשורה על פי לוקס 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("הבשורה על-פי לוקס 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("לוקס 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (heb)", () => {
		expect(p.parse("אגרתו הראשונה של יוחנן השליח 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("אגרתו הראשונה של יוחנן השלי 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("איגרת יוחנן הראשונה 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("הראשונה יוחנן 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Yochanan I 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (heb)", () => {
		expect(p.parse("אגרתו השנייה של יוחנן השליח 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("איגרת יוחנן השנייה 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("השנייה יוחנן 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Yochanan II 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (heb)", () => {
		expect(p.parse("אגרתו השלישית של יוחנן השליח 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("אגרתו השלישית של יוחנן השלי 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("איגרת יוחנן השלישית 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("השלישית יוחנן 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Yochanan III 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (heb)", () => {
		expect(p.parse("הבשורה על פי יוחנן 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("הבשורה על-פי יוחנן 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("יוחנן 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yochanan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (heb)", () => {
		expect(p.parse("מעשי השליחים 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gevurot 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (heb)", () => {
		expect(p.parse("אגרת פולוס השליח אל-הרומיים 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("האיגרת אל הרומאים 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("אל הרומאים 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("אל הרומיים 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("אל הרומים 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Kehillah in Rome 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 2Cor (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (heb)", () => {
		expect(p.parse("אגרת פולוס השנייה אל-הקורנתים 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("אגרת פולוס השנייה אל-הקורינ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("האיגרת השנייה אל הקורינתים 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("השנייה אל הקורינתים 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("השנייה אל הקורנתים 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kehillah in Corinth II 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (heb)", () => {
		expect(p.parse("אגרת פולוס הראשונה אל-הקורנתים 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("אגרת פולוס הראשונה אל-הקורי 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("האיגרת הראשונה אל הקורינתים 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("הראשונה אל הקורינתים 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("הראשונה אל הקורנתים 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kehillah in Corinth I 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (heb)", () => {
		expect(p.parse("אגרת פולוס השליח אל-הגלטים 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("האיגרת אל הגלטים 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("אל הגלטים 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kehillah in Galatia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (heb)", () => {
		expect(p.parse("אגרת פולוס השליח אל האפסיים 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("אגרת פולוס השליח אל-האפסים 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("האיגרת אל האפסים 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("השליח אל האפסיים 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("אל האפסים 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Kehillah in Ephesus 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (heb)", () => {
		expect(p.parse("אגרת פולוס השליח אל-הפיליפיים 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("אגרת פולוס השליח אל-הפיליפי 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("האיגרת אל הפיליפים 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("אל הפיליפיים 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("אל הפיליפים 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Kehillah in Philippi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (heb)", () => {
		expect(p.parse("אגרת פולוס השליח אל-הקולוסים 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("אגרת פולוס השליח אל-הקולוסי 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("האיגרת אל הקולוסים 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("אל הקולוסים 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kehillah in Colossae 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 2Thess (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (heb)", () => {
		expect(p.parse("אגרת פולוס השנייה אל-התסלוניקים 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("אגרת פולוס השנייה אל-התסלונ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("האיגרת השנייה אל התסלוניקים 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("השנייה אל התסלוניקים 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("השנייה אל-התסלוניקים 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kehillah in Thessalonika II 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (heb)", () => {
		expect(p.parse("אגרת פולוס הראשונה אל-התסלוניקים 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("האיגרת הראשונה אל התסלוניקים 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("אגרת פולוס הראשונה אל-התסלו 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("הראשונה אל התסלוניקים 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kehillah in Thessalonika I 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Tim (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (heb)", () => {
		expect(p.parse("אגרת פולוס השנייה אל-טימותיוס 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("אגרת פולוס השנייה אל-טימותי 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("האיגרת השנייה אל טימותיוס 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("השנייה אל טימותיאוס 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("השנייה אל טימותיוס 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Timotiyos II 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (heb)", () => {
		expect(p.parse("אגרת פולוס הראשונה אל-טימותיוס 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("אגרת פולוס הראשונה אל-טימות 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("האיגרת הראשונה אל טימותיוס 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("הראשונה אל טימותיאוס 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("הראשונה אל טימותיוס 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Timotiyos I 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (heb)", () => {
		expect(p.parse("אגרת פולוס אל-טיטוס 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("האיגרת אל טיטוס 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("אל טיטוס 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titos 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (heb)", () => {
		expect(p.parse("אגרת פולוס אל-פילימון 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("האיגרת אל פילימון 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("אל פילימון 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philemon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (heb)", () => {
		expect(p.parse("האיגרת אל העברים 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("האיגרת אל-העברים 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("האגרת אל-העברים 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("אל העברים 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Yehudim in Moshiach 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (heb)", () => {
		expect(p.parse("איגרת יעקב 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("אגרת יעקב 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("יעקב 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaakov 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 2Pet (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (heb)", () => {
		expect(p.parse("אגרתו השנייה של פטרוס השליח 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("איגרת פטרוס השנייה 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("השנייה פטרוס 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Kefa II 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (heb)", () => {
		expect(p.parse("אגרתו הראשונה של פטרוס השליח 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("אגרתו הראשונה של פטרוס השלי 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("איגרת פטרוס הראשונה 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("הראשונה פטרוס 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kefa I 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (heb)", () => {
		expect(p.parse("איגרת יהודה 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("אגרת יהודה 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("יהודה 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yehuda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (heb)", () => {
		expect(p.parse("טוביה 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (heb)", () => {
		expect(p.parse("יהודית 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (heb)", () => {
		expect(p.parse("ספר ברוך 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("ברוך 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (heb)", () => {
		expect(p.parse("שושנה 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 2Macc (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (heb)", () => {
		expect(p.parse("ספר מקבים ב' 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("חשמונאים ב' 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("מקבים ב 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (heb)", () => {
		expect(p.parse("ספר מקבים ג' 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("חשמונאים ג' 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("מקבים ג 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (heb)", () => {
		expect(p.parse("ספר מקבים ד' 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("חשמונאים ד' 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("מקבים ד 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (heb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (heb)", () => {
		expect(p.parse("ספר מקבים א' 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("חשמונאים א' 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("מקבים א 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});

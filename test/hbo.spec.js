"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hbo.js";

describe("Localized book Gen (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (hbo)", () => {
		expect(p.parse("בראשית 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ברא' 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (hbo)", () => {
		expect(p.parse("שמות 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (hbo)", () => {
		expect(p.parse("ויקרא 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ויק' 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (hbo)", () => {
		expect(p.parse("במדבר 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("במד' 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (hbo)", () => {
		expect(p.parse("איכה 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Deut (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (hbo)", () => {
		expect(p.parse("דברים 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("דבר' 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (hbo)", () => {
		expect(p.parse("יהושע 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (hbo)", () => {
		expect(p.parse("שופטים 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("שפטים 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("שפט' 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (hbo)", () => {
		expect(p.parse("רות 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (hbo)", () => {
		expect(p.parse("ישעיה 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ישע' 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hbo)", () => {
		expect(p.parse("שמואל א 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("שמ\"א 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hbo)", () => {
		expect(p.parse("שמואל ב 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("שמ\"ב 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hbo)", () => {
		expect(p.parse("מלכים א 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("מל\"א 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hbo)", () => {
		expect(p.parse("מלכים ב 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("מל\"ב 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hbo)", () => {
		expect(p.parse("דברי הימים א 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("דהי\"א 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hbo)", () => {
		expect(p.parse("דברי הימים ב 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("דהי\"ב 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (hbo)", () => {
		expect(p.parse("עזרא 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (hbo)", () => {
		expect(p.parse("נחמיה 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("נחמ' 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (hbo)", () => {
		expect(p.parse("אסתר 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (hbo)", () => {
		expect(p.parse("איוב 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (hbo)", () => {
		expect(p.parse("תהלים 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("תהל' 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (hbo)", () => {
		expect(p.parse("משלי 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (hbo)", () => {
		expect(p.parse("קהלת 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (hbo)", () => {
		expect(p.parse("שיר השירים 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("שה\"ש 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (hbo)", () => {
		expect(p.parse("ירמיה 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ירמ' 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (hbo)", () => {
		expect(p.parse("יחזקאל 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("יחז' 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (hbo)", () => {
		expect(p.parse("דניאל 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("דנ' 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (hbo)", () => {
		expect(p.parse("הושע 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (hbo)", () => {
		expect(p.parse("יואל 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (hbo)", () => {
		expect(p.parse("עמוס 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (hbo)", () => {
		expect(p.parse("עבדיה 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("עבד' 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (hbo)", () => {
		expect(p.parse("יונה 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (hbo)", () => {
		expect(p.parse("מיכה 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (hbo)", () => {
		expect(p.parse("נחום 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (hbo)", () => {
		expect(p.parse("חבקוק 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("חבק' 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (hbo)", () => {
		expect(p.parse("צפניה 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("צפנ' 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (hbo)", () => {
		expect(p.parse("חגי 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (hbo)", () => {
		expect(p.parse("זכריה 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("זכר' 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (hbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (hbo)", () => {
		expect(p.parse("מלאכי 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("מלא' 1:1").osis()).toEqual("Mal.1.1");
	});
});

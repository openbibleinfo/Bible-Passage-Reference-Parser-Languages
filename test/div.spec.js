"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/div.js";

describe("Localized book Gen (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (div)", () => {
		expect(p.parse("ފެށުން 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (div)", () => {
		expect(p.parse("ނެރުއްވުން 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (div)", () => {
		expect(p.parse("ހާމަކޮށްދެއްވުންތަކެއް 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (div)", () => {
		expect(p.parse("ރާޢޫތު 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Sam (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (div)", () => {
		expect(p.parse("1 ޞަމޫއީލް 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (div)", () => {
		expect(p.parse("2 ޞަމޫއީލް 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book Prov (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (div)", () => {
		expect(p.parse("ހަރުބަސްތައް 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Jonah (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (div)", () => {
		expect(p.parse("ޔޫނުސް 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (div)", () => {
		expect(p.parse("މައްތާ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (div)", () => {
		expect(p.parse("މަރުކުސް 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (div)", () => {
		expect(p.parse("ލޫކާސް 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (div)", () => {
		expect(p.parse("ޔޫޙަންނާގެ ފުރަތަމަ ސިޓީ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (div)", () => {
		expect(p.parse("ޔޫޙަންނާގެ ދެވަނަ ސިޓީ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (div)", () => {
		expect(p.parse("ޔޫޙަންނާގެ ތިންވަނަ ސިޓީ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (div)", () => {
		expect(p.parse("ޔޫޙަންނާ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (div)", () => {
		expect(p.parse("މަންދޫބުންގެ މަސައްކަތް 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Col (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (div)", () => {
		expect(p.parse("ކުލޫއްސީގެ މަސީޙީންނަށް ސިޓީ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (div)", () => {
		expect(p.parse("ގަލާތިޔާގެ މަސީޙީންނަށް ސިޓީ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (div)", () => {
		expect(p.parse("އެފޭސުސްގެ މަސީޙީންނަށް ސިޓީ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (div)", () => {
		expect(p.parse("ފިލިއްޕީގެ މަސީޙީންނަށް ސިޓީ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (div)", () => {
		expect(p.parse("ތިސަލޯނިކާގެ މަސީޙީންނަށް ފުރަތަމަ ސިޓީ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (div)", () => {
		expect(p.parse("ތިސަލޯނިކާގެ މަސީޙީންނަށް ދެވަނަ ސިޓީ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (div)", () => {
		expect(p.parse("ތިމޮތީއަށް ފުރަތަމަ ސިޓީ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (div)", () => {
		expect(p.parse("ތިމޮތީއަށް ދެވަނަ ސިޓީ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (div)", () => {
		expect(p.parse("ތީތުސްއަށް ސިޓީ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (div)", () => {
		expect(p.parse("ފިލަމެންއަށް ސިޓީ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (div)", () => {
		expect(p.parse("ޢިބްރާނީންނަށް ސިޓީ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (div)", () => {
		expect(p.parse("ޔާމިޒުގެ ސިޓީ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (div)", () => {
		expect(p.parse("ޕަތަރަސްގެ ފުރަތަމަ ސިޓީ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (div)", () => {
		expect(p.parse("ޕަތަރަސްގެ ދެވަނަ ސިޓީ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (div)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (div)", () => {
		expect(p.parse("ޔަހޫ‏ޛާގެ ސިޓީ 1:1").osis()).toEqual("Jude.1.1");
	});
});

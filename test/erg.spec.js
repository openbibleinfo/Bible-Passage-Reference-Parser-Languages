"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/erg.js";

describe("Localized book Gen (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (erg)", () => {
		expect(p.parse("Kenesis 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (erg)", () => {
		expect(p.parse("Reveleson 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (erg)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Matt (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (erg)", () => {
		expect(p.parse("Matiyu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (erg)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (erg)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (erg)", () => {
		expect(p.parse("I. Yoane. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 3John (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (erg)", () => {
		expect(p.parse("III. Yoane 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 2John (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (erg)", () => {
		expect(p.parse("II. Yoane 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (erg)", () => {
		expect(p.parse("Yoane 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (erg)", () => {
		expect(p.parse("Ovun Apostol 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (erg)", () => {
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (erg)", () => {
		expect(p.parse("I. Korint 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (erg)", () => {
		expect(p.parse("II. Korint 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (erg)", () => {
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (erg)", () => {
		expect(p.parse("Kalesia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (erg)", () => {
		expect(p.parse("Efesus 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (erg)", () => {
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 2Thess (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (erg)", () => {
		expect(p.parse("2 Teselonia 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (erg)", () => {
		expect(p.parse("I. Teselonia 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (erg)", () => {
		expect(p.parse("I. Timote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (erg)", () => {
		expect(p.parse("II. Timote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (erg)", () => {
		expect(p.parse("Tītus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (erg)", () => {
		expect(p.parse("Filimon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (erg)", () => {
		expect(p.parse("Hibru 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (erg)", () => {
		expect(p.parse("Yacobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (erg)", () => {
		expect(p.parse("I. Piter 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (erg)", () => {
		expect(p.parse("II. Piter 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (erg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (erg)", () => {
		expect(p.parse("Jūd 1:1").osis()).toEqual("Jude.1.1");
	});
});

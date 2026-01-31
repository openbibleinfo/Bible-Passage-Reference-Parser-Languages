"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/num.js";

describe("Localized book Rev (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (num)", () => {
		expect(p.parse("Fakahā 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Fkhā 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (num)", () => {
		expect(p.parse("Mātiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Māt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (num)", () => {
		expect(p.parse("Ma'ake 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (num)", () => {
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (num)", () => {
		expect(p.parse("1 Sione 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Sio 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Sione 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Sio 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (num)", () => {
		expect(p.parse("2 Sione 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Sio 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Sione 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Sio 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (num)", () => {
		expect(p.parse("3 Sione 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Sio 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Sione 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Sio 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (num)", () => {
		expect(p.parse("Sione 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (num)", () => {
		expect(p.parse("Ngāue 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ngā 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (num)", () => {
		expect(p.parse("Loma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (num)", () => {
		expect(p.parse("1 Kolinitō 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kol 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolinitō 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kol 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (num)", () => {
		expect(p.parse("2 Kolinitō 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kol 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolinitō 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kol 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (num)", () => {
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (num)", () => {
		expect(p.parse("Kalētia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (num)", () => {
		expect(p.parse("'Efesō 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("'Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (num)", () => {
		expect(p.parse("Filipai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (num)", () => {
		expect(p.parse("1 Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (num)", () => {
		expect(p.parse("2 Tesalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (num)", () => {
		expect(p.parse("1 Tīmote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tīm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tīmote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tīm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (num)", () => {
		expect(p.parse("2 Tīmote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tīm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tīmote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tīm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (num)", () => {
		expect(p.parse("Taitusi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tait 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (num)", () => {
		expect(p.parse("Filimone 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filim 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (num)", () => {
		expect(p.parse("Hepelū 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hep 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (num)", () => {
		expect(p.parse("Sēmisi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Sēm 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (num)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (num)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (num)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (num)", () => {
		expect(p.parse("Siuta 1:1").osis()).toEqual("Jude.1.1");
	});
});

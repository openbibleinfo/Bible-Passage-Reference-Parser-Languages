"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/yam.js";

describe("Localized book Rev (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (yam)", () => {
		expect(p.parse("Bum Nwì à Nìtsə̀' Fa 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (yam)", () => {
		expect(p.parse("Màtiyò 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (yam)", () => {
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (yam)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (yam)", () => {
		expect(p.parse("1 Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (yam)", () => {
		expect(p.parse("2 Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (yam)", () => {
		expect(p.parse("3 Jon 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jon 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (yam)", () => {
		expect(p.parse("Jon 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (yam)", () => {
		expect(p.parse("Ŋgàa Ntum Jisòs 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (yam)", () => {
		expect(p.parse("Rumà 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (yam)", () => {
		expect(p.parse("1 Korè 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korè 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (yam)", () => {
		expect(p.parse("2 Korè 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korè 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (yam)", () => {
		expect(p.parse("Kòlosì 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (yam)", () => {
		expect(p.parse("Gàlesiyà 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (yam)", () => {
		expect(p.parse("Efesò 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (yam)", () => {
		expect(p.parse("Fìlipiyà 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (yam)", () => {
		expect(p.parse("1 Tètàlonikà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tètàlonikà 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (yam)", () => {
		expect(p.parse("2 Tètàlonikà 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tètàlonikà 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (yam)", () => {
		expect(p.parse("1 Timatì 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timatì 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (yam)", () => {
		expect(p.parse("2 Timatì 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timatì 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (yam)", () => {
		expect(p.parse("Taitòs 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (yam)", () => {
		expect(p.parse("Filimʉ̀ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (yam)", () => {
		expect(p.parse("Hibrù 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (yam)", () => {
		expect(p.parse("Jem 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (yam)", () => {
		expect(p.parse("1 Pità 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pità 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (yam)", () => {
		expect(p.parse("2 Pità 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pità 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (yam)", () => {
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (yam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (yam)", () => {
		expect(p.parse("2 PITÀ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ŋgàa Ntum Jisòs 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kòlosì 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Efesò 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Màtiyò 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("TAITÒS 1:1").osis()).toEqual("Titus.1.1");
	});
});

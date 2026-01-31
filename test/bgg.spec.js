"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bgg.js";

describe("Localized book Rev (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bgg)", () => {
		expect(p.parse("Dong 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Dng 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bgg)", () => {
		expect(p.parse("Methiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mth 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bgg)", () => {
		expect(p.parse("Marg 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrg 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bgg)", () => {
		expect(p.parse("Lug 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bgg)", () => {
		expect(p.parse("1Jon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bgg)", () => {
		expect(p.parse("2Jon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bgg)", () => {
		expect(p.parse("3 Jon 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jon 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bgg)", () => {
		expect(p.parse("1 Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bgg)", () => {
		expect(p.parse("2 Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bgg)", () => {
		expect(p.parse("Jon 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bgg)", () => {
		expect(p.parse("Bliathek 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Blk 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bgg)", () => {
		expect(p.parse("Romanthek 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bgg)", () => {
		expect(p.parse("1 Khorinthek 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Khorinthek 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bgg)", () => {
		expect(p.parse("2 Khorinthek 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Khorinthek 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bgg)", () => {
		expect(p.parse("1Khor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bgg)", () => {
		expect(p.parse("2Khor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bgg)", () => {
		expect(p.parse("Kholosithek 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Khol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bgg)", () => {
		expect(p.parse("Galathithek 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bgg)", () => {
		expect(p.parse("Iphisithek 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Iphi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bgg)", () => {
		expect(p.parse("Philiphithek 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bgg)", () => {
		expect(p.parse("1 Thesalonithek 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thesalonithek 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bgg)", () => {
		expect(p.parse("2 Thesalonithek 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thesalonithek 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bgg)", () => {
		expect(p.parse("1The 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bgg)", () => {
		expect(p.parse("2The 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bgg)", () => {
		expect(p.parse("1 Thimothi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Thimothi 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bgg)", () => {
		expect(p.parse("2 Thimothi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Thimothi 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bgg)", () => {
		expect(p.parse("1Thi 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bgg)", () => {
		expect(p.parse("2Thi 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bgg)", () => {
		expect(p.parse("Thaidas 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Thd 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bgg)", () => {
		expect(p.parse("Philimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bgg)", () => {
		expect(p.parse("Hebriuthek 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bgg)", () => {
		expect(p.parse("Jems 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jms 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bgg)", () => {
		expect(p.parse("1 Phithar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Phithar 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bgg)", () => {
		expect(p.parse("2 Phithar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Phithar 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bgg)", () => {
		expect(p.parse("1Phth 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bgg)", () => {
		expect(p.parse("2Phth 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bgg)", () => {
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

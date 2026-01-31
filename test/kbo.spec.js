"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kbo.js";

describe("Localized book Gen (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kbo)", () => {
		expect(p.parse("Íꞌdóngárá 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ido 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kbo)", () => {
		expect(p.parse("Wụ̃ngárá 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Wng 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kbo)", () => {
		expect(p.parse("Iꞌdangárá 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ida 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kbo)", () => {
		expect(p.parse("Rụ́tã 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Jonah (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kbo)", () => {
		expect(p.parse("Yónã 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kbo)", () => {
		expect(p.parse("Mãtáyo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kbo)", () => {
		expect(p.parse("Mãrákõ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kbo)", () => {
		expect(p.parse("Lúkã 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kbo)", () => {
		expect(p.parse("1Ywn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kbo)", () => {
		expect(p.parse("2Ywn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kbo)", () => {
		expect(p.parse("3 Yũwánĩ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Ywn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kbo)", () => {
		expect(p.parse("1 Yũwánĩ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yũwánĩ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kbo)", () => {
		expect(p.parse("2 Yũwánĩ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yũwánĩ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kbo)", () => {
		expect(p.parse("Yũwánĩ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ywn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kbo)", () => {
		expect(p.parse("Ẹ̃zị́ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ezi 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kbo)", () => {
		expect(p.parse("Rómã 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kbo)", () => {
		expect(p.parse("1 Kõrínítõ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kõrínítõ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kbo)", () => {
		expect(p.parse("2 Kõrínítõ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kõrínítõ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kbo)", () => {
		expect(p.parse("1Krt 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kbo)", () => {
		expect(p.parse("2Krt 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kbo)", () => {
		expect(p.parse("Kõlõsáyĩ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kls 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kbo)", () => {
		expect(p.parse("Gãlãtị́yã 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kbo)", () => {
		expect(p.parse("Ẽfésõ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efs 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kbo)", () => {
		expect(p.parse("Pị̃lị̃pọ́yị̃ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Plp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kbo)", () => {
		expect(p.parse("1 Tẽsãlõníkẽ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tẽsãlõníkẽ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kbo)", () => {
		expect(p.parse("2 Tẽsãlõníkẽ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tẽsãlõníkẽ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kbo)", () => {
		expect(p.parse("1Tsl 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kbo)", () => {
		expect(p.parse("2Tsl 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kbo)", () => {
		expect(p.parse("1 Tĩmõtéyõ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tĩmõtéyõ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kbo)", () => {
		expect(p.parse("2 Tĩmõtéyõ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tĩmõtéyõ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kbo)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kbo)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kbo)", () => {
		expect(p.parse("Tị́tọ̃ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kbo)", () => {
		expect(p.parse("Fĩlĩmónã 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kbo)", () => {
		expect(p.parse("Ẽbérẽ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kbo)", () => {
		expect(p.parse("Yõkóbũ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ybk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kbo)", () => {
		expect(p.parse("1 Pétẽró 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pétẽró 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kbo)", () => {
		expect(p.parse("2 Pétẽró 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pétẽró 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kbo)", () => {
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kbo)", () => {
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kbo)", () => {
		expect(p.parse("Yụ́dã 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});

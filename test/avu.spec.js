"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/avu.js";

describe("Localized book Rev (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (avu)", () => {
		expect(p.parse("Tã Âꞌdâ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (avu)", () => {
		expect(p.parse("Mãtáyõ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (avu)", () => {
		expect(p.parse("Márãkõ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (avu)", () => {
		expect(p.parse("Lúkạ̃ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (avu)", () => {
		expect(p.parse("1 Yõwánĩ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yõwánĩ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (avu)", () => {
		expect(p.parse("2 Yõwánĩ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yõwánĩ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (avu)", () => {
		expect(p.parse("3 Yõwánĩ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yõwánĩ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (avu)", () => {
		expect(p.parse("Yõwánĩ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (avu)", () => {
		expect(p.parse("Tã ꞌẼꞌẽ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (avu)", () => {
		expect(p.parse("Rómã lé ꞌbá 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (avu)", () => {
		expect(p.parse("1 Kõrínĩtõ lé ꞌbá 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kõrínĩtõ lé ꞌbá 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (avu)", () => {
		expect(p.parse("2 Kõrínĩtõ lé ꞌbá 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kõrínĩtõ lé ꞌbá 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (avu)", () => {
		expect(p.parse("Kõlósĩ lé ꞌbá 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (avu)", () => {
		expect(p.parse("Gãlãtíyã lé ꞌbá 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (avu)", () => {
		expect(p.parse("Ẽfésõ lé ꞌbá 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (avu)", () => {
		expect(p.parse("Fıٜ̃lıٜ́pıٜ̃ lé ꞌbá 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (avu)", () => {
		expect(p.parse("1 Tẽsãlõníkã lé ꞌbá 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tẽsãlõníkã lé ꞌbá 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (avu)", () => {
		expect(p.parse("2 Tẽsãlõníkã lé ꞌbá 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tẽsãlõníkã lé ꞌbá 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (avu)", () => {
		expect(p.parse("1 Tĩmátĩyã 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tĩmátĩyã 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (avu)", () => {
		expect(p.parse("2 Tĩmátĩyã 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tĩmátĩyã 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (avu)", () => {
		expect(p.parse("Títõ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (avu)", () => {
		expect(p.parse("Fĩlẽmónã 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (avu)", () => {
		expect(p.parse("Ị́bũrũ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (avu)", () => {
		expect(p.parse("Yãkóbã 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (avu)", () => {
		expect(p.parse("1 Pétẽrõ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pétẽrõ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (avu)", () => {
		expect(p.parse("2 Pétẽrõ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pétẽrõ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (avu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (avu)", () => {
		expect(p.parse("Yúdıٜ̃ 1:1").osis()).toEqual("Jude.1.1");
	});
});

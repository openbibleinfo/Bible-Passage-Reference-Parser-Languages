"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ncu.js";

describe("Localized book Rev (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ncu)", () => {
		expect(p.parse("Aleebo̱kaapo̱tɔ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ncu)", () => {
		expect(p.parse("Matiyo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ncu)", () => {
		expect(p.parse("Maak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ncu)", () => {
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ncu)", () => {
		expect(p.parse("1 Yohanee 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohanee 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ncu)", () => {
		expect(p.parse("2 Yohanee 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohanee 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ncu)", () => {
		expect(p.parse("3 Yohanee 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yohanee 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ncu)", () => {
		expect(p.parse("Yohanee 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ncu)", () => {
		expect(p.parse("Ayaa‑rɔ aye̱re̱po̱‑ɔ asuŋ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ayaa‑rɔ aye̱re̱po̱ asuŋ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ncu)", () => {
		expect(p.parse("Roma awuye 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ncu)", () => {
		expect(p.parse("1 Korintoo awuye 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintoo awuye 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ncu)", () => {
		expect(p.parse("2 Korintoo awuye 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintoo awuye 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ncu)", () => {
		expect(p.parse("Kolosii awuye 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ncu)", () => {
		expect(p.parse("Galatiya awuye 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ncu)", () => {
		expect(p.parse("Ifisus awuye 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ncu)", () => {
		expect(p.parse("Filipii awuye 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ncu)", () => {
		expect(p.parse("1 Tisalonikaa awuye 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tisalonikaa awuye 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ncu)", () => {
		expect(p.parse("2 Tisalonikaa awuye 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tisalonikaa awuye 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ncu)", () => {
		expect(p.parse("1 Timotii 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotii 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ncu)", () => {
		expect(p.parse("2 Timotii 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotii 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ncu)", () => {
		expect(p.parse("Tiitus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ncu)", () => {
		expect(p.parse("Filemɔŋ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ncu)", () => {
		expect(p.parse("Heebrii awuye 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ncu)", () => {
		expect(p.parse("Yakubu 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ncu)", () => {
		expect(p.parse("1 Peetroo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peetroo 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ncu)", () => {
		expect(p.parse("2 Peetroo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peetroo 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ncu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ncu)", () => {
		expect(p.parse("Yudas 1:1").osis()).toEqual("Jude.1.1");
	});
});

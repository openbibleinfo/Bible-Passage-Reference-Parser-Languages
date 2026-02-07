"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mev.js";

describe("Localized book Rev (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mev)", () => {
		expect(p.parse("Wɛ̀lɛ̀vèlésɔ̃̀ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (mev)", () => {
		expect(p.parse("Wúlúfè 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Wúlú 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Jonah (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (mev)", () => {
		expect(p.parse("Zónà 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Zó 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mev)", () => {
		expect(p.parse("Máfìù 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mev)", () => {
		expect(p.parse("Máà 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mev)", () => {
		expect(p.parse("Lúù 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mev)", () => {
		expect(p.parse("1 Zɔ̃̀ɔ̃́ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zɔ̃̀ɔ̃́ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mev)", () => {
		expect(p.parse("2 Zɔ̃̀ɔ̃́ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zɔ̃̀ɔ̃́ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mev)", () => {
		expect(p.parse("3 Zɔ̃̀ɔ̃́ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zɔ̃̀ɔ̃́ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mev)", () => {
		expect(p.parse("Zɔ̃̀ɔ̃́ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mev)", () => {
		expect(p.parse("Àpɔ́sɔ̀lɔ̀ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mev)", () => {
		expect(p.parse("Wólómà 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mev)", () => {
		expect(p.parse("1 Kɔ̀léĩ́tĩ̀ã̀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔ̀léĩ́tĩ̀ã̀ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mev)", () => {
		expect(p.parse("2 Kɔ̀léĩ́tĩ̀ã̀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔ̀léĩ́tĩ̀ã̀ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mev)", () => {
		expect(p.parse("Kɔ̀lɔ́sĩã̀ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mev)", () => {
		expect(p.parse("Gɛ̀lésìà 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mev)", () => {
		expect(p.parse("Ìfísɔ̃̀ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mev)", () => {
		expect(p.parse("Fèlépĩ̀ã̀ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mev)", () => {
		expect(p.parse("1 Tɛsàlónìà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsàlónìà 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mev)", () => {
		expect(p.parse("2 Tɛsàlónìà 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsàlónìà 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mev)", () => {
		expect(p.parse("1 Témɔ́tè 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Témɔ́tè 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mev)", () => {
		expect(p.parse("2 Témɔ́tè 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Témɔ́tè 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mev)", () => {
		expect(p.parse("Tátɔ̀ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mev)", () => {
		expect(p.parse("Fàlímà 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mev)", () => {
		expect(p.parse("Hííbúlù 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mev)", () => {
		expect(p.parse("Zĩ́ĩ̀ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mev)", () => {
		expect(p.parse("1 Pílɛ̀ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pílɛ̀ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mev)", () => {
		expect(p.parse("2 Pílɛ̀ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pílɛ̀ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mev)", () => {
		expect(p.parse("Zúdè 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (mev)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (mev)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zɔ̃̀ɔ̃́ - 3 Zɔ̃̀ɔ̃́").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zɔ̃̀ɔ̃́ – 3 Zɔ̃̀ɔ̃́").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zɔ̃̀ɔ̃́ — 3 Zɔ̃̀ɔ̃́").osis()).toEqual("1John.1-3John.1");
	});
});

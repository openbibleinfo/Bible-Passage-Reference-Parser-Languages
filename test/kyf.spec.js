"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kyf.js";

describe("Localized book Rev (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kyf)", () => {
		expect(p.parse("Zaaan 'yliwʋgbʋnya 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("'Yliwʋ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kyf)", () => {
		expect(p.parse("Matie 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kyf)", () => {
		expect(p.parse("Malɩkɩ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kyf)", () => {
		expect(p.parse("Lukɩ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kyf)", () => {
		expect(p.parse("1 Zaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Za 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Za 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kyf)", () => {
		expect(p.parse("2 Zaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Za 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Za 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kyf)", () => {
		expect(p.parse("3 Zaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Za 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Za 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kyf)", () => {
		expect(p.parse("Zaan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Zn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kyf)", () => {
		expect(p.parse("Lɛnʋgbʋnya 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Lngb 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kyf)", () => {
		expect(p.parse("Wlɔmʋ -nyɩma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Wlɔm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kyf)", () => {
		expect(p.parse("1 Kolɛntɩ -nyɩma 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kol 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolɛntɩ -nyɩma 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kol 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kyf)", () => {
		expect(p.parse("2 Kolɛntɩ -nyɩma 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kol 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolɛntɩ -nyɩma 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kol 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kyf)", () => {
		expect(p.parse("Kolɔsʋ -nyɩma 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolɔsʋ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kyf)", () => {
		expect(p.parse("-Galasii -nyɩma 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("-Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kyf)", () => {
		expect(p.parse("Efɛzɩ -nyɩma 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kyf)", () => {
		expect(p.parse("Filipʋ -nyɩma 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipʋ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kyf)", () => {
		expect(p.parse("1 Tɛsalonikɩ -nyɩma 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tɛs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsalonikɩ -nyɩma 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛs 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kyf)", () => {
		expect(p.parse("2 Tɛsalonikɩ -nyɩma 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tɛs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsalonikɩ -nyɩma 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛs 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kyf)", () => {
		expect(p.parse("1 Timotee 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotee 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kyf)", () => {
		expect(p.parse("2 Timotee 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotee 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kyf)", () => {
		expect(p.parse("Titɩ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kyf)", () => {
		expect(p.parse("Filemɔ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kyf)", () => {
		expect(p.parse("Eblenya 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eble 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kyf)", () => {
		expect(p.parse("'Zake 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kyf)", () => {
		expect(p.parse("1 Piɛlɩ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piɛlɩ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kyf)", () => {
		expect(p.parse("2 Piɛlɩ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piɛlɩ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kyf)", () => {
		expect(p.parse("Zudɩ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (kyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (kyf)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zaan - 3 Zaan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zaan – 3 Zaan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zaan — 3 Zaan").osis()).toEqual("1John.1-3John.1");
	});
});

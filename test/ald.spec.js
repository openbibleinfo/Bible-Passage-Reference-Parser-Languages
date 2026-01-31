"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ald.js";

describe("Localized book Rev (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ald)", () => {
		expect(p.parse("Ɔwɔ-mɛ̀n-yrikàn 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ald)", () => {
		expect(p.parse("Matie 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ald)", () => {
		expect(p.parse("Markɛ̀n 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ald)", () => {
		expect(p.parse("Lükɛ̀n 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ald)", () => {
		expect(p.parse("1 Zhan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zhan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ald)", () => {
		expect(p.parse("2 Zhan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zhan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ald)", () => {
		expect(p.parse("3 Zhan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zhan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ald)", () => {
		expect(p.parse("Zhan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ald)", () => {
		expect(p.parse("Ɔkɔ̀hɔ̀n-wá-bɔ̀ kɔ̀hɔ̀n hán 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ald)", () => {
		expect(p.parse("Rɔmɛ̀n-anmàn-bɔ̀ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ald)", () => {
		expect(p.parse("1 Korɛntɛ̀n anmàn-bɔ̀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korɛntɛ̀n anmàn-bɔ̀ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ald)", () => {
		expect(p.parse("2 Korɛntɛ̀n anmàn-bɔ̀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korɛntɛ̀n anmàn-bɔ̀ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ald)", () => {
		expect(p.parse("Kɔlɔsèn anmàn-bɔ̀ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ald)", () => {
		expect(p.parse("Galasi anmàn-bɔ̀ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ald)", () => {
		expect(p.parse("Efɛzɛ̀n anmàn-bɔ̀ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ald)", () => {
		expect(p.parse("Filipɛ̀n anmàn-bɔ̀ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ald)", () => {
		expect(p.parse("1 Tesalonikɛ̀n anmàn-bɔ̀ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonikɛ̀n anmàn-bɔ̀ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ald)", () => {
		expect(p.parse("2 Tesalonikɛ̀n anmàn-bɔ̀ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonikɛ̀n anmàn-bɔ̀ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ald)", () => {
		expect(p.parse("Kpàkpà timote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ald)", () => {
		expect(p.parse("Anhyrɛmɛ̀n timote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ald)", () => {
		expect(p.parse("Titɛ̀n 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ald)", () => {
		expect(p.parse("Filemɔn 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ald)", () => {
		expect(p.parse("Ebre-bɔ̀ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ald)", () => {
		expect(p.parse("Zhakɛ̀n 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ald)", () => {
		expect(p.parse("1 Piɛrɛ̀n 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piɛrɛ̀n 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ald)", () => {
		expect(p.parse("2 Piɛrɛ̀n 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piɛrɛ̀n 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ald)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ald)", () => {
		expect(p.parse("Zhüdɛ̀n 1:1").osis()).toEqual("Jude.1.1");
	});
});

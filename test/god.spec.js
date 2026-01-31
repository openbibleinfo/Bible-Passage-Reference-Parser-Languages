"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/god.js";

describe("Localized book Rev (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (god)", () => {
		expect(p.parse("'Yii Ghlä‑wälɩ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ghlä 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (god)", () => {
		expect(p.parse("Matie 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (god)", () => {
		expect(p.parse("Makö 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (god)", () => {
		expect(p.parse("Lukö 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (god)", () => {
		expect(p.parse("1 Zään 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zään 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (god)", () => {
		expect(p.parse("2 Zään 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zään 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (god)", () => {
		expect(p.parse("3 Zään 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zään 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (god)", () => {
		expect(p.parse("Zään 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (god)", () => {
		expect(p.parse("Nʋnʋgbɩɩ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Nʋnʋ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (god)", () => {
		expect(p.parse("Wlɔmʋ‑dunyʋä 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Wlɔmʋ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (god)", () => {
		expect(p.parse("1 Kolɛtɩ‑dunyʋä 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kolɛ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolɛtɩ‑dunyʋä 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolɛ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (god)", () => {
		expect(p.parse("2 Kolɛtɩ‑dunyʋä 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kolɛ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolɛtɩ‑dunyʋä 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolɛ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (god)", () => {
		expect(p.parse("Kolɔsʋ‑dunyʋä 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolɔ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (god)", () => {
		expect(p.parse("Galatɩnyʋä 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gala 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (god)", () => {
		expect(p.parse("Efɛzɩ‑dunyʋä 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (god)", () => {
		expect(p.parse("Filipʋ‑dunyʋä 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fili 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (god)", () => {
		expect(p.parse("1 Tesalonikö‑dunyʋä 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonikö‑dunyʋä 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (god)", () => {
		expect(p.parse("2 Tesalonikö‑dunyʋä 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonikö‑dunyʋä 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesa 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (god)", () => {
		expect(p.parse("1 Timotee 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotee 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (god)", () => {
		expect(p.parse("2 Timotee 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotee 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (god)", () => {
		expect(p.parse("Titö 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (god)", () => {
		expect(p.parse("Filemɔɔ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (god)", () => {
		expect(p.parse("Eblëënyʋä 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eblëë 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (god)", () => {
		expect(p.parse("Zakö 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (god)", () => {
		expect(p.parse("1 Pɩɛlö 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pɩɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pɩɛlö 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pɩɛ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (god)", () => {
		expect(p.parse("2 Pɩɛlö 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pɩɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pɩɛlö 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pɩɛ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (god)", () => {
		expect(p.parse("Zudö 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (god)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (god)", () => {
		expect(p.parse("1 Kolɛtɩ‑dunyʋä 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Zään 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Pɩɛlö 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Tesalonikö‑dunyʋä 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("2 Kolɛtɩ‑dunyʋä 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Zään 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Pɩɛlö 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Tesalonikö‑dunyʋä 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("3 Zään 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Kolɔsʋ‑dunyʋä 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Efɛzɩ‑dunyʋä 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Galatɩnyʋä 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Eblëënyʋä 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eblëë 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Zakö 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zään 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Zudö 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Lukö 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Makö 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Filipʋ‑dunyʋä 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("'Yii Ghlä‑wälɩ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ghlä 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Wlɔmʋ‑dunyʋä 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Titö 1:1").osis()).toEqual("Titus.1.1");
	});
});

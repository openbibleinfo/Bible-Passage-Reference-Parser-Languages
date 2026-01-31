"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ybb.js";

describe("Localized book Rev (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ybb)", () => {
		expect(p.parse("Menjʉɔ te lí 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mtl 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ybb)", () => {
		expect(p.parse("Matío 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ybb)", () => {
		expect(p.parse("Málkúsi 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mlk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ybb)", () => {
		expect(p.parse("Lúkási 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lúk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ybb)", () => {
		expect(p.parse("1Jŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ybb)", () => {
		expect(p.parse("2Jŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ybb)", () => {
		expect(p.parse("3 Jáaŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jŋ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ybb)", () => {
		expect(p.parse("1 Jáaŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jáaŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ybb)", () => {
		expect(p.parse("2 Jáaŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jáaŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ybb)", () => {
		expect(p.parse("Jáaŋ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jáŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ybb)", () => {
		expect(p.parse("Mefaʼ Meziŋ-ntō 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("MeM 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ybb)", () => {
		expect(p.parse("Lomɛŋ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lóm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ybb)", () => {
		expect(p.parse("1 Kɔlɛŋte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔlɛŋte 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ybb)", () => {
		expect(p.parse("2 Kɔlɛŋte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔlɛŋte 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ybb)", () => {
		expect(p.parse("1Kl 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ybb)", () => {
		expect(p.parse("2Kl 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ybb)", () => {
		expect(p.parse("Kɔlɔs 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kɔl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ybb)", () => {
		expect(p.parse("Galat 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ybb)", () => {
		expect(p.parse("Efɛze 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ybb)", () => {
		expect(p.parse("Fílíip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ybb)", () => {
		expect(p.parse("1 Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ybb)", () => {
		expect(p.parse("2 Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ybb)", () => {
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ybb)", () => {
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ybb)", () => {
		expect(p.parse("1 Timotɛ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotɛ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ybb)", () => {
		expect(p.parse("2 Timotɛ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotɛ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ybb)", () => {
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ybb)", () => {
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ybb)", () => {
		expect(p.parse("Tíit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tít 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ybb)", () => {
		expect(p.parse("Filemɔŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ybb)", () => {
		expect(p.parse("Eble 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebl 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ybb)", () => {
		expect(p.parse("Jáak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ják 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ybb)", () => {
		expect(p.parse("1 Piɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piɛ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ybb)", () => {
		expect(p.parse("2 Piɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piɛ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ybb)", () => {
		expect(p.parse("1Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ybb)", () => {
		expect(p.parse("2Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ybb)", () => {
		expect(p.parse("Zwide 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Zde 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (ybb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (ybb)", () => {
		expect(p.parse("1 Jáaŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("2 Jáaŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("3 Jáaŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Mefaʼ Meziŋ-ntō 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Jáak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ják 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jáaŋ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jáŋ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Lúkási 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lúk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Málkúsi 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Matío 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Fílíip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Menjʉɔ te lí 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Lóm 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Tíit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tít 1:1").osis()).toEqual("Titus.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/niy.js";

describe("Localized book Rev (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (niy)", () => {
		expect(p.parse("Upfòta 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Upf 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (niy)", () => {
		expect(p.parse("Màtayò 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Màt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (niy)", () => {
		expect(p.parse("Mǎrkɔ̀ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (niy)", () => {
		expect(p.parse("Lukà 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (niy)", () => {
		expect(p.parse("1Yù 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (niy)", () => {
		expect(p.parse("2Yù 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (niy)", () => {
		expect(p.parse("3 Yùwanɨ̀ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yù 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (niy)", () => {
		expect(p.parse("1 Yùwanɨ̀ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yùwanɨ̀ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (niy)", () => {
		expect(p.parse("2 Yùwanɨ̀ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yùwanɨ̀ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (niy)", () => {
		expect(p.parse("Yùwanɨ̀ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yùw 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (niy)", () => {
		expect(p.parse("Kasʉ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kas 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (niy)", () => {
		expect(p.parse("Pbàrɔmà 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rɔm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (niy)", () => {
		expect(p.parse("1 Pbàkòritò 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Pbàkòritò 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (niy)", () => {
		expect(p.parse("2 Pbàkòritò 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Pbàkòritò 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (niy)", () => {
		expect(p.parse("1Kò 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (niy)", () => {
		expect(p.parse("2Kò 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (niy)", () => {
		expect(p.parse("Kɔ̀lɔ̀sayì 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kɔ̀l 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (niy)", () => {
		expect(p.parse("Gàlàtiyà 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gàl 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (niy)", () => {
		expect(p.parse("Ɛ̀fɛsɔ̀ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛ̀fɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (niy)", () => {
		expect(p.parse("Fìlipì 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fìl 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (niy)", () => {
		expect(p.parse("1 Tɛ̀sàlɔ̀nɨkà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛ̀sàlɔ̀nɨkà 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (niy)", () => {
		expect(p.parse("2 Tɛ̀sàlɔ̀nɨkà 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛ̀sàlɔ̀nɨkà 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (niy)", () => {
		expect(p.parse("1Tɛ̀ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (niy)", () => {
		expect(p.parse("2Tɛ̀ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (niy)", () => {
		expect(p.parse("1 Tìmɔ̀tɛwʉ̀ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tìmɔ̀tɛwʉ̀ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (niy)", () => {
		expect(p.parse("2 Tìmɔ̀tɛwʉ̀ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tìmɔ̀tɛwʉ̀ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (niy)", () => {
		expect(p.parse("1Tì 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (niy)", () => {
		expect(p.parse("2Tì 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (niy)", () => {
		expect(p.parse("Titò 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (niy)", () => {
		expect(p.parse("Fìlìmonì 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (niy)", () => {
		expect(p.parse("Pbàɛ̀brànɨyà 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ɛ̀br 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (niy)", () => {
		expect(p.parse("Yàkɔbhɔ̀ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yàk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (niy)", () => {
		expect(p.parse("1 Pɛ́tɛrʉ̀ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pɛ́tɛrʉ̀ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (niy)", () => {
		expect(p.parse("2 Pɛ́tɛrʉ̀ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pɛ́tɛrʉ̀ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (niy)", () => {
		expect(p.parse("1Pɛ́ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (niy)", () => {
		expect(p.parse("2Pɛ́ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (niy)", () => {
		expect(p.parse("Yudhà 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (niy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (niy)", () => {
		expect(p.parse("Mǎrkɔ̀ 1:1").osis()).toEqual("Mark.1.1");
	});
});

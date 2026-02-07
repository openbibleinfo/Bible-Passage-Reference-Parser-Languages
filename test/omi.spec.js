"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/omi.js";

describe("Localized book Gen (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (omi)", () => {
		expect(p.parse("Edhozà 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Edh 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (omi)", () => {
		expect(p.parse("Tà Adhazà 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Adh 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (omi)", () => {
		expect(p.parse("Màtáyò 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Màt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (omi)", () => {
		expect(p.parse("Márɨ́kò 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Már 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (omi)", () => {
		expect(p.parse("Lúkà 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lúk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (omi)", () => {
		expect(p.parse("1Yò 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (omi)", () => {
		expect(p.parse("2Yò 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (omi)", () => {
		expect(p.parse("3 Yòwánɨ̀ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yò 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (omi)", () => {
		expect(p.parse("1 Yòwánɨ̀ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yòwánɨ̀ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (omi)", () => {
		expect(p.parse("2 Yòwánɨ̀ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yòwánɨ̀ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (omi)", () => {
		expect(p.parse("Yòwánɨ̀ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yòw 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (omi)", () => {
		expect(p.parse("Àdzɨyo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Àdz 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (omi)", () => {
		expect(p.parse("Rómà 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Róm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (omi)", () => {
		expect(p.parse("1 Kòrɨ̀nɨ́tò 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kòrɨ̀nɨ́tò 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (omi)", () => {
		expect(p.parse("2 Kòrɨ̀nɨ́tò 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kòrɨ̀nɨ́tò 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (omi)", () => {
		expect(p.parse("1Kò 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (omi)", () => {
		expect(p.parse("2Kò 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (omi)", () => {
		expect(p.parse("Kòlòsáyɨ̀ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kòl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (omi)", () => {
		expect(p.parse("Gàlàtɨ́yà 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gàl 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (omi)", () => {
		expect(p.parse("Èfésò 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Èfé 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (omi)", () => {
		expect(p.parse("Fìlìpóyì 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fìl 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (omi)", () => {
		expect(p.parse("1 Tèsàlònɨ́kè 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tèsàlònɨ́kè 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (omi)", () => {
		expect(p.parse("2 Tèsàlònɨ́kè 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tèsàlònɨ́kè 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (omi)", () => {
		expect(p.parse("1Tè 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (omi)", () => {
		expect(p.parse("2Tè 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (omi)", () => {
		expect(p.parse("1 Tɨ̀mòtɨ́yò 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tɨ̀mòtɨ́yò 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (omi)", () => {
		expect(p.parse("2 Tɨ̀mòtɨ́yò 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tɨ̀mòtɨ́yò 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (omi)", () => {
		expect(p.parse("1Tɨ̀ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (omi)", () => {
		expect(p.parse("2Tɨ̀ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (omi)", () => {
		expect(p.parse("Títò 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tít 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (omi)", () => {
		expect(p.parse("Fɨ̀lɨ̀mó 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (omi)", () => {
		expect(p.parse("Èbérè 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Èbé 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (omi)", () => {
		expect(p.parse("Yàkóbò 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yàk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (omi)", () => {
		expect(p.parse("1 Pétòró 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pétòró 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (omi)", () => {
		expect(p.parse("2 Pétòró 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pétòró 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (omi)", () => {
		expect(p.parse("1Pé 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (omi)", () => {
		expect(p.parse("2Pé 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (omi)", () => {
		expect(p.parse("Yúdà 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yúd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (omi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (omi)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yò - 3 Yòwánɨ̀").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yò – 3 Yòwánɨ̀").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yò — 3 Yòwánɨ̀").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ife.js";

describe("Localized book Rev (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ife)", () => {
		expect(p.parse("Ànyàŋà 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Àny 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ife)", () => {
		expect(p.parse("Màtéwò 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Màt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ife)", () => {
		expect(p.parse("Mákò 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mák 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ife)", () => {
		expect(p.parse("Lúkà 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lúk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ife)", () => {
		expect(p.parse("1Yò 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ife)", () => {
		expect(p.parse("2Yò 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ife)", () => {
		expect(p.parse("3 Yòhánà 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yò 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ife)", () => {
		expect(p.parse("1 Yòhánà 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yòhánà 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ife)", () => {
		expect(p.parse("2 Yòhánà 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yòhánà 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ife)", () => {
		expect(p.parse("Yòhánà 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yòh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ife)", () => {
		expect(p.parse("Itsɛ́ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Its 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ife)", () => {
		expect(p.parse("Rómà ŋa 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Róm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ife)", () => {
		expect(p.parse("1 Kòríntì ŋa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kòríntì ŋa 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ife)", () => {
		expect(p.parse("2 Kòríntì ŋa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kòríntì ŋa 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ife)", () => {
		expect(p.parse("1Kò 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ife)", () => {
		expect(p.parse("2Kò 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ife)", () => {
		expect(p.parse("Kòlósì ŋa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kòl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ife)", () => {
		expect(p.parse("Gàlátì ŋa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gàl 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ife)", () => {
		expect(p.parse("Èfɛ́sì ŋa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Èfɛ́ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ife)", () => {
		expect(p.parse("Fìlíkpò ŋa 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fìl 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ife)", () => {
		expect(p.parse("1 Tɛ̀sàlòníkì ŋa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛ̀sàlòníkì ŋa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ife)", () => {
		expect(p.parse("2 Tɛ̀sàlòníkì ŋa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛ̀sàlòníkì ŋa 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ife)", () => {
		expect(p.parse("1Tɛ̀ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ife)", () => {
		expect(p.parse("2Tɛ̀ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ife)", () => {
		expect(p.parse("1 Tìmɔ̀té 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tìmɔ̀té 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ife)", () => {
		expect(p.parse("2 Tìmɔ̀té 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tìmɔ̀té 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ife)", () => {
		expect(p.parse("1Tì 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ife)", () => {
		expect(p.parse("2Tì 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ife)", () => {
		expect(p.parse("Títò 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tít 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ife)", () => {
		expect(p.parse("Fìlèmɔ́nì 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ife)", () => {
		expect(p.parse("Hèbérù ŋa 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hèb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ife)", () => {
		expect(p.parse("Yàkúbù 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yàk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ife)", () => {
		expect(p.parse("1 Òkúta 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Òkúta 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ife)", () => {
		expect(p.parse("2 Òkúta 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Òkúta 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ife)", () => {
		expect(p.parse("1Òk 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ife)", () => {
		expect(p.parse("2Òk 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ife)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ife)", () => {
		expect(p.parse("Yúɖà 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yúɖ 1:1").osis()).toEqual("Jude.1.1");
	});
});

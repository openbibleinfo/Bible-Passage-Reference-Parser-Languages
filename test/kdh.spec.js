"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kdh.js";

describe("Localized book Gen (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kdh)", () => {
		expect(p.parse("Bɩgabaazɩya 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Bɩg 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kdh)", () => {
		expect(p.parse("Kɩwɩlʊʊ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kɩw 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kdh)", () => {
		expect(p.parse("Maatéwu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kdh)", () => {
		expect(p.parse("Maárɩkɩ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kdh)", () => {
		expect(p.parse("Lúka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lúk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kdh)", () => {
		expect(p.parse("1Yʊ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kdh)", () => {
		expect(p.parse("2Yʊ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kdh)", () => {
		expect(p.parse("3 Yʊháánɩ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yʊ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kdh)", () => {
		expect(p.parse("1 Yʊháánɩ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yʊháánɩ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kdh)", () => {
		expect(p.parse("2 Yʊháánɩ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yʊháánɩ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kdh)", () => {
		expect(p.parse("Yʊháánɩ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yʊh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kdh)", () => {
		expect(p.parse("Tɩndɩnáa-dɛ́ɛ Tɩmɛ́ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tɩm 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kdh)", () => {
		expect(p.parse("Róóma ńba 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Róm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kdh)", () => {
		expect(p.parse("1 Korɩ́ntɩ ńba 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korɩ́ntɩ ńba 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kdh)", () => {
		expect(p.parse("2 Korɩ́ntɩ ńba 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korɩ́ntɩ ńba 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kdh)", () => {
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kdh)", () => {
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kdh)", () => {
		expect(p.parse("Kolɔ́ɔsɩ ńba 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kdh)", () => {
		expect(p.parse("Galasíi ńba 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kdh)", () => {
		expect(p.parse("Efɛ́ɛzɩ ńba 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kdh)", () => {
		expect(p.parse("Filíipu ńba 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kdh)", () => {
		expect(p.parse("1 Tesaloníiki ńba 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloníiki ńba 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kdh)", () => {
		expect(p.parse("2 Tesaloníiki ńba 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloníiki ńba 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kdh)", () => {
		expect(p.parse("1Ts 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kdh)", () => {
		expect(p.parse("2Ts 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kdh)", () => {
		expect(p.parse("1 Timotée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotée 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kdh)", () => {
		expect(p.parse("2 Timotée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotée 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kdh)", () => {
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kdh)", () => {
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kdh)", () => {
		expect(p.parse("Tíiti 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tít 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kdh)", () => {
		expect(p.parse("Filemɔ́n 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kdh)", () => {
		expect(p.parse("Éburu ńba 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ébr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kdh)", () => {
		expect(p.parse("Yaakúbu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kdh)", () => {
		expect(p.parse("1 Pétro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pétro 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kdh)", () => {
		expect(p.parse("2 Pétro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pétro 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kdh)", () => {
		expect(p.parse("1Pé 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kdh)", () => {
		expect(p.parse("2Pé 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kdh)", () => {
		expect(p.parse("Yúudi 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yúd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (kdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (kdh)", () => {
		expect(p.parse("1 Korɩ́ntɩ ńba 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Yʊháánɩ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Pétro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pé 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Tesaloníiki ńba 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Timotée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("2 Korɩ́ntɩ ńba 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Yʊháánɩ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Pétro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pé 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Tesaloníiki ńba 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Timotée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("3 Yʊháánɩ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tɩndɩnáa-dɛ́ɛ Tɩmɛ́ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kolɔ́ɔsɩ ńba 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Efɛ́ɛzɩ ńba 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Galasíi ńba 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Éburu ńba 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ébr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Yaakúbu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yʊháánɩ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yúudi 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yúd 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Lúka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lúk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Maárɩkɩ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maatéwu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Filíipu ńba 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Róóma ńba 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Róm 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Tíiti 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tít 1:1").osis()).toEqual("Titus.1.1");
	});
});

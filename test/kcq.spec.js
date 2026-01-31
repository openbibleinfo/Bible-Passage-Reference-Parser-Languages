"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kcq.js";

describe("Localized book Rev (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kcq)", () => {
		expect(p.parse("Tu̱u̱ Yu̱wani̱ Nkuwode 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tyn 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kcq)", () => {
		expect(p.parse("Mati̱ya 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kcq)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kcq)", () => {
		expect(p.parse("Lukka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kcq)", () => {
		expect(p.parse("1Yu̱w 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kcq)", () => {
		expect(p.parse("2Yu̱w 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kcq)", () => {
		expect(p.parse("3 Yu̱wani̱ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yu̱w 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kcq)", () => {
		expect(p.parse("1 Yu̱wani̱ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yu̱wani̱ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kcq)", () => {
		expect(p.parse("2 Yu̱wani̱ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yu̱wani̱ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kcq)", () => {
		expect(p.parse("Yu̱wani̱ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yu̱w 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kcq)", () => {
		expect(p.parse("Naki̱n 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Nak 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kcq)", () => {
		expect(p.parse("Nu̱ba Ro̱ma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Nro̱m 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kcq)", () => {
		expect(p.parse("1 Nu̱ba Korintiya 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Nu̱ba Korintiya 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kcq)", () => {
		expect(p.parse("2 Nu̱ba Korintiya 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Nu̱ba Korintiya 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kcq)", () => {
		expect(p.parse("1Nkor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kcq)", () => {
		expect(p.parse("2Nkor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kcq)", () => {
		expect(p.parse("Nu̱ba Kolossiya 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Nkol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kcq)", () => {
		expect(p.parse("Nu̱ba Kalati̱ya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Nkal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kcq)", () => {
		expect(p.parse("Nu̱ba Afi̱sa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Nafi̱ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kcq)", () => {
		expect(p.parse("Nu̱ba Fi̱li̱bbi̱ya 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Nfi̱l 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kcq)", () => {
		expect(p.parse("1 Nu̱ba Tassalo̱ni̱ka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Nu̱ba Tassalo̱ni̱ka 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kcq)", () => {
		expect(p.parse("2 Nu̱ba Tassalo̱ni̱ka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Nu̱ba Tassalo̱ni̱ka 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kcq)", () => {
		expect(p.parse("1Ntas 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kcq)", () => {
		expect(p.parse("2Ntas 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kcq)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kcq)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kcq)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kcq)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kcq)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kcq)", () => {
		expect(p.parse("Fi̱lmo̱n 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fi̱ln 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kcq)", () => {
		expect(p.parse("Nu̱ba Yi̱braani̱ya 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Nyi̱b 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kcq)", () => {
		expect(p.parse("Yakuba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kcq)", () => {
		expect(p.parse("1 Biturus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Biturus 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kcq)", () => {
		expect(p.parse("2 Biturus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Biturus 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kcq)", () => {
		expect(p.parse("1Bit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kcq)", () => {
		expect(p.parse("2Bit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kcq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kcq)", () => {
		expect(p.parse("Yawuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yaw 1:1").osis()).toEqual("Jude.1.1");
	});
});

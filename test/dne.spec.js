"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dne.js";

describe("Localized book Rev (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dne)", () => {
		expect(p.parse("Uloto 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ulot 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dne)", () => {
		expect(p.parse("Matei 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mate 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dne)", () => {
		expect(p.parse("Maluku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Malu 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dne)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dne)", () => {
		expect(p.parse("1Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yoha 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dne)", () => {
		expect(p.parse("2Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yoha 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dne)", () => {
		expect(p.parse("3Yohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoha 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dne)", () => {
		expect(p.parse("Yohane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoha 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dne)", () => {
		expect(p.parse("Mahengo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mahe 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dne)", () => {
		expect(p.parse("Akalome 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Akal 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dne)", () => {
		expect(p.parse("1Akakolintu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Koli 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dne)", () => {
		expect(p.parse("2Akakolintu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Koli 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dne)", () => {
		expect(p.parse("Akakolochahe 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("aKol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dne)", () => {
		expect(p.parse("Akagalatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Aghala 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dne)", () => {
		expect(p.parse("Epecho 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("epec 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dne)", () => {
		expect(p.parse("Filipu 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fili 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dne)", () => {
		expect(p.parse("1Akatecholonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Akate 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dne)", () => {
		expect(p.parse("2Akatecholonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Akate 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dne)", () => {
		expect(p.parse("1Temocheyo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Temo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dne)", () => {
		expect(p.parse("2Temocheyo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Temo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dne)", () => {
		expect(p.parse("Teto 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tet 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dne)", () => {
		expect(p.parse("Filemone 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dne)", () => {
		expect(p.parse("Akaebulaniya 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Akae 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dne)", () => {
		expect(p.parse("Yakobu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dne)", () => {
		expect(p.parse("1Petile 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dne)", () => {
		expect(p.parse("2Petile 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dne)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dne)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});

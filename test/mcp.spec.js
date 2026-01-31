"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mcp.js";

describe("Localized book Rev (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mcp)", () => {
		expect(p.parse("Mbʉ́gʉ́lú 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mbʉ́ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mcp)", () => {
		expect(p.parse("Matiyô 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mcp)", () => {
		expect(p.parse("Márkus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mcp)", () => {
		expect(p.parse("Lúkas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mcp)", () => {
		expect(p.parse("1Yn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mcp)", () => {
		expect(p.parse("2Yn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mcp)", () => {
		expect(p.parse("3 Yuánɛs 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mcp)", () => {
		expect(p.parse("1 Yuánɛs 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuánɛs 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mcp)", () => {
		expect(p.parse("2 Yuánɛs 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuánɛs 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mcp)", () => {
		expect(p.parse("Yuánɛs 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuá 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mcp)", () => {
		expect(p.parse("Misɔ́ɔ́lʉ́gʉ́ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mis 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mcp)", () => {
		expect(p.parse("Buud ɔ́ Róma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mcp)", () => {
		expect(p.parse("1 Buud ɔ́ Kɔrɛ̂nt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Buud ɔ́ Kɔrɛ̂nt 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mcp)", () => {
		expect(p.parse("2 Buud ɔ́ Kɔrɛ̂nt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Buud ɔ́ Kɔrɛ̂nt 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mcp)", () => {
		expect(p.parse("1Kr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mcp)", () => {
		expect(p.parse("2Kr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mcp)", () => {
		expect(p.parse("Buud ɔ́ Kolósia 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mcp)", () => {
		expect(p.parse("Buud ɔ́ Galátia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mcp)", () => {
		expect(p.parse("Buud ɔ́ Ifɛ̂z 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ifz 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mcp)", () => {
		expect(p.parse("Buud ɔ́ Filipî 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mcp)", () => {
		expect(p.parse("1 Buud ɔ́ Tesaloníka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Buud ɔ́ Tesaloníka 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mcp)", () => {
		expect(p.parse("2 Buud ɔ́ Tesaloníka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Buud ɔ́ Tesaloníka 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mcp)", () => {
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mcp)", () => {
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mcp)", () => {
		expect(p.parse("1 Timotê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotê 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mcp)", () => {
		expect(p.parse("2 Timotê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotê 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mcp)", () => {
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mcp)", () => {
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mcp)", () => {
		expect(p.parse("Títus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mcp)", () => {
		expect(p.parse("Fʉlmɔ̂ŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mcp)", () => {
		expect(p.parse("Wəhebʉrə̂ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mcp)", () => {
		expect(p.parse("Zhâk 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zhk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mcp)", () => {
		expect(p.parse("1 Pyɛ̂r 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pyɛ̂r 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mcp)", () => {
		expect(p.parse("2 Pyɛ̂r 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pyɛ̂r 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mcp)", () => {
		expect(p.parse("1Pr 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mcp)", () => {
		expect(p.parse("2Pr 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mcp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mcp)", () => {
		expect(p.parse("Yûdə 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yûd 1:1").osis()).toEqual("Jude.1.1");
	});
});

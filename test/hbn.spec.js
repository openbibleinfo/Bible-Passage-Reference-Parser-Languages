"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hbn.js";

describe("Localized book Rev (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (hbn)", () => {
		expect(p.parse("Ruuya 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (hbn)", () => {
		expect(p.parse("Matta 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (hbn)", () => {
		expect(p.parse("Margus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marg 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (hbn)", () => {
		expect(p.parse("Luuga 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hbn)", () => {
		expect(p.parse("1 Yuuẖanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yuuẖ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuuẖanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuuẖ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hbn)", () => {
		expect(p.parse("2 Yuuẖanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yuuẖ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuuẖanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuuẖ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hbn)", () => {
		expect(p.parse("3 Yuuẖanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yuuẖ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yuuẖanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yuuẖ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hbn)", () => {
		expect(p.parse("Yuuẖanna 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuuẖ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (hbn)", () => {
		expect(p.parse("Aⲁmaal Ar Rusul 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Aⲁm 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (hbn)", () => {
		expect(p.parse("Ruumiya 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ruum 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hbn)", () => {
		expect(p.parse("1 Kuur 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kuur 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hbn)", () => {
		expect(p.parse("I Kuurinthuus 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hbn)", () => {
		expect(p.parse("2 Kuurinthuus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kuur 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kuurinthuus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kuur 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (hbn)", () => {
		expect(p.parse("Kuuluussi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kuul 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (hbn)", () => {
		expect(p.parse("Qalaaṯiiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Qal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (hbn)", () => {
		expect(p.parse("Afasus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Afas 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (hbn)", () => {
		expect(p.parse("Fiilibbi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fiilib 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hbn)", () => {
		expect(p.parse("1 Tasaaluuniika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tas 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tasaaluuniika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tas 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hbn)", () => {
		expect(p.parse("2 Tasaaluuniika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tas 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tasaaluuniika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tas 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hbn)", () => {
		expect(p.parse("1 Tiimuuthaawus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tiimuuthaawus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hbn)", () => {
		expect(p.parse("2 Tiimuuthaawus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tiimuuthaawus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (hbn)", () => {
		expect(p.parse("Tiiṯus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (hbn)", () => {
		expect(p.parse("Filiimuun 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filiim 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (hbn)", () => {
		expect(p.parse("Ⲁibraaniyiin 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ⲁib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (hbn)", () => {
		expect(p.parse("Yaⲁguub 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaⲁg 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hbn)", () => {
		expect(p.parse("1 Buṯrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Buṯr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Buṯrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Buṯr 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hbn)", () => {
		expect(p.parse("2 Buṯrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Buṯr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Buṯrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Buṯr 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (hbn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (hbn)", () => {
		expect(p.parse("Yahuuṯẖa 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yah 1:1").osis()).toEqual("Jude.1.1");
	});
});

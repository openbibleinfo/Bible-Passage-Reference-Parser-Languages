"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tsw.js";

describe("Localized book Rev (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tsw)", () => {
		expect(p.parse("Wen. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Wenu 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tsw)", () => {
		expect(p.parse("Matta 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tsw)", () => {
		expect(p.parse("Marku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tsw)", () => {
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tsw)", () => {
		expect(p.parse("1 Yahaya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yah. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yahaya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yah. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tsw)", () => {
		expect(p.parse("2 Yahaya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yah. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yahaya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yah. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tsw)", () => {
		expect(p.parse("3 Yahaya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yah. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yahaya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yah. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tsw)", () => {
		expect(p.parse("Yahaya 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yah. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tsw)", () => {
		expect(p.parse("Ajiya 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ajy. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tsw)", () => {
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tsw)", () => {
		expect(p.parse("1 Korinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tsw)", () => {
		expect(p.parse("2 Korinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tsw)", () => {
		expect(p.parse("Kolosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tsw)", () => {
		expect(p.parse("Galatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tsw)", () => {
		expect(p.parse("Afisu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Afi. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tsw)", () => {
		expect(p.parse("Filibi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tsw)", () => {
		expect(p.parse("1 Tasalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tas. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tasalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tas. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tsw)", () => {
		expect(p.parse("2 Tasalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tas. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tasalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tas. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tsw)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tsw)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tsw)", () => {
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tsw)", () => {
		expect(p.parse("Filimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tsw)", () => {
		expect(p.parse("Mmaci ma Ibrahim 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("M.Ib. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tsw)", () => {
		expect(p.parse("Yakubu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tsw)", () => {
		expect(p.parse("1 Bituru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Bit. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bituru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bit. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tsw)", () => {
		expect(p.parse("2 Bituru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Bit. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bituru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bit. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tsw)", () => {
		expect(p.parse("Yahuza 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yhz. 1:1").osis()).toEqual("Jude.1.1");
	});
});

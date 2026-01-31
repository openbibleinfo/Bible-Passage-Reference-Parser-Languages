"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bsc.js";

describe("Localized book Gen (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bsc)", () => {
		expect(p.parse("Añanar 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Añr 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bsc)", () => {
		expect(p.parse("Andoɗakel 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Adk 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bsc)", () => {
		expect(p.parse("Maco 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mac 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bsc)", () => {
		expect(p.parse("Marëk 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bsc)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bsc)", () => {
		expect(p.parse("1Ŝa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bsc)", () => {
		expect(p.parse("2Ŝa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bsc)", () => {
		expect(p.parse("3 Ŝaŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Ŝa 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bsc)", () => {
		expect(p.parse("1 Ŝaŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ŝaŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bsc)", () => {
		expect(p.parse("2 Ŝaŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ŝaŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bsc)", () => {
		expect(p.parse("Ŝaŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bsc)", () => {
		expect(p.parse("Ɓandixa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ɓan 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bsc)", () => {
		expect(p.parse("Ɓërom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ɓrm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bsc)", () => {
		expect(p.parse("1 Ɓëkoreŋët 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ɓëkoreŋët 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bsc)", () => {
		expect(p.parse("2 Ɓëkoreŋët 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ɓëkoreŋët 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bsc)", () => {
		expect(p.parse("1Ɓk 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bsc)", () => {
		expect(p.parse("2Ɓk 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bsc)", () => {
		expect(p.parse("Ɓëkolos 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ɓks 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bsc)", () => {
		expect(p.parse("Ɓëgalat 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ɓgt 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bsc)", () => {
		expect(p.parse("Ɓëhefes 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɓfs 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bsc)", () => {
		expect(p.parse("Ɓëfilip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ɓfp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bsc)", () => {
		expect(p.parse("1 Ɓëtesalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ɓëtesalonik 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bsc)", () => {
		expect(p.parse("2 Ɓëtesalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ɓëtesalonik 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bsc)", () => {
		expect(p.parse("1Ɓt 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bsc)", () => {
		expect(p.parse("2Ɓt 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bsc)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bsc)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bsc)", () => {
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bsc)", () => {
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bsc)", () => {
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bsc)", () => {
		expect(p.parse("Filemoŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bsc)", () => {
		expect(p.parse("Ɓëŝëwif 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ɓŝf 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bsc)", () => {
		expect(p.parse("Ŝak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bsc)", () => {
		expect(p.parse("1 Piyer 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piyer 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bsc)", () => {
		expect(p.parse("2 Piyer 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piyer 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bsc)", () => {
		expect(p.parse("1Py 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bsc)", () => {
		expect(p.parse("2Py 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bsc)", () => {
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (bsc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (bsc)", () => {
		expect(p.parse("1Ŝa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("2Ŝa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("3Ŝa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Añr 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ɓŝf 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ŝaŋ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ɓëfilip 1:1").osis()).toEqual("Phil.1.1");
	});
});

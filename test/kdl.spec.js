"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kdl.js";

describe("Localized book Rev (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kdl)", () => {
		expect(p.parse("Kuwene 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kuw. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kdl)", () => {
		expect(p.parse("Matiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kdl)", () => {
		expect(p.parse("Marku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kdl)", () => {
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kdl)", () => {
		expect(p.parse("1 Yahaya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yah. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yahaya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yah. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kdl)", () => {
		expect(p.parse("2 Yahaya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yah. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yahaya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yah. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kdl)", () => {
		expect(p.parse("3 Yahaya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yah. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yahaya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yah. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kdl)", () => {
		expect(p.parse("Yahaya 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yah. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kdl)", () => {
		expect(p.parse("Asuki 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ask. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kdl)", () => {
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kdl)", () => {
		expect(p.parse("1 Korintiya 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintiya 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kdl)", () => {
		expect(p.parse("2 Korintiya 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintiya 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kdl)", () => {
		expect(p.parse("Kolosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kdl)", () => {
		expect(p.parse("Galatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kdl)", () => {
		expect(p.parse("Afisu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Afi. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kdl)", () => {
		expect(p.parse("Filibi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flb. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kdl)", () => {
		expect(p.parse("1 Tasaloniya 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tas. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tasaloniya 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tas. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kdl)", () => {
		expect(p.parse("2 Tasaloniya 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tas. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tasaloniya 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tas. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kdl)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kdl)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kdl)", () => {
		expect(p.parse("Taitu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tai. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kdl)", () => {
		expect(p.parse("Filimo 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kdl)", () => {
		expect(p.parse("Kagali ka Ibirahi 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("K.Ib. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kdl)", () => {
		expect(p.parse("Yakubu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kdl)", () => {
		expect(p.parse("1 Bituru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Bit. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bituru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bit. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kdl)", () => {
		expect(p.parse("2 Bituru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Bit. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bituru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bit. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kdl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kdl)", () => {
		expect(p.parse("Yahuza 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yhz. 1:1").osis()).toEqual("Jude.1.1");
	});
});

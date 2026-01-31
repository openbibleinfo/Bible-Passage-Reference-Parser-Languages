"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ssx.js";

describe("Localized book Gen (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ssx)", () => {
		expect(p.parse("Kini Pieke 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ssx)", () => {
		expect(p.parse("Peneme Yaeyekeeki 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ssx)", () => {
		expect(p.parse("Ma꞉tiu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ssx)", () => {
		expect(p.parse("Maka 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ssx)", () => {
		expect(p.parse("Luku 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ssx)", () => {
		expect(p.parse("1 Dioni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Dioni 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ssx)", () => {
		expect(p.parse("2 Dioni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Dioni 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ssx)", () => {
		expect(p.parse("3 Dioni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Dioni 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ssx)", () => {
		expect(p.parse("Dioni 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ssx)", () => {
		expect(p.parse("Aposolo 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ssx)", () => {
		expect(p.parse("Loma꞉ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ssx)", () => {
		expect(p.parse("1 Kotindi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kotindi 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ssx)", () => {
		expect(p.parse("2 Kotindi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kotindi 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ssx)", () => {
		expect(p.parse("Kolosi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ssx)", () => {
		expect(p.parse("Ka꞉leisia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ssx)", () => {
		expect(p.parse("Epesese 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ssx)", () => {
		expect(p.parse("Pilipai 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ssx)", () => {
		expect(p.parse("1 Desalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Desalonaika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ssx)", () => {
		expect(p.parse("2 Desalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Desalonaika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ssx)", () => {
		expect(p.parse("1 Timodi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timodi 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ssx)", () => {
		expect(p.parse("2 Timodi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timodi 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ssx)", () => {
		expect(p.parse("Taitasi 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ssx)", () => {
		expect(p.parse("Pailimono 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ssx)", () => {
		expect(p.parse("Hibulu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ssx)", () => {
		expect(p.parse("Dia꞉mesi 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ssx)", () => {
		expect(p.parse("1 Pida 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pida 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ssx)", () => {
		expect(p.parse("2 Pida 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pida 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ssx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ssx)", () => {
		expect(p.parse("Diudi 1:1").osis()).toEqual("Jude.1.1");
	});
});

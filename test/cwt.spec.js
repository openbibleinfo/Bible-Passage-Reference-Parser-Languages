"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/cwt.js";

describe("Localized book Rev (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (cwt)", () => {
		expect(p.parse("Kafeeñal ku 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (cwt)", () => {
		expect(p.parse("Májiye 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (cwt)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (cwt)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (cwt)", () => {
		expect(p.parse("1 Saaŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Saaŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (cwt)", () => {
		expect(p.parse("2 Saaŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Saaŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (cwt)", () => {
		expect(p.parse("3 Saaŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Saaŋ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (cwt)", () => {
		expect(p.parse("Saaŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (cwt)", () => {
		expect(p.parse("Epotor i 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (cwt)", () => {
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (cwt)", () => {
		expect(p.parse("1 Korent 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korent 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (cwt)", () => {
		expect(p.parse("2 Korent 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korent 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (cwt)", () => {
		expect(p.parse("Kolos 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (cwt)", () => {
		expect(p.parse("Galasi 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (cwt)", () => {
		expect(p.parse("Efees 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (cwt)", () => {
		expect(p.parse("Fílip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (cwt)", () => {
		expect(p.parse("1 Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (cwt)", () => {
		expect(p.parse("2 Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (cwt)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (cwt)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (cwt)", () => {
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (cwt)", () => {
		expect(p.parse("Filemoŋ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (cwt)", () => {
		expect(p.parse("Esuwif i 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (cwt)", () => {
		expect(p.parse("Saak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (cwt)", () => {
		expect(p.parse("1 Piyeer 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piyeer 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (cwt)", () => {
		expect(p.parse("2 Piyeer 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piyeer 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (cwt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (cwt)", () => {
		expect(p.parse("Sud 1:1").osis()).toEqual("Jude.1.1");
	});
});

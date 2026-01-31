"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sig.js";

describe("Localized book Rev (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sig)", () => {
		expect(p.parse("Wɩlɩɩdagɩya 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sig)", () => {
		expect(p.parse("Matiwu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sig)", () => {
		expect(p.parse("Maakɩ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sig)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sig)", () => {
		expect(p.parse("1 Gyɔɔŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Gyɔɔŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sig)", () => {
		expect(p.parse("2 Gyɔɔŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Gyɔɔŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sig)", () => {
		expect(p.parse("3 Gyɔɔŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Gyɔɔŋ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sig)", () => {
		expect(p.parse("Gyɔɔŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sig)", () => {
		expect(p.parse("Yesu Kpambɩsɩ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kpambɩsɩ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sig)", () => {
		expect(p.parse("Roma Tɩmma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sig)", () => {
		expect(p.parse("1 Koriŋti Tɩmma 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Koriŋti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koriŋti Tɩmma 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koriŋti 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sig)", () => {
		expect(p.parse("2 Koriŋti Tɩmma 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Koriŋti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koriŋti Tɩmma 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koriŋti 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sig)", () => {
		expect(p.parse("Kolosi Tɩmma 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sig)", () => {
		expect(p.parse("Galetiya Tɩmma 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galetiya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sig)", () => {
		expect(p.parse("Ɛfiso Tɩmma 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛfiso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sig)", () => {
		expect(p.parse("Filipi Tɩmma 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sig)", () => {
		expect(p.parse("1 Tesaloniika Tɩmma 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloniika Tɩmma 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sig)", () => {
		expect(p.parse("2 Tesaloniika Tɩmma 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloniika Tɩmma 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sig)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sig)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sig)", () => {
		expect(p.parse("Titusi 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sig)", () => {
		expect(p.parse("Filemɔŋ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sig)", () => {
		expect(p.parse("Hiiburu Tɩmma 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sig)", () => {
		expect(p.parse("Gyemsi 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sig)", () => {
		expect(p.parse("1 Piita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sig)", () => {
		expect(p.parse("2 Piita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sig)", () => {
		expect(p.parse("Gyuudi 1:1").osis()).toEqual("Jude.1.1");
	});
});

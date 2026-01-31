"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kno.js";

describe("Localized book Rev (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kno)", () => {
		expect(p.parse("Ko Ɔ Nundenɛ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kno)", () => {
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kno)", () => {
		expect(p.parse("Maki 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kno)", () => {
		expect(p.parse("Duku 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kno)", () => {
		expect(p.parse("1 Chɔn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Chɔn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Gboo Chɔn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Gboo. Chɔn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kno)", () => {
		expect(p.parse("2 Chɔn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Chɔn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Gboo Chɔn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Gboo. Chɔn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kno)", () => {
		expect(p.parse("3 Chɔn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Chɔn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kno)", () => {
		expect(p.parse("Chɔn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kno)", () => {
		expect(p.parse("Chisɔsi 'a Sɔ Mɔɛ Nu 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kno)", () => {
		expect(p.parse("Gboo Domi Ko A 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Domi 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 2Cor (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kno)", () => {
		expect(p.parse("2 Fean Bɔɛ Kɔyindi Ko A 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kɔyindi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Fean Bɔɛ Kɔyindi Ko A 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔyindi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Gboo Fean Bɔɛ Kɔyindi Ko A 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Gboo Kɔyindi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Gboo. Fean Bɔɛ Kɔyindi Ko A 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Gboo. Kɔyindi 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kno)", () => {
		expect(p.parse("1 Saa Kɔyindi Ko A 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kɔyindi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Saa Kɔyindi Ko A 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔyindi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Gboo Saa Kɔyindi Ko A 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Gboo Kɔyindi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Gboo. Saa Kɔyindi Ko A 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Gboo. Kɔyindi 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Col (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kno)", () => {
		expect(p.parse("Gboo Kɔdɔsai Ko A 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kɔdɔsai 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kno)", () => {
		expect(p.parse("Gboo Kadesia Ko A 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kadesia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kno)", () => {
		expect(p.parse("Gboo Ɛfisɔsi Ko A 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛfisɔsi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kno)", () => {
		expect(p.parse("Gboo Fiipai Ko A 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fiipai 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 2Thess (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kno)", () => {
		expect(p.parse("2 Fean Bɔɛ Tɛsadonika Ko A 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tɛsadonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Fean Bɔɛ Tɛsadonika Ko A 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsadonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Gboo Fean Bɔɛ Tɛsadonika Ko A 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Gboo Tɛsadonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Gboo. Fean Bɔɛ Tɛsadonika Ko A 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Gboo. Tɛsadonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kno)", () => {
		expect(p.parse("1 Saa Tɛsadonika Ko A 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tɛsadonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Saa Tɛsadonika Ko A 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsadonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Gboo Saa Tɛsadonika Ko A 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Gboo Tɛsadonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Gboo. Saa Tɛsadonika Ko A 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Gboo. Tɛsadonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kno)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Gboo Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Gboo. Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kno)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Gboo Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Gboo. Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kno)", () => {
		expect(p.parse("Taitɔsi 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kno)", () => {
		expect(p.parse("Fidemɔn 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kno)", () => {
		expect(p.parse("Gboo Ibu Mɔɛ N Ko A 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kno)", () => {
		expect(p.parse("Chimisi 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kno)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Gboo Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Gboo. Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kno)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Gboo Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Gboo. Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kno)", () => {
		expect(p.parse("Chuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/biv.js";

describe("Localized book Rev (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (biv)", () => {
		expect(p.parse("Yelwiilsɩ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (biv)", () => {
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (biv)", () => {
		expect(p.parse("Maakɩ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (biv)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (biv)", () => {
		expect(p.parse("1 Jɔɔn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jɔɔn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (biv)", () => {
		expect(p.parse("2 Jɔɔn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jɔɔn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (biv)", () => {
		expect(p.parse("3 Jɔɔn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jɔɔn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (biv)", () => {
		expect(p.parse("Jɔɔn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (biv)", () => {
		expect(p.parse("A Tʊ̃mɔ̃ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tʊ̃mɔ̃ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (biv)", () => {
		expect(p.parse("Worom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (biv)", () => {
		expect(p.parse("1 Korɩntɩ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korɩntɩ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (biv)", () => {
		expect(p.parse("2 Korɩntɩ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korɩntɩ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (biv)", () => {
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (biv)", () => {
		expect(p.parse("Galatiya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (biv)", () => {
		expect(p.parse("Efesus 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (biv)", () => {
		expect(p.parse("Filipai 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (biv)", () => {
		expect(p.parse("1 Tɛsalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (biv)", () => {
		expect(p.parse("2 Tɛsalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (biv)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (biv)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (biv)", () => {
		expect(p.parse("Titusɩ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (biv)", () => {
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (biv)", () => {
		expect(p.parse("Heburu Gãn 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heburu Gãn 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (biv)", () => {
		expect(p.parse("Jemesɩ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (biv)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (biv)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (biv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (biv)", () => {
		expect(p.parse("Judɩ 1:1").osis()).toEqual("Jude.1.1");
	});
});

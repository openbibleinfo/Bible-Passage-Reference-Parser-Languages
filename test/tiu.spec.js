"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tiu.js";

describe("Localized book Rev (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tiu)", () => {
		expect(p.parse("Paltiing 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pal. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tiu)", () => {
		expect(p.parse("Matyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tiu)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tiu)", () => {
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tiu)", () => {
		expect(p.parse("1 Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Juan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tiu)", () => {
		expect(p.parse("2 Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Juan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tiu)", () => {
		expect(p.parse("3 Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Juan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tiu)", () => {
		expect(p.parse("Juan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tiu)", () => {
		expect(p.parse("Aramid 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ara. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tiu)", () => {
		expect(p.parse("Rum. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ruma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tiu)", () => {
		expect(p.parse("1 Kurintu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kur. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kurintu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kur. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tiu)", () => {
		expect(p.parse("2 Kurintu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kur. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kurintu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kur. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tiu)", () => {
		expect(p.parse("Kulusas 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kul. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tiu)", () => {
		expect(p.parse("Galasiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tiu)", () => {
		expect(p.parse("E̍pe̍su 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("E̍pe̍. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tiu)", () => {
		expect(p.parse("Pilipus 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tiu)", () => {
		expect(p.parse("1 Te̍salunika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Te̍s. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te̍salunika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te̍s. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tiu)", () => {
		expect(p.parse("2 Te̍salunika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Te̍s. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te̍salunika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te̍s. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tiu)", () => {
		expect(p.parse("1 Timutyu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timutyu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tiu)", () => {
		expect(p.parse("2 Timutyu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timutyu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tiu)", () => {
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tiu)", () => {
		expect(p.parse("Pilimun 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pilim. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tiu)", () => {
		expect(p.parse("He̍briyu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("He̍b. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tiu)", () => {
		expect(p.parse("Santiyagu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("San. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tiu)", () => {
		expect(p.parse("1 Pe̍dru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pe̍d. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pe̍dru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pe̍d. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tiu)", () => {
		expect(p.parse("2 Pe̍dru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pe̍d. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pe̍dru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pe̍d. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tiu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tiu)", () => {
		expect(p.parse("Hudas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Hud. 1:1").osis()).toEqual("Jude.1.1");
	});
});

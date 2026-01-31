"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mic.js";

describe("Localized book Rev (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mic)", () => {
		expect(p.parse("Ugtejgewe'l 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mic)", () => {
		expect(p.parse("Matiw 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mic)", () => {
		expect(p.parse("Malg 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mic)", () => {
		expect(p.parse("Lu'g 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mic)", () => {
		expect(p.parse("1 Sa'n 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Sa'n 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mic)", () => {
		expect(p.parse("2 Sa'n 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Sa'n 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mic)", () => {
		expect(p.parse("3 Sa'n 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Sa'n 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mic)", () => {
		expect(p.parse("Sa'n 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mic)", () => {
		expect(p.parse("Paqalaiwaqann 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mic)", () => {
		expect(p.parse("Lo'mewaq 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mic)", () => {
		expect(p.parse("1 Golintewaq 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Golintewaq 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mic)", () => {
		expect(p.parse("2 Golintewaq 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Golintewaq 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mic)", () => {
		expect(p.parse("Golosiewaq 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mic)", () => {
		expect(p.parse("Galetiaewaq 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mic)", () => {
		expect(p.parse("Epesusewaq 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mic)", () => {
		expect(p.parse("Pilippiewaq 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mic)", () => {
		expect(p.parse("1 Tessaloniaewaq 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessaloniaewaq 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mic)", () => {
		expect(p.parse("2 Tessaloniaewaq 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessaloniaewaq 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mic)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mic)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mic)", () => {
		expect(p.parse("Taitus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mic)", () => {
		expect(p.parse("Piliman 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mic)", () => {
		expect(p.parse("Gisi Mgnaji Mimajuinu'g 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mic)", () => {
		expect(p.parse("Ji'mej 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mic)", () => {
		expect(p.parse("1 Pie'l 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pie'l 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mic)", () => {
		expect(p.parse("2 Pie'l 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pie'l 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mic)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mic)", () => {
		expect(p.parse("Ju't 1:1").osis()).toEqual("Jude.1.1");
	});
});

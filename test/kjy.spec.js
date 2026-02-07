"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kjy.js";

describe("Localized book Rev (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kjy)", () => {
		expect(p.parse("Penameyaya ei 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kjy)", () => {
		expect(p.parse("Madiu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kjy)", () => {
		expect(p.parse("Maka 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kjy)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kjy)", () => {
		expect(p.parse("1 Dioni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Dioni 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kjy)", () => {
		expect(p.parse("2 Dioni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Dioni 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kjy)", () => {
		expect(p.parse("3 Dioni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Dioni 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kjy)", () => {
		expect(p.parse("Dioni 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kjy)", () => {
		expect(p.parse("Aposolo 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kjy)", () => {
		expect(p.parse("Romo 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kjy)", () => {
		expect(p.parse("1 Korindi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korindi 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kjy)", () => {
		expect(p.parse("2 Korindi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korindi 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kjy)", () => {
		expect(p.parse("Kolosi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kjy)", () => {
		expect(p.parse("Galaesia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kjy)", () => {
		expect(p.parse("Epesusi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kjy)", () => {
		expect(p.parse("Pilipai 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kjy)", () => {
		expect(p.parse("1 Desalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Desalonaika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kjy)", () => {
		expect(p.parse("2 Desalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Desalonaika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kjy)", () => {
		expect(p.parse("1 Dimodi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Dimodi 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kjy)", () => {
		expect(p.parse("2 Dimodi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Dimodi 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kjy)", () => {
		expect(p.parse("Daidasi 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kjy)", () => {
		expect(p.parse("Pailimoni 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kjy)", () => {
		expect(p.parse("Iburu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kjy)", () => {
		expect(p.parse("Dieimusi 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kjy)", () => {
		expect(p.parse("1 Pida 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pida 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kjy)", () => {
		expect(p.parse("2 Pida 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pida 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kjy)", () => {
		expect(p.parse("Diudi 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (kjy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (kjy)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Dioni - 3 Dioni").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Dioni – 3 Dioni").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Dioni — 3 Dioni").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lmd.js";

describe("Localized book Rev (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lmd)", () => {
		expect(p.parse("Thitto 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lmd)", () => {
		expect(p.parse("Maththa 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lmd)", () => {
		expect(p.parse("Markkoc 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lmd)", () => {
		expect(p.parse("Lukka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lmd)", () => {
		expect(p.parse("1 Iuanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Iuanna 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lmd)", () => {
		expect(p.parse("2 Iuanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Iuanna 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lmd)", () => {
		expect(p.parse("3 Iuanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Iuanna 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lmd)", () => {
		expect(p.parse("Iuanna 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lmd)", () => {
		expect(p.parse("Ngre 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lmd)", () => {
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lmd)", () => {
		expect(p.parse("1 Kurunthuc 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kurunthuc 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lmd)", () => {
		expect(p.parse("2 Kurunthuc 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kurunthuc 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lmd)", () => {
		expect(p.parse("Kulucci 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lmd)", () => {
		expect(p.parse("Kalaththia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lmd)", () => {
		expect(p.parse("Apuccuc 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lmd)", () => {
		expect(p.parse("Pilippi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lmd)", () => {
		expect(p.parse("1 Thocculunukkia 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thocculunukkia 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lmd)", () => {
		expect(p.parse("2 Thocculunukkia 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thocculunukkia 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lmd)", () => {
		expect(p.parse("Atham iaine ul woThocculunukkia 1 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lmd)", () => {
		expect(p.parse("1 Thimiththaoc 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Thimiththaoc 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lmd)", () => {
		expect(p.parse("2 Thimiththaoc 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Thimiththaoc 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lmd)", () => {
		expect(p.parse("Thiththoc 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lmd)", () => {
		expect(p.parse("Pelemun 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lmd)", () => {
		expect(p.parse("Ipranin 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lmd)", () => {
		expect(p.parse("Iakup 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lmd)", () => {
		expect(p.parse("1 Poththuruc 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Poththuruc 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lmd)", () => {
		expect(p.parse("2 Poththuruc 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Poththuruc 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lmd)", () => {
		expect(p.parse("Ioutha 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (lmd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (lmd)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Iuanna - 3 Iuanna").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Iuanna – 3 Iuanna").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Iuanna — 3 Iuanna").osis()).toEqual("1John.1-3John.1");
	});
});

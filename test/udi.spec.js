"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/udi.js";

describe("Localized book Gen (udi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (udi)", () => {
		expect(p.parse("Burqesun 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Burq. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (udi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (udi)", () => {
		expect(p.parse("C'eysun 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("C'eys. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Num (udi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (udi)", () => {
		expect(p.parse("Ams'i oç̌ala 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ams'i oç̌. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Ps (udi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (udi)", () => {
		expect(p.parse("Ǐvel mə̌ğurxo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ǐvel mə̌ğ. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (udi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (udi)", () => {
		expect(p.parse("Məsəloox 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Məs. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Jonah (udi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (udi)", () => {
		expect(p.parse("İon. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("İona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (udi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (udi)", () => {
		expect(p.parse("Mat'fey 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat'. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (udi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (udi)", () => {
		expect(p.parse("Mrk'. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (udi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (udi)", () => {
		expect(p.parse("Luk'. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk'a 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (udi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (udi)", () => {
		expect(p.parse("1 İoan. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 İoan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (udi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (udi)", () => {
		expect(p.parse("2 İoan. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 İoan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (udi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (udi)", () => {
		expect(p.parse("3 İoan. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 İoan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. İoan. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. İoan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (udi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (udi)", () => {
		expect(p.parse("İoan. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("İoan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (udi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (udi)", () => {
		expect(p.parse("Ap'ost'olxo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ap'ost'. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Heb (udi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (udi)", () => {
		expect(p.parse("Əbraniğo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Əbr. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (udi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (udi)", () => {
		expect(p.parse("İak'ov 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("İak'. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Parser helper should handle book ranges (udi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (udi)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 İoan. - 3 İoan.").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 İoan. – 3 İoan.").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 İoan. — 3 İoan.").osis()).toEqual("1John.1-3John.1");
	});
});

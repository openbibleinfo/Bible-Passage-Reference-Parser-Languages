"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/zmb.js";

describe("Localized book Mark (zmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (zmb)", () => {
		expect(p.parse("Malikɔ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mali 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (zmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (zmb)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (zmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (zmb)", () => {
		expect(p.parse("1 Yɔana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yɔa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yɔana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yɔa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (zmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (zmb)", () => {
		expect(p.parse("2 Yɔana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yɔa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yɔana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yɔa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (zmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (zmb)", () => {
		expect(p.parse("3 Yɔana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yɔa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yɔana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yɔa 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book Gal (zmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (zmb)", () => {
		expect(p.parse("Bakalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (zmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (zmb)", () => {
		expect(p.parse("Baɛfɛsɔ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛfɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (zmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (zmb)", () => {
		expect(p.parse("Bafilipɔ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Tim (zmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (zmb)", () => {
		expect(p.parse("1 Timɔtɛɔ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timɔtɛɔ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (zmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (zmb)", () => {
		expect(p.parse("2 Timɔtɛɔ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timɔtɛɔ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Phlm (zmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (zmb)", () => {
		expect(p.parse("Filɛmɔ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filɛ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book 1Pet (zmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (zmb)", () => {
		expect(p.parse("1 Pɛtɛlɔ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pɛt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pɛtɛlɔ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pɛt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (zmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (zmb)", () => {
		expect(p.parse("2 Pɛtɛlɔ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pɛt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pɛtɛlɔ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pɛt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Parser helper should handle book ranges (zmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (zmb)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yɔana - 3 Yɔana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yɔana – 3 Yɔana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yɔana — 3 Yɔana").osis()).toEqual("1John.1-3John.1");
	});
});

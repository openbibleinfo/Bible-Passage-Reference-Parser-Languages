"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/etr.js";

describe("Localized book Ruth (etr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (etr)", () => {
		expect(p.parse("Uludi 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Matt (etr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (etr)", () => {
		expect(p.parse("Madiu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book 1John (etr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (etr)", () => {
		expect(p.parse("Age Yone 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Age. Yone 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (etr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (etr)", () => {
		expect(p.parse("Agedu Yone 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Agedu. Yone 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (etr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (etr)", () => {
		expect(p.parse("Osoda Yone 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Osoda. Yone 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (etr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (etr)", () => {
		expect(p.parse("Yone 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (etr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (etr)", () => {
		expect(p.parse("Abosolo 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Col (etr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (etr)", () => {
		expect(p.parse("Golosi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (etr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (etr)", () => {
		expect(p.parse("Age Desalonaiga 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Age. Desalonaiga 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (etr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (etr)", () => {
		expect(p.parse("Agedu Desalonaiga 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Agedu. Desalonaiga 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (etr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (etr)", () => {
		expect(p.parse("Age Dimodi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Age. Dimodi 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (etr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (etr)", () => {
		expect(p.parse("Agedu Dimodi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Agedu. Dimodi 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (etr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (etr)", () => {
		expect(p.parse("Daidasa 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (etr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (etr)", () => {
		expect(p.parse("Filimono 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Jas (etr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (etr)", () => {
		expect(p.parse("Yamese 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book Jude (etr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (etr)", () => {
		expect(p.parse("Yudi 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (etr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (etr)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Age Yone - Osoda Yone").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Age Yone – Osoda Yone").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Age Yone — Osoda Yone").osis()).toEqual("1John.1-3John.1");
	});
});

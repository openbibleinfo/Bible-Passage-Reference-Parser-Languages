"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gvn.js";

describe("Localized book Gen (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (gvn)", () => {
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (gvn)", () => {
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gvn)", () => {
		expect(p.parse("Kaban Revelation 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (gvn)", () => {
		expect(p.parse("Deuteronomy 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Judg (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (gvn)", () => {
		expect(p.parse("Judges 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (gvn)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (gvn)", () => {
		expect(p.parse("Isaiah 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (gvn)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Kaban Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Kaban. Samuel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (gvn)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Kaban Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Kaban. Samuel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (gvn)", () => {
		expect(p.parse("1 Kings 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kings 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Kaban Kings 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Kaban. Kings 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (gvn)", () => {
		expect(p.parse("2 Kings 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kings 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Kaban Kings 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Kaban. Kings 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book Ezra (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (gvn)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (gvn)", () => {
		expect(p.parse("Nehemiah 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (gvn)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Jer (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (gvn)", () => {
		expect(p.parse("Jeremiah 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Dan (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (gvn)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (gvn)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (gvn)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (gvn)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Jonah (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (gvn)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Hag (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (gvn)", () => {
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Mal (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (gvn)", () => {
		expect(p.parse("Malachi 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gvn)", () => {
		expect(p.parse("Kaban Matthewmu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gvn)", () => {
		expect(p.parse("Kaban Markamu 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gvn)", () => {
		expect(p.parse("Kaban Lukeumu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gvn)", () => {
		expect(p.parse("1 1 Johnumu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. 1 Johnumu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kaban 1 Johnumu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kaban. 1 Johnumu 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gvn)", () => {
		expect(p.parse("2 2 Johnumu 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. 2 Johnumu 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Kaban 2 Johnumu 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Kaban. 2 Johnumu 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gvn)", () => {
		expect(p.parse("Kaban 3 Johnumu 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gvn)", () => {
		expect(p.parse("Kaban Johnumu 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gvn)", () => {
		expect(p.parse("Kaban Acts 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gvn)", () => {
		expect(p.parse("Kaban Roman-warranda 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gvn)", () => {
		expect(p.parse("1 1 Corinthian-warranda 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. 1 Corinthian-warranda 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kaban 1 Corinthian-warranda 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kaban. 1 Corinthian-warranda 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gvn)", () => {
		expect(p.parse("2 2 Corinthian-warranda 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. 2 Corinthian-warranda 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kaban 2 Corinthian-warranda 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kaban. 2 Corinthian-warranda 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gvn)", () => {
		expect(p.parse("Kaban Colossian-warranda 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gvn)", () => {
		expect(p.parse("Kaban Galatian-warranda 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gvn)", () => {
		expect(p.parse("Kaban Ephesian-warranda 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gvn)", () => {
		expect(p.parse("Kaban Philippian-warranda 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gvn)", () => {
		expect(p.parse("1 1 Thessalonian-warranda 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. 1 Thessalonian-warranda 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kaban 1 Thessalonian-warranda 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kaban. 1 Thessalonian-warranda 1 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gvn)", () => {
		expect(p.parse("2 2 Thessalonian-warranda 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. 2 Thessalonian-warranda 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kaban 2 Thessalonian-warranda 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kaban. 2 Thessalonian-warranda 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gvn)", () => {
		expect(p.parse("1 1 Timothynda 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. 1 Timothynda 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kaban 1 Timothynda 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kaban. 1 Timothynda 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gvn)", () => {
		expect(p.parse("2 2 Timothynda 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. 2 Timothynda 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kaban 2 Timothynda 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kaban. 2 Timothynda 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gvn)", () => {
		expect(p.parse("Kaban Titusanda 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gvn)", () => {
		expect(p.parse("Kaban Philemonanda 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gvn)", () => {
		expect(p.parse("Kaban Hebrew-warranda 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gvn)", () => {
		expect(p.parse("Kaban Jamesamu 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gvn)", () => {
		expect(p.parse("1 1 Petermu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. 1 Petermu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kaban 1 Petermu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kaban. 1 Petermu 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gvn)", () => {
		expect(p.parse("2 2 Petermu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. 2 Petermu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Kaban 2 Petermu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Kaban. 2 Petermu 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gvn)", () => {
		expect(p.parse("Kaban Judeumu 1:1").osis()).toEqual("Jude.1.1");
	});
});

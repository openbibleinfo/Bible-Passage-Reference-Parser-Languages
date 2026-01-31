"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mgp.js";

describe("Localized book Matt (mgp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mgp)", () => {
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mgp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mgp)", () => {
		expect(p.parse("मर्कूस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्‌क 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mgp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mgp)", () => {
		expect(p.parse("लुका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mgp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mgp)", () => {
		expect(p.parse("१ युहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ युह 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युह 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mgp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mgp)", () => {
		expect(p.parse("२ युहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ युह 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युह 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mgp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mgp)", () => {
		expect(p.parse("३ युहन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३ युह 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. युहन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. युह 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mgp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mgp)", () => {
		expect(p.parse("युहन्‍ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("युहन 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mgp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mgp)", () => {
		expect(p.parse("प्रेरित 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रे 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book 1Thess (mgp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mgp)", () => {
		expect(p.parse("१ ठेसलोनीकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ ठेस 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. ठेसलोनीकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. ठेस 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mgp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mgp)", () => {
		expect(p.parse("२ ठेसलोनीकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ ठेस 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. ठेसलोनीकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. ठेस 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mgp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mgp)", () => {
		expect(p.parse("१ टीमोठी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ टी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. टीमोठी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. टी 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mgp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mgp)", () => {
		expect(p.parse("२ टीमोठी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ टी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. टीमोठी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. टी 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mgp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mgp)", () => {
		expect(p.parse("टीटस 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Jas (mgp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mgp)", () => {
		expect(p.parse("याकुब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकु 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mgp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mgp)", () => {
		expect(p.parse("१ पट्‍रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पट् 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पट्‍रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पट् 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mgp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mgp)", () => {
		expect(p.parse("२ पट्‍रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पट् 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पट्‍रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पट् 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mgp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mgp)", () => {
		expect(p.parse("यहुडा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहु 1:1").osis()).toEqual("Jude.1.1");
	});
});

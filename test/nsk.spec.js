"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nsk.js";

describe("Localized book Gen (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (nsk)", () => {
		expect(p.parse("ᒐᓂᓯᔅ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (nsk)", () => {
		expect(p.parse("ᐊᒃᓱᑕᔅ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nsk)", () => {
		expect(p.parse("ᒋᔅᒐᔨᑕᑯᑕᒐᐅᓐ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ps (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (nsk)", () => {
		expect(p.parse("ᑎᐱᑦ ᐅᓂᑭᒧᐅᓇ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Matt (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nsk)", () => {
		expect(p.parse("ᒪᑎᔪᐤ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nsk)", () => {
		expect(p.parse("ᒪᕐᒃ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nsk)", () => {
		expect(p.parse("ᓗᒃ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nsk)", () => {
		expect(p.parse("1 ᒠᓐ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ᒠᓐ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nsk)", () => {
		expect(p.parse("2 ᒠᓐ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ᒠᓐ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nsk)", () => {
		expect(p.parse("3 ᒠᓐ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ᒠᓐ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nsk)", () => {
		expect(p.parse("ᒠᓐ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nsk)", () => {
		expect(p.parse("ᐊᑈᔅᑕᓇᒡ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nsk)", () => {
		expect(p.parse("ᕈᒪᓇ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nsk)", () => {
		expect(p.parse("1 ᑯᕆᓐᑎᔭᓇ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ᑯᕆᓐᑎᔭᓇ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nsk)", () => {
		expect(p.parse("2 ᑯᕆᓐᑎᔭᓇ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ᑯᕆᓐᑎᔭᓇ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nsk)", () => {
		expect(p.parse("ᑯᓚᓯᔭᓇ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nsk)", () => {
		expect(p.parse("ᑲᓚᓯᔭᓇ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nsk)", () => {
		expect(p.parse("ᐃᐱᓯᔭᓇ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nsk)", () => {
		expect(p.parse("ᐱᓕᐱᔭᓇ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nsk)", () => {
		expect(p.parse("1 ᑕᓴᓗᓂᔭᓇ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ᑕᓴᓗᓂᔭᓇ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nsk)", () => {
		expect(p.parse("2 ᑕᓴᓗᓂᔭᓇ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ᑕᓴᓗᓂᔭᓇ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nsk)", () => {
		expect(p.parse("1 ᑎᒧᑎ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ᑎᒧᑎ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nsk)", () => {
		expect(p.parse("2 ᑎᒧᑎ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ᑎᒧᑎ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nsk)", () => {
		expect(p.parse("ᑕᐃᑕᔅ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nsk)", () => {
		expect(p.parse("ᐸᐃᓕᒪᓐ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nsk)", () => {
		expect(p.parse("ᐃᑉᕈᐛ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nsk)", () => {
		expect(p.parse("ᒋᒥᔅ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nsk)", () => {
		expect(p.parse("1 ᐱᑕᕐ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ᐱᑕᕐ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nsk)", () => {
		expect(p.parse("2 ᐱᑕᕐ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ᐱᑕᕐ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nsk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nsk)", () => {
		expect(p.parse("ᒍᑦ 1:1").osis()).toEqual("Jude.1.1");
	});
});

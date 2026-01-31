"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/crm.js";

describe("Localized book Rev (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (crm)", () => {
		expect(p.parse("ᑭᔅᑫᓕᑖᑯᑖᑫᐎᓐ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (crm)", () => {
		expect(p.parse("ᐅᐸᓓᑭᔅ ᒫᑎᐤ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ᒫᑎᐤ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (crm)", () => {
		expect(p.parse("ᐅᐸᓓᑭᔅ ᒫᕐᒃ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ᒫᕐᒃ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (crm)", () => {
		expect(p.parse("ᐅᐸᓓᑭᔅ ᓘᒃ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ᓘᒃ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book John (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (crm)", () => {
		expect(p.parse("ᐅᐸᓓᑭᔅ ᒑᓐ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ᒑᓐ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (crm)", () => {
		expect(p.parse("ᓂᔥᑕᒻ ᒑᓐ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ᓂᔥᑕᒻ. ᒑᓐ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (crm)", () => {
		expect(p.parse("ᓂᔓ ᒑᓐ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ᓂᔓ. ᒑᓐ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (crm)", () => {
		expect(p.parse("ᓂᔅᑐ ᒑᓐ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ᓂᔅᑐ. ᒑᓐ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book Acts (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (crm)", () => {
		expect(p.parse("ᐊᐸᔅᑕᓚᒃ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (crm)", () => {
		expect(p.parse("ᕈᒪᓇ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (crm)", () => {
		expect(p.parse("ᓂᔥᑕᒻ ᑯᕆᓐᑎᐊᓇ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ᓂᔥᑕᒻ ᑯᕆᓐᑎᔮᓇ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ᓂᔥᑕᒻ. ᑯᕆᓐᑎᐊᓇ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ᓂᔥᑕᒻ. ᑯᕆᓐᑎᔮᓇ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (crm)", () => {
		expect(p.parse("ᓂᔓ ᑯᕆᓐᑎᐊᓇ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ᓂᔓ. ᑯᕆᓐᑎᐊᓇ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (crm)", () => {
		expect(p.parse("ᑯᓚᔑᔭᓇ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (crm)", () => {
		expect(p.parse("ᑲᓓᔕᐊᓇ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (crm)", () => {
		expect(p.parse("ᐃᐱᓯᔭᓇ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (crm)", () => {
		expect(p.parse("ᐱᓕᐱᔭᓇ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (crm)", () => {
		expect(p.parse("ᓂᔥᑕᒻ ᑌᓴᓗᓂᔭᓇ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ᓂᔥᑕᒻ. ᑌᓴᓗᓂᔭᓇ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (crm)", () => {
		expect(p.parse("ᓂᔓ ᑌᓴᓗᓂᔭᓇ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ᓂᔓ. ᑌᓴᓗᓂᔭᓇ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (crm)", () => {
		expect(p.parse("ᓂᔥᑕᒻ ᑎᒧᑎ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ᓂᔥᑕᒻ. ᑎᒧᑎ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (crm)", () => {
		expect(p.parse("ᓂᔓ ᑎᒧᑎ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ᓂᔓ. ᑎᒧᑎ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (crm)", () => {
		expect(p.parse("ᑕᐃᑕᔅ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (crm)", () => {
		expect(p.parse("ᐹᐃᓕᒪᓐ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (crm)", () => {
		expect(p.parse("ᐦᐃᑉᕉᐗ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (crm)", () => {
		expect(p.parse("ᒉᒻᔅ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (crm)", () => {
		expect(p.parse("ᓂᔥᑕᒻ ᐱᑕᕐ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓂᔥᑕᒻ. ᐱᑕᕐ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (crm)", () => {
		expect(p.parse("ᓂᔓ ᐱᑕᕐ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ᓂᔓ. ᐱᑕᕐ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (crm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (crm)", () => {
		expect(p.parse("ᒎᑦ 1:1").osis()).toEqual("Jude.1.1");
	});
});

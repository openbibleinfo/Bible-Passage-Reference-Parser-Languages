"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/crj.js";

describe("Localized book Rev (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (crj)", () => {
		expect(p.parse("ᒋᔅᒉᔨᐦᑖᑯᐦᑖᒉᐎᓐ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Revelation 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (crj)", () => {
		expect(p.parse("Matthew 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ᒫᑎᔫ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (crj)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ᒫᕐᒃ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (crj)", () => {
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ᓘᒃ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (crj)", () => {
		expect(p.parse("3 John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ᓂᔥᑐ ᒞᓐ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (crj)", () => {
		expect(p.parse("1 John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ᒞᓐ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ᒞᓐ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ᓃᔥᑕᒻ John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ᓃᔥᑕᒻ Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ᓃᔥᑕᒻ ᒞᓐ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ᓃᔥᑕᒻ. John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ᓃᔥᑕᒻ. Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ᓃᔥᑕᒻ. ᒞᓐ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (crj)", () => {
		expect(p.parse("2 John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ᒞᓐ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ᒞᓐ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ᓃᔓ John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ᓃᔓ Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ᓃᔓ ᒞᓐ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ᓃᔓ. John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ᓃᔓ. Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ᓃᔓ. ᒞᓐ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (crj)", () => {
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jhn 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ᒞᓐ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (crj)", () => {
		expect(p.parse("ᐊᐸᔅᑕᓚᒡ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Act 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (crj)", () => {
		expect(p.parse("Romans 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ᕎᒪᓐ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (crj)", () => {
		expect(p.parse("1 Corinthians 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ᑯᕆᓐᑎᔭᓐ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthians 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ᑯᕆᓐᑎᔭᓐ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ᓃᔥᑕᒻ Corinthians 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ᓃᔥᑕᒻ ᑯᕆᓐᑎᔭᓐ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ᓃᔥᑕᒻ Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ᓃᔥᑕᒻ. Corinthians 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ᓃᔥᑕᒻ. ᑯᕆᓐᑎᔭᓐ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ᓃᔥᑕᒻ. Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (crj)", () => {
		expect(p.parse("2 Corinthians 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ᑯᕆᓐᑎᔭᓐ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthians 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ᑯᕆᓐᑎᔭᓐ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ᓃᔓ Corinthians 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ᓃᔓ ᑯᕆᓐᑎᔭᓐ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ᓃᔓ Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ᓃᔓ. Corinthians 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ᓃᔓ. ᑯᕆᓐᑎᔭᓐ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ᓃᔓ. Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (crj)", () => {
		expect(p.parse("Colossians 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ᑯᓨᓯᔭᓐ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (crj)", () => {
		expect(p.parse("Galatians 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ᑲᓓᔑᔭᓐ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (crj)", () => {
		expect(p.parse("Ephesians 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ᐃᐲᓯᔭᓐ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (crj)", () => {
		expect(p.parse("Philippians 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ᐱᓕᐱᔭᓐ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Plp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (crj)", () => {
		expect(p.parse("1 Thessalonians 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ᑌᓴᓨᓂᔭᓐ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Th 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonians 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ᑌᓴᓨᓂᔭᓐ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Th 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ᓃᔥᑕᒻ Thessalonians 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ᓃᔥᑕᒻ ᑌᓴᓨᓂᔭᓐ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ᓃᔥᑕᒻ Th 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ᓃᔥᑕᒻ. Thessalonians 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ᓃᔥᑕᒻ. ᑌᓴᓨᓂᔭᓐ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ᓃᔥᑕᒻ. Th 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (crj)", () => {
		expect(p.parse("2 Thessalonians 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ᑌᓴᓨᓂᔭᓐ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Th 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonians 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ᑌᓴᓨᓂᔭᓐ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Th 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ᓃᔓ Thessalonians 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ᓃᔓ ᑌᓴᓨᓂᔭᓐ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ᓃᔓ Th 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ᓃᔓ. Thessalonians 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ᓃᔓ. ᑌᓴᓨᓂᔭᓐ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ᓃᔓ. Th 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (crj)", () => {
		expect(p.parse("1 Timothy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ᑎᒧᑏ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ᑎᒧᑏ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ᓃᔥᑕᒻ Timothy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ᓃᔥᑕᒻ ᑎᒧᑏ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ᓃᔥᑕᒻ Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ᓃᔥᑕᒻ. Timothy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ᓃᔥᑕᒻ. ᑎᒧᑏ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ᓃᔥᑕᒻ. Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (crj)", () => {
		expect(p.parse("2 Timothy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ᑎᒧᑏ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ᑎᒧᑏ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ᓃᔓ Timothy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ᓃᔓ ᑎᒧᑏ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ᓃᔓ Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ᓃᔓ. Timothy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ᓃᔓ. ᑎᒧᑏ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ᓃᔓ. Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (crj)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ᑕᐃᑕᔅ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (crj)", () => {
		expect(p.parse("Philemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ᐹᐃᓖᒪᓐ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (crj)", () => {
		expect(p.parse("Hebrews 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ᐦᐄᑉᕈᐗ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (crj)", () => {
		expect(p.parse("James 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ᒉᒥᔅ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (crj)", () => {
		expect(p.parse("1 Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ᐲᑕᕐ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ᐲᑕᕐ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓃᔥᑕᒻ Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓃᔥᑕᒻ ᐲᑕᕐ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓃᔥᑕᒻ Pe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓃᔥᑕᒻ. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓃᔥᑕᒻ. ᐲᑕᕐ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓃᔥᑕᒻ. Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (crj)", () => {
		expect(p.parse("2 Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ᐲᑕᕐ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ᐲᑕᕐ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ᓃᔓ Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ᓃᔓ ᐲᑕᕐ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ᓃᔓ Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ᓃᔓ. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ᓃᔓ. ᐲᑕᕐ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ᓃᔓ. Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (crj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (crj)", () => {
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ᒎᑦ 1:1").osis()).toEqual("Jude.1.1");
	});
});

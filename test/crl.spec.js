"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/crl.js";

describe("Localized book Rev (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (crl)", () => {
		expect(p.parse("ᒋᔅᒑᔨᐦᑖᑯᐦᑖᒑᐧᐃᓐ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (crl)", () => {
		expect(p.parse("ᒫᔪᐦᐧᑖᑦ ᒫᕠᔫ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ᒫᕠᔫ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (crl)", () => {
		expect(p.parse("ᒫᔪᐦᐧᑖᑦ ᒫᕐᒃ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ᒫᕐᒃ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (crl)", () => {
		expect(p.parse("ᒫᔪᐦᐧᑖᑦ ᓘᒃ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ᓘᒃ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book John (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (crl)", () => {
		expect(p.parse("ᒫᔪᐦᐧᑖᑦ ᐧᒑᓐ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ᒞᓐ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (crl)", () => {
		expect(p.parse("ᓃᔥᑎᒻ ᐧᒑᓐ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ᓃᔥᑎᒻ. ᐧᒑᓐ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (crl)", () => {
		expect(p.parse("ᓃᔓ ᐧᒑᓐ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ᓃᔓ. ᐧᒑᓐ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (crl)", () => {
		expect(p.parse("ᓂᔥᑐ ᐧᒑᓐ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ᓂᔥᑐ. ᐧᒑᓐ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book Acts (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (crl)", () => {
		expect(p.parse("ᐋᐧᐹᔅᑎᓕᒡ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ᐋᑆᔅᑎᓕᒡ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (crl)", () => {
		expect(p.parse("ᐧᕌᒥᓐ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ᕎᒥᓐ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (crl)", () => {
		expect(p.parse("1 ᑯᕆᓐᕠᔨᓐ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (crl)", () => {
		expect(p.parse("2 ᑯᕆᓐᕠᔨᓐ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (crl)", () => {
		expect(p.parse("ᓃᔥᑎᒻ ᑯᕆᓐᕠᔨᓐ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ᓃᔥᑎᒻ. ᑯᕆᓐᕠᔨᓐ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (crl)", () => {
		expect(p.parse("ᓃᔓ ᑯᕆᓐᕠᔨᓐ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ᓃᔓ. ᑯᕆᓐᕠᔨᓐ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (crl)", () => {
		expect(p.parse("ᑯᐧᓛᓯᔨᓐ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (crl)", () => {
		expect(p.parse("ᑳᓓᔑᔨᓐ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (crl)", () => {
		expect(p.parse("ᐄᕕᓰᔨᓐ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (crl)", () => {
		expect(p.parse("ᕕᓕᐱᔨᓐ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (crl)", () => {
		expect(p.parse("ᓃᔥᑎᒻ ᕞᓵᐧᓛᓃᔨᓐ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ᓃᔥᑎᒻ. ᕞᓵᐧᓛᓃᔨᓐ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (crl)", () => {
		expect(p.parse("ᓃᔓ ᕞᓵᐧᓛᓃᔨᓐ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ᓃᔓ. ᕞᓵᐧᓛᓃᔨᓐ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (crl)", () => {
		expect(p.parse("ᓃᔥᑎᒻ ᑎᒧᕢ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ᓃᔥᑎᒻ. ᑎᒧᕢ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (crl)", () => {
		expect(p.parse("ᓃᔓ ᑎᒧᕢ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ᓃᔓ. ᑎᒧᕢ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (crl)", () => {
		expect(p.parse("ᑖᐃᑎᔅ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (crl)", () => {
		expect(p.parse("ᕙᐃᓖᒥᓐ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (crl)", () => {
		expect(p.parse("ᐦᐄᑉᕉ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (crl)", () => {
		expect(p.parse("ᒉᒥᔅ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (crl)", () => {
		expect(p.parse("ᓃᔥᑎᒻ ᐲᑎᕐ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓃᔥᑎᒻ. ᐲᑎᕐ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (crl)", () => {
		expect(p.parse("ᓃᔓ ᐲᑎᕐ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ᓃᔓ. ᐲᑎᕐ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (crl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (crl)", () => {
		expect(p.parse("ᒎᑦ 1:1").osis()).toEqual("Jude.1.1");
	});
});

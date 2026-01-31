"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/xis.js";

describe("Localized book Rev (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (xis)", () => {
		expect(p.parse("ପ୍ରକାଶିତ୍ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (xis)", () => {
		expect(p.parse("ମାତିସ୍ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (xis)", () => {
		expect(p.parse("ମାର୍‌କୁସ୍ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (xis)", () => {
		expect(p.parse("ଲୁକାସ୍ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (xis)", () => {
		expect(p.parse("୧ ଯୋହାନ୍‌ସ୍ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧. ଯୋହାନ୍‌ସ୍ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (xis)", () => {
		expect(p.parse("୨ ଯୋହାନ୍‌ସ୍ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨. ଯୋହାନ୍‌ସ୍ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (xis)", () => {
		expect(p.parse("୩ ଯୋହାନ୍‌ସ୍ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("୩. ଯୋହାନ୍‌ସ୍ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (xis)", () => {
		expect(p.parse("ଯୋହାନ୍ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (xis)", () => {
		expect(p.parse("ପ୍ରେରିତ୍ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (xis)", () => {
		expect(p.parse("ରୋମୀ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (xis)", () => {
		expect(p.parse("୧ କୁରିନ୍ଥୀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କୁରିନ୍ଥୀ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (xis)", () => {
		expect(p.parse("୨ କୁରିନ୍ଥୀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨. କୁରିନ୍ଥୀ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (xis)", () => {
		expect(p.parse("କୁଲୁସି 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (xis)", () => {
		expect(p.parse("ଗାଲାତୀ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (xis)", () => {
		expect(p.parse("ଇଫିସି 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (xis)", () => {
		expect(p.parse("ଫିଲିପ୍ପୀ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (xis)", () => {
		expect(p.parse("1 ଥେସଲନିକି 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (xis)", () => {
		expect(p.parse("2 ଥେସଲନିକି 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (xis)", () => {
		expect(p.parse("୧ ତିମଥିଉସ୍ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧. ତିମଥିଉସ୍ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (xis)", () => {
		expect(p.parse("୨ ତିମଥିଉସ୍ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨. ତିମଥିଉସ୍ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (xis)", () => {
		expect(p.parse("ତୀତୁସ୍ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (xis)", () => {
		expect(p.parse("ଫିଲେମୋନ୍‌ସ୍ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (xis)", () => {
		expect(p.parse("ଇବ୍ରାନୀ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (xis)", () => {
		expect(p.parse("ୟାକୁବ୍‌ସ୍ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (xis)", () => {
		expect(p.parse("୧ ପାତ୍ରାସ୍ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ପାତ୍ରାସ୍ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (xis)", () => {
		expect(p.parse("୨ ପାତ୍ରାସ୍ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨. ପାତ୍ରାସ୍ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (xis)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (xis)", () => {
		expect(p.parse("ଯୁଦାସ୍ 1:1").osis()).toEqual("Jude.1.1");
	});
});

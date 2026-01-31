"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kff.js";

describe("Localized book Rev (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kff)", () => {
		expect(p.parse("ପ୍ରକାଶିତ୍‌ ବାକ୍ୟ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kff)", () => {
		expect(p.parse("ମାତିଉ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kff)", () => {
		expect(p.parse("ମାର୍କ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kff)", () => {
		expect(p.parse("ଲୁକ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kff)", () => {
		expect(p.parse("୧ ଯୋହନ୍‌‌ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧. ଯୋହନ୍‌‌ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kff)", () => {
		expect(p.parse("୨ ଯୋହନ୍‌‌ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨. ଯୋହନ୍‌‌ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kff)", () => {
		expect(p.parse("୩ ଯୋହନ୍‌‌ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("୩. ଯୋହନ୍‌‌ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kff)", () => {
		expect(p.parse("ଯୋହନ୍‌‌ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kff)", () => {
		expect(p.parse("ପ୍ରେରିତ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kff)", () => {
		expect(p.parse("ରୋମୀୟ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kff)", () => {
		expect(p.parse("୧ କରନ୍ତିୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କରନ୍ତିୟ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kff)", () => {
		expect(p.parse("୨ କରନ୍ତିୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨. କରନ୍ତିୟ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kff)", () => {
		expect(p.parse("କଲସୀୟ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kff)", () => {
		expect(p.parse("ଗାଲାତୀୟ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kff)", () => {
		expect(p.parse("ଏଫିସିୟ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kff)", () => {
		expect(p.parse("ଫିଲିପିୟ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kff)", () => {
		expect(p.parse("୧ ଥେସଲନିୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ଥେସଲନିୟ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kff)", () => {
		expect(p.parse("୨ ଥେସଲନିୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨. ଥେସଲନିୟ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kff)", () => {
		expect(p.parse("୧ ତୀମତି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧. ତୀମତି 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kff)", () => {
		expect(p.parse("୨ ତୀମତି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨. ତୀମତି 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kff)", () => {
		expect(p.parse("ତୀତସ୍‌ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kff)", () => {
		expect(p.parse("ଫିଲିମୋନ୍‌ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ଫିଲିମୋନ୍ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kff)", () => {
		expect(p.parse("ଏବ୍ରୀ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kff)", () => {
		expect(p.parse("ଯାକୁବ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kff)", () => {
		expect(p.parse("୧ ପିତର୍ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ପିତର୍ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kff)", () => {
		expect(p.parse("୨ ପିତର୍‌ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨. ପିତର୍‌ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kff)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kff)", () => {
		expect(p.parse("ଯିହୁଦା 1:1").osis()).toEqual("Jude.1.1");
	});
});

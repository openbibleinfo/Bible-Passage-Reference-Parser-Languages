"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/unx.js";

describe("Localized book Rev (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (unx)", () => {
		expect(p.parse("ଉନୁଦୁବ୍‌ କାଜି 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ଉଦୁବ୍‍କାଜି 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ଉଦୁ. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (unx)", () => {
		expect(p.parse("ମାତ୍ତି. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ମାତ୍ତିଉ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ମାଥିଉ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (unx)", () => {
		expect(p.parse("ମାର୍କୁସ୍ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ମାର୍କୁ. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ମାର୍କ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (unx)", () => {
		expect(p.parse("ଲୁକା. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ଲୁକା 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ଲୁକ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (unx)", () => {
		expect(p.parse("୩ ଯୋହାନ୍‌ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ଯୋହାନ୍ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ଯୋହା. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (unx)", () => {
		expect(p.parse("1 ଯୋହାନ୍‌ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ଯୋହାନ୍ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ଯୋହା. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ଯୋହାନ୍‌ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ଯୋହାନ୍ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ଯୋହା. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧ ଯୋହାନ୍‌ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧ ଯୋହାନ୍ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧ ଯୋହା. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧. ଯୋହାନ୍‌ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧. ଯୋହାନ୍ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧. ଯୋହା. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (unx)", () => {
		expect(p.parse("2 ଯୋହାନ୍‌ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ଯୋହାନ୍ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ଯୋହା. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ଯୋହାନ୍‌ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ଯୋହାନ୍ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ଯୋହା. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨ ଯୋହାନ୍‌ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨ ଯୋହାନ୍ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨ ଯୋହା. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨. ଯୋହାନ୍‌ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨. ଯୋହାନ୍ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨. ଯୋହା. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (unx)", () => {
		expect(p.parse("ଯୋହାନ୍‌ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ଯୋହାନ୍ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ଯୋହା. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (unx)", () => {
		expect(p.parse("ପ୍ରେରିତ୍‌ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("କୁଲାକାନ୍ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("କୁଲା. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (unx)", () => {
		expect(p.parse("ରୋମ୍‍ରେନ୍ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ରୋମ. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ରୋମି 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (unx)", () => {
		expect(p.parse("1 କୁରିନ୍ଥିୟୋରେନ୍ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 କରିନ୍ଥିୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 କୁରି. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. କୁରିନ୍ଥିୟୋରେନ୍ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. କରିନ୍ଥିୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. କୁରି. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧ କୁରିନ୍ଥିୟୋରେନ୍ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧ କରିନ୍ଥିୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧ କୁରି. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କୁରିନ୍ଥିୟୋରେନ୍ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କରିନ୍ଥିୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କୁରି. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (unx)", () => {
		expect(p.parse("2 କୁରିନ୍ଥିୟୋରେନ୍ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 କରିନ୍ଥିୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 କୁରି. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. କୁରିନ୍ଥିୟୋରେନ୍ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. କରିନ୍ଥିୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. କୁରି. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨ କୁରିନ୍ଥିୟୋରେନ୍ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨ କରିନ୍ଥିୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨ କୁରି. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨. କୁରିନ୍ଥିୟୋରେନ୍ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨. କରିନ୍ଥିୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨. କୁରି. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (unx)", () => {
		expect(p.parse("କୁଲୁସିୟୋରେନ୍ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("କଲସିୟ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("କୁଲୁ. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (unx)", () => {
		expect(p.parse("ଗାଲାତିୟାରେନ୍ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ଗାଲାତିୟ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ଗାଲା. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (unx)", () => {
		expect(p.parse("ଇଫିସିୟୋ ରେନ୍ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ଏଫିସିୟ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ଇଫି. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (unx)", () => {
		expect(p.parse("ଫିଲିପିୟାରେନ୍ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ଫିଲିପିୟ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ଫିଲି. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 2Thess (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (unx)", () => {
		expect(p.parse("2 ଥିସ୍ସଲୁନିକେ ରେନ୍ କୋ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ଥେସ୍‌ଲନିକା 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ଥିସ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ଥିସ୍ସଲୁନିକେ ରେନ୍ କୋ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ଥେସ୍‌ଲନିକା 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ଥିସ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨ ଥିସ୍ସଲୁନିକେ ରେନ୍ କୋ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨ ଥେସ୍‌ଲନିକା 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨ ଥିସ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨. ଥିସ୍ସଲୁନିକେ ରେନ୍ କୋ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨. ଥେସ୍‌ଲନିକା 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨. ଥିସ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (unx)", () => {
		expect(p.parse("1 ଥିସ୍ସଲୁନିକେ ରେନ୍ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ଥେସ୍‌ଲନିକା 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ଥିସ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ଥିସ୍ସଲୁନିକେ ରେନ୍ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ଥେସ୍‌ଲନିକା 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ଥିସ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧ ଥିସ୍ସଲୁନିକେ ରେନ୍ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧ ଥେସ୍‌ଲନିକା 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧ ଥିସ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ଥିସ୍ସଲୁନିକେ ରେନ୍ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ଥେସ୍‌ଲନିକା 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ଥିସ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (unx)", () => {
		expect(p.parse("1 ତିମୁଥିୟୁସ୍ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ତିମଥି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ତିମୁ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ତିମୁଥିୟୁସ୍ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ତିମଥି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ତିମୁ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧ ତିମୁଥିୟୁସ୍ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧ ତିମଥି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧ ତିମୁ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧. ତିମୁଥିୟୁସ୍ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧. ତିମଥି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧. ତିମୁ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (unx)", () => {
		expect(p.parse("2 ତିମୁଥିୟୁସ୍ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ତିମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ତିମୁ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ତିମୁଥିୟୁସ୍ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ତିମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ତିମୁ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨ ତିମୁଥିୟୁସ୍ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨ ତିମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨ ତିମୁ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨. ତିମୁଥିୟୁସ୍ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨. ତିମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨. ତିମୁ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (unx)", () => {
		expect(p.parse("ତିତସ୍‌ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ତିତୁସ୍ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ତିତୁ. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (unx)", () => {
		expect(p.parse("ଫିଲ୍‌ମନ୍‌ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ଫିଲେମୋନ୍ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ଫିଲେ. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (unx)", () => {
		expect(p.parse("ଇବ୍ରାନୀୟୋରେନ୍ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ଇବ୍ରା. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ଏବ୍ରୀ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (unx)", () => {
		expect(p.parse("ୟାକୁବ୍ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ଯାକୁବ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ୟାକୁ. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (unx)", () => {
		expect(p.parse("1 ପାତ୍‌ରାସ୍‌ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ପାତ୍ରାସ୍ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ପାତ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ପାତ୍‌ରାସ୍‌ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ପାତ୍ରାସ୍ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ପାତ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧ ପାତ୍‌ରାସ୍‌ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧ ପାତ୍ରାସ୍ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧ ପାତ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ପାତ୍‌ରାସ୍‌ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ପାତ୍ରାସ୍ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ପାତ. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (unx)", () => {
		expect(p.parse("2 ପାତ୍‌ରାସ୍‌ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ପାତ୍ରାସ୍ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ପାତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ପାତ୍‌ରାସ୍‌ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ପାତ୍ରାସ୍ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ପାତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨ ପାତ୍‌ରାସ୍‌ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨ ପାତ୍ରାସ୍ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨ ପାତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨. ପାତ୍‌ରାସ୍‌ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨. ପାତ୍ରାସ୍ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨. ପାତ. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (unx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (unx)", () => {
		expect(p.parse("ଯିହୁଦା 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ୟାହୁଦା 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ୟାହୁ. 1:1").osis()).toEqual("Jude.1.1");
	});
});

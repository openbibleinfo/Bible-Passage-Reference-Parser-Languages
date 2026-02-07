"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bdv.js";

describe("Localized book Rev (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bdv)", () => {
		expect(p.parse("ପ୍ରକାଶିତ୍ ବାକ୍ୟ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ପ୍ରକାସିତ୍‌ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ପ୍ରକା. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ପ୍ରକା 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bdv)", () => {
		expect(p.parse("ମାତିଉ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ମାଥି. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ମାଥିଉ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ମାତି 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bdv)", () => {
		expect(p.parse("ମାର୍କ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bdv)", () => {
		expect(p.parse("ଲୁକ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bdv)", () => {
		expect(p.parse("୩ ଜହନ୍‌ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ଯୋହନ୍ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("୩ ଯୋହ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("୩ ଜହ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bdv)", () => {
		expect(p.parse("1 ଜହନ୍‌ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ଯୋହନ୍ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ଯୋହ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ଜହ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ଜହନ୍‌ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ଯୋହନ୍ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ଯୋହ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ଜହ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧ ଜହନ୍‌ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧ ଯୋହନ୍ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧ ଯୋହ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧ ଜହ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧. ଜହନ୍‌ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧. ଯୋହନ୍ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧. ଯୋହ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧. ଜହ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bdv)", () => {
		expect(p.parse("2 ଜହନ୍‌ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ଯୋହନ୍ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ଯୋହ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ଜହ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ଜହନ୍‌ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ଯୋହନ୍ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ଯୋହ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ଜହ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨ ଜହନ୍‌ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨ ଯୋହନ୍ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨ ଯୋହ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨ ଜହ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨. ଜହନ୍‌ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨. ଯୋହନ୍ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨. ଯୋହ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨. ଜହ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bdv)", () => {
		expect(p.parse("ଜହନ୍‌ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ଯୋହନ୍ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ଯୋହ. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ଜହ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bdv)", () => {
		expect(p.parse("ପେରିତ୍‌ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ପ୍ରେରି. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ପ୍ରେରିତ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ପେରି 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bdv)", () => {
		expect(p.parse("ରୋମୀ. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ରୋମୀୟ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ରମିୟ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ରମି 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bdv)", () => {
		expect(p.parse("1 କରିନ୍ଥୀୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 କରନ୍ତି 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 କରି. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 କର 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. କରିନ୍ଥୀୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. କରନ୍ତି 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. କରି. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. କର 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧ କରିନ୍ଥୀୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧ କରନ୍ତି 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧ କରି. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧ କର 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କରିନ୍ଥୀୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କରନ୍ତି 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କରି. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କର 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bdv)", () => {
		expect(p.parse("2 କରିନ୍ଥୀୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 କରନ୍ତି 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 କ୍‍ରି. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 କର 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. କରିନ୍ଥୀୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. କରନ୍ତି 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. କ୍‍ରି. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. କର 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨ କରିନ୍ଥୀୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨ କରନ୍ତି 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨ କ୍‍ରି. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨ କର 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨. କରିନ୍ଥୀୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨. କରନ୍ତି 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨. କ୍‍ରି. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨. କର 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bdv)", () => {
		expect(p.parse("କଲସୀୟ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("କଲସି 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("କଲ. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("କଲ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bdv)", () => {
		expect(p.parse("ଗାଲାତିୟ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ଗାଲାତୀୟ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ଗାଲା. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ଗାଲା 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bdv)", () => {
		expect(p.parse("ଏପିସିୟ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ଏଫିସୀୟ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ଏଫି. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ଏପି 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bdv)", () => {
		expect(p.parse("ଫିଲିପ୍ପୀୟ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ଫିଲିପ୍ପ. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ପିଲିପିୟ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ପିଲିପି 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bdv)", () => {
		expect(p.parse("1 ଥେସଲନିକିୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ତେସଲନିକି 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ଥେସ୍. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ତେସ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ଥେସଲନିକିୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ତେସଲନିକି 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ଥେସ୍. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ତେସ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧ ଥେସଲନିକିୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧ ତେସଲନିକି 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧ ଥେସ୍. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧ ତେସ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ଥେସଲନିକିୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ତେସଲନିକି 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ଥେସ୍. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ତେସ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bdv)", () => {
		expect(p.parse("2 ଥେସଲନିକିୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ତେସଲନିକି 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ଥେସ୍. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ତେସ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ଥେସଲନିକିୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ତେସଲନିକି 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ଥେସ୍. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ତେସ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨ ଥେସଲନିକିୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨ ତେସଲନିକି 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨ ଥେସ୍. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨ ତେସ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨. ଥେସଲନିକିୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨. ତେସଲନିକି 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨. ଥେସ୍. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨. ତେସ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bdv)", () => {
		expect(p.parse("1 ତିମତି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ତୀମଥି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ତୀମ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ତିମ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ତିମତି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ତୀମଥି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ତୀମ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ତିମ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧ ତିମତି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧ ତୀମଥି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧ ତୀମ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧ ତିମ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧. ତିମତି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧. ତୀମଥି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧. ତୀମ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧. ତିମ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bdv)", () => {
		expect(p.parse("2 ତିମତି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ତୀମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ତୀମ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ତିମ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ତିମତି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ତୀମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ତୀମ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ତିମ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨ ତିମତି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨ ତୀମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨ ତୀମ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨ ତିମ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨. ତିମତି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨. ତୀମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨. ତୀମ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨. ତିମ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bdv)", () => {
		expect(p.parse("ତିତସ୍‌ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ତୀତସ୍ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ତୀତ. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ତିତ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bdv)", () => {
		expect(p.parse("ପିଲିମନ୍ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ଫିଲିମନ୍ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ପିଲିମ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ଫିଲି. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bdv)", () => {
		expect(p.parse("ଏବ୍ରି 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ଏବ୍ରୀ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bdv)", () => {
		expect(p.parse("ଜାକୁବ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ଯାକୁ. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ଯାକୁବ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ଜାକୁ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bdv)", () => {
		expect(p.parse("1 ପିତର୍‌ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ପିତର୍ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ପିତ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ପିତ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ପିତର୍‌ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ପିତର୍ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ପିତ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ପିତ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧ ପିତର୍‌ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧ ପିତର୍ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧ ପିତ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧ ପିତ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ପିତର୍‌ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ପିତର୍ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ପିତ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ପିତ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bdv)", () => {
		expect(p.parse("2 ପିତର୍‌ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ପିତର୍ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ପିତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ପିତ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ପିତର୍‌ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ପିତର୍ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ପିତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ପିତ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨ ପିତର୍‌ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨ ପିତର୍ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨ ପିତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨ ପିତ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨. ପିତର୍‌ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨. ପିତର୍ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨. ପିତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨. ପିତ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bdv)", () => {
		expect(p.parse("ଯିହୁଦି 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ଜିଉଦା 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ଯିହୁ. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ଜିଉ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (bdv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (bdv)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ଜହନ୍‌ - ୩ ଜହନ୍‌").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ଜହନ୍‌ – ୩ ଜହନ୍‌").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ଜହନ୍‌ — ୩ ଜହନ୍‌").osis()).toEqual("1John.1-3John.1");
	});
});

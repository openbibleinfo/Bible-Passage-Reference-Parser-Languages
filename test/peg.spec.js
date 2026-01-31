"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/peg.js";

describe("Localized book Rev (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (peg)", () => {
		expect(p.parse("ୱେଚ୍‍ଚି ବେଣ୍ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ହତ୍‌ତି 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ୱେଚ୍. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (peg)", () => {
		expect(p.parse("ମାତିଉ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ମାଥି. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ମାଥିଉ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (peg)", () => {
		expect(p.parse("ମାର୍କ. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ମାର୍କ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (peg)", () => {
		expect(p.parse("ଲୁକ. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ଲୁକ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (peg)", () => {
		expect(p.parse("୧ ଜହନ୍‌ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧ ଯୋହନ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧ ଯୋହନ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧. ଜହନ୍‌ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧. ଯୋହନ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧. ଯୋହନ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (peg)", () => {
		expect(p.parse("୨ ଜହନ୍‌ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨ ଯୋହନ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨ ଯୋହନ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨. ଜହନ୍‌ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨. ଯୋହନ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨. ଯୋହନ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (peg)", () => {
		expect(p.parse("୩ ଜହନ୍‌ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("୩ ଯୋହନ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("୩ ଯୋହନ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("୩. ଜହନ୍‌ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("୩. ଯୋହନ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("୩. ଯୋହନ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (peg)", () => {
		expect(p.parse("ଜହନ୍‌ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ଯୋହନ. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ଯୋହନ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (peg)", () => {
		expect(p.parse("ବାଚିକିତି ଚେଲାହିର୍ କାତା 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ପକ୍ୟାତାକା 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("କାମାୟ୍. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (peg)", () => {
		expect(p.parse("ରୋମି. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ରୋମିୟ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ରମିୟ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (peg)", () => {
		expect(p.parse("୧ କରିନ୍ଥିୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧ କରନ୍ତିୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧ କରି. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କରିନ୍ଥିୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କରନ୍ତିୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କରି. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (peg)", () => {
		expect(p.parse("୨ କରନ୍ତିୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨ କରି. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨. କରନ୍ତିୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨. କରି. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (peg)", () => {
		expect(p.parse("୨କରନ୍ତିୟ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (peg)", () => {
		expect(p.parse("କଲସିୟ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("କଲସୀୟ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("କଲ. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (peg)", () => {
		expect(p.parse("ଗାଲାତିୟ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ଗାଲା. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (peg)", () => {
		expect(p.parse("ଏପିସିୟ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ଏଫିସୀୟ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ଏଫି. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (peg)", () => {
		expect(p.parse("ପିଲିପିୟ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ଫିଲୀପିୟ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ଫିଲୀ. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (peg)", () => {
		expect(p.parse("୧ ତେସ୍‌ଲନିକି 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧ ଥେସଲନୀକିୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧ ଥେସ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ତେସ୍‌ଲନିକି 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ଥେସଲନୀକିୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ଥେସ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (peg)", () => {
		expect(p.parse("୨ ତେସ୍‌ଲନିକି 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨ ଥେସଲନୀକିୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨ ଥେସ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨. ତେସ୍‌ଲନିକି 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨. ଥେସଲନୀକିୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨. ଥେସ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (peg)", () => {
		expect(p.parse("୧ ତିମତି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧ ତିମଥି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧ ତିମ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧. ତିମତି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧. ତିମଥି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧. ତିମ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (peg)", () => {
		expect(p.parse("୨ ତିମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨ ତିମ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨. ତିମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨. ତିମ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (peg)", () => {
		expect(p.parse("ତୀତ. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ତୀତସ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (peg)", () => {
		expect(p.parse("ପିଲିମନ୍‌ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ଫିଲୀମୋ. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ଫିଲୀମୋନ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (peg)", () => {
		expect(p.parse("ଏବ୍ରୀ. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ଏବ୍ରି 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ଏବ୍ରୀ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (peg)", () => {
		expect(p.parse("ଜାକ୍‌ବ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ଯାକୁ. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ଯାକୁବ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (peg)", () => {
		expect(p.parse("୧ ପିତର୍‌ତି 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧ ପିତର୍‌ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧ ପିତ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧ ପିତର 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ପିତର୍‌ତି 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ପିତର୍‌ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ପିତ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ପିତର 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (peg)", () => {
		expect(p.parse("୨ ପିତର୍‌ତି 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨ ପିତର୍‌ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨ ପିତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨ ପିତର 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨. ପିତର୍‌ତି 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨. ପିତର୍‌ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨. ପିତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨. ପିତର 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (peg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (peg)", () => {
		expect(p.parse("ଜିହୁଦା 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ଯିହୁଦା 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ଯିହୁ. 1:1").osis()).toEqual("Jude.1.1");
	});
});

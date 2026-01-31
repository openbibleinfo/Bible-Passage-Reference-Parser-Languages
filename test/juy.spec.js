"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/juy.js";

describe("Localized book Rev (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (juy)", () => {
		expect(p.parse("ଅନବ୍‌ଜନାବର୍‌ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (juy)", () => {
		expect(p.parse("ମାତିଉ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (juy)", () => {
		expect(p.parse("ମାର୍କ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (juy)", () => {
		expect(p.parse("ଲୁକ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (juy)", () => {
		expect(p.parse("୧ ଜନ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧. ଜନ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (juy)", () => {
		expect(p.parse("୨ ଜନ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨. ଜନ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (juy)", () => {
		expect(p.parse("୩ ଜନ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("୩. ଜନ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (juy)", () => {
		expect(p.parse("ଜନ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (juy)", () => {
		expect(p.parse("ଅନାପ୍ପାୟ୍‌ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (juy)", () => {
		expect(p.parse("ରୋମିଅ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (juy)", () => {
		expect(p.parse("୧ କରନ୍ତି 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କରନ୍ତି 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (juy)", () => {
		expect(p.parse("୨ କରନ୍ତି 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨. କରନ୍ତି 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (juy)", () => {
		expect(p.parse("କଲସି 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (juy)", () => {
		expect(p.parse("ଗାଲାତି 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (juy)", () => {
		expect(p.parse("ଏପିସି 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (juy)", () => {
		expect(p.parse("ପିଲିପି 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (juy)", () => {
		expect(p.parse("୧ ତେସଲନିକି 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ତେସଲନିକି 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (juy)", () => {
		expect(p.parse("୨ ତେସଲନିକି 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨. ତେସଲନିକି 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (juy)", () => {
		expect(p.parse("୧ ତିମତି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧. ତିମତି 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (juy)", () => {
		expect(p.parse("୨ ତିମତି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨. ତିମତି 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (juy)", () => {
		expect(p.parse("ତିତସ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (juy)", () => {
		expect(p.parse("ପିଲିମନ୍‌ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (juy)", () => {
		expect(p.parse("ଏବ୍ରି 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (juy)", () => {
		expect(p.parse("ଜାକୁବ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (juy)", () => {
		expect(p.parse("୧ ପିତ୍ର 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ପିତ୍ର 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (juy)", () => {
		expect(p.parse("୨ ପିତ୍ର 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨. ପିତ୍ର 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (juy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (juy)", () => {
		expect(p.parse("ଜିଉଦା 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dso.js";

describe("Localized book Rev (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dso)", () => {
		expect(p.parse("ପର୍‌କାସିତ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dso)", () => {
		expect(p.parse("ମାତିଉ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dso)", () => {
		expect(p.parse("ମାର୍‌କ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dso)", () => {
		expect(p.parse("ଲୁକ୍‌ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dso)", () => {
		expect(p.parse("୧ ମ ଜଅନ୍‌ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧. ମ ଜଅନ୍‌ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧ମ ମ ଜଅନ୍‌ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧ମ. ମ ଜଅନ୍‌ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 3John (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dso)", () => {
		expect(p.parse("୩ ୟ ଜଅନ୍‌ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 2John (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dso)", () => {
		expect(p.parse("୨ ୟ ଜଅନ୍‌ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨. ୟ ଜଅନ୍‌ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨ୟ ୟ ଜଅନ୍‌ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨ୟ. ୟ ଜଅନ୍‌ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dso)", () => {
		expect(p.parse("ଜଅନ୍‌ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dso)", () => {
		expect(p.parse("ପେରିତ୍‌ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dso)", () => {
		expect(p.parse("ରମିୟ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dso)", () => {
		expect(p.parse("୧ କରନ୍ତିୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କରନ୍ତିୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧ମ କରନ୍ତିୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧ମ. କରନ୍ତିୟ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dso)", () => {
		expect(p.parse("୨ କରନ୍ତିୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨. କରନ୍ତିୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨ୟ କରନ୍ତିୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨ୟ. କରନ୍ତିୟ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dso)", () => {
		expect(p.parse("କଲସିଅ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dso)", () => {
		expect(p.parse("ଗାଲାତିୟ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dso)", () => {
		expect(p.parse("ଏପିସିୟ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dso)", () => {
		expect(p.parse("ପିଲିପିୟ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dso)", () => {
		expect(p.parse("୧ ତେସଲନିକିୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ତେସଲନିକିୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧ମ ତେସଲନିକିୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧ମ. ତେସଲନିକିୟ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dso)", () => {
		expect(p.parse("୨ ତେସଲନିକିୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨. ତେସଲନିକିୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨ୟ ତେସଲନିକିୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨ୟ. ତେସଲନିକିୟ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dso)", () => {
		expect(p.parse("୧ ତିମତି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧. ତିମତି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧ମ ତିମତି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧ମ. ତିମତି 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dso)", () => {
		expect(p.parse("୨ ତିମତି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨. ତିମତି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨ୟ ତିମତି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨ୟ. ତିମତି 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dso)", () => {
		expect(p.parse("ତିତସ୍‌ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dso)", () => {
		expect(p.parse("ପିଲିମନ୍‌ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dso)", () => {
		expect(p.parse("ଏବ୍‌ରି 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dso)", () => {
		expect(p.parse("ଜାକୁବ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dso)", () => {
		expect(p.parse("୧ ମ ପିତର୍‌ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ମ ପିତର୍‌ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧ମ ମ ପିତର୍‌ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧ମ. ମ ପିତର୍‌ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dso)", () => {
		expect(p.parse("୨ ୟ ପିତର୍‌ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨. ୟ ପିତର୍‌ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨ୟ ୟ ପିତର୍‌ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨ୟ. ୟ ପିତର୍‌ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dso)", () => {
		expect(p.parse("ଜିଉଦା 1:1").osis()).toEqual("Jude.1.1");
	});
});

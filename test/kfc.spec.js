"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kfc.js";

describe("Localized book Rev (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kfc)", () => {
		expect(p.parse("ପ୍ରକାଶିତ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ప్రకటన 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kfc)", () => {
		expect(p.parse("మత్తయి 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ମାତିଉ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kfc)", () => {
		expect(p.parse("మార్కు 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ମାର୍କ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kfc)", () => {
		expect(p.parse("లూకా 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ଲୁକ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kfc)", () => {
		expect(p.parse("1యోహాను 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kfc)", () => {
		expect(p.parse("2యోహాను 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kfc)", () => {
		expect(p.parse("3యోహాను 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("୩ ଜୋହନ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kfc)", () => {
		expect(p.parse("୧ ଜୋହନ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧. ଜୋହନ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kfc)", () => {
		expect(p.parse("୨ ଜୋହନ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨. ଜୋହନ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kfc)", () => {
		expect(p.parse("యోహాను 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ଜୋହନ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kfc)", () => {
		expect(p.parse("ପ୍ରେରିତ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("అపొస్తు 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kfc)", () => {
		expect(p.parse("ରୋମିୟ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("రోమ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kfc)", () => {
		expect(p.parse("୧ କରିନ୍ତିୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କରିନ୍ତିୟ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kfc)", () => {
		expect(p.parse("୨ କରିନ୍ତିୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨. କରିନ୍ତିୟ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kfc)", () => {
		expect(p.parse("1కొరింతి 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kfc)", () => {
		expect(p.parse("2కొరింతి 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kfc)", () => {
		expect(p.parse("కొలొసి 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("କଲସିୟ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kfc)", () => {
		expect(p.parse("ଗାଲାତିୟ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("గలతీ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kfc)", () => {
		expect(p.parse("ଏପିସିୟ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ఎపెసి 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kfc)", () => {
		expect(p.parse("పిలిప్పి 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ପିଲିପିୟ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kfc)", () => {
		expect(p.parse("୧ ତେସଲନିକିୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ତେସଲନିକିୟ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kfc)", () => {
		expect(p.parse("୨ ତେସଲନିକିୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨. ତେସଲନିକିୟ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kfc)", () => {
		expect(p.parse("1దెస్స 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kfc)", () => {
		expect(p.parse("2దెస్స 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kfc)", () => {
		expect(p.parse("୧ ତିମତି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧. ତିମତି 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kfc)", () => {
		expect(p.parse("୨ ତିମତି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨. ତିମତି 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kfc)", () => {
		expect(p.parse("1తిమోతి 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kfc)", () => {
		expect(p.parse("2తిమోతి 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kfc)", () => {
		expect(p.parse("ତିତସ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("తీతు 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kfc)", () => {
		expect(p.parse("ପିଲିମନ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("పిలొమో 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kfc)", () => {
		expect(p.parse("ଏବ୍ରି 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ఎబ్రి 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kfc)", () => {
		expect(p.parse("యాకోబు 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ଜାକୁବ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kfc)", () => {
		expect(p.parse("୧ ପିତର 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ପିତର 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 1Pet (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kfc)", () => {
		expect(p.parse("1పేతురు 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kfc)", () => {
		expect(p.parse("2పేతురు 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kfc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kfc)", () => {
		expect(p.parse("ଜିହୁଦା 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("యూదా 1:1").osis()).toEqual("Jude.1.1");
	});
});

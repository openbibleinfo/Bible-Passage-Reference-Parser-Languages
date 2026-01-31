"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/aph.js";

describe("Localized book Rev (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (aph)", () => {
		expect(p.parse("पारकास 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("पारका 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (aph)", () => {
		expect(p.parse("मात्‌ति 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मात्‌ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (aph)", () => {
		expect(p.parse("मारकुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मार 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (aph)", () => {
		expect(p.parse("लुका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लुक् 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (aph)", () => {
		expect(p.parse("१ युहान्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ युह 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युहान्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युह 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (aph)", () => {
		expect(p.parse("२ युहान्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ युह 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युहान्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युह 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (aph)", () => {
		expect(p.parse("३ युहान्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३ युह 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. युहान्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. युह 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (aph)", () => {
		expect(p.parse("युहान्‍ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("युह 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (aph)", () => {
		expect(p.parse("मुलिचेला टोॽवा 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("मुलिचेला 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (aph)", () => {
		expect(p.parse("रोमि 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (aph)", () => {
		expect(p.parse("१ कोरिन्‌थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ को 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरिन्‌थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. को 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (aph)", () => {
		expect(p.parse("२ कोरिन्‌थि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ को 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरिन्‌थि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. को 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (aph)", () => {
		expect(p.parse("कालास्‌सि 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("काल 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (aph)", () => {
		expect(p.parse("गालाति 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गाल 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (aph)", () => {
		expect(p.parse("एफिसि 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("एफि 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (aph)", () => {
		expect(p.parse("फिलिप्‌पि 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (aph)", () => {
		expect(p.parse("१ थेसालोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थेसा 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेसालोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेसा 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (aph)", () => {
		expect(p.parse("२ थेसालोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थेसा 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेसालोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेसा 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (aph)", () => {
		expect(p.parse("१ तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ ति 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. ति 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (aph)", () => {
		expect(p.parse("२ तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ ति 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. ति 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (aph)", () => {
		expect(p.parse("तितास 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ति 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (aph)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (aph)", () => {
		expect(p.parse("हिब्‍रु 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("हिब 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (aph)", () => {
		expect(p.parse("याकुब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याक 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (aph)", () => {
		expect(p.parse("१ पाटरुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पाटरु 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पाटरुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पाटरु 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (aph)", () => {
		expect(p.parse("२ पाटरुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पाटरु 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पाटरुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पाटरु 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (aph)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (aph)", () => {
		expect(p.parse("याहुदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("याहु 1:1").osis()).toEqual("Jude.1.1");
	});
});

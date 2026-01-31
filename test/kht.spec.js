"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kht.js";

describe("Localized book Rev (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kht)", () => {
		expect(p.parse("ၿျႃၻိက︀်ႉ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kht)", () => {
		expect(p.parse("မ︀တ︀်တ︀ႄး 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kht)", () => {
		expect(p.parse("မ︀ႃက︀ု 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kht)", () => {
		expect(p.parse("လ︀ုက︀ႃ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kht)", () => {
		expect(p.parse("ယ︀ေႃးꩭၢꩫ︀် ႑ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kht)", () => {
		expect(p.parse("ယ︀ေႃးꩭၢꩫ︀် ႒ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kht)", () => {
		expect(p.parse("ယ︀ေႃးꩭၢꩫ︀် ႓ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kht)", () => {
		expect(p.parse("ယ︀ေႃးꩭၢꩫ︀် 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kht)", () => {
		expect(p.parse("ထဝ်ꩡ︀တ︀်ႉၵ︀ဝ် 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kht)", () => {
		expect(p.parse("ရ︀ေႃမ︀ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kht)", () => {
		expect(p.parse("က︀ေႃရ︀ိꩫ︀်တ︀ု ႑ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kht)", () => {
		expect(p.parse("က︀ေႃရ︀ိꩫ︀်တ︀ု ႒ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kht)", () => {
		expect(p.parse("က︀ေႃလ︀ေႃတ︀ႄ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kht)", () => {
		expect(p.parse("က︀လ︀ႃတ︀ိ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kht)", () => {
		expect(p.parse("ဢ︀ေၸ︀ႅတ︀် 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kht)", () => {
		expect(p.parse("ၸ︀ိလ︀ိပ︀်ပ︀ၢႆ︀ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kht)", () => {
		expect(p.parse("တ︀ႅတ︀်ꩬ︀ႃလ︀ေႃꩫ︀ိက︀် ႑ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kht)", () => {
		expect(p.parse("တ︀ႅတ︀်ꩬ︀ႃလ︀ေႃꩫ︀ိက︀် ႒ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kht)", () => {
		expect(p.parse("တ︀ိမ︀ေႃတ︀ေ ႑ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kht)", () => {
		expect(p.parse("တ︀ိမ︀ေႃတ︀ေ ႒ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kht)", () => {
		expect(p.parse("တ︀ိတ︀ု 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kht)", () => {
		expect(p.parse("ၸ︀ိလ︀ေမ︀ုꩫ︀် 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kht)", () => {
		expect(p.parse("ꩭေပ︀ရ︀ူး 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kht)", () => {
		expect(p.parse("ယ︀ႃက︀ု 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kht)", () => {
		expect(p.parse("ပ︀ေတ︀ရ︀ု ႑ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kht)", () => {
		expect(p.parse("ပ︀ေတ︀ရ︀ု ႒ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kht)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kht)", () => {
		expect(p.parse("ယ︀ုတ︀ 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/aeb.js";

describe("Localized book Rev (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (aeb)", () => {
		expect(p.parse("الرُّؤْيَا 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (aeb)", () => {
		expect(p.parse("مَتَّى 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (aeb)", () => {
		expect(p.parse("مُرْقُسْ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (aeb)", () => {
		expect(p.parse("لُوقَا 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (aeb)", () => {
		expect(p.parse("يُوحَنَّا الأُولَى 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (aeb)", () => {
		expect(p.parse("يُوحَنَّا الثَّانْيَة 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (aeb)", () => {
		expect(p.parse("يُوحَنَّا الثَّالْثَة 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (aeb)", () => {
		expect(p.parse("يُوحَنَّا 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (aeb)", () => {
		expect(p.parse("أَعْمَالْ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (aeb)", () => {
		expect(p.parse("رُومَا 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (aeb)", () => {
		expect(p.parse("كُورِنْثُوسْ الأُولَى 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (aeb)", () => {
		expect(p.parse("كُورِنْثُوسْ الثَّانْيَة 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (aeb)", () => {
		expect(p.parse("كُولُوسِي 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (aeb)", () => {
		expect(p.parse("غَلَاطْيَة 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (aeb)", () => {
		expect(p.parse("أَفَسُسْ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (aeb)", () => {
		expect(p.parse("فِيلِپِّي 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (aeb)", () => {
		expect(p.parse("تْسَالُونِيكِي الأُولَى 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (aeb)", () => {
		expect(p.parse("تْسَالُونِيكِي الثَّانْيَة 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (aeb)", () => {
		expect(p.parse("تِيمُوثَاوُسْ الأُولَى 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (aeb)", () => {
		expect(p.parse("تِيمُوثَاوُسْ الثَّانْيَة 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (aeb)", () => {
		expect(p.parse("تِيطُسْ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (aeb)", () => {
		expect(p.parse("فِلِيمُونْ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (aeb)", () => {
		expect(p.parse("العِبْرَانِيِّينْ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (aeb)", () => {
		expect(p.parse("يَعْقُوبْ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (aeb)", () => {
		expect(p.parse("بُطْرُسْ الأُولَى 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (aeb)", () => {
		expect(p.parse("بُطْرُسْ الثَّانْيَة 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (aeb)", () => {
		expect(p.parse("يَهُوذَا 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (aeb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (aeb)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("يُوحَنَّا الأُولَى - يُوحَنَّا الثَّالْثَة").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("يُوحَنَّا الأُولَى – يُوحَنَّا الثَّالْثَة").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("يُوحَنَّا الأُولَى — يُوحَنَّا الثَّالْثَة").osis()).toEqual("1John.1-3John.1");
	});
});

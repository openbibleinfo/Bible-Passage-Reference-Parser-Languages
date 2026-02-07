"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/khm.js";

describe("Localized book Gen (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (khm)", () => {
		expect(p.parse("កំណើត​ពិភព​លោក 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("លោកុ‌ប្បត្តិ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("លោកុប្បត្តិ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("លោកុ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("កណ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("លប 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (khm)", () => {
		expect(p.parse("និក្ខមនំ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("សេរី‌ភាព 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("នក 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("សភ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (khm)", () => {
		expect(p.parse("លេវី‌វិន័យ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("លេវីវិន័យ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("លវ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (khm)", () => {
		expect(p.parse("ជំរឿន​ប្រជាជន 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ជន‌គណនា 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ជនគណនា 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ជគ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ជរ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (khm)", () => {
		expect(p.parse("បរិទេវ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("សំណោក 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("បរ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (khm)", () => {
		expect(p.parse("Revelation 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("វិវរណៈ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("វិវរណ: 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("វិវរណ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("វវ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (khm)", () => {
		expect(p.parse("ចោទិយ‌កថា 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ទុតិយកថា 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ចក 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ទក 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (khm)", () => {
		expect(p.parse("យ៉ូស្វេ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("យស 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (khm)", () => {
		expect(p.parse("ពួក​ចៅ‌ហ្វាយ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ពួក​ចៅហ្វាយ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ចៅហ្វាយ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ចហ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (khm)", () => {
		expect(p.parse("នាង​រស់ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("នាងរស់ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("រស់ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (khm)", () => {
		expect(p.parse("ណាពី​អេសាយ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("អេសាយ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("អេសា 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("អស 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (khm)", () => {
		expect(p.parse("1 សាំ‌យូ‌អែល 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 សាំយូ‌អែល 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 សាំយូអែល 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 សយ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. សាំ‌យូ‌អែល 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. សាំយូ‌អែល 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. សាំយូអែល 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. សយ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("១ សាំ‌យូ‌អែល 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("១ សាំយូ‌អែល 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("១ សាំយូអែល 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("១ សយ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("១. សាំ‌យូ‌អែល 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("១. សាំយូ‌អែល 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("១. សាំយូអែល 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("១. សយ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (khm)", () => {
		expect(p.parse("2 សាំ‌យូ‌អែល 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 សាំយូ‌អែល 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 សាំយូអែល 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 សយ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. សាំ‌យូ‌អែល 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. សាំយូ‌អែល 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. សាំយូអែល 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. សយ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("២ សាំ‌យូ‌អែល 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("២ សាំយូ‌អែល 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("២ សាំយូអែល 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("២ សយ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("២. សាំ‌យូ‌អែល 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("២. សាំយូ‌អែល 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("២. សាំយូអែល 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("២. សយ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (khm)", () => {
		expect(p.parse("ណាពី​សាំយូ‌អែល ទី ១ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("១ណសយ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("១សយ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (khm)", () => {
		expect(p.parse("ណាពី​សាំយូ‌អែល ទី ២ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("២ណសយ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("២សយ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (khm)", () => {
		expect(p.parse("1 ពង្សាវ‌តារ‌ក្សត្រ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ពង្សាវតារក្សត្រ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ពង្ស 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ពង្សាវ‌តារ‌ក្សត្រ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ពង្សាវតារក្សត្រ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ពង្ស 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("១ ពង្សាវ‌តារ‌ក្សត្រ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("១ ពង្សាវតារក្សត្រ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("១ ពង្ស 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("១. ពង្សាវ‌តារ‌ក្សត្រ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("១. ពង្សាវតារក្សត្រ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("១. ពង្ស 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (khm)", () => {
		expect(p.parse("2 ពង្សាវ‌តារ‌ក្សត្រ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ពង្សាវតារក្សត្រ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ពង្ស 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ពង្សាវ‌តារ‌ក្សត្រ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ពង្សាវតារក្សត្រ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ពង្ស 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("២ ពង្សាវ‌តារ‌ក្សត្រ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("២ ពង្សាវតារក្សត្រ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("២ ពង្ស 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("២. ពង្សាវ‌តារ‌ក្សត្រ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("២. ពង្សាវតារក្សត្រ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("២. ពង្ស 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (khm)", () => {
		expect(p.parse("ពង្សាវតារ‌ក្សត្រ ទី ១ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("១ពង្ស 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (khm)", () => {
		expect(p.parse("ពង្សាវតារ‌ក្សត្រ​ទី ២ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("២ពង្ស 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (khm)", () => {
		expect(p.parse("របា‌ក្សត្រ ទី​១ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("១របា 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (khm)", () => {
		expect(p.parse("របា‌ក្សត្រ ទី​២ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("២របា 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (khm)", () => {
		expect(p.parse("1 របា‌ក្សត្រ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 របាក្សត្រ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 របា 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. របា‌ក្សត្រ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. របាក្សត្រ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. របា 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("១ របា‌ក្សត្រ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("១ របាក្សត្រ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("១ របា 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("១. របា‌ក្សត្រ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("១. របាក្សត្រ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("១. របា 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (khm)", () => {
		expect(p.parse("2 របា‌ក្សត្រ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 របាក្សត្រ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 របា 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. របា‌ក្សត្រ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. របាក្សត្រ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. របា 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("២ របា‌ក្សត្រ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("២ របាក្សត្រ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("២ របា 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("២. របា‌ក្សត្រ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("២. របាក្សត្រ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("២. របា 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (khm)", () => {
		expect(p.parse("ណាពី​អែសរ៉ា 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("អែសរ៉ា 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("អរ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (khm)", () => {
		expect(p.parse("ណាពី​នេហេ‌មា 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("នេហេ‌មា 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("នេហេមា 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("នហ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (khm)", () => {
		expect(p.parse("នាង​អេស‌ធើរ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("នាង​អេសធើរ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("នាងអេសធើរ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("អធ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (khm)", () => {
		expect(p.parse("ណាពី​អៃយ៉ូប 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("យ៉ូប 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (khm)", () => {
		expect(p.parse("គីតាប‌សាបូរ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ទំនុកតម្កើង 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ទំនុកដំកើង 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ទំនុក 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ទំន 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (khm)", () => {
		expect(p.parse("សុភា‌សិត 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("សុភាសិត 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("សុភា 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("សុភ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (khm)", () => {
		expect(p.parse("សាស្ដា 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("សាស្តា 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("តួន 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("សស 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (khm)", () => {
		expect(p.parse("បទ​ចម្រៀង​សាឡូម៉ូន 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("បទចម្រៀង 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("បទ​ចំរៀង 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("បច 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (khm)", () => {
		expect(p.parse("ណាពី​យេរេមា 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("យេរេ‌មា 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("យេរេមា 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("យរ 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (khm)", () => {
		expect(p.parse("ណាពី​អេសេ‌គាល 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("អេ‌សេ‌គាល 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("អេសេ‌គាល 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("អេសេគាល 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("អគ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (khm)", () => {
		expect(p.parse("ណាពី​ដានី‌យ៉ែល 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ដានី‌យ៉ែល 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ដានីយ៉ែល 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ដានីយ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ដន 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (khm)", () => {
		expect(p.parse("ណាពី​ហូសេ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ហូសេ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ហស 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (khm)", () => {
		expect(p.parse("ណាពី​យ៉ូអែល 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("យ៉ូអែល 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("យអ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (khm)", () => {
		expect(p.parse("ណាពី​អេម៉ុស 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("អេម៉ុស 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("អម 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (khm)", () => {
		expect(p.parse("ណាពី​អូបា‌ឌា 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("អូបា‌ឌា 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("អូបាឌា 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("អឌ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (khm)", () => {
		expect(p.parse("ណាពី​យូណើស 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("យ៉ូណាស 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("យណ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (khm)", () => {
		expect(p.parse("ណាពី​មីកា 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("មីកា 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("មីក 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (khm)", () => {
		expect(p.parse("ណាពី​ណាហ៊ូម 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ណាហ៊ុម 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ណាហ៊ូម 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ណហ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (khm)", () => {
		expect(p.parse("ណាពី​ហាបា‌គូក 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ហាបាគុក 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ហាបាគូក 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ហគ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (khm)", () => {
		expect(p.parse("ណាពី​សេផា‌នាស 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("សេផា‌នា 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("សេផានា 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("សផ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (khm)", () => {
		expect(p.parse("ណាពី​ហាកាយ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ហាកាយ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ហក 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (khm)", () => {
		expect(p.parse("ណាពី​សាកា‌រីយ៉ា 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("សាការី 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("សាកា 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("សក 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (khm)", () => {
		expect(p.parse("ណាពី​ម៉ាឡា‌គី 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ម៉ាឡា‌គី 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ម៉ាឡាគី 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ម៉ាឡា 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("មគ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (khm)", () => {
		expect(p.parse("Matthew 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ម៉ាថាយ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ម៉ាថា 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("មថ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (khm)", () => {
		expect(p.parse("ម៉ាកុស 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ម៉ាកុ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("មក 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (khm)", () => {
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("លូកា 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("លក 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (khm)", () => {
		expect(p.parse("យ៉ូហាន ទី១ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("១​យ៉ូហាន 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("១យ៉ូ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("១យហ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (khm)", () => {
		expect(p.parse("យ៉ូហាន ទី២ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("២​យ៉ូហាន 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("២យ៉ូ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("២យហ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (khm)", () => {
		expect(p.parse("យ៉ូហាន ទី៣ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("៣ យ៉ូហាន 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("៣​យ៉ូហាន 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("៣ យហ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("៣យ៉ូ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("៣យហ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (khm)", () => {
		expect(p.parse("1 យ៉ូហាន 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 យហ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. យ៉ូហាន 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. យហ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("១ យ៉ូហាន 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("១ John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("១ យហ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("១. យ៉ូហាន 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("១. John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("១. យហ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (khm)", () => {
		expect(p.parse("2 យ៉ូហាន 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 យហ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. យ៉ូហាន 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. យហ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("២ យ៉ូហាន 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("២ John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("២ យហ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("២. យ៉ូហាន 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("២. John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("២. យហ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (khm)", () => {
		expect(p.parse("យ៉ះយ៉ា 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("យ៉ូហាន 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("យ៉ូហា 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("យយ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("យហ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (khm)", () => {
		expect(p.parse("Acts of the Apostles 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("កិច្ចការ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("កិច្ចកា 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("កក 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (khm)", () => {
		expect(p.parse("Romans 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("រ៉ូម 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (khm)", () => {
		expect(p.parse("កូរិនថូស ទី១ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("១​កូរិន‌ថូស 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("១កូរិន 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("១ករ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (khm)", () => {
		expect(p.parse("កូរិនថូស ទី២ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("២​កូរិន‌ថូស 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("២កូរិន 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ករ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("២ករ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (khm)", () => {
		expect(p.parse("1 Corinthians 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 កូរិន‌ថូស 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 កូរិនថូស 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ករ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthians 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. កូរិន‌ថូស 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. កូរិនថូស 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ករ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("១ Corinthians 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("១ កូរិន‌ថូស 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("១ កូរិនថូស 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("១ ករ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("១. Corinthians 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("១. កូរិន‌ថូស 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("១. កូរិនថូស 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("១. ករ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (khm)", () => {
		expect(p.parse("2 Corinthians 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 កូរិន‌ថូស 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 កូរិនថូស 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ករ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthians 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. កូរិន‌ថូស 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. កូរិនថូស 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ករ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("២ Corinthians 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("២ កូរិន‌ថូស 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("២ កូរិនថូស 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("២ ករ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("២. Corinthians 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("២. កូរិន‌ថូស 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("២. កូរិនថូស 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("២. ករ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (khm)", () => {
		expect(p.parse("Colossians 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("កូល៉ុស 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("កូឡុស 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("កូឡូស 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("កូឡុ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("កូឡ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("កល 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (khm)", () => {
		expect(p.parse("Galatians 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("កាឡា‌ទី 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("កាឡាទី 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("កាឡា 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("កាឡ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (khm)", () => {
		expect(p.parse("Ephesians 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("អេភេ‌សូ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("អេភេសូរ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("អេភេសូ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("អេភេ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("អភ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (khm)", () => {
		expect(p.parse("Philippians 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ភីលីព 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ភីល 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (khm)", () => {
		expect(p.parse("ថែស្សាឡូនីច ទី១ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១​ថេស្សា‌ឡូនិក 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១ថែស 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១ថស 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (khm)", () => {
		expect(p.parse("ថែស្សាឡូនីច ទី២ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២​ថេស្សា‌ឡូនិក 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២ថែស 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២ថស 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (khm)", () => {
		expect(p.parse("1 Thessalonians 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ថែស្សា‌ឡូ‌នីច 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ថេស្សាឡូនិក 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ថែស្សាឡូនីច 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ថស 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonians 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ថែស្សា‌ឡូ‌នីច 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ថេស្សាឡូនិក 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ថែស្សាឡូនីច 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ថស 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១ Thessalonians 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១ ថែស្សា‌ឡូ‌នីច 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១ ថេស្សាឡូនិក 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១ ថែស្សាឡូនីច 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១ ថស 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១. Thessalonians 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១. ថែស្សា‌ឡូ‌នីច 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១. ថេស្សាឡូនិក 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១. ថែស្សាឡូនីច 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១. ថស 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (khm)", () => {
		expect(p.parse("2 Thessalonians 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ថែស្សា‌ឡូ‌នីច 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ថេស្សាឡូនិក 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ថែស្សាឡូនីច 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ថស 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonians 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ថែស្សា‌ឡូ‌នីច 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ថេស្សាឡូនិក 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ថែស្សាឡូនីច 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ថស 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២ Thessalonians 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២ ថែស្សា‌ឡូ‌នីច 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២ ថេស្សាឡូនិក 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២ ថែស្សាឡូនីច 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២ ថស 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២. Thessalonians 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២. ថែស្សា‌ឡូ‌នីច 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២. ថេស្សាឡូនិក 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២. ថែស្សាឡូនីច 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២. ថស 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (khm)", () => {
		expect(p.parse("ធីម៉ូថេ ទី១ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("១​ធីម៉ូ‌ថេ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("១ធីម៉ូ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("១ធម 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (khm)", () => {
		expect(p.parse("ធីម៉ូថេ ទី២ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("២​ធីម៉ូ‌ថេ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("២ធីម៉ូ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("២ធម 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (khm)", () => {
		expect(p.parse("1 Timothy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ធីម៉ូថេ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ធម 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ធីម៉ូថេ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ធម 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("១ Timothy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("១ ធីម៉ូថេ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("១ ធម 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("១. Timothy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("១. ធីម៉ូថេ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("១. ធម 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (khm)", () => {
		expect(p.parse("2 Timothy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ធីម៉ូថេ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ធម 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ធីម៉ូថេ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ធម 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("២ Timothy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("២ ធីម៉ូថេ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("២ ធម 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("២. Timothy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("២. ធីម៉ូថេ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("២. ធម 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (khm)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ទីតុស 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ទត 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (khm)", () => {
		expect(p.parse("ភីលេ‌ម៉ូន 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ភីលេម៉ូន 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ភីលេ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ភល 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (khm)", () => {
		expect(p.parse("ហេ‌ព្រើរ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrews 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ហេព្រើរ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ហេប្រឺ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ហេព្រ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ហប 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ហព 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (khm)", () => {
		expect(p.parse("យ៉ាកកូប 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("យ៉ាកុប 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("James 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("យ៉ាកុ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("យក 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (khm)", () => {
		expect(p.parse("ពេត្រុស ទី១ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("១​ពេត្រុស 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("១ពត្រ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("១ពេ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (khm)", () => {
		expect(p.parse("ពេត្រុស ទី២ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("២​ពេត្រុស 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("២ពត្រ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("២ពេ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (khm)", () => {
		expect(p.parse("1 ពេត្រុស 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ពត្រ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ពេត្រុស 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ពត្រ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("១ ពេត្រុស 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("១ Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("១ ពត្រ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("១. ពេត្រុស 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("១. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("១. ពត្រ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (khm)", () => {
		expect(p.parse("2 ពេត្រុស 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ពត្រ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ពេត្រុស 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ពត្រ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("២ ពេត្រុស 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("២ Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("២ ពត្រ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("២. ពេត្រុស 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("២. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("២. ពត្រ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (khm)", () => {
		expect(p.parse("យូដាស 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("យូដា 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("យដ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle ranges (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (khm)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
	});
});
describe("Parser helper should handle chapters (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (khm)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
	});
});
describe("Parser helper should handle book ranges (khm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (khm)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("យ៉ូហាន ទី១ - យ៉ូហាន ទី៣").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("យ៉ូហាន ទី១ – យ៉ូហាន ទី៣").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("យ៉ូហាន ទី១ — យ៉ូហាន ទី៣").osis()).toEqual("1John.1-3John.1");
	});
});

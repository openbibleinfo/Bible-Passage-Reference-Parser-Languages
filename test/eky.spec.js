"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/eky.js";

describe("Localized book Gen (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (eky)", () => {
		expect(p.parse("เห่ขุทวาลู่ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (eky)", () => {
		expect(p.parse("ꤒꤢꤩ꤬ꤘꤣꤧꤜꤥ꤭ꤓꤢꤧ꤬ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("เตเด๊อะโลแถ่ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (eky)", () => {
		expect(p.parse("มัทธิว 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ꤗꤢꤞꤢꤧ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (eky)", () => {
		expect(p.parse("มาระโก 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ꤗꤢ꤬ꤊꤢꤨ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (eky)", () => {
		expect(p.parse("ꤜꤢꤨꤊꤢ꤬ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ลูกา 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (eky)", () => {
		expect(p.parse("ยอห์น อาเหร่อเล๊อ ต๊าบ่า 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ꤛꤥ꤭ꤟꤢ꤬ ꤢ꤬ꤚ꤫ꤣꤧ꤬ꤜꤣ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (eky)", () => {
		expect(p.parse("ꤛꤥ꤭ꤟꤢ꤬ ꤔꤣꤧ꤭ꤙꤢ꤬ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ยอห์น เนอบ่า ต๊าบ่า 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (eky)", () => {
		expect(p.parse("ꤛꤥ꤭ꤟꤢ꤬ ꤞꤥ꤭ꤙꤢ꤬ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ยอห์น โซบ่า ต๊าบ่า 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (eky)", () => {
		expect(p.parse("ꤛꤥ꤭ꤟꤢ꤬ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ยอห์น 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (eky)", () => {
		expect(p.parse("ꤖꤚꤢꤩ꤬ꤘꤥ꤬ꤔꤢꤧ꤭ꤖꤢꤨ ꤒꤣꤧ꤬ꤟꤢꤩ꤬ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("เพรโด่แนพู๊ เต๊เห่ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (eky)", () => {
		expect(p.parse("ꤚꤥꤗꤢꤩ꤬ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("โรม 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (eky)", () => {
		expect(p.parse("ꤊꤢ꤬ꤚꤤ꤬ꤞꤢꤨ꤬ ꤢ꤬ꤚ꤫ꤣꤧ꤬ꤜꤣ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("โครินธ์ อาเหร่อเล๊อ ต๊าบ่า 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (eky)", () => {
		expect(p.parse("ꤊꤢ꤬ꤚꤤ꤬ꤞꤢꤨ꤬ ꤔꤣꤧ꤭ꤙꤢ꤬ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("โครินธ์ เนอบ่า ต๊าบ่า 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (eky)", () => {
		expect(p.parse("ꤊꤢ꤬ꤜꤢꤪ꤬ꤎꤢꤧ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("โคโลสี 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (eky)", () => {
		expect(p.parse("กาลาเทีย 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ꤊꤢ꤬ꤜꤢ꤬ꤒꤤ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (eky)", () => {
		expect(p.parse("ꤢꤩꤖꤢꤩꤎꤢꤨ꤬ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("เอเฟซัส 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (eky)", () => {
		expect(p.parse("ꤖꤤꤜꤤ꤬ꤕꤤ꤬ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ฟีลิบปี 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ฟีลิปปี 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (eky)", () => {
		expect(p.parse("เธสะโลนิกา อาเหร่อเล๊อ ต๊าบ่า 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ꤞꤢꤩ꤬ꤎꤢ꤬ꤜꤢ꤬ꤔꤤ ꤢ꤬ꤚ꤫ꤣꤧ꤬ꤜꤣ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (eky)", () => {
		expect(p.parse("ꤞꤢꤩ꤬ꤎꤢ꤬ꤜꤢ꤬ꤔꤤ ꤔꤣꤧ꤭ꤙꤢ꤬ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("เธสะโลนิกา เนอบ่า ต๊าบ่า 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (eky)", () => {
		expect(p.parse("ꤒꤤ꤬ꤗꤢ꤬ꤞꤢꤩ꤬ ꤢ꤬ꤚ꤫ꤣꤧ꤬ꤜꤣ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ทิโมธี อาเหร่อเล๊อ ต๊าบ่า 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (eky)", () => {
		expect(p.parse("ꤒꤤ꤬ꤗꤢ꤬ꤞꤢꤩ꤬ ꤔꤣꤧ꤭ꤙꤢ꤬ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ทิโมธี เนอบ่า ต๊าบ่า 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (eky)", () => {
		expect(p.parse("ติตัส 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ꤒꤤꤒꤢꤨ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (eky)", () => {
		expect(p.parse("ꤖꤤꤜꤢ꤬ꤗꤥ꤬ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ฟีเลโมน 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (eky)", () => {
		expect(p.parse("ꤟꤤꤙꤚꤢꤨ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ฮีบรู 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (eky)", () => {
		expect(p.parse("ꤡꤛꤢꤩ꤭ꤗꤢ꤬ꤎꤣ꤬ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ยากอบ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (eky)", () => {
		expect(p.parse("ꤕꤢꤩ꤬ꤒꤢ꤬ꤚꤢꤨ ꤢ꤬ꤚ꤫ꤣꤧ꤬ꤜꤣ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("เปโตร อาเหร่อเล๊อ ต๊าบ่า 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (eky)", () => {
		expect(p.parse("ꤕꤢꤩ꤬ꤒꤢ꤬ꤚꤢꤨ ꤔꤣꤧ꤭ꤙꤢ꤬ ꤒꤣ꤬ꤙꤢ꤬ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("เปโตร เนอบ่า ต๊าบ่า 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (eky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (eky)", () => {
		expect(p.parse("ยูดาห์ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ꤛꤢꤨꤘꤢ꤬ 1:1").osis()).toEqual("Jude.1.1");
	});
});

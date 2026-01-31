"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bzi.js";

describe("Localized book Rev (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bzi)", () => {
		expect(p.parse("วิวรณ์ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("วว. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bzi)", () => {
		expect(p.parse("มัทธิว 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("มธ. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bzi)", () => {
		expect(p.parse("มาระโก 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("มก. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bzi)", () => {
		expect(p.parse("ลูกา 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ลก. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bzi)", () => {
		expect(p.parse("1 ยอห์น 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ยน. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ยอห์น 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ยน. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bzi)", () => {
		expect(p.parse("2 ยอห์น 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ยน. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ยอห์น 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ยน. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bzi)", () => {
		expect(p.parse("3 ยอห์น 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ยน. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ยอห์น 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ยน. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bzi)", () => {
		expect(p.parse("ยอห์น 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ยน. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bzi)", () => {
		expect(p.parse("กิจการ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("กจ. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bzi)", () => {
		expect(p.parse("รม. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("โรม 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bzi)", () => {
		expect(p.parse("1 โครินธ์ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 คธ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. โครินธ์ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. คธ. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bzi)", () => {
		expect(p.parse("2 โครินธ์ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 คร. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. โครินธ์ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. คร. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bzi)", () => {
		expect(p.parse("โคโลสี 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("คส. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bzi)", () => {
		expect(p.parse("กาลาเทีย 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("กท. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bzi)", () => {
		expect(p.parse("เอเฟซัส 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("อฟ. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bzi)", () => {
		expect(p.parse("ฟีลิปปี 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ฟป. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bzi)", () => {
		expect(p.parse("1 เธสะ‌โลนิกา 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. เธสะ‌โลนิกา 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bzi)", () => {
		expect(p.parse("1ธส. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bzi)", () => {
		expect(p.parse("2 เธสะโลนิกา 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ธส. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. เธสะโลนิกา 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ธส. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bzi)", () => {
		expect(p.parse("1 ทิโมธี 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ทธ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ทิโมธี 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ทธ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bzi)", () => {
		expect(p.parse("2 ทิโมธี 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ทธ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ทิโมธี 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ทธ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bzi)", () => {
		expect(p.parse("ทิตัส 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ทต. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bzi)", () => {
		expect(p.parse("ฟีเลโมน 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ฟม. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bzi)", () => {
		expect(p.parse("ฮีบรู 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ฮบ. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bzi)", () => {
		expect(p.parse("ยากอบ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ยก. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bzi)", () => {
		expect(p.parse("1 เปโตร 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ปต. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. เปโตร 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ปต. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bzi)", () => {
		expect(p.parse("2 เปโตร 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ปต. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. เปโตร 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ปต. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bzi)", () => {
		expect(p.parse("ยูดา 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ยด. 1:1").osis()).toEqual("Jude.1.1");
	});
});

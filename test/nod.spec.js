"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nod.js";

describe("Localized book Rev (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nod)", () => {
		expect(p.parse("วิวรณ์ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("วว. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nod)", () => {
		expect(p.parse("มัทธิว 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("มธ. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nod)", () => {
		expect(p.parse("มาระโก 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("มก. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nod)", () => {
		expect(p.parse("ลูก๋า 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ลก. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nod)", () => {
		expect(p.parse("1 ยอห์น 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ยน. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ยอห์น 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ยน. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nod)", () => {
		expect(p.parse("2 ยอห์น 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ยน. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ยอห์น 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ยน. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nod)", () => {
		expect(p.parse("3 ยอห์น 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ยน. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ยอห์น 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ยน. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nod)", () => {
		expect(p.parse("ยอห์น 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ยน. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nod)", () => {
		expect(p.parse("กิจก๋าน 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("กจ. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nod)", () => {
		expect(p.parse("รม. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("โรม 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nod)", () => {
		expect(p.parse("1 โครินธ์ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 คร. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. โครินธ์ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. คร. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nod)", () => {
		expect(p.parse("2 โครินธ์ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 คร. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. โครินธ์ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. คร. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nod)", () => {
		expect(p.parse("โคโลสี 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("คส. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nod)", () => {
		expect(p.parse("กาลาเทีย 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("กท. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nod)", () => {
		expect(p.parse("เอเฟซัส 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("อฟ. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nod)", () => {
		expect(p.parse("ฟีลิปปี 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ฟป. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nod)", () => {
		expect(p.parse("1 เธสะโลนิก๋า 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ธส. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. เธสะโลนิก๋า 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ธส. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nod)", () => {
		expect(p.parse("2 เธสะโลนิก๋า 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ธส. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. เธสะโลนิก๋า 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ธส. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nod)", () => {
		expect(p.parse("1 ทิโมธี 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ทธ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ทิโมธี 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ทธ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nod)", () => {
		expect(p.parse("2 ทิโมธี 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ทธ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ทิโมธี 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ทธ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nod)", () => {
		expect(p.parse("ทิตัส 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ทต. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nod)", () => {
		expect(p.parse("ฟีเลโมน 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ฟม. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nod)", () => {
		expect(p.parse("ฮีบรู 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ฮบ. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nod)", () => {
		expect(p.parse("ยากอบ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ยก. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nod)", () => {
		expect(p.parse("1 เปโตร 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ปต. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. เปโตร 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ปต. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nod)", () => {
		expect(p.parse("2 เปโตร 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ปต. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. เปโตร 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ปต. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nod)", () => {
		expect(p.parse("ยูดา 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ยด. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (nod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (nod)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ยอห์น - 3 ยอห์น").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ยอห์น – 3 ยอห์น").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ยอห์น — 3 ยอห์น").osis()).toEqual("1John.1-3John.1");
	});
});

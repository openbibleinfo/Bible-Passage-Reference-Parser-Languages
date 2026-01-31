"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/brv.js";

describe("Localized book Gen (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (brv)", () => {
		expect(p.parse("ปะทมมะกาน 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ปทก 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (brv)", () => {
		expect(p.parse("อบพะยบ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("อพย 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (brv)", () => {
		expect(p.parse("เลวีนิติ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ลนต 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (brv)", () => {
		expect(p.parse("กันดานวิที 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("กดว 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Rev (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (brv)", () => {
		expect(p.parse("วิวอน 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("วว 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (brv)", () => {
		expect(p.parse("ซะเลยทัมบันยัด 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ซทบ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (brv)", () => {
		expect(p.parse("โยซูวา 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ยซว 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (brv)", () => {
		expect(p.parse("พูตัดซิน 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("พตซ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (brv)", () => {
		expect(p.parse("รูด 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Sam (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (brv)", () => {
		expect(p.parse("1 ซามูเอล 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ซามูเอล 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (brv)", () => {
		expect(p.parse("2 ซามูเอล 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ซามูเอล 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (brv)", () => {
		expect(p.parse("1ซมอ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (brv)", () => {
		expect(p.parse("2ซมอ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Kgs (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (brv)", () => {
		expect(p.parse("2 พงกะซัด 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. พงกะซัด 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (brv)", () => {
		expect(p.parse("2พกซ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book Jonah (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (brv)", () => {
		expect(p.parse("โยนา 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ยนา 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (brv)", () => {
		expect(p.parse("มัดทิว 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("มท 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (brv)", () => {
		expect(p.parse("มาระโก 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("มก 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (brv)", () => {
		expect(p.parse("ลูกา 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ลก 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (brv)", () => {
		expect(p.parse("1ยน 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (brv)", () => {
		expect(p.parse("2ยน 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (brv)", () => {
		expect(p.parse("3 ยอน 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ยน 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (brv)", () => {
		expect(p.parse("1 ยอน 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ยอน 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (brv)", () => {
		expect(p.parse("2 ยอน 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ยอน 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (brv)", () => {
		expect(p.parse("ยอน 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ยน 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (brv)", () => {
		expect(p.parse("กิดจะกาน 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("กจ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (brv)", () => {
		expect(p.parse("โรม 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("รม 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (brv)", () => {
		expect(p.parse("1 โคริน 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. โคริน 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (brv)", () => {
		expect(p.parse("2 โคริน 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. โคริน 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (brv)", () => {
		expect(p.parse("1คร 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (brv)", () => {
		expect(p.parse("2คร 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (brv)", () => {
		expect(p.parse("โคโลซี 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("คล 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (brv)", () => {
		expect(p.parse("กาลาเทีย 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("กท 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (brv)", () => {
		expect(p.parse("เอเพซัด 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("อพ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (brv)", () => {
		expect(p.parse("พีลิบปี 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("พป 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (brv)", () => {
		expect(p.parse("1 เทซะโลนิกา 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. เทซะโลนิกา 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (brv)", () => {
		expect(p.parse("2 เทซะโลนิกา 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. เทซะโลนิกา 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (brv)", () => {
		expect(p.parse("1ทซ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (brv)", () => {
		expect(p.parse("2ทซ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (brv)", () => {
		expect(p.parse("1 ทิโมที 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ทิโมที 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (brv)", () => {
		expect(p.parse("2 ทิโมที 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ทิโมที 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (brv)", () => {
		expect(p.parse("1ทท 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (brv)", () => {
		expect(p.parse("2ทท 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (brv)", () => {
		expect(p.parse("ทิตัด 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ทต 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (brv)", () => {
		expect(p.parse("พีเลโมน 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("พม 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (brv)", () => {
		expect(p.parse("ฮีบรู 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ฮบ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (brv)", () => {
		expect(p.parse("ยากอบ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ยก 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (brv)", () => {
		expect(p.parse("1 เปโตร 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. เปโตร 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (brv)", () => {
		expect(p.parse("2 เปโตร 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. เปโตร 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (brv)", () => {
		expect(p.parse("1ปต 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (brv)", () => {
		expect(p.parse("2ปต 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (brv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (brv)", () => {
		expect(p.parse("ยูดา 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ยด 1:1").osis()).toEqual("Jude.1.1");
	});
});

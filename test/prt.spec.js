"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/prt.js";

describe("Localized book Gen (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (prt)", () => {
		expect(p.parse("เกาตีนา 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("กตน. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (prt)", () => {
		expect(p.parse("อิซราเอล ญาย 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("อซญ. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Num (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (prt)", () => {
		expect(p.parse("อุ ตี แลง 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("อตล. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Rev (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (prt)", () => {
		expect(p.parse("เยซู โตะ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ยซต. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (prt)", () => {
		expect(p.parse("รูด 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Jonah (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (prt)", () => {
		expect(p.parse("โยนา 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ยน 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (prt)", () => {
		expect(p.parse("มัดทิว 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("มท. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (prt)", () => {
		expect(p.parse("มาระโก 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (prt)", () => {
		expect(p.parse("ลูกา 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ลก. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (prt)", () => {
		expect(p.parse("1 ยน. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ยอน 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ยน. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ยอน 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (prt)", () => {
		expect(p.parse("2 ยน. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ยอน 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ยน. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ยอน 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (prt)", () => {
		expect(p.parse("3 ยน. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ยอน 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ยน. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ยอน 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (prt)", () => {
		expect(p.parse("ยอน 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (prt)", () => {
		expect(p.parse("ตัวแทน 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ตยซ. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (prt)", () => {
		expect(p.parse("รม. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("โรม 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (prt)", () => {
		expect(p.parse("1 โคริน 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 โคร. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. โคริน 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. โคร. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (prt)", () => {
		expect(p.parse("2 โคริน 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 โคร. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. โคริน 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. โคร. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (prt)", () => {
		expect(p.parse("โคโลซี 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("คลซ. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (prt)", () => {
		expect(p.parse("กาลาเทีย 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("กลท. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (prt)", () => {
		expect(p.parse("เอเฟซัด 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("อฟซ. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (prt)", () => {
		expect(p.parse("ฟีลิบปี 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ฟลป. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (prt)", () => {
		expect(p.parse("1 เทซะโลนิกา 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ทซก. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. เทซะโลนิกา 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ทซก. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (prt)", () => {
		expect(p.parse("2 เทซะโลนิกา 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ทซก. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. เทซะโลนิกา 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ทซก. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (prt)", () => {
		expect(p.parse("1 ทิโมที 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ทมท 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ทิโมที 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ทมท 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (prt)", () => {
		expect(p.parse("2 ทิโมที 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ทมท. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ทิโมที 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ทมท. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (prt)", () => {
		expect(p.parse("ทีตัด 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ทต. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (prt)", () => {
		expect(p.parse("ฟีลีโมน 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ฟลม. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (prt)", () => {
		expect(p.parse("ฮีบรู 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ฮบ. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (prt)", () => {
		expect(p.parse("ยากอบ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ยก. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (prt)", () => {
		expect(p.parse("1 เปโตร 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ปต. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. เปโตร 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ปต. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (prt)", () => {
		expect(p.parse("2 เปโตร 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ปต. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. เปโตร 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ปต. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (prt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (prt)", () => {
		expect(p.parse("ยูดา 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ยด. 1:1").osis()).toEqual("Jude.1.1");
	});
});

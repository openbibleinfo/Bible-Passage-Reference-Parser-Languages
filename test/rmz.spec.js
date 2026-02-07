"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/rmz.js";

describe("Localized book Rev (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (rmz)", () => {
		expect(p.parse("প্রকাশিত বাক্য 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("প্রকাশিত 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ဗျာဒိတ် 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ဗျာ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (rmz)", () => {
		expect(p.parse("মথি 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("မဿဲ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("မ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (rmz)", () => {
		expect(p.parse("মার্ক 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("မာကု 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("မာ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (rmz)", () => {
		expect(p.parse("လုကာ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("লূক 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("လု 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rmz)", () => {
		expect(p.parse("၁ယောဟန် 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁ယော 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rmz)", () => {
		expect(p.parse("၂ယောဟန် 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂ယော 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (rmz)", () => {
		expect(p.parse("၃ယောဟန် 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("৩ যোহন 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃ယော 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rmz)", () => {
		expect(p.parse("১ যোহন 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১. যোহন 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rmz)", () => {
		expect(p.parse("২ যোহন 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২. যোহন 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (rmz)", () => {
		expect(p.parse("ယောဟန် 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("যোহন 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ယော 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (rmz)", () => {
		expect(p.parse("တမန်တော် 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("প্রেরিত 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("တ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (rmz)", () => {
		expect(p.parse("রোমীয় 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ရောမ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ရော 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rmz)", () => {
		expect(p.parse("১ করিন্থীয় 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১ করি 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১. করিন্থীয় 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১. করি 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rmz)", () => {
		expect(p.parse("২ করিন্থীয় 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২ করি 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২. করিন্থীয় 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২. করি 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rmz)", () => {
		expect(p.parse("၁ကောရိန္သု 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁ကော 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rmz)", () => {
		expect(p.parse("၂ကောရိန္သု 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂ကော 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (rmz)", () => {
		expect(p.parse("ကောလောသဲ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("কলসীয় 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ကော 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("কল 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (rmz)", () => {
		expect(p.parse("গালাতীয় 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ဂါလာတိ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("গালা 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ဂါ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (rmz)", () => {
		expect(p.parse("ইফিষীয় 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ဧဖက် 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ইফি 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ဧ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (rmz)", () => {
		expect(p.parse("ফিলিপীয় 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ဖိလိပ္ပိ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ফিলি 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ဖိ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rmz)", () => {
		expect(p.parse("১ থিষলনীকীয় 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১ থিষ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১. থিষলনীকীয় 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১. থিষ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rmz)", () => {
		expect(p.parse("২ থিষলনীকীয় 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২ থিষ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২. থিষলনীকীয় 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২. থিষ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rmz)", () => {
		expect(p.parse("၁သက်သာလောနိတ် 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁သက် 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rmz)", () => {
		expect(p.parse("၂သက်သာလောနိတ် 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂သက် 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rmz)", () => {
		expect(p.parse("১ তীমথিয় 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১ তীম 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১. তীমথিয় 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১. তীম 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rmz)", () => {
		expect(p.parse("২ তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২ তীম 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২. তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২. তীম 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rmz)", () => {
		expect(p.parse("၁တိမောသေ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁တိ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rmz)", () => {
		expect(p.parse("၂တိမောသေ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂တိ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (rmz)", () => {
		expect(p.parse("တိတု 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("তীত 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("တိ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (rmz)", () => {
		expect(p.parse("ဖိလေမုန် 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ফিলীমন 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ফিলী 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ဖိလေ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (rmz)", () => {
		expect(p.parse("ইব্রীয় 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ဟေဗြဲ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (rmz)", () => {
		expect(p.parse("ယာကုပ် 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("যাকোব 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ယာ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rmz)", () => {
		expect(p.parse("১ পিতর 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("১. পিতর 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rmz)", () => {
		expect(p.parse("২ পিতর 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("২. পিতর 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rmz)", () => {
		expect(p.parse("၁ပေတရု 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁ပေ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rmz)", () => {
		expect(p.parse("၂ပေတရု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂ပေ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (rmz)", () => {
		expect(p.parse("যিহূদা 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ယုဒ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ယု 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (rmz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (rmz)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("၁ယောဟန် - ၃ယောဟန်").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("၁ယောဟန် – ၃ယောဟန်").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("၁ယောဟန် — ၃ယောဟန်").osis()).toEqual("1John.1-3John.1");
	});
});

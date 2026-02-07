"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tvn.js";

describe("Localized book Rev (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tvn)", () => {
		expect(p.parse("ဗျာဒိတ်တော် 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ဗျာ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tvn)", () => {
		expect(p.parse("မဿဲ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("မ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tvn)", () => {
		expect(p.parse("မာကု 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("မာ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tvn)", () => {
		expect(p.parse("လုကာ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("လု 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tvn)", () => {
		expect(p.parse("၁ ယောဟန် 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁ ယော 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁. ယောဟန် 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("၁. ယော 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tvn)", () => {
		expect(p.parse("၂ ယောဟန် 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂ ယော 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂. ယောဟန် 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("၂. ယော 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tvn)", () => {
		expect(p.parse("၃ ယောဟန် 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃ ယော 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃. ယောဟန် 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("၃. ယော 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tvn)", () => {
		expect(p.parse("ယောဟန် 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ယော 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tvn)", () => {
		expect(p.parse("တမန်တော် 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("တ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tvn)", () => {
		expect(p.parse("ရောမ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ရော 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tvn)", () => {
		expect(p.parse("၁ ကောရိန္သု 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁ ကော 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁. ကောရိန္သု 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("၁. ကော 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tvn)", () => {
		expect(p.parse("၂ ကောရိန္သု 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂ ကော 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂. ကောရိန္သု 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("၂. ကော 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tvn)", () => {
		expect(p.parse("ကောလောသဲ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ကော 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tvn)", () => {
		expect(p.parse("ဂလာတိ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ဂလာ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tvn)", () => {
		expect(p.parse("ဧဖက် 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ဧ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tvn)", () => {
		expect(p.parse("ဖိလိပ္ပိ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ဖိ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tvn)", () => {
		expect(p.parse("၁ သက်သာလောနိတ် 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁ သက် 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁. သက်သာလောနိတ် 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("၁. သက် 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tvn)", () => {
		expect(p.parse("၂ သက်သာလောနိတ် 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂ သက် 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂. သက်သာလောနိတ် 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("၂. သက် 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tvn)", () => {
		expect(p.parse("၁ တိမောသေ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁ တိ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁. တိမောသေ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("၁. တိ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tvn)", () => {
		expect(p.parse("၂ တိမောသေ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂ တိ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂. တိမောသေ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("၂. တိ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tvn)", () => {
		expect(p.parse("တိတု 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("တိ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tvn)", () => {
		expect(p.parse("ဖိလေမုန် 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ဖိလေ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tvn)", () => {
		expect(p.parse("ဟေဗြဲ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ဟေ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tvn)", () => {
		expect(p.parse("ယာကုပ် 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ယာ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tvn)", () => {
		expect(p.parse("၁ ပေတရု 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁ ပေ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁. ပေတရု 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("၁. ပေ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tvn)", () => {
		expect(p.parse("၂ ပေတရု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂ ပေ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂. ပေတရု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("၂. ပေ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tvn)", () => {
		expect(p.parse("ယုဒ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ယု 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (tvn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (tvn)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("၁ ယောဟန် - ၃ ယောဟန်").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("၁ ယောဟန် – ၃ ယောဟန်").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("၁ ယောဟန် — ၃ ယောဟန်").osis()).toEqual("1John.1-3John.1");
	});
});

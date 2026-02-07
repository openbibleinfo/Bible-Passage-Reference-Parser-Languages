"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/yba.js";

describe("Localized book Rev (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (yba)", () => {
		expect(p.parse("Ode Hi̍yɛchɛ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ps (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (yba)", () => {
		expect(p.parse("Ejē Ɔkɔ̄kā 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Matt (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (yba)", () => {
		expect(p.parse("Ima̍tiyu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (yba)", () => {
		expect(p.parse("Ima̍aki 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (yba)", () => {
		expect(p.parse("Ilu̍uku 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (yba)", () => {
		expect(p.parse("1 Ijɔ̍ɔn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ijɔ̍ɔn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (yba)", () => {
		expect(p.parse("I Ijɔ̍ɔn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("I. Ijɔ̍ɔn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (yba)", () => {
		expect(p.parse("III Ijɔ̍ɔn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Ijɔ̍ɔn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (yba)", () => {
		expect(p.parse("Ijɔ̍ɔn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (yba)", () => {
		expect(p.parse("U̍ku̍rɔ̍ yī Alɛrɔ̄ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (yba)", () => {
		expect(p.parse("Aliro̍om 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (yba)", () => {
		expect(p.parse("1 Alikɔ̍rīnti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Alikɔ̍rīnti 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (yba)", () => {
		expect(p.parse("I Alikɔ̍rīnti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("I. Alikɔ̍rīnti 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (yba)", () => {
		expect(p.parse("Alikɔlɔ̍sāyi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (yba)", () => {
		expect(p.parse("Aligale̍siya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (yba)", () => {
		expect(p.parse("Alɛ̍fɛ̄susi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (yba)", () => {
		expect(p.parse("Alifili̍pāyi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (yba)", () => {
		expect(p.parse("1 Alitɛsalona̍yīka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Alitɛsalona̍yīka 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (yba)", () => {
		expect(p.parse("I Alitɛsalona̍yīka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("I. Alitɛsalona̍yīka 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (yba)", () => {
		expect(p.parse("1 Iti̍mōti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Iti̍mōti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (yba)", () => {
		expect(p.parse("I Iti̍mōti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("I. Iti̍mōti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (yba)", () => {
		expect(p.parse("Ita̍yi̍tɔ̄ɔsi 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (yba)", () => {
		expect(p.parse("Ifa̍yi̍lɛ̄mɔn 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (yba)", () => {
		expect(p.parse("Ihi̍bru 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (yba)", () => {
		expect(p.parse("Ije̍mēehi 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (yba)", () => {
		expect(p.parse("1 Ipi̍ta 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ipi̍ta 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (yba)", () => {
		expect(p.parse("I Ipi̍ta 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("I. Ipi̍ta 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (yba)", () => {
		expect(p.parse("Iju̍udi 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (yba)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (yba)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Ijɔ̍ɔn - III Ijɔ̍ɔn").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Ijɔ̍ɔn – III Ijɔ̍ɔn").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Ijɔ̍ɔn — III Ijɔ̍ɔn").osis()).toEqual("1John.1-3John.1");
	});
});

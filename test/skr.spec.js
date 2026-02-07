"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/skr.js";

describe("Localized book Rev (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (skr)", () => {
		expect(p.parse("مُکاشفہ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (skr)", () => {
		expect(p.parse("متّی 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (skr)", () => {
		expect(p.parse("مرقس 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (skr)", () => {
		expect(p.parse("لُوقا 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (skr)", () => {
		expect(p.parse("1 یُوحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. یُوحنّا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (skr)", () => {
		expect(p.parse("2 یُوحنّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. یُوحنّا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (skr)", () => {
		expect(p.parse("3 یُوحنّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. یُوحنّا 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (skr)", () => {
		expect(p.parse("یُوحنّا 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (skr)", () => {
		expect(p.parse("اعمال 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (skr)", () => {
		expect(p.parse("رومیاں 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رومیوں 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (skr)", () => {
		expect(p.parse("1کُرِنتھِیوں 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (skr)", () => {
		expect(p.parse("2کُرِنتھِیوں 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (skr)", () => {
		expect(p.parse("کلُسِّیوں 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (skr)", () => {
		expect(p.parse("گلتِیوں 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (skr)", () => {
		expect(p.parse("اِفِسیوں 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (skr)", () => {
		expect(p.parse("فِلِپّیوں 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (skr)", () => {
		expect(p.parse("1 تھِسّلُنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تھِسّلُنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (skr)", () => {
		expect(p.parse("2 تھِسّلُنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تھِسّلُنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (skr)", () => {
		expect(p.parse("1تھِسّلُنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (skr)", () => {
		expect(p.parse("2تھِسّلُنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (skr)", () => {
		expect(p.parse("1 تِیمُتھِیُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تِیمُتھِیُس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (skr)", () => {
		expect(p.parse("2 تِیمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تِیمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (skr)", () => {
		expect(p.parse("طِطُس 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (skr)", () => {
		expect(p.parse("فِلیمون 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (skr)", () => {
		expect(p.parse("عبرانیاں 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عبرانیوں 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (skr)", () => {
		expect(p.parse("یعقُوب 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (skr)", () => {
		expect(p.parse("1 پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. پطرس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (skr)", () => {
		expect(p.parse("2 پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. پطرس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (skr)", () => {
		expect(p.parse("یہُوداہ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (skr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (skr)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 یُوحنّا - 3 یُوحنّا").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 یُوحنّا – 3 یُوحنّا").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 یُوحنّا — 3 یُوحنّا").osis()).toEqual("1John.1-3John.1");
	});
});

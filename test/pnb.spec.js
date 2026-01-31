"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/pnb.js";

describe("Localized book Rev (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (pnb)", () => {
		expect(p.parse("مُکاشفہ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (pnb)", () => {
		expect(p.parse("Matí Dí Injíl 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matí 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("متّی 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (pnb)", () => {
		expect(p.parse("Marqus Dí Injíl 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marqus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مرقس 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (pnb)", () => {
		expect(p.parse("Lúqá Dí Injíl 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لُوقا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lúqá 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pnb)", () => {
		expect(p.parse("۱-یُوحنّا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pnb)", () => {
		expect(p.parse("۲یُوحنّا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (pnb)", () => {
		expect(p.parse("۳-یُوحنّا 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (pnb)", () => {
		expect(p.parse("Yúhanná Dí Injíl 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yúhanná 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("یُوحنّا 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (pnb)", () => {
		expect(p.parse("Rasulan De AʼAmal 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Rasulan 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("اعمال 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (pnb)", () => {
		expect(p.parse("رُومِیوں 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pnb)", () => {
		expect(p.parse("۱-کُرِنتھِیوں 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pnb)", () => {
		expect(p.parse("۲-کُرِنتھِیوں 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (pnb)", () => {
		expect(p.parse("کُلُسِّیوں 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (pnb)", () => {
		expect(p.parse("گلتِیوں 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (pnb)", () => {
		expect(p.parse("اِفسِیوں 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (pnb)", () => {
		expect(p.parse("فِلِپّیوں 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pnb)", () => {
		expect(p.parse("۱-تھِسّلُنِیکوں 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pnb)", () => {
		expect(p.parse("۲-تھِسّلُنِیکوں 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pnb)", () => {
		expect(p.parse("۱-تِیمُتِھیُس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pnb)", () => {
		expect(p.parse("۲-تِیمُتِھیُس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (pnb)", () => {
		expect(p.parse("طِطُس 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (pnb)", () => {
		expect(p.parse("فلِیمون 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (pnb)", () => {
		expect(p.parse("عِبرانیوں 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (pnb)", () => {
		expect(p.parse("یعقُوب 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pnb)", () => {
		expect(p.parse("۱-پطرس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pnb)", () => {
		expect(p.parse("۲-پطرس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (pnb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (pnb)", () => {
		expect(p.parse("یہُوداہ 1:1").osis()).toEqual("Jude.1.1");
	});
});

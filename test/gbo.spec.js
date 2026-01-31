"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gbo.js";

describe("Localized book Rev (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gbo)", () => {
		expect(p.parse("Wlɛ̀velesɔ̌n 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Wlɛ̀ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gbo)", () => {
		expect(p.parse("Matiɔ̌n 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gbo)", () => {
		expect(p.parse("Mǎkè 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gbo)", () => {
		expect(p.parse("Lǔkù 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gbo)", () => {
		expect(p.parse("1Jɔ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gbo)", () => {
		expect(p.parse("2Jɔ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gbo)", () => {
		expect(p.parse("3 Jɔ̀ɔ̌n 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jɔ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gbo)", () => {
		expect(p.parse("1 Jɔ̀ɔ̌n 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jɔ̀ɔ̌n 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gbo)", () => {
		expect(p.parse("2 Jɔ̀ɔ̌n 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jɔ̀ɔ̌n 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gbo)", () => {
		expect(p.parse("Jɔ̀ɔ̌n 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gbo)", () => {
		expect(p.parse("Ǎkè 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ak 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gbo)", () => {
		expect(p.parse("Wlǔmɔ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Wlm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gbo)", () => {
		expect(p.parse("1 Kwnɛtiɛ̌ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kwnɛtiɛ̌ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gbo)", () => {
		expect(p.parse("2 Kwnɛtiɛ̌ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kwnɛtiɛ̌ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gbo)", () => {
		expect(p.parse("1Kwnɛ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gbo)", () => {
		expect(p.parse("2Kwnɛ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gbo)", () => {
		expect(p.parse("Klasɔ̌n 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kla 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gbo)", () => {
		expect(p.parse("Kalesiɛ̌n 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gbo)", () => {
		expect(p.parse("Ifisiɛ̌n 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ifi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gbo)", () => {
		expect(p.parse("Flepiɛ̌n 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gbo)", () => {
		expect(p.parse("1 Tɛseloniǎ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛseloniǎ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gbo)", () => {
		expect(p.parse("2 Tɛseloniǎ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛseloniǎ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gbo)", () => {
		expect(p.parse("1Tɛ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gbo)", () => {
		expect(p.parse("2Tɛ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gbo)", () => {
		expect(p.parse("1 Timɛtě 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timɛtě 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gbo)", () => {
		expect(p.parse("2 Timɛtě 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timɛtě 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gbo)", () => {
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gbo)", () => {
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gbo)", () => {
		expect(p.parse("Taetɔ̌ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tae 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gbo)", () => {
		expect(p.parse("Falimɔ̌ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fmɔ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gbo)", () => {
		expect(p.parse("Hiblǔ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gbo)", () => {
		expect(p.parse("Jìmǐse 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jm 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gbo)", () => {
		expect(p.parse("1 Pitɛ̌ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pitɛ̌ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gbo)", () => {
		expect(p.parse("2 Pitɛ̌ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pitɛ̌ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gbo)", () => {
		expect(p.parse("1Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gbo)", () => {
		expect(p.parse("2Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gbo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gbo)", () => {
		expect(p.parse("Jùǔ 1:1").osis()).toEqual("Jude.1.1");
	});
});

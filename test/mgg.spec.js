"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mgg.js";

describe("Localized book Rev (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mgg)", () => {
		expect(p.parse("Apokalîs 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apo 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mgg)", () => {
		expect(p.parse("Matyôos 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mgg)", () => {
		expect(p.parse("Máákus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mák 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mgg)", () => {
		expect(p.parse("Lókas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lók 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mgg)", () => {
		expect(p.parse("1Zw 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mgg)", () => {
		expect(p.parse("2Zw 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mgg)", () => {
		expect(p.parse("3 Zwâŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Zw 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mgg)", () => {
		expect(p.parse("1 Zwâŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zwâŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mgg)", () => {
		expect(p.parse("2 Zwâŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zwâŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mgg)", () => {
		expect(p.parse("Zwâŋ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Zwâ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mgg)", () => {
		expect(p.parse("Misāwā 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mis 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mgg)", () => {
		expect(p.parse("Lomɛ̂ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mgg)", () => {
		expect(p.parse("1 Kolɛ̂ŋt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolɛ̂ŋt 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mgg)", () => {
		expect(p.parse("2 Kolɛ̂ŋt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolɛ̂ŋt 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mgg)", () => {
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mgg)", () => {
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mgg)", () => {
		expect(p.parse("Kolosyɛ̂ŋ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mgg)", () => {
		expect(p.parse("Galât 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mgg)", () => {
		expect(p.parse("Efezyɛ̂ŋ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mgg)", () => {
		expect(p.parse("Filipyɛ̂ŋ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mgg)", () => {
		expect(p.parse("1 Tesalonisyɛ̂ŋ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonisyɛ̂ŋ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mgg)", () => {
		expect(p.parse("2 Tesalonisyɛ̂ŋ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonisyɛ̂ŋ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mgg)", () => {
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mgg)", () => {
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mgg)", () => {
		expect(p.parse("1 Tímotê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tímotê 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mgg)", () => {
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mgg)", () => {
		expect(p.parse("2 Timotê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotê 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mgg)", () => {
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mgg)", () => {
		expect(p.parse("Tît 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mgg)", () => {
		expect(p.parse("Filemɔ̂ŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mgg)", () => {
		expect(p.parse("Eɓelê 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eɓe 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mgg)", () => {
		expect(p.parse("Zwâk 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zwk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mgg)", () => {
		expect(p.parse("1 Pyɛ̂ɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pyɛ̂ɛ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mgg)", () => {
		expect(p.parse("2 Pyɛ̂ɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pyɛ̂ɛ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mgg)", () => {
		expect(p.parse("1Py 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mgg)", () => {
		expect(p.parse("2Py 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mgg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mgg)", () => {
		expect(p.parse("Yûuɗ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yûɗ 1:1").osis()).toEqual("Jude.1.1");
	});
});

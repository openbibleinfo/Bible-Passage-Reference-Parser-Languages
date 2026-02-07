"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/key.js";

describe("Localized book Rev (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (key)", () => {
		expect(p.parse("ప్రకటన 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ప్రక 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (key)", () => {
		expect(p.parse("మత్తయి 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("మత్త 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (key)", () => {
		expect(p.parse("మార్కు 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (key)", () => {
		expect(p.parse("లూకా 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (key)", () => {
		expect(p.parse("1 యోహాను 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 యోహా 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. యోహాను 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. యోహా 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (key)", () => {
		expect(p.parse("2 యోహాను 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 యోహా 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. యోహాను 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. యోహా 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (key)", () => {
		expect(p.parse("3 యోహాను 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 యోహా 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. యోహాను 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. యోహా 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (key)", () => {
		expect(p.parse("యోహాను 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("యోహా 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (key)", () => {
		expect(p.parse("బారికుల్ కమ్మొ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("బారి కమ్మొ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (key)", () => {
		expect(p.parse("రోమా 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (key)", () => {
		expect(p.parse("1 కొరింది 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 కొరి 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. కొరింది 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. కొరి 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (key)", () => {
		expect(p.parse("2 కొరింది 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 కొరి 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. కొరింది 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. కొరి 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (key)", () => {
		expect(p.parse("కొలస్సి 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("కొల 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (key)", () => {
		expect(p.parse("గలతి 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("గల 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (key)", () => {
		expect(p.parse("ఎపెసి 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ఎపె 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (key)", () => {
		expect(p.parse("పిలిప్పి 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("పిలి 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (key)", () => {
		expect(p.parse("1 దెస్స 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. దెస్స 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (key)", () => {
		expect(p.parse("2 దెస్స 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. దెస్స 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (key)", () => {
		expect(p.parse("1 తిమోతి 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 తిమో 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. తిమోతి 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. తిమో 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (key)", () => {
		expect(p.parse("2 తిమోతి 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 తిమో 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. తిమోతి 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. తిమో 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (key)", () => {
		expect(p.parse("తీతు 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (key)", () => {
		expect(p.parse("పిలేమోను 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("పిలె 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (key)", () => {
		expect(p.parse("ఏబ్రీ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (key)", () => {
		expect(p.parse("యాకోబు 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("యాకో 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (key)", () => {
		expect(p.parse("1 పేతురు 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 పేతు 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. పేతురు 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. పేతు 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (key)", () => {
		expect(p.parse("2 పేతురు 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 పేతు 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. పేతురు 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. పేతు 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (key)", () => {
		expect(p.parse("యూదా 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (key)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (key)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 యోహాను - 3 యోహాను").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 యోహాను – 3 యోహాను").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 యోహాను — 3 యోహాను").osis()).toEqual("1John.1-3John.1");
	});
});

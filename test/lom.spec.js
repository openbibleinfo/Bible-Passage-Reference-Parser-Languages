"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lom.js";

describe("Localized book Rev (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lom)", () => {
		expect(p.parse("Faa Wuloai Kɛnɛ Ma 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lom)", () => {
		expect(p.parse("Mafiyu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lom)", () => {
		expect(p.parse("Maki 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lom)", () => {
		expect(p.parse("Luki 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lom)", () => {
		expect(p.parse("1Jɔ̃ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lom)", () => {
		expect(p.parse("2Jɔ̃ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lom)", () => {
		expect(p.parse("3Jɔ̃ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lom)", () => {
		expect(p.parse("Jɔ̃ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lom)", () => {
		expect(p.parse("Te Ɣɛɛ Vaitiɛ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lom)", () => {
		expect(p.parse("Loomɛitiɛ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lom)", () => {
		expect(p.parse("1Kɔlĩitiɛ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lom)", () => {
		expect(p.parse("Kɔlĩitiɛ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lom)", () => {
		expect(p.parse("Kolasaitiɛ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lom)", () => {
		expect(p.parse("Galeesiaitiɛ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lom)", () => {
		expect(p.parse("Ɛfɛsɔitiɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lom)", () => {
		expect(p.parse("Felepaitiɛ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lom)", () => {
		expect(p.parse("1 Tɛsɛlonaikaitiɛ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsɛlonaikaitiɛ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lom)", () => {
		expect(p.parse("2 Tɛsɛlonaikaitiɛ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsɛlonaikaitiɛ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lom)", () => {
		expect(p.parse("1 Temete 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Temete 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lom)", () => {
		expect(p.parse("2 Temete 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Temete 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lom)", () => {
		expect(p.parse("Taitɔ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lom)", () => {
		expect(p.parse("Failimɔ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lom)", () => {
		expect(p.parse("Hiiƃuluitiɛ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lom)", () => {
		expect(p.parse("Jĩi 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lom)", () => {
		expect(p.parse("1 Pite 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pite 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lom)", () => {
		expect(p.parse("2 Pite 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pite 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lom)", () => {
		expect(p.parse("Juu 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kfw.js";

describe("Localized book Rev (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kfw)", () => {
		expect(p.parse("Chongmalar 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Chonglar 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kfw)", () => {
		expect(p.parse("Matthew 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kfw)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kfw)", () => {
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kfw)", () => {
		expect(p.parse("1 John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kfw)", () => {
		expect(p.parse("2 John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kfw)", () => {
		expect(p.parse("3 John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kfw)", () => {
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kfw)", () => {
		expect(p.parse("Chuontho 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Chuon 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kfw)", () => {
		expect(p.parse("Rome 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kfw)", () => {
		expect(p.parse("1 Corinthia 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthia 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kfw)", () => {
		expect(p.parse("2 Corinthia 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthia 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kfw)", () => {
		expect(p.parse("Colossia 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kfw)", () => {
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kfw)", () => {
		expect(p.parse("Ephesia 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kfw)", () => {
		expect(p.parse("Philippia 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kfw)", () => {
		expect(p.parse("1 Thessalonia 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonia 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kfw)", () => {
		expect(p.parse("2 Thessalonia 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonia 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kfw)", () => {
		expect(p.parse("1 Timothy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kfw)", () => {
		expect(p.parse("2 Timothy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kfw)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kfw)", () => {
		expect(p.parse("Philemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philem 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kfw)", () => {
		expect(p.parse("Hebrew 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kfw)", () => {
		expect(p.parse("James 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jam 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kfw)", () => {
		expect(p.parse("1 Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kfw)", () => {
		expect(p.parse("2 Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kfw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kfw)", () => {
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

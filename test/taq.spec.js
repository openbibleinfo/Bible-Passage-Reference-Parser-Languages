"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/taq.js";

describe("Localized book Rev (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (taq)", () => {
		expect(p.parse("Tănăfalilt 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tăn. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (taq)", () => {
		expect(p.parse("Mătti 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (taq)", () => {
		expect(p.parse("Marqəs 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (taq)", () => {
		expect(p.parse("Luqa 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (taq)", () => {
		expect(p.parse("1 Exya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Exya 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (taq)", () => {
		expect(p.parse("2 Exya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Exya 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (taq)", () => {
		expect(p.parse("3 Exya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Exya 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (taq)", () => {
		expect(p.parse("Exya 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (taq)", () => {
		expect(p.parse("Ijităn n-inəmmušal 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ijităn 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (taq)", () => {
		expect(p.parse("Kăl-Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (taq)", () => {
		expect(p.parse("1 Kăl-Kurənta 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kur. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kăl-Kurənta 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kur. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (taq)", () => {
		expect(p.parse("2 Kăl-Kurənta 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kur. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kăl-Kurənta 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kur. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (taq)", () => {
		expect(p.parse("Kăl-Kuləs 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kls 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (taq)", () => {
		expect(p.parse("Kăl-Gălasya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Găl 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (taq)", () => {
		expect(p.parse("Kăl-Ifăsus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ifs 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (taq)", () => {
		expect(p.parse("Kăl-Fəlibb 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flb 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (taq)", () => {
		expect(p.parse("1 Kăl-Tăslonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tăs. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Kăl-Tăslonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tăs. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (taq)", () => {
		expect(p.parse("2 Kăl-Tăslonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tăs. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Kăl-Tăslonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tăs. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (taq)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (taq)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (taq)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (taq)", () => {
		expect(p.parse("Fălyamon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flmn 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (taq)", () => {
		expect(p.parse("Ɣăbranităn 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ɣăb. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (taq)", () => {
		expect(p.parse("Yaqub 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (taq)", () => {
		expect(p.parse("1 Bəṭrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bəṭrus 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (taq)", () => {
		expect(p.parse("2 Bəṭrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bəṭrus 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (taq)", () => {
		expect(p.parse("Hudd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle ranges (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (taq)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
	});
});
describe("Parser helper should handle chapters (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (taq)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
	});
});
describe("Parser helper should handle book ranges (taq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (taq)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Exya - 3 Exya").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Exya – 3 Exya").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Exya — 3 Exya").osis()).toEqual("1John.1-3John.1");
	});
});

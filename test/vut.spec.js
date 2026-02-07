"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/vut.js";

describe("Localized book Rev (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (vut)", () => {
		expect(p.parse("Àpòkàlîb 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Àp 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (vut)", () => {
		expect(p.parse("Màtíyò 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mà 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (vut)", () => {
		expect(p.parse("Máàrk 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Má 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (vut)", () => {
		expect(p.parse("Lúkàs 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lú 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (vut)", () => {
		expect(p.parse("1 Jâŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jâ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jâŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jâ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (vut)", () => {
		expect(p.parse("2 Jâŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jâ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jâŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jâ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (vut)", () => {
		expect(p.parse("3 Jâŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jâ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jâŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jâ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (vut)", () => {
		expect(p.parse("Jâŋ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jâ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (vut)", () => {
		expect(p.parse("Ə́rɨ́b nùb tómé yi ə́llé 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ə 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (vut)", () => {
		expect(p.parse("Nùb róòm 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (vut)", () => {
		expect(p.parse("1 Nùb Kòréèntə̀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Nù 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Nùb Kòréèntə̀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Nù 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (vut)", () => {
		expect(p.parse("2 Nùb Kòréèntə̀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Nù 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Nùb Kòréèntə̀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Nù 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (vut)", () => {
		expect(p.parse("Nùb Kòlóòs 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Nù 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (vut)", () => {
		expect(p.parse("Nùb Gàlàtíì 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Nù 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (vut)", () => {
		expect(p.parse("Nùb Èféès 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Nù 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (vut)", () => {
		expect(p.parse("Nùb Fìlíìb 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Nù 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (vut)", () => {
		expect(p.parse("1 Nùb Tèsàlòníìk 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Nù 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Nùb Tèsàlòníìk 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Nù 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (vut)", () => {
		expect(p.parse("2 Nùb Tèsàlòníìk 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Nù 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Nùb Tèsàlòníìk 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Nù 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (vut)", () => {
		expect(p.parse("1 Tìmòtê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tì 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tìmòtê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tì 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (vut)", () => {
		expect(p.parse("2 Tìmòtê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tì 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tìmòtê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tì 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (vut)", () => {
		expect(p.parse("Tît 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tî 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (vut)", () => {
		expect(p.parse("Fìlèmôŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fì 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (vut)", () => {
		expect(p.parse("Gbàŋ Èbɨ̀rə́ə̀ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Gb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (vut)", () => {
		expect(p.parse("Jâk 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jâ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (vut)", () => {
		expect(p.parse("1 Píyéèr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pí 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Píyéèr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pí 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (vut)", () => {
		expect(p.parse("2 Píyéèr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pí 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Píyéèr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pí 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (vut)", () => {
		expect(p.parse("Jûdə̀ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jû 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (vut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (vut)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jâŋ - 3 Jâŋ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jâŋ – 3 Jâŋ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jâŋ — 3 Jâŋ").osis()).toEqual("1John.1-3John.1");
	});
});
